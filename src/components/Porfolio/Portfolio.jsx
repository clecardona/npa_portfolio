import React from "react";

import listOfProjects from "./assets/projects.json";
import ButtonCard from "./ButtonCard";

export default function Portfolio() {
  return (
    <section id="portfolio" className="section-portfolio">
      <div className="wrapper">
        <h2>Projects</h2>
        <p>
          Here are the projects I will be making during the Frontend course at
          Novare Potential.
        </p>

        <ul>
          {listOfProjects.map((item) => {
            return <ButtonCard key={item.id} item={item} />;
          })}
        </ul>
      </div>
    </section>
  );
}
