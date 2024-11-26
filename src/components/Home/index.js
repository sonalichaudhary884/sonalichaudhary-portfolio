import Navbar from "./Navbar";
import "./index.css";

const Home = () => {
  return (
    <>
      <div className="containerhome">
        <Navbar />
        <div className="containerimg">
          <div className="left">
            <h1>
              <span>hi i am sonali </span>
              <span> i am front-end developer</span>
            </h1>
            <p> i am working i am front-end full stack developer</p>
            <div className="logo">
              <a href="" class="mr-5 cursor-pointer mt-8 hover:scale-125">
                <img src="https://img.icons8.com/doodle/40/000000/linkedin--v2.png" />
              </a>
              <a href="" class="mr-5 cursor-pointer mt-8 hover:scale-125">
                <img src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/40/000000/external-stack-overflow-is-a-question-and-answer-site-for-professional-logo-color-tal-revivo.png" />
              </a>
              <a href="" class="mr-5 cursor-pointer mt-8 hover:scale-125">
                <img src="https://img.icons8.com/doodle/40/000000/github--v1.png" />
              </a>
              <a href="" class="mr-5 cursor-pointer mt-8 hover:scale-125">
                <img src="https://img.icons8.com/doodle/40/000000/instagram-new--v2.png" />
              </a>
            </div>
            <div>
              {" "}
              <a href="" className="btn btn-outline-warning">
                <button>Resume</button>
              </a>
            </div>
          </div>
          <div className="right">
            <img
              src="https://aakash-sharma.netlify.app/static/media/webdev.4d72dbba32efee3890cef9bcacce7aa7.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
