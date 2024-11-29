import React from "react";

const SocialLinks = () => {
  const allSocialLinks = [
    {
      name: "Linkedin",
      iconUrl: "https://img.icons8.com/doodle/40/000000/linkedin--v2.png",
      profileUrl: "",
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
      profileUrl: "",
    },
    {
      name: "Instagram",
      iconUrl: "https://img.icons8.com/doodle/40/000000/instagram-new--v2.png",
      profileUrl: "",
    },
  ];

  return (
    <div class=" flex md:justify-start">
      {allSocialLinks.map((social) => (
        <a
          href={social?.profileUrl}
          class="mr-5 cursor-pointer mt-8 hover:scale-125"
        >
          <img alt={social?.name} src={social?.iconUrl} />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
