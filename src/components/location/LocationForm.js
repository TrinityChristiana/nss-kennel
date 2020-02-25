import React, { useState } from 'react';
import LocationManager from '../../modules/LocationManager';

const LocationForm = props => {
  const [location, setLocation] = useState({ name: ""});

  const [isLoading, setIsLoading] = useState(false);

  const {history} = props;

  const handleFieldChange = evt => {
    const stateToChange = { ...location };
    stateToChange[evt.target.id] = evt.target.value;
    setLocation(stateToChange);
  };

  /*  Local method for validation, set loadingStatus, create animal      object, invoke the AnimalManager post method, and redirect to the full animal list
  */
  const constructNewLocation = evt => {
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
    <>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="name"
              placeholder="Location Name"
            />
            <label htmlFor="locationName">Name</label>
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={constructNewLocation}
            >Submit</button>
          </div>
        </fieldset>
    </>
  );
};

export default LocationForm