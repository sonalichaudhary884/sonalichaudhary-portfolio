import Navbar from "./Navbar";
import "./index.css";

const Home = () => {
  return (
    <>
      <div className="containerhome">
        <Navbar />

        <div className="left">
          <h1>sonali is very beautiful</h1>
          <a href="" className="btn btn-outline-warning">
            <button>Resume</button>
          </a>
        </div>
        <div className="right">
          <img src="" alt="image not found" />
        </div>
      </div>
    </>
  );
};

export default Home;
