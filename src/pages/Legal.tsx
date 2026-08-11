import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SectionSeparator from "@/components/SectionSeparator";

type LegalPageType = "privacy" | "terms" | "cookies";

interface LegalPageProps {
  type: LegalPageType;
}

const pages = {
  privacy: {
    title: "Aviso legal / Privacidad",
    updated: "Última actualización: julio de 2026",
    sections: [
      {
        heading: "Identificación",
        body: [
          "Esta web pertenece al proyecto Halloween Vilamalla y tiene como finalidad informar sobre el evento, su historia, sus secciones, sus imágenes y sus formas de contacto.",
          "Si necesitas contactar con la organización, puedes hacerlo a través de los perfiles sociales enlazados en la web.",
        ],
      },
      {
        heading: "Uso de la web",
        body: [
          "El contenido de esta web se ofrece con carácter informativo. La organización puede modificar textos, horarios, imágenes, accesos o recomendaciones cuando sea necesario.",
          "Las imágenes, textos, logotipos y materiales publicados pertenecen a sus respectivos autores o colaboradores y no deben reutilizarse sin autorización.",
        ],
      },
      {
        heading: "Privacidad",
        body: [
          "Esta web no solicita datos personales mediante formularios propios. Si contactas con la organización a través de redes sociales o plataformas externas, el tratamiento de esos datos dependerá también de las condiciones de dichas plataformas.",
          "No se publicarán datos personales sensibles de participantes sin autorización. Si aparece una imagen tuya y deseas que se revise o retire, contacta con la organización.",
        ],
      },
    ],
  },
  terms: {
    title: "Términos y condiciones",
    updated: "Última actualización: julio de 2026",
    sections: [
      {
        heading: "Condiciones de participación",
        body: [
          "La participación en Halloween Vilamalla implica respetar las indicaciones de la organización, los turnos de acceso y las recomendaciones de seguridad publicadas en la web.",
          "La entrada puede estar sujeta a aforo, horarios y cambios organizativos. La organización podrá adaptar el recorrido o las condiciones del evento por motivos de seguridad.",
        ],
      },
      {
        heading: "Menores y acompañantes",
        body: [
          "Las personas menores deben asistir acompañadas por una persona adulta responsable. Antes de entrar, cada familia debe valorar si el contenido del evento es adecuado para los menores que la acompañan.",
        ],
      },
      {
        heading: "Responsabilidad",
        body: [
          "El visitante debe seguir las instrucciones recibidas y actuar con respeto hacia el espacio, los participantes, el vecindario y el resto de asistentes.",
          "No se permite dañar decoraciones, elementos del recorrido ni interferir con el desarrollo del evento.",
        ],
      },
    ],
  },
  cookies: {
    title: "Política de cookies",
    updated: "Última actualización: julio de 2026",
    sections: [
      {
        heading: "Qué son las cookies",
        body: [
          "Las cookies son pequeños archivos que algunas webs o servicios externos pueden guardar en tu navegador para recordar información técnica o de navegación.",
        ],
      },
      {
        heading: "Cookies en esta web",
        body: [
          "Esta web no utiliza cookies propias para crear cuentas, iniciar sesión ni vender datos personales.",
          "Algunos elementos externos, como mapas de Google, vídeos de YouTube o enlaces a redes sociales, pueden utilizar sus propias cookies o tecnologías similares cuando interactúas con ellos.",
        ],
      },
      {
        heading: "Cómo gestionarlas",
        body: [
          "Puedes aceptar, bloquear o eliminar cookies desde la configuración de tu navegador. Si bloqueas cookies de terceros, algunas funciones externas como mapas o vídeos podrían no mostrarse correctamente.",
        ],
      },
    ],
  },
} satisfies Record<LegalPageType, { title: string; updated: string; sections: { heading: string; body: string[] }[] }>;

export default function LegalPage({ type }: LegalPageProps) {
  const page = pages[type];

  return (
    <Layout>
      <section className="px-6 py-12 md:py-20 max-w-3xl mx-auto text-center">
        <h1 className="font-cormorant text-3xl md:text-5xl font-semibold text-foreground mb-4 tracking-[0.04em] uppercase">
          {page.title}
        </h1>
        <p className="font-cormorant text-lg text-muted-foreground">{page.updated}</p>
      </section>

      <section className="px-6 max-w-3xl mx-auto space-y-10">
        {page.sections.map((section) => (
          <article key={section.heading} className="space-y-4">
            <h2 className="font-cormorant text-2xl text-gold tracking-[0.03em] uppercase">
              {section.heading}
            </h2>
            {section.body.map((paragraph) => (
              <p key={paragraph} className="font-cormorant text-lg text-muted-foreground leading-[1.8]">
                {paragraph}
              </p>
            ))}
          </article>
        ))}
      </section>

      <SectionSeparator />

      <section className="px-6 pb-8 text-center">
        <Link
          to="/"
          className="inline-flex min-w-[240px] items-center justify-center font-cinzel text-sm tracking-[0.2em] text-primary border border-primary px-8 py-3 hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          VOLVER AL INICIO
        </Link>
      </section>
    </Layout>
  );
}
