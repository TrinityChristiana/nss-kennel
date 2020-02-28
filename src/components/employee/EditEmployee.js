import React, {useState, useEffect} from 'react';
import EmployeeManager from '../../modules/EmployeeManager';
import Form from './Form';

const EditEmployee = ({history, match}) => {
	const [employee, setEmployee] = useState({name: ''});
	const [isLoading, setIsLoading] = useState(true);
	const [exists, setExists] = useState(true);

	const handleFieldChange = evt => {
		const stateToChange = {...employee};
		stateToChange[evt.target.id] = evt.target.value;
		setEmployee(stateToChange);
	};

	/*  Local method for validation, set loadingStatus, create animal      object, invoke the AnimalManager post method, and redirect to the full animal list
	 */
	const handleClick = evt => {
		if (employee.name === '') {
			window.alert('Please input an employee name');
		} else {
			setIsLoading(true);
			// Create the animal and redirect user to animal list
			EmployeeManager.edit(employee, match.params.employeeId).then(() =>
				history.push('/employees')
			);
		}
	};

    const getEmployee = id => {
        EmployeeManager.get(id).then(data => {
            if(data.name == undefined){
                setExists(false);
            } else {
                setEmployee({name: data.name})
                setIsLoading(false);
            }
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
		/>
	);
};

export default EditEmployee;
