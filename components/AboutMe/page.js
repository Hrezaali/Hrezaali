import { Poppins, Roboto } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

// تعریف فونت‌ها
const poppins = Poppins({ subsets: ["latin"], weight: "400" });
const roboto = Roboto({ subsets: ["latin"], weight: "400" });

export default function AboutMe({ id }) {
  return (
    <section id={id} className="relative w-full h-screen flex flex-col items-center justify-center px-6 py-24 z-10">
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full max-w-7xl">
        {/* نمایش GIF */}
        <div className="w-full max-w-[300px] md:max-w-[400px]">
          <Image
            src="/images/developers.gif"
            alt="Developer Animation"
            width={400}
            height={400}
            className="rounded-lg shadow-lg object-cover w-full h-auto"
          />
        </div>

        {/* متن توضیحی */}
        <div className="text-center md:text-left mt-8 md:mt-0 md:w-[60%]">
          <h2 className={`text-3xl md:text-5xl font-extrabold ${roboto.className} text-purple-600 dark:text-gray-300`}>
            About Me
          </h2>
          <p className={`mt-4 text-base md:text-xl leading-relaxed text-gray-600 dark:text-gray-200 ${poppins.className} tracking-wide`}>
            <span className="font-bold text-2xl md:text-4xl text-gray-800 dark:text-purple-400">
              Junior Front-End Developer | Next.js Specialist
            </span>
            <br />
            As a software engineer, I specialize in developing high-performance web applications 
            that are visually engaging and scalable. With expertise in modern frameworks like React, Next.js, 
            MongoDB, and Mongoose, I create intuitive and responsive front-end interfaces while ensuring robust 
            and secure back-end systems. I focus on writing clean, maintainable code and prioritize performance, 
            reliability, and scalability in every project. Collaboration and communication are integral to my process, 
            and I’m committed to delivering solutions that exceed expectations and provide long-term value.
          </p>

          {/* دکمه برای نمایش بیشتر */}
          <div className="relative mt-6 text-center md:text-left z-50">
            <Link
              href="#contact"
               className="inline-block px-6 py-3 rounded-lg bg-green-600 hover:bg-purple-500 transition-all duration-300 text-lg font-semibold dark:bg-yellow-500 dark:hover:bg-yellow-400 cursor-pointer hidden md:inline-block"
  >
                 Let's Connect
            </Link>
           </div>
        </div>
      </div>
    </section>
  );
}
