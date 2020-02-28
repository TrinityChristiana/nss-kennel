import React from 'react';
// import './AnimalForm.css';

const Form = ({handleFieldChange, handleClick, isLoading, owner, exists}) => {
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
							placeholder='Owner name'
							value={owner.name}
						/>
						<label htmlFor='animalName'>Name</label>
						<input
							type='tel'
							required
							onChange={handleFieldChange}
							id='phone'
							placeholder='Phone Number'
							value={owner.phone}
						/>
						<label htmlFor='phone'>Phone</label>
					</div>
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
				<p>This Owner does not exist!</p>
			)}
		</>
	);
};
export default Form;
