import { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";

export default function Hero() {
  const [inProp, setInProp] = useState(false);

  useEffect(() => {
    setInProp(true);
  }, []);

  return (
    <section id="hero" className="section-hero">
      <img
        className="bg"
        alt="bg"
        src="https://clecardona.com/npa/img/bg.png"
      />
      <div className="layout">
        <CSSTransition
          in={inProp}
          timeout={400}
          classNames="title"
          className="title"
        >
          <h1>
            Hi, I am <strong>Clément</strong>
          </h1>
        </CSSTransition>
        <CSSTransition
          in={inProp}
          timeout={400}
          classNames="subtitle"
          className="subtitle"
        >
          <div>
            <h3>Frontend developer from France</h3>
            <h3 style={{ fontWeight: 200 }}>Living in Stockholm, Sweden</h3>
          </div>
        </CSSTransition>
        <img
          className="illustration"
          alt="illustrattion"
          src="https://clecardona.com/npa/img/illustration-portfolio.png"
        />
      </div>
    </section>
  );
}
