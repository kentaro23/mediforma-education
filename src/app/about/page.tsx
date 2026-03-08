import Link from "next/link";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { aboutMetadata } from "@/lib/metadata";
import { aboutPageContent } from "@/lib/page-content";
import { siteConfig } from "@/lib/constants";

export const metadata = aboutMetadata;

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-navy-900 to-navy-800 pb-16 pt-36 text-white">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h1 className="text-3xl font-bold md:text-5xl">{aboutPageContent.heroTitle}</h1>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-[1.1fr_0.9fr] md:px-6">
          <article className="space-y-6 rounded-2xl border border-neutralGray-100 p-6">
            <SectionHeading title={aboutPageContent.profileHeading} />
            <dl className="space-y-3 text-sm text-neutralGray-600">
              <div>
                <dt className="font-semibold text-navy-900">{aboutPageContent.serviceNameLabel}</dt>
                <dd>{aboutPageContent.serviceName}</dd>
              </div>
              <div>
                <dt className="font-semibold text-navy-900">{aboutPageContent.representativeLabel}</dt>
                <dd>{aboutPageContent.representative}</dd>
              </div>
              <div>
                <dt className="font-semibold text-navy-900">{aboutPageContent.affiliationLabel}</dt>
                <dd>{aboutPageContent.affiliation}</dd>
              </div>
              <div>
                <dt className="font-semibold text-navy-900">{aboutPageContent.locationLabel}</dt>
                <dd>{aboutPageContent.location}</dd>
              </div>
              <div>
                <dt className="font-semibold text-navy-900">{aboutPageContent.emailLabel}</dt>
                <dd>{siteConfig.email}</dd>
              </div>
              <div>
                <dt className="font-semibold text-navy-900">{aboutPageContent.phoneLabel}</dt>
                <dd>{siteConfig.phone}</dd>
              </div>
              <div>
                <dt className="font-semibold text-navy-900">{aboutPageContent.missionLabel}</dt>
                <dd>{aboutPageContent.mission}</dd>
              </div>
              <div>
                <dt className="font-semibold text-navy-900">{aboutPageContent.visionLabel}</dt>
                <dd>{aboutPageContent.vision}</dd>
              </div>
              <div>
                <dt className="font-semibold text-navy-900">{aboutPageContent.parentLabel}</dt>
                <dd>
                  <Link href={siteConfig.parentServiceUrl} target="_blank" className="text-teal-500 hover:underline">
                    {siteConfig.parentServiceName}
                  </Link>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-navy-900">{aboutPageContent.relatedLabel}</dt>
                <dd>{aboutPageContent.relatedServices.join(" / ")}</dd>
              </div>
            </dl>
          </article>

          <article className="space-y-4 rounded-2xl border border-neutralGray-100 p-6">
            <div className="flex h-48 items-center justify-center rounded-xl bg-neutralGray-100 text-sm text-neutralGray-400">
              {aboutPageContent.photoPlaceholder}
            </div>
            <h2 className="text-xl font-bold text-navy-900">{aboutPageContent.messageTitle}</h2>
            <p className="text-sm leading-relaxed text-neutralGray-600">{aboutPageContent.messageBody}</p>
          </article>
        </div>
      </section>
    </>
  );
}
