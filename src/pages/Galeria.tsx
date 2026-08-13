import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Layout from "@/components/Layout";
import SectionSeparator from "@/components/SectionSeparator";
import PosterCard from "@/components/PosterCard";
import PosterModal from "@/components/PosterModal";
import { galeriaData, type MediaItem, type Person } from "@/data/galeria";

type FilterType = "Rostros" | "Fotos" | "Videos";

const filterLabels: Record<FilterType, string> = {
  Rostros: "ROSTROS",
  Fotos: "FOTOS",
  Videos: "VÍDEOS",
};

const yearsWithRostros = ["2025", "2026"];

const emptyTemplates: Record<FilterType, string[]> = {
  Rostros: ["Rostro 1", "Rostro 2", "Rostro 3"],
  Fotos: ["Foto 1", "Foto 2", "Foto 3"],
  Videos: ["Vídeo 1", "Vídeo 2", "Vídeo 3"],
};

export default function Galeria() {
  const [selectedYear, setSelectedYear] = useState("2024");
  const [selectedFilter, setSelectedFilter] = useState<FilterType>("Fotos");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [modalPersonIndex, setModalPersonIndex] = useState<number | null>(null);

  const yearData = galeriaData.find((d) => d.year === selectedYear)!;
  const canShowRostros = yearsWithRostros.includes(selectedYear);

  const filters: FilterType[] = canShowRostros ? ["Rostros", "Fotos", "Videos"] : ["Fotos", "Videos"];

  const handleYearChange = (year: string) => {
    setSelectedYear(year);
    setSelectedFilter(yearsWithRostros.includes(year) ? "Rostros" : "Fotos");
  };

  const showPosters = selectedFilter === "Rostros";
  const showPhotos = selectedFilter === "Fotos";
  const showVideos = selectedFilter === "Videos";
  const lightbox = lightboxIndex !== null ? yearData.photos[lightboxIndex] ?? null : null;
  const modalPerson = modalPersonIndex !== null ? yearData.people[modalPersonIndex] ?? null : null;

  const showIntro = selectedYear === "2024" && yearData.introText;

  const closeLightbox = () => setLightboxIndex(null);
  const closePosterModal = () => setModalPersonIndex(null);
  const showPreviousPhoto = () => {
    if (lightboxIndex === null || yearData.photos.length === 0) return;
    setLightboxIndex((lightboxIndex - 1 + yearData.photos.length) % yearData.photos.length);
  };
  const showNextPhoto = () => {
    if (lightboxIndex === null || yearData.photos.length === 0) return;
    setLightboxIndex((lightboxIndex + 1) % yearData.photos.length);
  };
  const showPreviousPerson = () => {
    if (modalPersonIndex === null || yearData.people.length === 0) return;
    setModalPersonIndex((modalPersonIndex - 1 + yearData.people.length) % yearData.people.length);
  };
  const showNextPerson = () => {
    if (modalPersonIndex === null || yearData.people.length === 0) return;
    setModalPersonIndex((modalPersonIndex + 1) % yearData.people.length);
  };

  return (
    <Layout>
      <section className="px-6 py-12 md:py-20 max-w-3xl mx-auto text-center">
        <h1 className="font-cormorant text-3xl md:text-5xl font-semibold text-foreground mb-6 tracking-[0.04em] uppercase">
          LO QUE YA
          <br />
          DESPERTAMOS
        </h1>
        <p className="font-cormorant text-lg md:text-xl text-muted-foreground leading-[1.7] mb-2">
          No son reminiscencias. Son evidencias.
        </p>
        <p className="font-cormorant text-lg text-muted-foreground leading-[1.7]">
          Cada año, algo se revuelve en las sombras.
        </p>
      </section>

      <div className="flex flex-wrap justify-center gap-4 px-6 mb-6">
        {galeriaData.map((d) => (
          <button
            key={d.year}
            onClick={() => handleYearChange(d.year)}
            className={`inline-flex w-[96px] min-h-[44px] items-center justify-center text-center font-cinzel text-xs tracking-[0.2em] px-4 py-2 border transition-colors ${
              selectedYear === d.year
                ? "border-primary text-primary"
                : "border-border text-muted-foreground hover:text-foreground"
            }`}
          >
            {d.year}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-4 px-6 mb-8">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setSelectedFilter(f)}
            className={`inline-flex w-[96px] min-h-[44px] items-center justify-center text-center font-cinzel text-xs tracking-[0.2em] px-4 py-2 border transition-colors ${
              selectedFilter === f
                ? "border-primary text-primary"
                : "border-border text-muted-foreground hover:text-foreground"
            }`}
          >
            {filterLabels[f]}
          </button>
        ))}
      </div>

      <section key={selectedYear + selectedFilter} className="px-6 max-w-5xl mx-auto animate-fade-in">
        {showIntro && (
          <div className="text-center mb-10">
            {yearData.introText!.split("\n").map((line, i) => (
              <p key={i} className="font-cinzel text-muted-foreground text-lg leading-relaxed">
                {line}
              </p>
            ))}
          </div>
        )}

        {showPosters && yearData.people.length > 0 && (
          <div className="mb-10">
            <h2 className="font-cinzel text-sm tracking-[0.2em] text-muted-foreground mb-4">
              ROSTROS {selectedYear}
            </h2>
            <div className="grid grid-cols-1 gap-5 md:max-w-xl md:mx-auto lg:max-w-5xl lg:grid-cols-2 lg:gap-6">
              {yearData.people.map((person, index) => (
                <PosterCard key={person.id} person={person} onClick={() => setModalPersonIndex(index)} />
              ))}
            </div>
          </div>
        )}

        {showPosters && yearData.people.length === 0 && (
          <TemplateGrid
            items={emptyTemplates.Rostros}
            selectedYear={selectedYear}
            aspectClassName="aspect-[3/4]"
            text="Añade un rostro"
          />
        )}

        {showPhotos && yearData.photos.length > 0 && (
          <div className="mb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {yearData.photos.map((photo, i) => (
                <button
                  key={i}
                  onClick={() => setLightboxIndex(i)}
                  className="aspect-[4/3] bg-secondary border border-border overflow-hidden hover:opacity-80 transition-opacity card-hover"
                >
                  <img src={photo.src} alt={photo.alt} className="w-full h-full object-cover" loading="lazy" />
                </button>
              ))}
            </div>
          </div>
        )}

        {showPhotos && yearData.photos.length === 0 && (
          <TemplateGrid
            items={emptyTemplates.Fotos}
            selectedYear={selectedYear}
            aspectClassName="aspect-[4/3]"
            text="Añade una imagen"
          />
        )}

        {showVideos && yearData.videos.length > 0 && (
          <div className="mb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {yearData.videos.map((video, i) => (
                <div key={i} className="aspect-video bg-secondary border border-border overflow-hidden card-hover">
                  <video src={video.src} controls className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        )}

        {showVideos && yearData.videos.length === 0 && (
          <TemplateGrid
            items={emptyTemplates.Videos}
            selectedYear={selectedYear}
            aspectClassName="aspect-video"
            text="Añade un vídeo"
          />
        )}
      </section>

      <SectionSeparator />

      <section className="flex flex-col sm:flex-row items-center justify-center gap-4 pb-8 px-6">
        <Link
          to="/el-ritual"
          className="inline-flex w-[320px] min-h-[68px] items-center justify-center text-center leading-tight font-cinzel text-sm tracking-[0.2em] text-foreground border border-border px-8 py-3 hover:border-primary hover:text-primary transition-colors"
        >
          VER EL RITUAL
        </Link>
        <Link
          to="/el-acceso"
          className="inline-flex w-[320px] min-h-[68px] items-center justify-center text-center leading-tight font-cinzel text-sm tracking-[0.2em] text-primary border border-primary px-8 py-3 hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          VER EL ACCESO
        </Link>
      </section>

      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-6"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-6 right-6 text-foreground hover:text-primary"
            onClick={closeLightbox}
          >
            <X className="w-8 h-8" />
          </button>
          {yearData.photos.length > 1 && (
            <button
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 border border-border bg-background/70 text-foreground hover:text-primary hover:border-primary transition-colors p-3"
              onClick={(event) => {
                event.stopPropagation();
                showPreviousPhoto();
              }}
              aria-label="Foto anterior"
            >
              <ChevronLeft className="w-7 h-7" />
            </button>
          )}
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            className="max-w-full max-h-[80vh] object-contain"
            onClick={(event) => event.stopPropagation()}
          />
          {yearData.photos.length > 1 && (
            <button
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 border border-border bg-background/70 text-foreground hover:text-primary hover:border-primary transition-colors p-3"
              onClick={(event) => {
                event.stopPropagation();
                showNextPhoto();
              }}
              aria-label="Foto siguiente"
            >
              <ChevronRight className="w-7 h-7" />
            </button>
          )}
        </div>
      )}

      <PosterModal
        person={modalPerson}
        year={selectedYear}
        open={!!modalPerson}
        onOpenChange={(open) => !open && closePosterModal()}
        onPrevious={showPreviousPerson}
        onNext={showNextPerson}
        canNavigate={yearData.people.length > 1}
      />
    </Layout>
  );
}

interface TemplateGridProps {
  items: string[];
  selectedYear: string;
  aspectClassName: string;
  text: string;
}

function TemplateGrid({ items, selectedYear, aspectClassName, text }: TemplateGridProps) {
  return (
    <div className="mb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {items.map((label) => (
          <div
            key={`${selectedYear}-${label}`}
            className={`${aspectClassName} border border-dashed border-border bg-secondary/40 flex flex-col items-center justify-center text-center px-6`}
          >
            <span className="font-cinzel text-primary text-sm tracking-[0.2em]">{label}</span>
            <span className="mt-3 font-cormorant text-muted-foreground text-base">
              {text} en {selectedYear}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
