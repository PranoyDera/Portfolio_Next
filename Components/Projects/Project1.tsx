import React from "react";
import { Card } from "../Card";
import { SiExpress } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";




function Project1() {
  return (
    <div className="w-full px-5 md:px-20 justify-center items-center">
      {/* Project 1:Pro-Cart */}
      <div className="flex md:flex-row flex-col md:justify-between items-center md:gap-20 gap-0 md:h-[600px] h-[1400px]">
        <Card
          image="/Pro-Cart.jpg"
          heading="Pro-Cart"
          description="A Ecommerce Website"
          width="md:w-[28rem] w-[350px]"
          height="md:h-[30rem] h-[500px]"
          link="https://github.com/PranoyDera/Ecommerce-Website"
          buttonText="Live Demo"
          buttonLink="https://pro-cart-zeta.vercel.app"
        />
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h1 className="text-white text-2xl font-semibold">
              E Commerce Website For Shopping Purposes:
            </h1>
            <p className="text-lg text-gray-300">
              A full-featured e-commerce web application built using the MERN
              stack (MongoDB, Express.js, Next.js, Node.js,tailwind css). The platform allows
              users to browse products, add items to their cart, manage
              addresses, and securely place orders. It includes user
              authentication with JWT, product search, order tracking, and a
              smooth checkout flow integrated with a payment gateway. On the
              admin side, it provides product and order management features,
              enabling efficient inventory and sales handling. The UI is fully
              responsive and designed with modern styling for an engaging
              shopping experience.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-bold text-gray-300 pb-2 border-b-1 border-gray-400">
              PROJECT INFO
            </h2>
            <div className="flex justify-between text-sm text-gray-300 pb-2 border-b-1 border-gray-400">
              <h3>
                YEAR
              </h3>
              <p>
                2025
              </p>
            </div>
            <div className="flex justify-between text-sm text-gray-300 pb-2 border-b-1 border-gray-400">
              <h3>
                ROLE
              </h3>
              <p>
                FULL STACK DEVELOPER
              </p>
            </div>
            <div className="flex justify-between text-sm text-gray-300 pb-2 border-b-1 border-gray-400">
              <h3>
                TECHNOLOGIES USED
              </h3>
              <p className="flex gap-2">
                <SiExpress className="border-1 rounded-full text-2xl p-1"/>
                <SiNextdotjs className="text-2xl"/>
                <SiMongodb className="border-1 rounded-full text-2xl p-1"/>
                <RiTailwindCssFill className="border-1 rounded-full text-2xl p-1"/>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project1;
