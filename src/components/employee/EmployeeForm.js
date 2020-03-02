import React, {useState, useEffect} from 'react';
import APIManager from '../../modules/APIManager';
import Form from './Form';


const EmployeeForm = ({history}) => {
	const [employee, setEmployee] = useState({name: '', locationId: 0});
	const [locations, setLocations] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const handleFieldChange = evt => {
		

		const stateToChange = {...employee};
		stateToChange[evt.target.id] = evt.target.value;
		if(evt.target.id === "locationId"){
			stateToChange[evt.target.id] = Number(evt.target.value);
		}
		setEmployee(stateToChange);
	};

	/*  Local method for validation, set loadingStatus, create animal      
  object, invoke the AnimalManager post method, and redirect to the full animal list
	 */
	const handleClick = evt => {
		evt.preventDefault();
		if (employee.name === '' || employee.locationId === '') {
			window.alert('Please input an employee name');
		} else {
			setIsLoading(true);
			// Create the animal and redirect user to animal list
			APIManager.post(employee, "employees").then(() =>
				history.push('/employees')
			);
		}
	};


	const getLocations = ()=> {
			APIManager.getAll("locations").then(setLocations).then(() => setIsLoading(false));
	};
	
	useEffect(() => {
		getLocations();
    }, [employee]);

	return (
		<Form
			handleFieldChange={handleFieldChange}
			handleClick={handleClick}
			isLoading={isLoading}
			employee={employee}
			exists={true}
			locations={locations}
		/>
	);
};

export default EmployeeForm;
