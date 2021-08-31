import React from "react";
//Local files
import technologies from "../assets/technologies.json";

export default function Technologies() {
  return (
    <section id="technologies" className="section-technologies">
      <p>
        <h2>Technologies I use</h2>
        Here is the techology that I already know and also starting to learn.
      </p>
      <ul>
        {technologies.map((item) => {
          return (
            <li key={item.id}>
              <img
                className="img-40 img-bw"
                alt={item.name}
                src={item.iconURL}
              />
              <h3>{item.name}</h3>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
