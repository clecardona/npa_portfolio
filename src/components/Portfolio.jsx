import React from "react";
//Local files
import listOfProjects from "../assets/projects.json";
import ButtonCard from "./ButtonCard";

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
          return <ButtonCard item={item} />;
        })}
      </ul>
    </section>
  );
}
