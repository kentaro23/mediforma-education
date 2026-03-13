import { mediformaFamilyData } from "@/lib/site-data";

export function FamilyBadge() {
  return (
    <section className="bg-white py-5 md:py-6" aria-label="Mediforma Family">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 rounded-lg border border-neutralGray-100 bg-neutralGray-50/70 px-4 py-2.5">
          <span className="inline-flex rounded-full bg-white px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-navy-800">
            {mediformaFamilyData.label}
          </span>
          <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-teal-400" />
          <p className="text-sm text-neutralGray-600">{mediformaFamilyData.subtext}</p>
        </div>
      </div>
    </section>
  );
}
