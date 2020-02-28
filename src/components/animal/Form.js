import React from 'react';
import './AnimalForm.css';

const Form = ({
	handleFieldChange,
	handleClick,
	isLoading,
	isEditing,
    animal,
    exists
}) => {
	return (
		<>
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
export default Form;
