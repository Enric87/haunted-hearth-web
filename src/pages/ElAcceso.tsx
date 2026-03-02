import { MapPin, Clock, ExternalLink, MessageCircle } from "lucide-react";
import Layout from "@/components/Layout";
import SectionSeparator from "@/components/SectionSeparator";

const tips = [
"Ven con tiempo. La entrada es por turnos.",
"Parking: zona por definir.",
"Ropa cómoda. El ritual no espera.",
"Si vienes con menores, decide antes de cruzar el umbral."];


export default function ElAcceso() {
  return (
    <Layout>
      <section className="px-6 py-12 md:py-20 max-w-3xl mx-auto text-center">
        <h1 className="font-cinzel text-3xl md:text-5xl font-bold text-foreground mb-6 tracking-wider">
          El Acceso
        </h1>
      </section>

      <section className="px-6 max-w-3xl mx-auto space-y-8">
        {/* Address */}
        <div className="flex items-start gap-3">
          <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
          <div>
            <p className="text-foreground font-medium">Vilamalla, Girona</p>
            <p className="text-sm text-muted-foreground">C/ Alberes, 4</p>
          </div>
        </div>

        {/* Time */}
        <div className="flex items-start gap-3">
          <Clock className="w-5 h-5 text-primary mt-0.5 shrink-0" />
          <div>
            <p className="text-foreground font-medium">31 de octubre de 2026</p>
            <p className="text-sm text-muted-foreground">18h a 22h</p>
          </div>
        </div>

        {/* Map placeholder */}
        <div className="aspect-video bg-secondary border border-border rounded-sm flex items-center justify-center">
          <p className="text-muted-foreground text-sm">Mapa Google Maps (pendiente dirección)</p>
        </div>
      </section>

      <SectionSeparator />

      {/* Recommendations */}
      <section className="px-6 max-w-2xl mx-auto">
        <h2 className="font-cinzel text-xl text-gold tracking-wider mb-6 text-center">
          Recomendaciones
        </h2>
        <ul className="space-y-3">
          {tips.map((t, i) =>
          <li key={i} className="flex items-start gap-3 text-muted-foreground">
              <span className="text-primary mt-0.5">—</span>
              <span>{t}</span>
            </li>
          )}
        </ul>
      </section>

      <SectionSeparator />

      {/* CTAs */}
      <section className="flex flex-col sm:flex-row items-center justify-center gap-4 pb-8 px-6">
        <a
          href="https://maps.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-cinzel text-sm tracking-[0.2em] text-primary border border-primary px-8 py-3 hover:bg-primary hover:text-primary-foreground transition-colors">
          
          <ExternalLink className="w-4 h-4" />
          ABRIR EN GOOGLE MAPS
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-cinzel text-sm tracking-[0.2em] text-foreground border border-border px-8 py-3 hover:border-primary hover:text-primary transition-colors">
          
          <MessageCircle className="w-4 h-4" />
          ESCRÍBENOS
        </a>
      </section>
    </Layout>);

}