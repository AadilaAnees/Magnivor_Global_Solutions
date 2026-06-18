import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import { Logo } from "./Logo";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { SITE, SERVICES, waLink } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-navy text-white/80">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <Logo variant="light" />
            <p className="mt-5 text-sm text-white/65">
              Premium international consulting and financial advisory — clarity,
              compliance and growth for global businesses.
            </p>
            <div className="mt-6 flex items-center gap-2.5">
              {[
                { href: SITE.social.facebook, label: "Facebook", Icon: Facebook },
                { href: SITE.social.instagram, label: "Instagram", Icon: Instagram },
                { href: SITE.social.linkedin, label: "LinkedIn", Icon: Linkedin },
                { href: waLink(), label: "WhatsApp", Icon: WhatsAppIcon },
              ].map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="group inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/75 transition hover:border-gold/60 hover:bg-gold/15 hover:text-gold"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
              Services
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {SERVICES.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="text-white/70 hover:text-white"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
              Company
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link to="/about" className="text-white/70 hover:text-white">About</Link></li>
              <li><Link to="/team" className="text-white/70 hover:text-white">Team</Link></li>
              <li><Link to="/insights" className="text-white/70 hover:text-white">Insights</Link></li>
              <li><Link to="/contact" className="text-white/70 hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
              Contact
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 flex-none text-emerald" />
                <a
                  href={`mailto:${SITE.email}`}
                  className="block min-w-0 text-xs text-white/70 hover:text-white sm:text-sm"
                  style={{ wordBreak: "keep-all", overflowWrap: "normal" }}
                >
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 flex-none text-emerald" />
                <a href={`tel:${SITE.phoneTel}`} className="text-white/70 hover:text-white">
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 flex-none text-emerald" />
                <span className="text-white/70">{SITE.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <p>Sri Lanka · Global Remote Advisory</p>
        </div>
      </div>
    </footer>
  );
}
