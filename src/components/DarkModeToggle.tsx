"use client";

import { useState, useEffect } from "react";
// import { useTheme } from "next-themes";
import { GiMoonOrbit } from "react-icons/gi";
import { CiLight } from "react-icons/ci";

// export function DarkModeToggle() {
//   const [mounted, setMounted] = useState(false);
//   const { theme, setTheme } = useTheme();

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) {
//     return null;
//   }

//   return (
//     <button
//       onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
//       className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 transition-colors duration-300"
//       aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
//     >
//       <CiLight className="h-5 w-5 text-yellow-300 dark:text-transparent transition-opacity duration-300 absolute" />
//       <GiMoonOrbit className="h-5 w-5 text-transparent dark:text-blue-300 transition-opacity duration-300 absolute" />
//     </button>
//   );
// }

// import { Moon, Sun } from "lucide-react";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    const html = document.documentElement;
    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="fixed top-4 right-4 p-2 rounded-full shadow-md transition-all"
    >
      {!isDarkMode ? (
        <CiLight className="h-5 w-5 text-yellow-300 dark:text-transparent transition-opacity duration-300 absolute" />
      ) : (
        <GiMoonOrbit className="h-5 w-5 text-transparent dark:text-blue-300 transition-opacity duration-300 absolute" />
      )}
    </button>
  );
};

export default DarkModeToggle;
