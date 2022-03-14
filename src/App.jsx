import "./styles/base.sass";

import Contact from "./components/Contact/Contact";
import Portfolio from "./components/Porfolio/Portfolio";
import Technologies from "./components/Technologies/Technologies";

import NavigationBar from "./components/NavigationBar";
import Hero from "./components/Hero";
import Accordion from "./components/Accordion";
import AboutMe from "./components/AboutMe";

export default function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Hero />
      <div className="accordions">
        <Accordion title="About me" content={<AboutMe />} />
        <Accordion title="Projects" content={<Portfolio />} color="#D1CABB" />
        <Accordion
          title="Tech stack"
          content={<Technologies />}
          color="#8193a1"
        />
      </div>

      <Contact />
    </div>
  );
}
