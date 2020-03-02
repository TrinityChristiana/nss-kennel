import React, {useState, useEffect} from 'react';
//import the components we will need
import EmployeeCard from './EmployeeCard';
import APIManager from '../../modules/APIManager';

const EmployeeList = ({history}) => {
	// The initial state is an empty array
	const [employees, setEmployees] = useState([]);
  
	const getEmployees = () => {
		// After the data comes back from the API, we
		//  use the setAnimals function to update state
		return APIManager.getAll("employees").then(employeesFromAPI => {
			setEmployees(employeesFromAPI);
		});
	};

	const deleteEmployee = id => {
		APIManager.delete(id, "employees").then(() =>
		APIManager.getAll("employees").then(setEmployees)
		);
	};

	// got the animals from the API on the component's first render
	useEffect(() => {
		getEmployees();
	}, []);

	// Finally we use map() to "loop over" the animals array to show a list of animal cards
	return (
		<>
			<section className='section-content'>
				<button
					type='button'
					className='btn'
					onClick={() => {
						history.push('/employees/new');
					}}>
					Hire Employee
				</button>
			</section>
			<div className='container-cards'>
				{employees.map(employee => (
					<EmployeeCard
						history={history}
						key={employee.id}
						employee={employee}
						deleteEmployee={deleteEmployee}
					/>
				))}
			</div>
		</>
	);
};
export default EmployeeList;
