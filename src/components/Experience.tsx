import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";

const experiences = [
  {
    company: "Ceburu",
    fullCompany: "Ceburu Systems, Inc.",
    role: "Software Development Engineer",
    years: "2025–2026",
    duration: "August 2025 – May 2026",

    technologies: [
      "React",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "React Flow",
      "Django REST Framework",
      "PostgreSQL",
      "REST APIs",
      "Git",
    ],

    description:
      "At Ceburu Systems, I worked on an enterprise network management platform, contributing across frontend development, backend integration, data visualization, debugging, testing, and performance improvements. My work focused on building responsive and interactive interfaces for complex network data while improving application usability, reliability, and maintainability.",

    details: [
      "Developed, tested, debugged, and maintained full-stack web application features using React, TypeScript, JavaScript, HTML5, Tailwind CSS, Django REST Framework, PostgreSQL, SQL, and REST APIs.",

      "Built reusable React and TypeScript components using React Hooks and React Flow for responsive network topology and visualization interfaces.",

      "Developed interactive network-management experiences with filtering, search, expandable views, device information, and visualization features for working with complex network data.",

      "Integrated frontend applications with backend REST APIs and JSON-based data flows, implementing asynchronous data handling, client-side validation, and reliable user interactions.",

      "Implemented search, filtering, bulk operations, and import/export workflows, including functionality for exporting application and visualization data.",

      "Contributed to interactive enterprise features, including browser-based terminal and SSH-related functionality used within network-management workflows.",

      "Investigated and resolved application issues through testing, debugging, and production troubleshooting while improving application reliability and software quality.",

      "Improved frontend performance and maintainability through component reuse, code refinement, optimization, and iterative feature enhancements.",

      "Collaborated in an Agile engineering environment using Git and GitHub, participating in feature development, code reviews, technical discussions, troubleshooting, and documentation.",
    ],
  },

  {
    company: "UT Tyler",
    fullCompany: "University of Texas at Tyler",
    role: "Web Developer",
    years: "2024–2025",
    duration: "January 2024 – May 2025",

    technologies: [
      "Omni CMS",
      "HTML5",
      "CSS3",
      "JavaScript",
      "WCAG 2.1",
      "Accessibility",
      "Responsive Design",
      "Adobe Photoshop",
    ],

    description:
      "At the University of Texas at Tyler, I worked on departmental websites and digital platforms, combining web development, content management, accessibility, user experience improvements, and digital communications. I maintained and enhanced university web content while helping make information easier to navigate, more accessible, and consistent across different university web properties.",

    details: [
      "Developed, maintained, and enhanced departmental websites using Modern Campus CMS (Omni CMS), HTML5, CSS3, and JavaScript.",

      "Built and maintained responsive, accessible, and cross-browser compatible web experiences for students, faculty, staff, and other university audiences.",

      "Created, edited, organized, and published website content while maintaining accuracy, readability, branding consistency, and university publishing standards.",

      "Improved website navigation, information architecture, page layouts, and content organization to make university information easier for users to find and understand.",

      "Applied WCAG 2.1 accessibility practices, semantic HTML, accessible content structures, navigation improvements, and multimedia accessibility across university web content.",

      "Identified and troubleshot website usability and accessibility issues and implemented improvements to create more inclusive digital experiences.",

      "Created digital signage, presentations, graphics, and promotional materials using Adobe Photoshop, Canva, and PowerPoint for university programs, events, and communications.",

      "Collaborated with faculty, IT teams, staff, and campus stakeholders on website updates, digital communications, technical issues, and improvements to university web experiences.",

      "Supported departmental technology needs and assisted with troubleshooting digital platforms, audiovisual systems, connectivity, and other technology-related workflows.",

      "Managed more than 1,500 student records using ImageNow (Perceptive Content), supporting secure document organization, retrieval, workflow efficiency, and FERPA-compliant information handling.",
    ],
  },

  {
  company: "CEMS",
  fullCompany:
    "Centre of Excellence in Maritime and Shipbuilding (CEMS)",
  role: "Machine Learning Intern",
  years: "2022",
  duration: "January 2022 – August 2022",

  technologies: [
    "Python",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Seaborn",
    "Machine Learning",
  ],

  description:
    "During my internship at CEMS, I worked with Python, data analysis, visualization, and machine learning. I gained hands-on experience preparing datasets, exploring data, building models, and presenting findings through visualizations.",

  details: [
    "Cleaned and prepared datasets using Python, Pandas, and NumPy for analysis and machine learning.",

    "Performed exploratory data analysis to identify patterns, trends, and relationships in structured datasets.",

    "Created charts and visualizations using Matplotlib and Seaborn to communicate analytical findings.",

    "Applied machine learning techniques including classification, clustering, and predictive modeling.",

    "Evaluated model results and gained practical experience with end-to-end data analysis and machine learning workflows.",
  ],
},
];

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  const activeJob = experiences[activeIndex];

  return (
    <section
      id="experience"
      className="
        overflow-hidden
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
          lg:px-7
        "
      >
        {/* ========================================
            SHARED SECTION HEADER
        ========================================= */}

        <p className="section-label mb-4 sm:mb-6">
          EXPERIENCE
        </p>

        <h2
          className="
            display-heading
            mb-10
            text-4xl
            text-ink

            sm:text-5xl

            md:mb-14
            md:text-6xl

            lg:mb-20
            lg:text-7xl
          "
        >
          Career Chapters
        </h2>

        {/* ========================================
            MOBILE + TABLET EXPERIENCE

            Simple vertical timeline.
            No interaction required.
        ========================================= */}

        <div className="lg:hidden">
          <div className="relative">
            {/* Vertical timeline line */}
            <div
              aria-hidden="true"
              className="
                absolute
                bottom-0
                left-1.75
                top-2
                w-px
                bg-[#D6DCE5]

                dark:bg-[#2A3445]
              "
            />

            <div className="space-y-12 sm:space-y-14">
              {experiences.map((job, index) => (
                <article
                  key={job.company}
                  className="
                    relative
                    grid
                    grid-cols-[15px_minmax(0,1fr)]
                    gap-5

                    sm:gap-6
                  "
                >
                  {/* Timeline dot */}
                  <div
                    aria-hidden="true"
                    className="
                      relative
                      z-10
                      mt-1.5
                      h-3.75
                      w-3.75
                      rounded-full
                      border-[3px]
                      border-[#FAFAF8]
                      bg-[#355070]
                      shadow-[0_0_0_1px_rgba(53,80,112,0.18)]

                      dark:border-[#0B1220]
                      dark:bg-gold
                      dark:shadow-[0_0_0_1px_rgba(201,168,106,0.25)]
                    "
                  />

                  {/* Experience content */}
                  <div className="min-w-0">
                    {/* Date */}
                    <p
                      className="
                        text-xs
                        font-semibold
                        uppercase
                        tracking-[0.16em]
                        text-[#355070]

                        sm:text-sm
                        sm:tracking-[0.2em]

                        dark:text-[#8FA8C7]
                      "
                    >
                      {job.duration}
                    </p>

                    {/* Role */}
                    <h3
                      className="
                        mt-3
                        text-2xl
                        font-bold
                        leading-tight
                        text-ink

                        sm:text-3xl

                        dark:text-[#F3F4F6]
                      "
                    >
                      {job.role}
                    </h3>

                    {/* Company */}
                    <p
                      className="
                        mt-1.5
                        text-base
                        font-medium
                        leading-6
                        text-[#355070]

                        sm:text-lg

                        dark:text-[#8FA8C7]
                      "
                    >
                      {job.fullCompany}
                    </p>

                    {/* Technologies */}
                    <div
                      className="
                        mt-5
                        flex
                        flex-wrap
                        gap-2
                      "
                    >
                      {job.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="
                            rounded-full
                            bg-[#355070]/5
                            px-3
                            py-1.5
                            text-xs
                            leading-5
                            text-[#355070]

                            sm:px-3.5
                            sm:text-sm

                            dark:bg-[#6D8CA6]/15
                            dark:text-[#8FA8C7]
                          "
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Description */}
                    <p
                      className="
                        mt-5
                        text-sm
                        leading-7
                        text-slate-600

                        sm:text-base
                        sm:leading-7

                        dark:text-[#9CA3AF]
                      "
                    >
                      {job.description}
                    </p>

                    {/* Contributions */}
                    <div className="mt-6">
                      <p
                        className="
                          mb-4
                          text-xs
                          font-semibold
                          uppercase
                          tracking-[0.16em]
                          text-[#355070]

                          dark:text-[#8FA8C7]
                        "
                      >
                        Key Contributions
                      </p>

                      <div className="space-y-3">
                        {job.details.map((item) => (
                          <div
                            key={item}
                            className="
                              flex
                              items-start
                              gap-3
                            "
                          >
                            <span
                              aria-hidden="true"
                              className="
                                mt-[0.55rem]
                                h-1.5
                                w-1.5
                                shrink-0
                                rounded-full
                                bg-[#355070]

                                dark:bg-gold
                              "
                            />

                            <p
                              className="
                                min-w-0
                                text-sm
                                leading-6
                                text-slate-600

                                sm:text-base
                                sm:leading-7

                                dark:text-[#9CA3AF]
                              "
                            >
                              {item}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Divider between experiences */}
                    {index !== experiences.length - 1 && (
                      <div
                        aria-hidden="true"
                        className="
                          mt-10
                          h-px
                          w-full
                          bg-border

                          sm:mt-12

                          dark:bg-[#2A3445]
                        "
                      />
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* ========================================
            DESKTOP EXPERIENCE

            Keep the interactive design.
        ========================================= */}

        <div className="hidden lg:block">
          {/* ======================================
              EXPERIENCE SELECTOR
          ======================================= */}

          <div className="relative mb-20">
            {/* Timeline line */}
            <div
              aria-hidden="true"
              className="
                absolute
                left-0
                right-0
                top-12
                h-px
                bg-[#D6DCE5]

                dark:bg-[#2A3445]
              "
            />

            <div className="grid grid-cols-3 gap-12">
              {experiences.map((job, index) => {
                const isActive = activeIndex === index;

                return (
                  <motion.button
                    key={job.company}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    whileHover={
                      reduceMotion
                        ? undefined
                        : {
                            y: -4,
                          }
                    }
                    whileTap={
                      reduceMotion
                        ? undefined
                        : {
                            scale: 0.99,
                          }
                    }
                    aria-pressed={isActive}
                    className="
                      relative
                      w-full
                      text-center
                    "
                  >
                    {/* Timeline dot */}
                    <div
                      aria-hidden="true"
                      className={`
                        relative
                        z-10
                        mx-auto
                        h-6
                        w-6
                        rounded-full
                        border-4
                        border-white
                        shadow-lg
                        transition-all
                        duration-300

                        dark:border-[#0B1220]

                        ${
                          isActive
                            ? "scale-125 bg-gold"
                            : "bg-[#355070] dark:bg-[#6D8CA6]"
                        }
                      `}
                    />

                    {/* Selector card */}
                    <div
                      className={`
                        mt-10
                        rounded-4xl
                        border
                        p-8
                        transition-all
                        duration-300

                        ${
                          isActive
                            ? "border-[#355070]/25 bg-white shadow-[0_12px_35px_rgba(53,80,112,0.10)] dark:border-gold/30 dark:bg-[#161E2E] dark:shadow-[0_15px_40px_rgba(0,0,0,0.3)]"
                            : "border-border bg-white shadow-[0_6px_20px_rgba(17,24,39,0.03)] dark:bg-[#161E2E] dark:shadow-[0_8px_25px_rgba(0,0,0,0.2)]"
                        }
                      `}
                    >
                      <p
                        className="
                          text-sm
                          font-medium
                          text-[#355070]

                          dark:text-[#8FA8C7]
                        "
                      >
                        {job.years}
                      </p>

                      <h3
                        className="
                          mt-4
                          text-2xl
                          font-bold
                          text-ink

                          dark:text-[#F3F4F6]
                        "
                      >
                        {job.company}
                      </h3>

                      <p
                        className="
                          mt-3
                          text-base
                          text-slate-600

                          dark:text-[#9CA3AF]
                        "
                      >
                        {job.role}
                      </p>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* ======================================
              ACTIVE EXPERIENCE DETAILS
          ======================================= */}

          <div
            className="
              min-h-125
              rounded-[40px]
              border
              border-border
              bg-white
              p-14
              shadow-[0_25px_70px_rgba(17,24,39,0.05)]

              dark:bg-[#161E2E]
              dark:shadow-[0_25px_70px_rgba(0,0,0,0.35)]
            "
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeJob.company}
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
                exit={
                  reduceMotion
                    ? undefined
                    : {
                        opacity: 0,
                        y: -12,
                      }
                }
                transition={{
                  duration: reduceMotion ? 0 : 0.25,
                }}
              >
                <div
                  className="
                    grid
                    grid-cols-[1fr_1.5fr]
                    gap-12
                  "
                >
                  {/* ==================================
                      JOB INFORMATION
                  =================================== */}

                  <div className="min-w-0">
                    <p
                      className="
                        text-sm
                        font-medium
                        uppercase
                        leading-relaxed
                        tracking-[0.3em]
                        text-[#355070]

                        dark:text-[#8FA8C7]
                      "
                    >
                      {activeJob.duration}
                    </p>

                    <h3
                      className="
                        mt-4
                        text-4xl
                        font-bold
                        leading-tight
                        text-ink

                        dark:text-[#F3F4F6]
                      "
                    >
                      {activeJob.role}
                    </h3>

                    <p
                      className="
                        mt-3
                        text-xl
                        leading-relaxed
                        text-slate-600

                        dark:text-[#9CA3AF]
                      "
                    >
                      {activeJob.fullCompany}
                    </p>

                    <div
                      aria-hidden="true"
                      className="
                        mt-6
                        h-px
                        w-24
                        bg-[#355070]

                        dark:bg-gold
                      "
                    />

                    {/* Technologies */}

                    <div
                      className="
                        mt-8
                        flex
                        flex-wrap
                        gap-3
                      "
                    >
                      {activeJob.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="
                            rounded-full
                            bg-[#355070]/5
                            px-4
                            py-2
                            text-sm
                            text-[#355070]

                            dark:bg-[#6D8CA6]/15
                            dark:text-[#8FA8C7]
                          "
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* ==================================
                      DESCRIPTION
                  =================================== */}

                  <div className="min-w-0">
                    <p
                      className="
                        text-lg
                        leading-relaxed
                        text-slate-600

                        dark:text-[#9CA3AF]
                      "
                    >
                      {activeJob.description}
                    </p>

                    {/* Contributions */}

                    <div className="mt-10">
                      <h4
                        className="
                          mb-5
                          text-sm
                          font-medium
                          uppercase
                          tracking-[0.3em]
                          text-[#355070]

                          dark:text-[#8FA8C7]
                        "
                      >
                        Key Contributions
                      </h4>

                      <div className="space-y-4">
                        {activeJob.details.map((item) => (
                          <div
                            key={item}
                            className="
                              flex
                              gap-4
                            "
                          >
                            <div
                              aria-hidden="true"
                              className="
                                mt-2
                                h-2
                                w-2
                                shrink-0
                                rounded-full
                                bg-[#355070]

                                dark:bg-gold
                              "
                            />

                            <p
                              className="
                                text-base
                                leading-relaxed
                                text-slate-600

                                dark:text-[#9CA3AF]
                              "
                            >
                              {item}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}