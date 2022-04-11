//npm packages
import reactDom from "react-dom";
import { CSSTransition } from "react-transition-group";
import {
  IoIosTabletLandscape,
  IoIosLaptop,
  IoIosDesktop,
  IoIosPhonePortrait,
} from "react-icons/io";

//Local imports
import link from "assets/icns/link.png";
import github from "assets/icns/github.png";

import icons from "assets/icons.json";
import Pills from "./Pills";

interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: any;
}

interface IButtonLink {
  design: string;
  label: string;
  link: string;
  icon?: string;
}

const Modal = ({ isOpen, onClose, item }: IModalProps) => {
  const technologies8 = item.technologies.slice(0, 8);

  // Components
  const ButtonLink = ({ design, icon, label, link }: IButtonLink) => (
    <a className={design} target="blank" href={link}>
      {icon && <img src={icon} alt="" />}
      <h3>{label}</h3>
    </a>
  );

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
            <p>{item.description}</p>

            <div className="pills-container">
              <Pills technologies={technologies8} />
            </div>

            <div className="mq-container" style={{ height: 30 }}>
              {item.responsive && item.responsive.mobile && (
                <div className="mq-item">
                  <p>Mobile</p>
                  <IoIosPhonePortrait size={22} style={{ marginTop: 8 }} />
                </div>
              )}
              {item.responsive && item.responsive.tablet && (
                <div className="mq-item">
                  <p>Tablet</p>
                  <IoIosTabletLandscape size={24} style={{ marginTop: 9 }} />
                </div>
              )}
              {item.responsive && item.responsive.laptop && (
                <div className="mq-item">
                  <p>Laptop</p>
                  <IoIosLaptop size={30} style={{ marginTop: 5 }} />
                </div>
              )}

              {item.responsive && item.responsive.desktop && (
                <div className="mq-item">
                  <p>Desktop</p>
                  <IoIosDesktop size={30} style={{ marginTop: 3 }} />
                </div>
              )}
            </div>

            <div className="buttons">
              {item.websiteURL && (
                <ButtonLink
                  design="btn btn-main"
                  link={item.websiteURL}
                  icon={link}
                  label="Visit Website"
                />
              )}

              {item.githubURL && (
                <ButtonLink
                  design="btn btn-ghost"
                  link={item.githubURL}
                  icon={github}
                  label="Git repository"
                />
              )}
            </div>
          </div>
        </CSSTransition>
      </div>
    </>,
    // @ts-ignore
    document.getElementById("portal")
  );
};
export default Modal;
