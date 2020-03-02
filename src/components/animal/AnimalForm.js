import React, {useState, useEffect} from 'react';
import APIManager from '../../modules/APIManager';


import Form from './Form';

const AnimalForm = ({history}) => {
	const [animal, setAnimal] = useState({name: '', breed: '', employeeId: 0});
	const [employees, setEmployee] = useState([])
	const [isLoading, setIsLoading] = useState(true);
	const category = "animals";
	const handleFieldChange = evt => {
		const animalChange = {...animal};
		animalChange[evt.target.id] = evt.target.value;
		if(evt.target.id == "employeeId"){
			animalChange[evt.target.id] = Number(evt.target.value);
		}
        setAnimal(animalChange);
	};


	const handleClick = evt => {
		evt.preventDefault();
		if (animal.name === '' || animal.breed === '' || animal.employeeId === '') {
			window.alert('Please input an animal name and breed');
		} else {
			setIsLoading(true);
			// Create the animal and redirect user to animal list
			APIManager.post(animal, category).then(() => history.push('/animals'));
		}
	};

	const getEmployees = () => {
		APIManager.getAll("employees").then(setEmployee).then(setIsLoading(false));
	}

	useEffect(() => {
		getEmployees()
	}, [])

	return (
		<Form
			handleFieldChange={handleFieldChange}
			handleClick={handleClick}
			isLoading={isLoading}
			isEditing={false}
			animal={animal}
			exists={true}
			employees={employees}
		/>
	);
};

export default AnimalForm;
