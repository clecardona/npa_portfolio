import listOfProjects from "./assets/projects.json";
import ButtonCard from "./ButtonCard";

const Projects = (): JSX.Element => {
  return (
    <section id="projects" className="section-portfolio">
      <div className="wrapper">
        <p>
          Here are the projects made during the Frontend course at Novare
          Potential, and further on...
        </p>

        <ul className="projects-lists">
          {listOfProjects.map((item) => {
            return <ButtonCard key={item.id} item={item} />;
          })}
        </ul>
      </div>
    </section>
  );
};
export default Projects;
