import React, {useState, useEffect} from 'react';
import AnimalManager from '../../modules/AnimalManager';
import './AnimalDetail.css';

const AnimalDetail = ({animalId, history}) => {
	const [animal, setAnimal] = useState({name: '', breed: ''});
	const [isLoading, setIsLoading] = useState(true);

	const handleDelete = () => {
		//invoke the delete function in AnimalManger and re-direct to the animal list.
		setIsLoading(true);
		AnimalManager.delete(animalId).then(() =>
			history.push('/animals')
		);
	};

	useEffect(() => {
		//get(id) from AnimalManager and hang on to the data; put it into state
		AnimalManager.get(animalId).then(animal => {
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
		<div className='card'>
			{animal.name ? (
				<div className='card-content'>
					<picture>
						<img src={require('./dog.svg')} alt='My Dog' />
					</picture>
					<h3>
						Name:{' '}
						<span style={{color: 'darkslategrey'}}>
							{animal.name}
						</span>
					</h3>
					<p>Breed: {animal.breed}</p>
					<button
						type='button'
						disabled={isLoading}
						onClick={handleDelete}>
						Discharge
					</button>
				</div>
			) : (
				<p>This animal does not exist!</p>
			)}
		</div>
	);
};

export default AnimalDetail;
