import React from "react";

export default function ContactEntity({ icon, text }) {
  return (
    <li>
      <img alt="icn" src={icon} className="img-1em " />
      <h4>{text}</h4>
    </li>
  );
}
