import About from "./components/About";
import Contact from "./components/Contacts";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Project from "./components/Projects/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
