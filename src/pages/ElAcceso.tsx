import { Clock, MapPin, MessageCircle } from "lucide-react";
import Layout from "@/components/Layout";
import SectionSeparator from "@/components/SectionSeparator";

const tips = [
  "Ven con tiempo. La entrada es gratuita y por turnos.",
  "Ropa comoda. El ritual no espera.",
  "Si vienes con menores, decide antes de cruzar el umbral.",
];

export default function ElAcceso() {
  return (
    <Layout>
      <section className="px-6 py-12 md:py-20 max-w-3xl mx-auto text-center">
        <h1 className="font-cormorant text-3xl md:text-5xl font-semibold text-foreground mb-6 tracking-[0.04em] uppercase">
          EL ACCESO
        </h1>
      </section>

      <section className="px-6 max-w-3xl mx-auto py-8 md:py-12">
        <div className="flex flex-col items-center gap-8">
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-primary shrink-0" />
            <p className="text-foreground font-medium text-lg">Vilamalla, Girona</p>
          </div>

          <div className="w-16 h-px bg-border" />

          <div className="flex flex-col items-center gap-1">
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-primary shrink-0" />
              <p className="text-foreground font-medium text-lg">31 de octubre de 2026</p>
            </div>
            <p className="text-sm text-muted-foreground tracking-[0.08em]">18h a 22h</p>
          </div>
        </div>
      </section>

      <SectionSeparator />

      <section className="px-6 max-w-2xl mx-auto">
        <h2 className="font-cormorant text-xl text-gold tracking-[0.03em] font-medium mb-6 text-center uppercase">
          RECOMENDACIONES
        </h2>
        <ul className="space-y-3">
          {tips.map((t, i) => (
            <li key={i} className="flex items-start gap-3 font-cormorant text-lg text-muted-foreground leading-[1.7]">
              <span className="text-primary mt-0.5">-</span>
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </section>

      <SectionSeparator />

      <section className="flex flex-col sm:flex-row items-center justify-center gap-4 pb-8 px-6">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-[320px] min-h-[68px] items-center justify-center gap-2 text-center leading-tight font-cinzel text-sm tracking-[0.2em] text-foreground border border-border px-8 py-3 hover:border-primary hover:text-primary transition-colors"
        >
          <MessageCircle className="w-4 h-4" />
          CONTACTANOS
        </a>
      </section>
    </Layout>
  );
}
