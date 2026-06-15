import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const contacts = [
  {
    title: "Email",
    value: "pushpaja.bommisetty1906@gmail.com",
    href: "mailto:pushpaja.bommisetty1906@gmail.com",
    icon: Mail,
  },
  {
    title: "LinkedIn",
    value: "linkedin.com/in/pushpaja-bommisetty",
    href: "https://www.linkedin.com/in/pushpaja-bommisetty/",
    icon: FaLinkedin,
  },
  {
    title: "GitHub",
    value: "github.com/pushpa1906",
    href: "https://github.com/pushpa1906",
    icon: FaGithub,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative flex min-h-screen items-center overflow-hidden py-32"
    >
      {/* Background */}
      <div className="absolute right-0 top-0 h-150 w-150 rounded-full bg-[#355070]/5 blur-[120px]" />

      <div className="absolute bottom-0 left-0 h-125 w-125 rounded-full bg-gold/10 blur-[120px]" />

      <div className="relative mx-auto w-full max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="section-label mb-8">
            CONTACT
          </p>

          <h2
            className="
              display-heading
              max-w-5xl
              text-6xl
              text-ink
              md:text-8xl
            "
          >
            Open to new
            <br />
            opportunities.
          </h2>

          <p
            className="
              mt-10
              max-w-2xl
              text-xl
              leading-relaxed
              text-slate-600
            "
          >
            I am currently seeking opportunities in software engineering,
            web development, and technology-focused roles where I can
            contribute, continue learning, and grow professionally.
          </p>

          <div className="mt-16 max-w-3xl border-t border-border">
            {contacts.map((contact) => {
              const Icon = contact.icon;

              return (
                <motion.a
                  key={contact.title}
                  href={contact.href}
                  target={
                    contact.title === "Email"
                      ? undefined
                      : "_blank"
                  }
                  rel={
                    contact.title === "Email"
                      ? undefined
                      : "noreferrer"
                  }
                  whileHover={{ x: 10 }}
                  className="
                    flex
                    items-center
                    justify-between
                    border-b
                    border-border
                    py-6
                    transition
                    hover:text-[#355070]
                  "
                >
                  <div className="flex items-start gap-4">
                    <Icon
                      size={24}
                      className="mt-1 text-[#355070]"
                    />

                    <div>
                      <p
                        className="
                          text-2xl
                          font-semibold
                          text-ink
                        "
                      >
                        {contact.title}
                      </p>

                      <p
                        className="
                          mt-1
                          text-base
                          font-normal
                          text-slate-500
                        "
                      >
                        {contact.value}
                      </p>
                    </div>
                  </div>

                  <ArrowUpRight size={24} />
                </motion.a>
              );
            })}
          </div>

          <div
            className="
              mt-24
              flex
              flex-col
              justify-between
              gap-4
              text-sm
              text-slate-500
              md:flex-row
            "
          >
            <p>
              © {new Date().getFullYear()} Pushpaja Bommisetty
            </p>

            <p>
              Software Engineer • Web Developer
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}