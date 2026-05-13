import React from "react";
import Image from "next/image";
import ContactForm from "../ui/contactForm";
import CallButton from "../ui/buttons/callButton";

const contactInfo = [
  {
    icon: "/icons/call.svg",
    alt: "call icon",
    text: "+91 9535216410",
    link: "tel:+91 9535216410",
    border: true,
  },
  {
    icon: "/icons/mail.svg",
    alt: "email icon",
    text: "ramesh.kumar@rninfotech.co.in",
    link: "mailto:ramesh.kumar@rninfotech.co.in",
    border: true,
  },
  {
    icon: "/icons/location.svg",
    alt: "location icon",
    text: "23/2, Jaraganahalli Grama Main road, GKM College Road, Jaraganahalli, Bengaluru, Karnataka, 560078",
    link: "",
    border: true,
  },
];

const FooterForm = () => {
  return (
    <section className="relative overflow-hidden bg-cover bg-center flex flex-col lg:flex-row gap-6 py-8 px-5 md:py-12 md:px-8 lg:py-12 lg:px-16 2xl:px-35 2xl:py-15"
      style={{
        backgroundImage: "url('/images/why-bg.webp')",
        backgroundColor: '#1a0d07',
      }}
    >
      {/* Dark overlay for glass visibility */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a0d07]/90 via-[#2a150b]/85 to-[#0a0503]/90 z-0" />

      {/* Floating orbs */}
      <div className="floating-orb floating-orb-1 top-[10%] left-[5%]" />
      <div className="floating-orb floating-orb-2 bottom-[10%] right-[10%]" />

      {/* Left - Contact Info — Liquid Glass */}
      <div className="relative z-10 flex flex-col gap-5 items-start w-full lg:w-1/2 rounded-2xl p-6 md:p-10 liquid-glass-form iridescent-border">
        <div className="glass-content flex flex-col gap-5 w-full">
          <div className="flex flex-col gap-3">
            <h3 className="font-serif text-xl md:text-2xl 2xl:text-3xl text-white">
              Contact Our Experts
            </h3>
            <p className="w-full md:w-[80%] font-sans text-base md:text-[18px] font-medium text-white/70">
              Whether you have questions about our services, need assistance with
            </p>
          </div>

          <div className="w-full">
            {/* Contact info rows */}
            {contactInfo.map((item) => (
              <div
                key={item.alt}
                className="flex gap-4 md:gap-5 border-b border-white/10 w-full py-4 md:py-6 items-center"
              >
                <Image
                  src={item.icon}
                  alt={item.alt}
                  width={24}
                  height={24}
                  className="icon-color md:w-[27px] md:h-[27px] flex-shrink-0 opacity-80"
                />
                <a
                  href={item?.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="break-all text-white/80 text-base font-sans md:text-lg font-medium hover:text-primary transition-colors"
                >
                  {item.text}
                </a>
              </div>
            ))}

            {/* Hours */}
            <div className="flex gap-4 md:gap-5 w-full py-4 md:py-6">
              <Image
                src="/icons/clock.svg"
                alt="time icon"
                width={24}
                height={24}
                className="icon-color md:w-[27px] md:h-[27px] flex-shrink-0 self-start mt-1 opacity-80"
              />
              <div className="text-white/80 flex flex-col gap-1">
                <div className="flex gap-4">
                  <p className="text-base font-sans md:text-lg font-medium w-20 md:w-27">
                    Mon-Sat
                  </p>
                  <p className="text-base font-sans md:text-lg">
                    11:00 AM - 09:00 PM
                  </p>
                </div>
                <div className="flex gap-4">
                  <p className="text-base font-sans md:text-lg font-medium w-20 md:w-27">
                    Sun
                  </p>
                  <p className="text-base font-sans md:text-lg">
                    Only Appointment
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex items-center justify-center w-full my-2 md:my-0">
            <CallButton btnText="Call Now" />
          </div>
        </div>
      </div>

      {/* Right - Contact Form — Liquid Glass */}
      <div className="relative z-10 flex flex-col gap-5 items-start w-full lg:w-1/2 rounded-2xl p-6 md:p-8 liquid-glass-form iridescent-border">
        <div className="glass-content flex flex-col gap-5 w-full">
          <div className="flex flex-col gap-3">
            <h3 className="font-serif text-xl md:text-2xl 2xl:text-3xl text-white">
              Send Us A Message
            </h3>
            <p className="w-full md:w-[80%] font-sans text-base md:text-[18px] font-medium text-white/70">
              Have a question or need assistance? Fill out the form below and our
            </p>
          </div>

          <div className="w-full">
            <ContactForm isGlass={true} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterForm;
