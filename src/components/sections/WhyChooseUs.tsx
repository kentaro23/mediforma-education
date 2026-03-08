import { FadeInView } from "@/components/shared/FadeInView";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { homePageData, reasonItems } from "@/lib/home-data";

export function WhyChooseUs() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl space-y-8 px-4 md:px-6">
        <SectionHeading title={homePageData.reasonsHeading} />
        <div className="space-y-4">
          {reasonItems.map((item, index) => (
            <FadeInView key={item.id} delay={index * 0.05}>
              <article className="grid gap-3 rounded-2xl border border-neutralGray-100 p-5 md:grid-cols-[84px_1fr]">
                <p className="text-4xl font-bold text-teal-500">{item.id}</p>
                <div>
                  <h3 className="text-lg font-semibold text-navy-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutralGray-600">{item.description}</p>
                </div>
              </article>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}
