import { CourseDetail } from "@/components/sections/CourseDetail";
import { CTASection } from "@/components/sections/CTASection";
import { PricingTable } from "@/components/sections/PricingTable";
import { TimelineSchedule } from "@/components/sections/TimelineSchedule";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Table } from "@/components/ui/Table";
import { shiteikoCourseDetails, shiteikoBenefits, shiteikoTimeline } from "@/lib/courses-data";
import { shiteikoMetadata } from "@/lib/metadata";
import { shiteikoPageContent } from "@/lib/page-content";
import { shiteikoFees, shiteikoSetPlans, shiteikoSingleCourses } from "@/lib/pricing-data";
import { admissionColumns, regionalAdmissionTable, shiteikoAdmissionTable, shiteikoOverview } from "@/lib/stats-data";

export const metadata = shiteikoMetadata;

export default function ShiteikoPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-navy-900 to-navy-800 pb-16 pt-36 text-white">
        <div className="mx-auto max-w-6xl space-y-4 px-4 md:px-6">
          <h1 className="text-3xl font-bold md:text-5xl">{shiteikoPageContent.heroTitle}</h1>
          <p className="text-white/85 lg:whitespace-nowrap">{shiteikoPageContent.heroSubtitle}</p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl space-y-8 px-4 md:px-6">
          <SectionHeading title={shiteikoOverview.sectionTitle} subtitle={shiteikoOverview.intro} />

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-navy-900">{shiteikoOverview.admissionsTitle}</h3>
            <Table columns={admissionColumns} data={shiteikoAdmissionTable} />
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-navy-900">{shiteikoOverview.regionalTitle}</h3>
            <Table columns={admissionColumns} data={regionalAdmissionTable} />
          </div>

          <article className="space-y-4 rounded-2xl border border-neutralGray-100 p-6">
            <h3 className="text-lg font-semibold text-navy-900">{shiteikoOverview.examTitle}</h3>
            <ul className="space-y-2 text-sm text-neutralGray-600">
              {shiteikoOverview.examPoints.map((point) => (
                <li key={point} className="flex gap-2">
                  <span className="text-teal-500">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <h4 className="pt-2 text-base font-semibold text-navy-900">{shiteikoOverview.reasonTitle}</h4>
            <p className="text-sm leading-relaxed text-neutralGray-600">{shiteikoOverview.whySpecialized}</p>
          </article>
        </div>
      </section>

      <CourseDetail title={shiteikoPageContent.courseSectionTitle} courses={shiteikoCourseDetails} />

      <PricingTable
        title={shiteikoPageContent.pricingSectionTitle}
        singleRows={shiteikoSingleCourses}
        setRows={shiteikoSetPlans}
        admissionFee={shiteikoFees.admissionFee}
        materialFee={shiteikoFees.materialFee}
        comparisonNote={shiteikoFees.comparisonNote}
      />

      <section className="bg-amber-100 py-16 md:py-20">
        <div className="mx-auto max-w-6xl space-y-6 px-4 md:px-6">
          <SectionHeading title={shiteikoPageContent.benefitsSectionTitle} />
          <div className="grid gap-3 md:grid-cols-2">
            {shiteikoBenefits.map((benefit) => (
              <article key={benefit.text} className="rounded-xl bg-white px-4 py-3 text-sm text-neutralGray-600">
                ✓ {benefit.text}
              </article>
            ))}
          </div>
        </div>
      </section>

      <TimelineSchedule title={shiteikoPageContent.timelineSectionTitle} items={shiteikoTimeline} />
      <CTASection heading={shiteikoPageContent.ctaMessage} subheading={shiteikoPageContent.ctaSubmessage} />
    </>
  );
}
