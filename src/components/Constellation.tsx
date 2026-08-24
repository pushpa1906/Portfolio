import { useEffect, useRef, useState } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  gold: boolean;
};

const LINK_DISTANCE = 150;
const MOUSE_RADIUS = 180;

/*
 * Full constellation experience is desktop-only.
 * Tailwind's lg breakpoint is 1024px.
 */
const LARGE_SCREEN_BREAKPOINT = 1024;

export default function Constellation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  /*
   * Start disabled.
   * This prevents the canvas from rendering before we know
   * whether the device should use the constellation.
   */
  const [enabled, setEnabled] = useState(false);

  /*
   * Determine whether the constellation should exist.
   *
   * Requirements:
   * - viewport must be at least 1024px
   * - device should have a precise pointer such as a mouse/trackpad
   *
   * Phones and most tablets therefore never mount the canvas.
   */
  useEffect(() => {
    const mediaQuery = window.matchMedia(
      `(min-width: ${LARGE_SCREEN_BREAKPOINT}px) and (pointer: fine)`
    );

    const updateEnabled = () => {
      setEnabled(mediaQuery.matches);
    };

    updateEnabled();

    mediaQuery.addEventListener("change", updateEnabled);

    return () => {
      mediaQuery.removeEventListener("change", updateEnabled);
    };
  }, []);

  /*
   * Constellation animation.
   *
   * This effect only runs when `enabled === true`.
   */
  useEffect(() => {
    if (!enabled) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let particles: Particle[] = [];

    let width = 0;
    let height = 0;

    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    let animationFrame = 0;

    const mouse = {
      x: -9999,
      y: -9999,
      active: false,
    };

    /*
     * Scale particle count based on screen size,
     * while keeping a reasonable performance cap.
     */
    const countForSize = (w: number, h: number) => {
      const area = w * h;

      return Math.min(
        120,
        Math.max(36, Math.floor(area / 22000))
      );
    };

    /*
     * Create constellation particles.
     */
    const createParticles = () => {
      const count = countForSize(width, height);

      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,

        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,

        r: Math.random() * 1.6 + 0.6,

        gold: Math.random() < 0.12,
      }));
    };

    /*
     * Resize canvas for the current viewport.
     *
     * DPR is capped at 2 to avoid unnecessarily huge
     * canvases on high-density displays.
     */
    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;

      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      createParticles();
    };

    /*
     * Mouse / trackpad interaction.
     */
    const handlePointerMove = (event: PointerEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
      mouse.active = true;
    };

    const handlePointerLeave = () => {
      mouse.active = false;
      mouse.x = -9999;
      mouse.y = -9999;
    };

    /*
     * Draw one constellation frame.
     */
    const drawFrame = () => {
      ctx.clearRect(0, 0, width, height);

      /*
       * Update particle positions.
       */
      for (const particle of particles) {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > width) {
          particle.vx *= -1;
        }

        if (particle.y < 0 || particle.y > height) {
          particle.vy *= -1;
        }

        particle.x = Math.max(
          0,
          Math.min(width, particle.x)
        );

        particle.y = Math.max(
          0,
          Math.min(height, particle.y)
        );
      }

      /*
       * Draw connections between nearby particles.
       */
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];

        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];

          const dx = a.x - b.x;
          const dy = a.y - b.y;

          const distance = Math.sqrt(
            dx * dx + dy * dy
          );

          if (distance < LINK_DISTANCE) {
            const opacity =
              (1 - distance / LINK_DISTANCE) * 0.18;

            ctx.strokeStyle =
              `rgba(53, 80, 112, ${opacity})`;

            ctx.lineWidth = 1;

            ctx.beginPath();

            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);

            ctx.stroke();
          }
        }

        /*
         * Draw connection from nearby particles
         * to the user's pointer.
         */
        if (mouse.active) {
          const dx = a.x - mouse.x;
          const dy = a.y - mouse.y;

          const distance = Math.sqrt(
            dx * dx + dy * dy
          );

          if (distance < MOUSE_RADIUS) {
            const opacity =
              (1 - distance / MOUSE_RADIUS) * 0.35;

            ctx.strokeStyle =
              `rgba(201, 168, 106, ${opacity})`;

            ctx.lineWidth = 1;

            ctx.beginPath();

            ctx.moveTo(a.x, a.y);
            ctx.lineTo(mouse.x, mouse.y);

            ctx.stroke();
          }
        }
      }

      /*
       * Draw particle dots.
       */
      for (const particle of particles) {
        const dx = particle.x - mouse.x;
        const dy = particle.y - mouse.y;

        const distance = Math.sqrt(
          dx * dx + dy * dy
        );

        const near =
          mouse.active &&
          distance < MOUSE_RADIUS;

        ctx.beginPath();

        ctx.arc(
          particle.x,
          particle.y,
          near
            ? particle.r * 1.8
            : particle.r,
          0,
          Math.PI * 2
        );

        ctx.fillStyle = particle.gold
          ? `rgba(201, 168, 106, ${
              near ? 0.9 : 0.55
            })`
          : `rgba(53, 80, 112, ${
              near ? 0.8 : 0.4
            })`;

        ctx.fill();
      }
    };

    /*
     * Animation loop.
     */
    const animate = () => {
      drawFrame();

      animationFrame =
        requestAnimationFrame(animate);
    };

    /*
     * Initialize canvas.
     */
    resize();

    window.addEventListener(
      "resize",
      resize
    );

    /*
     * Pointer listeners aren't necessary for
     * users who prefer reduced motion.
     */
    if (!prefersReducedMotion) {
      window.addEventListener(
        "pointermove",
        handlePointerMove
      );

      window.addEventListener(
        "pointerleave",
        handlePointerLeave
      );
    }

    /*
     * Reduced motion:
     * draw one static constellation.
     *
     * Normal:
     * start continuous animation.
     */
    if (prefersReducedMotion) {
      drawFrame();
    } else {
      animationFrame =
        requestAnimationFrame(animate);
    }

    /*
     * Cleanup.
     *
     * This also runs when the viewport changes
     * from desktop to mobile because `enabled`
     * becomes false.
     */
    return () => {
      cancelAnimationFrame(animationFrame);

      window.removeEventListener(
        "resize",
        resize
      );

      window.removeEventListener(
        "pointermove",
        handlePointerMove
      );

      window.removeEventListener(
        "pointerleave",
        handlePointerLeave
      );
    };
  }, [enabled]);

  /*
   * IMPORTANT:
   *
   * On mobile/tablet there isn't merely a hidden canvas.
   * There is NO canvas at all.
   */
  if (!enabled) {
    return null;
  }

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="
        pointer-events-none
        fixed
        inset-0
        -z-10
        h-full
        w-full
      "
    />
  );
}