import React from "react";
import iconsData from "../../assets/icons.json";
import contactData from "./assets/contact.json";
import ContactEntity from "./ContactEntity";
import Footer from "./Footer";

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
      <Footer />
    </section>
  );
}
