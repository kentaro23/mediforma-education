import { ContactForm } from "@/components/sections/ContactForm";
import { contactMetadata } from "@/lib/metadata";
import { contactPageContent } from "@/lib/page-content";

export const metadata = contactMetadata;

export default function ContactPage() {
  return (
    <section className="bg-neutralGray-50 pb-16 pt-32 md:pt-36">
      <div className="mx-auto max-w-4xl space-y-8 px-4 md:px-6">
        <header className="space-y-3 text-center">
          <h1 className="text-3xl font-bold text-navy-900 md:text-4xl">{contactPageContent.heroTitle}</h1>
          <p className="text-neutralGray-600">{contactPageContent.heroDescription}</p>
        </header>
        <ContactForm />
      </div>
    </section>
  );
}
