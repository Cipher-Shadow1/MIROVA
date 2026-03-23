"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { usePathname } from "next/navigation";

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

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
    
    lenisRef.current = lenis;

    let rafId: number;

    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);
    
    // Create a ResizeObserver to observe changes in the document body's size
    const resizeObserver = new ResizeObserver(() => {
        lenis.resize();
    });
    
    resizeObserver.observe(document.body);

    return () => {
      cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    // Reset scroll position using Lenis to prevent it from saving the old scroll pos
    if (lenisRef.current) {
        lenisRef.current.scrollTo(0, { immediate: true });
    } else {
        window.scrollTo(0, 0);
    }

    // Force lenis to recalculate heights when route changes
    // Add a small delay to ensure DOM is fully painted
    const timeoutId = setTimeout(() => {
        if (lenisRef.current) {
            lenisRef.current.resize();
        }
    }, 100);
    
    return () => clearTimeout(timeoutId);
  }, [pathname]);

  return <>{children}</>;
}
