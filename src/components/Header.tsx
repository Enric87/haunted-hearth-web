import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "La Llamada", path: "/" },
  { label: "La Familia", path: "/la-familia" },
  { label: "El Ritual", path: "/el-ritual" },
  { label: "Lo que ya despertamos", path: "/galeria" },
  { label: "El Acceso", path: "/el-acceso" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="z-50 inline-flex items-center"
          aria-label="Ir al inicio"
          onClick={() => setOpen(false)}
        >
          <img
            src="/images/logo.png"
            alt="Terrify Halloween"
            className="h-10 w-auto object-contain md:h-12"
          />
        </Link>
        <button
          onClick={() => setOpen(!open)}
          className="z-50 p-2 text-foreground hover:text-primary transition-colors"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          {open ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </header>

      {/* Overlay menu */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-background/95 backdrop-blur-sm flex items-center justify-center"
          onClick={() => setOpen(false)}
        >
          <nav className="flex flex-col items-center gap-6" onClick={(e) => e.stopPropagation()}>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={`font-cinzel text-2xl md:text-3xl tracking-wider transition-colors hover:text-primary ${
                  location.pathname === item.path ? "text-primary" : "text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
