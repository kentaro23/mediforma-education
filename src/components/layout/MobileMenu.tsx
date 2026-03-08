"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import type { NavItem } from "@/lib/types";

type MobileMenuProps = {
  open: boolean;
  items: NavItem[];
  onClose: () => void;
};

export function MobileMenu({ open, items, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 bg-navy-900/95 px-6 pt-24 md:hidden"
        >
          <nav className="space-y-4">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className="block rounded-xl border border-white/10 px-4 py-3 text-lg font-medium text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
