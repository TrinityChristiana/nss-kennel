import React, {useState, useEffect} from 'react';
import AnimalManager from '../../modules/AnimalManager';
import EmployeeManager from '../../modules/EmployeeManager';


import Form from './Form';

const AnimalForm = ({history}) => {
	const [animal, setAnimal] = useState({name: '', breed: '', employeeId: 0});
	const [employees, setEmployee] = useState([])
	const [isLoading, setIsLoading] = useState(true);

	const handleFieldChange = evt => {
		const animalChange = {...animal};
		animalChange[evt.target.id] = evt.target.value;
		if(evt.target.id === "employeeId"){
			animalChange[evt.target.id] = Number(evt.target.value);
		}
        setAnimal(animalChange);
	};

	/*  Local method for validation, set loadingStatus, create animal      object, invoke the AnimalManager post method, and redirect to the full animal list
	 */
	const handleClick = evt => {
		evt.preventDefault();
		if (animal.name === '' || animal.breed === '' || animal.employeeId === '') {
			window.alert('Please input an animal name and breed');
		} else {
			setIsLoading(true);
			// Create the animal and redirect user to animal list
			AnimalManager.post(animal).then(() => history.push('/animals'));
		}
	};

	const getEmployees = () => {
		EmployeeManager.getAll().then(setEmployee).then(setIsLoading(false));
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
