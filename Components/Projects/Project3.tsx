import React from "react";
import { Card } from "../Card";
import { FaReact } from "react-icons/fa";

function Project3() {
  return (
    <div className="w-full px-5 md:px-20 justify-center items-center">
      {/* Project 1:Pro-Cart */}
      <div className="flex md:flex-row flex-col md:justify-between items-center md:gap-20 gap-0 h-[1400px] md:h-[600px]">
        <Card
          image="/Pro-Text.jpg"
          heading="Pro-Text"
          description="A Text Editor Website"
          width="md:w-[28rem] w-auto"
          height="md:h-[30rem] h-[500px]"
          link="https://github.com/PranoyDera/pro-blog-react"
          buttonText="Live Demo"
          buttonLink="https://pranoydera.github.io/pro-blog-react/"
        />
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h1 className="text-white text-2xl font-semibold font-[roboto]">
              A Simple Text Editor Website.
            </h1>
            <p className="text-lg text-gray-300 font-[mono]">
              A simple yet efficient text editor built with React.js, designed
              for writing and editing text directly in the browser. The editor
              provides a clean and distraction-free interface with essential
              text formatting features, making it lightweight and user-friendly.
              It demonstrates the use of React state management, reusable
              components, and event handling to deliver real-time text editing
              functionality. The UI is fully responsive, ensuring smooth
              performance across devices.
            </p>
          </div>
          <div className="flex flex-col gap-4 font-[mono]">
            <h2 className="text-lg font-bold text-gray-300 pb-2 border-b-1 border-gray-400">
              PROJECT INFO
            </h2>
            <div className="flex justify-between text-sm text-gray-300 pb-2 border-b-1 border-gray-400">
              <h3>YEAR</h3>
              <p>2024</p>
            </div>
            <div className="flex justify-between text-sm text-gray-300 pb-2 border-b-1 border-gray-400">
              <h3>ROLE</h3>
              <p>FRONT END DEVELOPER</p>
            </div>
            <div className="flex justify-between text-sm text-gray-300 pb-2 border-b-1 border-gray-400">
              <h3>TECHNOLOGIES USED</h3>
              <p className="flex gap-2">
                <FaReact className="border-1 rounded-full text-2xl p-1" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project3;
