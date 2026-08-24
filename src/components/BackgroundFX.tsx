import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const LARGE_SCREEN_BREAKPOINT = 1024;

export default function BackgroundFX() {
  const [enableEffects, setEnableEffects] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      `(min-width: ${LARGE_SCREEN_BREAKPOINT}px)`
    );

    const updateEffects = () => {
      setEnableEffects(mediaQuery.matches);
    };

    updateEffects();

    mediaQuery.addEventListener("change", updateEffects);

    return () => {
      mediaQuery.removeEventListener("change", updateEffects);
    };
  }, []);

  /*
   * Full animated effects only run when:
   * 1. Screen is at least 1024px
   * 2. User has not requested reduced motion
   */
  const animateBackground = enableEffects && !reduceMotion;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* =========================================
          BASE BACKGROUND
          Always rendered on every screen size
      ========================================== */}
      <div
        className="
          absolute
          inset-0
          bg-[#F2F5F8]
          transition-colors
          duration-500
          dark:bg-[#0B1220]
        "
      />

      {/* =========================================
          MOBILE / TABLET
          Static background only.
          No Framer Motion elements are mounted.
      ========================================== */}

      {!enableEffects && (
        <>
          {/* Very light static blue atmosphere */}
          <div
            className="
              absolute
              -right-32
              -top-32
              h-80
              w-80
              rounded-full
              blur-[100px]
            "
            style={{
              background:
                "radial-gradient(circle, rgba(143,168,199,0.10), transparent 70%)",
            }}
          />

          {/* Very light static gold atmosphere */}
          <div
            className="
              absolute
              -bottom-32
              -left-32
              h-80
              w-80
              rounded-full
              blur-[100px]
            "
            style={{
              background:
                "radial-gradient(circle, rgba(201,168,106,0.07), transparent 70%)",
            }}
          />
        </>
      )}

      {/* =========================================
          LARGE SCREENS
          1024px+
      ========================================== */}

      {enableEffects && (
        <>
          {/* Soft blue atmosphere */}
          <motion.div
            className="
              absolute
              -left-64
              -top-56
              h-225
              w-225
              rounded-full
              blur-[180px]
            "
            style={{
              background:
                "radial-gradient(circle, rgba(143,168,199,0.22), transparent 70%)",
            }}
            animate={
              animateBackground
                ? {
                    x: [0, 70, -30, 0],
                    y: [0, 50, -40, 0],
                  }
                : undefined
            }
            transition={
              animateBackground
                ? {
                    duration: 36,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
                : undefined
            }
          />

          {/* Champagne glow */}
          <motion.div
            className="
              absolute
              -right-72
              top-20
              h-237.5
              w-237.5
              rounded-full
              opacity-100
              blur-[200px]
              dark:opacity-70
            "
            style={{
              background:
                "radial-gradient(circle, rgba(201,168,106,0.12), transparent 70%)",
            }}
            animate={
              animateBackground
                ? {
                    x: [0, -60, 30, 0],
                    y: [0, -35, 30, 0],
                  }
                : undefined
            }
            transition={
              animateBackground
                ? {
                    duration: 42,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
                : undefined
            }
          />

          {/* Subtle slate depth */}
          <motion.div
            className="
              absolute
              left-1/2
              top-1/2
              h-175
              w-175
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              blur-[170px]
            "
            style={{
              background:
                "radial-gradient(circle, rgba(53,80,112,0.07), transparent 70%)",
            }}
            animate={
              animateBackground
                ? {
                    scale: [1, 1.08, 1],
                    opacity: [0.7, 1, 0.7],
                  }
                : undefined
            }
            transition={
              animateBackground
                ? {
                    duration: 14,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
                : undefined
            }
          />

          {/* Technical grid */}
          <div
            className="
              absolute
              inset-0
              opacity-[0.018]
              dark:opacity-[0.04]
            "
            style={{
              backgroundImage:
                "linear-gradient(to right,#111827 1px,transparent 1px),linear-gradient(to bottom,#111827 1px,transparent 1px)",
              backgroundSize: "140px 140px",
            }}
          />
        </>
      )}
    </div>
  );
}