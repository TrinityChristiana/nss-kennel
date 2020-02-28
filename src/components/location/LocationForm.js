import React, { useState } from 'react';
import LocationManager from '../../modules/LocationManager';
import Form from './Form'

const LocationForm = ({history}) => {
  const [location, setLocation] = useState({ name: ""});
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...location };
    stateToChange[evt.target.id] = evt.target.value;
    setLocation(stateToChange);
  };

  /*  Local method for validation, set loadingStatus, create animal      object, invoke the AnimalManager post method, and redirect to the full animal list
  */
  const handleClick = evt => {
    evt.preventDefault();
    if (location.name === "") {
      window.alert("Please input an location name");
    } else {
      setIsLoading(true);
      // Create the animal and redirect user to animal list
      LocationManager.post(location)
        .then(() => history.push("/locations"));
    }
  };

  return (
    <Form
			handleFieldChange={handleFieldChange}
			handleClick={handleClick}
			isLoading={isLoading}
			location={location}
			exists={true}
		/>
  );
};

export default LocationForm