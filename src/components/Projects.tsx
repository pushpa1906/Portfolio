import { motion, useReducedMotion } from "framer-motion";
import { projects } from "../data/portfolio";
import Reveal from "./Reveal";
import { useSpotlight } from "../hooks/useSpotlight";

/* =========================================================
   PROJECT VISUALS
========================================================= */

function ProjectVisual({ visual }: { visual?: string }) {
  /* =======================================================
     APPLYFLOW
  ======================================================= */

  if (visual === "applyflow") {
    return (
      <div className="relative h-52 overflow-hidden rounded-2xl bg-[#DDE3D0] sm:h-56">
        {/* Background decoration */}

        <div
          aria-hidden="true"
          className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#87976C]/20"
        />

        <div
          aria-hidden="true"
          className="absolute -bottom-16 -left-12 h-44 w-44 rounded-full bg-white/25"
        />

        <div className="relative flex h-full flex-col p-5">
          {/* Header */}

          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#596348]">
              Application Tracker
            </span>

            <span className="text-[10px] font-semibold text-[#657250]">
              APPLYFLOW
            </span>
          </div>

          {/* Flow */}

          <div className="mt-auto space-y-2">
            {/* Applied */}

            <motion.div
              whileHover={{ x: 3 }}
              className="flex items-center justify-between rounded-xl border border-[#87976C]/20 bg-[#F7F6EF]/90 px-3.5 py-2.5 shadow-sm"
            >
              <div className="flex items-center gap-2.5">
                <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#87976C]/15 text-[9px] font-bold text-[#657250]">
                  01
                </span>

                <span className="text-xs font-semibold text-[#3F4735]">
                  Applied
                </span>
              </div>

              <span className="rounded-full bg-[#87976C]/15 px-2 py-1 text-[8px] font-bold text-[#657250]">
                ACTIVE
              </span>
            </motion.div>

            {/* Interview */}

            <motion.div
              whileHover={{ x: 3 }}
              className="ml-4 flex items-center justify-between rounded-xl border border-[#87976C]/20 bg-white/75 px-3.5 py-2.5"
            >
              <span className="text-xs font-medium text-[#4B5540]">
                Interview
              </span>

              <span className="text-[9px] text-[#727B64]">
                Next →
              </span>
            </motion.div>

            {/* Offer */}

            <motion.div
              whileHover={{ x: 3 }}
              className="ml-8 flex items-center justify-between rounded-xl bg-[#657250] px-3.5 py-2.5 shadow-sm"
            >
              <span className="text-xs font-semibold text-white">
                Offer
              </span>

              <span className="text-sm text-[#F3E3B7]">
                ✦
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    );
  }

  /* =======================================================
     TINTMINT
  ======================================================= */

  if (visual === "tintmint") {
    return (
      <div className="relative h-52 overflow-hidden rounded-2xl bg-[#EEE9F5] sm:h-56">
        {/* Background */}

        <div
          aria-hidden="true"
          className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#C9B6E4]/40"
        />

        <div
          aria-hidden="true"
          className="absolute -bottom-16 -left-12 h-44 w-44 rounded-full bg-[#83CEC7]/25"
        />

        <div className="relative flex h-full flex-col p-5">
          {/* Header */}

          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#6E617B]">
              Color Palette
            </span>

            <span className="text-[10px] font-semibold text-[#725D80]">
              TINTMINT
            </span>
          </div>

          {/* Palette */}

          <div className="mt-auto">
            <div className="flex h-24 overflow-hidden rounded-xl shadow-[0_12px_30px_rgba(72,55,94,0.13)]">
              <motion.div
                whileHover={{ flexGrow: 1.5 }}
                className="flex-1 bg-[#18121F]"
              />

              <motion.div
                whileHover={{ flexGrow: 1.5 }}
                className="flex-1 bg-[#8B5E9F]"
              />

              <motion.div
                whileHover={{ flexGrow: 1.5 }}
                className="flex-1 bg-[#C9B6E4]"
              />

              <motion.div
                whileHover={{ flexGrow: 1.5 }}
                className="flex-1 bg-[#83CEC7]"
              />

              <motion.div
                whileHover={{ flexGrow: 1.5 }}
                className="flex-1 bg-[#F7F3FF]"
              />
            </div>

            <div className="mt-4 flex items-end justify-between gap-3">
              <div>
                <p className="text-[9px] uppercase tracking-[0.16em] text-[#85788E]">
                  Relationship
                </p>

                <p className="mt-1 text-xs font-semibold text-[#493C55]">
                  Complementary
                </p>
              </div>

              <span className="rounded-full border border-[#8B5E9F]/20 bg-white/55 px-3 py-1.5 text-[9px] font-semibold text-[#6E587A]">
                Generate ✦
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* =======================================================
     REPARO
  ======================================================= */

  if (visual === "reparo") {
    return (
      <div className="relative h-52 overflow-hidden rounded-2xl bg-[#E3EBF0] sm:h-56">
        {/* Background */}

        <div
          aria-hidden="true"
          className="absolute -bottom-16 -right-12 h-48 w-48 rounded-full bg-[#355070]/10"
        />

        <div className="relative flex h-full flex-col p-5">
          {/* Header */}

          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#536777]">
              Accessibility
            </span>

            <span className="text-[10px] font-semibold text-[#355070]">
              REPARO
            </span>
          </div>

          {/* Contrast visual */}

          <div className="mt-auto overflow-hidden rounded-xl border border-[#355070]/10 bg-white shadow-[0_12px_30px_rgba(53,80,112,0.1)]">
            <div className="grid grid-cols-2">
              <div className="flex h-20 items-center justify-center bg-[#17212B]">
                <span className="text-3xl font-bold text-white">
                  Aa
                </span>
              </div>

              <div className="flex h-20 flex-col items-center justify-center bg-[#F5F2EA]">
                <span className="text-lg font-bold text-[#355070]">
                  12.8:1
                </span>

                <span className="mt-1 text-[8px] uppercase tracking-[0.15em] text-[#75808C]">
                  Contrast
                </span>
              </div>
            </div>

            {/* Results */}

            <div className="grid grid-cols-3 border-t border-[#E3E7EB]">
              {["AA", "AAA", "Large"].map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-center gap-1 border-r border-[#E3E7EB] py-2 text-[9px] font-semibold text-[#355070] last:border-r-0"
                >
                  <span className="text-emerald-600">
                    ✓
                  </span>

                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-3 flex items-center justify-between">
            <span className="text-[9px] text-[#667886]">
              WCAG accessibility
            </span>

            <span className="rounded-full bg-emerald-600/10 px-2 py-1 text-[8px] font-bold text-emerald-700">
              PASS
            </span>
          </div>
        </div>
      </div>
    );
  }

  /* =======================================================
     FALLBACK
  ======================================================= */

  return (
    <div className="flex h-52 items-center justify-center rounded-2xl bg-[#E6EAF0] sm:h-56">
      <span className="text-4xl text-[#355070]">
        ✦
      </span>
    </div>
  );
}

/* =========================================================
   PROJECT TYPE
========================================================= */

type Project = (typeof projects)[number];

/* =========================================================
   PROJECT FOCUS

   These are fallbacks so Projects.tsx works even if the
   portfolio data does not have a "focus" property yet.
========================================================= */

const projectFocus: Record<string, string[]> = {
  ApplyFlow: [
    "Dashboard UX",
    "Responsive UI",
    "Data Visualization",
  ],

  TintMint: [
    "UI/UX",
    "Color Systems",
    "Interaction Design",
  ],

  Reparo: [
    "Accessibility",
    "WCAG",
    "Usability",
  ],
};

/* =========================================================
   FEATURED PROJECT CARD
========================================================= */

function FeaturedProject({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const spotlight = useSpotlight();
  const reduceMotion = useReducedMotion();

  const focus = projectFocus[project.title] ?? [];

  return (
    <motion.article
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              y: 18,
            }
      }
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.1,
      }}
      transition={{
        duration: reduceMotion ? 0 : 0.5,
        delay: reduceMotion ? 0 : index * 0.07,
      }}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -5,
            }
      }
      onMouseMove={(event) => {
        if (
          window.matchMedia("(pointer: fine)").matches
        ) {
          spotlight.onMouseMove(event);
        }
      }}
      className="
        spotlight-card
        group
        flex
        min-w-0
        flex-col
        overflow-hidden
        rounded-2xl
        border
        border-border
        bg-white
        shadow-[0_10px_30px_rgba(17,24,39,0.04)]
        transition-[border-color,box-shadow,transform]

        sm:rounded-3xl

        lg:hover:border-[#355070]/25

        dark:border-[#2A3445]
        dark:bg-[#161E2E]
        dark:shadow-[0_10px_30px_rgba(0,0,0,0.25)]

        lg:dark:hover:border-gold/30
      "
    >
      <div className="relative z-10 flex h-full flex-col">
        {/* =====================================
            VISUAL
        ====================================== */}

        <div className="p-3 pb-0 sm:p-4 sm:pb-0">
          <ProjectVisual visual={project.visual} />
        </div>

        {/* =====================================
            CONTENT
        ====================================== */}

        <div className="flex flex-1 flex-col p-5 sm:p-6">
          {/* Number + project type */}

          <div className="flex items-center justify-between gap-4">
            <p className="text-xs font-medium text-[#355070] dark:text-[#8FA8C7]">
              {project.subtitle}
            </p>

            <span className="font-mono text-[9px] font-semibold tracking-[0.16em] text-slate-400 dark:text-[#64748B]">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          {/* Title */}

          <h3 className="mt-2 text-2xl font-bold tracking-tight text-ink dark:text-[#F3F4F6]">
            {project.title}
          </h3>

          {/* Description */}

          <p className="mt-3 line-clamp-4 text-sm leading-6 text-slate-600 dark:text-[#9CA3AF]">
            {project.description}
          </p>

          {/* =====================================
              FOCUS
          ====================================== */}

          {focus.length > 0 && (
            <div className="mt-5">
              <p
                className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-slate-400

                  dark:text-[#718096]
                "
              >
                Focus
              </p>

              <p
                className="
                  mt-2
                  text-xs
                  font-medium
                  leading-5
                  text-[#355070]

                  sm:text-sm

                  dark:text-[#8FA8C7]
                "
              >
                {focus.join(" · ")}
              </p>
            </div>
          )}

          {/* =====================================
              BUILT WITH
          ====================================== */}

          <div className="mt-5">
            <p
              className="
                text-[9px]
                font-bold
                uppercase
                tracking-[0.18em]
                text-slate-400

                dark:text-[#718096]
              "
            >
              Built With
            </p>

            <div className="mt-2.5 flex flex-wrap gap-1.5">
              {project.technologies
                .slice(0, 4)
                .map((tech) => (
                  <span
                    key={tech}
                    className="
                      rounded-full
                      border
                      border-border
                      bg-bg
                      px-2.5
                      py-1.5
                      text-[10px]
                      font-medium
                      text-slate-700

                      sm:text-xs

                      dark:border-[#2A3445]
                      dark:bg-[#1E2738]
                      dark:text-[#D1D5DB]
                    "
                  >
                    {tech}
                  </span>
                ))}
            </div>
          </div>

          {/* Spacer keeps buttons aligned */}

          <div className="flex-1" />

          {/* =====================================
              ONE BUTTON
          ====================================== */}

          {project.demo && (
            <div className="mt-6">
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.title} project`}
                className="
                  inline-flex
                  min-h-10
                  items-center
                  justify-center
                  rounded-full
                  bg-[#355070]
                  px-5
                  py-2.5
                  text-xs
                  font-semibold
                  text-white
                  transition

                  hover:bg-[#2B4663]

                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[#355070]
                  focus-visible:ring-offset-2

                  sm:text-sm

                  dark:bg-gold
                  dark:text-ink
                  dark:hover:bg-[#E3BE67]

                  dark:focus-visible:ring-gold
                  dark:focus-visible:ring-offset-[#161E2E]
                "
              >
                Open Project ↗
              </a>
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
}

/* =========================================================
   SECONDARY PROJECT
========================================================= */

function SecondaryProject({
  project,
}: {
  project: Project;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              y: 18,
            }
      }
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: reduceMotion ? 0 : 0.5,
      }}
      className="
        mt-6
        rounded-2xl
        border
        border-border
        bg-white
        p-5

        sm:mt-8
        sm:rounded-3xl
        sm:p-6

        lg:p-8

        dark:border-[#2A3445]
        dark:bg-[#161E2E]
      "
    >
      <div
        className="
          flex
          flex-col
          gap-5

          md:flex-row
          md:items-center
          md:justify-between
        "
      >
        {/* Information */}

        <div className="max-w-3xl">
          <p className="text-xs font-medium text-[#355070] dark:text-[#8FA8C7]">
            {project.subtitle}
          </p>

          <h3 className="mt-2 text-xl font-bold tracking-tight text-ink sm:text-2xl dark:text-[#F3F4F6]">
            {project.title}
          </h3>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 dark:text-[#9CA3AF]">
            {project.description}
          </p>
        </div>

        {/* Technologies */}

        <div className="md:max-w-md">
          <p
            className="
              mb-2.5
              text-[9px]
              font-bold
              uppercase
              tracking-[0.18em]
              text-slate-400

              md:text-right

              dark:text-[#718096]
            "
          >
            Built With
          </p>

          <div className="flex flex-wrap gap-2 md:justify-end">
            {project.technologies
              .slice(0, 5)
              .map((tech) => (
                <span
                  key={tech}
                  className="
                    rounded-full
                    border
                    border-border
                    bg-bg
                    px-3
                    py-1.5
                    text-xs
                    text-slate-700

                    dark:border-[#2A3445]
                    dark:bg-[#1E2738]
                    dark:text-[#D1D5DB]
                  "
                >
                  {tech}
                </span>
              ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

/* =========================================================
   PROJECTS
========================================================= */

export default function Projects() {
  /*
   * First three projects:
   * ApplyFlow
   * TintMint
   * Reparo
   *
   * Remaining projects:
   * Health Database
   */

  const featuredProjects = projects.slice(0, 3);
  const secondaryProjects = projects.slice(3);

  return (
    <section
      id="projects"
      className="
        py-16
        sm:py-20
        md:py-24
        lg:py-32
      "
    >
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
            HEADER
        ========================================= */}

        <Reveal
          className="
            mb-10
            sm:mb-12
            md:mb-16
            lg:mb-20
          "
        >
          <p className="section-label mb-4 sm:mb-6">
            PROJECTS
          </p>

          <h2
            className="
              display-heading
              max-w-5xl
              text-4xl
              leading-tight
              text-ink

              sm:text-5xl
              md:text-6xl
              lg:text-7xl

              dark:text-[#F3F4F6]
            "
          >
            Designed with purpose.
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            Built with code.
          </h2>
        </Reveal>

        {/* ========================================
            THREE FEATURED PROJECTS
        ========================================= */}

        <div
          className="
            grid
            gap-5

            md:grid-cols-2
            md:gap-6

            lg:grid-cols-3
          "
        >
          {featuredProjects.map(
            (project, index) => (
              <FeaturedProject
                key={project.title}
                project={project}
                index={index}
              />
            ),
          )}
        </div>

        {/* ========================================
            SECONDARY PROJECTS
        ========================================= */}

        {secondaryProjects.map((project) => (
          <SecondaryProject
            key={project.title}
            project={project}
          />
        ))}
      </div>
    </section>
  );
}