import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SectionSeparator from "@/components/SectionSeparator";

const members = [
  {
    name: "Enric",
    role: "Diseño, IA y mirada gráfica",
    quote: "El símbolo antes que la explicación.",
  },
  {
    name: "Emili",
    role: "Decoración y atmósfera",
    quote: "Si lo tocas… te responde.",
  },
  {
    name: "Bruno",
    role: "Cámara, montaje y escritura",
    quote: "El miedo también se redacta.",
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

      <section className="px-6 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {members.map((m) => (
            <div key={m.name} className="text-center">
              {/* Placeholder photo */}
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-secondary border border-border" />
              <h2 className="font-cinzel text-xl text-gold tracking-wider mb-1">{m.name}</h2>
              <p className="text-sm text-primary font-medium mb-2">{m.role}</p>
              <p className="text-sm text-muted-foreground italic">"{m.quote}"</p>
            </div>
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
