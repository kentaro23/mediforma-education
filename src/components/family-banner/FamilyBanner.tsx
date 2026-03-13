import Link from "next/link";
import { mediformaFamilyData } from "@/lib/site-data";

export function FamilyBanner() {
  return (
    <section className="bg-neutralGray-50 py-8 md:py-10" aria-label="Mediforma Family バナー">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="rounded-2xl border border-neutralGray-100 bg-white/90 p-5 shadow-soft md:p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="space-y-1">
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-teal-500">{mediformaFamilyData.label}</p>
              <h2 className="text-lg font-bold text-navy-900 md:text-xl">{mediformaFamilyData.heading}</h2>
            </div>

            <ul className="flex flex-wrap items-center gap-2 md:justify-center">
              {mediformaFamilyData.services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    target={service.href.startsWith("http") ? "_blank" : undefined}
                    rel={service.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="inline-flex rounded-full border border-neutralGray-100 bg-neutralGray-50 px-3 py-1.5 text-sm font-medium text-navy-800 transition hover:border-teal-400 hover:text-teal-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href={mediformaFamilyData.ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex text-sm font-medium text-navy-800 underline decoration-neutralGray-400 underline-offset-4 transition hover:text-teal-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
            >
              {mediformaFamilyData.ctaLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
