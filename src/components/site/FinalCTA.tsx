import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { waLink } from "@/lib/site";
import { WhatsAppIcon } from "./WhatsAppIcon";
import ctaSkyline from "@/assets/cta-skyline.jpg";

export function FinalCTA() {
  return (
    <section className="relative isolate overflow-hidden py-20 md:py-28">
      <img
        src={ctaSkyline}
        alt=""
        aria-hidden
        loading="lazy"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div aria-hidden className="absolute inset-0 -z-10" style={{ backgroundColor: "rgba(2, 16, 36, 0.82)" }} />
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-10 shadow-elegant backdrop-blur-md md:p-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-32 -right-32 h-[400px] w-[400px] rounded-full bg-emerald opacity-25 blur-[120px]"
          />
          <div className="relative grid items-center gap-8 md:grid-cols-[1.4fr_1fr]">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
                Let's Talk
              </span>
              <h2 className="mt-3 text-3xl font-bold leading-tight text-white md:text-4xl">
                Ready to transform your{" "}
                <span className="text-gradient-gold">financial strategy?</span>
              </h2>
              <p className="mt-4 max-w-xl text-white/75">
                Speak with a Magnivor advisor about accounting, tax, CFO advisory
                or outsourcing — wherever you are.
              </p>
            </div>
            <div className="flex flex-col gap-3 md:items-end">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-md gradient-emerald px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition hover:opacity-90"
              >
                Contact Our Experts <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
              >
                <WhatsAppIcon className="h-4 w-4" /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
