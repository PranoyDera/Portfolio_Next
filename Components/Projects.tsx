import React from "react";
import Project1 from "./Projects/Project1";
import Project2 from "./Projects/Project2";
import Project3 from "./Projects/Project3";
import CarouselWrapper from "./CarouselWrapper";




function Projects() {
  return (
    <>
      <h1 className="text-gray-200 text-5xl font-bold px-5 md:px-20">FEATURED PROJECTS</h1>
        <CarouselWrapper components={[<Project1 />, <Project2 />, <Project3 />]} /> 
    </>
  );
}

export default Projects;
