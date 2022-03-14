import Bubble from "./Bubble";

export default function Hero() {
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
          src="https://clecardona.com/npa/img/illustration-portfolio.png"
        />
      </div>
    </section>
  );
}
