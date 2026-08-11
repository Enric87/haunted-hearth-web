import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Play, Volume2, VolumeX } from "lucide-react";

import Layout from "@/components/Layout";
import Countdown from "@/components/Countdown";
import AuthorCard from "@/components/AuthorCard";
import AuthorModal from "@/components/AuthorModal";
import SectionSeparator from "@/components/SectionSeparator";

const authors = [
  {
    name: "POE",
    image: "/images/poe.png",
    description: "Gótico y obsesivo. Culpa, sombras y un cuervo que no se marcha.",
    bio: "Edgar Allan Poe (Boston, 19 de enero de 1809 - Baltimore, 7 de octubre de 1849).\n\nEscritor, poeta y periodista estadounidense. Maestro del relato corto, de los cuentos de terror y de la novela detectivesca. Fue considerado uno de los grandes renovadores de la novela gótica. Su figura y su obra fueron y siguen siendo un referente en la literatura de su país y del resto del mundo, influyendo a escritores como Kafka o Arthur Conan Doyle. Entre sus historias más escalofriantes destacan: El cuervo, El gato negro, El pozo y el péndulo, La caída de la casa Usher y El corazón delator.",
  },
  {
    name: "KING",
    image: "/images/king.png",
    description: "El terror vive en lo cotidiano… hasta que lo normal se rompe.",
    bio: "Stephen King (Portland, Maine, 21 de septiembre de 1947).\n\nEscritor estadounidense, también conocido por el pseudónimo Richard Bachman. Está considerado como uno de los grandes nombres de la novela de terror, la ficción sobrenatural, el misterio, la ciencia ficción y la literatura fantástica. Muchas de sus novelas han sido adaptadas al cine y a la televisión. También ha trabajado ocasionalmente como guionista, productor y actor. Entre sus obras más conocidas destacan: Carrie, El resplandor, It, La milla verde, Misery, El misterio de Salem's Lot, Cementerio de animales y La torre oscura.",
  },
  {
    name: "LOVECRAFT",
    image: "/images/lovecraft.png",
    description: "Horror cósmico. Símbolos arcanos. Miedo a lo innombrable.",
    bio: "H. P. Lovecraft (Providence, 20 de agosto de 1890 - Providence, 15 de marzo de 1937).\n\nEscritor estadounidense, autor de relatos y novelas de terror. Aportó su propia mitología, conocida como Los mitos de Cthulhu. Su obra constituye uno de los grandes clásicos del horror cósmico. A partir de los años 60, sus relatos fueron adaptados al cómic por diversos autores y su imaginario ha influido en el cine y en múltiples creadores posteriores. Entre sus obras más notables destacan: La llamada de Cthulhu, El gato de Ulthar, El terrible anciano y La sombra sobre Innsmouth.",
  },
];

