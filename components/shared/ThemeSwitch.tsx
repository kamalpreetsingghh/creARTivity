"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa6";

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (theme === "system") {
      setTheme("dark");
    }
  }, []);

  useEffect(() => setIsMounted(true), []);

  if (!isMounted) {
    return null;
  }

  return (
    <div
      className={`flex justify-end items-start absolute top-0 right-0 mt-4 mr-8`}
    >
      <button
        onClick={() => setTheme(theme !== "dark" ? "dark" : "light")}
        className="toggle-btn"
      >
        {theme === "dark" ? (
          <FaMoon className="w-6 h-6" />
        ) : (
          <FaSun className="w-6 h-6 text-orange-500" />
        )}
      </button>
    </div>
  );
};

export default ThemeSwitch;
