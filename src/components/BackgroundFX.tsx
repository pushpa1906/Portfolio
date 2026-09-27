import { useEffect, useState } from "react";

const LARGE_SCREEN_BREAKPOINT = 1024;

export default function BackgroundFX() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      `(min-width: ${LARGE_SCREEN_BREAKPOINT}px)`
    );

    const updateScreenSize = () => {
      setIsLargeScreen(mediaQuery.matches);
    };

    updateScreenSize();

    mediaQuery.addEventListener("change", updateScreenSize);

    return () => {
      mediaQuery.removeEventListener("change", updateScreenSize);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="fixed inset-0 -z-10 overflow-hidden"
    >
      {/* =========================================
          BASE BACKGROUND
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
          Static, very subtle atmosphere
      ========================================== */}

      {!isLargeScreen && (
        <>
          {/* Static blue atmosphere */}

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
                "radial-gradient(circle, rgba(143,168,199,0.08), transparent 70%)",
            }}
          />

          {/* Static gold atmosphere */}

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
                "radial-gradient(circle, rgba(201,168,106,0.05), transparent 70%)",
            }}
          />
        </>
      )}

      {/* =========================================
          DESKTOP
          Static atmospheric lighting
      ========================================== */}

      {isLargeScreen && (
        <>
          {/* =====================================
              STATIC BLUE ATMOSPHERE
          ====================================== */}

          <div
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
                "radial-gradient(circle, rgba(143,168,199,0.16), transparent 70%)",
            }}
          />

          {/* =====================================
              STATIC GOLD ATMOSPHERE
          ====================================== */}

          <div
            className="
              absolute
              -right-72
              top-20
              h-237.5
              w-237.5
              rounded-full
              opacity-80
              blur-[200px]

              dark:opacity-50
            "
            style={{
              background:
                "radial-gradient(circle, rgba(201,168,106,0.07), transparent 70%)",
            }}
          />

          {/* =====================================
              STATIC CENTER DEPTH
          ====================================== */}

          <div
            className="
              absolute
              left-1/2
              top-1/2
              h-175
              w-175
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              opacity-70
              blur-[170px]
            "
            style={{
              background:
                "radial-gradient(circle, rgba(53,80,112,0.05), transparent 70%)",
            }}
          />

          {/* =====================================
              TECHNICAL GRID
          ====================================== */}

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