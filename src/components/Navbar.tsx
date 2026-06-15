import { motion } from "framer-motion";
import { ThemeToggle } from "./Themetoggle";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
"About",
"Experience",
"Projects",
"Skills",
"Education",
];

export default function Navbar() {
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

return ( <header className="fixed top-0 z-50 w-full"> <div className="mx-auto max-w-7xl px-6 py-5"> <nav
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
{/* Logo */} <div> <p className="text-xs uppercase tracking-[0.35em] text-[#355070] dark:text-[#8FA8C7]">
Portfolio </p>

```
        <p className="font-semibold text-ink">
          Pushpaja Bommisetty
        </p>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center gap-10">
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

      {/* Desktop CTA */}
      <div className="hidden lg:flex items-center gap-6">
        <ThemeToggle />

        <motion.a
          whileHover={{ scale: 1.03, y: -1 }}
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

      {/* Mobile Burger */}
      <button
        onClick={() => setMobileMenuOpen(true)}
        className="lg:hidden"
      >
        <Menu size={24} />
      </button>
    </nav>
  </div>

  {/* Mobile Drawer */}
  {mobileMenuOpen && (
    <div
      className="
        fixed
        inset-0
        z-999
        bg-[#020617]/70
        backdrop-blur-lg
        lg:hidden
      "
    >
      <div
        className="
          absolute
          right-0
          top-0
          h-screen
          w-80
          border-l
          border-[#1E293B]
          bg-white/95
          p-6
          backdrop-blur-xl
          shadow-[0_0_60px_rgba(0,0,0,0.15)]
          dark:bg-[#08111F]/95
          dark:shadow-[0_0_60px_rgba(0,0,0,0.5)]
        "
      >
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-ink dark:text-white">
            Menu
          </h3>

          <button
            onClick={() => setMobileMenuOpen(false)}
            className="
              rounded-full
              p-2
              transition-all
              hover:bg-slate-100
              dark:hover:bg-[#162033]
            "
          >
            <X size={24} />
          </button>
        </div>

        <div className="mt-8 flex flex-col gap-2">
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
                transition-all
                duration-300
                hover:bg-[#355070]/10
                hover:text-[#355070]
                active:scale-[0.98]
                dark:text-[#CBD5E1]
                dark:hover:bg-gold/10
                dark:hover:text-gold
              "
            >
              {item}
            </a>
          ))}

          <div className="mt-4 flex justify-center">
            <ThemeToggle />
          </div>

          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="
              mt-4
              rounded-xl
              bg-[#355070]
              px-4
              py-3
              text-center
              font-medium
              text-white
              transition-all
              hover:bg-[#2D4561]
              active:scale-[0.98]
              dark:bg-gold
              dark:text-ink
              dark:hover:bg-[#DDBF8E]
            "
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  )}
</header>

);
}
