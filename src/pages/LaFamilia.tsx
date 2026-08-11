import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import AuthorCard from "@/components/AuthorCard";
import AuthorModal from "@/components/AuthorModal";
import SectionSeparator from "@/components/SectionSeparator";

const members = [
  {
    name: "ENRIC",
    image: "/images/enric.png",
    description: "Disenador grafico & web. Creador digital de la casa.",
    bio:
      "Disenador grafico & web. Creador digital de la casa. Experto en IA creativa. Teje sombras, codigos y simbolos. Terror en cada pixel.",
  },
  {
    name: "EMILI",
    image: "/images/emili.png",
    description: "Decorador & escenografia. El arquitecto del miedo tangible.",
    bio:
      "Decorador & escenografia. El arquitecto del miedo tangible. Descerebra cada rincon y decora el devenir de la locura. Arrastra los miedos hacia lo desconocido.",
  },
  {
    name: "BRUNO",
    image: "/images/bruno.png",
    description: "Escritura maligna. Edicion de video y VFX.",
    bio:
      "Escritura maligna. Edicion de video y VFX. Escribe desde las entranas del infierno. Graba el pulso de la locura. Ensambla las visiones de la casa. Terror frame a frame. Panico en cada toma...",
  },
];

export default function LaFamilia() {
  const [selectedMember, setSelectedMember] = useState<(typeof members)[number] | null>(null);

  return (
    <Layout>
      <section className="px-6 py-12 md:py-20 max-w-3xl mx-auto text-center">
        <h1 className="font-cormorant text-3xl md:text-5xl font-semibold text-foreground mb-6 tracking-[0.04em] uppercase">
          LA FAMILIA
        </h1>
        <p className="font-cormorant text-lg md:text-xl text-muted-foreground leading-[1.7] mb-4">
          No creamos historias. Abrimos un pasaje a lo desconocido.
        </p>
        <p className="font-cormorant text-lg text-muted-foreground leading-[1.7]">
          Tres cerebros. Una misma locura.
        </p>
      </section>

      <SectionSeparator />

      <section className="px-6 py-12 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {members.map((member) => (
            <AuthorCard
              key={member.name}
              {...member}
              onClick={() => setSelectedMember(member)}
            />
          ))}
        </div>
      </section>

      <SectionSeparator />

      <section className="px-6 py-8 text-center max-w-2xl mx-auto">
        <p className="font-cormorant text-lg text-muted-foreground leading-[1.7] mb-8">
          Ano tras ano incrementamos la angustia, porque la imaginacion y la creatividad no tienen limites.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="inline-flex min-w-[240px] items-center justify-center font-cinzel text-sm tracking-[0.2em] text-foreground border border-border px-8 py-3 hover:border-primary hover:text-primary transition-colors"
          >
            VER LA LLAMADA
          </Link>
          <Link
            to="/el-ritual"
            className="inline-flex min-w-[240px] items-center justify-center font-cinzel text-sm tracking-[0.2em] text-primary border border-primary px-8 py-3 hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            VER EL RITUAL
          </Link>
        </div>
      </section>

      <AuthorModal
        author={selectedMember}
        open={!!selectedMember}
        onOpenChange={(open) => {
          if (!open) setSelectedMember(null);
        }}
      />
    </Layout>
  );
}
