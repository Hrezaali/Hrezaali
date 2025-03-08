"use client";

import { useState, useEffect } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@heroui/react";
import { Sun, Moon } from "lucide-react";

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

  useEffect(() => {
    // بررسی تم ذخیره‌شده در لوکال‌استوریج
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

  return (
    <Navbar isBordered className="bg-[rgba(0,0,0,0.1)] text-white">
      <NavbarContent justify="start">
        <NavbarBrand className="mr-4">
          <AcmeLogo />
          <p className="hidden sm:block font-bold text-white">Hassan Rezaali</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-5">
          <NavbarItem>
            <Link className="text-white" href="#">Home</Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="text-white" href="#about">About</Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="text-white" href="#services">Services</Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="text-white" href="#skills">Skills</Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="text-white" href="#projects">Projects</Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="text-white" href="#blog">Blog</Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="text-white" href="#certificates">Certificates</Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="text-white" href="#contact">Contact</Link>
          </NavbarItem>
        </NavbarContent>
      </NavbarContent>

      {/* دکمه تغییر تم */}
      <button
        onClick={toggleTheme}
        className="p-2 rounded-full bg-gray-800 dark:bg-gray-200 text-white dark:text-black transition-all"
      >
        {darkMode ? <Sun size={24} /> : <Moon size={24} />}
      </button>
    </Navbar>
  );
}
