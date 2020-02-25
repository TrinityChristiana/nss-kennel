import React, {useState} from 'react';
import OwnerManager from '../../modules/OwnerManager';

const OwnerForm = props => {
	const [owner, setOwner] = useState({name: '', phone: ''});

	const [isLoading, setIsLoading] = useState(false);

	const {history} = props;

	const handleFieldChange = evt => {
		const stateToChange = {...owner};
		stateToChange[evt.target.id] = evt.target.value;
		setOwner(stateToChange);
	};

	/*  Local method for validation, set loadingStatus, create animal      object, invoke the AnimalManager post method, and redirect to the full animal list
	 */
	const constructNewOwner = evt => {
		evt.preventDefault();
		if (owner.name === '' || owner.phone === '') {
			window.alert('Please input an owner name and phone');
		} else {
			setIsLoading(true);
			// Create the animal and redirect user to animal list
			OwnerManager.post(owner).then(() => history.push('/owners'));
		}
	};

	return (
		<>
				<fieldset>
					<div className='formgrid'>
						<input
							type='text'
							required
							onChange={handleFieldChange}
							id='name'
							placeholder='Owner name'
						/>
						<label htmlFor='animalName'>Name</label>
						<input
							type='text'
							required
							onChange={handleFieldChange}
							id='phone'
							placeholder='Phone Number'
						/>
						<label htmlFor='phone'>Phone</label>
					</div>
					<div className='alignRight'>
						<button
							type='button'
							disabled={isLoading}
							onClick={constructNewOwner}>
							Submit
						</button>
					</div>
				</fieldset>
		</>
	);
};

export default OwnerForm;
