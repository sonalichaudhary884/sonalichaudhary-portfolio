import React from "react";
import ProjectCard from "./ProjectCard";
import "./style.css";

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
    <div class="bg-neutral-50">
      <div id="Project" class="max-w-7xl mx-auto x-4 pb-1">
        <h2 class="text-5xl font-bold text-center project_head">Projects</h2>
        <h4 class="text-3xl font-semibold text-blue-600 project_subhead">
          What i built
        </h4>
        <div className="projects-container">
          {allProject.map((data) => (
            <ProjectCard {...data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
