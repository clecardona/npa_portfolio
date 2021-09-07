import React from "react";

// This can be called item after all is a <li> list item
export default function ContactEntity({ icon, text }) {
  return (
    <li>
      <img alt="icn" src={icon} className="img-1em " />
      <h4>{text}</h4>
    </li>
  );
}
