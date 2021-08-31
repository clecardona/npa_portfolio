import React from "react";

export default function NavigationBar() {
  return (
    <nav>
      <div className="nav-logo">
        <img alt="logo" src="https://clecardona.com/npa/img/CC.png" />
      </div>
      <div className="author">Clément Cardona</div>
      <div className="bar">
        <a href="#about">About</a>
        <a href="#portfolio">Projects</a>
        <div>{/* empty on purpose */}</div>

        <a href="#technologies">Tech</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}
