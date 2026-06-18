import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { SITE, SERVICES, waLink } from "@/lib/site";

const MESSAGE_MAX = 400;

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Magnivor Global Solutions" },
      {
        name: "description",
        content:
          "Speak with a Magnivor advisor. Email, phone, WhatsApp or contact form — we respond within one business day.",
      },
      { property: "og:title", content: "Contact Magnivor" },
      {
        property: "og:description",
        content: "Let's build your financial future — get in touch today.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const remaining = MESSAGE_MAX - message.length;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch(`https://formspree.io/f/${SITE.formspreeId}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
        setMessage("");
      } else {
        const json = await res.json().catch(() => ({}));
        setErrorMsg(json?.errors?.[0]?.message || "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  };

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={
          <>
            Let's build your{" "}
            <span className="text-gradient-gold">financial future</span>
          </>
        }
        description="Three ways to reach us: structured inquiries via the form, formal proposals by email, or instant chat on WhatsApp."
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_1.2fr] lg:px-10">
          {/* Contact info */}
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald">
              Direct Contact
            </span>
            <h2 className="mt-3 text-2xl font-bold text-navy md:text-3xl">
              Talk to an advisor
            </h2>
            <p className="mt-3 text-muted-foreground">
              Senior team responses within one business day.
            </p>

            <ul className="mt-8 space-y-5">
              <li className="flex items-start gap-4">
                <span className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-emerald/10 text-emerald">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Email</p>
                  <a href={`mailto:${SITE.email}`} className="text-sm font-semibold text-navy hover:text-emerald break-all">
                    {SITE.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-emerald/10 text-emerald">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Phone</p>
                  <a href={`tel:${SITE.phoneTel}`} className="text-sm font-semibold text-navy hover:text-emerald">
                    {SITE.phoneDisplay}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-emerald/10 text-emerald">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Location</p>
                  <p className="text-sm font-semibold text-navy">Sri Lanka · Global Remote Advisory</p>
                  <p className="mt-1 text-xs text-muted-foreground">{SITE.address}</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-emerald/10 text-emerald">
                  <Clock className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Hours</p>
                  <p className="text-sm font-semibold text-navy">Mon–Fri · 9:00–18:00 (IST)</p>
                </div>
              </li>
            </ul>

            {/* WhatsApp callout */}
            <div className="mt-10 rounded-2xl border border-emerald/20 bg-emerald/5 p-7">
              <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald" /> Instant Response Enabled
              </span>
              <h3 className="mt-3 text-xl font-bold text-navy">Prefer instant response?</h3>
              <p className="mt-2 text-sm text-foreground/80">
                Connect instantly with our advisory team via WhatsApp for faster consultation support.
              </p>
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:opacity-90"
                style={{ backgroundColor: "var(--whatsapp)" }}
              >
                <WhatsAppIcon className="h-4 w-4" /> Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-2xl border border-border bg-white p-7 shadow-soft md:p-10">
            <h3 className="text-xl font-bold text-navy">Request a consultation</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Structured inquiry — we respond within one business day.
            </p>
            <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Full name" name="name" required />
                <Field label="Email address" name="email" type="email" required />
              </div>
              <Field label="Company name" name="company" />
              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-navy/70">
                  Service required
                </label>
                <select
                  name="service"
                  required
                  defaultValue=""
                  className="w-full rounded-md border border-border bg-white px-4 py-3 text-sm outline-none focus:border-emerald"
                >
                  <option value="" disabled>Select a service…</option>
                  {SERVICES.map((s) => (
                    <option key={s.slug} value={s.title}>{s.title}</option>
                  ))}
                  <option value="Other">Other / not sure yet</option>
                </select>
              </div>
              <div>
                <div className="mb-1.5 flex items-center justify-between">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-navy/70">
                    Message<span className="text-emerald"> *</span>
                  </label>
                  <span
                    className={`text-[11px] font-medium tabular-nums ${
                      remaining <= 0
                        ? "text-red-600"
                        : remaining <= 40
                          ? "text-amber-600"
                          : "text-muted-foreground"
                    }`}
                    aria-live="polite"
                  >
                    {remaining} / {MESSAGE_MAX} characters left
                  </span>
                </div>
                <textarea
                  name="message"
                  required
                  rows={5}
                  maxLength={MESSAGE_MAX}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about your business and what you'd like help with…"
                  className="w-full resize-none rounded-md border border-border bg-white px-4 py-3 text-sm outline-none focus:border-emerald"
                />
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-2 rounded-md gradient-emerald px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition hover:opacity-90 disabled:opacity-60"
              >
                {status === "sending" ? "Sending…" : "Send Inquiry"}
              </button>
              {status === "success" && (
                <p className="rounded-md bg-emerald/10 px-4 py-3 text-sm font-medium text-emerald-dark">
                  Thank you — your inquiry has been sent. We'll be in touch within one business day.
                </p>
              )}
              {status === "error" && (
                <p className="rounded-md bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                  {errorMsg}
                </p>
              )}
              <p className="text-[11px] text-muted-foreground">
                By submitting you agree to be contacted about your inquiry. We do not share your details.
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-navy/70">
        {label}{required && <span className="text-emerald"> *</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-md border border-border bg-white px-4 py-3 text-sm outline-none focus:border-emerald"
      />
    </div>
  );
}
