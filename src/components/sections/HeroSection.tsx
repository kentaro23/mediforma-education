"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ctaLabels } from "@/lib/constants";
import { heroBadges, homePageData } from "@/lib/home-data";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy-900 to-navy-800 pb-24 pt-36 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(42,191,191,0.22),transparent_45%)]" />
      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12 } }
          }}
          className="max-w-4xl space-y-6"
        >
          <motion.p
            variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}
            className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm"
          >
            {homePageData.hero.eyecatch}
          </motion.p>
          <motion.h1
            variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}
            className="text-3xl font-bold leading-tight md:text-5xl"
          >
            {homePageData.hero.title}
          </motion.h1>
          <motion.p
            variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}
            className="max-w-3xl leading-relaxed text-white/85"
          >
            {homePageData.hero.subtitle}
          </motion.p>
          <motion.div
            variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}
            className="flex flex-wrap gap-3"
          >
            <Button href="/contact" className="text-sm">
              {ctaLabels.freeConsultation}
            </Button>
            <Button href="/shiteiko" variant="secondary" className="border-white text-white hover:bg-white hover:text-navy-900">
              {ctaLabels.details}
            </Button>
          </motion.div>
          <motion.div
            variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}
            className="flex flex-wrap gap-2"
          >
            {heroBadges.map((badge) => (
              <Badge key={badge.label} className="bg-white/15 text-white">
                {badge.label}
              </Badge>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
