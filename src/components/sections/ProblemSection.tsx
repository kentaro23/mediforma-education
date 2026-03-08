import { FadeInView } from "@/components/shared/FadeInView";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card } from "@/components/ui/Card";
import { homePageData, problemItems } from "@/lib/home-data";

export function ProblemSection() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl space-y-8 px-4 md:px-6">
        <SectionHeading title={homePageData.problemsHeading} center />
        <div className="grid gap-4 md:grid-cols-2">
          {problemItems.map((item, index) => (
            <FadeInView key={item.question} delay={index * 0.05}>
              <Card className="h-full">
                <p className="font-semibold text-navy-900">{item.question}</p>
                <p className="mt-3 text-sm leading-relaxed text-neutralGray-600">{item.answer}</p>
              </Card>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}
