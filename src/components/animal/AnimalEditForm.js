import React, {useState, useEffect} from 'react';
import AnimalManager from '../../modules/AnimalManager';
import EmployeeManager from '../../modules/EmployeeManager';
import Form from './Form';

const AnimalEditForm = ({match, history}) => {
	const [animal, setAnimal] = useState({name: '', breed: '', employeeId: 0});
	const [exists, setExists] = useState(true);
	const [isLoading, setLoading] = useState(true);
	const [employees, setEmployees] = useState([]);

	const handleFieldChange = evt => {
		const animalChange = {...animal};
		animalChange[evt.target.id] = evt.target.value;
		setAnimal(animalChange);
	};

	const handleClick = () => {
		if (animal.name === '' || animal.breed === '' || animal.employeeId === '') {
			window.alert('Please input an animal name and breed');
		} else {
			setLoading(true);
			AnimalManager.edit(animal, match.params.animalId).then(() => {
				history.push('/animals');
			});
		}
	};

	const getAllInfo = id => {
		AnimalManager.get(id).then(data => {
			if (data.name === undefined) {
				setExists(false);
			} else {
				setAnimal({
					name: data.name,
					breed: data.breed,
					employeeId: Number(data.employeeId)
				});
			}
		}).then(() => {
			EmployeeManager.getAll().then(data => {
				setEmployees(data);
				setLoading(false);
			});
		});
	};

	useEffect(() => {
		getAllInfo(match.params.animalId);
	}, [match.params.animalId]);

	return (
		<Form
			handleFieldChange={handleFieldChange}
			handleClick={handleClick}
			isLoading={isLoading}
			isEditing={true}
			animal={animal}
			exists={exists}
			employees={employees}
		/>
	);
};

export default AnimalEditForm;
