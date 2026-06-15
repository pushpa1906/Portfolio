import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const experiences = [
  {
    company: "Ceburu",
    fullCompany: "Ceburu Systems, Inc.",
    role: "Software Developer",
    years: "2025–2026",
    duration: "August 2025 – May 2026",

    technologies: [
      "React",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "REST APIs",
      "Data Visualization",
    ],

    description:
      "At Ceburu Systems, I contributed to the development of enterprise software applications designed to support operational and business workflows. My work focused on building modern frontend experiences, improving application usability, and developing user-focused features for managing, visualizing, and working with business data. I collaborated closely with development teams to deliver scalable solutions, enhance system functionality, and support continuous product improvements.",

    details: [
      "Developed responsive interfaces and reusable components using React, TypeScript, and modern web technologies.",
      "Integrated frontend applications with APIs and backend services to support reliable data exchange and user interactions.",
      "Implemented features such as search, filtering, bulk actions, import/export workflows, and data visualization capabilities.",
      "Contributed to network management and monitoring solutions through interactive dashboards and visualization interfaces.",
      "Supported software quality through testing, debugging, performance optimization, and feature enhancement efforts.",
    ],
  },

  {
    company: "UT Tyler",
    fullCompany: "University of Texas at Tyler",
    role: "Technical Specialist",
    years: "2024–2025",
    duration: "January 2024 – May 2025",

    technologies: [
      "CMS",
      "Accessibility",
      "Website Management",
      "Adobe Photoshop",
      "Canva",
      "Technical Support",
    ],

    description:
      "As a Technical Specialist, I supported the university's digital and technology initiatives through website management, technical support, digital communications, and information management activities. The role provided opportunities to work with a diverse range of technologies while collaborating with faculty, staff, and students to improve accessibility, operational efficiency, and user experiences across university services.",

    details: [
      "Maintained and enhanced web content through content management systems to improve accessibility and engagement.",
      "Created digital communication materials, presentations, and visual assets for university initiatives and events.",
      "Provided technical support for audiovisual systems, connectivity solutions, and event technology platforms.",
      "Assisted with secure registration systems and technology-related operational processes.",
      "Supported digital document management initiatives that improved record accessibility, security, and workflow efficiency.",
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
      "Machine Learning",
      "Data Analysis",
      "Visualization",
    ],

    description:
      "During my internship at the Centre of Excellence in Maritime and Shipbuilding, I gained hands-on experience in machine learning, data analytics, and predictive modeling. I worked with real-world datasets to explore patterns, generate insights, and develop analytical solutions while strengthening my understanding of the end-to-end machine learning lifecycle.",

    details: [
      "Prepared and transformed datasets using Python, Pandas, and NumPy for machine learning applications.",
      "Applied statistical analysis and feature engineering techniques to improve model performance.",
      "Developed visual reports and dashboards to communicate analytical findings and trends.",
      "Implemented clustering and predictive modeling approaches to support data-driven decision-making.",
      "Participated in experimentation, model evaluation, and interpretation of results across multiple projects.",
    ],
  },
];

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeJob = experiences[activeIndex];

  return (
    <section
      id="experience"
      className="overflow-hidden py-40"
    >
      <div className="mx-auto max-w-7xl px-7">
        <p className="section-label mb-6">
          EXPERIENCE
        </p>

        <h2
          className="
            display-heading
            mb-24
            text-5xl
            text-ink
            md:text-7xl
          "
        >
         Career Chapters
        </h2>

        {/* Journey */}

        <div className="relative mb-20">
          <div
            className="
              absolute
              top-12
              left-0
              right-0
              hidden
              h-px
              bg-[#D6DCE5]
              dark:bg-[#2A3445]
              md:block
            "
          />

          <div className="grid gap-12 md:grid-cols-3">
            {experiences.map((job, index) => {
              const isActive = activeIndex === index;

              return (
                <motion.button
                  key={job.company}
                  onClick={() => setActiveIndex(index)}
                  whileHover={{ y: -6 }}
                  className="relative text-center"
                >
                  <div
                    className={`
                      mx-auto
                      h-6
                      w-6
                      rounded-full
                      border-4
                      border-white
                      dark:border-[#0B1220]
                      shadow-lg
                      transition-all
                      duration-300
                      ${
                        isActive
                          ? "bg-gold scale-125"
                          : "bg-[#355070] dark:bg-[#6D8CA6]"
                      }
                    `}
                  />

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
                          ? "border-[#355070]/20 bg-white dark:border-gold/30 dark:bg-[#161E2E] shadow-[0_20px_60px_rgba(53,80,112,0.12)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
                          : "border-border bg-white dark:bg-[#161E2E] shadow-[0_10px_30px_rgba(17,24,39,0.04)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
                      }
                    `}
                  >
                    <p className="text-sm text-[#355070] dark:text-[#8FA8C7]">
                      {job.years}
                    </p>

                    <h3 className="mt-4 text-2xl font-bold text-ink">
                      {job.company}
                    </h3>

                    <p className="mt-3 text-slate-600 dark:text-[#9CA3AF]">
                      {job.role}
                    </p>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Fixed Detail Panel */}

        <div
          className="
            min-h-125
            rounded-[40px]
            border
            border-border
            bg-white
            dark:bg-[#161E2E]
            p-10
            shadow-[0_25px_70px_rgba(17,24,39,0.05)]
            dark:shadow-[0_25px_70px_rgba(0,0,0,0.35)]
            md:p-14
          "
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeJob.company}
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -20,
              }}
              transition={{
                duration: 0.35,
              }}
            >
              <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-[#355070] dark:text-[#8FA8C7]">
                    {activeJob.duration}
                  </p>

                  <h3 className="mt-4 text-4xl font-bold text-ink">
                    {activeJob.role}
                  </h3>

                  <p className="mt-3 text-xl text-slate-600 dark:text-[#9CA3AF]">
                    {activeJob.fullCompany}
                  </p>

                  <div className="mt-6 h-px w-24 bg-[#355070] dark:bg-gold" />

                  <div className="mt-8 flex flex-wrap gap-3">
                    {activeJob.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="
                          rounded-full
                          bg-[#355070]/5
                          dark:bg-[#6D8CA6]/15
                          px-4
                          py-2
                          text-sm
                          text-[#355070]
                          dark:text-[#8FA8C7]
                        "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-lg leading-relaxed text-slate-600 dark:text-[#9CA3AF]">
                    {activeJob.description}
                  </p>

                  <div className="mt-10">
                    <h4
                      className="
                        mb-5
                        text-sm
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
                          className="flex gap-4"
                        >
                          <div
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

                          <p className="leading-relaxed text-slate-600 dark:text-[#9CA3AF]">
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
    </section>
  );
}