import React from "react";
import "./style.css";

const SocialLinks = () => {
  const allSocialLinks = [
    {
      name: "Linkedin",
      iconUrl: "https://img.icons8.com/doodle/40/000000/linkedin--v2.png",
      profileUrl:
        "https://www.linkedin.com/in/sonalichaudhary884?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "StackOverflow",
      iconUrl:
        "https://img.icons8.com/external-tal-revivo-color-tal-revivo/40/000000/external-stack-overflow-is-a-question-and-answer-site-for-professional-logo-color-tal-revivo.png",
      profileUrl: "",
    },
    {
      name: "Github",
      iconUrl: "https://img.icons8.com/doodle/40/000000/github--v1.png",
      profileUrl: "https://github.com/sonalichaudhary884",
    },
    {
      name: "Instagram",
      iconUrl: "https://img.icons8.com/doodle/40/000000/instagram-new--v2.png",
      profileUrl: "",
    },
  ];

  return (
    <div className="social-links">
      {allSocialLinks.map((social) => (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={social?.profileUrl}
          class="socialink hover:scale-125"
        >
          <img alt={social?.name} src={social?.iconUrl} />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
