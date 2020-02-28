import {Route, Redirect} from 'react-router-dom';
import React from 'react';
import Login from './auth/Login';

import Home from './home/Home';

import AnimalList from './animal/AnimalList';
import AnimalDetail from './animal/AnimalDetail';
import AnimalForm from './animal/AnimalForm';
import AnimalEditForm from './animal/AnimalEditForm';

import LocationList from './location/LocationList';
import LocationDetail from './location/LocationDetail';
import LocationForm from './location/LocationForm';
import EditLocation from './location/EditLocation';

import EmployeeList from './employee/EmployeeList';
import EmployeeForm from './employee/EmployeeForm';
import EditEmployee from './employee/EditEmployee';

import OwnerList from './owner/OwnerList';
import OwnerForm from './owner/OwnerForm';
import EditOwner from './owner/EditOwner';

const ApplicationViews = props => {
	const isAuthenticated = () =>
		sessionStorage.getItem('credentials') !== null ||
		localStorage.getItem('credentials') !== null;

	return (
		<>
			<Route
				exact
				path='*'
				render={props => {
					const locations = [
						'home',
						'animals',
						'locations',
						'employees',
						'owners'
					];
					const urlLocation = props.match.params[0];
					const urlValidArray = locations.map(element => {
						return urlLocation.startsWith(element, 1)
							? urlLocation.startsWith(`${element}/`, 1)
								? Number(urlLocation.split('/')[2]) !== NaN
									? isNaN(Number(urlLocation.split('/')[2])) 
										? false
										:true
									: false
								: false
							: false;
					});
					const isValidUrl = urlValidArray.includes(true);
					return !isValidUrl && <Redirect to='/home' />
				}}
			/>
			{/* <Redirect from='*' to='/404' /> */}
			{/* Login Route */}
			<Route
				exact
				path='/login'
				render={props =>
					isAuthenticated() ? <Redirect to='/home' /> : <Login />
				}
			/>
			{/* Home Route */}
			<Route
				exact
				path='/home'
				render={props =>
					isAuthenticated() ? <Home /> : <Redirect to='/login' />
				}
			/>

			<Route exact path='/' render={props => <Redirect to='/home' />} />

			{/* Animal Route */}
			<Route
				exact
				path='/animals'
				render={props =>
					isAuthenticated() ? (
						<AnimalList {...props} />
					) : (
						<Redirect to='/login' />
					)
				}
			/>
			<Route
				exact
				path='/animals/:animalId(\d+)'
				render={props =>
					isAuthenticated() ? (
						<AnimalDetail
							animalId={parseInt(props.match.params.animalId)}
							{...props}
						/>
					) : (
						<Redirect to='/login' />
					)
				}
			/>
			<Route
				exact
				path='/animals/new'
				render={props =>
					isAuthenticated() ? (
						<AnimalForm {...props} />
					) : (
						<Redirect to='/login' />
					)
				}
			/>

			<Route
				path='/animals/:animalId(\d+)/edit'
				render={props =>
					isAuthenticated() ? (
						<AnimalEditForm {...props} />
					) : (
						<Redirect to='/login' />
					)
				}
			/>
			{/* Location Routes */}

			<Route
				exact
				path='/locations'
				render={props =>
					isAuthenticated() ? (
						<LocationList {...props} />
					) : (
						<Redirect to='/login' />
					)
				}
			/>

			<Route
				exact
				path='/locations/:locationId(\d+)'
				render={props =>
					isAuthenticated() ? (
						<LocationDetail
							locationId={parseInt(props.match.params.locationId)}
							{...props}
						/>
					) : (
						<Redirect to='/login' />
					)
				}
				// Pass the animalId to the AnimalDetailComponent
			/>

			<Route
				path='/locations/new'
				render={props =>
					isAuthenticated() ? (
						<LocationForm {...props} />
					) : (
						<Redirect to='/login' />
					)
				}
			/>

			<Route
				path='/locations/:locationId(\d+)/edit'
				render={props =>
					isAuthenticated() ? (
						<EditLocation {...props} />
					) : (
						<Redirect to='/login' />
					)
				}
			/>
			{/* Employee Routes */}

			<Route
				exact
				path='/employees'
				render={props =>
					isAuthenticated() ? (
						<EmployeeList {...props} />
					) : (
						<Redirect to='/login' />
					)
				}
			/>

			<Route
				path='/employees/new'
				render={props =>
					isAuthenticated() ? (
						<EmployeeForm {...props} />
					) : (
						<Redirect to='/login' />
					)
				}
			/>

			<Route
				path='/employees/:employeeId(\d+)/edit'
				render={props =>
					isAuthenticated() ? (
						<EditEmployee {...props} />
					) : (
						<Redirect to='/login' />
					)
				}
			/>
			{/* Owners Routes */}

			<Route
				exact
				path='/owners'
				render={props =>
					isAuthenticated() ? (
						<OwnerList {...props} />
					) : (
						<Redirect to='/login' />
					)
				}
			/>
			<Route
				exact
				path='/owners/new'
				render={props =>
					isAuthenticated() ? (
						<OwnerForm {...props} />
					) : (
						<Redirect to='/login' />
					)
				}
			/>
			<Route
				path='/owners/:ownerId(\d+)/edit'
				render={props =>
					isAuthenticated() ? (
						<EditOwner {...props} />
					) : (
						<Redirect to='/login' />
					)
				}
			/>
		</>
	);
};

export default ApplicationViews;
