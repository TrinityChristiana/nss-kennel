import React from 'react';
import { Link } from "react-router-dom"

const LocationCard = props => {
	const {deleteLocation, location} = props;
	return (
		<>
			<address>
				Visit Us at the {location.name} Location
				<br />
				500 Puppy Way
			</address>
			<Link to={`/locations/${location.id}`}>
				<button>Details</button>
			</Link>
			<button onClick={() => deleteLocation(location.id)}>Close</button>
		</>
	);
};

export default LocationCard;
