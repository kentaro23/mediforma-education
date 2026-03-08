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
  const renderSavings = (notes: string) => {
    const [lessonPart, savingsPart] = notes.split(" ／ ");
    if (!savingsPart) return <span>{notes}</span>;

    return (
      <span>
        <span className="text-neutralGray-600">{lessonPart}</span>
        <span className="mx-1 text-neutralGray-400">／</span>
        <span className="font-medium text-navy-800">{savingsPart.split("から")[0]}から</span>
        <span className="font-semibold text-amber-500">{savingsPart.split("から")[1]}</span>
      </span>
    );
  };

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
              <div
                key={row.title}
                className="grid gap-2 px-5 py-4 md:grid-cols-[minmax(0,1fr)_10.5rem_8.5rem] md:items-center md:gap-4"
              >
                <p className="font-medium text-navy-900">{row.title}</p>
                <p className="justify-self-end text-right text-lg font-semibold tabular-nums text-teal-500">{row.price}</p>
                <p className="justify-self-end whitespace-nowrap text-right text-sm tabular-nums text-neutralGray-600">
                  {row.notes}
                </p>
              </div>
            ))}
          </div>

          <div className="border-y border-neutralGray-100 bg-gradient-to-r from-amber-100 to-teal-100 px-5 py-4">
            <h3 className="font-semibold text-navy-900">{uiText.pricing.setPlan}</h3>
          </div>
          <div className="divide-y divide-neutralGray-100 bg-teal-100/20">
            {setRows.map((row) => (
              <div
                key={row.title}
                className={`grid gap-2 px-5 py-4 md:grid-cols-[minmax(0,1fr)_10.5rem_22rem] md:items-center md:gap-4 ${
                  row.title === "全講座セット" ? "bg-teal-100/50" : ""
                }`}
              >
                <p className={`font-medium text-navy-900 ${row.title === "全講座セット" ? "text-base font-semibold" : ""}`}>
                  {row.title}
                </p>
                <p
                  className={`justify-self-end text-right text-lg font-semibold tabular-nums ${
                    row.title === "全講座セット" ? "text-navy-900" : "text-teal-500"
                  }`}
                >
                  {row.price}
                </p>
                <p className="justify-self-end text-right text-sm">{renderSavings(row.notes)}</p>
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
