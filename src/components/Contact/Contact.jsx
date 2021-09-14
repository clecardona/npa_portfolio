// NPM Packages
import React from "react";

// Project files
import contactData from "./data.json";
import iconsData from "../../assets/icons.json";

import ContactItem from "./components/ContactItem";
import IconSocial from "./IconSocial";

export default function Contact() {
  const contact = contactData[0];
  const icons = iconsData[0];

  return (
    <section id="contact" className="section-contact">
      <div className="wrapper">
        <h2>Contact me</h2>
        <p>
          Here is my contact information if you are interested in starting a
          collaboration.
        </p>
        <ul>
          <ContactItem icon={icons.emailURL} text={contact.email} />
          <ContactItem icon={icons.phoneURL} text={contact.phone} />
          <ContactItem icon={icons.locationURL} text={contact.location} />
        </ul>
      </div>
      <footer>
        <ul>
          <IconSocial icon={icons.linkedInURL} link={contact.linkedIn} />
          <IconSocial icon={icons.githubURL} link={contact.github} />
        </ul>
        <span>© 2021 • {contact.fullname}</span>
      </footer>
    </section>
  );
}
