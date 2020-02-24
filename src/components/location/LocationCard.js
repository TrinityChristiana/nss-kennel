import React from "react";

const LocationCard = props => {
  return (
    <address>
      Visit Us at the {props.location.name} Location
      <br />
      500 Puppy Way
    </address>
  );
};

export default LocationCard;