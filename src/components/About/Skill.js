import React from "react";

const Skill = ({ skill, imageUrl }) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <img alt={skill} src={imageUrl} />
      <p>{skill}</p>
    </div>
  );
};

const SkillContainer = () => {
  const skills = [
    { skill: "React", imageUrl: "www.reacticonurl.com" },
    { skill: "Python", imageUrl: "www.reacticonurl.com" },
    { skill: "C++", imageUrl: "www.reacticonurl.com" },
  ];
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
      {skills.map((skillData) => (
        <Skill skill={skillData?.skill} imageUrl={skillData?.imageUrl} />
      ))}
    </div>
  );
};
export default Skill;
