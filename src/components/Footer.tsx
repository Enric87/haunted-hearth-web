import { Facebook, Instagram, Youtube } from "lucide-react";

interface FooterProps {
  variant?: "home" | "internal";
}

export default function Footer({ variant = "internal" }: FooterProps) {
  return (
    <footer className="relative z-10 py-8 px-6">
      <div className="separator-blood mb-8" />

      {variant === "home" && (
        <div className="flex flex-col items-center gap-6 mb-8">
          <div className="flex items-center gap-8 opacity-60">
            <span className="font-cinzel text-sm tracking-widest text-foreground">B Effects Studios</span>
            <span className="text-muted-foreground">x</span>
            <span className="font-cinzel text-sm tracking-widest text-foreground">Enrigraphics</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-6 h-6" />
            </a>
          </div>
        </div>
      )}

      <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground">
        <a href="#" className="hover:text-foreground transition-colors">
          Aviso legal / Privacidad
        </a>
        <span>·</span>
        <a href="#" className="hover:text-foreground transition-colors">
          Términos y condiciones
        </a>
        <span>·</span>
        <a href="#" className="hover:text-foreground transition-colors">
          Cookies
        </a>
      </div>

      <p className="text-center text-xs text-muted-foreground mt-4 opacity-40">
        © {new Date().getFullYear()} Halloween Vilamalla
      </p>
    </footer>
  );
}
