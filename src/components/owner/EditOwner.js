import React, {useState, useEffect} from 'react';
import OwnerManager from '../../modules/OwnerManager';
import Form from './Form'

const OwnerForm = ({history, match}) => {
	const [owner, setOwner] = useState({name: '', phone: ''});
    const [isLoading, setIsLoading] = useState(false);
    const [exists, setExists] = useState(true);


	const handleFieldChange = evt => {
		const stateToChange = {...owner};
		stateToChange[evt.target.id] = evt.target.value;
		setOwner(stateToChange);
	};

	/*  Local method for validation, set loadingStatus, create animal      object, invoke the AnimalManager post method, and redirect to the full animal list
	 */
	const handleClick = evt => {
		evt.preventDefault();
		if (owner.name === '' || owner.phone === '') {
			window.alert('Please input an owner name and phone');
		} else {
			setIsLoading(true);
			// Create the animal and redirect user to animal list
			OwnerManager.edit(owner, match.params.ownerId).then(() => history.push('/owners'));
		}
	};

const getOwner = id => {
    OwnerManager.get(id).then(data => {
        if(data.name === undefined){
            setExists(false)
        } else {
            setOwner({name: data.name, phone: data.phone})
        }
    })
}

useEffect(() => {
    getOwner(match.params.ownerId);
}, [match.params.ownerId])

	return (
		<Form
			handleFieldChange={handleFieldChange}
			handleClick={handleClick}
			isLoading={isLoading}
			owner={owner}
			exists={exists}
		/>
	);
};

export default OwnerForm;
