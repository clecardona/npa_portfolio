import { useState } from "react";

interface IProps {
  title: string;
  content: JSX.Element;
  color?: string;
}

const Accordion = ({ title, content, color }: IProps): JSX.Element => {
  const [isOpen, setisOpen] = useState(false);
  return (
    <div className="accordion">
      <button
        className="accordion-title"
        onClick={() => setisOpen(!isOpen)}
        style={{ background: color }}
      >
        <h3>{title}</h3>
        <h3 className="accordion-icon">{isOpen ? "-" : "+"}</h3>
      </button>

      <div className="accordion-content" aria-expanded={!isOpen}>
        {content}
      </div>
    </div>
  );
};
export default Accordion;
