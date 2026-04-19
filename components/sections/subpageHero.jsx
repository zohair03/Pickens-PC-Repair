import Link from "next/link";
import Image from "next/image";
import SecondaryBtn from "../ui/buttons/secondaryBtn";
import CallButton from "../ui/buttons/callButton";

const SubpageHero = ({
  title,
  subtitle,
  breadcrumb,
  isServicesPage,
  image,
  cta1,
  cta2,
  href2,
  showCta2 = true,
}) => {
  return (
    <>
      {/* Hero Banner */}
      <section
        className="flex flex-col items-center justify-center relative pt-[40%] md:pt-[20%] xl:pt-[14%] 2xl:pt-[10%] pb-12 min-h-[55vh] sm:min-h-[50vh] md:min-h-[60vh] lg:min-h-[50vh] xl:min-h-[70vh] 2xl:min-h-[60vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Content */}
        <div className="w-full relative z-10 h-full flex flex-col items-center justify-center gap-3 md:gap-5 px-6 sm:px-12 md:px-24 text-center">
          <h1 className="text-white max-[380px]:text-xl text-h2 md:text-3xl lg:text-5xl xl:text-4xl 2xl:text-5xl  font-serif sm:text-3xl text-center max-[380px]:leading-10 leading-14 lg:leading-22 xl:leading-16 2xl:leading-22">
            {title}
          </h1>
          <p className="text-white/90 max-[380px]:mt-[-8px] mt-[-8px] max-[380px]:mb-4 mb-4 text-base font-sans font-medium md:text-lg lg:text-xl 2xl:text-2xl w-full sm:w-4/5 text-center">
            {subtitle}
          </p>
          {/* Buttons */}
          <div className="w-[90%] md:w-fit flex flex-col sm:flex-row gap-5 md:gap-5">
            <CallButton custom="max-sm:w-[100%]" btnText={cta1} />
            {showCta2 && (
              <SecondaryBtn
                custom="max-sm:w-[100%] border border-light-blue"
                href={href2}
                btnText={cta2}
              />
            )}
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="flex items-center justify-center gap-2 py-4 md:py-5 border-b border-gray-200 px-4">
        <Link
          href="/"
          className="text-lg font-semibold text-gray-700 font-medium hover:text-primary transition-colors"
        >
          Home
        </Link>
        <Image
          src="/icons/right-icon.svg"
          alt="Arrow Icon"
          width={20}
          height={20}
        />
        {isServicesPage ? (
          <>
            <Link
              href="/services"
              className="text-lg font-semibold text-gray-700 font-medium hover:text-primary transition-colors"
            >
              Services
            </Link>
            <Image
              src="/icons/right-icon.svg"
              alt="Arrow Icon"
              width={20}
              height={20}
            />
          </>
        ) : null}

        <span className="text-lg font-semibold text-primary font-medium">
          {breadcrumb}
        </span>
      </div>
    </>
  );
};

export default SubpageHero;
