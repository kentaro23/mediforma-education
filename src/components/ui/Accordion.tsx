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

        return (
          <div key={item.question} className="rounded-xl border border-neutralGray-100 bg-white">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              aria-expanded={isOpen}
              className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left"
            >
              <span className="flex-1 pr-2 text-[15px] font-medium leading-relaxed text-navy-900 md:text-base">
                {item.question}
              </span>
              <span className="mt-0.5 shrink-0 text-teal-500">{isOpen ? "−" : "+"}</span>
            </button>
            <div
              className={clsx(
                "grid transition-all duration-300",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              )}
            >
              <p className="overflow-hidden px-5 pb-4 text-sm leading-relaxed text-neutralGray-600">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
