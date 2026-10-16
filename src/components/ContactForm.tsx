import { useState } from "react";
import { Link } from "react-router-dom";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";

const schema = z.object({
  name: z.string().trim().min(1, "El nombre es obligatorio").max(100, "Máximo 100 caracteres"),
  email: z.string().trim().min(1, "El email es obligatorio").email("Email no válido").max(255),
  phone: z.string().trim().max(30, "Máximo 30 caracteres").regex(/^[0-9+()\s-]*$/, "Teléfono no válido"),
  message: z.string().trim().min(1, "El mensaje es obligatorio").max(2000, "Máximo 2000 caracteres"),
  privacy: z.literal(true, { errorMap: () => ({ message: "Debes aceptar la política de privacidad" }) }),
});

type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

const fieldClass =
  "w-full bg-background/60 border border-border rounded-sm px-4 py-3 font-cormorant text-lg text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:border-primary transition-colors";
const labelClass = "block font-cinzel text-xs tracking-[0.2em] text-muted-foreground mb-2 uppercase";

export default function ContactForm() {
  const [values, setValues] = useState({ name: "", email: "", phone: "", message: "", privacy: false });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const set = (k: keyof typeof values, v: string | boolean) => setValues((s) => ({ ...s, [k]: v }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const errs: Errors = {};
      parsed.error.issues.forEach((i) => {
        const k = i.path[0] as keyof Errors;
        if (!errs[k]) errs[k] = i.message;
      });
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus("sending");
    const d = parsed.data;
    const { error } = await supabase.from("contact_submissions").insert({
      name: d.name,
      email: d.email,
      phone: d.phone || null,
      message: d.message,
      privacy_accepted: true,
    });
    if (error) {
      setStatus("error");
      return;
    }
    setStatus("sent");
    setValues({ name: "", email: "", phone: "", message: "", privacy: false });
  };

  if (status === "sent") {
    return (
      <div className="border border-border rounded-sm p-8 text-center space-y-3" role="status">
        <p className="font-cormorant text-2xl text-gold uppercase tracking-[0.04em]">Mensaje recibido</p>
        <p className="font-cormorant text-lg text-muted-foreground">Gracias. Te responderemos pronto.</p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-4 font-cinzel text-xs tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors"
        >
          ENVIAR OTRO MENSAJE
        </button>
      </div>
    );
  }

  const err = (k: keyof Errors) =>
    errors[k] ? <p className="mt-1 text-sm text-primary">{errors[k]}</p> : null;

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div>
        <label htmlFor="cf-name" className={labelClass}>Nombre *</label>
        <input id="cf-name" className={fieldClass} placeholder="Tu nombre" maxLength={100}
          value={values.name} onChange={(e) => set("name", e.target.value)} />
        {err("name")}
      </div>
      <div>
        <label htmlFor="cf-email" className={labelClass}>Email *</label>
        <input id="cf-email" type="email" className={fieldClass} placeholder="tu@email.com" maxLength={255}
          value={values.email} onChange={(e) => set("email", e.target.value)} />
        {err("email")}
      </div>
      <div>
        <label htmlFor="cf-phone" className={labelClass}>Teléfono</label>
        <input id="cf-phone" type="tel" className={fieldClass} maxLength={30}
          value={values.phone} onChange={(e) => set("phone", e.target.value)} />
        {err("phone")}
      </div>
      <div>
        <label htmlFor="cf-message" className={labelClass}>Mensaje *</label>
        <textarea id="cf-message" rows={7} className={`${fieldClass} resize-y min-h-[180px]`}
          placeholder="Escribe tu mensaje" maxLength={2000}
          value={values.message} onChange={(e) => set("message", e.target.value)} />
        {err("message")}
      </div>
      <div>
        <label className="flex items-start gap-3 cursor-pointer font-cormorant text-lg text-muted-foreground">
          <input type="checkbox" className="mt-1.5 h-4 w-4 accent-[hsl(var(--primary))] shrink-0"
            checked={values.privacy} onChange={(e) => set("privacy", e.target.checked)} />
          <span>
            He leído y acepto la{" "}
            <Link to="/aviso-legal-privacidad" className="text-foreground underline underline-offset-4 hover:text-primary">
              política de privacidad
            </Link>.
          </span>
        </label>
        {err("privacy")}
      </div>
      {status === "error" && (
        <p className="text-sm text-primary">No se pudo enviar el mensaje. Inténtalo de nuevo.</p>
      )}
      <div className="flex justify-center pt-2">
        <button type="submit" disabled={status === "sending"}
          className="inline-flex w-full sm:w-[320px] min-h-[68px] items-center justify-center text-center font-cinzel text-sm tracking-[0.2em] text-foreground border border-border px-8 py-3 hover:border-primary hover:text-primary transition-colors disabled:opacity-50">
          {status === "sending" ? "ENVIANDO..." : "Enviar mensaje"}
        </button>
      </div>
    </form>
  );
}
