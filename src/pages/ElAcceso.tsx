import ContactForm from "@/components/ContactForm";
import Layout from "@/components/Layout";

export default function ElAcceso() {
  return (
    <Layout>
      <section className="px-6 py-12 md:py-20 max-w-3xl mx-auto text-center">
        <h1 className="font-cormorant text-3xl md:text-5xl font-semibold text-foreground mb-6 tracking-[0.04em] uppercase">
          EL ACCESO
        </h1>
      </section>

      <section className="px-6 max-w-2xl mx-auto pb-16">
        <h2 className="font-cormorant text-xl text-gold tracking-[0.03em] font-medium mb-6 text-center uppercase">
          CONTACTO
        </h2>
        <ContactForm />
      </section>
    </Layout>
  );
}
