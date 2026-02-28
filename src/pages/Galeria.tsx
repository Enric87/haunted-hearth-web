import { useState } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import Layout from "@/components/Layout";
import SectionSeparator from "@/components/SectionSeparator";

// Placeholder items — replace with real content
const items = Array.from({ length: 9 }, (_, i) => ({
  id: i,
  type: i % 3 === 0 ? "video" : "photo",
  src: `/placeholder.svg`,
  alt: `Evidencia ${i + 1}`,
}));

const filters = ["Todo", "Fotos", "Vídeos"];

export default function Galeria() {
  const [filter, setFilter] = useState("Todo");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = items.filter((item) => {
    if (filter === "Fotos") return item.type === "photo";
    if (filter === "Vídeos") return item.type === "video";
    return true;
  });

  return (
    <Layout>
      <section className="px-6 py-12 md:py-20 max-w-3xl mx-auto text-center">
        <h1 className="font-cinzel text-3xl md:text-5xl font-bold text-foreground mb-6 tracking-wider">
          Lo que ya despertamos
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-2">
          No son recuerdos. Son pruebas.
        </p>
        <p className="text-muted-foreground">Cada año, algo queda grabado.</p>
      </section>

      {/* Filters */}
      <div className="flex justify-center gap-4 px-6 mb-8">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`font-cinzel text-xs tracking-[0.2em] px-4 py-2 border transition-colors ${
              filter === f
                ? "border-primary text-primary"
                : "border-border text-muted-foreground hover:text-foreground"
            }`}
          >
            {f.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Grid */}
      <section className="px-6 max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {filtered.map((item) => (
            <button
              key={item.id}
              onClick={() => setLightbox(item.id)}
              className="aspect-square bg-secondary border border-border overflow-hidden hover:opacity-80 transition-opacity"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </section>

      <SectionSeparator />

      <section className="text-center pb-8">
        <Link
          to="/"
          className="inline-block font-cinzel text-sm tracking-[0.2em] text-primary border border-primary px-8 py-3 hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          VOLVER A LA LLAMADA
        </Link>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-6"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-foreground hover:text-primary"
            onClick={() => setLightbox(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={items[lightbox]?.src}
            alt={items[lightbox]?.alt}
            className="max-w-full max-h-[80vh] object-contain"
          />
        </div>
      )}
    </Layout>
  );
}
