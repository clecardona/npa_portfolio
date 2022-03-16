import technologies from "./assets/technologies.json";

const Technologies = (): JSX.Element => {
  const Technolist = technologies.map((item) => (
    <li key={item.id}>
      <img className="img-40 img-bw" alt={item.name} src={item.iconURL} />
      <h3>{item.name}</h3>
    </li>
  ));

  return (
    <section id="technologies" className="section-technologies">
      <div className="wrapper">
        <p>
          Here is the techology that I already know and also starting to learn.
        </p>
        <ul>{Technolist}</ul>
      </div>
    </section>
  );
};
export default Technologies;
