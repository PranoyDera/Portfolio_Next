"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

interface CardProps {
  image: string;
  heading: string;
  description: string;
  width?: string;   // e.g. "w-[30rem]"
  height?: string;  // e.g. "h-[20rem]"
  link?: string;    // for "Try now →"
  buttonText?: string; 
  buttonLink?: string; // NEW: for the button
}

export const Card: React.FC<CardProps> = ({
  image,
  heading,
  description,
  width = "w-[30rem]",
  height = "h-auto",
  link = "#",
  buttonText = "Sign up",
  buttonLink = "#",
}) => {
  return (
    <CardContainer className="inter-var">
      <CardBody
        className={`bg-gray-50 relative group/card 
          dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] 
          dark:bg-black dark:border-white/[0.2] border-black/[0.1] 
          rounded-xl p-6 border ${width} ${height}`}
      >
        {/* Heading */}
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {heading}
        </CardItem>

        {/* Description */}
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {description}
        </CardItem>

        {/* Image */}
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={image}
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt={heading}
          />
        </CardItem>

        {/* Footer Buttons */}
        <div className="flex justify-between items-center mt-20">
          {/* Left link */}
          <CardItem
            translateZ={20}
            as="a"
            href={link}
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Go To Github
          </CardItem>

          {/* Right dynamic button link */}
          <CardItem
            translateZ={20}
            as="a"
            href={buttonLink}
            target="_blank"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            {buttonText}
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};
