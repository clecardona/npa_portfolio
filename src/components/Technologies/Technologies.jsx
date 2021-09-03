import React from "react";

import technologies from "./assets/technologies.json";
import TechnoItem from "./TechnoItem";

export default function Technologies() {
  return (
    <section id="technologies" className="section-technologies">
      <div className="wrapper">
        <h2>Technologies I use</h2>
        <p>
          Here is the techology that I already know and also starting to learn.
        </p>
        <ul>
          {technologies.map((item) => {
            return <TechnoItem item={item} />;
          })}
        </ul>
      </div>
    </section>
  );
}
