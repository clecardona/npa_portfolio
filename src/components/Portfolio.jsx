import React from "react";
//Local files
import listOfProjects from "../assets/projects.json";

export default function Portfolio() {
  return (
    <section id="portfolio" className="section-portfolio">
      <p>
        <h2>Projects</h2>
        Here are the projects I will be making during the Frontend course at
        Novare Potential.
      </p>

      <ul>
        {listOfProjects.map((item) => {
          return (
            <li key={item.id}>
              <img className="" alt={item.name} src={item.thumbnailURL} />
              <h3>{item.thumbnailTitle}</h3>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
