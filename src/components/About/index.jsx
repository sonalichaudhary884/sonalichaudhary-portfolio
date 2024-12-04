import { MY_INTRO, TECH_TOOLS } from "../../constants";

import "./style.css";

const About = () => {
  return (
    <div class="bg-neutral-50" id="About">
      <div className="about">
        <h2 class="text-5xl"> About Me</h2>
        <div class="px-11">
          <div>
            <h4 class="text-3xl"> A bit about me</h4>
            <p>{MY_INTRO}</p>
          </div>

          <div>
            <h4 class="text-3xl">Technologies and Tools</h4>
            <p>{TECH_TOOLS}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
