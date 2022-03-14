import technologies from "./assets/technologies.json";
import TechnoItem from "./TechnoItem";

export default function TechnoList() {
  const TechnoItems = technologies.map((item, idx) => {
    return <TechnoItem key={idx} item={item} />;
  });

  return <ul>{TechnoItems}</ul>;
}
