// // components/ThemeToggle.js
// import { useState, useEffect } from "react";
// import { SunIcon, MoonIcon } from "@heroicons/react/solid";

// const ThemeToggle = () => {
//   const [darkMode, setDarkMode] = useState(false);

//   useEffect(() => {
//     // بررسی می‌کند که آیا تم تیره در مرورگر ذخیره شده است یا خیر
//     const storedTheme = localStorage.getItem("theme");
//     if (storedTheme) {
//       setDarkMode(storedTheme === "dark");
//     } else {
//       // اگر هیچ چیزی ذخیره نشده، تم پیش‌فرض را روشن می‌گذارد
//       setDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
//     }
//   }, []);

//   useEffect(() => {
//     // اعمال تم بر اساس وضعیت darkMode
//     if (darkMode) {
//       document.documentElement.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//       localStorage.setItem("theme", "light");
//     }
//   }, [darkMode]);

//   return (
//     <button
//       onClick={() => setDarkMode(!darkMode)}
//       className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-all"
//     >
//       {darkMode ? (
//         <MoonIcon className="w-6 h-6 text-yellow-400" />
//       ) : (
//         <SunIcon className="w-6 h-6 text-yellow-500" />
//       )}
//     </button>
//   );
// };

// export default ThemeToggle;


"use client";

import { useState, useEffect } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";




const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setDarkMode(storedTheme === "dark");
    } else {
      setDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
     <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-500 transition-all"
    >
      {darkMode ? (
        <MoonIcon className="w-6 h-6 text-yellow-400" />
      ) : (
        <SunIcon className="w-6 h-6 text-yellow-500" />
      )}
    </button>
  );
};

export default ThemeToggle;

