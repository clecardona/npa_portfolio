/**
 * Perfect component organization
 * Just reorder the stuff similar on how you see in the IDE sidebar
 * folders go first sorted in alphabetical order.
 * and files at the same level go at the bottom.-OK
 */
import "./styles/base.scss";

import Contact from "./components/Contact/Contact";
import Portfolio from "./components/Porfolio/Portfolio";
import Technologies from "./components/Technologies/Technologies";

import About from "./components/About";
import NavigationBar from "./components/NavigationBar";
import Hero from "./components/Hero";

export default function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Hero />
      <About />
      <Portfolio />
      <Technologies />
      <Contact />
    </div>
  );
}
