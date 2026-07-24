import { Link } from "@tanstack/react-router";
import MgsIcon from "@/assets/mgs_icon-removebg.png"; // Use your cropped icon-only file here

export function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const text = variant === "light" ? "text-white" : "text-navy";
  const sub = variant === "light" ? "text-white/70" : "text-muted-foreground";

  return (
    <Link to="/" className="group flex items-center gap-3">
      {/* Crisp Icon / Diamond Graphic */}
      <img 
        src={MgsIcon} 
        alt="MGS Logo" 
        className="h-10 sm:h-12 w-auto object-contain" 
      />

      {/* High-Resolution Vector Text (Always sharp and fully visible) */}
      <span className="leading-tight flex flex-col">
        <span className={`font-display text-lg sm:text-xl font-black tracking-wider ${text}`}>
          MGS
        </span>
        <span className={`text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] ${sub}`}>
          Magnivor Global Solutions
        </span>
      </span>
    </Link>
  );
}