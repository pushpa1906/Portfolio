import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDownRight,
  Download,
  Code2,
  Globe,
  Zap,
  MapPin,
  Palette,
  Mail,
  Sparkles,
  Clock3,
  PanelsTopLeft,
} from "lucide-react";

/* =========================================================
   HERO DATA
========================================================== */

const focusAreas = [
  {
    label: "Software Engineering",
    icon: Code2,
  },
  {
    label: "Web Development",
    icon: Globe,
  },
  {
    label: "Frontend Development",
    icon: Zap,
  },
  {
    label: "UI/UX",
    icon: Palette,
  },
  {
    label: "Content Management Systems",
    icon: PanelsTopLeft,
  },
  {
    label: "3+ Years Experience",
    icon: Sparkles,
  },
];

/* =========================================================
   HERO
========================================================== */

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const [currentTime, setCurrentTime] = useState("");
  const [timeZone, setTimeZone] = useState("");

  /* =========================================================
     LIVE CUPERTINO TIME
  ========================================================== */

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      const time = new Intl.DateTimeFormat("en-US", {
        timeZone: "America/Los_Angeles",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      }).format(now);

      const zoneParts = new Intl.DateTimeFormat("en-US", {
        timeZone: "America/Los_Angeles",
        timeZoneName: "short",
      }).formatToParts(now);

      const zone =
        zoneParts.find((part) => part.type === "timeZoneName")?.value ?? "PT";

      setCurrentTime(time);
      setTimeZone(zone);
    };

    updateTime();

    const interval = window.setInterval(updateTime, 1000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="
        relative
        flex
        min-h-0
        items-start
        overflow-hidden
        pb-16
        pt-28

        sm:pb-20
        sm:pt-32

        lg:min-h-svh
        lg:items-center
        lg:pb-0
        lg:pt-0
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      {/* Soft left glow */}

      <div
        className="
          absolute
          -left-40
          -top-24
          h-190
          w-190
          rounded-full
          blur-[170px]

          lg:block
        "
        style={{
          background:
            "radial-gradient(circle, rgba(143,168,199,0.18), transparent 70%)",
        }}
      />

      {/* Soft gold glow */}

      <div
        className="
          absolute
          -right-48
          top-12
          h-215
          w-215
          rounded-full
          blur-[190px]

          lg:block
        "
        style={{
          background:
            "radial-gradient(circle, rgba(201,168,106,0.10), transparent 70%)",
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

      {/* =====================================================
          CONTENT
      ====================================================== */}

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
            items-center
            gap-12

            sm:gap-14

            lg:grid-cols-[1.18fr_0.82fr]
            lg:gap-14

            xl:gap-16
          "
        >
          {/* =================================================
              LEFT SIDE
          ================================================== */}

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
            {/* Greeting */}

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
                mb-4
                flex
                items-center
                gap-3
                text-xs
                font-bold
                uppercase
                tracking-[0.32em]
                text-[#355070]

                sm:text-sm

                dark:text-[#8FA8C7]
              "
            >
              <span
                aria-hidden="true"
                className="
                  hidden
                  h-px
                  w-8
                  bg-gold

                  sm:block
                "
              />

              Hello — I&apos;m
            </motion.p>

            {/* =================================================
                NAME
            ================================================== */}

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
                max-w-full
                text-[3.15rem]
                font-bold
                leading-[0.9]
                tracking-tight

                min-[390px]:text-[3.4rem]

                sm:text-[4.5rem]

                lg:max-w-none
                lg:text-[5.2rem]
                lg:leading-[0.88]

                xl:text-[5.6rem]
              "
            >
              <span className="block">Pushpaja</span>

              <span className="block lg:whitespace-nowrap">Bommisetty</span>
            </motion.h1>

            {/* =================================================
                PROFESSIONAL DESCRIPTION
            ================================================== */}

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
                delay: reduceMotion ? 0 : 0.25,
              }}
              className="
                mt-6
                max-w-xl
                text-base
                leading-7
                text-slate-600

                sm:text-[1.05rem]

                dark:text-[#9CA3AF]
              "
            >
              <span
                className="
                  font-semibold
                  text-[#355070]

                  dark:text-[#C6D0DE]
                "
              >
                Software Engineer &amp; Web Developer
              </span>{" "}
              building thoughtful, accessible, and responsive digital
              experiences.
            </motion.p>

            {/* =================================================
                FOCUS AREAS
            ================================================== */}

            <div
              className="
                mt-7
                flex
                max-w-2xl
                flex-wrap
                gap-2

                sm:mt-8
                sm:gap-3
              "
            >
              {focusAreas.map((area, index) => {
                const IconComponent = area.icon;

                return (
                  <motion.div
                    key={area.label}
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
                      delay: reduceMotion ? 0 : 0.34 + index * 0.06,
                    }}
                    whileHover={
                      reduceMotion
                        ? undefined
                        : {
                            y: -2,
                          }
                    }
                    className="
                      flex
                      max-w-full
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
                      transition-all
                      hover:border-[#355070]
                      hover:bg-white
                      dark:border-[#2A3445]
                      dark:bg-[#161E2E]/70
                      dark:text-[#8FA8C7]

                      lg:dark:hover:border-gold
                      lg:dark:hover:bg-[#161E2E]
                    "
                  >
                    <IconComponent
                      size={15}
                      className="shrink-0 sm:h-4 sm:w-4"
                      aria-hidden="true"
                    />

                    <span>{area.label}</span>
                  </motion.div>
                );
              })}
            </div>

            {/* =================================================
                CTA BUTTONS
            ================================================== */}

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
                delay: reduceMotion ? 0 : 0.72,
              }}
              className="
                mt-8
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
                Let&apos;s Connect

                <ArrowDownRight size={18} aria-hidden="true" />
              </motion.a>

              <motion.a
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                href="\PushpajaBommisetty_Resume_July2026.pdf"
                download
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

                <Download size={18} aria-hidden="true" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* =================================================
              RIGHT / PROFILE AREA
              Mobile: below main content
              Desktop: right side
          ================================================== */}

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
              delay: reduceMotion ? 0 : 0.3,
            }}
            className="
              relative
              flex
              w-full
              items-center
              justify-center

              lg:min-h-135
            "
          >
            {/* =================================================
                DESKTOP GOLD ORBIT
            ================================================== */}

            <motion.div
              aria-hidden="true"
              animate={
                reduceMotion
                  ? undefined
                  : {
                      rotate: [0, 2.5, 0],
                    }
              }
              transition={{
                duration: 14,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                pointer-events-none
                absolute
                hidden

                lg:left-[1%]
                lg:top-[7%]
                lg:block
                lg:h-113.75
                lg:w-113.75
                lg:rounded-full
                lg:border
                lg:border-gold/45

                lg:dark:border-gold/25
              "
            />

            {/* Desktop orbit node */}

            <motion.span
              aria-hidden="true"
              animate={
                reduceMotion
                  ? undefined
                  : {
                      scale: [1, 1.2, 1],
                    }
              }
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                pointer-events-none
                absolute
                hidden

                lg:left-[1.5%]
                lg:top-[36%]
                lg:block
                lg:h-3
                lg:w-3
                lg:rounded-full
                lg:bg-gold
                lg:shadow-[0_0_0_6px_rgba(201,168,106,0.10)]

                lg:dark:bg-gold
              "
            />

            {/* Desktop top node */}

            <span
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                hidden

                lg:right-[8%]
                lg:top-[14%]
                lg:block
                lg:h-2.5
                lg:w-2.5
                lg:rounded-full
                lg:bg-gold

                lg:dark:bg-gold
              "
            />

            {/* Desktop bottom node */}

            <span
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                hidden

                lg:bottom-[11%]
                lg:left-[18%]
                lg:block
                lg:h-2
                lg:w-2
                lg:rounded-full
                lg:bg-gold/80

                lg:dark:bg-gold/80
              "
            />

            {/* Desktop dot matrix */}

            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                hidden

                lg:bottom-[14%]
                lg:right-[1%]
                lg:grid
                lg:grid-cols-3
                lg:gap-2.5
                lg:opacity-35
              "
            >
              {Array.from({ length: 9 }).map((_, index) => (
                <span
                  key={index}
                  className="
                    h-1
                    w-1
                    rounded-full
                    bg-gold

                    dark:bg-gold
                  "
                />
              ))}
            </div>

            {/* =================================================
                PROFILE / STATUS CARD
            ================================================== */}

            <motion.div
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      y: -4,
                    }
              }
              transition={{
                duration: 0.25,
              }}
              className="
                relative
                z-10
                w-full
                max-w-107.5
                overflow-hidden
                rounded-3xl
                border
                border-[#D6DCE5]
                bg-white/90
                p-5
                shadow-[0_18px_50px_rgba(53,80,112,0.09)]
                backdrop-blur-xl

                min-[390px]:p-6

                sm:max-w-120
                sm:p-7

                lg:max-w-95
                lg:rounded-[28px]
                lg:p-8
                lg:shadow-[0_24px_70px_rgba(53,80,112,0.10)]

                dark:border-[#2A3445]
                dark:bg-[#161E2E]/90
                dark:shadow-[0_18px_50px_rgba(0,0,0,0.18)]

                lg:dark:shadow-[0_24px_70px_rgba(0,0,0,0.22)]
              "
            >
              {/* Gold top accent */}

              <div
                aria-hidden="true"
                className="
                  absolute
                  left-6
                  top-0
                  h-0.75
                  w-12
                  rounded-b-full
                  bg-gold

                  sm:left-7
                  sm:w-14

                  lg:left-8

                  dark:bg-gold
                "
              />

              {/* =================================================
                  IDENTITY
              ================================================== */}

              <div className="flex items-center gap-3.5 sm:gap-4">
                {/* PB avatar */}

                <div
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#355070]/15
                    bg-[#355070]/6
                    text-base
                    font-bold
                    tracking-wide
                    text-[#355070]

                    sm:h-14
                    sm:w-14
                    sm:text-lg

                    dark:border-[#8FA8C7]/20
                    dark:bg-[#8FA8C7]/10
                    dark:text-[#8FA8C7]
                  "
                >
                  PB
                </div>

                {/* Name / location */}

                <div className="min-w-0">
                  <h2
                    className="
                      truncate
                      text-base
                      font-bold
                      tracking-tight
                      text-ink

                      sm:text-lg

                      dark:text-white
                    "
                  >
                    Pushpaja Bommisetty
                  </h2>

                  <div
                    className="
                      mt-1
                      flex
                      items-center
                      gap-1.5
                      text-xs
                      text-slate-500

                      sm:mt-1.5
                      sm:text-sm

                      dark:text-[#9CA3AF]
                    "
                  >
                    <MapPin
                      size={14}
                      strokeWidth={1.8}
                      className="
                        shrink-0
                        text-[#355070]

                        dark:text-[#8FA8C7]
                      "
                      aria-hidden="true"
                    />

                    <span>Cupertino, California</span>
                  </div>
                </div>
              </div>

              {/* =================================================
                  LIVE TIME
              ================================================== */}

              <div
                className="
                  mt-6
                  border-y
                  border-[#D6DCE5]
                  py-5

                  sm:mt-7
                  sm:py-6

                  lg:mt-8

                  dark:border-[#2A3445]
                "
              >
                <div className="flex items-center justify-between">
                  <div
                    className="
                      flex
                      items-center
                      gap-2
                      text-[0.6rem]
                      font-bold
                      uppercase
                      tracking-[0.18em]
                      text-slate-400

                      sm:text-[0.65rem]
                      sm:tracking-[0.2em]

                      dark:text-slate-500
                    "
                  >
                    <Clock3 size={13} aria-hidden="true" />

                    Local time
                  </div>

                  <span
                    className="
                      text-[0.62rem]
                      font-bold
                      uppercase
                      tracking-[0.14em]
                      text-gold

                      sm:text-[0.68rem]

                      dark:text-gold
                    "
                  >
                    {timeZone || "PT"}
                  </span>
                </div>

                <div
                  className="
                    mt-3
                    text-[2.25rem]
                    font-semibold
                    leading-none
                    tracking-[-0.045em]
                    text-[#355070]
                    tabular-nums

                    sm:text-[2.45rem]

                    lg:text-[2.65rem]

                    dark:text-[#C6D0DE]
                  "
                >
                  {currentTime || "--:--"}
                </div>
              </div>

              {/* =================================================
                  AVAILABILITY
              ================================================== */}

              <div className="mt-5 sm:mt-6">
                <div className="flex items-center gap-2.5">
                  <span className="relative flex h-2.5 w-2.5 shrink-0">
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

                  <span
                    className="
                      text-[0.6rem]
                      font-bold
                      uppercase
                      tracking-[0.16em]
                      text-slate-500

                      min-[390px]:text-[0.64rem]

                      sm:text-[0.68rem]
                      sm:tracking-[0.2em]

                      dark:text-[#B8C0CC]
                    "
                  >
                    Open to opportunities
                  </span>
                </div>
              </div>

              {/* =================================================
                  EMAIL
              ================================================== */}

              <motion.a
                href="mailto:pushpaja.bommisetty1906@gmail.com"
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        x: 3,
                      }
                }
                whileTap={
                  reduceMotion
                    ? undefined
                    : {
                        scale: 0.99,
                      }
                }
                aria-label="Email Pushpaja Bommisetty"
                className="
                  group
                  mt-5
                  flex
                  min-h-12
                  items-center
                  justify-between
                  rounded-xl
                  border
                  border-[#D6DCE5]
                  px-4
                  py-3.5
                  text-sm
                  font-medium
                  text-[#355070]
                  transition-colors

                  sm:mt-6

                  hover:border-[#355070]
                  hover:text-[#2D4561]

                  dark:border-[#2A3445]
                  dark:text-[#8FA8C7]

                  dark:hover:border-gold
                  dark:hover:text-gold
                "
              >
                <span className="flex items-center gap-2.5">
                  <Mail
                    size={17}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />

                  Email me
                </span>

                <ArrowDownRight
                  size={17}
                  className="
                    shrink-0
                    transition-transform

                    group-hover:translate-x-0.5
                    group-hover:translate-y-0.5
                  "
                  aria-hidden="true"
                />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}