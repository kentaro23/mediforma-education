import { SectionHeading } from "@/components/shared/SectionHeading";
import type { TimelineItem } from "@/lib/types";

type TimelineScheduleProps = {
  title: string;
  items: TimelineItem[];
};

export function TimelineSchedule({ title, items }: TimelineScheduleProps) {
  return (
    <section className="bg-neutralGray-50 py-16 md:py-20">
      <div className="mx-auto max-w-6xl space-y-8 px-4 md:px-6">
        <SectionHeading title={title} />
        <div className="space-y-3">
          {items.map((item) => (
            <article key={`${item.month}-${item.event}`} className="grid gap-2 rounded-xl border border-neutralGray-100 bg-white p-4 md:grid-cols-[100px_1fr] md:items-center">
              <p className="font-semibold text-teal-500">{item.month}</p>
              <p className="text-sm text-neutralGray-600">{item.event}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
