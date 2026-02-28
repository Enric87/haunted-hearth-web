import { Link } from "react-router-dom";
import { Play } from "lucide-react";
import Layout from "@/components/Layout";
import Countdown from "@/components/Countdown";
import AuthorCard from "@/components/AuthorCard";
import SectionSeparator from "@/components/SectionSeparator";

const authors = [
  {
    name: "POE",
    image: "/images/poe.png",
    description: "Gótico y obsesivo. Culpa, sombras y un cuervo que no se marcha.",
  },
  {
    name: "KING",
    image: "/images/king.png",
    description: "El terror vive en lo cotidiano… hasta que lo normal se rompe.",
  },
  {
    name: "LOVECRAFT",
    image: "/images/lovecraft.png",
    description: "Horror cósmico. Símbolos arcanos. Miedo a lo innombrable.",
  },
];

export default function Index() {
  return (
    <Layout footerVariant="home">
      {/* Hero: Logo + Info */}
      <section className="flex flex-col items-center text-center px-6 py-12 md:py-20">
        <img
          src="/images/logo.png"
          alt="Halloween Vilamalla"
          className="w-80 md:w-[28rem] lg:w-[32rem] mb-8"
        />
        <p className="font-cinzel text-lg md:text-xl tracking-[0.15em] text-gold mb-2">
          31 de octubre de 2026
        </p>
        <p className="text-sm tracking-[0.2em] text-muted-foreground mb-8">
          18h a 22h
        </p>
        <Countdown />
      </section>

      <SectionSeparator />

      {/* Claim */}
      <section className="text-center px-6 py-8">
        <h1 className="font-cinzel text-3xl md:text-5xl lg:text-6xl font-bold tracking-[0.08em] text-foreground">
          LITERALMENTE TERRORÍFICO
        </h1>
      </section>

      <SectionSeparator />

      {/* Video Hero */}
      <section className="px-6 max-w-4xl mx-auto py-8">
        <div className="relative aspect-video bg-card rounded-sm overflow-hidden border border-border flex items-center justify-center">
          {/* Placeholder until video is ready */}
          <div className="absolute inset-0 bg-background/60" />
          <button
            className="relative z-10 w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary flex items-center justify-center glow-blood animate-pulse-glow transition-transform hover:scale-110"
            aria-label="Reproducir vídeo"
          >
            <Play className="w-7 h-7 md:w-9 md:h-9 text-primary-foreground ml-1" />
          </button>
        </div>
        <div className="text-center mt-8">
          <Link
            to="/el-ritual"
            className="inline-block font-cinzel text-sm tracking-[0.2em] text-primary border border-primary px-8 py-3 hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            DESCIENDE AL RITUAL
          </Link>
        </div>
      </section>

      <SectionSeparator />

      {/* Authors */}
      <section className="px-6 py-12 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {authors.map((a) => (
            <AuthorCard key={a.name} {...a} />
          ))}
        </div>
      </section>

      <SectionSeparator />
    </Layout>
  );
}
