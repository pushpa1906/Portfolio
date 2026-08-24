import { motion, useReducedMotion } from "framer-motion";

import { ArrowUpRight, Mail, MapPin } from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

/* =========================================================
   CONTACT DATA
========================================================= */

const contacts = [
  {
    title: "Email",
    value: "pushpaja.bommisetty1906@gmail.com",
    mobileValue: "Send me an email",
    href: "mailto:pushpaja.bommisetty1906@gmail.com",
    icon: Mail,
  },
  {
    title: "LinkedIn",
    value: "linkedin.com/in/pushpaja-bommisetty",
    mobileValue: "View LinkedIn profile",
    href: "https://www.linkedin.com/in/pushpaja-bommisetty/",
    icon: FaLinkedin,
  },
  {
    title: "GitHub",
    value: "github.com/pushpa1906",
    mobileValue: "View GitHub profile",
    href: "https://github.com/pushpa1906",
    icon: FaGithub,
  },
];

/* =========================================================
   CONTACT
========================================================= */

export default function Contact() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        py-16

        sm:py-20
        md:py-24

        lg:flex
        lg:min-h-screen
        lg:items-center
        lg:py-28
      "
    >
      {/* ===================================================
          BACKGROUND DECORATION
      ==================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-0
          top-0
          hidden
          h-150
          w-150
          rounded-full
          bg-[#355070]/5
          blur-[120px]

          lg:block
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          hidden
          h-125
          w-125
          rounded-full
          bg-gold/10
          blur-[120px]

          lg:block
        "
      />

      {/* ===================================================
          CONTAINER
      ==================================================== */}

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
        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 20,
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
            duration: reduceMotion ? 0 : 0.55,
          }}
        >
          {/* =================================================
              MAIN CONTENT
          ================================================== */}

          <div
            className="
              grid
              gap-12

              lg:grid-cols-[1.05fr_0.95fr]
              lg:items-center
              lg:gap-16

              xl:gap-20
            "
          >
            {/* =================================================
                LEFT SIDE
            ================================================== */}

            <div>
              {/* Label */}

              <p
                className="
                  section-label
                  mb-5

                  sm:mb-6
                "
              >
                CONTACT
              </p>

              {/* Heading */}

              <h2
                className="
                  display-heading
                  max-w-3xl
                  text-4xl
                  leading-[1.05]
                  text-ink

                  min-[390px]:text-[2.7rem]

                  sm:text-5xl
                  md:text-6xl

                  lg:text-[4rem]

                  xl:text-7xl

                  dark:text-[#F3F4F6]
                "
              >
                Open to new
                <br />
                opportunities.
              </h2>

              {/* Description */}

              <p
                className="
                  mt-6
                  max-w-xl
                  text-base
                  leading-7
                  text-slate-600

                  sm:text-lg
                  sm:leading-8

                  dark:text-[#9CA3AF]
                "
              >
                I&apos;m currently exploring opportunities in software
                engineering, frontend development, web development, and
                UI/UX-focused roles where I can contribute, keep learning, and
                build meaningful digital experiences.
              </p>

              {/* =================================================
                  CONTACT LINKS
              ================================================== */}

              <div
                className="
                  mt-10
                  max-w-xl

                  sm:mt-12
                "
              >
                <div
                  className="
                    overflow-hidden
                    rounded-2xl
                    border
                    border-border

                    dark:border-[#2A3445]
                  "
                >
                  {contacts.map((contact, index) => {
                    const Icon = contact.icon;

                    return (
                      <motion.a
                        key={contact.title}
                        href={contact.href}
                        target={
                          contact.title === "Email" ? undefined : "_blank"
                        }
                        rel={
                          contact.title === "Email"
                            ? undefined
                            : "noopener noreferrer"
                        }
                        whileHover={
                          reduceMotion
                            ? undefined
                            : {
                                x: 4,
                              }
                        }
                        whileTap={
                          reduceMotion
                            ? undefined
                            : {
                                scale: 0.99,
                              }
                        }
                        className={`
                          group
                          flex
                          min-w-0
                          items-center
                          justify-between
                          gap-4
                          bg-white/40
                          px-4
                          py-4
                          transition-colors

                          hover:bg-[#355070]/5

                          sm:px-5
                          sm:py-5

                          dark:bg-[#161E2E]/35
                          dark:hover:bg-[#1B2537]

                          ${
                            index !== contacts.length - 1
                              ? "border-b border-border dark:border-[#2A3445]"
                              : ""
                          }
                        `}
                      >
                        {/* Left */}

                        <div
                          className="
                            flex
                            min-w-0
                            items-center
                            gap-4
                          "
                        >
                          <div
                            className="
                              flex
                              h-9
                              w-9
                              shrink-0
                              items-center
                              justify-center
                              rounded-full
                              bg-[#355070]/8
                              text-[#355070]

                              dark:bg-[#8FA8C7]/10
                              dark:text-[#8FA8C7]
                            "
                          >
                            <Icon size={17} aria-hidden="true" />
                          </div>

                          <div className="min-w-0">
                            <p
                              className="
                                text-sm
                                font-semibold
                                text-ink

                                dark:text-[#F3F4F6]
                              "
                            >
                              {contact.title}
                            </p>

                            {/* Mobile */}

                            <p
                              className="
                                mt-0.5
                                text-xs
                                text-slate-500

                                sm:hidden

                                dark:text-[#9CA3AF]
                              "
                            >
                              {contact.mobileValue}
                            </p>

                            {/* Desktop */}

                            <p
                              className="
                                mt-0.5
                                hidden
                                truncate
                                text-sm
                                text-slate-500

                                sm:block

                                dark:text-[#9CA3AF]
                              "
                            >
                              {contact.value}
                            </p>
                          </div>
                        </div>

                        <ArrowUpRight
                          size={18}
                          aria-hidden="true"
                          className="
                            shrink-0
                            text-slate-500
                            transition-transform

                            group-hover:translate-x-0.5
                            group-hover:-translate-y-0.5

                            dark:text-[#9CA3AF]
                          "
                        />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* =================================================
                RIGHT SIDE — CONTACT BOX
            ================================================== */}

            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      x: 24,
                    }
              }
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.6,
                delay: reduceMotion ? 0 : 0.1,
              }}
              className="
                relative
                overflow-hidden
                rounded-[26px]
                border
                border-border
                bg-white
                p-6
                shadow-[0_20px_60px_rgba(17,24,39,0.07)]

                sm:p-8

                lg:p-9

                dark:border-[#2A3445]
                dark:bg-[#161E2E]
                dark:shadow-[0_24px_70px_rgba(0,0,0,0.22)]
              "
            >
              {/* Small decorative star */}

              <span
                aria-hidden="true"
                className="
                  absolute
                  right-8
                  top-7
                  text-base
                  text-gold
                "
              >
                ✦
              </span>

              {/* Heading */}

              <p
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.25em]
                  text-[#355070]

                  dark:text-[#8FA8C7]
                "
              >
                LET&apos;S CONNECT
              </p>

              <h3
                className="
                  mt-3
                  text-2xl
                  font-bold
                  tracking-tight
                  text-ink

                  sm:text-3xl

                  dark:text-[#F3F4F6]
                "
              >
                Start a conversation.
              </h3>

              <p
                className="
                  mt-4
                  max-w-lg
                  text-sm
                  leading-7
                  text-slate-600

                  sm:text-base

                  dark:text-[#9CA3AF]
                "
              >
                Have an opportunity, project, or idea you&apos;d like to
                discuss? I&apos;m always happy to connect and learn more.
              </p>

              {/* =================================================
                  EMAIL BUTTON
              ================================================== */}

              <motion.a
                href="mailto:pushpaja.bommisetty1906@gmail.com"
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        y: -2,
                      }
                }
                whileTap={
                  reduceMotion
                    ? undefined
                    : {
                        scale: 0.99,
                      }
                }
                className="
                  mt-8
                  flex
                  min-h-13
                  w-full
                  items-center
                  justify-center
                  gap-2.5
                  rounded-xl
                  bg-[#355070]
                  px-5
                  py-3.5
                  text-sm
                  font-semibold
                  text-white
                  transition

                  hover:bg-[#2B4663]

                  dark:bg-gold
                  dark:text-ink
                  dark:hover:bg-[#E3BE67]
                "
              >
                <Mail size={17} aria-hidden="true" />
                Send me an email
              </motion.a>

              {/* =================================================
                  LINKEDIN BUTTON
              ================================================== */}

              <motion.a
                href="https://www.linkedin.com/in/pushpaja-bommisetty/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        y: -2,
                      }
                }
                whileTap={
                  reduceMotion
                    ? undefined
                    : {
                        scale: 0.99,
                      }
                }
                className="
                  mt-3
                  flex
                  min-h-13
                  w-full
                  items-center
                  justify-center
                  gap-2.5
                  rounded-xl
                  border
                  border-border
                  bg-transparent
                  px-5
                  py-3.5
                  text-sm
                  font-semibold
                  text-ink
                  transition

                  hover:border-[#355070]/40
                  hover:bg-[#355070]/5

                  dark:border-[#344052]
                  dark:text-[#F3F4F6]

                  dark:hover:border-gold/50
                  dark:hover:bg-gold/5
                "
              >
                <FaLinkedin size={17} aria-hidden="true" />
                Connect on LinkedIn
                <ArrowUpRight size={15} aria-hidden="true" />
              </motion.a>

              {/* =================================================
                  DIVIDER
              ================================================== */}

              <div
                className="
                  my-7
                  h-px
                  bg-border

                  dark:bg-[#2A3445]
                "
              />

              {/* =================================================
                  LOCATION
              ================================================== */}

              <div>
                <p
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.22em]
                    text-slate-400

                    dark:text-[#718096]
                  "
                >
                  CURRENTLY BASED IN
                </p>

                <div
                  className="
                    mt-3
                    flex
                    items-center
                    gap-3
                  "
                >
                  <div
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#355070]/8
                      text-[#355070]

                      dark:bg-[#8FA8C7]/10
                      dark:text-[#8FA8C7]
                    "
                  >
                    <MapPin size={17} aria-hidden="true" />
                  </div>

                  <div>
                    <p
                      className="
                        text-base
                        font-semibold
                        text-ink

                        dark:text-[#F3F4F6]
                      "
                    >
                      Cupertino, California
                    </p>

                    <p
                      className="
                        mt-0.5
                        text-xs
                        text-slate-500

                        dark:text-[#9CA3AF]
                      "
                    >
                      United States
                    </p>
                  </div>
                </div>
              </div>

              {/* =================================================
                  BOTTOM DETAIL
              ================================================== */}

              <div
                aria-hidden="true"
                className="
                  absolute
                  bottom-0
                  left-0
                  h-0.5
                  w-[30%]
                  bg-gold
                "
              />
            </motion.div>
          </div>

          {/* =================================================
              FOOTER
          ================================================== */}

          <footer
            className="
              mt-16
              flex
              flex-col
              gap-2
              border-t
              border-border
              pt-6
              text-xs
              leading-6
              text-slate-500

              sm:mt-20
              sm:text-sm

              md:flex-row
              md:items-center
              md:justify-between
              md:gap-4

              lg:mt-24

              dark:border-[#2A3445]
              dark:text-[#9CA3AF]
            "
          >
            <p>© {new Date().getFullYear()} Pushpaja Bommisetty</p>

            <p>Computer Science Graduate</p>
          </footer>
        </motion.div>
      </div>
    </section>
  );
}
