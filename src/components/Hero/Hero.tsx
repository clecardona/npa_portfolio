import Bubble from "./Bubble";

const Hero = (): JSX.Element => {
  return (
    <section id="hero" className="section-hero">
      <img
        className="bg"
        alt="bg"
        src="https://clecardona.com/npa/img/bg.png"
      />
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
