import { Sun, Moon } from "lucide-react";
import { useTheme } from "./Theme";
import { motion, useReducedMotion } from "framer-motion";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const reduceMotion = useReducedMotion();

  return (
    <motion.button
      type="button"
      whileHover={reduceMotion ? undefined : { scale: 1.1 }}
      whileTap={reduceMotion ? undefined : { scale: 0.95 }}
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
      className="
        relative
        p-2.5
        rounded-full
        border
        border-[#D6DCE5]
        bg-white/70
        backdrop-blur
        hover:border-[#355070]
        hover:bg-white/80
        transition-all
        dark:bg-[#1F2937]/70
        dark:border-[#374151]
        dark:hover:border-gold
        dark:hover:bg-[#1F2937]/80
      "
    >
      {theme === "light" ? (
        <Sun
          size={20}
          className="text-[#355070] dark:text-gold"
        />
      ) : (
        <Moon
          size={20}
          className="text-gold"
        />
      )}
    </motion.button>
  );
}
