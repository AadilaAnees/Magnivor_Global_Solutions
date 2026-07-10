import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { Logo } from "./Logo";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { SITE, SERVICES, waLink } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-navy text-white/80">
      <div className="mx-auto max-w-screen-2xl px-6 py-16 lg:px-10">
        <div className="grid gap-x-4 gap-y-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 xl:gap-x-6">
          
          {/* 1. BRAND COLUMN */}
          <div className="xl:col-span-1">
            <Logo variant="light" />
            <p className="mt-5 text-[13px] text-white/65">
              A modern professional services firm providing accounting, advisory, and BPO solutions to businesses worldwide.
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
                  className="group inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/75 transition hover:border-[#F4B942]/60 hover:bg-[#F4B942]/15 hover:text-[#F4B942]"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* 2. WHAT WE DO */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-widest text-[#82B2CB]">
              What We Do
            </h4>
            <ul className="mt-4 space-y-2 text-[13px]">
              {SERVICES.map((s) => (
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

          {/* 3. WHO WE ARE */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-widest text-[#82B2CB]">
              Who We Are
            </h4>
            <ul className="mt-4 space-y-2 text-[13px]">
              <li><Link to="/about" className="text-white/70 hover:text-white">About MGS</Link></li>
              <li><Link to="/leadership" className="text-white/70 hover:text-white">Our Leadership</Link></li>
              <li><Link to="/approach" className="text-white/70 hover:text-white">Our Approach</Link></li>
              <li><Link to="/values" className="text-white/70 hover:text-white">Our Values</Link></li>
              <li><Link to="/global-presence" className="text-white/70 hover:text-white">Global Presence</Link></li>
            </ul>
          </div>

          {/* 4. INSIGHTS & MEDIA */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-widest text-[#82B2CB]">
              Insights & Media
            </h4>
            <ul className="mt-4 space-y-2 text-[13px]">
              <li><Link to="/articles" className="text-white/70 hover:text-white">Articles</Link></li>
              <li><Link to="/news" className="text-white/70 hover:text-white">News & Updates</Link></li>
              <li><Link to="/mentions" className="text-white/70 hover:text-white">Media Mentions</Link></li>
              <li><Link to="/case-studies" className="text-white/70 hover:text-white">Case Studies</Link></li>
              <li><Link to="/events" className="text-white/70 hover:text-white">Events</Link></li>
            </ul>
          </div>

          {/* 5. RESOURCES */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-widest text-[#82B2CB]">
              Resources
            </h4>
            <ul className="mt-4 space-y-2 text-[13px]">
              <li><Link to="/brochures" className="text-white/70 hover:text-white">Brochures</Link></li>
              <li><Link to="/guides" className="text-white/70 hover:text-white">Guides & eBooks</Link></li>
              <li><Link to="/ifrs" className="text-white/70 hover:text-white">IFRS/IAS</Link></li>
              <li><Link to="/links" className="text-white/70 hover:text-white">Other Useful Links</Link></li>
              <li><Link to="/faqs" className="text-white/70 hover:text-white">FAQs</Link></li>
            </ul>
          </div>

          {/* 6. CONTACT US */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-widest text-[#82B2CB]">
              Contact Us
            </h4>
            <ul className="mt-4 space-y-2 text-[13px]">
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 flex-none text-[#82B2CB]" />
                <a
                  href={`mailto:${SITE.email}`}
                  className="block text-white/70 hover:text-white break-all"
                >
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 flex-none text-[#82B2CB]" />
                <a href={`tel:${SITE.phoneTel}`} className="text-white/70 hover:text-white">
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 flex-none text-[#82B2CB]" />
                <span className="text-white/70">{SITE.address}</span>
              </li>
            </ul>
            <div className="mt-5">
              <p className="text-[13px] text-white/90">Mon–Fri | 9.00 AM - 6.00 PM</p>
              <Link to="/contact">
                <button className="mt-3 w-full rounded-md bg-[#F4B942] px-3 py-2 text-[13px] font-semibold text-navy transition hover:bg-[#F4B942]/90">
                  Book a Consultation
                </button>
              </Link>
            </div>
          </div> {/* Added missing closing div here */}
        </div>

        {/* 7. NEWSLETTER & LEGAL */}
        <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-10 md:flex-row md:items-start">
          <div className="flex flex-col">
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#82B2CB]">
              Newsletter
            </h4>
            <p className="mt-2 text-sm text-white/70">
              Stay updated with our latest insights and updates.
            </p>
            
            <div className="mt-6 flex items-center gap-3 text-sm text-white/50">
              <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
              <span className="text-white/20">|</span>
              <Link to="/terms" className="hover:text-white">Terms of Use</Link>
            </div>
          </div>
          
          <div className="flex w-full max-w-md flex-col gap-3">
            <form className="flex w-full flex-col gap-3 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                className="w-full rounded-md border border-white/20 bg-transparent px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:border-[#82B2CB] focus:outline-none focus:ring-1 focus:ring-[#82B2CB]"
                required
              />
              <button
                type="submit"
                className="shrink-0 rounded-md bg-[#F4B942] px-6 py-2.5 text-sm font-semibold text-navy transition hover:bg-[#F4B942]/90"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* SUBFOOTER */}
        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-white/50">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
