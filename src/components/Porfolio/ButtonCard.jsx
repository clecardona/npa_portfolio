// npm packages
import { useState } from "react";
import { CSSTransition } from "react-transition-group";

//Local packages
import Modal from "./Modal";

export default function ButtonCard({ item }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li>
      <button disabled={!item.isReleased} onClick={() => setIsOpen(true)}>
        <div>
          {!item.isReleased && (
            <div className="card-overlay">
              <p>
                COMING
                <br /> SOON
              </p>
            </div>
          )}
          <img alt={item.name} src={item.thumbnailURL} />
        </div>

        <h3>{item.thumbnailTitle}</h3>
      </button>

      <CSSTransition in={isOpen} timeout={500} classNames="modal-overlay">
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} item={item} />
      </CSSTransition>
    </li>
  );
}
