import React from "react";
import reactDom from "react-dom";

export default function Modal({ isOpen, onClose, item }) {
  const technologies8 = item.technologies.slice(0, 8);

  if (!isOpen) return null;

  return reactDom.createPortal(
    <>
      <div className="overlay" onClick={onClose} />
      <div className="modal">
        <button className="btn-close" onClick={onClose}>
          <img
            className="img-30"
            alt="close"
            src="https://clecardona.com/npa/icns/times-solid.svg"
          />
        </button>

        <img className="modal-img" alt={item.name} src={item.screenshotURL} />

        <p>
          <h2>{item.title}</h2>
          {item.description} that uses:
        </p>

        <ul className="pills">
          {technologies8.map((techno) => {
            return (
              <li key={techno}>
                <div className="pill">{techno}</div>
              </li>
            );
          })}
        </ul>

        <div className="buttons">
          <a
            className="btn btn-main"
            alt="link-website"
            target="blank"
            href={item.websiteURL}
          >
            <h3>Visit website/app</h3>
          </a>
          <a
            className="btn btn-ghost"
            alt="link-github"
            target="blank"
            href={item.githubURL}
          >
            <h3>Git repository</h3>
          </a>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}
