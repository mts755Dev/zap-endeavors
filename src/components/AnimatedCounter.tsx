"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  /** Value string, e.g. "10+", "200+", "7" */
  value: string;
  /** Animation duration in ms */
  duration?: number;
  className?: string;
}

export function AnimatedCounter({
  value,
  duration = 2000,
  className,
}: AnimatedCounterProps) {
  const [display, setDisplay] = useState("0");
  const [triggered, setTriggered] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  // Parse numeric part and any trailing suffix (e.g. "+")
  const numeric = parseInt(value.replace(/\D/g, ""), 10);
  const suffix = value.replace(/[0-9]/g, "");

  // Trigger animation once the element enters the viewport
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Run the count-up once triggered
  useEffect(() => {
    if (!triggered) return;

    let start: number | null = null;

    const tick = (ts: number) => {
      if (!start) start = ts;
      const elapsed = ts - start;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-out expo for a snappy finish
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = Math.floor(eased * numeric);

      setDisplay(current + suffix);

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        setDisplay(value); // ensure exact final value
      }
    };

    const raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [triggered, numeric, suffix, duration, value]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
