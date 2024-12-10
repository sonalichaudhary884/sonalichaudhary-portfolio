const ProjectCard = ({ imgUrl, name, description }) => {
  return (
    <div class="bg-white rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border=gray-700 my-8 project_card">
      <a href="www.google.com">
        <img alt="img" class=" rounded-t-lg w-full" src={imgUrl} />
      </a>
      <div className="p-4">
        <a href="www.google.com">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
      </div>
    </div>
  );
};
export default ProjectCard;
