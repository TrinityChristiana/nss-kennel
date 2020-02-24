import React from "react";

const OwnerCard = props => {
  const {owner, deleteOwner} = props;
  return (
    <div>
        <h2>Name: {owner.name}</h2>
        <p>Number: {owner.phone}</p>
        <p>Dog: Doodles</p>
        <button onClick={() => deleteOwner(owner.id)}>Remove</button>

    </div>
  );
};

export default OwnerCard;