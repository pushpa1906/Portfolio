import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="relative flex min-h-screen items-center overflow-hidden py-32">
      <div className="absolute right-0 top-0 h-150 w-150 rounded-full bg-[#355070]/5 dark:bg-[#6D8CA6]/8 blur-[120px]" />
      <div className="absolute bottom-0 left-0 h-125 w-125 rounded-full bg-gold/8 dark:bg-gold/12 blur-[120px]" />

      <div className="relative mx-auto w-full max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="section-label mb-8">CONTACT</p>

          <h2 className="display-heading max-w-5xl text-6xl text-ink dark:text-[#F3F4F6] md:text-8xl">
            Open to new
            <br />
            opportunities.
          </h2>

          <p className="mt-10 max-w-2xl text-xl leading-relaxed text-slate-600 dark:text-[#9CA3AF]">
            I am currently seeking software development opportunities where I can
            contribute, learn, and continue building meaningful technology solutions.
          </p>

          <div className="mt-16 max-w-3xl border-t border-border dark:border-[#2A3445]">
            {[
              {
                label: "Email",
                href: "mailto:pushpaja.bommisetty1906@gmail.com",
                icon: Mail,
              },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/pushpaja-bommisetty/",
                icon: FaLinkedin,
              },
              {
                label: "GitHub",
                href: "https://github.com/pushpa1906",
                icon: FaGithub,
              },
            ].map((link) => {
              const Icon = link.icon;

              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.label === "Email" ? undefined : "_blank"}
                  rel={link.label === "Email" ? undefined : "noreferrer"}
                  whileHover={{ x: 10 }}
                  className="flex items-center justify-between border-b border-border dark:border-[#2A3445] py-6 text-2xl font-semibold text-ink dark:text-[#F3F4F6] transition hover:text-[#355070] dark:hover:text-gold"
                >
                  <span className="flex items-center gap-4">
                    <Icon size={24} />
                    {link.label}
                  </span>

                  <ArrowUpRight size={24} />
                </motion.a>
              );
            })}
          </div>

          <div className="mt-24 flex flex-col justify-between gap-4 text-sm text-slate-500 dark:text-muted md:flex-row">
            <p>© {new Date().getFullYear()} Pushpaja Bommisetty</p>
            <p>Software Developer • Computer Science Graduate</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}