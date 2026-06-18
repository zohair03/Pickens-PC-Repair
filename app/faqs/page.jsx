import React from "react";
import SubpageHero from "@/components/sections/subpageHero";
import Faqs from "@/components/sections/faqSection";
import { FaqsHeroContent, FaqsPageContent } from "@/cms/content/content";

export const metadata = {
    title: "FAQs | Pickens PC Repair",
    description: "Computer reparing shop and refurbhish laptop selling",
};

const FAQs = () => {
    return (
        <>
            <SubpageHero
                title={FaqsHeroContent.heading}
                subtitle={FaqsHeroContent.subtitle}
                breadcrumb={FaqsHeroContent.breadcrumb}
                bgimage={FaqsHeroContent.bgImage}
                cta1={FaqsHeroContent.btn1Text}
                cta2={FaqsHeroContent.btn2Text}
                href1={FaqsHeroContent.href1}
                href2={FaqsHeroContent.href2}
            />
            <Faqs bgColor='bg-[image:var(--color-section-bg)]' isImage={false} faqs={FaqsPageContent.questions} content={FaqsPageContent} />
        </>
    );
};

export default FAQs;