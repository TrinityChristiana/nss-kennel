import React from 'react';
import { Link } from "react-router-dom";

import './Animal.css';

const AnimalCard = ({animal, deleteAnimal}) => {
	return (
		<div className='card'>
			<div className='card-content'>
				<picture>
					<img src={require('./dog.svg')} alt='My Dog' />
				</picture>
				<h3>
					Name: <span className='card-petname'>{animal.name}</span>
				</h3>
				<p>Breed: {animal.breed}</p>
				<Link to={`/animals/${animal.id}`}>
					<button>Details</button>
				</Link>
				<Link to={`/animals/${animal.id}/edit`}>
					<button>Edit</button>
				</Link>
				{deleteAnimal && <button type='button' onClick={() => deleteAnimal(animal.id)}>
					Discharge
				</button>}
				
			</div>
		</div>
	);
};

export default AnimalCard;
