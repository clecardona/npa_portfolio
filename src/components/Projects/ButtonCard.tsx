// npm packages
import { useState } from "react";
import { CSSTransition } from "react-transition-group";
// Local imports
import Modal from "./Modal";

interface IItem {
  item: {
    title: string;
    isReleased: boolean;
    thumbnailURL: string;
    thumbnailTitle: string;
  };
}

const ButtonCard = ({ item }: IItem): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const { title, isReleased, thumbnailURL, thumbnailTitle } = item;

  // Components
  const NotReleased = () => (
    <div className="card-overlay">
      <p className="comingsoon">COMING</p>
      <p className="comingsoon">SOON ...</p>
    </div>
  );

  return (
    <li>
      <button
        className="card"
        disabled={!item.isReleased}
        onClick={() => setIsOpen(true)}
      >
        <div className="card-inner">
          <div className="card-front">
            <div className="card-img">
              {!isReleased && <NotReleased />}
              <img alt={title} src={thumbnailURL} />
            </div>
          </div>

          <div className="card-back">
            <h3>{thumbnailTitle}</h3>
          </div>
        </div>
      </button>

      <CSSTransition in={isOpen} timeout={500} classNames="modal-overlay">
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} item={item} />
      </CSSTransition>
    </li>
  );
};
export default ButtonCard;
