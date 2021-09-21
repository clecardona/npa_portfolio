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
        {/* If this a class to add space, you can call it className="spacer" to give more context */}
        {/* even if there is not any css code for it -OK */}
        <div className="spacer">
          {/* empty on purpose for the central div in mobile version */}
        </div>
        <a href="#technologies">Tech</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}
