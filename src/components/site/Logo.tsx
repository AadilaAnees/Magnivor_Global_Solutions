import { Link } from "@tanstack/react-router";

export function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const text = variant === "light" ? "text-white" : "text-navy";
  const sub = variant === "light" ? "text-white/60" : "text-muted-foreground";
  return (
    <Link to="/" className="group flex items-center gap-2.5">
      <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-md gradient-navy ring-1 ring-white/10">
        <span className="font-display text-lg font-bold text-white">M</span>
        <span className="absolute -bottom-0.5 -right-0.5 h-2 w-2 rounded-full bg-gold ring-2 ring-white" />
      </span>
      <span className="leading-tight">
        <span className={`block font-display text-base font-bold tracking-tight ${text}`}>
          MAGNIVOR
        </span>
        <span className={`block text-[10px] font-medium uppercase tracking-[0.18em] ${sub}`}>
          Global Solutions
        </span>
      </span>
    </Link>
  );
}
