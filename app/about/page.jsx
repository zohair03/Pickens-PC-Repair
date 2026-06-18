import React from "react";
import TextAndImageSection from "@/components/sections/textAndImageSection";
import SubpageHero from "@/components/sections/subpageHero";
import { Abouthero, AboutSection1, AboutSection2 } from "@/cms/content/content";

export const metadata = {
    title: "About Us | Pickens PC Repair",
    description: "Computer reparing shop and refurbhish laptop selling",
};

const AboutUs = () => {
    return (
        <>
            <SubpageHero
                title={Abouthero.heading}
                subtitle={Abouthero.subtitle}
                breadcrumb={Abouthero.breadcrumb}
                bgimage={Abouthero.bgImage}
                cta1={Abouthero.btn1Text}
                cta2={Abouthero.btn2Text}
                href1={Abouthero.href1}
                href2={Abouthero.href2}
            />

            <TextAndImageSection
                label={AboutSection1.label}
                heading={AboutSection1.heading}
                description={
                    <div className="flex flex-col gap-3">
                        <p className="font-sans max-[380px]:text-sm text-lg 2xl:text-xl text-start font-sans">
                            {AboutSection1.description}
                        </p>
                    </div>
                }
                cta={AboutSection1.cta}
                href={AboutSection1.href}
                imageSrc={AboutSection1.image}
            />
            <TextAndImageSection
                label={AboutSection2.label}
                heading={AboutSection2.heading}
                description={
                    <div className="flex flex-col gap-3">
                        <p className="font-sans max-[380px]:text-sm text-lg 2xl:text-xl text-start font-sans">
                            {AboutSection2.description}
                        </p>
                    </div>
                }
                cta={AboutSection2.cta}
                href={AboutSection2.href}
                imageSrc={AboutSection2.image}
                imageLeft={true}
                bgColor=""
            />
        </>
    );
};

export default AboutUs;