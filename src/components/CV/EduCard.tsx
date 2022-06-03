import React from "react";

type Props = {
  item: any;
};

function EduCard({ item }: Props) {
  return (
    <li key={item.program} className="card-edu">
      <div className={item.url ? "title with-link" : "title"}>
        <h3>
          <b>{item.program}</b>
        </h3>
        <h3 style={{ fontWeight: 200 }}>
          {item.from} - {item.to}
        </h3>
      </div>

      <h4 className="position">
        <b>{item.school} </b>| {item.city}
      </h4>
      <p className="description">
        {item.description.map((i: string, id: number) => (
          <React.Fragment key={i}> <p className="list-item">• {i}</p></React.Fragment>
        ))}
      </p>
    </li>
  );
}

export default EduCard;
