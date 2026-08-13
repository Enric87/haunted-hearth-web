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
      <DialogContent className="w-auto max-w-fit max-h-[92vh] overflow-x-hidden overflow-y-auto p-4 sm:p-6">
        <DialogHeader className="text-center">
          <DialogTitle className="font-cinzel text-2xl tracking-wider">
            {person.name}
          </DialogTitle>
          <DialogDescription className="font-cinzel text-xs tracking-[0.2em] text-muted-foreground">
            HALLOWEEN {year}
          </DialogDescription>
        </DialogHeader>

        {/* Poster */}
        <div className="relative mx-auto flex max-w-full items-center justify-center px-12 md:px-16">
          {canNavigate && onPrevious && (
            <button
              type="button"
              className="absolute left-0 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 border border-border bg-background/90 p-3 text-foreground shadow-lg transition-colors hover:border-primary hover:text-primary"
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
              className="block max-h-[72vh] w-auto max-w-full object-contain"
            />
          </div>
          {canNavigate && onNext && (
            <button
              type="button"
              className="absolute right-0 top-1/2 z-20 translate-x-1/2 -translate-y-1/2 border border-border bg-background/90 p-3 text-foreground shadow-lg transition-colors hover:border-primary hover:text-primary"
              onClick={onNext}
              aria-label="Rostro siguiente"
            >
              <ChevronRight className="h-7 w-7" />
            </button>
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
