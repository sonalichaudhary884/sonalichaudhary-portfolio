import SocialLinks from "../SocialLinks";
import "./style.css";

const Home = () => {
  return (
    <div className="containerhome" id="Home">
      <div className="inner_container">
        <div className="container_left">
          <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span class="block text-black">Hi, i am sonali </span>
            <span class="block text-blue-500 z-0 lg:inline">
              {" "}
              Front-end developer
            </span>
          </h1>
          <p class="mt-3 text-base text-black sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            {" "}
            i am working i am front-end full stack developer
          </p>
          <SocialLinks />
          <div class="mt-5 sm:mt-8 sm:flex lg-justify-start">
            <div class="mt-3 sm:mt-0 cursor-pointer w-1/2 ">
              <a
                href="www.google.com"
                class="w-full flex items-center justify-center border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-200 md:py-4 md:text-lg md:px-10"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
        <div className="container_right">
          <img
            src="https://aakash-sharma.netlify.app/static/media/webdev.4d72dbba32efee3890cef9bcacce7aa7.svg"
            alt="banner_img"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
