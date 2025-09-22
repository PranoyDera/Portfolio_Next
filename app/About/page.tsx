import { Button } from "@/Components/ui/button";
import { GradientText } from "@/Components/ui/shadcn-io/gradient-text";
import { FaFileDownload } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import React from "react";
import Image from "next/image";

function Page() {
  return (
    <section className="text-white min-h-screen bg-black">
      {/* About Section */}
      <div className="max-w-6xl w-full flex flex-col lg:flex-row px-6 sm:px-10 lg:px-20 py-12 justify-center items-center lg:items-start gap-12 lg:gap-40">
        {/* Left: Heading */}
        <div className="flex-shrink-0 text-center lg:text-left">
          <GradientText
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-roboto tracking-tight"
            text="ABOUT ME"
            neon
            gradient="linear-gradient(90deg, #00ff00 0%, #00ffff 25%, #ff00ff 50%, #00ffff 75%, #00ff00 100%)"
          />
        </div>

        {/* Right: Content */}
        <div className="flex flex-col gap-6 w-full lg:w-2/3 text-center lg:text-left">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold font-roboto text-gray-100">
            A Passionate FullStack Developer
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-gray-400 font-mono leading-relaxed">
            I am a passionate Full Stack Developer with experience in building
            dynamic, scalable, and user-friendly web applications. Skilled in
            both front-end and back-end development, I specialize in creating
            seamless digital experiences from concept to deployment.
          </p>

          {/* Call to Action */}
          <div className="mt-4 flex gap-2 justify-between md:justify-start">
            <Button
              className="
                md:text-lg
                text-xs
                inline-flex 
                rounded-2xl 
                bg-gradient-to-r 
                from-green-400 
                via-cyan-400 
                to-pink-500 
                md:px-6 px-3
                md:py-3 py-1
                font-semibold 
                text-black 
                shadow-lg 
                hover:scale-105 
                hover:shadow-pink-500/40 
                transition-transform 
                justify-center 
                items-center 
                font-roboto
                gap-2
              "
            >
              <a href="/PranoyDeraResume.pdf" download={"PranoyDeraResume.pdf"} className="flex gap-2 items-center justify-center">
              DOWNLOAD RESUME
              <FaFileDownload/>
              </a>
            </Button>
             <Button
              className="
                md:text-lg
                text-xs
                inline-flex 
                rounded-2xl 
                bg-gradient-to-r 
                from-green-400 
                via-cyan-400 
                to-pink-500 
                md:px-6 px-3 
                md:py-3 py-1
                font-semibold 
                text-black 
                shadow-lg 
                hover:scale-105 
                hover:shadow-pink-500/40 
                transition-transform 
                font-roboto
                gap-2
              "
            >
             <a href="/PranoyDeraResume.pdf" target="_blank" rel="noopener noreferrer " className="flex gap-2 justify-center items-center">
                 VIEW RESUME
              <FaEye/>
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full border-b border-b-gray-400">
        <div className="flex justify-center items-center py-8 sm:py-12 px-4">
          <Image
            alt="about"
            src={"/aboutIMG.jpg"}
            width={1100}
            height={800}
            className="rounded-md w-full max-w-5xl object-cover"
          />
        </div>
      </div>

      {/* Experience Section */}
      <div className="w-full border-b border-gray-300">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between px-6 sm:px-10 lg:px-20 py-10 gap-10 lg:gap-40">
          {/* Title */}
          <div className="flex-shrink-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-roboto font-bold">
              MY EXPERIENCE
            </h2>
          </div>

          {/* Timeline */}
          <div className="flex flex-col gap-8 w-full lg:w-3/4">
            {/* Experience 1 */}
            <div className="flex flex-col gap-2">
              <div className="flex flex-col sm:flex-row justify-between gap-2">
                <h3 className="text-lg sm:text-xl text-white font-semibold font-nunito">
                  JUNIOR FRONTEND DEVELOPER
                </h3>
                <p className="text-sm sm:text-base font-thin text-gray-300">
                  APRIL 2025 - JULY 2025
                </p>
              </div>
              <p className="text-sm sm:text-base text-gray-300 font-thin">
                Worked as a Junior Frontend Developer at Infomaticae Private
                Ltd. During that time I contributed to ERP systems, API
                integration, and UI design.
              </p>
            </div>

            {/* Experience 2 */}
            <div className="flex flex-col gap-2">
              <div className="flex flex-col sm:flex-row justify-between gap-2">
                <h3 className="text-lg sm:text-xl text-white font-semibold font-nunito">
                  JUNIOR SOFTWARE DEVELOPER
                </h3>
                <p className="text-sm sm:text-base font-thin text-gray-300">
                  JULY 2025 - PRESENT
                </p>
              </div>
              <p className="text-sm sm:text-base text-gray-300 font-thin">
                Working as a Junior Software Developer at Nextzen Minds.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Page;
