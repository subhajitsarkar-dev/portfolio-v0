"use client";

import { useTheme } from "next-themes";
import { FiSun } from "react-icons/fi";
import { LuMoonStar } from "react-icons/lu";

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
          size={28}
          className="rotate-0 scale-100 transition-all duration-300 ease-in-out dark:-rotate-90 dark:scale-0"
        />

        <LuMoonStar
          size={28}
          className="w3 absolute rotate-90 scale-0 transition-all duration-300 ease-in-out dark:rotate-0 dark:scale-100"
        />
      </button>
    </>
  );
};

export default ThemeToggle;
