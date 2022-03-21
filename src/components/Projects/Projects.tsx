import ToggleGallery from "components/Toggles/ToggleGallery";
import { useTheme } from "state/ThemeProvider";
import listOfProjects from "./assets/projects.json";
import ButtonCard from "./ButtonCard";

const Projects = (): JSX.Element => {
  const { gallery } = useTheme();
  const isClassic = gallery === "classic";
  return (
    <section className="section-portfolio">
      <div className="wrapper">
        <ToggleGallery />
        <p>
          Here are the projects made during the Frontend course at Novare
          Potential, and further on...
        </p>

        <ul
          className={
            isClassic ? "projects-lists classic" : "projects-lists creative"
          }
        >
          {listOfProjects.map((item) => {
            return <ButtonCard key={item.id} item={item} />;
          })}
        </ul>
      </div>
    </section>
  );
};
export default Projects;
