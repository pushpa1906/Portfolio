import { motion, useReducedMotion } from "framer-motion";

import {
  CheckCircle,
  Code2,
  Palette,
  Globe,
  type LucideIcon,
} from "lucide-react";

/* =========================================================
   TYPES
========================================================= */

interface StatusBadgeProps {
  label: string;
  color?: "green" | "blue";
  delay: number;
}

interface ExperienceHighlightProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay: number;
}

/* =========================================================
   STATUS BADGE
========================================================= */

const StatusBadge = ({
  label,
  color = "green",
  delay,
}: StatusBadgeProps) => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              scale: 0.9,
            }
      }
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        delay: reduceMotion ? 0 : delay,
        duration: reduceMotion ? 0 : 0.4,
      }}
      viewport={{ once: true }}
      className={`
        flex
        items-center
        gap-2
        rounded-full
        px-3.5
        py-2

        sm:px-4

        ${
          color === "green"
            ? "bg-green-50 dark:bg-green-500/10"
            : "bg-blue-50 dark:bg-blue-500/10"
        }
      `}
    >
      <CheckCircle
        size={16}
        aria-hidden="true"
        className={`
          shrink-0

          ${
            color === "green"
              ? "text-green-600 dark:text-green-400"
              : "text-blue-600 dark:text-blue-400"
          }
        `}
      />

      <span
        className={`
          text-xs
          font-medium

          sm:text-sm

          ${
            color === "green"
              ? "text-green-700 dark:text-green-400"
              : "text-blue-700 dark:text-blue-400"
          }
        `}
      >
        {label}
      </span>
    </motion.div>
  );
};

/* =========================================================
   EXPERIENCE HIGHLIGHT
========================================================= */

const ExperienceHighlight = ({
  icon: Icon,
  title,
  description,
  delay,
}: ExperienceHighlightProps) => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              y: 12,
            }
      }
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: reduceMotion ? 0 : delay,
        duration: reduceMotion ? 0 : 0.45,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      className="
        flex
        gap-3

        sm:gap-4
      "
    >
      <Icon
        size={22}
        aria-hidden="true"
        className="
          mt-0.5
          shrink-0
          text-gold

          sm:mt-1
          sm:h-6
          sm:w-6
        "
      />

      <div className="min-w-0">
        <h4
          className="
            mb-1
            font-semibold
            text-ink
          "
        >
          {title}
        </h4>

        <p
          className="
            text-sm
            leading-6
            text-muted

            sm:leading-relaxed
          "
        >
          {description}
        </p>
      </div>
    </motion.div>
  );
};

/* =========================================================
   ABOUT
========================================================= */

