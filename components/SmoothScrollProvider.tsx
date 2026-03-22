"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const lenis = new Lenis({
      // ── Feel ──────────────────────────────────────────
      // 1.4s — weighted but still snappy enough to feel responsive
      duration: 1.4,

      // Cubic ease-out — smooth deceleration without being too dramatic
      easing: (t: number) => 1 - Math.pow(1 - t, 3),

      // ── Behaviour ─────────────────────────────────────
      orientation: "vertical",
      smoothWheel: true,

      // Sync touch on mobile for natural swipe feel
      syncTouch: false,

      // Balanced multipliers — not too heavy, not too light
      wheelMultiplier: 0.9,
      touchMultiplier: 1.5,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
