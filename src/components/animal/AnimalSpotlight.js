import React, { useState, useEffect } from "react";
import APIManager from "../../modules/APIManager";
import PropTypes from 'prop-types';
import "./AnimalSpotlight.css";

const AnimalSpotlight = ({animalId}) => {
  const [animal, setAnimal] = useState({ name: "", breed: "" });
  const category = "animals";
  useEffect(() => {
    APIManager.get(animalId, category).then(animal => {
      setAnimal({
        name: animal.name,
        breed: animal.breed
      });
    });
  }, [animalId]);

  return (
    <div className="animal-spotlight">
      <img src={require('./dog.svg')} alt="My Dog" />
      <div>
        <h3>{animal.name}</h3>
        <p>{animal.breed}</p>
      </div>
    </div>
  );
};

AnimalSpotlight.propTypes = {
  animalId: PropTypes.number.isRequired
};
export default AnimalSpotlight;