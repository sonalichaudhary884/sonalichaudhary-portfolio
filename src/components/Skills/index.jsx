import React from "react";
import "./style.css";

const SingleSkill = ({ skill, imageUrl }) => {
  return (
    <div className="skill-container">
      <img alt={skill} src={imageUrl} />
      <p>{skill}</p>
    </div>
  );
};

const Skills = () => {
  const skills = [
    {
      skill: "React",
      imageUrl:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
    },
    {
      skill: "HTML",
      imageUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      skill: "CSS",
      imageUrl:
        "	https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg",
    },
    {
      skill: "Bootstrap",
      imageUrl:
        "	https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg",
    },
    {
      skill: "Tailwind Css",
      imageUrl:
        "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
    },

    {
      skill: "Mysql",
      imageUrl:
        "	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSMk3C5ZUO0HUurI0wYU-yK6gpjOwXpwshxA&s",
    },
    {
      skill: "Git",
      imageUrl:
        "	https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg",
    },
  ];

  return (
    <div className="skills-container">
      {skills.map((skillData) => (
        <SingleSkill skill={skillData?.skill} imageUrl={skillData?.imageUrl} />
      ))}
    </div>
  );
};

export default Skills;