export default function Index() {
  const [selectedAuthor, setSelectedAuthor] = useState<typeof authors[number] | null>(null);
  const [musicEnabled, setMusicEnabled] = useState(false);
  const [videoStarted, setVideoStarted] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const syncAudioToVideo = () => {
    const video = videoRef.current;
    const audio = audioRef.current;

    if (!video || !audio || !Number.isFinite(audio.duration) || audio.duration === 0) {
      return;
    }

    const targetTime = video.currentTime % audio.duration;
    if (Math.abs(audio.currentTime - targetTime) > 0.35) {
      audio.currentTime = targetTime;
    }
  };

  const playMusic = async () => {
    const video = videoRef.current;
    const audio = audioRef.current;

    if (!video || !audio) {
      return;
    }

    syncAudioToVideo();
    audio.volume = 0.75;

    try {
      await audio.play();
    } catch {
      setMusicEnabled(false);
    }
  };

  const toggleMusic = async () => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    if (musicEnabled) {
      audio.pause();
      setMusicEnabled(false);
      return;
    }

    setMusicEnabled(true);
    await playMusic();
  };

  const startVideoWithMusic = async () => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    setVideoStarted(true);
    setMusicEnabled(true);

    try {
      await video.play();
      await playMusic();
    } catch {
      setMusicEnabled(false);
      setVideoStarted(false);
    }
  };

  return (
    <Layout footerVariant="home">
      {/* Hero: Logo + Info */}
      <section className="flex flex-col items-center text-center px-6 py-12 md:py-20">
        <img
          src="/images/logo.png"
          alt="Halloween Vilamalla"
          className="w-[42rem] md:w-[58rem] lg:w-[68rem] mb-8"
        />
        <p className="font-cormorant text-3xl md:text-5xl tracking-[0.12em] text-gold mb-4">
          31 de octubre de 2026
        </p>
        <p className="text-lg md:text-xl tracking-[0.2em] text-muted-foreground mb-8">
          de 18h a 22h
        </p>
        <Countdown />
      </section>

      <SectionSeparator />

      {/* Claim */}
      <section className="text-center px-6 py-8">
        <h1 className="font-cormorant text-3xl md:text-5xl lg:text-6xl font-semibold tracking-[0.04em] text-foreground uppercase">
          LITERALMENTE<br />TERRORÍFICO
        </h1>
      </section>

      <SectionSeparator />

      {/* Video Hero */}
      <section className="w-full py-8">
        <div className="relative aspect-video bg-card overflow-hidden">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            src="/videos/hero.mp4"
            muted
            loop
            playsInline
            onPlay={() => {
              setVideoStarted(true);
              if (musicEnabled) void playMusic();
            }}
            onPause={() => {
              audioRef.current?.pause();
              setVideoStarted(false);
            }}
            onSeeking={syncAudioToVideo}
            onTimeUpdate={() => {
              if (musicEnabled) syncAudioToVideo();
            }}
          />
          <audio ref={audioRef} src="/audio/horror-trailer.mp3" loop preload="auto" />
          {!videoStarted && (
            <button
              type="button"
              onClick={startVideoWithMusic}
              className="absolute inset-0 flex items-center justify-center bg-background/20 text-primary transition-colors hover:bg-background/10"
              aria-label="Reproducir video con música"
            >
              <span className="inline-flex h-20 w-20 items-center justify-center rounded-full border border-primary/80 bg-background/70 backdrop-blur-sm transition-transform hover:scale-105">
                <Play className="ml-1 h-9 w-9 fill-current" />
              </span>
            </button>
          )}
          <button
            type="button"
            onClick={toggleMusic}
            className="absolute bottom-4 right-4 inline-flex h-11 w-11 items-center justify-center border border-primary/70 bg-background/70 text-primary backdrop-blur-sm transition-colors hover:bg-primary hover:text-primary-foreground"
            aria-label={musicEnabled ? "Silenciar música" : "Activar música"}
          >
            {musicEnabled ? <Volume2 className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
          </button>
        </div>
      </section>

      <SectionSeparator />

      {/* Authors */}
      <section className="px-6 py-12 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {authors.map((a) => (
            <AuthorCard key={a.name} {...a} onClick={() => setSelectedAuthor(a)} />
          ))}
        </div>
      </section>

      <SectionSeparator />

      {/* CTA */}
      <section className="text-center px-6 py-12">
        <p className="font-cormorant text-xl md:text-2xl lg:text-3xl text-gold italic mb-8 max-w-2xl mx-auto">
          Año tras año incrementamos la angustia, porque la imaginación y la creatividad no tienen límites.
        </p>
        <Link
          to="/la-familia"
          className="inline-flex min-w-[320px] items-center justify-center font-cinzel text-sm tracking-[0.2em] text-primary border border-primary px-8 py-3 hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          VER LA FAMILIA
        </Link>
      </section>

      <SectionSeparator />

      {/* Author Bio Modal */}
      <AuthorModal
        author={selectedAuthor}
        open={!!selectedAuthor}
        onOpenChange={(open) => { if (!open) setSelectedAuthor(null); }}
      />
    </Layout>
  );
}
