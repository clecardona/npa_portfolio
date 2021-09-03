import React from "react";

export default function ButtonLink({ children, design, link }) {
  return (
    <a className={design} alt="link-website" target="blank" href={link}>
      <h3>{children}</h3>
    </a>
  );
}
