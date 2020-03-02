import React from 'react';
import {Link} from 'react-router-dom';

const EmployeeCard = ({deleteEmployee, employee, history}) => {
	return (
		<div className='card'>
			<div className='card-content'>
				<h3>Name: {employee.name}</h3>
				<p>Position: Cashier</p>
				<Link to={`/employees/${employee.id}/edit`}>
					<button>Edit</button>
				</Link>
				<button
					type='button'
					onClick={() => {
						history.push(`/employees/${employee.id}`);
					}}>
					Details
				</button>
				{deleteEmployee && (
					<button onClick={() => deleteEmployee(employee.id)}>
						Fire
					</button>
				)}
			</div>
		</div>
	);
};

export default EmployeeCard;
