import "./About.css";

const About = () => {
  return (
    <div class="bg-neutral-50">
      <div className="about">
        <h2 class="text-5xl font-bold px-4 md:px-0 text-center"> About Me</h2>
        <div class="px-11">
          <div>
            <h4 class="text-3xl"> A bit about me</h4>
            <p>
              "i'm a self-taught web developer and Mobile App Developer with
              experience in designing new features from ideation to production,
              implementation of wireframes and design flows into high
              performance software applications. I take into consideration the
              user experience while writing reusable and efficient code. I
              passionately combine good design, technology, and innovation in
              all my projects, which I like to accompany from the first idea to
              release. Currently, I'm focused on the backend development."
            </p>
          </div>

          <Skill />
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
