import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import APIManager from "../../modules/APIManager";
import "./AnimalDetail.css";

const AnimalDetail = ({ animalId, history }) => {
  const [animal, setAnimal] = useState({ name: "", breed: "" });
  const [isLoading, setIsLoading] = useState(true);
  const category = "animals";
  const handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    setIsLoading(true);
    APIManager.delete(animalId, category).then(() => history.push("/animals"));
  };

  useEffect(() => {
    APIManager.get(animalId, category).then(animal => {
      if (animal.name !== undefined) {
        setAnimal({
          name: animal.name,
          breed: animal.breed
        });
        setIsLoading(false);
      } else {
        setAnimal({
          name: false,
          breed: false
        });
        setIsLoading(false);
      }
    });
  }, [animalId]);

  return (
    <>
      <section className="section-content">
        <Link to={`/animals`}>
          <button type="button" className="btn">
            Go Back to Animals
          </button>
        </Link>
      </section>

      <div className="card">
        {animal.name ? (
          <div className="card-content">
            <picture>
              <img src={require("./dog.svg")} alt="My Dog" />
            </picture>
            <h3>
              Name:{" "}
              <span style={{ color: "darkslategrey" }}>{animal.name}</span>
            </h3>
            <p>Breed: {animal.breed}</p>
            <Link to={`/animals/${animalId}/edit`}>
              <button>Edit</button>
            </Link>
            <button type="button" disabled={isLoading} onClick={handleDelete}>
              Discharge
            </button>
          </div>
        ) : (
          <p>This animal does not exist!</p>
        )}
      </div>
    </>
  );
};

AnimalDetail.propTypes = {
  animalId: PropTypes.number.isRequired,
  history: PropTypes.object.isRequired
};

export default AnimalDetail;
