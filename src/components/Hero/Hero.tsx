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
          alt="illustrattion"
          src="https://firebasestorage.googleapis.com/v0/b/npa-portfolio.appspot.com/o/illustration-portfolio.png?alt=media&token=e27b56d0-ab40-469b-af3e-19e7a07a9c05"
        />
      </div>
    </section>
  );
};
export default Hero;
