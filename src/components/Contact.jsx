import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  const contact = {
    email: "clecardona@gmail.com",
    phone: "+46 76 590 1639",
    location: "Stockholm , Sweden",
    fullname: "Clement Cardona",
    linkedIn: "https://www.linkedin.com/in/cl%C3%A9ment-cardona-205098171/",
    github: "https://github.com/clecardona",
  };

  return (
    <section id="contact" className="section-contact">
      <div className="wrapper">
        <h2>Contact me</h2>
        <p>
          Here is my contact information if you are interested in starting a
          collaboration.
        </p>

        <ul>
          <li>
            <FontAwesomeIcon icon={faEnvelope} />
            <h4>{contact.email}</h4>
          </li>
          <li>
            <FontAwesomeIcon icon={faPhone} />
            <h4>{contact.phone}</h4>
          </li>
          <li>
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            <h4>{contact.location}</h4>
          </li>
        </ul>
      </div>

      <footer>
        <ul>
          <li>
            <a href={contact.linkedIn} target="blank">
              <FontAwesomeIcon icon={faLinkedin} className="fa-2x" />
            </a>
          </li>
          <li>
            <a href={contact.github} target="blank">
              <FontAwesomeIcon icon={faGithub} className="fa-2x" />
            </a>
          </li>
        </ul>
        <span>© 2021 • {contact.fullname}</span>
      </footer>
    </section>
  );
}
