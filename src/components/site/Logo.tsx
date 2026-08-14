import { Link } from "@tanstack/react-router";
import MgsIcon from "@/assets/Horizontal Logo_Transparent-05.png";

interface LogoProps {
  className?: string;
  variant?: "light" | "dark";
}

export function Logo({ className }: LogoProps = {}) {
  return (
    <Link to="/" className="group flex items-center shrink-0">
      <img
        src={MgsIcon}
        alt="Magnivor Global Solutions"
        className={className || "h-11 sm:h-12 lg:h-14 w-auto object-contain transition-opacity duration-200 hover:opacity-90"}
      />
    </Link>
  );
}