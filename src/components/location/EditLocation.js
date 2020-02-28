import React, {useState, useEffect} from 'react';
import LocationManager from '../../modules/LocationManager';
import Form from './Form';

const EditLocation = ({history, match}) => {
	const [location, setLocation] = useState({name: '', employeesId: 0});
	const [isLoading, setIsLoading] = useState(false);
	const [exists, setExists] = useState(true);

	const handleFieldChange = evt => {
		const stateToChange = { ...location };
		stateToChange[evt.target.id] = evt.target.value;
		setLocation(stateToChange);
	};

	/*  Local method for validation, set loadingStatus, create animal      object, invoke the AnimalManager post method, and redirect to the full animal list
	 */
	const handleClick = evt => {
		if (location.name === "" || location.employeesId === "") {
		  window.alert("Please input an location name and Employee");
		} else {
		  setIsLoading(true);
		  // Create the animal and redirect user to animal list
		  LocationManager.edit(location, match.params.locationId)
		    .then(() => history.push("/locations"));
		}
	};

	const getLocation = (id) => {
        LocationManager.get(id).then(data => {
            if(data.name === undefined){
                setExists(false)
            } else {
                setLocation({name: data.name})
            }
        })
    };

	useEffect(() => {
		getLocation(match.params.locationId);
	}, [match.params.locationId]);

	return (
		<Form
			handleFieldChange={handleFieldChange}
			handleClick={handleClick}
			isLoading={isLoading}
			location={location}
			exists={exists}
		/>
	);
};

export default EditLocation;
