import "./styles/base.sass";

import Contact from "./components/Contact/Contact";
import Portfolio from "./components/Porfolio/Portfolio";
import Technologies from "./components/Technologies/Technologies";

import NavigationBar from "./components/NavigationBar";
import Hero from "./components/Hero";
import Accordion from "./components/Accordion";
import AboutMe from "./components/AboutMe";
import { useTheme } from "state/ThemeProvider";

export default function App() {
  const {
    isAboutOpen,
    setAboutOpen,
    isProjectsOpen,
    setProjectsOpen,
    isTechOpen,
    setTechOpen,
  } = useTheme();

  return (
    <div className="App">
      <NavigationBar />
      <Hero />
      <div className="accordions">
        <Accordion
          isOpen={isAboutOpen}
          setisOpen={setAboutOpen}
          title="About me"
          content={<AboutMe />}
        />
        <Accordion
          isOpen={isProjectsOpen}
          setisOpen={setProjectsOpen}
          title="Projects"
          content={<Portfolio />}
          color="#D1CABB"
        />
        <Accordion
          isOpen={isTechOpen}
          setisOpen={setTechOpen}
          title="Tech stack"
          content={<Technologies />}
          color="#8193a1"
        />
      </div>

      <Contact />
    </div>
  );
}
