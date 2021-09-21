import React from "react";

import technologies from "./assets/technologies.json";
import TechnoItem from "./TechnoItem";

export default function TechnoList() {
  const TechnoItems = technologies.map((item) => {
    return <TechnoItem item={item} />;
  });

  return <ul>{TechnoItems}</ul>;
}
