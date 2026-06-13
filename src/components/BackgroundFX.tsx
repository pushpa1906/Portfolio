import { motion } from "framer-motion";

export default function BackgroundFX() {
  return (
    <div
      aria-hidden
      className="fixed inset-0 -z-10 overflow-hidden"
    >
      {/* base */}
      <div className="absolute inset-0 bg-[#F2F5F8] dark:bg-[#0B1220] transition-colors duration-500" />

      {/* soft blue atmosphere */}
      <motion.div
        className="
          absolute
          -left-64
          -top-56
          h-[900px]
          w-[900px]
          rounded-full
          blur-[180px]
        "
        style={{
          background:
            "radial-gradient(circle, rgba(143,168,199,0.22), transparent 70%)",
        }}
        animate={{
          x: [0, 70, -30, 0],
          y: [0, 50, -40, 0],
        }}
        transition={{
          duration: 36,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* champagne glow */}
      <motion.div
        className="
          absolute
          -right-72
          top-20
          h-[950px]
          w-[950px]
          rounded-full
          blur-[200px]
          opacity-100
          dark:opacity-70
        "
        style={{
          background:
            "radial-gradient(circle, rgba(201,168,106,0.12), transparent 70%)",
        }}
        animate={{
          x: [0, -60, 30, 0],
          y: [0, -35, 30, 0],
        }}
        transition={{
          duration: 42,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* subtle slate depth */}
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
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* very subtle technical lines */}
      <div
        className="absolute inset-0 opacity-[0.018] dark:opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right,#111827 1px,transparent 1px),linear-gradient(to bottom,#111827 1px,transparent 1px)",
          backgroundSize: "140px 140px",
        }}
      />
    </div>
  );
}