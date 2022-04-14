import { useEffect, useState } from "react";
import Carousel from "./Carousel";

interface IProps {
  technologies: any[];
}

const Technologies = ({ technologies }: IProps): JSX.Element => {
  const [windowWidth, setWindowWidth] = useState<any>();
  useEffect(() => {
    function updateWidth() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const Technolist = technologies.map((item) => (
    <li key={item.id}>
      <img className="img-40 img-bw" alt={item.name} src={item.iconURL} />
      <h3>{item.name}</h3>
    </li>
  ));

  return (
    <section className="section-technologies">
      <div className="wrapper">
        <p>
          Here is the techology that I already know and also starting to learn.
        </p>
        {windowWidth < 700 ? (
          <ul className="techno-grid">{Technolist}</ul>
        ) : (
          <Carousel list={technologies} />
        )}
      </div>
    </section>
  );
};
export default Technologies;
