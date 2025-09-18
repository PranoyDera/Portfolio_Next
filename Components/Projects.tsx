import React from "react";
import Project1 from "./Projects/Project1";
import Project2 from "./Projects/Project2";
import Project3 from "./Projects/Project3";
import CarouselWrapper from "./CarouselWrapper";
import { TextHoverEffect } from "./ui/text-hover-effect";




function Projects() {
  return (
    <div>
      <div className="w-full">
        <TextHoverEffect
                text="FEATURED PROJECTS"
                height={150}
                width={750}
                fontSize="text-4xl"
              />
      </div>
        <CarouselWrapper components={[<Project1 />, <Project2 />, <Project3 />]} /> 
    </div>
  );
}

export default Projects;
