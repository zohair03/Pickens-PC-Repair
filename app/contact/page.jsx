import TextAndImageSection from "@/components/sections/textAndImageSection";
import SubpageHero from "@/components/sections/subpageHero";
import ContactInfo from "@/components/ui/ContactInfo";
import ContactForm from "@/components/ui/contactForm";
import { ContactHeroContent, ContactNewsLetterContent, ContactFaqContent } from "@/cms/content/content";
import ContactPageSignUpSection from "@/components/sections/ContactPageSignUpSection";
import Faqs from "@/components/sections/faqSection";

export const metadata = {
    title: "Contact Us | Pickens PC Repair",
    description: "Computer reparing shop and refurbhish laptop selling",
};

const Contact = () => {
    return (
        <>
            <SubpageHero content={ContactHeroContent} />
            <section className="w-full flex">
                <ContactInfo />
            </section>
            <ContactPageSignUpSection content={ContactNewsLetterContent} />
            <Faqs isButton={false} isImage={false} content={ContactFaqContent} />
        </>
    );
};

export default Contact;