"use client";

import { useMemo, useState } from "react";
import clsx from "clsx";

type TabItem<T> = {
  id: string;
  label: string;
  content: T;
};

type TabsProps<T> = {
  items: TabItem<T>[];
  renderContent: (content: T) => JSX.Element;
};

export function Tabs<T>({ items, renderContent }: TabsProps<T>) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");

  const activeItem = useMemo(
    () => items.find((item) => item.id === activeId) ?? items[0],
    [items, activeId]
  );

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActiveId(item.id)}
            className={clsx(
              "rounded-full border px-4 py-2 text-sm font-semibold transition",
              item.id === activeItem?.id
                ? "border-teal-500 bg-teal-500 text-white"
                : "border-neutralGray-100 bg-white text-navy-900 hover:border-teal-500"
            )}
          >
            {item.label}
          </button>
        ))}
      </div>
      {activeItem ? renderContent(activeItem.content) : null}
    </div>
  );
}
