import type { MouseEvent } from "react";

/**
 * Attach to any element with the `spotlight-card` class to get a
 * cursor-tracking glow effect on hover.
 */
export function useSpotlight() {
  const onMouseMove = (e: MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    e.currentTarget.style.setProperty("--spot-x", `${x}%`);
    e.currentTarget.style.setProperty("--spot-y", `${y}%`);
  };

  return { onMouseMove };
}
