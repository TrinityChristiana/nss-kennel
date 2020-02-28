import React, {useState, useEffect} from 'react';
import AnimalManager from '../../modules/AnimalManager';

import Form from './Form';

const AnimalEditForm = ({match, history}) => {
    const [animal, setAnimal] = useState({name: '', breed: ''});
    const [exists, setExists] = useState(true)
	const [isLoading, setLoading] = useState(false);

	const handleFieldChange = evt => {
		const animalChange = {...animal};
		animalChange[evt.target.id] = evt.target.value;
		setAnimal(animalChange);
	};

	const handleClick = () => {
		if (animal.name === '' || animal.breed === '') {
			window.alert('Please input an animal name and breed');
		} else {
			setLoading(true);
			AnimalManager.edit(animal, match.params.animalId).then(() => {
				history.push('/animals');
			});
		}
	};

	const getAnimalInfo = id => {
		AnimalManager.get(id).then(data => {
            if(data.name === undefined){
                setExists(false)
            } else {
                setAnimal({name: data.name, breed: data.breed});
                setLoading(false);
            }
            
		});
	};

	useEffect(() => {
		getAnimalInfo(match.params.animalId);
	}, [match.params.animalId]);

	return (
		<Form
			handleFieldChange={handleFieldChange}
			handleClick={handleClick}
			isLoading={isLoading}
			isEditing={true}
            animal={animal}
            exists={exists}
		/>
	);
};

export default AnimalEditForm;
