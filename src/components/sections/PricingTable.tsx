import { SectionHeading } from "@/components/shared/SectionHeading";
import type { PricingRow } from "@/lib/types";
import { uiText } from "@/lib/ui-text";

type PricingTableProps = {
  title: string;
  singleRows: PricingRow[];
  setRows: PricingRow[];
  admissionFee: string;
  materialFee: string;
  comparisonNote?: string;
};

export function PricingTable({
  title,
  singleRows,
  setRows,
  admissionFee,
  materialFee,
  comparisonNote
}: PricingTableProps) {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl space-y-8 px-4 md:px-6">
        <SectionHeading title={title} />

        <div className="overflow-hidden rounded-2xl border border-neutralGray-100 bg-white shadow-soft">
          <div className="border-b border-neutralGray-100 bg-neutralGray-50 px-5 py-4">
            <h3 className="font-semibold text-navy-900">{uiText.pricing.singleCourses}</h3>
          </div>
          <div className="divide-y divide-neutralGray-100">
            {singleRows.map((row) => (
              <div key={row.title} className="grid gap-2 px-5 py-4 md:grid-cols-[1fr_auto_auto] md:items-center md:gap-4">
                <p className="font-medium text-navy-900">{row.title}</p>
                <p className="font-semibold text-teal-500">{row.price}</p>
                <p className="text-sm text-neutralGray-600">{row.notes}</p>
              </div>
            ))}
          </div>

          <div className="border-y border-neutralGray-100 bg-amber-100 px-5 py-4">
            <h3 className="font-semibold text-navy-900">{uiText.pricing.setPlan}</h3>
          </div>
          <div className="divide-y divide-neutralGray-100">
            {setRows.map((row) => (
              <div key={row.title} className="grid gap-2 px-5 py-4 md:grid-cols-[1fr_auto_1.4fr] md:items-center md:gap-4">
                <p className="font-medium text-navy-900">{row.title}</p>
                <p className="font-semibold text-teal-500">{row.price}</p>
                <p className="text-sm text-neutralGray-600">{row.notes}</p>
              </div>
            ))}
          </div>

          <div className="space-y-2 border-t border-neutralGray-100 bg-neutralGray-50 px-5 py-4 text-sm text-neutralGray-600">
            <p>{admissionFee}</p>
            <p>{materialFee}</p>
          </div>
        </div>

        {comparisonNote ? (
          <p className="rounded-xl bg-eduBlue-100 px-4 py-3 text-sm text-navy-800">{comparisonNote}</p>
        ) : null}
      </div>
    </section>
  );
}
