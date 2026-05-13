import Image from "next/image";
import PrimaryBtn from "../ui/buttons/primaryBtn";
import Label from "../ui/texts/Label";
import H2 from "../ui/texts/H2";

const AboutUs = () => {
  return (
    <section className="relative overflow-hidden py-8 px-6 sm:px-12 lg:px-16 lg:py-12 xl:px-30 2xl:px-50"
      style={{
        background: 'linear-gradient(135deg, #fdf6f2 0%, #ffffff 40%, #f9f4f0 70%, #fdf6f2 100%)',
      }}
    >
      {/* Subtle decorative gradient blobs */}
      <div className="absolute top-[20%] right-[-5%] w-[300px] h-[300px] rounded-full opacity-30 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(247, 109, 54, 0.12) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      <div className="absolute bottom-[10%] left-[-5%] w-[250px] h-[250px] rounded-full opacity-25 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(232, 100, 58, 0.1) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="relative z-10 flex flex-col gap-12 lg:gap-10 items-center">
        {/* Header */}
        <div className="flex flex-col gap-2 text-center items-center w-full">
          <div className="flex flex-col gap-2">
            <Label label="Who We Are" />
            <H2 text="The Journey of RN Infotech" />
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row items-center gap-3 lg:gap-10 xl:gap-16 w-full">
          {/* Text Content */}

          {/* Overlapping Images — Glass borders */}
          <div className="relative w-full lg:w-1/2 h-[260px] sm:max-lg:h-[370px] sm:max-lg:w-[90%] lg:h-[400px] xl:h-[460px] flex-shrink-0">
            {/* Background image - right side, top aligned */}
            <div className="absolute right-0 top-0 w-[72%] h-[95%] rounded-2xl overflow-hidden"
              style={{
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                border: '2px solid rgba(255, 255, 255, 0.3)',
              }}
            >
              <Image
                src="/images/rn-infotech-02.webp"
                alt="About background"
                fill
                sizes="(max-width: 1024px) 90vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* Foreground image - left side, vertically centered over bg image */}
            <div className="absolute left-0 top-[13%] w-[45%] h-[70%] rounded-2xl overflow-hidden z-10"
              style={{
                boxShadow: '0 16px 48px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
                border: '2px solid rgba(255, 255, 255, 0.4)',
              }}
            >
              <Image
                src="/images/rn-infotech-31.webp"
                alt="About foreground"
                fill
                sizes="(max-width: 1024px) 50vw, 30vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col gap-6 w-full lg:w-1/2 text-center lg:text-left items-center lg:items-start">
            <p className="max-[380px]:text-sm text-lg 2xl:text-xl text-start font-sans">
              RN Infotech is a leading Private Limited company based in Bengaluru. What started as a focused mobile retail venture has evolved into a powerhouse for electronics, laptops, and enterprise networking. Our growth is fueled by a commitment to providing high-quality tech products with the convenience of online retail. We bridge the gap between complex technology and the end-user.
            </p>
            <PrimaryBtn href="/" btnText="Contact Us" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
