import React from "react";
import { Button } from "./ui/button";
import { TextHoverEffect } from "./ui/text-hover-effect";
import Link from "next/link";
import { GradientText } from "./ui/shadcn-io/gradient-text";

function About() {
  return (
    <div className="w-full h-full">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-10 px-6 md:px-12 lg:px-18 py-10">
        {/* Left section */}
        <div className="w-full lg:w-[600px] h-auto lg:h-[650px] flex items-start justify-center lg:justify-start">
               <GradientText className="text-4xl md:text-6xl font-bold mb-4 md:mt-8 font-[roboto]" text="ABOUT ME" />
        </div>

        {/* Right section */}
        <div className="flex flex-col gap-6 w-full lg:w-[800px]">
          <h3 className="text-2xl md:text-3xl font-semibold text-white text-center lg:text-left font-[roboto]">
            A Passionate FullStack Developer
          </h3>
          <p className="text-base md:text-lg text-gray-300 text-center lg:text-left font-[mono]">
            I am a passionate Full Stack Developer with experience in building
            dynamic, scalable, and user-friendly web applications. Skilled in
            both front-end and back-end development, I specialize in creating
            seamless digital experiences from concept to deployment.
            <br />
            <br />
            <span className="font-semibold text-white">Frontend:</span>{" "}
            Proficient in React.js, Next.js, HTML, CSS, and JavaScript/TypeScript
            for crafting interactive and responsive user interfaces.
            <br />
            <span className="font-semibold text-white">Backend:</span>{" "}
            Experienced with Node.js, Express.js, and RESTful APIs to build robust
            and secure server-side applications.
            <br />
            <span className="font-semibold text-white">Database:</span> Strong
            knowledge of MongoDB and SQL databases for efficient data management
            and integration.
            <br />
            <span className="font-semibold text-white">Development Practices:</span>{" "}
            Familiar with Git/GitHub, deployment workflows, authentication
            systems, and best coding practices for clean, maintainable code.
            <br />
            <br />
            I enjoy problem-solving, learning new technologies, and building
            applications that make an impact. My focus is on delivering scalable
            solutions, intuitive UI/UX, and efficient backend systems that bring
            projects to life.
          </p>

          <div className="flex justify-center lg:justify-start">
            <Button className="w-[160px] sm:w-[200px] whitespace-nowrap bg-lime-400 hover:bg-lime-600 text-black cursor-pointer">
             <Link href={"/About"}>
              MORE ABOUT ME
             </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
