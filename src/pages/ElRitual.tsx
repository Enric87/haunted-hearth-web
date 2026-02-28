import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SectionSeparator from "@/components/SectionSeparator";

const zones = [
  {
    title: "Exterior",
    text: "Antes de entrar, ya estás dentro. Actores fuera… invitando. Un balcón largo: voces que convocan.",
  },
  {
    title: "Umbral",
    text: "Cementerio exterior. El aire cambia. Cruzas al invernadero: la humedad lo recuerda todo.",
  },
  {
    title: "Planta baja",
    text: "Un pasillo con tres nombres y una sola intención. Poe. King. Lovecraft. Actores dentro: te guían… y te miden.",
  },
  {
    title: "Escaleras",
    text: "Rostros del ritual. Los que subieron antes. Los que no miran igual.",
  },
  {
    title: "1ª Planta — Biblioteca",
    text: "Un archivo vivo. Una sala de invocación.",
  },
  {
    title: "1ª Planta — Lavabo",
    text: "Apagón. Silencio. Algo puede responder desde donde no debería.",
  },
  {
    title: "1ª Planta — Puerta de cocina",
    text: "No se entra. Cristales con hologramas cambiantes: símbolos, palabras, sombras… los tres mundos discuten.",
  },
  {
    title: "1ª Planta — Comedor",
    text: "Televisión con piezas creadas para el ritual. Sofá, comedor, decoración densa. Arriba: velas flotantes. Abajo: tu respiración.",
  },
];

const rules = [
  "Respeta el espacio y a los actores.",
  "No toques la decoración.",
  "Sigue las indicaciones. Aquí, perderse es fácil.",
];

export default function ElRitual() {
  return (
    <Layout>
      <section className="px-6 py-12 md:py-20 max-w-3xl mx-auto text-center">
        <h1 className="font-cinzel text-3xl md:text-5xl font-bold text-foreground mb-6 tracking-wider">
          El Ritual
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          No es un recorrido. Es un descenso. Cada sala tiene nombre, cada sombra tiene dueño.
        </p>
      </section>

      <SectionSeparator />

      <section className="px-6 max-w-3xl mx-auto space-y-12">
        {zones.map((zone, i) => (
          <div key={i}>
            <h2 className="font-cinzel text-xl md:text-2xl text-gold tracking-wider mb-3">
              {zone.title}
            </h2>
            <p className="text-muted-foreground leading-relaxed">{zone.text}</p>
            {i < zones.length - 1 && (
              <div className="separator-blood mt-10 max-w-[120px]" />
            )}
          </div>
        ))}
      </section>

      <SectionSeparator />

      {/* Rules */}
      <section className="px-6 py-8 max-w-2xl mx-auto">
        <h2 className="font-cinzel text-xl text-primary tracking-wider mb-6 text-center">
          Normas
        </h2>
        <ul className="space-y-3">
          {rules.map((r, i) => (
            <li key={i} className="flex items-start gap-3 text-muted-foreground">
              <span className="text-primary mt-0.5">—</span>
              <span>{r}</span>
            </li>
          ))}
        </ul>
      </section>

      <SectionSeparator />

      <section className="text-center pb-8">
        <Link
          to="/el-acceso"
          className="inline-block font-cinzel text-sm tracking-[0.2em] text-primary border border-primary px-8 py-3 hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          CONSULTA EL ACCESO
        </Link>
      </section>
    </Layout>
  );
}
