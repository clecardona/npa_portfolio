import "./styles/base.scss";
import NavigationBar from "./components/NavigationBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Porfolio/Portfolio";
import Technologies from "./components/Technologies/Technologies";
import Contact from "./components/Contact/Contact";

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
