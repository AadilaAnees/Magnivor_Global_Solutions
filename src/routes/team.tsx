import { createFileRoute } from "@tanstack/react-router";
import { Linkedin } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { FinalCTA } from "@/components/site/FinalCTA";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team — Magnivor Global Solutions" },
      {
        name: "description",
        content:
          "Meet the Magnivor advisory team — senior finance, tax and strategy professionals serving global clients.",
      },
      { property: "og:title", content: "Magnivor Team" },
      {
        property: "og:description",
        content: "Senior-led advisory team with international experience.",
      },
    ],
  }),
  component: TeamPage,
});

// Placeholder profiles — update with real team details when available
const TEAM = [
  {
    name: "Team Member",
    role: "Managing Partner",
    qualification: "FCA, MBA",
    experience: "15+ years",
    expertise: "Strategy · IFRS · Cross-border advisory",
    bio: "Leads Magnivor's global advisory practice across accounting, tax and CFO services.",
  },
  {
    name: "Team Member",
    role: "Director — Tax & Compliance",
    qualification: "ACA, CTA",
    experience: "12+ years",
    expertise: "Corporate tax · VAT · Transfer pricing",
    bio: "Designs cross-border tax strategies for international businesses operating in and from Sri Lanka.",
  },
  {
    name: "Team Member",
    role: "Director — Virtual CFO",
    qualification: "ACMA, CGMA",
    experience: "14+ years",
    expertise: "FP&A · Board reporting · Capital strategy",
    bio: "Embeds CFO-level leadership into growth-stage businesses across multiple sectors.",
  },
  {
    name: "Team Member",
    role: "Head of Economic Intelligence",
    qualification: "MSc Economics",
    experience: "10+ years",
    expertise: "Macroeconomics · Policy · Sector research",
    bio: "Leads Magnivor's research practice covering macro trends, policy and sector outlooks.",
  },
];

function TeamPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Team"
        title={
          <>
            Senior advisors with{" "}
            <span className="text-gradient-gold">global experience</span>
          </>
        }
        description="A multidisciplinary team combining finance, tax, strategy and economics for premium advisory delivery."
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          {/* Magazine grid: featured + 3 equal */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {TEAM.map((m, i) => (
              <TeamCard key={m.role} member={m} featured={i === 0} />
            ))}
          </div>

          <p className="mt-12 text-center text-xs text-muted-foreground">
            Profile photos and full team details will be added soon.
          </p>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}

function TeamCard({
  member,
  featured,
}: {
  member: (typeof TEAM)[number];
  featured?: boolean;
}) {
  const initials = member.name
    .split(" ")
    .map((n) => n[0])
    .join("");
  const expertise = member.expertise.split("·").map((s) => s.trim());

  return (
    <article
      className={`group relative flex flex-col items-center rounded-2xl border border-white/10 p-8 text-center transition duration-300 hover:-translate-y-1.5 hover:border-gold/60 hover:shadow-elegant ${
        featured ? "md:col-span-2 lg:col-span-3" : ""
      }`}
      style={{ backgroundColor: "#0B1F3B" }}
    >
      {/* Avatar */}
      <div
        className="flex h-20 w-20 items-center justify-center rounded-full ring-1 ring-gold/40"
        style={{ backgroundColor: "var(--emerald-dark)" }}
      >
        <span className="font-display text-xl font-bold text-gold">{initials}</span>
      </div>

      {/* Gold separator */}
      <span className="mt-5 block h-px w-12 bg-gold" />

      <h3 className="mt-5 text-lg font-bold text-white">{member.name}</h3>
      <p className="mt-1 text-sm font-semibold text-emerald">{member.role}</p>

      <p className="mt-2 text-[11px] uppercase tracking-wider text-white/50">
        {member.qualification} · {member.experience}
      </p>

      {/* Expertise pills */}
      <ul className="mt-4 flex flex-wrap justify-center gap-1.5">
        {expertise.map((tag) => (
          <li
            key={tag}
            className="rounded-full border border-gold/50 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-gold"
          >
            {tag}
          </li>
        ))}
      </ul>

      <p
        className={`mt-5 text-sm leading-relaxed ${featured ? "max-w-2xl" : ""}`}
        style={{ color: "#9CA3AF" }}
      >
        {member.bio}
      </p>

      <a
        href="#"
        aria-label={`${member.name} on LinkedIn`}
        className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-gold transition hover:text-white"
      >
        <Linkedin className="h-4 w-4" /> LinkedIn
      </a>
    </article>
  );
}
