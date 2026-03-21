"use client";

import { useEffect, useRef, ReactNode } from "react";
import clsx from "clsx";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
  threshold?: number;
}

export function AnimatedSection({
  children,
  className,
  delay = 0,
  direction = "up",
  threshold = 0.1,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.animationDelay = `${delay}ms`;
          el.style.opacity = "1";

          const animMap: Record<string, string> = {
            up: "fade-up",
            left: "fade-left",
            right: "fade-right",
            none: "fade-in",
          };

          el.style.animation = `${animMap[direction]} 0.65s ease forwards`;
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [delay, direction, threshold]);

  return (
    <div ref={ref} style={{ opacity: 0 }} className={clsx(className)}>
      {children}
    </div>
  );
}
