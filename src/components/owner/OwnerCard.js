import React from "react";

const OwnerCard = props => {
  return (
    <div>
        <h2>Name: {props.owner.name}</h2>
        <p>Number: {props.owner.phone}</p>
        <p>Dog: Doodles</p>
    </div>
  );
};

export default OwnerCard;