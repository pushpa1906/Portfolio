import { useCallback, useEffect, useState } from "react";
import type { MouseEvent } from "react";

/**
 * Cursor-tracking spotlight effect for elements using
 * the `spotlight-card` class.
 *
 * The effect is enabled only when:
 * - the device has a precise pointer (mouse/trackpad)
 * - hover is supported
 * - the viewport is desktop-sized
 * - reduced motion is not requested
 */
export function useSpotlight() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 1024px)");
    const pointerQuery = window.matchMedia("(pointer: fine)");
    const hoverQuery = window.matchMedia("(hover: hover)");
    const motionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const updateEnabled = () => {
      setEnabled(
        desktopQuery.matches &&
          pointerQuery.matches &&
          hoverQuery.matches &&
          !motionQuery.matches
      );
    };

    updateEnabled();

    desktopQuery.addEventListener("change", updateEnabled);
    pointerQuery.addEventListener("change", updateEnabled);
    hoverQuery.addEventListener("change", updateEnabled);
    motionQuery.addEventListener("change", updateEnabled);

    return () => {
      desktopQuery.removeEventListener("change", updateEnabled);
      pointerQuery.removeEventListener("change", updateEnabled);
      hoverQuery.removeEventListener("change", updateEnabled);
      motionQuery.removeEventListener("change", updateEnabled);
    };
  }, []);

  const onMouseMove = useCallback(
    (e: MouseEvent<HTMLElement>) => {
      if (!enabled) return;

      const element = e.currentTarget;
      const rect = element.getBoundingClientRect();

      if (!rect.width || !rect.height) return;

      const x =
        ((e.clientX - rect.left) / rect.width) * 100;

      const y =
        ((e.clientY - rect.top) / rect.height) * 100;

      element.style.setProperty(
        "--spot-x",
        `${Math.max(0, Math.min(100, x))}%`
      );

      element.style.setProperty(
        "--spot-y",
        `${Math.max(0, Math.min(100, y))}%`
      );
    },
    [enabled]
  );

  return {
    onMouseMove,
    enabled,
  };
}