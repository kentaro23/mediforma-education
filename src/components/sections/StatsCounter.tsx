import { CountUp } from "@/components/shared/CountUp";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { homePageData, statsItems } from "@/lib/home-data";

export function StatsCounter() {
  return (
    <section className="bg-navy-900 py-16 text-white md:py-20">
      <div className="mx-auto max-w-6xl space-y-8 px-4 md:px-6">
        <SectionHeading title={homePageData.statsHeading} center />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {statsItems.map((stat) => (
            <article key={stat.labelJa} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-3xl font-bold text-teal-400">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-sm font-medium">{stat.labelJa}</p>
              <p className="mt-1 text-xs text-white/70">{stat.labelEn}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
