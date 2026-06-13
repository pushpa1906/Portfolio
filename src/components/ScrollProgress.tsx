import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="scroll-progress w-full"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
