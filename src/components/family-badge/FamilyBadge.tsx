import { mediformaFamilyData } from "@/lib/site-data";

export function FamilyBadge() {
  return (
    <section className="bg-white py-6 md:py-8" aria-label="Mediforma Family">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="inline-flex items-start gap-3 rounded-xl border border-neutralGray-100 bg-neutralGray-50 px-4 py-3 text-left">
          <span className="inline-flex rounded-full bg-eduBlue-100 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-navy-800">
            {mediformaFamilyData.label}
          </span>
          <p className="pt-0.5 text-sm text-neutralGray-600">{mediformaFamilyData.subtext}</p>
        </div>
      </div>
    </section>
  );
}
