import React, {useState, useEffect} from 'react';
//import the components we will need
import LocationCard from './LocationCard';
import APIManager from '../../modules/APIManager';
import './Location.css';

const LocationList = ({history, hasUser}) => {
	// The initial state is an empty array
	const [locations, setLocation] = useState([]);

	const getLocation = () => {
		// After the data comes back from the API, we
		//  use the setAnimals function to update state
		return APIManager.getAll("locations").then(locationFromAPI => {
			setLocation(locationFromAPI);
		});
	};

	const deleteLocation = id => {
		APIManager.delete(id, "locations").then(() =>
		APIManager.getAll("locations").then(setLocation)
		);
	};
	// got the animals from the API on the component's first render
	useEffect(() => {
		getLocation();
	}, []);

	// Finally we use map() to "loop over" the animals array to show a list of animal cards
	return (
		<>
			<section className='section-content'>
				{hasUser && (
					<button
						type='button'
						className='btn'
						onClick={() => {
							history.push('/locations/new');
						}}>
						Add Location
					</button>
				)}
			</section>

			<div className='container-cards'>
				{locations.map(location => (
					<LocationCard
						hasUser={hasUser}
						key={location.id}
						location={location}
						deleteLocation={deleteLocation}
					/>
				))}
			</div>
		</>
	);
};
export default LocationList;
