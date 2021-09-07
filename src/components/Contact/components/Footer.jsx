import React from "react";

import IconSocial from "./IconSocial";

// This could be in the Contact, the tag footer is ok but i dont see the need to further break down the components
// at least pass me the contact data as a json same with icons data to make this component worthwile
export default function Footer({contactData, iconsData}) {
  const contact = contactData[0];
  const icons = iconsData[0];

  return (
    <footer>
      <ul>
        <IconSocial icon={icons.linkedInURL} link={contact.linkedIn} />
        <IconSocial icon={icons.githubURL} link={contact.github} />
      </ul>
      <span>© 2021 • {contact.fullname}</span>
    </footer>
  );
}
