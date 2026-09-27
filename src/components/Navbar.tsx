import { motion, useReducedMotion } from "framer-motion";
import { ThemeToggle } from "./Themetoggle";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

const links = ["About", "Experience", "Projects", "Skills", "Education"];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const brandRef = useRef<HTMLAnchorElement>(null);

  /* =========================================================
     MOBILE MENU BEHAVIOR
  ========================================================= */

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    const drawer = drawerRef.current;
    const menuButton = menuButtonRef.current;
    const brand = brandRef.current;
    if (!drawer) return;

    const focusableElements = () => Array.from(
      drawer.querySelectorAll<HTMLElement>(
        'a[href], button:not(:disabled), [tabindex]:not([tabindex="-1"])',
      ),
    ).filter((element) => element.tabIndex >= 0 && element.getClientRects().length > 0);

    focusableElements()[0]?.focus({ preventScroll: true });

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setMobileMenuOpen(false);
        return;
      }
      if (event.key === "Tab") {
        const elements = focusableElements();
        const first = elements[0];
        const last = elements[elements.length - 1];
        if (!first || !last) {
          event.preventDefault();
          drawer.focus({ preventScroll: true });
        } else if (!drawer.contains(document.activeElement) || document.activeElement === drawer) {
          event.preventDefault();
          (event.shiftKey ? last : first).focus();
        } else if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    const handleFocusIn = (event: FocusEvent) => {
      if (event.target instanceof Node && !drawer.contains(event.target)) {
        (focusableElements()[0] ?? drawer).focus({ preventScroll: true });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("focusin", handleFocusIn);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("focusin", handleFocusIn);
      // The mobile trigger is hidden after switching to the desktop layout.
      const target = menuButton?.getClientRects().length ? menuButton : brand;
      target?.focus({ preventScroll: true });
    };
  }, [mobileMenuOpen]);

  /* =========================================================
     CLOSE MOBILE MENU ON DESKTOP
  ========================================================= */

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    const handleChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setMobileMenuOpen(false);
      }
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return (
    <header
      className="
        fixed
        left-0
        right-0
        top-0
        z-50
        w-full
      "
    >
      {/* =====================================================
          OUTER CONTAINER
      ====================================================== */}

      <div
        className="
    mx-auto
    w-full
    max-w-360
    px-4
    pt-3

    sm:px-5
    sm:pt-4

    lg:px-6
    lg:pt-4

    xl:px-8
  "
      >
        {/* ===================================================
            NAVBAR
        ==================================================== */}

        <nav
          aria-label="Main navigation"
          className="
            flex
            min-w-0
            items-center
            justify-between
            gap-4
            rounded-full
            border
            border-border
            bg-white/80
            px-5
            py-2.5
            shadow-[0_8px_30px_rgba(17,24,39,0.04)]
            backdrop-blur-xl
            transition-colors
            duration-300

            sm:px-6
            sm:py-3

            lg:px-6
            lg:py-3

            dark:bg-[#161E2E]/80
            dark:shadow-[0_8px_30px_rgba(0,0,0,0.3)]
          "
        >
          {/* =================================================
              LEFT — BRAND
          ================================================== */}

          <a
            ref={brandRef}
            href="#home"
            aria-label="Go to homepage"
            className="
              min-w-0
              shrink-0
            "
          >
            <p
              className="
                truncate
                text-[0.55rem]
                font-medium
                uppercase
                tracking-[0.22em]
                text-[#355070]

                sm:text-[0.6rem]
                sm:tracking-[0.28em]

                dark:text-[#8FA8C7]
              "
            >
              Portfolio
            </p>

            <p
              className="
                truncate
                text-sm
                font-semibold
                leading-tight
                text-ink

                sm:text-[0.95rem]

                dark:text-[#F3F4F6]
              "
            >
              Pushpaja Bommisetty
            </p>
          </a>

          {/* =================================================
              RIGHT — NAV + THEME + CONTACT
          ================================================== */}

          <div
            className="
              ml-auto
              hidden
              items-center

              lg:flex
            "
          >
            {/* ===============================================
                NAVIGATION LINKS
            ================================================ */}

            <div
              className="
                flex
                items-center
                gap-5

                xl:gap-7
              "
            >
              {links.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="
                    whitespace-nowrap
                    text-[0.8rem]
                    font-medium
                    text-slate-600
                    transition-colors
                    duration-300

                    hover:text-[#355070]

                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-[#355070]
                    focus-visible:ring-offset-4

                    dark:text-[#9CA3AF]
                    dark:hover:text-gold
                    dark:focus-visible:ring-gold
                  "
                >
                  {item}
                </a>
              ))}
            </div>

            {/* ===============================================
                SMALL DIVIDER
            ================================================ */}

            <div
              aria-hidden="true"
              className="
                mx-5
                h-5
                w-px
                bg-border

                xl:mx-6

                dark:bg-[#2A3445]
              "
            />

            {/* ===============================================
                THEME TOGGLE
            ================================================ */}

            <ThemeToggle />

            {/* ===============================================
                CONTACT
            ================================================ */}

            <motion.a
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      scale: 1.03,
                      y: -1,
                    }
              }
              whileTap={
                reduceMotion
                  ? undefined
                  : {
                      scale: 0.98,
                    }
              }
              href="#contact"
              className="
                ml-4
                rounded-full
                bg-[#355070]
                px-5
                py-2
                text-[0.8rem]
                font-medium
                text-white
                shadow-[0_6px_18px_rgba(53,80,112,0.16)]
                transition-colors

                hover:bg-[#2D4561]

                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-[#355070]
                focus-visible:ring-offset-4

                dark:bg-gold
                dark:text-ink
                dark:shadow-[0_6px_18px_rgba(201,168,106,0.2)]
                dark:hover:bg-[#DDBF8E]
                dark:focus-visible:ring-gold
              "
            >
              Contact
            </motion.a>
          </div>

          {/* =================================================
              MOBILE RIGHT
          ================================================== */}

          <div
            className="
              ml-auto
              flex
              items-center
              gap-1

              lg:hidden
            "
          >
            <ThemeToggle />

            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              className="
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-full
                text-ink
                transition-colors

                hover:bg-[#355070]/8

                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-[#355070]

                dark:text-[#F3F4F6]
                dark:hover:bg-white/5
                dark:focus-visible:ring-gold
              "
            >
              <Menu size={20} aria-hidden="true" />
            </button>
          </div>
        </nav>
      </div>

      {/* =====================================================
          MOBILE DRAWER
      ====================================================== */}

      {mobileMenuOpen && (
        <motion.div
          id="mobile-navigation"
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                }
          }
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.2,
          }}
          className="
            fixed
            inset-0
            z-999
            bg-[#020617]/60
            backdrop-blur-sm

            lg:hidden
          "
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setMobileMenuOpen(false);
            }
          }}
        >
          {/* =================================================
              DRAWER
          ================================================== */}

          <motion.div
            ref={drawerRef}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={
              reduceMotion
                ? false
                : {
                    x: "100%",
                  }
            }
            animate={{
              x: 0,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.28,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              absolute
              right-0
              top-0
              flex
              h-dvh
              w-[min(86vw,320px)]
              flex-col
              overflow-y-auto
              border-l
              border-[#D6DCE5]
              bg-white/95
              p-5
              shadow-[-15px_0_50px_rgba(0,0,0,0.12)]
              backdrop-blur-xl

              sm:p-6

              dark:border-[#1E293B]
              dark:bg-[#08111F]/95
              dark:shadow-[-15px_0_50px_rgba(0,0,0,0.45)]
            "
          >
            {/* ===============================================
                DRAWER HEADER
            ================================================ */}

            <div
              className="
                flex
                items-center
                justify-between
                gap-4
              "
            >
              <div className="min-w-0">
                <p
                  className="
                    text-[0.6rem]
                    font-medium
                    uppercase
                    tracking-[0.25em]
                    text-[#355070]

                    dark:text-[#8FA8C7]
                  "
                >
                  Portfolio
                </p>

                <h2
                  className="
                    mt-1
                    truncate
                    text-sm
                    font-semibold
                    text-ink

                    dark:text-white
                  "
                >
                  Pushpaja Bommisetty
                </h2>
              </div>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close navigation menu"
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  text-ink
                  transition-colors

                  hover:bg-slate-100

                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[#355070]

                  dark:text-white
                  dark:hover:bg-[#162033]
                  dark:focus-visible:ring-gold
                "
              >
                <X size={20} aria-hidden="true" />
              </button>
            </div>

            {/* Divider */}

            <div
              className="
                mt-5
                h-px
                w-full
                bg-border

                dark:bg-[#1E293B]
              "
            />

            {/* ===============================================
                MOBILE NAVIGATION LINKS
            ================================================ */}

            <div
              className="
                mt-5
                flex
                flex-col
                gap-1
              "
            >
              {links.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="
                    rounded-xl
                    px-4
                    py-3
                    text-base
                    font-medium
                    text-slate-700
                    transition-colors

                    hover:bg-[#355070]/10
                    hover:text-[#355070]

                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-[#355070]

                    dark:text-[#CBD5E1]
                    dark:hover:bg-gold/10
                    dark:hover:text-gold
                    dark:focus-visible:ring-gold
                  "
                >
                  {item}
                </a>
              ))}
            </div>

            {/* ===============================================
                BOTTOM ACTIONS
            ================================================ */}

            <div
              className="
                mt-auto
                pt-8
              "
            >
              <div
                className="
                  mb-4
                  flex
                  items-center
                  justify-between
                  rounded-xl
                  border
                  border-border
                  px-4
                  py-3

                  dark:border-[#1E293B]
                "
              >
                <span
                  className="
                    text-sm
                    font-medium
                    text-slate-600

                    dark:text-[#CBD5E1]
                  "
                >
                  Appearance
                </span>

                <ThemeToggle />
              </div>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="
                  flex
                  min-h-12
                  w-full
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#355070]
                  px-4
                  py-3
                  text-center
                  font-medium
                  text-white
                  transition-colors

                  hover:bg-[#2D4561]

                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[#355070]
                  focus-visible:ring-offset-2

                  dark:bg-gold
                  dark:text-ink
                  dark:hover:bg-[#DDBF8E]
                  dark:focus-visible:ring-gold
                "
              >
                Contact
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </header>
  );
}
