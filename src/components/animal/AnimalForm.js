import React, {useState} from 'react';
import AnimalManager from '../../modules/AnimalManager';

import Form from './Form';

const AnimalForm = ({history}) => {
	const [animal, setAnimal] = useState({name: '', breed: ''});
	const [isLoading, setIsLoading] = useState(false);

	const handleFieldChange = evt => {
		const animalChange = {...animal};
        animalChange[evt.target.id] = evt.target.value;
        setAnimal(animalChange);
	};

	/*  Local method for validation, set loadingStatus, create animal      object, invoke the AnimalManager post method, and redirect to the full animal list
	 */
	const handleClick = evt => {
		evt.preventDefault();
		if (animal.name === '' || animal.breed === '') {
			window.alert('Please input an animal name and breed');
		} else {
			setIsLoading(true);
			// Create the animal and redirect user to animal list
			AnimalManager.post(animal).then(() => history.push('/animals'));
		}
	};

	return (
		<Form
			handleFieldChange={handleFieldChange}
			handleClick={handleClick}
			isLoading={isLoading}
			isEditing={false}
			animal={animal}
			exists={true}
		/>
	);
};

export default AnimalForm;
