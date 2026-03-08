import { CTASection } from "@/components/sections/CTASection";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card } from "@/components/ui/Card";
import { kobetsuCourses, kobetsuFees, kobetsuReasonBlocks, monthlyCycle } from "@/lib/courses-data";
import { kobetsuFaqs } from "@/lib/faq-data";
import { kobetsuMetadata } from "@/lib/metadata";
import { kobetsuPageContent } from "@/lib/page-content";

export const metadata = kobetsuMetadata;

export default function KobetsuPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-navy-900 to-navy-800 pb-16 pt-36 text-white">
        <div className="mx-auto max-w-6xl space-y-4 px-4 md:px-6">
          <h1 className="text-3xl font-bold md:text-5xl">{kobetsuPageContent.heroTitle}</h1>
          <p className="text-white/85 lg:whitespace-nowrap">{kobetsuPageContent.heroSubtitle}</p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl space-y-8 px-4 md:px-6">
          <SectionHeading title={kobetsuPageContent.reasonSectionTitle} />
          <div className="grid gap-4 md:grid-cols-2">
            {kobetsuReasonBlocks.map((block) => (
              <Card key={block.title}>
                <h3 className="text-lg font-semibold text-navy-900">{block.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutralGray-600">{block.body}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-neutralGray-50 py-16 md:py-20">
        <div className="mx-auto max-w-6xl space-y-8 px-4 md:px-6">
          <SectionHeading title={kobetsuPageContent.pricingSectionTitle} />
          <div className="grid gap-4 md:grid-cols-2">
            {kobetsuCourses.map((course) => (
              <Card key={course.title}>
                <h3 className="text-lg font-semibold text-navy-900">{course.title}</h3>
                <p className="mt-2 text-sm font-medium text-teal-500">{course.price}</p>
                <p className="mt-2 text-sm text-neutralGray-600">{course.target}</p>
                <p className="mt-1 text-sm text-neutralGray-600">{course.description}</p>
              </Card>
            ))}
          </div>
          <div className="space-y-1 rounded-xl bg-white p-4 text-sm text-neutralGray-600">
            <p>{kobetsuFees.admission}</p>
            <p>{kobetsuFees.materials}</p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl space-y-8 px-4 md:px-6">
          <SectionHeading title={kobetsuPageContent.flowSectionTitle} />
          <div className="space-y-3">
            {monthlyCycle.map((item) => (
              <article key={`${item.week}-${item.detail}`} className="grid gap-2 rounded-xl border border-neutralGray-100 p-4 md:grid-cols-[120px_1fr]">
                <p className="font-semibold text-teal-500">{item.week}</p>
                <p className="text-sm text-neutralGray-600">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FAQAccordion title={kobetsuPageContent.faqSectionTitle} items={kobetsuFaqs} />
      <CTASection heading={kobetsuPageContent.ctaTitle} subheading={kobetsuPageContent.ctaSubtitle} />
    </>
  );
}
