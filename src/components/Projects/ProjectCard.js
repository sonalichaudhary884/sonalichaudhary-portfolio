const ProjectCard = () => {
  return (
    <div class="max-w-xl bg-white rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border=gray-700 my-8">
      <a href="hello">
        <img
          class=" rounded-t-lg w-full"
          src="	https://images.wallpaperscraft.com/image/single/system_scheme_blue_blueprint_10428_300x168.jpg"
        />
      </a>
      <div>
        <a href="helo">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {" "}
            Noteworthy technology acquisitions 2023
          </h5>
        </a>
      </div>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        "Here are the biggest enterprise technology acquisitions of 2021 so far,
        in reverse chronological order."
      </p>
    </div>
  );
};
export default ProjectCard;
