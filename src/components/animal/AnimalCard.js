import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import APIManager from "../../modules/APIManager";

import "./Animal.css";

const AnimalCard = ({ animal, deleteAnimal }) => {
  const [petOwners, setPetOwners] = useState([]);
  const [ownerHTML, setOwnerHTML] = useState();

  const obj = [];

  const getOwners = () => {
    APIManager.getWithEmbed(animal.id, "animals", "owner_pets").then(data => {
      data.owner_pets.forEach(element => {
        APIManager.getWithCustomQuery(
          "owner_pets",
          `${element.id}/?_expand=owner`
        )
          .then(data => obj.push(data.owner))
          .then(() => {
            setPetOwners(obj);
          });
      });
    });
  };

  useEffect(() => {
    getOwners();
  }, [animal]);


  useEffect(() => {
    if (petOwners.length !== 0) {
      setOwnerHTML(
        <>
          <h3>Owners</h3>{" "}
          {petOwners.map(owner => (
            <p key={owner.id}>{owner.name}</p>
          ))}
        </>
      );
    }
  }, [petOwners]);

  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require("./dog.svg")} alt="My Dog" />
        </picture>
        <h3>
          Name: <span className="card-petname">{animal.name}</span>
        </h3>
        <p>Breed: {animal.breed}</p>
        {ownerHTML}
        <Link to={`/animals/${animal.id}`}>
          <button>Details</button>
        </Link>
        <Link to={`/animals/${animal.id}/edit`}>
          <button>Edit</button>
        </Link>

        {deleteAnimal && (
          <button type="button" onClick={() => deleteAnimal(animal.id)}>
            Discharge
          </button>
        )}
      </div>
    </div>
  );
};

AnimalCard.propTypes = {
  animal: PropTypes.object.isRequired,
  deleteAnimal: PropTypes.func
};

export default AnimalCard;
