import type { Person } from "@/data/galeria";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface PosterModalProps {
  person: Person | null;
  year: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onPrevious?: () => void;
  onNext?: () => void;
  canNavigate?: boolean;
}

export default function PosterModal({
  person,
  year,
  open,
  onOpenChange,
  onPrevious,
  onNext,
  canNavigate = false,
}: PosterModalProps) {
  if (!person) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[calc(100vw-1rem)] max-w-[96vw] max-h-[96vh] overflow-x-hidden overflow-y-auto p-3 sm:w-[calc(100vw-2rem)] sm:max-w-[820px] sm:max-h-[94vh] sm:p-5 lg:w-auto lg:max-w-fit">
        <DialogHeader className="text-center">
          <DialogTitle className="font-cinzel text-2xl tracking-wider">
            {person.name}
          </DialogTitle>
          <DialogDescription className="font-cinzel text-xs tracking-[0.2em] text-muted-foreground">
            HALLOWEEN {year}
          </DialogDescription>
        </DialogHeader>

        {/* Poster */}
        <div className="relative mx-auto flex max-w-full flex-col items-center justify-center gap-3 px-1 sm:px-6 md:px-10 lg:px-20 xl:px-24">
          {canNavigate && onPrevious && (
            <button
              type="button"
              className="hidden sm:block sm:absolute sm:left-2 md:left-4 lg:left-8 sm:top-1/2 z-20 sm:-translate-y-1/2 border border-border bg-background/90 p-3 text-foreground shadow-lg transition-colors hover:border-primary hover:text-primary"
              onClick={onPrevious}
              aria-label="Rostro anterior"
            >
              <ChevronLeft className="h-7 w-7" />
            </button>
          )}
          <div className="mx-auto flex max-w-full items-center justify-center border border-border bg-card/40">
            <img
              src={person.posterUrl}
              alt={person.name}
              className="block h-auto w-full max-w-[320px] object-contain sm:max-w-[420px] sm:max-h-[76vh] md:max-w-[520px] md:max-h-[78vh] lg:max-w-[560px] lg:max-h-[80vh] xl:max-w-[620px] xl:max-h-[82vh]"
            />
          </div>
          {canNavigate && onNext && (
            <button
              type="button"
              className="hidden sm:block sm:absolute sm:right-2 md:right-4 lg:right-8 sm:top-1/2 z-20 sm:-translate-y-1/2 border border-border bg-background/90 p-3 text-foreground shadow-lg transition-colors hover:border-primary hover:text-primary"
              onClick={onNext}
              aria-label="Rostro siguiente"
            >
              <ChevronRight className="h-7 w-7" />
            </button>
          )}
          {canNavigate && (
            <div className="order-2 flex items-center justify-center gap-3 sm:hidden">
              {onPrevious && (
                <button
                  type="button"
                  className="border border-border bg-background/90 p-3 text-foreground shadow-lg transition-colors hover:border-primary hover:text-primary"
                  onClick={onPrevious}
                  aria-label="Rostro anterior"
                >
                  <ChevronLeft className="h-7 w-7" />
                </button>
              )}
              {onNext && (
                <button
                  type="button"
                  className="border border-border bg-background/90 p-3 text-foreground shadow-lg transition-colors hover:border-primary hover:text-primary"
                  onClick={onNext}
                  aria-label="Rostro siguiente"
                >
                  <ChevronRight className="h-7 w-7" />
                </button>
              )}
            </div>
          )}
        </div>

        {/* Su rastro — photos */}
        {person.photos.length > 0 && (
          <div className="mt-4">
            <h3 className="font-cinzel text-sm tracking-[0.2em] text-muted-foreground mb-3">
              SU RASTRO
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {person.photos.map((photo, i) => (
                <div key={i} className="aspect-square overflow-hidden border border-border">
                  <img src={photo.src} alt={photo.alt} className="h-full w-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Ecos — videos */}
        {person.videos.length > 0 && (
          <div className="mt-4">
            <h3 className="font-cinzel text-sm tracking-[0.2em] text-muted-foreground mb-3">
              ECOS
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {person.videos.map((video, i) => (
                <div key={i} className="aspect-video overflow-hidden border border-border">
                  <video src={video.src} controls className="h-full w-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
