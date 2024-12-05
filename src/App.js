import { Fragment } from "react";
import About from "./components/About";
import Contact from "./components/Contacts";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Project from "./components/Projects/Projects";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Home />
      <About />
      <Project />
      <Contact />
    </Fragment>
  );
}

export default App;
