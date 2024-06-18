import "./App.css";
import Cursor from "./Components/Cursor/Cursor";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import ProjectsSlider from "./Components/ProjectsSlider/ProjectsSlider";
import About from "./Components/About/About";
import Testemonials from "./Components/Testemonials/Testemonials";
import Contact from "./Components/Contact/Contact";
function App() {
  return (
    <>
      <div className="background" id="background">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <Cursor />
      <Navbar />
      <Hero />
      <ProjectsSlider />
      <About />
      <Testemonials/>
      <Contact/>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    
    
    </>
  );
}

export default App;
