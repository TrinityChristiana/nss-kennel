import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom"
import LocationManager from '../../modules/LocationManager';

const LocationDetail = ({locationId, history}) => {
	const [location, setLocation] = useState({name: ''});
	const [isLoading, setIsLoading] = useState(true);

	const handleDelete = id => {
		setIsLoading(true);
		LocationManager.delete(locationId).then(() => {
			history.push('/locations');
		});
	};

	useEffect(() => {
		//get(id) from AnimalManager and hang on to the data; put it into state
		LocationManager.get(locationId).then(location => {
			if (location.name === '') {
				setLocation({
					name: false
				});
			} else {
				setLocation({
					name: location.name
				});
				setIsLoading(false);
			}
		});
	}, [locationId]);

	return (
		<>
		<Link to={`/locations`}>
						<button>Go Back to Locations</button>
					</Link>
		<div className='card'>
			
			{location.name ? (
				<div className='card-content'>
					<h3>
						<span style={{color: 'darkslategrey'}}>
							{location.name}
						</span>
					</h3>
					<Link to={`/locations/${locationId}/edit`}>
						<button>Edit</button>
					</Link>
					<button
						type='button'
						disabled={isLoading}
						onClick={handleDelete}>
						Close
					</button>
				</div>
			) : (
				<p>This Location does not exist</p>
			)}
		</div>
		</>
	);
};

export default LocationDetail;
