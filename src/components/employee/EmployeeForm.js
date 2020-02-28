import React, {useState} from 'react';
import EmployeeManager from '../../modules/EmployeeManager';
import Form from './Form';

const EmployeeForm = ({history}) => {
	const [employee, setEmployee] = useState({name: ''});

	const [isLoading, setIsLoading] = useState(false);

	const handleFieldChange = evt => {
		const stateToChange = {...employee};
		stateToChange[evt.target.id] = evt.target.value;
		setEmployee(stateToChange);
	};

	/*  Local method for validation, set loadingStatus, create animal      object, invoke the AnimalManager post method, and redirect to the full animal list
	 */
	const handleClick = evt => {
		evt.preventDefault();
		if (employee.name === '') {
			window.alert('Please input an employee name');
		} else {
			setIsLoading(true);
			// Create the animal and redirect user to animal list
			EmployeeManager.post(employee).then(() =>
				history.push('/employees')
			);
		}
	};

	return (
		<Form
			handleFieldChange={handleFieldChange}
			handleClick={handleClick}
			isLoading={isLoading}
      employee={employee}
      exists={true}
		/>
	);
};

export default EmployeeForm;
