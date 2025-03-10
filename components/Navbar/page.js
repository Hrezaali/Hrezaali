"use client";
import { useState, useEffect } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@heroui/react";
import { Sun, Moon, Menu, X } from "lucide-react";

export const AcmeLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default function AppNavbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = darkMode ? "light" : "dark";
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", newTheme);
  };

  const handleLinkClick = (id) => {
    // بستن منوی همبرگری
    setIsMenuOpen(false);
    // اسکرول به بخش مربوطه
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Navbar className="fixed top-0 left-0 w-full bg-[rgba(0,0,0,0.8)] text-white z-50">
      <NavbarContent justify="start">
        <NavbarBrand className="mr-4 flex items-center">
          <AcmeLogo />
          <p className="hidden sm:block font-bold text-white ml-3">Hassan Rezaali</p>
        </NavbarBrand>
      </NavbarContent>

      {/* دکمه همبرگری در موبایل */}
      <button className="sm:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      {/* لینک‌های منو در حالت دسکتاپ */}
      <NavbarContent className="hidden sm:flex gap-5">
        {["Home", "About", "Services", "Skills", "Certificates", "Contact"].map((item, index) => (
          <NavbarItem key={index}>
            <Link
              className="text-white hover:text-blue-500 transition-all duration-300"
              href={`#${item.toLowerCase()}`}
              onClick={() => handleLinkClick(item.toLowerCase())}
            >
              {item}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* دکمه تغییر تم */}
      <button
        onClick={toggleTheme}
        className="p-2 rounded-full bg-gray-800 dark:bg-gray-200 text-white dark:text-black transition-all duration-300 hover:scale-110 hover:shadow-lg"
      >
        {darkMode ? <Sun size={24} /> : <Moon size={24} />}
      </button>

      {/* منوی موبایل */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-gray-900 text-white flex flex-col items-center py-5 space-y-3 sm:hidden z-50">
          {["Home", "About", "Services", "Skills", "Certificates", "Contact"].map((item, index) => (
            <Link
              key={index}
              className="text-white hover:text-blue-500 transition-all duration-300"
              href={`#${item.toLowerCase()}`}
              onClick={() => handleLinkClick(item.toLowerCase())}
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </Navbar>
  );
}
