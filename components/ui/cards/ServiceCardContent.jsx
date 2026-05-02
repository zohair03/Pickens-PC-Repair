import TertiaryBtn from "../buttons/TertiaryBtn";

const ServiceCardContent = ({ service }) => {
  return (
    <div className="absolute bottom-0 p-6 flex flex-col gap-2">
      <h3 className="text-white text-left font-serif max-[380px]:text-lg text-2xl md:text-2xl lg:text-3xl xl:text-2xl 2xl:text-2xl 3xl:text-3xl leading-relaxed">
        {service.title}
      </h3>
      <p className="text-white/80 font-sans text-base leading-relaxed line-clamp-3">
        {service.description}
      </p>
      <TertiaryBtn href={service.href} btnText={service.btnText} custom={"mt-2"} />
    </div>
  );
};

export default ServiceCardContent;

// max-[380px]:leading-10 leading-11 sm:leading-12 xl:leading-12 2xl:leading-13