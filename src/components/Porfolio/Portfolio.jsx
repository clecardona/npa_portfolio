import React from "react";

import listOfProjects from "./assets/projects.json";
import ButtonCard from "./ButtonCard";

export default function Portfolio() {
  return (
    <section id="portfolio" className="section-portfolio">
      <div className="wrapper">
        <p>
          Here are the projects made during the Frontend course at Novare
          Potential, and further on...
        </p>

        <ul className="projects-lists">
          {listOfProjects.map((item) => {
            return <ButtonCard key={item.id} item={item} />;
          })}
        </ul>
      </div>
    </section>
  );
}
