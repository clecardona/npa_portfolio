import ToggleGallery from "components/Toggles/ToggleGallery";
import ButtonCard from "./ButtonCard";

import { useTheme } from "state/ThemeProvider";
interface IProps {
  projects: any[];
}

const Projects = ({ projects }: IProps): JSX.Element => {
  const { gallery } = useTheme();
  const isClassic = gallery === "classic";

  return (
    <section className="section-portfolio">
      <div className="wrapper">
        {/* <ToggleGallery /> */}
        <p>
          Here are the projects made during the Frontend course at Novare
          Potential, and further on...
        </p>

        <ul
          className={
            isClassic ? "projects-lists classic" : "projects-lists creative"
          }
        >
          {projects.map((item) => {
            return <ButtonCard key={item.id} item={item} />;
          })}
        </ul>
      </div>
    </section>
  );
};
export default Projects;
