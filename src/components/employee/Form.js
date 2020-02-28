import React from 'react';
import {Link} from 'react-router-dom';

const Form = ({
	handleFieldChange,
	handleClick,
	isLoading,
	employee,
	exists,
	locations
}) => {
	return (
		<>
			<section className='section-content'>
				<Link to={`/employees`}>
					<button type='button' className='btn'>
						Go Back to Employees
					</button>
				</Link>
			</section>
			{exists ? (
				<fieldset>
					<div className='formgrid'>
						<input
							type='text'
							required
							onChange={handleFieldChange}
							id='name'
							placeholder='Employee name'
							value={employee.name}
						/>
						<label htmlFor='employeeName'>Name</label>
					</div>
					<select
						className='form-control'
						id='locationId'
						value={employee.locationId}
						onChange={handleFieldChange}>
						{locations.map(location => (
							<option key={location.id} value={location.id}>
								{location.name}
							</option>
						))}
					</select>
					<div className='alignRight'>
						<button
							type='button'
							disabled={isLoading}
							onClick={handleClick}>
							Submit
						</button>
					</div>
				</fieldset>
			) : (
				<p>This Employee does not exist!</p>
			)}
		</>
	);
};
export default Form;
