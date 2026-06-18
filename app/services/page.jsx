import React from "react";
import SubpageHero from "@/components/sections/subpageHero";
import { ServicesHeroContent, ServicesPageCardsContent } from "@/cms/content/content";
import Services from "@/components/sections/servicesSection";

export const metadata = {
    title: "Services | Pickens PC Repair",
    description: "Computer reparing shop and refurbhish laptop selling",
};

const ServicesPage = () => {
    return (
        <>
            <SubpageHero
                title={ServicesHeroContent.heading}
                subtitle={ServicesHeroContent.subtitle}
                breadcrumb={ServicesHeroContent.breadcrumb}
                bgimage={ServicesHeroContent.bgImage}
                cta1={ServicesHeroContent.btn1Text}
                cta2={ServicesHeroContent.btn2Text}
                href1={ServicesHeroContent.href1}
                href2={ServicesHeroContent.href2}
            />
            <Services content={ServicesPageCardsContent}/>
        </>
    );
};

export default ServicesPage;