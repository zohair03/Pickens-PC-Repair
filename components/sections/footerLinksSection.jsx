import Link from "next/link";
import Image from "next/image";
import CallButton from "../ui/buttons/callButton";
import BusinessInfo from "@/cms/business Info/businessInfo";

// Instagram Icon
const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#ffffff"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-7 h-7 shrink-0 text-zinc-600"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

// Facebook Icon
const FacebookIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#ffffff"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-7 h-7 shrink-0 text-zinc-600"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

// LinkedIn Icon
const LinkedinIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#ffffff"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-7 h-7 shrink-0 text-zinc-600"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const quickLinks1 = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about" },
  { title: "FAQs", href: "/faqs" },
];

const quickLinks2 = [
  { title: "Contact Us", href: "/contact" },
  { title: "Services", href: "/services" },
  { title: "Gallery", href: "/gallery" },
];

const servicesLinks1 = [
  { title: "PC & Mac Repairs", href: "/services/pc-and-mac-repairs" },
  { title: "On-Site & In-Home Support", href: "/services/onsite-and-home-support" },
  { title: "Virus & Malware Removal", href: "/services/virus-and-malware-removal" },
  { title: "Data Backup & Recovery", href: "/services/data-backup-and-recovery" },
  { title: "Computer Networking", href: "/services/computer-networking" },
  { title: "System Tune-Ups & Upgrades", href: "/services/system-tune-ups-and-upgrades" },
];

const FooterLinks = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-t from-footer-bg via-footer-bg to-[#071a40] text-white font-sans">
      {/* Floating orbs */}
      <div className="floating-orb floating-orb-1 top-[20%] left-[5%] opacity-50" />
      <div className="floating-orb floating-orb-3 bottom-[15%] right-[8%] opacity-40" />

      {/* Main Footer */}
      <div className="relative z-10 flex flex-col lg:flex-row gap-10 lg:gap-6 px-6 sm:px-10 lg:px-16 py-12 lg:py-16">
        {/* Col 1 - Logo + CTA + Social */}
        <div className="flex flex-col items-center gap-6 w-full lg:w-1/4">
          {/* Logo */}
          <div className="flex flex-col gap-1">
            <Link
              href="/"
              className="logo-glow text-5xl lg:text-3xl xl:text-5xl text-red-500 flex flex-col items-center"
            >
              {BusinessInfo.isLogo ? (
                <Image
                  src={BusinessInfo.Logo}
                  alt="Repair IT MSP Logo"
                  width={100}
                  height={100}
                  className="object-cover rounded-lg"
                />
              ) : (
                <p className="text-3xl font-bold leading-none text-center tracking-widest text-white uppercase">
                  Pickens<br />PC Repair
                </p>
              )}
            </Link>
          </div>

          {/* CTA Button */}
          <div>
            <CallButton btnText="Call Us Now" />
          </div>

          {/* Social Icons */}
          <div className="mt-2 flex gap-4">
            <a className="hover:scale-110 active:scale-95 transition-all duration-200" href={BusinessInfo.SocialMedia.Facebook} target="_blank" rel="noopener noreferrer">
              <FacebookIcon />
            </a>
            <a className="hover:scale-110 active:scale-95 transition-all duration-200" href={BusinessInfo.SocialMedia.Instagram} target="_blank" rel="noopener noreferrer">
              <InstagramIcon />
            </a>
            <a className="hover:scale-110 active:scale-95 transition-all duration-200" href={BusinessInfo.SocialMedia.Linkedin} target="_blank" rel="noopener noreferrer">
              <LinkedinIcon />
            </a>
          </div>
        </div>

        {/* Col 2 - Quick Links — Glass Panel */}
        <div className="flex flex-col gap-4 w-full lg:w-1/4 liquid-glass-card rounded-2xl p-6">
          <div className="glass-content flex flex-col gap-4">
            <h4 className="text-white text-left text-base lg:text-lg font-bold tracking-widest uppercase border-b border-white/20 pb-3">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-3">
              <div className="flex flex-col gap-3">
                {quickLinks1.map((link) => (
                  <Link
                    key={link.title + link.href}
                    href={link.href}
                    className="text-footer-form-text/80 hover:text-footer-form-text-hover text-sm md:text-base transition-colors border-b border-white/10 pb-2"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col gap-3">
                {quickLinks2.map((link, i) => (
                  <Link
                    key={i}
                    href={link.href}
                    className="text-footer-form-text/80 hover:text-footer-form-text-hover text-sm md:text-base transition-colors border-b border-white/10 pb-2"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Col 3 - Services — Glass Panel */}
        <div className="flex flex-col gap-4 w-full lg:w-1/4 liquid-glass-card rounded-2xl p-6">
          <div className="glass-content flex flex-col gap-4">
            <h4 className="text-white text-left text-base lg:text-lg font-bold tracking-widest uppercase border-b border-white/20 pb-3">
              Services
            </h4>
            <div className="">
              <div className="flex flex-col gap-3">
                {servicesLinks1.map((link) => (
                  <Link
                    key={link.title + link.href}
                    href={link.href}
                    className="text-footer-form-text/80 hover:text-footer-form-text-hover text-sm md:text-base transition-colors border-b border-white/10 pb-2"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Col 4 - Contact Us — Glass Panel */}
        <div className="flex flex-col gap-4 w-full lg:w-1/4 liquid-glass-card rounded-2xl p-6">
          <div className="glass-content flex flex-col gap-4">
            <h4 className="text-white text-left text-base lg:text-lg font-bold tracking-widest uppercase border-b border-white/20 pb-3">
              Contact Us
            </h4>
            <div className="flex flex-col gap-4">
              <a href={`tel:${BusinessInfo.PrimaryContactNumber}`} className="text-footer-form-text/80 hover:text-footer-form-text-hover text-sm md:text-base transition-colors">
                {BusinessInfo.PrimaryContactNumber}
              </a>
              <a href={`mailto:${BusinessInfo.Email}`} className="text-footer-form-text/80 hover:text-footer-form-text-hover text-sm md:text-base transition-colors">
                {BusinessInfo.Email}
              </a>
              <a
                href={BusinessInfo.GoogleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="text-footer-form-text/80 hover:text-footer-form-text-hover text-sm md:text-base leading-relaxed transition-colors"
              >
                {BusinessInfo.Address}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-white/10 px-6 sm:px-10 lg:px-16 py-6 flex flex-col items-center gap-2 text-center">
        <p className="text-white/70 text-xs sm:text-sm">
          © 2026 &nbsp; The content on this website is owned by us and our
          licensors
        </p>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-white/70">
          <Link href="/" className="hover:text-footer-form-text-hover transition-colors">
            Privacy Policy
          </Link>
          <Link href="" className="hover:text-footer-form-text-hover transition-colors">
            Do Not Sell/Share My Personal Information
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default FooterLinks;
