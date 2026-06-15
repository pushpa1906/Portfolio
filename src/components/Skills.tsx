import { motion } from "framer-motion";
import { useSpotlight } from "../hooks/useSpotlight";
import {
  Code2,
  Database,
  Globe,
  Wrench,
  Brain,
  ShieldCheck,
} from "lucide-react";

import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiNodedotjs,
  SiDjango,
  SiGit,
  SiGithub,
  SiPostman,
  SiPython,
  SiFigma,
  SiCanva,
} from "react-icons/si";

const skills = [
  {
    title: "Frontend Development",
    icon: Code2,
    description: "Building modern responsive interfaces.",
    items: [
      "React",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend & APIs",
    icon: Database,
    description: "Server-side development and integrations.",
    items: [
      "Node.js",
      "Django REST Framework",
      "REST APIs",
      "JSON",
      "Authentication",
    ],
  },
  {
    title: "Web Technologies",
    icon: Globe,
    description: "Building and maintaining digital platforms.",
    items: [
      "Website Management",
      "CMS",
      "Responsive Design",
      "SEO Basics",
      "Accessibility",
    ],
  },
  {
    title: "Tools & Collaboration",
    icon: Wrench,
    description: "Development workflow and teamwork.",
    items: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Agile",
      "Jira",
      "Figma",
      "Canva",
      "Photoshop",
    ],
  },
  {
    title: "Data & Machine Learning",
    icon: Brain,
    description: "Academic and personal ML projects.",
    items: [
      "Python",
      "Machine Learning",
      "Data Analysis",
      "Pandas",
      "NumPy",
      "Model Evaluation",
    ],
  },
  {
    title: "Quality & Accessibility",
    icon: ShieldCheck,
    description: "Building reliable user experiences.",
    items: [
      "Testing",
      "Debugging",
      "Performance Optimization",
      "Usability",
     "Accessibility"
    ],
  },
];

const techIcons: Record<
  string,
  {
    icon: React.ElementType;
    color: string;
  }
> = {
  React: { icon: SiReact, color: "#61DAFB" },
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  JavaScript: { icon: SiJavascript, color: "#F7DF1E" },
  HTML: { icon: SiHtml5, color: "#E34F26" },
  CSS: { icon: SiCss, color: "#1572B6" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#06B6D4" },
  "Node.js": { icon: SiNodedotjs, color: "#339933" },
  "Django REST Framework": { icon: SiDjango, color: "#092E20" },
  Git: { icon: SiGit, color: "#F05032" },
  GitHub: { icon: SiGithub, color: "#181717" },
  Postman: { icon: SiPostman, color: "#FF6C37" },
  Python: { icon: SiPython, color: "#3776AB" },
  Figma: {
  icon: SiFigma,
  color: "#A259FF",
},

Canva: {
  icon: SiCanva,
  color: "#00C4CC",
},

};

export default function Skills() {
  const spotlight = useSpotlight();

  return (
    <section
      id="skills"
      className="relative py-40"
    >
        <div
        className="
            absolute
            inset-0
            opacity-[0.03]
            dark:opacity-[0.06]
            pointer-events-none
        "
        >
        <svg
            className="h-full w-full"
            viewBox="0 0 1200 800"
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
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <p className="section-label mb-6">
            SKILLS
          </p>

          <h2
            className="
              display-heading
              text-5xl
              text-ink
              dark:text-[#F3F4F6]
              md:text-7xl
            "
          >
           Technologies behind the journey
          </h2>

          <p
            className="
              mt-8
              max-w-3xl
              text-xl
              leading-relaxed
              text-slate-600
              dark:text-[#9CA3AF]
            "
          >
            A combination of software development,
            web technologies, data-driven solutions,
            and collaborative development practices.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="
                  group
                  spotlight-card
                  rounded-4xl
                  border
                  border-border
                  dark:border-[#2A3445]
                  bg-white
                  dark:bg-[#161E2E]
                  p-8
                  shadow-[0_10px_30px_rgba(15,23,42,0.04)]
                  dark:shadow-[0_10px_30px_rgba(0,0,0,0.3)]
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-[#355070]/20
                  dark:hover:border-gold/25
                  hover:shadow-[0_20px_60px_rgba(53,80,112,0.10)]
                  dark:hover:shadow-[0_20px_60px_rgba(0,0,0,0.45)]
                "
                onMouseMove={spotlight.onMouseMove}
              >
                <div className="relative z-10">
                <div
                  className="
                    mb-6
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-[#355070]/10
                    dark:bg-[#6D8CA6]/15
                  "
                >
                  <Icon
                    size={26}
                    className="text-[#355070] dark:text-[#8FA8C7]"
                  />
                </div>

                <h3
                  className="
                    text-2xl
                    font-semibold
                    text-ink
                    dark:text-[#F3F4F6]
                  "
                >
                  {skill.title}
                </h3>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-relaxed
                    text-slate-500
                    dark:text-[#9CA3AF]
                  "
                >
                  {skill.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {skill.items.map((item) => {
                    const tech = techIcons[item];

                    return (
                      <span
                        key={item}
                        className="
                          inline-flex
                          items-center
                          gap-2
                          rounded-full
                          border
                          border-border
                          dark:border-[#2A3445]
                          bg-white
                          dark:bg-[#1E2738]
                          px-4
                          py-2
                          text-sm
                          text-slate-700
                          dark:text-[#D1D5DB]
                          transition-all
                          duration-200
                          hover:border-[#355070]/20
                          dark:hover:border-gold/25
                          hover:bg-[#355070]/5
                          dark:hover:bg-[#6D8CA6]/10
                        "
                      >
                        {tech && (
                        <tech.icon
                            size={15}
                            color={tech.color}
                        />
                        )}
                        {item}
                      </span>
                    );
                  })}
                </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
