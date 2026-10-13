import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Publications from "./components/Publications";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";

// Navbar, hero, footer and all above-fold interactivity are static HTML in
// index.html (paint before JS loads — that's what makes LCP fast).
export default function App() {
  return (
    <>
      <About />
      <Experience />
      <Projects />
      <Publications />
      <Skills />
      <Education />
      <Achievements />
      <Contact />
    </>
  );
}
