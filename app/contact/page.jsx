import TextAndImageSection from "@/components/sections/textAndImageSection";
import SubpageHero from "@/components/sections/subpageHero";
import ContactInfo from "@/components/ui/ContactInfo";
import ContactForm from "@/components/ui/contactForm";
import { ContactHeroContent, ContactSection1, FaqsContent } from "@/cms/content/content";
import ContactPageSignUpSection from "@/components/sections/ContactPageSignUpSection";
import Faqs from "@/components/sections/faqSection";

export const metadata = {
    title: "Contact Us | Pickens PC Repair",
    description: "Computer reparing shop and refurbhish laptop selling",
};

const Contact = () => {
    return (
        <>
            <SubpageHero
                title={ContactHeroContent.heading}
                subtitle={ContactHeroContent.subtitle}
                breadcrumb={ContactHeroContent.breadcrumb}
                bgimage={ContactHeroContent.bgImage}
                cta1={ContactHeroContent.btn1Text}
                cta2={ContactHeroContent.btn2Text}
                href1={ContactHeroContent.href1}
                href2={ContactHeroContent.href2}
            />
            <section className="w-full flex">
                <ContactInfo />
            </section>
            
            <ContactPageSignUpSection/>

            <Faqs isButton={false} isImage={false} faqs={FaqsContent.questions}/>
        </>
    );
};

export default Contact;