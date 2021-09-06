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
          transitionName={"fade"}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={10}
          transitionAppear={true}
          transitionAppearTimeout={400}
        >
          <h1>
            Hi, I am <strong>Clément</strong>
          </h1>
        </CSSTransitionGroup>
        <h3>A frontend developer from France</h3>
        <img
          className="illustration"
          alt="bunny"
          src="https://clecardona.com/npa/img/rabbit.svg"
        />
      </div>
    </section>
  );
}
