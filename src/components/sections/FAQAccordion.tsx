import { SectionHeading } from "@/components/shared/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import type { FaqItem } from "@/lib/types";

type FAQAccordionProps = {
  title: string;
  items: FaqItem[];
};

export function FAQAccordion({ title, items }: FAQAccordionProps) {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl space-y-8 px-4 md:px-6">
        <SectionHeading title={title} center />
        <Accordion items={items} />
      </div>
    </section>
  );
}
