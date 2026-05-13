import Link from "next/link";
import { navLinks, aboutLinks, servicesLinks } from "./navData";
import MegaMenu from "./megaMenu";

const NavLinks = ({ activeMega, setActiveMega }) => {
  return (
    <div className="liquid-glass-strong-light rounded-full px-5 py-3 flex hidden lg:flex justify-center items-center gap-8">
      <Link
        href="/"
        className="relative text-white/85 font-extrabold text-[0.85rem] tracking-widest no-underline py-1 transition-colors duration-250 hover:text-white group"
      >
        HOME
        <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary rounded-sm transition-all duration-300 shadow-[0_0_6px_rgba(247,109,54,0.4)] group-hover:w-full group-hover:left-0" />
      </Link>

      {/* About - with mega menu */}
      <div
        onMouseEnter={() => setActiveMega("about")}
        className="flex items-center gap-1 cursor-pointer group"
      >
        <Link
          href="/"
          className="relative text-white/85 font-extrabold text-[0.85rem] tracking-widest no-underline py-1 transition-colors duration-250 hover:text-white"
        >
          ABOUT
          <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary rounded-sm transition-all duration-300 shadow-[0_0_6px_rgba(247,109,54,0.4)] group-hover:w-full group-hover:left-0" />
        </Link>
        <svg
          className={`w-4 h-4 text-white/50 transition-all duration-250 group-hover:text-primary ${activeMega === "about" ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      {/* Services - with mega menu */}
      <div
        onMouseEnter={() => setActiveMega("services")}
        className="flex items-center gap-1 cursor-pointer group"
      >
        <Link
          href="/"
          className="relative text-white/85 font-extrabold text-[0.85rem] tracking-widest no-underline py-1 transition-colors duration-250 hover:text-white"
        >
          SERVICES
          <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary rounded-sm transition-all duration-300 shadow-[0_0_6px_rgba(247,109,54,0.4)] group-hover:w-full group-hover:left-0" />
        </Link>
        <svg
          className={`w-4 h-4 text-white/50 transition-all duration-250 group-hover:text-primary ${activeMega === "services" ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      <Link
        href="/"
        className="relative text-white/85 font-extrabold text-[0.85rem] tracking-widest no-underline py-1 transition-colors duration-250 hover:text-white group"
      >
        CONTACT
        <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary rounded-sm transition-all duration-300 shadow-[0_0_6px_rgba(247,109,54,0.4)] group-hover:w-full group-hover:left-0" />
      </Link>
    </div>
  );
};

export default NavLinks;
