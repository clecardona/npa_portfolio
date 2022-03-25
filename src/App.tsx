import "styles/base.sass";

import Contact from "components/Contact/Contact";
import Portfolio from "components/Projects/Projects";
import Technologies from "components/Technologies/Technologies";
import CV from "components/CV/CV";

import NavigationBar from "./components/NavigationBar";
import Hero from "./components/Hero/Hero";
import Accordion from "./components/Accordion";
import AboutMe from "./components/AboutMe";
import { useTheme } from "state/ThemeProvider";
import { useState, useEffect, useCallback } from "react";
import { getCollection } from "scripts/firebase/fireStore";
import { BoxError, Spinner } from "components/FetchItems";

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

  const [projects, setProjects] = useState([]);
  const [technologies, setTechnologies] = useState([]);

  const LOADING = "loading";
  const READY = "ready";
  const ERROR = "error";

  //Local state
  const [status, setStatus] = useState(LOADING);

  const fetchData: () => void = useCallback(async () => {
    try {
      const listOfProjects = await getCollection("projects");
      const listOfTechnologies = await getCollection("technologies");

      //@ts-ignore
      setProjects(listOfProjects);
      //@ts-ignore
      setTechnologies(listOfTechnologies);
      setStatus(READY);
    } catch (error) {
      setStatus(ERROR);
      console.error(error);
    }
  }, []);

  useEffect(() => fetchData(), [fetchData]);

  return (
    <div className={theme === "dark" ? "App dark" : "App"}>
      {status === LOADING && <Spinner />}
      {status === ERROR && <BoxError />}
      {status === READY && (
        <>
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
              content={<Portfolio projects={projects} />}
              color="#D1CABB"
              id="projects"
            />
            <Accordion
              isOpen={isTechOpen}
              setisOpen={setTechOpen}
              title="Tech stack"
              content={<Technologies technologies={technologies} />}
              color="#8193a1"
              id="tech"
            />
          </div>

          <Contact />
        </>
      )}
    </div>
  );
};
export default App;
