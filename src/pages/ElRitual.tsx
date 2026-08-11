import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SectionSeparator from "@/components/SectionSeparator";

const rules = [
"Respeta el espacio y a los actores.",
"No toques la decoración.",
"Sigue las indicaciones. Aquí, perderse es fácil."];


export default function ElRitual() {
  return (
    <Layout>
      <section className="px-6 py-12 md:py-20 max-w-3xl mx-auto text-center">
        <h1 className="font-cormorant text-3xl md:text-5xl font-semibold text-foreground mb-6 tracking-[0.04em] uppercase">
          EL RITUAL
        </h1>
        <p className="font-cormorant text-lg md:text-xl text-muted-foreground leading-[1.7] drop-cap">
          Sean ustedes bienvenidos a la multiversalidad. Les invitamos a descender con nosotros al profundo abismo de las mentes más perversas de la literatura tétrica y fantástica. En este lugar el aire cambia de textura poro a poro, introduciéndoles en un paraje desolador y bañado en zozobra.
          <br /><br />
          Un interminable pasillo. Los que subieron antes. Los que no miran igual. Silencio.
          <br /><br />
          Un escritorio desolado llora su historia. Un cuervo grazna de dolor. Algo resplandece en la fría oscuridad. Las almas proliferan en la tristeza más opaca. Símbolos perdidos. Imágenes desgarradoras sangran en el subconsciente. Tentáculos oscuros vierten miradas penetrantes en los corazones.
          <br /><br />
          Y ahora… si aún conservan el valor —o la curiosidad— crucen el umbral. Las puertas ya están abiertas… y algo dentro lleva tiempo esperando su visita.
        </p>
      </section>

      <SectionSeparator />

      {/* Illustrations */}
      <section className="px-6 py-8 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {["/images/ritual/crow.png", "/images/ritual/cthulhu.png", "/images/ritual/pennywise.png"].map((src, i) => (
            <div key={i} className="bg-card border border-primary/20 overflow-hidden">
              <div className="aspect-[3/4] flex items-center justify-center">
                <img src={src} alt="" className="w-full h-full object-contain" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <SectionSeparator />

      {/* Rules */}
      <section className="px-6 py-8 max-w-2xl mx-auto">
        <h2 className="font-cormorant text-xl text-primary tracking-[0.03em] font-medium mb-6 text-center uppercase">
          NORMAS
        </h2>
        <ul className="space-y-3">
          {rules.map((r, i) => <li key={i} className="flex items-start gap-3 text-muted-foreground">
              <span className="text-primary mt-0.5">—</span>
              <span>{r}</span>
            </li>)}
        </ul>
      </section>

      <SectionSeparator />

      <section className="flex flex-col sm:flex-row items-center justify-center gap-4 pb-8 px-6">
        <Link to="/la-familia"
        className="inline-flex min-w-[320px] items-center justify-center font-cinzel text-sm tracking-[0.2em] text-foreground border border-border px-8 py-3 hover:border-primary hover:text-primary transition-colors">
          VER LA FAMILIA
        </Link>
        <Link to="/galeria"
        className="inline-flex min-w-[320px] items-center justify-center font-cinzel text-sm tracking-[0.2em] text-primary border border-primary px-8 py-3 hover:bg-primary hover:text-primary-foreground transition-colors">
          VER LO QUE YA DESPERTAMOS
        </Link>
      </section>
    </Layout>);

}
