"use client";

import { useState } from "react";
import clsx from "clsx";
import type { FaqItem } from "@/lib/types";

type AccordionProps = {
  items: FaqItem[];
};

export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const expanded = isOpen;

        return (
          <div key={item.question} className="rounded-xl border border-neutralGray-100 bg-white">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              aria-expanded={expanded}
              className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left"
            >
              <span className="flex-1 pr-2 text-[15px] font-medium leading-relaxed text-navy-900 md:text-base">
                {item.question}
              </span>
              <span className="mt-0.5 shrink-0 text-teal-500">{isOpen ? "−" : "+"}</span>
            </button>
            <div
              className={clsx(
                "overflow-hidden transition-all duration-300",
                expanded ? "max-h-40 pb-4 opacity-100" : "max-h-0 pb-0 opacity-0"
              )}
            >
              <p className="px-5 text-sm leading-relaxed text-neutralGray-600">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
