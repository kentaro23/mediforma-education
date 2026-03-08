import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card } from "@/components/ui/Card";
import { homePageData, testimonialItems } from "@/lib/home-data";

export function TestimonialSlider() {
  return (
    <section className="bg-neutralGray-50 py-16 md:py-20">
      <div className="mx-auto max-w-6xl space-y-8 px-4 md:px-6">
        <SectionHeading title={homePageData.testimonialsHeading} subtitle={homePageData.testimonialsNote} />
        <div className="grid snap-x snap-mandatory grid-flow-col gap-4 overflow-x-auto pb-2">
          {testimonialItems.map((item) => (
            <Card key={`${item.name}-${item.course}`} className="w-[280px] snap-start md:w-[320px]">
              <p className="text-sm text-neutralGray-600">{item.year}</p>
              <h3 className="mt-2 text-lg font-semibold text-navy-900">{item.name}</h3>
              <p className="mt-1 text-sm text-teal-500">{item.course}</p>
              <p className="mt-3 text-sm leading-relaxed text-neutralGray-600">{item.comment}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
