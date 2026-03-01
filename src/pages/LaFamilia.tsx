import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import AuthorCard from "@/components/AuthorCard";
import SectionSeparator from "@/components/SectionSeparator";

const members = [
  {
    name: "ENRIC",
    image: "/images/enric.png",
    description: "Creador digital de la casa.\nArquitecto invisible de la web.\nTeje sombras, código y símbolos.\nTerror en cada píxel..",
  },
  {
    name: "EMILI",
    image: "/images/emili.png",
    description: "Decorador & escenografía. El arquitecto del miedo tangible. Descerebra cada rincón y decora el ritual de la locura.",
  },
  {
    name: "BRUNO",
    image: "/images/bruno.png",
    description: "Graba el pulso de la locura.\nEnsambla las visiones de la casa.\nTerror frame a frame.\nPánico en cada toma...",
  },
];

export default function LaFamilia() {
  return (
    <Layout>
      <section className="px-6 py-12 md:py-20 max-w-3xl mx-auto text-center">
        <h1 className="font-cinzel text-3xl md:text-5xl font-bold text-foreground mb-6 tracking-wider">
          La Familia
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
          No montamos un pasaje. Abrimos una casa.
        </p>
        <p className="text-muted-foreground">Tres manos. Un mismo pulso.</p>
      </section>

      <SectionSeparator />

      <section className="px-6 py-12 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {members.map((m) => (
            <AuthorCard key={m.name} {...m} />
          ))}
        </div>
      </section>

      <SectionSeparator />

      <section className="px-6 py-8 text-center max-w-2xl mx-auto">
        <p className="text-muted-foreground mb-8">
          Cada año cambiamos algo. Porque lo vivo… evoluciona.
        </p>
        <Link
          to="/el-ritual"
          className="inline-block font-cinzel text-sm tracking-[0.2em] text-primary border border-primary px-8 py-3 hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          VER EL RITUAL
        </Link>
      </section>
    </Layout>
  );
}
