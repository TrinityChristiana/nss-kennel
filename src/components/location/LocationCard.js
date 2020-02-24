import React from "react";

const LocationCard = props => {
  const {deleteLocation, location} = props;
  return (
    <>
    <address>
      Visit Us at the {location.name} Location
      <br />
      500 Puppy Way
    </address>
            <button onClick={() => deleteLocation(location.id)}>Close</button>
            </>

  );
};

export default LocationCard;