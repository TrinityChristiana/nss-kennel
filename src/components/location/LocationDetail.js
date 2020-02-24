import React, {useState, useEffect} from 'react';
import LocationManager from '../../modules/LocationManager';

const LocationDetail = props => {
    const [location, setLocation] = useState({name: ''});
    
    const {locationId} = props;
    
    useEffect(() => {
		//get(id) from AnimalManager and hang on to the data; put it into state
		LocationManager.get(locationId).then(location => {
			setLocation({
				name: location.name
			});
		});
	}, [locationId]);

	return (
		<div className='card'>
			<div className='card-content'>
				<h3>
					<span style={{color: 'darkslategrey'}}>{location.name}</span>
				</h3>
			</div>
		</div>
	);
};

export default LocationDetail;
