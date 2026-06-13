import { motion } from "framer-motion";
import { CheckCircle, Code2, Zap, Globe,type LucideIcon } from "lucide-react";

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

const StatusBadge = ({ label, color = "green", delay }: StatusBadgeProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.5 }}
    className={`
      flex items-center gap-2 rounded-full px-4 py-2
      ${color === "green" ? "bg-green-50 dark:bg-green-500/10" : "bg-blue-50 dark:bg-blue-500/10"}
    `}
  >
    <CheckCircle size={16} className={color === "green" ? "text-green-600 dark:text-green-400" : "text-blue-600 dark:text-blue-400"} />
    <span className={`text-sm font-medium ${color === "green" ? "text-green-700 dark:text-green-400" : "text-blue-700 dark:text-blue-400"}`}>
      {label}
    </span>
  </motion.div>
);

const ExperienceHighlight = ({ icon: Icon, title, description, delay }: ExperienceHighlightProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.6 }}
    viewport={{ once: true }}
    className="flex gap-4"
  >
    <Icon size={24} className="text-gold shrink-0 mt-1" />
    <div>
      <h4 className="font-semibold text-ink mb-1">{title}</h4>
      <p className="text-sm text-muted">{description}</p>
    </div>
  </motion.div>
);

export default function About() {
  return (
    <section className="relative py-24" id="about">
      {/* Background elements */}
      <div
        className="
          absolute
          -right-40
          top-1/2
          h-190
          w-190
          rounded-full
          blur-[170px]
          -z-10
        "
        style={{
          background:
            "radial-gradient(circle, rgba(201,168,106,0.08), transparent 70%)",
        }}
      />

      <div className="mx-auto w-full max-w-7xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="section-label mb-3">About Me</p>
          <h2 className="display-heading text-5xl md:text-6xl">
            Software Engineer
          </h2>
        </motion.div>

        {/* Main Content */}
        <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr]">
          {/* Left - Bio Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg leading-relaxed text-muted">
              I'm a passionate software engineer with a <span className="font-semibold">Master's degree in Computer Science from UT Tyler</span>. I specialize in building <span className="font-semibold">scalable web applications with modern technologies</span>, with a focus on clean code and user-centric design.
            </p>

            <p className="text-lg leading-relaxed text-muted">
              My journey in tech started with a curiosity about how things work under the hood. Over the years, I've developed expertise in <span className="font-semibold">web development, frontend and backend technologies, APIs, and data-driven applications</span>. I'm always eager to learn new technologies and tackle challenging problems.
            </p>

            <p className="text-lg leading-relaxed text-muted">
              Beyond writing code, I'm interested in <span className="font-semibold">contributing to open-source projects, sharing knowledge with the community, and building software that makes a meaningful impact</span>. I believe in continuous learning and collaborative development.
            </p>

            {/* Experience Highlights */}
            <div className="mt-10 space-y-6">
              <h3 className="text-xl font-bold text-ink">What I Bring</h3>
              
              <ExperienceHighlight
                icon={Globe}
                title="Web Development"
                description="Full web development expertise including responsive design, frontend frameworks (React, TypeScript), backend services (Node.js), and modern web technologies. Building complete web applications from concept to deployment."
                delay={0.3}
              />
              
              <ExperienceHighlight
                icon={Code2}
                title="Proven Experience"
                description="Real-world development experience at Ceburu and UT Tyler. Website management, responsive design implementation, backend integration, and full-stack project delivery across multiple technologies and platforms."
                delay={0.4}
              />
              
              <ExperienceHighlight
                icon={Zap}
                title="User-Centric & Growth Focused"
                description="Passionate about creating intuitive interfaces and understanding user needs. Committed to continuous growth through learning, collaboration, and hands-on experience with modern software development practices."
                delay={0.5}
              />
            </div>
          </motion.div>

          {/* Right - Status & Education */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Status Badges */}
            <div className="space-y-3 flex flex-col items-start  ">
              <StatusBadge label="Open to Work" color="green" delay={0.3} />
              <StatusBadge label="Available Now" color="blue" delay={0.4} />
            </div>

            {/* Education Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
              className="
                rounded-2xl
                border
                border-[#D6DCE5] dark:border-[#2A3445]
                bg-white/70 dark:bg-[#161E2E]/70
                p-6
                backdrop-blur
                hover:border-[#355070] dark:hover:border-gold
                transition-all
              "
            >
              <p className="text-xs uppercase tracking-wider text-muted mb-3">Education</p>
              <h3 className="font-semibold text-ink text-lg">
                MS Computer Science
              </h3>
              <p className="text-sm text-[#355070] dark:text-[#8FA8C7] font-medium mt-1">University of Texas at Tyler</p>
              
            </motion.div>

            {/* Experience Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.6 }}
              viewport={{ once: true }}
              className="
                rounded-2xl
                border
                border-[#D6DCE5] dark:border-[#2A3445]
                bg-white/70 dark:bg-[#161E2E]/70
                p-6
                backdrop-blur
                hover:border-[#355070] dark:hover:border-gold
                transition-all
              "
            >
              <p className="text-xs uppercase tracking-wider text-muted mb-3">Experience</p>
              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold text-ink">Ceburu</h3>
                  <p className="text-sm text-muted mt-1">Web development & frontend implementation</p>
                </div>
                <div>
                  <h3 className="font-semibold text-ink">UT Tyler</h3>
                  <p className="text-sm text-muted mt-1">Website management & full development projects</p>
                </div>
              </div>
            </motion.div>

            {/* Key Values */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
              className="
                rounded-2xl
                border
                border-[#D6DCE5] dark:border-[#2A3445]
                bg-white/70 dark:bg-[#161E2E]/70
                p-6
                backdrop-blur
              "
            >
              <p className="text-xs uppercase tracking-wider text-muted mb-4">Core Values</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-gold font-bold mt-0.5">→</span>
                  <span className="text-sm text-ink">Clean, maintainable code</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold font-bold mt-0.5">→</span>
                  <span className="text-sm text-ink">User-centric design</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold  font-bold mt-0.5">→</span>
                  <span className="text-sm text-ink">Continuous learning</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold  font-bold mt-0.5">→</span>
                  <span className="text-sm text-ink">Community contribution</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}