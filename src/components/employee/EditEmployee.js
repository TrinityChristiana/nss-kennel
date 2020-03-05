import React, {useState, useEffect} from 'react';
import APIManager from '../../modules/APIManager';
import PropTypes from 'prop-types'
import Form from './Form';

const EditEmployee = ({history, match}) => {
	const [employee, setEmployee] = useState({name: '', locationId: 0});
	const [isLoading, setIsLoading] = useState(true);
	const [exists, setExists] = useState(true);
	const [locations, setLocations] = useState([]);
	const category = "employees";

	const handleFieldChange = evt => {
		const stateToChange = {...employee};
		stateToChange[evt.target.id] = evt.target.value;
		if(evt.target.id === "locationId"){
			stateToChange[evt.target.id] = Number(evt.target.value);
		}
		setEmployee(stateToChange);
	};

	/*  Local method for validation, set loadingStatus, create animal      object, invoke the AnimalManager post method, and redirect to the full animal list
	 */
	const handleClick = evt => {
		if (employee.name === '' || employee.locationId === '') {
			window.alert('Please input an employee name');
		} else {
			setIsLoading(true);
			// Create the animal and redirect user to animal list
			APIManager.edit(employee, match.params.employeeId, category).then(() =>
				history.push('/employees')
			);
		}
	};

    const getEmployee = id => {
        APIManager.get(id, category).then(data => {
            if(data.name === undefined){
                setExists(false);
            } else {
                setEmployee({name: data.name, locationId: data.locationId})
                setIsLoading(false);
            }
        }).then(() => {
			APIManager.getAll("locations").then(setLocations);
		})
    };

	useEffect(() => {
		getEmployee(match.params.employeeId);
    }, [match.params.employeeId]);
    
	return (
		<Form
			handleFieldChange={handleFieldChange}
			handleClick={handleClick}
			isLoading={isLoading}
			employee={employee}
			exists={exists}
			locations={locations}
		/>
	);
};

EditEmployee.propType = {
	history: PropTypes.object.isRequired,
	match: PropTypes.object.isRequired
  };

export default EditEmployee;