export default function About() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="
        relative
        overflow-hidden
        py-16

        sm:py-20

        md:py-24
      "
      id="about"
    >
      {/* ========================================
          BACKGROUND DECORATION
      ========================================= */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-40
          top-1/2
          -z-10
          hidden
          h-190
          w-190
          rounded-full
          blur-[170px]

          lg:block
        "
        style={{
          background:
            "radial-gradient(circle, rgba(201,168,106,0.08), transparent 70%)",
        }}
      />

      {/* ========================================
          CONTAINER
      ========================================= */}

      <div
        className="
          mx-auto
          w-full
          max-w-7xl
          px-5

          sm:px-6
        "
      >
        {/* ========================================
            SECTION HEADER
        ========================================= */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 14,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.5,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="
            mb-10

            sm:mb-12

            md:mb-16
          "
        >
          <p className="section-label mb-4">
            ABOUT
          </p>

          <h2
            className="
              display-heading
              max-w-4xl
              text-4xl
              leading-tight
              text-ink

              sm:text-5xl

              md:text-6xl

              lg:text-7xl

              dark:text-[#F3F4F6]
            "
          >
            Turning curiosity into experience.
          </h2>
        </motion.div>

        {/* ========================================
            MAIN CONTENT
        ========================================= */}

        <div
          className="
            grid
            gap-10

            md:gap-12

            lg:grid-cols-[1fr_0.8fr]
          "
        >
          {/* ====================================
              LEFT — BIO
          ===================================== */}

          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 14,
                  }
            }
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.5,
            }}
            viewport={{
              once: true,
              amount: 0.1,
            }}
            className="
              min-w-0
              space-y-5

              sm:space-y-6
            "
          >
            {/* BIO PARAGRAPH 1 */}

            <p
              className="
                text-base
                leading-7
                text-muted

                sm:text-lg
                sm:leading-relaxed
              "
            >
              What began as an interest in understanding how
              technology works evolved into a passion for software
              development and web technologies. Earning a{" "}
              <span className="font-semibold">
                Master&apos;s degree in Computer Science from the
                University of Texas at Tyler
              </span>{" "}
              provided opportunities to further explore modern
              technologies, software development, and data-driven
              solutions.
            </p>

            {/* BIO PARAGRAPH 2 */}

            <p
              className="
                text-base
                leading-7
                text-muted

                sm:text-lg
                sm:leading-relaxed
              "
            >
              Over the years, I have contributed to{" "}
              <span className="font-semibold">
                web applications, technology-driven projects, and
                digital platforms
              </span>{" "}
              while continuously expanding my technical knowledge.
              I enjoy creating solutions that are practical,
              user-focused, and designed to solve real-world needs.
            </p>

            {/* BIO PARAGRAPH 3 */}

            <p
              className="
                text-base
                leading-7
                text-muted

                sm:text-lg
                sm:leading-relaxed
              "
            >
              I value{" "}
              <span className="font-semibold">
                continuous learning, collaboration, and professional
                growth
              </span>
              . Each project presents an opportunity to deepen my
              knowledge, refine my skills, and contribute to
              meaningful outcomes through technology.
            </p>

            {/* ====================================
                WHAT I BRING
            ===================================== */}

            <div
              className="
                mt-8
                space-y-5

                sm:mt-10
                sm:space-y-6
              "
            >
              <h3
                className="
                  text-lg
                  font-bold
                  text-ink

                  sm:text-xl
                "
              >
                What I Bring
              </h3>

              {/* WEB DEVELOPMENT */}

              <ExperienceHighlight
                icon={Globe}
                title="Web Development"
                description="Experience building responsive web applications using React, TypeScript, modern frontend technologies, backend services, APIs, and content management systems."
                delay={0.15}
              />

              {/* PROVEN EXPERIENCE */}

              <ExperienceHighlight
                icon={Code2}
                title="Proven Experience"
                description="Real-world experience across software development, web platforms, frontend implementation, backend integration, accessibility, and digital technology environments."
                delay={0.25}
              />

              {/* UI / UX */}

              <ExperienceHighlight
                icon={Palette}
                title="UI/UX & User-Centered Design"
                description="Interested in the intersection of frontend development and UI/UX, with a focus on creating intuitive, accessible, responsive, and visually thoughtful digital experiences."
                delay={0.35}
              />
            </div>
          </motion.div>

          {/* ====================================
              RIGHT — STATUS / EDUCATION / VALUES
          ===================================== */}

          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 14,
                  }
            }
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.5,
            }}
            viewport={{
              once: true,
              amount: 0.1,
            }}
            className="
              min-w-0
              space-y-4

              sm:space-y-5

              lg:space-y-6
            "
          >
            {/* ==================================
                STATUS BADGES
            =================================== */}

            <div
              className="
                flex
                flex-wrap
                items-center
                gap-2

                sm:gap-3

                lg:flex-col
                lg:items-start
              "
            >
              <StatusBadge
                label="Open to Work"
                color="green"
                delay={0.15}
              />

              <StatusBadge
                label="Available Now"
                color="blue"
                delay={0.2}
              />
            </div>

            {/* ==================================
                EDUCATION
            =================================== */}

            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 12,
                    }
              }
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: reduceMotion ? 0 : 0.2,
                duration: reduceMotion ? 0 : 0.4,
              }}
              viewport={{
                once: true,
              }}
              className="
                rounded-2xl
                border
                border-[#D6DCE5]
                bg-white/70
                p-5
                backdrop-blur
                transition-colors

                sm:p-6

                lg:hover:border-[#355070]

                dark:border-[#2A3445]
                dark:bg-[#161E2E]/70

                lg:dark:hover:border-gold
              "
            >
              <p
                className="
                  mb-3
                  text-xs
                  uppercase
                  tracking-wider
                  text-muted
                "
              >
                Education
              </p>

              <h3
                className="
                  text-base
                  font-semibold
                  text-ink

                  sm:text-lg
                "
              >
                MS Computer Science
              </h3>

              <p
                className="
                  mt-1
                  text-sm
                  font-medium
                  leading-relaxed
                  text-[#355070]

                  dark:text-[#8FA8C7]
                "
              >
                University of Texas at Tyler
              </p>
            </motion.div>

            {/* ==================================
                EXPERIENCE
            =================================== */}

            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 12,
                    }
              }
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: reduceMotion ? 0 : 0.25,
                duration: reduceMotion ? 0 : 0.4,
              }}
              viewport={{
                once: true,
              }}
              className="
                rounded-2xl
                border
                border-[#D6DCE5]
                bg-white/70
                p-5
                backdrop-blur
                transition-colors

                sm:p-6

                lg:hover:border-[#355070]

                dark:border-[#2A3445]
                dark:bg-[#161E2E]/70

                lg:dark:hover:border-gold
              "
            >
              <p
                className="
                  mb-3
                  text-xs
                  uppercase
                  tracking-wider
                  text-muted
                "
              >
                Experience
              </p>

              <div className="space-y-3">
                {/* CEBURU */}

                <div>
                  <h3 className="font-semibold text-ink">
                    Ceburu
                  </h3>

                  <p
                    className="
                      mt-1
                      text-sm
                      leading-6
                      text-muted
                    "
                  >
                    Software development &amp; frontend engineering
                  </p>
                </div>

                {/* UT TYLER */}

                <div>
                  <h3 className="font-semibold text-ink">
                    UT Tyler
                  </h3>

                  <p
                    className="
                      mt-1
                      text-sm
                      leading-6
                      text-muted
                    "
                  >
                    Web development, CMS &amp; accessibility
                  </p>
                </div>
              </div>
            </motion.div>

            {/* ==================================
                CORE VALUES
            =================================== */}

            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 12,
                    }
              }
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: reduceMotion ? 0 : 0.3,
                duration: reduceMotion ? 0 : 0.4,
              }}
              viewport={{
                once: true,
              }}
              className="
                rounded-2xl
                border
                border-[#D6DCE5]
                bg-white/70
                p-5
                backdrop-blur

                sm:p-6

                dark:border-[#2A3445]
                dark:bg-[#161E2E]/70
              "
            >
              <p
                className="
                  mb-4
                  text-xs
                  uppercase
                  tracking-wider
                  text-muted
                "
              >
                Core Values
              </p>

              <ul className="space-y-3">
                {[
                  "Clean, maintainable code",
                  "User-centric design",
                  "Continuous learning",
                  "Community contribution",
                ].map((value) => (
                  <li
                    key={value}
                    className="
                      flex
                      items-start
                      gap-2
                    "
                  >
                    <span
                      aria-hidden="true"
                      className="
                        mt-0.5
                        font-bold
                        text-gold
                      "
                    >
                      →
                    </span>

                    <span
                      className="
                        text-sm
                        leading-6
                        text-ink
                      "
                    >
                      {value}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}