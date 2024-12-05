import { MY_INTRO, TECH_TOOLS } from "../../constants";
import Skills from "../Skills";
import "./style.css";

const About = () => {
  return (
    <div id="About">
      <div className="about">
        <h2 class="text-5xl font-bold px-4 md:px-0 text-center"> About Me</h2>
        <div>
          <h4 class="about-header text-3xl"> A bit about me</h4>
          <p className="about-summary">{MY_INTRO}</p>
        </div>

        <div>
          <h4 class="about-header text-3xl">Technologies and Tools</h4>
          <p className="about-summary">{TECH_TOOLS}</p>
        </div>

        <Skills />
      </div>
    </div>
  );
};

export default About;
