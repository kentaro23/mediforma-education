"use client";

import { animate, useInView, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  end: number;
  suffix?: string;
};

export function CountUp({ end, suffix = "" }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motion = useMotionValue(0);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    const unsub = motion.on("change", (latest) => setValue(Math.round(latest)));
    return () => unsub();
  }, [motion]);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(motion, end, { duration: 1.2, ease: "easeOut" });
    return () => controls.stop();
  }, [isInView, end, motion]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}
