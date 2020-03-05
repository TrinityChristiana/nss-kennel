import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types'
import './AnimalForm.css';

const Form = ({
	handleFieldChange,
	handleClick,
	isLoading,
	isEditing,
	animal,
    exists,
    employees
}) => {
	return (
		<>
			<section className='section-content'>
				<Link to={`/animals`}>
					<button type='button' className='btn'>
						Go Back to Animals
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
							placeholder='Animal name'
							value={animal.name}
						/>
						<label htmlFor='animalName'>Name</label>
						<input
							type='text'
							required
							onChange={handleFieldChange}
							id='breed'
							placeholder='Breed'
							value={animal.breed}
						/>
						<label htmlFor='breed'>Breed</label>
					</div>
					<select
						className='form-control'
						id='employeeId'
						value={animal.employeeId}
						onChange={handleFieldChange}>
						{employees.map(employee => (
							<option key={employee.id} value={employee.id}>
								{employee.name}
							</option>
						))}
					</select>
					<label htmlFor='employeeId'>Employee</label>
					<div className='alignRight'>
						<button
							type='button'
							disabled={isLoading}
							onClick={handleClick}>
							{isEditing ? 'Edit' : 'Submit'}
						</button>
					</div>
				</fieldset>
			) : (
				<p>This animal does not exist!</p>
			)}
		</>
	);
};

Form.propTypes = {
	handleFieldChange: PropTypes.func.isRequired,
	handleClick: PropTypes.func.isRequired,
	isLoading: PropTypes.bool.isRequired,
	isEditing: PropTypes.bool.isRequired,
	animal: PropTypes.object.isRequired,
    exists: PropTypes.bool.isRequired,
    employees: PropTypes.array.isRequired
  };
  
export default Form;
