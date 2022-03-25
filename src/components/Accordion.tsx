interface IProps {
  isOpen: boolean;
  setisOpen: any;
  title: string;
  content: JSX.Element;
  color?: string;
  id: string;
}

const Accordion = ({
  isOpen,
  setisOpen,
  title,
  content,
  color,
  id,
}: IProps): JSX.Element => {
  return (
    <div className="accordion-positionner">
      <div className="tag" id={id} />
      <div className="accordion">
        <button
          className="accordion-title"
          onClick={() => setisOpen(!isOpen)}
          style={{ background: color }}
        >
          <h3>{title}</h3>
          {isOpen ? (
            <h3 className="accordion-icon">-</h3>
          ) : (
            <h3 className="accordion-icon collapsed">+</h3>
          )}
        </button>

        <div className="accordion-content" aria-expanded={isOpen}>
          {content}
        </div>
      </div>
    </div>
  );
};
export default Accordion;
