import React from "react";

const SingleSkill = ({ skill, imageUrl }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        background: "#ccc",
        border: "1px solid black",
        width: "100px",
      }}
    >
      <img width={"50px"} height="50px" alt={skill} src={imageUrl} />
      <p style={{ fontSize: "14px", fontWeight: "600" }}>{skill}</p>
    </div>
  );
};

const Skills = () => {
  const skills = [
    {
      skill: "React",
      imageUrl:
        "https://cdn.vectorstock.com/i/2000v/78/57/react-icon-in-a-hexagon-vector-36587857.avif",
    },
    {
      skill: "Python",
      imageUrl: "https://banner2.cleanpng.com/20180412/kye/avffc0w7m.webp",
    },
    {
      skill: "C++",
      imageUrl: "https://banner2.cleanpng.com/20180412/kye/avffc0w7m.webp",
    },
    {
      skill: "C++",
      imageUrl: "https://banner2.cleanpng.com/20180412/kye/avffc0w7m.webp",
    },
    {
      skill: "C++",
      imageUrl: "https://banner2.cleanpng.com/20180412/kye/avffc0w7m.webp",
    },
    {
      skill: "C++",
      imageUrl: "https://banner2.cleanpng.com/20180412/kye/avffc0w7m.webp",
    },
    {
      skill: "C++",
      imageUrl: "https://banner2.cleanpng.com/20180412/kye/avffc0w7m.webp",
    },
    {
      skill: "Python",
      imageUrl: "https://banner2.cleanpng.com/20180412/kye/avffc0w7m.webp",
    },
    {
      skill: "Golang",
      imageUrl: "https://banner2.cleanpng.com/20180412/kye/avffc0w7m.webp",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        // justifyContent: "space-between",
        gap: "16px",
      }}
    >
      {skills.map((skillData) => (
        <SingleSkill skill={skillData?.skill} imageUrl={skillData?.imageUrl} />
      ))}
    </div>
  );
};

export default Skills;
