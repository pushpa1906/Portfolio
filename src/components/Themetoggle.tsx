import { Sun, Moon } from "lucide-react";
import { useTheme } from "./Theme";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      aria-label="Toggle theme"
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