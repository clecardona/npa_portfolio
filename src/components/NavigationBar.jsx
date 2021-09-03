import React from "react";

export default function NavigationBar() {
  return (
    <nav>
      <div className="nav-logo">
        <a href="#hero">
          <img alt="logo" src="https://clecardona.com/npa/img/CC.png" />
        </a>
      </div>
      <div className="author">Clément Cardona</div>
      <div className="bar">
        <a href="#about">About</a>
        <a href="#portfolio">Projects</a>
        <div>
          {/* empty on purpose for the central div in mobile version */}
        </div>
        <a href="#technologies">Tech</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}
