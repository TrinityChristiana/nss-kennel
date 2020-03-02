import React, {useEffect, useState} from 'react';
import APIManager from '../../modules/APIManager';
import ResultComponent from './ResultComponents';
import './SearchComponet.css';

const SearchComponent = ({searchQuery, checkLoggedIn}) => {
	const [animalResults, setAnimalResults] = useState();
	const [employeeResults, setEmployeeResults] = useState();
	const [locationResults, setLocationResults] = useState();
	const [ownerResults, setOwnerResults] = useState();

	const getResults = searchQuery => {
		APIManager.searchTopic('animals', searchQuery).then(data => {
			if (data.length !== 0) {
				setAnimalResults(data);
			} else {
				setAnimalResults();
			}
		});
		APIManager.searchTopic('employees', searchQuery).then(data => {
			if (data.length !== 0) {
				setEmployeeResults(data);
			} else {
				setEmployeeResults();
			}
		});
		APIManager.searchTopic('locations', searchQuery).then(data => {
			if (data.length !== 0) {
				setLocationResults(data);
			} else {
				setLocationResults();
			}
		});
		APIManager.searchTopic('owners', searchQuery).then(data => {
			if (data.length !== 0) {
				setOwnerResults(data);
			} else {
				setOwnerResults();
			}
		});
	};

	useEffect(() => {
		if (searchQuery !== '') {
			getResults(searchQuery);
		}
	}, [searchQuery]);

	return (
		<>
			{animalResults ||
			employeeResults ||
			locationResults ||
			ownerResults ? (
				<div id='search-container'>
					{animalResults && (
						<>
							<h1>Animal Results</h1>
							<div className='card-container'>
								<ResultComponent
									results={animalResults}
									title='Animals'
								/>
							</div>
						</>
					)}
					{employeeResults && (
						<>
							<h1>Employee Results</h1>
							<div className='card-container'>
								<ResultComponent
									results={employeeResults}
									title='Employees'
								/>
							</div>
						</>
					)}
					{locationResults && (
						<>
							<h1>Location Results</h1>
							<div className='card-container'>
								<ResultComponent
									results={locationResults}
									title='Locations'
								/>
							</div>
						</>
					)}
					{ownerResults && (
						<>
							<h1>Owner Results</h1>
							<div className='card-container'>
								<ResultComponent
									results={ownerResults}
									title='Owners'
								/>
							</div>
						</>
					)}
				</div>
			) : (
				<p>No results for "{searchQuery}"</p>
			)}
		</>
	);
};

export default SearchComponent;
