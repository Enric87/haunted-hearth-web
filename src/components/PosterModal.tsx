import type { Person } from "@/data/galeria";
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
}

export default function PosterModal({ person, year, open, onOpenChange }: PosterModalProps) {
  if (!person) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-auto max-w-fit max-h-[92vh] overflow-y-auto p-4 sm:p-6">
        <DialogHeader className="text-center">
          <DialogTitle className="font-cinzel text-2xl tracking-wider">
            {person.name}
          </DialogTitle>
          <DialogDescription className="font-cinzel text-xs tracking-[0.2em] text-muted-foreground">
            HALLOWEEN {year}
          </DialogDescription>
        </DialogHeader>

        {/* Poster */}
        <div className="mx-auto flex max-w-full items-center justify-center border border-border bg-card/40">
          <img
            src={person.posterUrl}
            alt={person.name}
            className="block max-h-[72vh] w-auto max-w-full object-contain"
          />
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
