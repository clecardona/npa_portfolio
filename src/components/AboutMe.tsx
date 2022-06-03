import { useTheme } from "state/ThemeProvider";
import CV from "./CV/CV";

const AboutMe = (): JSX.Element => {
  const { isCVOpen, setCVOpen } = useTheme();
  return (
    <>
      <div className="about-content">
        <img
          className="about-img"
          alt="portrait"
          src="http://clecardona.com/img/portrait.jpg"
        />
        <p className="about-paragraph">
          Hi! I am Clement, a junior frontend developer from Nice , France.{" "}
          <br />
          This is my Portfolio, which I use to showcase everything I develop. I
          specialize in React.js development with TypeScript with a intuitive
          design and attention to details.
          <br /> Why you might ask ? <br />
          Well, scroll down and let me convince you.
        </p>
      </div>
      <div className="additional-content">
        <button className="btn btn-more" onClick={() => setCVOpen(!isCVOpen)}>
          <h3>{isCVOpen ? "-" : "+"}</h3>
          <h3>{isCVOpen ? "Less" : "More"}</h3>
        </button>
        <CV />
      </div>
    </>
  );
};
export default AboutMe;
