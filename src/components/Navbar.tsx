import { motion } from "framer-motion";
import { ThemeToggle } from "./Themetoggle";

const links = [
  "About",
  "Experience",
  "Projects",
  "Skills",
  "Education",
];

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full">
      <div className="mx-auto max-w-7xl px-6 py-5">
        <nav
          className="
            flex
            items-center
            justify-between
            rounded-full
            border
            border-border
            bg-white/75
            px-7
            py-4
            backdrop-blur-xl
            shadow-[0_10px_40px_rgba(17,24,39,0.04)]
            transition-colors
            duration-300
            dark:bg-[#161E2E]/75
            dark:shadow-[0_10px_40px_rgba(0,0,0,0.3)]
          "
        >
          {/* Logo */}

          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[#355070] dark:text-[#8FA8C7]">
              Portfolio
            </p>

            <p className="font-semibold text-ink">
              Pushpaja Bommisetty
            </p>
          </div>

          {/* Navigation */}

          <div className="hidden gap-16 md:flex items-center">
            {links.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="
                  text-sm
                  font-medium
                  text-slate-600
                  transition-all
                  duration-300
                  hover:text-[#355070]
                  dark:text-[#9CA3AF]
                  dark:hover:text-gold
                "
              >
                {item}
              </a>
            ))}
            
          </div>

          {/* CTA */}
          <div className="gap-10 flex ">
            <div>
              <ThemeToggle />
            </div>
          
          <motion.a
            whileHover={{
              scale: 1.03,
              y: -1,
            }}
            whileTap={{ scale: 0.98 }}
            href="#contact"
            className="
              rounded-full
              bg-[#355070]
              px-5
              py-2.5
              text-sm
              font-medium
              text-white
              shadow-[0_8px_24px_rgba(53,80,112,0.18)]
              transition-all
              hover:bg-[#2D4561]
              dark:bg-gold
              dark:text-ink
              dark:hover:bg-[#DDBF8E]
              dark:shadow-[0_8px_24px_rgba(201,168,106,0.25)]
            "
          >
            Contact
          </motion.a>
          </div>
        </nav>
      </div>
    </header>
  );
}