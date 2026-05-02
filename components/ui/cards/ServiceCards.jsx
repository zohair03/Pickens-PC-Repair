"use client";
import Image from "next/image";
import { useState } from "react";
import ServiceCardContent from "./ServiceCardContent";

const ServiceCards = ({ service, index, isVisible }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className={`transition-transform duration-400 hover:-translate-y-2 hover:shadow-xl group relative transition-all duration-700 ease-out transform max-[380px]:h-[350px] h-[420px] rounded-2xl overflow-hidden shadow-xl
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
      style={{
        transitionDelay: `${index * 100}ms`,
      }}
    >
      {/* Background placeholder to prevent white flash */}
      <div className="absolute inset-0 bg-gray-800" />

      {/* Image with fade-in effect */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"}`}
      >
        <Image
          src={service.image}
          alt={service.title}
          fill
          priority={index < 2}
          loading={index < 2 ? "eager" : "lazy"}
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMWYyOTM3Ii8+PC9zdmc+"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          onLoad={() => setIsLoaded(true)}
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent" />
      
      <ServiceCardContent service={service} />
    </div>
  );
};

export default ServiceCards;