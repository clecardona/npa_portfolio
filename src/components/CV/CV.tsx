import React from "react";
import { useTheme } from "state/ThemeProvider";
import CircleChart from "./CircleChart";
import cvData from "./CV.json";
import EduCard from "./EduCard";
import ExpCard from "./ExpCard";
import "./_cards.sass";

const CV = () => {
  const { education, experience, contact, skills } = cvData;
  const { isCVOpen } = useTheme();

  const Experience = experience.map((item: any, index) => {
    return (
      <React.Fragment key={index}>
        {item.url ? (
          <a href={item.url} target="_blank" rel="noreferrer">
            <ExpCard item={item} key={index} />
          </a>
        ) : (
          <ExpCard item={item} key={index} />
        )}
      </React.Fragment>
    );
  });

  const Education = education.map((item: any, index) => {
    return (
      <React.Fragment key={index}>
        {item.url ? (
          <a href={item.url} target="_blank" rel="noreferrer">
            <EduCard item={item} />
          </a>
        ) : (
          <EduCard item={item} />
        )}
      </React.Fragment>
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
  const Skills = skills.map((e: any, index) => (
    <li key={index} className="card-skills">
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
