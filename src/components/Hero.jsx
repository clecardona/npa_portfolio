import React from "react";
import { CSSTransitionGroup } from "react-transition-group";

export default function Hero() {
  return (
    <section id="hero" className="section-hero">
      <img
        className="bg"
        alt="bg"
        src="https://clecardona.com/npa/img/bg.png"
      />
      <div className="layout">
        <CSSTransitionGroup
          className="title"
          transitionName={"fade-down"}
          transitionAppear={true}
          transitionAppearTimeout={400}
        >
          <h1>
            Hi, I am <strong>Clément</strong>
          </h1>
        </CSSTransitionGroup>
        <CSSTransitionGroup
          className="subtitle"
          transitionName={"fade-up"}
          transitionAppear={true}
          transitionAppearTimeout={400}
        >
          <h3>A frontend developer from France</h3>
        </CSSTransitionGroup>
        <img
          className="illustration"
          alt="illustrattion"
          src="https://clecardona.com/npa/portfolio/img/cool_guy.svg"
        />
      </div>
    </section>
  );
}
