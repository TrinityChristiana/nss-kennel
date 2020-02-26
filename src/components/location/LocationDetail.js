import React, {useState, useEffect} from 'react';
import LocationManager from '../../modules/LocationManager';

const LocationDetail = props => {
	const [location, setLocation] = useState({name: ''});
	const [isLoading, setIsLoading] = useState(true);

	const {locationId, history} = props;

	const handleDelete = id => {
		setIsLoading(true);
		LocationManager.delete(locationId).then(() => {
			history.push('/locations');
		})
	};

	useEffect(() => {
		//get(id) from AnimalManager and hang on to the data; put it into state
		LocationManager.get(locationId).then(location => {
			if(location.name === ""){
				setLocation({
					name: false
				});
			}else {
				setLocation({
					name: location.name
				});
				setIsLoading(false)
			}
		});
	}, [locationId]);

	return (
		<div className='card'>
			{
				location.name ? 
			(<div className='card-content'>
				<h3>
					<span style={{color: 'darkslategrey'}}>
						{location.name}
					</span>
				</h3>
				<button type="button" disabled={isLoading} onClick={handleDelete}>Close</button>
			</div>) : (<p>This Location does not exist</p>)
			}
		</div>
	);
};

export default LocationDetail;
