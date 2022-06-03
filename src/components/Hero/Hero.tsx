import { useTheme } from "state/ThemeProvider";
import Bubble from "./Bubble";
import Stars from "./Stars";

const Hero = (): JSX.Element => {
  const { theme } = useTheme();
  const isDark = theme == "dark";
  return (
    <section id="hero" className="section-hero">
      <img
        className="bg"
        alt="bg"
        src="https://clecardona.com/npa/img/bg.png"
      />
      {isDark && <Stars />}
      <div className="layout">
        <Bubble />
        <img
          className="illustration"
          alt="illustration"
          src="https://clecardona.com/npa/portfolio/img/illustration-portfolio.png"
        />
      </div>
    </section>
  );
};
export default Hero;
