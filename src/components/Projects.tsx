import { motion } from "framer-motion";
import { projects } from "../data/portfolio";
import Reveal from "./Reveal";
import { useSpotlight } from "../hooks/useSpotlight";

export default function Projects() {
  const spotlight = useSpotlight();

  return (
    <section id="projects" className="py-40">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mb-20">
          <p className="section-label mb-6">PROJECTS</p>

          <h2 className="display-heading text-5xl text-ink dark:text-[#F3F4F6] md:text-7xl">
            Learning through building
          </h2>
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              onMouseMove={spotlight.onMouseMove}
              className={`
                spotlight-card
                group rounded-[36px] border border-border dark:border-[#2A3445] bg-white dark:bg-[#161E2E] p-8
                shadow-[0_16px_50px_rgba(17,24,39,0.04)] dark:shadow-[0_16px_50px_rgba(0,0,0,0.3)]
                transition-all hover:border-[#355070]/25 dark:hover:border-gold/30
                ${project.grid}
              `}
            >
              <div className="relative z-10">
                <p className="text-sm font-medium text-[#355070] dark:text-[#8FA8C7]">
                  {project.subtitle}
                </p>

                <h3 className="mt-4 text-3xl font-bold tracking-tight text-ink dark:text-[#F3F4F6]">
                  {project.title}
                </h3>

                <p className="mt-5 max-w-3xl leading-relaxed text-slate-600 dark:text-[#9CA3AF]">
                  {project.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border dark:border-[#2A3445] bg-bg dark:bg-[#1E2738] px-4 py-2 text-sm text-slate-700 dark:text-[#D1D5DB]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-8 grid gap-3">
                  {project.highlights.map((item) => (
                    <p key={item} className="text-sm text-slate-600 dark:text-[#9CA3AF]">
                      <span className="mr-2 text-[#355070] dark:text-[#8FA8C7]">•</span>
                      {item}
                    </p>
                  ))}
                </div>
                {project.demo && (
                  <div className="mt-10 flex flex-wrap gap-4">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center rounded-full bg-[#355070] px-6 py-3 text-sm font-semibold text-white transition hover:scale-105 hover:bg-[#2B4663] dark:bg-gold dark:text-ink dark:hover:bg-[#E3BE67]"
                    >
                      Try Now ↗
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
