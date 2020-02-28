import React from "react";
import {Link} from "react-router-dom";

const OwnerCard = props => {
  const {owner, deleteOwner} = props;
  return (
    <div className="owner-card">
        <h2>Name: {owner.name}</h2>
        <p>Number: {owner.phone}</p>
        <p>Dog: Doodles</p>
        <Link to={`/owners/${owner.id}/edit`}>
				<button>Edit</button>
			</Link>
        <button onClick={() => deleteOwner(owner.id)}>Remove</button>

    </div>
  );
};

export default OwnerCard;