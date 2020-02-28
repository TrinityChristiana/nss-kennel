import React from 'react';
import {Link} from "react-router-dom"

const Form = ({handleFieldChange, handleClick, isLoading, owner, exists}) => {
	return (
		<>
        <section className='section-content'>
				<Link to={`/owners`}>
					<button type='button' className='btn'>
						Go Back to Owners
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
