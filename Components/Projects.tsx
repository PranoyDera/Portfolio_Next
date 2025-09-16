import React from "react";
import { Card } from "./Card";

function Projects() {
  return (
    <div className="w-full px-20">
      <h1 className="text-gray-200 text-5xl font-bold">FEATURED PROJECTS</h1>
      {/* Project 1:Pro-Cart */}
      <div className="flex justify-between">
        <Card
          image="/Pro-Cart.jpg"
          heading="Pro-Cart"
          description="A Ecommerce Website"
          width="w-[28rem]"
          height="h-[30rem]"
          link="https://github.com/PranoyDera/Ecommerce-Website"
          buttonText="Live Demo"
          buttonLink="https://pro-cart-zeta.vercel.app"
        />
        <div className="">
            <h1 className="text-white text-2xl">E Commerce Website For Shopping Purposes</h1>
        </div>
        </div>
    </div>
  );
}

export default Projects;
