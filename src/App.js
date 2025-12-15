import NavBar from "./components/NavBar";
import TerminalHero from "./components/TerminalHero";
import Social from "./Social";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";
import KeyCourses from "./components/KeyCourses";
import Contact from "./components/Contact";
import GradientBackground from "./components/GradientBackground";

function App() {
  return (
    <div className="relative z-0">
      <GradientBackground />
      <NavBar />
      <TerminalHero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Achievements />
      <KeyCourses />
      <Contact />
      <Social />
    </div>
  );
}

export default App;
