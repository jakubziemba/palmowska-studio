"use client";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export const LenisScroller = () => {
  const pathname = usePathname();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      // easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
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

  return <></>;
};
