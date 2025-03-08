import { Poppins, Roboto } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

// تعریف فونت‌ها
const poppins = Poppins({ subsets: ["latin"], weight: "400" });
const roboto = Roboto({ subsets: ["latin"], weight: "400" });

export default function AboutMe({ id }) {
  return (
    <section id={id} className="relative w-ful h-screen flex flex-col items-center justify-center p-24 z-10">
      <div className="flex flex-col md:flex-row items-center justify-center gap-24 w-full max-w-8xl">
        {/* نمایش GIF */}
        <div className="w-full md:w-[400px]">
          <Image
            src="/images/developers.gif"
            alt="Developer Animation"
            width={400}
            height={400}
            className="rounded-lg shadow-lg max-w-full h-auto"
          />
        </div>

        {/* متن توضیحی */}
        <div className="text-center justify-center md:text-left mt-8 md:mt-0 md:w-[1000px]">
          <h2
            className={`text-center text-4xl md:text-5xl font-extrabold ${roboto.className} text-purple-600 dark:text-white-300`}
          >
            About Me
          </h2>
          <p
            className={`text-center mt-4 text-lg md:text-xl leading-relaxed text-black-300 ${poppins.className} tracking-wide dark:text-white-200`}
          >
            <span className="font-bold text-4xl text-black-800 dark:text-purple-400">
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
          <div className="mt-6 text-center">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-lg bg-green-600 hover:bg-purple-500 transition-all duration-300 text-lg font-semibold dark:bg-yellow-500 dark:hover:bg-yellow-400"
            >
              Let's Connect
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
