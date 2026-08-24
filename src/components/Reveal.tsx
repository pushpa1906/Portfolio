import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
};

export default function Reveal({
  children,
  delay = 0,
  className = "",
}: RevealProps) {
  const reduceMotion = useReducedMotion();
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    const updateAnimationPreference = () => {
      setShouldAnimate(mediaQuery.matches);
    };

    updateAnimationPreference();

    mediaQuery.addEventListener(
      "change",
      updateAnimationPreference
    );

    return () => {
      mediaQuery.removeEventListener(
        "change",
        updateAnimationPreference
      );
    };
  }, []);

  /*
   * Mobile/tablet:
   * Render content immediately.
   *
   * Desktop:
   * Keep the original reveal animation.
   *
   * Reduced motion:
   * Always render immediately.
   */
  if (!shouldAnimate || reduceMotion) {
    return (
      <div className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 24,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.55,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}