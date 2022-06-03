import React from "react";

type Props = {
  item: any;
};

function ExpCard({ item }: Props) {
  return (
    <li key={item.position} className="card-exp">
      <div className="title">
        <h3>
          <b>{item.position}</b>
        </h3>
        <h3 style={{ fontWeight: 200 }}>
          {item.from} - {item.to}
        </h3>
      </div>

      <h4 className="position">
        <b>{item.company} </b>| {item.city}
      </h4>
      <p className="description">
        {item.description.map((i: string, index: number) => (
          <React.Fragment key={index}> <p className="list-item">• {i}</p></React.Fragment>
        ))}
      </p>
    </li>
  );
}

export default ExpCard;
