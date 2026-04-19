import Link from "next/link";
import Image from "next/image";
import CallButton from "../ui/buttons/callButton";

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
    <footer className="bg-gradient-to-t from-[#001f4d] via-secondary to-[#003d7a] text-white font-sans">
      {/* Main Footer */}
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-6 px-6 sm:px-10 lg:px-16 py-12 lg:py-16">
        {/* Col 1 - Logo + CTA + Social */}
        <div className="flex flex-col items-center gap-6 w-full lg:w-1/4">
          {/* Logo */}
          <div className="flex flex-col gap-1">
            <Link
              href="/"
              className="logo-glow text-5xl lg:text-3xl xl:text-5xl text-red-500"
            >
              <span className="text-white">Logo</span>
            </Link>
          </div>

          {/* CTA Button */}
          <div>
            <CallButton btnText="Call Us Now" />
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            <Link
              href=""
              target="_blank"
              className="transition-transform duration-600 hover:-translate-y-1 text-white hover:text-primary transition-colors flex flex-col items-center justify-center"
            >
              <Image
                src="/icons/just-dial-logo.webp"
                alt="Just Dial Logo"
                width={70}
                height={70}
                style={{ width: 'auto', height: 'auto' }}
                className="icon-color"
              />
            </Link>
            {/* <Link
              href="https://facebook.com"
              target="_blank"
              className="transition-transform duration-600 hover:-translate-y-1 text-white hover:text-primary transition-colors"
            >
              <Image
                src="/icons/facebook.png"
                alt="Facebook"
                width={30}
                height={30}
                className="icon-color"
              />
            </Link> */}
            {/* <Link
              href="https://instagram.com"
              target="_blank"
              className="transition-transform duration-600 hover:-translate-y-1 text-white hover:text-primary transition-colors"
            >
              <Image
                src="/icons/instagram.png"
                alt="Instagram"
                width={30}
                height={30}
                className="icon-color"
              />
            </Link> */}
            {/* <Link
              href="https://youtube.com"
              target="_blank"
              className="transition-transform duration-600 hover:-translate-y-1 text-white hover:text-primary transition-colors"
            >
              <Image
                src="/icons/youtube.png"
                alt="YouTube"
                width={30}
                height={30}
                className="icon-color"
              />
            </Link> */}
          </div>
        </div>

        {/* Col 2 - Quick Links */}
        <div className="flex flex-col gap-4 w-full lg:w-1/4">
          <h4 className="text-white text-left text-base lg:text-lg font-bold tracking-widest uppercase border-b border-white/30 pb-3">
            Quick Links
          </h4>
          <div className="grid grid-cols-2 gap-x-4 gap-y-3">
            <div className="flex flex-col gap-3">
              {quickLinks1.map((link) => (
                <Link
                  key={link.title + link.href}
                  href={link.href}
                  className="text-white/80 hover:text-white text-sm md:text-base transition-colors border-b border-white/20 pb-2"
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
                  className="text-white/80 hover:text-white text-sm md:text-base transition-colors border-b border-white/20 pb-2"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Col 3 - Services */}
        <div className="flex flex-col gap-4 w-full lg:w-1/4">
          <h4 className="text-white text-left text-base lg:text-lg font-bold tracking-widest uppercase border-b border-white/30 pb-3">
            Services
          </h4>
          <div className="">
            <div className="flex flex-col gap-3">
              {servicesLinks1.map((link) => (
                <Link
                  key={link.title + link.href}
                  href={link.href}
                  className="text-white/80 hover:text-white text-sm md:text-base transition-colors border-b border-white/20 pb-2"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            {/* <div className="flex flex-col gap-3">
              {servicesLinks2.map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  className="text-white/80 hover:text-white text-sm md:text-base transition-colors border-b border-white/20 pb-2"
                >
                  {link.title}
                </Link>
              ))}
            </div> */}
          </div>
        </div>

        {/* Col 4 - Contact Us */}
        <div className="flex flex-col gap-4 w-full lg:w-1/4">
          <h4 className="text-white text-left text-base lg:text-lg font-bold tracking-widest uppercase border-b border-white/30 pb-3">
            Contact Us
          </h4>
          <div className="flex flex-col gap-4">
            <p className="text-white/80 text-sm md:text-base hover:text-white transition-colors">
              +91 88797 32594
            </p>
            <p className="text-white/80 text-sm md:text-base hover:text-white transition-colors">
              rninfotechrepair@gmail.com
            </p>
            <a
              href="https://www.google.com/maps/place/Lamington+Rd,+Mumbai,+Maharashtra/@18.9623965,72.8152546,17z/data=!4m6!3m5!1s0x3be7ce12e0ccf523:0x28e71cda40d36bb6!8m2!3d18.9625768!4d72.8179075!16zL20vMDlmcXl4?entry=ttu&g_ep=EgoyMDI2MDQwNS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 text-sm md:text-base leading-relaxed hover:text-white transition-colors"
            >
              Room No. 17, Babu Building 1st Floor, Tara Temple Lane, Leamington
              Road, Grant Road, Mumbai-400007, Maharashtra
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 px-6 sm:px-10 lg:px-16 py-6 flex flex-col items-center gap-2 text-center">
        <p className="text-white/70 text-xs sm:text-sm">
          © 2026 &nbsp; The content on this website is owned by us and our
          licensors
        </p>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-white/70">
          <Link
            href="/privacy-policy"
            className="hover:text-white transition-colors"
          >
            Privacy Policy
          </Link>
          <Link href="" className="hover:text-white transition-colors">
            Do Not Sell/Share My Personal Information
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default FooterLinks;
