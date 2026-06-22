import { useState } from "react";
import { Link } from "react-router-dom";

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
            className="w-full h-full object-cover"
            src="/videos/hero.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
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
          className="inline-block font-cinzel text-sm tracking-[0.2em] text-primary border border-primary px-8 py-3 hover:bg-primary hover:text-primary-foreground transition-colors"
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
