import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { submitContact } from "@/lib/forms.functions";
import { z } from "zod";
import { Mail, Instagram, Linkedin } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact, The Young Constituents" },
      { name: "description", content: "Get in touch with The Young Constituents national team." },
    ],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  subject: z.string().trim().max(200).optional(),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(2000),
});

function Contact() {
  const submit = useServerFn(submitContact);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [serverMsg, setServerMsg] = useState("");

  const setField = (k: keyof typeof form, v: string) => {
    setForm((f) => ({ ...f, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: "" }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        next[issue.path[0] as string] = issue.message;
      }
      setErrors(next);
      return;
    }
    setStatus("loading");
    setServerMsg("");
    try {
      await submit({ data: parsed.data });
      setStatus("ok");
      setServerMsg("Thanks for reaching out. We will get back to you shortly.");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setStatus("error");
      setServerMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  };

  return (
    <>
      {/* HERO */}
      <section style={{ background: "#080028", color: "#fff", marginTop: "-78px", paddingTop: "78px" }}>
        <div className="container-tyc pt-20 pb-28 lg:pt-28 lg:pb-32">
          <p className="eyebrow" style={{ color: "#FFA300" }}>
            <span style={{ color: "#FFA300" }}>Contact</span>
          </p>
          <h1 className="text-white mt-8 display-hero max-w-4xl">
            Get in <span style={{ color: "#FFA300" }}>Touch.</span>
          </h1>
        </div>
      </section>

      {/* FORM */}
      <section className="section">
        <div className="container-tyc grid lg:grid-cols-12 gap-14">
          {/* Contact details */}
          <div className="lg:col-span-4">
            <p className="eyebrow">Reach Us</p>
            <h2 className="mt-4 text-[28px] leading-tight">
              We read every message we receive.
            </h2>
            <p className="mt-5 text-[14px] text-[#4a5078] leading-relaxed">
              For chapter inquiries, press, or partnerships, use the form or any of
              the channels below.
            </p>

            <ul className="mt-10 space-y-5 text-[14px]">
              <li>
                <a href="mailto:contact@theyoungconstituents.ca" className="flex items-center gap-3 text-[#080028] hover:text-[#FFA300] transition">
                  <Mail size={18} color="#FFA300" /> contact@theyoungconstituents.ca
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-3 text-[#080028] hover:text-[#FFA300] transition">
                  <Instagram size={18} color="#FFA300" /> @theyoungconstituents
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-3 text-[#080028] hover:text-[#FFA300] transition">
                  <Linkedin size={18} color="#FFA300" /> The Young Constituents
                </a>
              </li>
            </ul>
          </div>

          {/* Form */}
          <div className="lg:col-span-8">
            <form onSubmit={onSubmit} noValidate className="grid sm:grid-cols-2 gap-5">
              <div className="sm:col-span-1">
                <label htmlFor="c-name" className="field-label">Name</label>
                <input
                  id="c-name"
                  className="field"
                  value={form.name}
                  onChange={(e) => setField("name", e.target.value)}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "err-name" : undefined}
                  required
                />
                {errors.name && <p id="err-name" className="field-error">{errors.name}</p>}
              </div>
              <div className="sm:col-span-1">
                <label htmlFor="c-email" className="field-label">Email</label>
                <input
                  id="c-email"
                  type="email"
                  className="field"
                  value={form.email}
                  onChange={(e) => setField("email", e.target.value)}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "err-email" : undefined}
                  required
                />
                {errors.email && <p id="err-email" className="field-error">{errors.email}</p>}
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="c-subject" className="field-label">Subject</label>
                <input
                  id="c-subject"
                  className="field"
                  value={form.subject}
                  onChange={(e) => setField("subject", e.target.value)}
                  aria-invalid={!!errors.subject}
                />
                {errors.subject && <p className="field-error">{errors.subject}</p>}
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="c-message" className="field-label">Message</label>
                <textarea
                  id="c-message"
                  className="field"
                  rows={6}
                  value={form.message}
                  onChange={(e) => setField("message", e.target.value)}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "err-message" : undefined}
                  required
                />
                {errors.message && <p id="err-message" className="field-error">{errors.message}</p>}
              </div>
              <div className="sm:col-span-2 flex flex-col sm:flex-row sm:items-center gap-5 mt-2">
                <button type="submit" className="btn btn-primary" disabled={status === "loading"}>
                  {status === "loading" ? "Sending..." : "Send Message"}
                </button>
                {serverMsg && (
                  <p
                    role="status"
                    className="text-[14px]"
                    style={{ color: status === "ok" ? "#249EBF" : "#c0392b" }}
                  >
                    {serverMsg}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
