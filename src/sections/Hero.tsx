import { motion } from "framer-motion";

<motion.svg
  className="absolute inset-0 h-full w-full"
  viewBox="0 0 1000 600"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 2 }}
>
  {/* Lines */}
  <motion.line
    x1="350"
    y1="180"
    x2="500"
    y2="260"
    stroke="rgba(141,216,255,0.25)"
    strokeWidth="1"
    initial={{ pathLength: 0 }}
    animate={{ pathLength: 1 }}
    transition={{ duration: 2 }}
  />

  <motion.line
    x1="500"
    y1="260"
    x2="650"
    y2="190"
    stroke="rgba(141,216,255,0.25)"
    strokeWidth="1"
    initial={{ pathLength: 0 }}
    animate={{ pathLength: 1 }}
    transition={{ duration: 2, delay: 0.3 }}
  />

  <motion.line
    x1="500"
    y1="260"
    x2="470"
    y2="400"
    stroke="rgba(141,216,255,0.25)"
    strokeWidth="1"
    initial={{ pathLength: 0 }}
    animate={{ pathLength: 1 }}
    transition={{ duration: 2, delay: 0.6 }}
  />

  <motion.line
    x1="470"
    y1="400"
    x2="320"
    y2="470"
    stroke="rgba(141,216,255,0.25)"
    strokeWidth="1"
    initial={{ pathLength: 0 }}
    animate={{ pathLength: 1 }}
    transition={{ duration: 2, delay: 0.9 }}
  />

  {/* Stars */}
  {[
    [350, 180],
    [500, 260],
    [650, 190],
    [470, 400],
    [320, 470],
  ].map(([cx, cy], i) => (
    <motion.g
      key={i}
      animate={{
        scale: [1, 1.25, 1],
        opacity: [0.5, 1, 0.5],
      }}
      transition={{
        duration: 4 + i,
        repeat: Infinity,
      }}
    >
      <circle
        cx={cx}
        cy={cy}
        r="2"
        fill="white"
      />

      <circle
        cx={cx}
        cy={cy}
        r="10"
        fill="rgba(141,216,255,0.15)"
      />
    </motion.g>
  ))}
</motion.svg>