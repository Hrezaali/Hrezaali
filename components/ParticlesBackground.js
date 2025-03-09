"use client";
import { useEffect, useState } from "react";
const ParticlesBackground = () => {
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
    if (typeof window !== "undefined") {
      import("particles.js").then((module) => {
        const particlesJS = window.particlesJS;
        if (particlesJS) {
          particlesJS("particles-js", {
            particles: {
              number: {
                value: 80,
                density: {
                  enable: true,
                  value_area: 800,
                },
              },
              color: {
                value: darkMode ? "#9b5de5" : "#9b5de5", // رنگ ذرات برای هر دو تم
              },
              shape: {
                type: "circle",
              },
              opacity: {
                value: 0.8,
                anim: {
                  enable: true,
                  speed: 1,
                  opacity_min: 0.5,
                  sync: false,
                },
              },
              size: {
                value: 5,
                random: true,
                anim: {
                  enable: true,
                  speed: 2,
                  size_min: 3,
                  sync: false,
                },
              },
              line_linked: {
                enable: true,
                distance: 120,
                color: darkMode ? "#9b5de5" : "#9b5de5", // رنگ خطوط بین ذرات برای هر دو تم
                opacity: 0.7, // شفافیت خطوط
                width: 1.2, // ضخامت خطوط
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "grab", // حالت جذب هنگام هاور
                },
                onclick: {
                  enable: true,
                  mode: "push", // اضافه کردن ذرات هنگام کلیک
                },
              },
              modes: {
                grab: {
                  distance: 200,
                  line_linked: {
                    opacity: 0.7, // افزایش شفافیت خطوط هنگام هاور
                  },
                },
                push: {
                  particles_nb: 5, // تعداد ذرات اضافه شده هنگام کلیک
                },
              },
            },
          });
        }
      });
    }
  }, [darkMode]);

  return (
    <div id="particles-js" className="absolute top-0 left-0 w-full h-full z-10"></div>
    
  );
};

export default ParticlesBackground;
