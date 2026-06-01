import Link from "next/link";
import Image from "next/image";
import CallButton from "../ui/buttons/callButton";
import BusinessInfo from "@/cms/business Info/businessInfo";

const quickLinks1 = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/" },
  { title: "FAQs", href: "/" },
];

const quickLinks2 = [
  { title: "Contact Us", href: "/" },
  { title: "Services", href: "/" },
  { title: "Gallery", href: "/" },
];

const servicesLinks1 = [
  { title: "Laptop Repair", href: "/" },
  { title: "Second Hand Laptops", href: "/" },
  { title: "Ram & Storage Upgrade", href: "/" },
];

const servicesLinks2 = [];

const FooterLinks = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-t from-footer-bg via-footer-bg to-footer-bg text-white font-sans">
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
              className="logo-glow text-5xl lg:text-3xl xl:text-5xl text-red-500"
            >
              <Link href="/" className="flex flex-col items-center gap-2 text-2xl font-sans font-semibold tracking-widest text-white uppercase">
                <Image
                  src={BusinessInfo.Logo}
                  alt="Repair IT MSP Logo"
                  width={100}
                  height={100}
                  className="object-cover rounded-lg"
                />
                Repair IT MSP
              </Link>
            </Link>
          </div>

          {/* CTA Button */}
          <div>
            <CallButton btnText="Call Us Now" />
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            <Link
              href="https://x.com"
              target="_blank"
              className="transition-transform duration-600 hover:-translate-y-1 text-white hover:text-primary transition-colors flex flex-col items-center justify-center"
            >
              <Image
                src="/icons/Twitter.svg"
                alt="twitter"
                width={70}
                height={70}
                style={{ width: "auto", height: "auto" }}
                className="icon-color"
              />
            </Link>
            <Link
              href="https://facebook.com"
              target="_blank"
              className="transition-transform duration-600 hover:-translate-y-1 text-white hover:text-primary transition-colors"
            >
              <Image
                src="/icons/Facebook.svg"
                alt="Facebook"
                width={28}
                height={28}
                className=""
              />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              className="transition-transform duration-600 hover:-translate-y-1 text-white hover:text-primary transition-colors"
            >
              <Image
                src="/icons/Instagram.svg"
                alt="Instagram"
                width={30}
                height={30}
                className=""
              />
            </Link>
            <Link
              href="https://youtube.com"
              target="_blank"
              className="transition-transform duration-600 hover:-translate-y-1 text-white hover:text-primary transition-colors"
            >
              <Image
                src="/icons/Youtube.svg"
                alt="YouTube"
                width={30}
                height={30}
                className=""
              />
            </Link>
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
              <p className="text-footer-form-text/80 hover:text-footer-form-text-hover text-sm md:text-base transition-colors">
                {BusinessInfo.PrimaryContactNumber}
              </p>
              <p className="text-footer-form-text/80 hover:text-footer-form-text-hover text-sm md:text-base transition-colors">
                {BusinessInfo.Email}
              </p>
              <a
                href=""
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
