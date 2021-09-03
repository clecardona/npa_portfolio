import React from "react";

export default function Hero() {
  return (
    <section id="hero" className="section-hero">
      <img
        className="bg"
        alt="bg"
        src="https://clecardona.com/npa/img/bg.png"
      />
      <div className="layout">
        <h1>
          Hi, I am <strong>Clément</strong>
        </h1>
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
