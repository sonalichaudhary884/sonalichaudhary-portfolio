import { MY_INTRO } from "../../constants";
import "./style.css";

const About = () => {
  return (
    <div class="bg-neutral-800">
      <div className="about">
        <h2 class="text-5xl"> About Me</h2>
        <div class="px-11">
          <div>
            <h4 class="text-3xl"> A bit about me</h4>
            <p>{MY_INTRO}</p>
          </div>

          <div>
            <h4 class="text-3xl">Technologies and Tools</h4>
            <p>
              Using a combination of cutting-edge technologies and reliable
              open-source software I build user-focused, performant apps and
              websites for smartphones, tablets, and desktops.
            </p>
          </div>

          <div class="flex flex-wrap mt-8 flex flex-wrap justify-between ">
            <div
              className="skill"
              class="py-2 px-4 bg-gray-50 md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-125 cursor-pointer md:w-48 w-40"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
