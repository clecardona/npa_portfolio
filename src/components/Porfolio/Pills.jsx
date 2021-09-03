import React from "react";

export default function Pills({ technologies }) {
  return (
    <ul className="pills">
      {technologies.map((techno) => {
        return (
          <li key={techno}>
            <div className="pill">{techno}</div>
          </li>
        );
      })}
    </ul>
  );
}
