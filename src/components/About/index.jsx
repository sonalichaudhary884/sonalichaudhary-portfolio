import { MY_INTRO, TECH_TOOLS } from "../../constants";
import Skills from "../Skills";
import "./style.css";

const About = () => {
  return (
    <div id="About" className="about">
      <h2 class="text-5xl font-bold text-center about1">About Me</h2>
      <div>
        <h4 class="about-header text-3xl about2"> A bit about me</h4>
        <p className="about-summary1">{MY_INTRO}</p>
      </div>

      <div>
        <h4 class="about-header text-3xl about_tech">Technologies and Tools</h4>
        <p className="about-summary2">{TECH_TOOLS}</p>
      </div>

      <Skills />
    </div>
  );
};

export default About;
