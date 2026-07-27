import { Link } from "@tanstack/react-router";
import MgsIcon from "@/assets/Magnivor_logo_transparent_v2.png";

export function Logo() {
  return (
    <Link to="/" className="group flex items-center">
      <img 
        src={MgsIcon} 
        alt="Magnivor Global Solutions" 
        className="h-12 sm:h-14 w-auto object-contain" 
      />
    </Link>
  );
}