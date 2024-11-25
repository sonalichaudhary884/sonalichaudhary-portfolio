import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <img
          src="https://aakash-sharma.netlify.app/static/media/cloudBg.f28b5c6961fd82be839c.png"
          alt="image"
        />

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
