"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiMongoose, SiBootstrap, SiNextdotjs, SiTypescript, SiRedux, SiGraphql, SiGithub, SiGitlab } from "react-icons/si";
import { DiCss3, DiJavascript1, DiReact, DiNodejs } from "react-icons/di";

export default function MySkills({ id }) {
  const [is3D, setIs3D] = useState(false);

  const icons = [
    { name: "Next.js", icon: <div className="bg-white rounded-full shadow-md"><SiNextdotjs size={80} color="#000000" /></div> },
    { name: "React", icon: <FaReact size={80} color="#61dafb" /> },
    { name: "JavaScript", icon: <FaJsSquare size={80} color="#f7df1e" /> },
    { name: "Node.js", icon: <DiNodejs size={80} color="#8cc84b" /> },
    { name: "HTML5", icon: <FaHtml5 size={80} color="#e34c26" /> },
    { name: "CSS3", icon: <FaCss3Alt size={80} color="#1572b6" /> },
    { name: "CSS Grid", icon: <DiCss3 size={80} color="#ff6347" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={80} color="#38bdf8" /> },
    { name: "MongoDB", icon: <SiMongodb size={80} color="#47a248" /> },
    { name: "Mongoose", icon: <SiMongoose size={80} color="#80e1a3" /> },
    { name: "Bootstrap", icon: <SiBootstrap size={80} color="#563d7c" /> },
    { name: "TypeScript", icon: <SiTypescript size={80} color="#3178c6" /> },
    { name: "Redux", icon: <SiRedux size={80} color="#764abc" /> },
    { name: "GraphQL", icon: <SiGraphql size={80} color="#e535ab" /> },
    { name: "GitHub", icon: <div className="bg-white p-2 rounded-full shadow-md"><SiGithub size={70} color="#181717" /></div> },
    { name: "GitLab", icon: <SiGitlab size={80} color="#FC6D26" /> }
  ];

  return (
    <section id={id} className="w-full flex flex-col items-center justify-center p-6">
      {/* کادر عنوان */}
      <div className="text-gray-900 dark:text-white text-2xl md:text-4xl font-extrabold px-6 py-4 rounded-lg shadow-lg mt-10">
        My Skills
      </div>

      {/* متن توضیحی */}
      <div className="max-w-4xl text-center my-6">
        <h2 className="text-lg md:text-2xl text-gray-900 dark:text-white">
          These are the essential tools, libraries, and frameworks that constitute my current tech stack.
        </h2>
      </div>

      <div className="flex flex-col items-center relative overflow-hidden z-10">
        {/* دکمه فعال‌سازی ۳D */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow-lg hover:bg-blue-700 transition-all mb-6"
          onClick={() => setIs3D(!is3D)}
        >
          {is3D ? "Disable 3D View" : "Enable 3D View"}
        </motion.button>

        {/* نمایش معمولی */}
        <div className={`grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 transition-all ${is3D ? "hidden" : "block"}`}>
          {icons.map((iconItem, index) => (
            <div key={index} className="flex flex-col items-center transition-transform duration-500 hover:scale-110 hover:drop-shadow-lg">
              <div>{iconItem.icon}</div>
              <span className="mt-2 text-xs md:text-sm font-bold">{iconItem.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* نمایش سه‌بعدی */}
      <motion.div
        className={`relative inset-0 flex justify-center items-center ${is3D ? "block" : "hidden"}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: is3D ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        style={{ perspective: "1000px" }}  // اضافه کردن perspective برای حالت 3D
      >
        {icons.map((iconItem, index) => (
          <motion.div
            key={index}
            className="absolute"
            initial={{ x: 0, y: 0, opacity: 0 }}
            animate={
              is3D
                ? {
                    x: Math.cos((index / icons.length) * 2 * Math.PI) * 200,
                    y: Math.sin((index / icons.length) * 2 * Math.PI) * 150,
                    z: Math.sin((index / icons.length) * 2 * Math.PI) * 400,
                    opacity: 1,
                    rotateX: 0,  // تنظیم چرخش در محور X
                    rotateY: 0,  // تنظیم چرخش در محور Y
                    transition: { duration: 2, repeat: Infinity, repeatType: "reverse" },
                  }
                : { opacity: 0 }
            }
          >
            <div>{iconItem.icon}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
