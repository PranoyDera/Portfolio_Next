import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { TypewriterEffectLoop } from "./ui/typewriter-effect";
import { Vortex } from "./ui/shadcn-io/vortex";
import Image from "next/image";

const Home: React.FC = () => {
  const words = [
    { text: "HI,", className: "text-white text-4xl md:text-5xl" },
    { text: "I", className: "text-white text-4xl md:text-5xl" },
    { text: "AM", className: "text-white text-4xl md:text-5xl" },
    { text: "PRANOY", className: "text-blue-500 dark:text-blue-500 text-4xl md:text-5xl" },
    { text: "DERA", className: "text-blue-500 dark:text-blue-500 text-4xl md:text-5xl" },
  ];

  return (
    <Vortex
      backgroundColor="black"
      particleCount={700}
      baseHue={220}
      baseSpeed={0.0}
      rangeSpeed={1.5}
      className="flex items-center justify-center overflow-x-hidden h-full w-full inset-0 z-0"
    >
      <section className="flex flex-col md:flex-row md:items-center justify-between px-4 md:px-20 py-16 text-white h-full w-full">
        {/* Left Section - Text */}
        <div className="w-full md:w-2/3 flex flex-col gap-6">
          <TypewriterEffectLoop words={words} />
          <p className="text-gray-400 md:text-lg text-sm font-[mono]">
            An Indian front-end developer passionate about building
            accessible and user-friendly websites.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4 mt-4">
            <a
              href="#contact"
              className="bg-lime-400 text-black font-medium px-5 py-2 rounded-full flex items-center gap-2 hover:bg-lime-500 transition"
            >
              Contact Me
              <span className="text-lg">▼</span>
            </a>

            <a
              href="https://www.linkedin.com/in/pranoy-dera-7b338832b"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition"
            >
              <FaLinkedin className="text-xl" />
            </a>

            <a
              href="https://github.com/PranoyDera"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition"
            >
              <FaGithub className="text-xl" />
            </a>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="mt-10 md:mt-0 md:ml-10 w-full md:w-1/3 flex justify-center">
          {/* Uncomment to use Image */}
          {/* <Image
            src="/pic1.png"
            width={400}
            height={400}
            alt="profile pic"
            className="rounded-lg object-cover w-3/4 md:w-full"
          /> */}
        </div>
      </section>
    </Vortex>
  );
};

export default Home;
