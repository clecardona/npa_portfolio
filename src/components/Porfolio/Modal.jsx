//npm packages
import reactDom from "react-dom";
import { CSSTransition } from "react-transition-group";

//Local imports
import link from "../../assets/icns/link.png";
import github from "../../assets/icns/github.png";

import iconsData from "../../assets/icons.json";
import Pills from "./Pills";
import ButtonLink from "./ButtonLink";

export default function Modal({ isOpen, onClose, item }) {
  const icons = iconsData[0];
  const technologies8 = item.technologies.slice(0, 8);

  if (!isOpen) return null;

  return reactDom.createPortal(
    <>
      <div className="modal-overlay" onClick={onClose} />

      <div className="modal-wrapper">
        <CSSTransition in={isOpen} timeout={500} classNames="modal">
          <div className="modal">
            <button className="btn-close" onClick={onClose}>
              <img alt="close" src={icons.cross} />
            </button>

            <div className="modal-img">
              <img alt={item.name} src={item.screenshotURL} />
            </div>

            <h1>{item.title}</h1>
            <p>{item.description} that uses:</p>

            <div className="pills-container">
              <Pills technologies={technologies8} />
            </div>

            <div className="buttons">
              {item.websiteURL && (
                <ButtonLink
                  design="btn btn-main"
                  link={item.websiteURL}
                  icon={link}
                >
                  Visit website
                </ButtonLink>
              )}

              {item.githubURL && (
                <ButtonLink
                  design="btn btn-ghost"
                  link={item.githubURL}
                  icon={github}
                >
                  Git repository
                </ButtonLink>
              )}
            </div>
          </div>
        </CSSTransition>
      </div>
    </>,
    document.getElementById("portal")
  );
}
