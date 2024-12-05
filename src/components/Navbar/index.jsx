import "./style.css";

const Navbar = () => {
  return (
    <nav>
      <h1 className="brand_title text-blue-500">Sonali</h1>
      <div>
        <ul id="navbar">
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Project">Project</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
