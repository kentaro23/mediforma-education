import { privacyMetadata } from "@/lib/metadata";
import { privacyPolicyContent } from "@/lib/page-content";

export const metadata = privacyMetadata;

export default function PrivacyPage() {
  return (
    <section className="bg-neutralGray-50 pb-16 pt-32 md:pt-36">
      <div className="mx-auto max-w-4xl space-y-8 px-4 md:px-6">
        <header className="space-y-3 rounded-2xl bg-white p-6 shadow-soft">
          <h1 className="text-3xl font-bold text-navy-900">{privacyPolicyContent.title}</h1>
          <p className="text-sm text-neutralGray-400">{privacyPolicyContent.updatedAt}</p>
        </header>

        <div className="space-y-4 rounded-2xl bg-white p-6 shadow-soft">
          {privacyPolicyContent.sections.map((section) => (
            <article key={section.heading} className="space-y-2">
              <h2 className="text-lg font-semibold text-navy-900">{section.heading}</h2>
              <p className="text-sm leading-relaxed text-neutralGray-600">{section.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
