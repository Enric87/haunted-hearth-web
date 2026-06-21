import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import AuthorCard from "@/components/AuthorCard";
import SectionSeparator from "@/components/SectionSeparator";

const members = [
{
  name: "ENRIC",
  image: "/images/enric.png",
  description: "Diseñador gráfico & web.\nCreador digital de la casa.\nExperto en IA creativa.\nTeje sombras, códigos y símbolos.\nTerror en cada píxel."
},
{
  name: "EMILI",
  image: "/images/emili.png",
    description: "Decorador & escenografía. El arquitecto del miedo tangible. Descerebra cada rincón y decora el devenir de la locura. Arrastra los miedos hacia lo desconocido."
  },
  {
    name: "BRUNO",
    image: "/images/bruno.png",
    description: "Escritura maligna. Edición de video y VFX. Escribe desde las entrañas del infierno. Graba el pulso de la locura. Ensambla las visiones de la casa. Terror frame a frame. Pánico en cada toma..."
  }];


export default function LaFamilia() {
  return (
    <Layout>
      <section className="px-6 py-12 md:py-20 max-w-3xl mx-auto text-center">
        <h1 className="font-cormorant text-3xl md:text-5xl font-semibold text-foreground mb-6 tracking-[0.04em] uppercase">
          LA FAMILIA
        </h1>
        <p className="font-cormorant text-lg md:text-xl text-muted-foreground leading-[1.7] mb-4">No creamos historias. Abrimos un pasaje a lo desconocido.
        </p>
        <p className="font-cormorant text-lg text-muted-foreground leading-[1.7]">Tres cerebros. Una misma locura.</p>
      </section>

      <SectionSeparator />

      <section className="px-6 py-12 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {members.map((m) =>
          <AuthorCard key={m.name} {...m} />
          )}
        </div>
      </section>

      <SectionSeparator />

      <section className="px-6 py-8 text-center max-w-2xl mx-auto">
        <p className="font-cormorant text-lg text-muted-foreground leading-[1.7] mb-8">Año tras año incrementamos la angustia, porque la imaginación y la creatividad no tienen límites.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/el-ritual"
            className="inline-block font-cinzel text-sm tracking-[0.2em] text-primary border border-primary px-8 py-3 hover:bg-primary hover:text-primary-foreground transition-colors">
            
            VER EL RITUAL
          </Link>
          <Link
            to="/"
            className="inline-block font-cinzel text-sm tracking-[0.2em] text-foreground border border-border px-8 py-3 hover:border-primary hover:text-primary transition-colors">
            
            VER LA LLAMADA
          </Link>
        </div>
      </section>
    </Layout>);

}
