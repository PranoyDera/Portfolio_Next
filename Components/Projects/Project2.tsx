import React from "react";
import { Card } from "../Card";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

function Project2() {
  return (
    <div className="w-full px-5 md:px-20 justify-center items-center">
      {/* Project 1:Pro-Cart */}
      <div className="flex md:flex-row flex-col justify-between gap-20">
        <Card
          image="/Pro-Blog.jpg"
          heading="Pro-Blog"
          description="A Blog Publishing Website"
          width="md:w-[28rem] w-auto"
          height="md:h-[30rem] h-auto"
          link="https://github.com/PranoyDera/Ecommerce-Website"
          buttonText="GitHub Link"
          buttonLink="https://github.com/PranoyDera/Ecommerce-Website"
        />
        <div className="md:mt-20 flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h1 className="text-white text-2xl font-semibold">
              Blog Publishing Website:
            </h1>
            <p className="text-lg text-gray-300">
              A dynamic and interactive blogging platform built using the MERN
              stack (MongoDB, Express.js, React, Node.js). The application
              allows users to create, read, update, and delete blog posts with a
              clean and intuitive interface. It features user authentication,
              comment sections for engagement, and a responsive design for
              seamless access across devices.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-bold text-gray-300 pb-2 border-b-1 border-gray-400">
              PROJECT INFO
            </h2>
            <div className="flex justify-between text-sm text-gray-300 pb-2 border-b-1 border-gray-400">
              <h3>YEAR</h3>
              <p>2024</p>
            </div>
            <div className="flex justify-between text-sm text-gray-300 pb-2 border-b-1 border-gray-400">
              <h3>ROLE</h3>
              <p>FULL STACK DEVELOPER</p>
            </div>
            <div className="flex justify-between text-sm text-gray-300 pb-2 border-b-1 border-gray-400">
              <h3>TECHNOLOGIES USED</h3>
              <p className="flex gap-2">
                <SiExpress className="border-1 rounded-full text-2xl p-1" />
                <FaReact className="border-1 rounded-full text-2xl p-1" />
                <SiMongodb className="border-1 rounded-full text-2xl p-1" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project2;
