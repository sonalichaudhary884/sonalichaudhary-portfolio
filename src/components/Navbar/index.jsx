import "./style.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar_container">
        <h1 className="brand_title text-blue-500">Sona</h1>
        <ul className="navbar_list">
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
