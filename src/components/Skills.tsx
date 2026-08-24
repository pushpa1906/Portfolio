import { motion, useReducedMotion } from "framer-motion";
import { useSpotlight } from "../hooks/useSpotlight";

import {
  Accessibility,
  Brain,
  Braces,
  Bug,
  Code2,
  Contrast,
  Database,
  FileJson,
  Globe,
  Keyboard,
  LayoutTemplate,
  MonitorSmartphone,
  Network,
  Palette,
  Search,
  TestTube2,
  Workflow,
  Wrench,
} from "lucide-react";

import {
  SiCypress,
  SiDjango,
  SiFigma,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiNumpy,
  SiPandas,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiReact,
  SiScikitlearn,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

/* =========================================================
   SKILLS
========================================================= */

const skills = [
  {
    title: "Frontend Development",
    icon: Code2,
    description: "Building modern, responsive web interfaces.",
    items: [
      "React",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "React Hooks",
      "React Flow",
    ],
  },

  {
    title: "Backend & APIs",
    icon: Database,
    description: "Building and integrating application services.",
    items: [
      "Django",
      "Django REST Framework",
      "REST APIs",
      "JSON",
      "API Integration",
      "PostgreSQL",
      "MySQL",
      "SQL",
    ],
  },

  {
    title: "UI/UX & Accessibility",
    icon: Palette,
    description:
      "Creating intuitive, accessible, and user-focused experiences.",
    items: [
      "Figma",
      "Responsive Design",
      "Information Architecture",
      "WCAG 2.1",
      "ARIA",
      "Semantic HTML",
      "Keyboard Accessibility",
      "Color Contrast",
    ],
  },

  {
    title: "Web & CMS",
    icon: Globe,
    description: "Developing and maintaining digital web platforms.",
    items: [
      "Omni CMS",
      "Website Management",
      "Web Accessibility",
      "Cross-Browser Compatibility",
      "Content Management",
      "SEO Basics",
    ],
  },

  {
    title: "Data & Analytics",
    icon: Brain,
    description: "Working with data, analysis, and visualization.",
    items: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Scikit-learn",
      "Data Analysis",
      "Machine Learning",
    ],
  },

  {
    title: "Testing & Tools",
    icon: Wrench,
    description:
      "Supporting development, testing, and collaboration.",
    items: [
      "Playwright",
      "Cypress",
      "axe-core",
      "Git",
      "GitHub",
      "Postman",
      "VS Code",
      "Agile",
      "Debugging",
      "E2E Testing",
    ],
  },
];

/* =========================================================
   TECHNOLOGY / SKILL ICONS
========================================================= */

const techIcons: Record<
  string,
  {
    icon: React.ElementType;
    color?: string;
  }
