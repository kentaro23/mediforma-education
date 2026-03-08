"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { Brand } from "@/components/layout/Brand";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { Button } from "@/components/ui/Button";
import { ctaLabels, navItems } from "@/lib/constants";
import { uiText } from "@/lib/ui-text";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={clsx(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled ? "border-b border-neutralGray-100 bg-white/95 shadow-sm backdrop-blur" : "bg-transparent"
        )}
      >
        <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-4 md:px-6">
          <Brand />
          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm font-medium text-navy-900 hover:text-teal-500">
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="hidden md:block">
            <Button href="/contact" className="px-4 py-2 text-sm">
              {ctaLabels.freeConsultation}
            </Button>
          </div>
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={uiText.header.menuAria}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-neutralGray-100 bg-white text-navy-900 md:hidden"
          >
            {isOpen ? "×" : "☰"}
          </button>
        </div>
      </header>
      <MobileMenu open={isOpen} items={navItems} onClose={() => setIsOpen(false)} />
    </>
  );
}
