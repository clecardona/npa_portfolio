import "styles/base.sass";

import Contact from "./components/Contact/Contact";
import Portfolio from "./components/Projects/Projects";
import Technologies from "./components/Technologies/Technologies";

import NavigationBar from "./components/NavigationBar";
import Hero from "./components/Hero/Hero";
import Accordion from "./components/Accordion";
import AboutMe from "./components/AboutMe";
import { useTheme } from "state/ThemeProvider";

const App = (): JSX.Element => {
  // Global state
  const {
    isAboutOpen,
    setAboutOpen,
    isProjectsOpen,
    setProjectsOpen,
    isTechOpen,
    setTechOpen,
    theme,
  } = useTheme();

  return (
    <div className={theme === "dark" ? "App dark" : "App"}>
      <NavigationBar />
      <Hero />
      <div className="accordions">
        <Accordion
          isOpen={isAboutOpen}
          setisOpen={setAboutOpen}
          title="About me"
          content={<AboutMe />}
          color="7A8C99"
          id="about"
        />
        <Accordion
          isOpen={isProjectsOpen}
          setisOpen={setProjectsOpen}
          title="Projects"
          content={<Portfolio />}
          color="#D1CABB"
          id="projects"
        />
        <Accordion
          isOpen={isTechOpen}
          setisOpen={setTechOpen}
          title="Tech stack"
          content={<Technologies />}
          color="#8193a1"
          id="tech"
        />
      </div>

      <Contact />
    </div>
  );
};
export default App;
