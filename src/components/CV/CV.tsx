import { useTheme } from "state/ThemeProvider";
import CircleChart from "./CircleChart";
import cvData from "./CV.json";
import "./_cards.sass";

const CV = () => {
  const { education, experience, contact, skills } = cvData;
  const { isCVOpen } = useTheme();

  const Education = education.map((e: any, idx) => {
    const Card = ({ isLink }: any) => (
      <li key={idx} className="card-edu">
        <div className={isLink ? "title with-link" : "title"}>
          <h3>
            <b>{e.program}</b>
          </h3>
          <h3 style={{ fontWeight: 200 }}>
            {e.from} - {e.to}
          </h3>
        </div>

        <h4 className="position">
          <b>{e.school} </b>| {e.city}
        </h4>
        <p>
          {e.description.map((i: string, id: number) => (
            <li key={id}>• {i}</li>
          ))}
        </p>
      </li>
    );

    return (
      <>
        {e.url ? (
          <a href={e.url} target="_blank" rel="noreferrer">
            <Card isLink={true} />
          </a>
        ) : (
          <Card isLink={false} />
        )}
      </>
    );
  });

  const Experience = experience.map((e: any, idx) => {
    const Card = ({ isLink }: any) => (
      <li key={idx} className="card-exp">
        <div className="title">
          <h3>
            <b>{e.position}</b>
          </h3>
          <h3 style={{ fontWeight: 200 }}>
            {e.from} - {e.to}
          </h3>
        </div>

        <h4 className="position">
          <b>{e.company} </b>| {e.city}
        </h4>
        <p>
          {e.description.map((i: string, id: number) => (
            <li key={id}>• {i}</li>
          ))}
        </p>
      </li>
    );
    return (
      <>
        {e.url ? (
          <a href={e.url} target="_blank" rel="noreferrer">
            <Card isLink={true} />
          </a>
        ) : (
          <Card isLink={false} />
        )}
      </>
    );
  });

  const Contact = () => (
    <ul>
      <li className="card-cont">
        <a href={contact.linkedin} target="_blank" rel="noreferrer">
          <p>
            linkedin.com/in/<b>clecardona</b>
          </p>
        </a>
      </li>
      <li className="card-cont">
        <a href={`mailto:${contact.email}`} target="_blank" rel="noreferrer">
          <p>{contact.email}</p>
        </a>
      </li>
    </ul>
  );
  const Skills = skills.map((e: any, idx) => (
    <li key={idx} className="card-skills">
      <h4 className="position">{e}</h4>
    </li>
  ));

  return (
    <div className="cv-grid" aria-expanded={isCVOpen}>
      <section className="cv-contact">
        <Contact />
      </section>
      <section className="cv-experience">
        <h2>Work Experience</h2> <ul>{Experience}</ul>
      </section>
      <section className="cv-education">
        <h2>Education</h2> <ul>{Education}</ul>
      </section>
      <section className="cv-languages">
        <CircleChart selection={"English"} animate={isCVOpen} />
        <CircleChart selection={"Swedish"} animate={isCVOpen} />
        <CircleChart selection={"French"} animate={isCVOpen} />
      </section>
      <section className="cv-skills">
        <h2>Soft Skills</h2> <ul>{Skills}</ul>
      </section>
    </div>
  );
};
export default CV;
