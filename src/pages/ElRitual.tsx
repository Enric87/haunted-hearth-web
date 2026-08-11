import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SectionSeparator from "@/components/SectionSeparator";

const ritualVisions = [
  {
    name: "LA SONRISA",
    image: "/images/ritual/pennywise.png",
    description:
      "Una presencia burlona que convierte la inocencia en inquietud. Su aparicion parece un juego, pero deja una sensacion que tarda en desaparecer.",
  },
  {
    name: "EL ABISMO",
    image: "/images/ritual/cthulhu.png",
    description:
      "Una fuerza antigua, inmensa y silenciosa. No necesita acercarse demasiado para hacerte sentir pequeno ante algo imposible de comprender.",
  },
  {
    name: "EL PRESAGIO",
    image: "/images/ritual/crow.png",
    description:
      "Un mensajero inmovil entre ramas y niebla. Donde se posa, el aire cambia y el camino parece avisar de que algo esta a punto de comenzar.",
  },
];

const rules = [
  "Respeta el espacio y a los actores.",
  "No toques la decoracion.",
  "Sigue las indicaciones. Aqui, perderse es facil.",
];

export default function ElRitual() {
  return (
    <Layout>
      <section className="px-6 py-12 md:py-20 max-w-3xl mx-auto text-center">
        <h1 className="font-cormorant text-3xl md:text-5xl font-semibold text-foreground mb-6 tracking-[0.04em] uppercase">
          EL RITUAL
        </h1>
        <p className="font-cormorant text-lg md:text-xl text-muted-foreground leading-[1.7] drop-cap">
          Sean ustedes bienvenidos a la multiversalidad. Les invitamos a descender con nosotros al profundo abismo de las mentes mas perversas de la literatura tetrica y fantastica. En este lugar el aire cambia de textura poro a poro, introduciendoles en un paraje desolador y banado en zozobra.
          <br />
          <br />
          Un interminable pasillo. Los que subieron antes. Los que no miran igual. Silencio.
          <br />
          <br />
          Un escritorio desolado llora su historia. Un cuervo grazna de dolor. Algo resplandece en la fria oscuridad. Las almas proliferan en la tristeza mas opaca. Simbolos perdidos. Imagenes desgarradoras sangran en el subconsciente. Tentaculos oscuros vierten miradas penetrantes en los corazones.
          <br />
          <br />
          Y ahora... si aun conservan el valor o la curiosidad, crucen el umbral. Las puertas ya estan abiertas y algo dentro lleva tiempo esperando su visita.
        </p>
      </section>

      <SectionSeparator />

      <section className="px-6 py-8 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ritualVisions.map((vision) => (
            <div
              key={vision.name}
              className="card-hover flex flex-col items-center border border-border rounded-sm overflow-hidden bg-card/50 backdrop-blur-sm max-w-xs mx-auto"
            >
              <div className="w-full aspect-[2/3] overflow-hidden">
                <img src={vision.image} alt={vision.name} className="w-full h-full object-contain" />
              </div>
              <div className="p-5 text-center">
                <h3 className="font-cormorant text-xl font-semibold text-gold tracking-[0.03em] mb-2">
                  {vision.name}
                </h3>
                <p className="font-cormorant text-base text-muted-foreground leading-[1.7]">
                  {vision.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <SectionSeparator />

      <section className="px-6 py-8 max-w-2xl mx-auto">
        <h2 className="font-cormorant text-xl text-primary tracking-[0.03em] font-medium mb-6 text-center uppercase">
          NORMAS
        </h2>
        <ul className="space-y-3">
          {rules.map((rule, index) => (
            <li key={index} className="flex items-start gap-3 text-muted-foreground">
              <span className="text-primary mt-0.5">-</span>
              <span>{rule}</span>
            </li>
          ))}
        </ul>
      </section>

      <SectionSeparator />

      <section className="flex flex-col sm:flex-row items-center justify-center gap-4 pb-8 px-6">
        <Link
          to="/la-familia"
          className="inline-flex min-w-[240px] items-center justify-center font-cinzel text-sm tracking-[0.2em] text-foreground border border-border px-8 py-3 hover:border-primary hover:text-primary transition-colors"
        >
          VER LA FAMILIA
        </Link>
        <Link
          to="/galeria"
          className="inline-flex w-[240px] items-center justify-center text-center leading-tight font-cinzel text-sm tracking-[0.2em] text-primary border border-primary px-8 py-3 hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          VER LO QUE YA DESPERTAMOS
        </Link>
      </section>
    </Layout>
  );
}
