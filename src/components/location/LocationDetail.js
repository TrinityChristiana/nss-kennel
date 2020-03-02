import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import LocationManager from '../../modules/LocationManager';
import EmployeeCard from '../employee/EmployeeCard';

const LocationDetail = ({locationId, history}) => {
	const [location, setLocation] = useState({name: '', employees: 0});

	useEffect(() => {
		//get(id) from AnimalManager and hang on to the data; put it into state
		LocationManager.getWithEmployee(locationId).then(location => {
			if (location.name === '' || location.employees === '') {
				setLocation({
					name: false
				});
			} else {
				setLocation({
					name: location.name,
					employees: location.employees
				});
			}
		});
	}, [locationId]);

	return (
		<>
			<Link to={`/locations`}>
				<button>Go Back to Locations</button>
			</Link>

			{location.name ? (
				<div>
					<p
						className='card'
						id='location-name'
						style={{color: 'darkslategrey'}}>
						{location.name}'s Employee's
					</p>

					{/* <Link to={`/locations/${locationId}/edit`}>
							<button>Edit</button>
						</Link>
						<button
							type='button'
							disabled={isLoading}
							onClick={handleDelete}>
							Close
						</button> */}
					{location.employees.length !== 0 ? (
						location.employees.map(employee => (
							<EmployeeCard
								key={employee.id}
								employee={employee}
								history={history}
							/>
						))
					) : (
						<div className='card' id='no-employees'>
							<p>There are no employees here</p>
						</div>
					)}
				</div>
			) : (
				<p>This Location does not exist</p>
			)}
		</>
	);
};

export default LocationDetail;
