import Link from "next/link";
import { contactThanksMetadata } from "@/lib/metadata";
import { contactThanksPageContent } from "@/lib/page-content";

export const metadata = contactThanksMetadata;

export default function ContactThanksPage() {
  return (
    <section className="bg-neutralGray-50 pb-16 pt-32 md:pt-36">
      <div className="mx-auto max-w-4xl space-y-8 px-4 md:px-6">
        <header className="space-y-3 text-center">
          <h1 className="text-3xl font-bold text-navy-900 md:text-4xl">{contactThanksPageContent.heroTitle}</h1>
          <p className="text-neutralGray-600">{contactThanksPageContent.heroDescription}</p>
        </header>

        <div className="rounded-2xl bg-white p-6 shadow-soft">
          <h2 className="text-xl font-bold text-navy-900">{contactThanksPageContent.nextTitle}</h2>
          <p className="mt-3 text-neutralGray-600">{contactThanksPageContent.nextDescription}</p>
          <Link
            href={contactThanksPageContent.nextLinkHref}
            className="mt-5 inline-flex rounded-full bg-teal-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-400"
          >
            {contactThanksPageContent.nextLinkLabel}
          </Link>
          <p className="mt-4 text-sm text-neutralGray-400">{contactThanksPageContent.note}</p>
        </div>
      </div>
    </section>
  );
}
