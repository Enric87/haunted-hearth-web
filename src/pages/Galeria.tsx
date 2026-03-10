import { useState } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import Layout from "@/components/Layout";
import SectionSeparator from "@/components/SectionSeparator";
import PosterCard from "@/components/PosterCard";
import PosterModal from "@/components/PosterModal";
import { galeriaData, type Person, type MediaItem } from "@/data/galeria";

type FilterType = "Rostros" | "Fotos" | "Vídeos";

export default function Galeria() {
  const [selectedYear, setSelectedYear] = useState("2024");
  const [selectedFilter, setSelectedFilter] = useState<FilterType>("Fotos");
  const [lightbox, setLightbox] = useState<MediaItem | null>(null);
  const [modalPerson, setModalPerson] = useState<Person | null>(null);

  const yearData = galeriaData.find((d) => d.year === selectedYear)!;
  const hasPosters = yearData.people.length > 0;

  const filters: FilterType[] =
  selectedYear === "2025" && hasPosters ?
  ["Rostros", "Fotos", "Vídeos"] :
  ["Fotos", "Vídeos"];

  const handleYearChange = (year: string) => {
    setSelectedYear(year);
    setSelectedFilter(year === "2025" ? "Rostros" : "Fotos");
  };

  const showPosters = hasPosters && selectedFilter === "Rostros";
  const showPhotos = selectedFilter === "Fotos";
  const showVideos = selectedFilter === "Vídeos";

  const hasContent =
  showPosters && yearData.people.length > 0 ||
  showPhotos && yearData.photos.length > 0 ||
  showVideos && yearData.videos.length > 0;

  const showIntro = selectedYear === "2024" && yearData.introText;

  return (
    <Layout>
      {/* Header */}
      <section className="px-6 py-12 md:py-20 max-w-3xl mx-auto text-center">
        <h1 className="font-cormorant text-3xl md:text-5xl font-semibold text-foreground mb-6 tracking-[0.04em] uppercase">
          LO QUE YA<br />DESPERTAMOS
        </h1>
        <p className="font-cormorant text-lg md:text-xl text-muted-foreground leading-[1.7] mb-2">No son reminiscencias. Son evidencias.
        </p>
        <p className="font-cormorant text-lg text-muted-foreground leading-[1.7]">Cada año, algo se revuelve en las sombras.</p>
      </section>

      {/* Year selector */}
      <div className="flex justify-center gap-4 px-6 mb-6">
        {galeriaData.map((d) => <button
          key={d.year}
          onClick={() => handleYearChange(d.year)}
          className={`font-cinzel text-xs tracking-[0.2em] px-5 py-2 border transition-colors ${
          selectedYear === d.year ?
          "border-primary text-primary" :
          "border-border text-muted-foreground hover:text-foreground"}`
          }>
            
            {d.year}
          </button>
        )}
      </div>

      {/* Filters */}
      <div className="flex justify-center gap-4 px-6 mb-8">
        {filters.map((f) =>
        <button
          key={f}
          onClick={() => setSelectedFilter(f)}
          className={`font-cinzel text-xs tracking-[0.2em] px-4 py-2 border transition-colors ${
          selectedFilter === f ?
          "border-primary text-primary" :
          "border-border text-muted-foreground hover:text-foreground"}`
          }>
          
            {f.toUpperCase()}
          </button>
        )}
      </div>

      {/* Content */}
      <section
        key={selectedYear + selectedFilter}
        className="px-6 max-w-5xl mx-auto animate-fade-in">
        
        {/* Intro text for 2024 */}
        {showIntro &&
        <div className="text-center mb-10">
            {yearData.introText!.split("\n").map((line, i) =>
          <p key={i} className="font-cinzel text-muted-foreground text-lg leading-relaxed">
                {line}
              </p>
          )}
          </div>
        }

        {/* Empty state */}
        {!hasContent && !showIntro &&
        <p className="text-center font-cinzel text-muted-foreground py-20">
            Aún no hay pruebas registradas aquí.
          </p>
        }

        {/* No content but has intro → show empty after intro */}
        {!hasContent && showIntro &&
        <p className="text-center font-cinzel text-muted-foreground py-10">
            Aún no hay pruebas registradas aquí.
          </p>
        }

        {/* Rostros grid */}
        {showPosters && yearData.people.length > 0 &&
        <div className="mb-10">
            <h2 className="font-cinzel text-sm tracking-[0.2em] text-muted-foreground mb-4">
              ROSTROS 2025
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {yearData.people.map((person) =>
            <PosterCard
              key={person.id}
              person={person}
              onClick={() => setModalPerson(person)} />

            )}
            </div>
          </div>
        }

        {/* Photos grid */}
        {showPhotos && yearData.photos.length > 0 &&
        <div className="mb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {yearData.photos.map((photo, i) =>
            <button
              key={i}
              onClick={() => setLightbox(photo)}
              className="aspect-square bg-secondary border border-border overflow-hidden hover:opacity-80 transition-opacity card-hover">
              
                  <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover"
                loading="lazy" />
              
                </button>
            )}
            </div>
          </div>
        }

        {/* Videos grid */}
        {showVideos && yearData.videos.length > 0 &&
        <div className="mb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {yearData.videos.map((video, i) =>
            <div
              key={i}
              className="aspect-video bg-secondary border border-border overflow-hidden card-hover">
              
                  <video
                src={video.src}
                controls
                className="w-full h-full object-cover" />
              
                </div>
            )}
            </div>
          </div>
        }
      </section>

      <SectionSeparator />

      <section className="text-center pb-8">
        <Link
          to="/"
          className="inline-block font-cinzel text-sm tracking-[0.2em] text-primary border border-primary px-8 py-3 hover:bg-primary hover:text-primary-foreground transition-colors">
          
          VOLVER A LA LLAMADA
        </Link>
      </section>

      {/* Lightbox */}
      {lightbox &&
      <div
        className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-6"
        onClick={() => setLightbox(null)}>
        
          <button
          className="absolute top-6 right-6 text-foreground hover:text-primary"
          onClick={() => setLightbox(null)}>
          
            <X className="w-8 h-8" />
          </button>
          <img
          src={lightbox.src}
          alt={lightbox.alt}
          className="max-w-full max-h-[80vh] object-contain" />
        
        </div>
      }

      {/* Poster Modal */}
      <PosterModal
        person={modalPerson}
        year={selectedYear}
        open={!!modalPerson}
        onOpenChange={(open) => !open && setModalPerson(null)} />
      
    </Layout>);

}