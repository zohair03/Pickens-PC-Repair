import Link from "next/link";
import { navLinks, aboutLinks, servicesLinks } from "./navData";
import MegaMenu from "./megaMenu";

const NavLinks = ({ activeMega, setActiveMega }) => {
  return (
    <div className="hidden lg:flex justify-center items-center gap-6 text-white font-semibold">
      <Link href="/">HOME</Link>

      {/* About - with mega menu */}
      <div onMouseEnter={() => setActiveMega("about")} className="flex items-center gap-1">
        <Link
          href="/"
          className="flex items-center gap-1 text-white font-semibold hover:text-primary transition-colors"
        >
          ABOUT
        </Link>
        <svg
          className={`w-6 h-6 transition-transform duration-200 ${activeMega === "about" ? "rotate-180" : ""}`}
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
      <div onMouseEnter={() => setActiveMega("services")} className="flex items-center gap-1">
        <Link
          href="/"
          className="flex items-center gap-1 text-white font-semibold hover:text-primary transition-colors"
        >
          SERVICES
        </Link>
        <svg
            className={`w-6 h-6 transition-transform duration-200 ${activeMega === "services" ? "rotate-180" : ""}`}
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
      <Link href="/">CONTACT</Link>
    </div>
  );
};

export default NavLinks;
