import React from "react";
import Project1 from "./Projects/Project1";
import Project2 from "./Projects/Project2";
import Project3 from "./Projects/Project3";
import CarouselWrapper from "./CarouselWrapper";
import { GradientText } from "./ui/shadcn-io/gradient-text";

function Projects() {
  return (
    <div className="w-full px-4 md:px-20 py-16" id="work">
      {/* Heading */}
      <div className="w-full flex md:justify-start md:items-start justify-center md:mb-12 whitespace-nowrap">
        <GradientText
          className="md:text-6xl text-4xl font-bold font-[roboto]"
          text="FEATURED PROJECTS"
        />
      </div>

      {/* Carousel */}
      <div className="w-full">
        <CarouselWrapper
          components={[
            <Project1 key="project-1" />,
            <Project2 key="project-2" />,
            <Project3 key="project-3" />,
          ]}
          className="w-full"
        />
      </div>
    </div>
  );
}

export default Projects;