> = {
  /* =======================================================
     FRONTEND
  ======================================================= */

  React: {
    icon: SiReact,
    color: "#61DAFB",
  },

  TypeScript: {
    icon: SiTypescript,
    color: "#3178C6",
  },

  JavaScript: {
    icon: SiJavascript,
    color: "#F7DF1E",
  },

  HTML5: {
    icon: SiHtml5,
    color: "#E34F26",
  },

  CSS3: {
    icon: Code2,
  },

  "Tailwind CSS": {
    icon: SiTailwindcss,
    color: "#06B6D4",
  },

  "React Hooks": {
    icon: SiReact,
    color: "#61DAFB",
  },

  "React Flow": {
    icon: Network,
  },

  /* =======================================================
     BACKEND & APIs
  ======================================================= */

  Django: {
    icon: SiDjango,
    color: "#092E20",
  },

  "Django REST Framework": {
    icon: SiDjango,
    color: "#A30000",
  },

  "REST APIs": {
    icon: Network,
  },

  JSON: {
    icon: FileJson,
  },

  "API Integration": {
    icon: Workflow,
  },

  PostgreSQL: {
    icon: SiPostgresql,
    color: "#4169E1",
  },

  MySQL: {
    icon: SiMysql,
    color: "#4479A1",
  },

  SQL: {
    icon: Database,
  },

  /* =======================================================
     UI/UX & ACCESSIBILITY
  ======================================================= */

  Figma: {
    icon: SiFigma,
    color: "#A259FF",
  },

  "Responsive Design": {
    icon: MonitorSmartphone,
  },

  "Information Architecture": {
    icon: LayoutTemplate,
  },

  "WCAG 2.1": {
    icon: Accessibility,
  },

  ARIA: {
    icon: Accessibility,
  },

  "Semantic HTML": {
    icon: Braces,
  },

  "Keyboard Accessibility": {
    icon: Keyboard,
  },

  "Color Contrast": {
    icon: Contrast,
  },

  /* =======================================================
     WEB & CMS
  ======================================================= */

  "Omni CMS": {
    icon: Globe,
  },

  "Website Management": {
    icon: Globe,
  },

  "Web Accessibility": {
    icon: Accessibility,
  },

  "Cross-Browser Compatibility": {
    icon: MonitorSmartphone,
  },

  "Content Management": {
    icon: LayoutTemplate,
  },

  "SEO Basics": {
    icon: Search,
  },

  /* =======================================================
     DATA & ANALYTICS
  ======================================================= */

  Python: {
    icon: SiPython,
    color: "#3776AB",
  },

  Pandas: {
    icon: SiPandas,
    color: "#150458",
  },

  NumPy: {
    icon: SiNumpy,
    color: "#4D77CF",
  },

  Matplotlib: {
    icon: Brain,
  },

  Seaborn: {
    icon: Brain,
  },

  "Scikit-learn": {
    icon: SiScikitlearn,
    color: "#F7931E",
  },

  "Data Analysis": {
    icon: Brain,
  },

  "Machine Learning": {
    icon: Brain,
  },

  /* =======================================================
     TESTING & TOOLS
  ======================================================= */

  Playwright: {
    icon: TestTube2,
    color: "#2EAD33",
  },

  Cypress: {
    icon: SiCypress,
  },

  "axe-core": {
    icon: Accessibility,
  },

  Git: {
    icon: SiGit,
    color: "#F05032",
  },

  GitHub: {
    icon: SiGithub,
  },

  Postman: {
    icon: SiPostman,
    color: "#FF6C37",
  },

  "VS Code": {
    icon: Code2,
  },

  Agile: {
    icon: Workflow,
  },

  Debugging: {
    icon: Bug,
  },

  "E2E Testing": {
    icon: TestTube2,
  },
};

/* =========================================================
   SKILLS COMPONENT
========================================================= */

