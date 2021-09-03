import React from "react";

export default function TechnoItem({ item }) {
  return (
    <li key={item.id}>
      <img className="img-40 img-bw" alt={item.name} src={item.iconURL} />
      <h3>{item.name}</h3>
    </li>
  );
}
