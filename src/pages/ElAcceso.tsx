import { Clock, MapPin, MessageCircle } from "lucide-react";
import Layout from "@/components/Layout";
import SectionSeparator from "@/components/SectionSeparator";

const address = "C/ Alberes, 4, 17469 Vilamalla, Girona";
const googleMapsUrl = `https://maps.google.com/?q=${encodeURIComponent(address)}`;
const googleMapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;

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

      <section className="px-6 max-w-3xl mx-auto space-y-8">
        <div className="flex items-start gap-3">
          <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
          <div>
            <p className="text-foreground font-medium">Vilamalla, Girona</p>
            <p className="text-sm text-muted-foreground">C/ Alberes, 4</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Clock className="w-5 h-5 text-primary mt-0.5 shrink-0" />
          <div>
            <p className="text-foreground font-medium">31 de octubre de 2026</p>
            <p className="text-sm text-muted-foreground">18h a 22h</p>
          </div>
        </div>

        <div className="aspect-video bg-secondary border border-border rounded-sm overflow-hidden">
          <iframe
            title="Mapa de C/ Alberes, 4, Vilamalla"
            src={googleMapsEmbedUrl}
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
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
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-[320px] min-h-[68px] items-center justify-center gap-2 text-center leading-tight font-cinzel text-sm tracking-[0.2em] text-primary border border-primary px-8 py-3 hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          <MapPin className="w-4 h-4" />
          GOOGLE MAPS
        </a>
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
