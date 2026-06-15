import { motion } from "framer-motion";
import { ArrowDownRight, Download,  Code2, Globe, Zap, Database, BarChart3 } from "lucide-react";

const tags = [
  { label: "Software Engineering", icon: Code2 },
  { label: "Web Development", icon: Globe },
  { label: "Frontend Development", icon: Zap },
  { label: "APIs", icon: Database },
  { label: "Data-Driven Projects", icon: BarChart3 },
  { label: "Content Management System", icon: Globe },
  { label: "3+ years experience", icon: Zap },
];

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background glows */}
      <div
        className="
          absolute
          -left-40
          -top-24
          h-190
          w-190
          rounded-full
          blur-[170px]
        "
        style={{
          background:
            "radial-gradient(circle, rgba(143,168,199,0.22), transparent 70%)",
        }}
      />

      <div
        className="
          absolute
          -right-48
          top-12
          h-215
          w-215
          rounded-full
          blur-[190px]
        "
        style={{
          background:
            "radial-gradient(circle, rgba(201,168,106,0.13), transparent 70%)",
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.018] dark:opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right,#111827 1px,transparent 1px),linear-gradient(to bottom,#111827 1px,transparent 1px)",
          backgroundSize: "140px 140px",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-24">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1fr]">
          {/* Left - Description */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <span
                className="
                  pointer-events-none
                  absolute
                  -left-2
                  -top-16
                  hidden
                  text-[9rem]
                  font-black
                  leading-none
                  tracking-[-0.08em]
                  text-[#355070]/5
                  dark:text-[#6D8CA6]/8
                  xl:block
                "
              >
                ENGINEER
              </span>

              {/* Name + Animated Stars Container */}
              <div className="flex items-start gap-8 lg:gap-12">
                <h1
                  className="
                    relative
                    z-10
                    display-heading
                    hero-accent
                    text-[4.8rem]
                    leading-[0.85]
                    tracking-tight
                    md:text-[8rem]
                    xl:text-[10rem]
                  "
                >
                  Pushpaja
                  <br />
                  Bommisetty
                </h1>
              </div>
            </div>

            {/*<div className="mt-10">
              <div className="mb-8 h-px w-28 bg-gold" />

              <p
                className="
                  max-w-xl
                  text-2xl
                  leading-relaxed
                  text-ink
                  md:text-3xl
                "
              >
                Building software, web applications,
                and digital experiences with modern technologies.
              </p>
            </div>*/}

            {/* Tags - Horizontal */}
            <div className="mt-8 flex flex-wrap gap-3">
              {tags.map((tag, index) => {
                const IconComponent = tag.icon;
                return (
                  <motion.div
                    key={tag.label}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.35 + index * 0.08,
                      duration: 0.45,
                    }}
                    className="
                      flex
                      items-center
                      gap-2
                      rounded-full
                      border
                      border-[#D6DCE5]
                      bg-white/70
                      px-5
                      py-3
                      text-sm
                      font-medium
                      text-[#355070]
                      backdrop-blur
                      hover:border-[#355070]
                      hover:bg-white
                      transition-all
                      dark:border-[#2A3445]
                      dark:bg-[#161E2E]/70
                      dark:text-[#8FA8C7]
                      dark:hover:border-gold
                      dark:hover:bg-[#161E2E]
                    "
                  >
                    <IconComponent size={16} />
                    <span>{tag.label}</span>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-6 flex flex-wrap gap-4">
              <motion.a
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                href="#projects"
                className="
                  flex
                  items-center
                  gap-2
                  rounded-full
                  bg-[#355070]
                  px-8
                  py-4
                  text-white
                  shadow-[0_12px_30px_rgba(53,80,112,0.2)]
                  transition-all
                  hover:bg-[#2D4561]
                  dark:bg-gold
                  dark:text-ink
                  dark:shadow-[0_12px_30px_rgba(201,168,106,0.25)]
                  dark:hover:bg-[#DDBF8E]
                "
              >
                View Projects
                <ArrowDownRight size={18} />
              </motion.a>

              <motion.a
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                href="\PushpajaBommisetty_Resume_June2026.pdf"
                className="
                  flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-[#D6DCE5]
                  bg-white/70
                  px-8
                  py-4
                  text-ink
                  backdrop-blur
                  transition-all
                  hover:border-[#355070]
                  hover:text-[#355070]
                  dark:border-[#2A3445]
                  dark:bg-[#161E2E]/70
                  dark:hover:border-gold
                  dark:hover:text-gold
                "
              >
                Download Resume
                <Download size={18} />
              </motion.a>
            </div>
          </motion.div>

          {/* Right - Stars and Tags */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-end gap-8"
          >
            {/* Animated Stars */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.25, duration: 0.9 }}
              className="relative h-64 w-64"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 52,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute
                  left-1/2
                  top-1/2
                  h-130
                  w-130
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  border
                  border-[#355070]/12
                  dark:border-[#6D8CA6]/20
                "
              />

              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 74,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute
                  left-1/2
                  top-1/2
                  h-90
                  w-172.5
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  border
                  border-gold/20
                "
              />

              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 64,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute
                  left-1/2
                  top-1/2
                  h-172.5
                  w-65
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  border
                  border-[#355070]/12
                  dark:border-[#6D8CA6]/20
                "
              />

              <div className="absolute left-[34%] top-[28%] h-4 w-4 rounded-full bg-[#355070] dark:bg-[#6D8CA6]" />
              <div className="absolute left-[68%] top-[40%] h-4 w-4 rounded-full bg-gold" />
              <div className="absolute left-[42%] top-[72%] h-3 w-3 rounded-full bg-[#355070] dark:bg-[#6D8CA6]" />
              <div className="absolute left-[76%] top-[72%] h-3 w-3 rounded-full bg-gold" />

              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.75, 1, 0.75],
                }}
                transition={{
                  duration: 3.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  left-1/2
                  top-1/2
                  -translate-x-1/2
                  -translate-y-1/2
                  text-7xl
                  text-gold
                "
              >
                ✦
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}