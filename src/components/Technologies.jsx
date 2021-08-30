import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faSass,
  faFirefox,
  faJava,
  faCss3,
  faHtml5,
  faJs,
} from "@fortawesome/free-brands-svg-icons";
import technologies from "../assets/technologies.json";
import { icon } from "@fortawesome/fontawesome-svg-core";

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
