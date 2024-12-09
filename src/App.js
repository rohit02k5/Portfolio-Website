import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Social from "./Social";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Interests from "./components/Interests"
function App() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <About/>
      <Social/>
      <Projects/>
      <Skills/>
      <Interests/>
      <Contact/>
    </div>
  );
}

export default App;

