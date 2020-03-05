import React, { useState, useEffect } from "react";
//import the components we will need
import PropTypes from 'prop-types'
import AnimalCard from "./AnimalCard";
import APIManager from "../../modules/APIManager";

const AnimalList = ({ history }) => {
  // The initial state is an empty array
  const [animals, setAnimals] = useState([]);
  const category = "animals";

  const getAnimals = () => {
    // After the data comes back from the API, we
    //  use the setAnimals function to update state
    return APIManager.getAll(category).then(data => {
      setAnimals(data);
      return data;
    });
  };

  const deleteAnimal = id => {
    APIManager.delete(id, category).then(() =>
      APIManager.getAll(category).then(setAnimals)
    );
  };

  // got the animals from the API on the component's first render
  useEffect(() => {
	getAnimals();
  }, []);

  // Finally we use map() to "loop over" the animals array to show a list of animal cards
  return (
    <>
      <section className="section-content">
        <button
          type="button"
          className="btn"
          onClick={() => {
            history.push("/animals/new");
          }}
        >
          Admit Animal
        </button>
      </section>
      <div className="container-cards">
        {animals.map(animal => (
          <AnimalCard
            key={animal.id}
            animal={animal}
            deleteAnimal={deleteAnimal}
          />
        ))}
      </div>
    </>
  );
};
AnimalList.propTypes = {
  history: PropTypes.object.isRequired
};

export default AnimalList;
