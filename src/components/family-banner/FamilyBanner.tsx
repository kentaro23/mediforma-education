import Link from "next/link";
import { mediformaFamilyData } from "@/lib/site-data";

export function FamilyBanner() {
  return (
    <section className="bg-neutralGray-50 py-10 md:py-12" aria-label="Mediforma Family バナー">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="rounded-2xl border border-neutralGray-100 bg-white p-5 shadow-soft md:p-6">
          <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-teal-500">{mediformaFamilyData.label}</p>
              <h2 className="mt-1 text-xl font-bold text-navy-900 md:text-2xl">{mediformaFamilyData.heading}</h2>
            </div>
            <Link
              href={mediformaFamilyData.ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full border border-neutralGray-100 px-4 py-2 text-sm font-medium text-navy-800 transition hover:border-teal-400 hover:text-teal-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
            >
              {mediformaFamilyData.ctaLabel}
            </Link>
          </div>

          <ul className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {mediformaFamilyData.services.map((service) => (
              <li key={service.name}>
                <Link
                  href={service.href}
                  target={service.href.startsWith("http") ? "_blank" : undefined}
                  rel={service.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex h-full items-center justify-center rounded-xl border border-neutralGray-100 bg-neutralGray-50 px-3 py-3 text-sm font-semibold text-navy-800 transition hover:border-teal-400 hover:text-teal-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
                >
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
