// NPM Packages
import React from "react";

// Project files
import iconsData from "../../assets/icons.json";
import ContactEntity from "./components/ContactEntity";
import Footer from "./components/Footer";
import contactData from "./data.json";

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
          <ContactEntity icon={icons.emailURL} text={contact.email} />
          <ContactEntity icon={icons.phoneURL} text={contact.phone} />
          <ContactEntity icon={icons.locationURL} text={contact.location} />
        </ul>
      </div>
      <Footer contactData={contactData} iconsData={iconsData} />
    </section>
  );
}
