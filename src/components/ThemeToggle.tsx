"use client";

import { useTheme } from "next-themes";
import { FaMoon } from "react-icons/fa6";
import { FiSun } from "react-icons/fi";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const themeToggleFn = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <>
      <button onClick={themeToggleFn} className="flex items-center">
        <FiSun
          size={36}
          className="rotate-0 scale-100 transition-all duration-300 ease-in-out dark:-rotate-90 dark:scale-0"
        />
        <FaMoon
          size={36}
          className="absolute rotate-90 scale-0 transition-all duration-300 ease-in-out dark:rotate-0 dark:scale-100"
        />
      </button>
    </>
  );
};

export default ThemeToggle;
