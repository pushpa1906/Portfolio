import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDownRight,
  Download,
  Code2,
  Globe,
  Zap,
  Database,
  BarChart3,
  Sparkles,
  MapPin,
  Palette,
} from "lucide-react";

const tags = [
  {
    label: "Software Engineering",
    icon: Code2,
    mobile: true,
  },
  {
    label: "Web Development",
    icon: Globe,
    mobile: true,
  },
  {
    label: "Frontend Development",
    icon: Zap,
    mobile: true,
  },
  {
    label: "UI/UX",
    icon: Palette,
  },
  {
    label: "APIs",
    icon: Database,
    mobile: false,
  },
  {
    label: "Data-Driven Projects",
    icon: BarChart3,
    mobile: false,
  },
  {
    label: "Content Management Systems",
    icon: Globe,
    mobile: true,
  },
  {
    label: "3+ Years Experience",
    icon: Sparkles,
    mobile: true,
  },
];

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="
        relative
        flex
        min-h-0
        items-start
        overflow-hidden
        pb-14
        pt-28

        sm:pb-16
        sm:pt-32

        lg:min-h-svh
        lg:items-center
        lg:pb-0
        lg:pt-0
      "
    >
      {/* ========================================
          BACKGROUND GLOWS
      ========================================= */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-40
          -top-24
          hidden
          h-190
          w-190
          rounded-full
          blur-[170px]
          lg:block
        "
        style={{
          background:
            "radial-gradient(circle, rgba(143,168,199,0.22), transparent 70%)",
        }}
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-48
          top-12
          hidden
          h-215
          w-215
          rounded-full
          blur-[190px]
          lg:block
        "
        style={{
          background:
            "radial-gradient(circle, rgba(201,168,106,0.13), transparent 70%)",
        }}
      />

      {/* Technical grid */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          hidden
          opacity-[0.018]
          dark:opacity-[0.04]
          lg:block
        "
        style={{
          backgroundImage:
            "linear-gradient(to right,#111827 1px,transparent 1px),linear-gradient(to bottom,#111827 1px,transparent 1px)",
          backgroundSize: "140px 140px",
        }}
      />

      {/* ========================================
          HERO CONTENT
      ========================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-7xl
          px-5
          sm:px-6
          lg:px-6
        "
      >
        <div
          className="
            grid
            items-start
            gap-8

            lg:grid-cols-[1.15fr_0.85fr]
            lg:gap-8
          "
        >
          {/* ====================================
              LEFT SIDE
          ===================================== */}

          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 20,
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.7,
            }}
            className="min-w-0"
          >
            {/* ====================================
                NAME AREA
            ===================================== */}

            <div
              className="
                relative
                mt-4
                sm:mt-6
                lg:mt-30
              "
            >
              {/* Hello */}

              <motion.p
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 8,
                      }
                }
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: reduceMotion ? 0 : 0.45,
                  delay: reduceMotion ? 0 : 0.1,
                }}
                className="
                  relative
                  z-10
                  mb-4
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.32em]
                  text-[#355070]

                  sm:text-sm

                  dark:text-[#8FA8C7]
                "
              >
                Hello, I&apos;m
              </motion.p>

              {/* Name */}

              <motion.h1
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 12,
                      }
                }
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: reduceMotion ? 0 : 0.6,
                  delay: reduceMotion ? 0 : 0.15,
                }}
                className="
                  display-heading
                  hero-accent
                  relative
                  z-10
                  max-w-full
                  text-[3.15rem]
                  font-bold
                  leading-[0.9]
                  tracking-tight

                  min-[390px]:text-[3.4rem]

                  sm:text-[4.5rem]

                  lg:max-w-none
                  lg:text-[5.7rem]
                  lg:leading-[0.88]

                  xl:text-[6rem]
                "
              >
                <span className="block">Pushpaja</span>

                <span className="block lg:whitespace-nowrap">
                  Bommisetty
                </span>
              </motion.h1>

              {/* ====================================
                  LOCATION + STATUS
              ===================================== */}

              <motion.div
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 8,
                      }
                }
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: reduceMotion ? 0 : 0.45,
                  delay: reduceMotion ? 0 : 0.3,
                }}
                className="
                  relative
                  z-10
                  mt-7
                  flex
                  flex-wrap
                  items-center
                  gap-x-5
                  gap-y-3
                  text-[0.82rem]
                  font-medium
                  text-slate-500

                  sm:text-sm

                  dark:text-[#9CA3AF]
                "
              >
                {/* Location */}

                <div className="flex items-center gap-2">
                  <MapPin
                    size={16}
                    strokeWidth={1.8}
                    className="
                      shrink-0
                      text-[#355070]
                      dark:text-[#8FA8C7]
                    "
                    aria-hidden="true"
                  />

                  <span>Cupertino, CA</span>
                </div>

                {/* Divider */}

                <span
                  aria-hidden="true"
                  className="
                    hidden
                    h-4
                    w-px
                    bg-[#D6DCE5]

                    sm:block

                    dark:bg-[#2A3445]
                  "
                />

                {/* Open to opportunities */}

                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    {!reduceMotion && (
                      <span
                        className="
                          absolute
                          inline-flex
                          h-full
                          w-full
                          animate-ping
                          rounded-full
                          bg-emerald-400
                          opacity-40
                        "
                      />
                    )}

                    <span
                      className="
                        relative
                        inline-flex
                        h-2.5
                        w-2.5
                        rounded-full
                        bg-emerald-500
                      "
                    />
                  </span>

                  <span>Open to opportunities</span>
                </div>
              </motion.div>
            </div>

            {/* ====================================
                SKILL TAGS
            ===================================== */}

            <div
              className="
                mt-7
                flex
                flex-wrap
                gap-2

                sm:mt-8
                sm:gap-3
              "
            >
              {tags.map((tag, index) => {
                const IconComponent = tag.icon;

                return (
                  <motion.div
                    key={tag.label}
                    initial={
                      reduceMotion
                        ? false
                        : {
                            opacity: 0,
                            y: 12,
                          }
                    }
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: reduceMotion ? 0 : 0.4,
                      delay: reduceMotion
                        ? 0
                        : 0.45 + index * 0.05,
                    }}
                    whileHover={
                      reduceMotion
                        ? undefined
                        : {
                            y: -2,
                          }
                    }
                    className={`
                      ${!tag.mobile ? "hidden md:flex" : "flex"}

                      max-w-full
                      items-center
                      gap-2
                      rounded-full
                      border
                      border-[#D6DCE5]
                      bg-white/70
                      px-3.5
                      py-2.5
                      text-[0.8rem]
                      font-medium
                      text-[#355070]
                      backdrop-blur-sm
                      transition-all

                      sm:px-5
                      sm:py-3
                      sm:text-sm

                      lg:hover:border-[#355070]
                      lg:hover:bg-white

                      dark:border-[#2A3445]
                      dark:bg-[#161E2E]/70
                      dark:text-[#8FA8C7]

                      lg:dark:hover:border-gold
                      lg:dark:hover:bg-[#161E2E]
                    `}
                  >
                    <IconComponent
                      size={15}
                      className="shrink-0 sm:h-4 sm:w-4"
                      aria-hidden="true"
                    />

                    <span>{tag.label}</span>
                  </motion.div>
                );
              })}
            </div>

            {/* ====================================
                BUTTONS
            ===================================== */}

            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 10,
                    }
              }
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.45,
                delay: reduceMotion ? 0 : 0.8,
              }}
              className="
                mt-7
                flex
                w-full
                flex-col
                gap-3

                sm:w-auto
                sm:flex-row
                sm:flex-wrap
                sm:gap-4
              "
            >
              {/* Let's Connect */}

              <motion.a
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        y: -3,
                      }
                }
                whileTap={
                  reduceMotion
                    ? undefined
                    : {
                        scale: 0.98,
                      }
                }
                href="#contact"
                className="
                  inline-flex
                  min-h-12
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-[#355070]
                  px-6
                  py-3.5
                  text-sm
                  font-medium
                  text-white
                  shadow-[0_12px_30px_rgba(53,80,112,0.2)]
                  transition-all

                  sm:w-auto
                  sm:px-8
                  sm:py-4

                  lg:hover:bg-[#2D4561]

                  dark:bg-gold
                  dark:text-ink
                  dark:shadow-[0_12px_30px_rgba(201,168,106,0.25)]

                  lg:dark:hover:bg-[#DDBF8E]
                "
              >
                Let&apos;s Connect

                <ArrowDownRight
                  size={18}
                  aria-hidden="true"
                />
              </motion.a>

              {/* Download Resume */}

              <motion.a
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        y: -3,
                      }
                }
                whileTap={
                  reduceMotion
                    ? undefined
                    : {
                        scale: 0.98,
                      }
                }
                href="/PushpajaBommisetty_Resume_July2026.pdf"
                download
                className="
                  inline-flex
                  min-h-12
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  border
                  border-[#D6DCE5]
                  bg-white/70
                  px-6
                  py-3.5
                  text-sm
                  font-medium
                  text-ink
                  backdrop-blur-sm
                  transition-all

                  sm:w-auto
                  sm:px-8
                  sm:py-4

                  lg:hover:border-[#355070]
                  lg:hover:text-[#355070]

                  dark:border-[#2A3445]
                  dark:bg-[#161E2E]/70

                  lg:dark:hover:border-gold
                  lg:dark:hover:text-gold
                "
              >
                Download Resume

                <Download
                  size={18}
                  aria-hidden="true"
                />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* ====================================
              RIGHT SIDE ORBIT
              Desktop only
          ===================================== */}

          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 26,
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.8,
              delay: reduceMotion ? 0 : 0.2,
            }}
            className="
              mt-55
              hidden
              flex-col
              items-center
              justify-center
              lg:flex
            "
          >
            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      scale: 0.92,
                    }
              }
              animate={{
                opacity: 1,
                scale: 0.85,
              }}
              transition={{
                delay: reduceMotion ? 0 : 0.25,
                duration: reduceMotion ? 0 : 0.9,
              }}
              className="relative h-64 w-64"
            >
              {/* Outer orbit */}

              <motion.div
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        rotate: 360,
                      }
                }
                transition={
                  reduceMotion
                    ? undefined
                    : {
                        duration: 52,
                        repeat: Infinity,
                        ease: "linear",
                      }
                }
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

              {/* Horizontal orbit */}

              <motion.div
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        rotate: -360,
                      }
                }
                transition={
                  reduceMotion
                    ? undefined
                    : {
                        duration: 74,
                        repeat: Infinity,
                        ease: "linear",
                      }
                }
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

              {/* Vertical orbit */}

              <motion.div
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        rotate: 360,
                      }
                }
                transition={
                  reduceMotion
                    ? undefined
                    : {
                        duration: 64,
                        repeat: Infinity,
                        ease: "linear",
                      }
                }
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

              {/* Orbit points */}

              <div
                className="
                  absolute
                  left-[34%]
                  top-[28%]
                  h-4
                  w-4
                  rounded-full
                  bg-[#355070]
                  dark:bg-[#6D8CA6]
                "
              />

              <div
                className="
                  absolute
                  left-[68%]
                  top-[40%]
                  h-4
                  w-4
                  rounded-full
                  bg-gold
                "
              />

              <div
                className="
                  absolute
                  left-[42%]
                  top-[72%]
                  h-3
                  w-3
                  rounded-full
                  bg-[#355070]
                  dark:bg-[#6D8CA6]
                "
              />

              <div
                className="
                  absolute
                  left-[76%]
                  top-[72%]
                  h-3
                  w-3
                  rounded-full
                  bg-gold
                "
              />

              {/* Center star */}

              <motion.div
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        scale: [1, 1.15, 1],
                        opacity: [0.75, 1, 0.75],
                      }
                }
                transition={
                  reduceMotion
                    ? undefined
                    : {
                        duration: 3.2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }
                }
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