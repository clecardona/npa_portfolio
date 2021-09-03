import React from "react";
import reactDom from "react-dom";

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
      <div className="modal">
        <button className="btn-close" onClick={onClose}>
          <img alt="close" src={icons.cross} />
        </button>

        <img className="modal-img" alt={item.name} src={item.screenshotURL} />

        <h2>{item.title}</h2>

        <p>{item.description} that uses:</p>

        <div className="pills-container">
          <Pills technologies={technologies8} />
        </div>

        <div className="buttons">
          <ButtonLink design="btn btn-main" link={item.websiteURL}>
            Visit website/app
          </ButtonLink>
          <ButtonLink design="btn btn-ghost" link={item.githubURL}>
            Git repository
          </ButtonLink>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}
