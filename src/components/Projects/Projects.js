import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const allProject = [
    {
      imgUrl:
        "https://images.wallpaperscraft.com/image/single/system_scheme_blue_blueprint_10428_300x168.jpg",
      name: "Noteworthy technology acquisitions 2023",
      description:
        "Here are the biggest enterprise technology acquisitions of 2021 so far in reverse chronological order.",
    },
    {
      imgUrl:
        "https://images.wallpaperscraft.com/image/single/system_scheme_blue_blueprint_10428_300x168.jpg",
      name: "Noteworthy technology acquisitions 2023",
      description:
        "Here are the biggest enterprise technology acquisitions of 2021 so far in reverse chronological order.",
    },
  ];
  return (
    <div class="bg-gray-900 text-white">
      <div class="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4 pt-24 pb-1">
        <h2 class="text-5xl font-bold px-4 md:px-8 text-center">Projects</h2>
        <h4 class="text-3xl mt-16 font-semibold text-blue-600">What i built</h4>
        {allProject.map((data) => (
          <ProjectCard {...data} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
