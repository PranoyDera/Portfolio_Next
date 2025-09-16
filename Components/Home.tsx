import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { TypewriterEffectLoop } from "./ui/typewriter-effect";

const Home: React.FC = () => {
    const words = [
    {
      text: "Hi",
      className:"text-white"
    },
    {
      text: "I",
      className:"text-white",
    },
    {
        text:"Am",
        className:"text-white",
    },
    {
      text: "Pranoy",
      className: "text-blue-500 dark:text-blue-500",
    },
     {
      text: "Dera",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-10 md:px-20 py-16 bg-[#0e0e0e] text-white min-h-screen">
      
      {/* Left Section - Text */}
      <div className="max-w-xl space-y-6">
        <div className="flex flex-col gap-6">
        <TypewriterEffectLoop words={words} />
        <p className="text-gray-400 text-lg ml-12">
          An Indian front-end developer passionate about building
          accessible and user friendly websites.
        </p>
        </div>
        {/* Buttons */}
        <div className="flex items-center gap-4 ml-12">
          <a
            href="#contact"
            className="bg-lime-400 text-black font-medium px-5 py-2 rounded-full flex items-center gap-2 hover:bg-lime-500 transition"
          >
            Contact Me
            <span className="text-lg">▼</span>
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition"
          >
            <FaLinkedin className="text-xl" />
          </a>

          <a
            href="https://github.com"
            target="_blank"
            className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition"
          >
            <FaGithub className="text-xl" />
          </a>
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="mt-10 md:mt-0 md:ml-10">
        <img
          src="/profile.png"
          alt="Robert Garcia"
          className="w-80 md:w-[400px] rounded-2xl object-cover"
        />
      </div>
    </section>
  );
};

export default Home;
