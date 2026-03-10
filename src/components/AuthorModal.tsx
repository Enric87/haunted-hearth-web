import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface Author {
  name: string;
  image: string;
  description: string;
  bio: string;
}

interface AuthorModalProps {
  author: Author | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function AuthorModal({ author, open, onOpenChange }: AuthorModalProps) {
  if (!author) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto rounded-xl border-gold/20 bg-black/95 shadow-2xl">
        <DialogHeader className="text-center space-y-3">
          <DialogDescription className="font-cinzel text-xs tracking-[0.3em] text-gold/60 uppercase">
            Archivo invocado
          </DialogDescription>
          <DialogTitle className="font-cinzel text-3xl md:text-4xl tracking-wider text-gold">
            {author.name}
          </DialogTitle>
        </DialogHeader>

        <div className="separator-blood my-4" />

        <div className="px-2 md:px-6 pb-4">
          <p className="font-cormorant text-foreground/85 leading-[1.7] text-lg md:text-xl whitespace-pre-line">
            {author.bio}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
