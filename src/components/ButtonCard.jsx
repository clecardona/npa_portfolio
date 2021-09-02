import React, { useState } from "react";
import Modal from "./Modal";

export default function ButtonCard({ item }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li>
      <button disabled={!item.isReleased} onClick={() => setIsOpen(true)}>
        <div>
          {!item.isReleased && (
            <div className="card-overlay">
              <h2>
                COMING
                <br /> SOON
              </h2>
            </div>
          )}
          <img className="" alt={item.name} src={item.thumbnailURL} />
        </div>

        <h3>{item.thumbnailTitle}</h3>
      </button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} item={item} />
    </li>
  );
}