export default function Skills() {
  const spotlight = useSpotlight();
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="skills"
      className="
        relative
        overflow-hidden
        py-16

        sm:py-20

        md:py-24

        lg:py-32
      "
    >
      {/* ========================================
          DECORATIVE BACKGROUND

          Desktop only.
      ========================================= */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          hidden
          opacity-[0.03]

          lg:block

          dark:opacity-[0.06]
        "
      >
        <svg
          className="h-full w-full"
          viewBox="0 0 1200 800"
          preserveAspectRatio="xMidYMid slice"
        >
          <circle
            cx="200"
            cy="200"
            r="100"
            fill="none"
            stroke="#355070"
            strokeWidth="1"
          />

          <circle
            cx="900"
            cy="500"
            r="150"
            fill="none"
            stroke="#355070"
            strokeWidth="1"
          />

          <line
            x1="300"
            y1="200"
            x2="700"
            y2="450"
            stroke="#355070"
            strokeWidth="1"
          />

          <line
            x1="500"
            y1="100"
            x2="900"
            y2="500"
            stroke="#355070"
            strokeWidth="1"
          />
        </svg>
      </div>

      {/* ========================================
          CONTAINER
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
                  y: 16,
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
            mb-10

            sm:mb-12

            md:mb-16

            lg:mb-20
          "
        >
          <p
            className="
              section-label
              mb-4

              sm:mb-6
            "
          >
            SKILLS
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
            Technologies behind the journey
          </h2>

          <p
            className="
              mt-5
              max-w-3xl
              text-base
              leading-7
              text-slate-600

              sm:mt-6
              sm:text-lg
              sm:leading-8

              lg:mt-8
              lg:text-xl
              lg:leading-relaxed

              dark:text-[#9CA3AF]
            "
          >
            A combination of software development, web technologies,
            UI/UX, accessibility, data-driven solutions, and modern
            development practices.
          </p>
        </motion.div>

        {/* ========================================
            SKILL CARDS
        ========================================= */}

        <div
          className="
            grid
            gap-5

            sm:gap-6

            md:grid-cols-2

            xl:grid-cols-3
            xl:gap-8
          "
        >
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.article
                key={skill.title}
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
                  duration: reduceMotion ? 0 : 0.45,
                  delay: reduceMotion
                    ? 0
                    : Math.min(index * 0.06, 0.18),
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
                  group
                  spotlight-card
                  min-w-0
                  rounded-2xl
                  border
                  border-border
                  bg-white
                  p-5
                  shadow-[0_8px_25px_rgba(15,23,42,0.04)]
                  transition-[border-color,box-shadow,transform]

                  sm:rounded-3xl
                  sm:p-6

                  md:p-7

                  lg:rounded-4xl
                  lg:p-8
                  lg:hover:border-[#355070]/20
                  lg:hover:shadow-[0_20px_60px_rgba(53,80,112,0.10)]

                  dark:border-[#2A3445]
                  dark:bg-[#161E2E]
                  dark:shadow-[0_8px_25px_rgba(0,0,0,0.25)]

                  lg:dark:hover:border-gold/25
                  lg:dark:hover:shadow-[0_20px_60px_rgba(0,0,0,0.45)]
                "
              >
                <div className="relative z-10 min-w-0">
                  {/* ====================================
                      CATEGORY ICON
                  ===================================== */}

                  <div
                    className="
                      mb-5
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-xl
                      bg-[#355070]/10

                      sm:h-13
                      sm:w-13
                      sm:rounded-2xl

                      lg:mb-6
                      lg:h-14
                      lg:w-14

                      dark:bg-[#6D8CA6]/15
                    "
                  >
                    <Icon
                      size={24}
                      aria-hidden="true"
                      className="
                        text-[#355070]

                        lg:h-6.5
                        lg:w-6.5

                        dark:text-[#8FA8C7]
                      "
                    />
                  </div>

                  {/* ====================================
                      TITLE
                  ===================================== */}

                  <h3
                    className="
                      text-xl
                      font-semibold
                      leading-tight
                      text-ink

                      sm:text-2xl

                      dark:text-[#F3F4F6]
                    "
                  >
                    {skill.title}
                  </h3>

                  {/* ====================================
                      DESCRIPTION
                  ===================================== */}

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-slate-500

                      sm:mt-3
                      sm:leading-relaxed

                      dark:text-[#9CA3AF]
                    "
                  >
                    {skill.description}
                  </p>

                  {/* ====================================
                      SKILL CHIPS
                  ===================================== */}

                  <div
                    className="
                      mt-6
                      flex
                      flex-wrap
                      gap-2

                      sm:mt-7
                      sm:gap-2.5

                      lg:mt-8
                      lg:gap-3
                    "
                  >
                    {skill.items.map((item) => {
                      const tech = techIcons[item];

                      return (
                        <span
                          key={item}
                          className="
                            inline-flex
                            max-w-full
                            items-center
                            gap-1.5
                            rounded-full
                            border
                            border-border
                            bg-white
                            px-3
                            py-1.5
                            text-xs
                            leading-relaxed
                            text-slate-700
                            transition-colors

                            sm:gap-2
                            sm:px-4
                            sm:py-2
                            sm:text-sm

                            lg:hover:border-[#355070]/20
                            lg:hover:bg-[#355070]/5

                            dark:border-[#2A3445]
                            dark:bg-[#1E2738]
                            dark:text-[#D1D5DB]

                            lg:dark:hover:border-gold/25
                            lg:dark:hover:bg-[#6D8CA6]/10
                          "
                        >
                          {/* =================================
                              SKILL ICON
                          ================================== */}

                          {tech && (
                            <tech.icon
                              size={14}
                              color={tech.color}
                              aria-hidden="true"
                              className={
                                tech.color
                                  ? "shrink-0"
                                  : `
                                      shrink-0
                                      text-[#355070]

                                      dark:text-[#8FA8C7]
                                    `
                              }
                            />
                          )}

                          <span className="min-w-0">
                            {item}
                          </span>
                        </span>
                      );
                    })}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}