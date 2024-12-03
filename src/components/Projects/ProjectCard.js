const ProjectCard = ({ imgUrl, name, description }) => {
  return (
    <div class="max-w-xl bg-white rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border=gray-700 my-8">
      <a href="hello">
        <img class=" rounded-t-lg w-full" src={imgUrl} />
      </a>
      <div>
        <a href="helo">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
        </a>
      </div>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {description}
      </p>
    </div>
  );
};
export default ProjectCard;
