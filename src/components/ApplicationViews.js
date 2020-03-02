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
import EmployeeWithAnimals from './employee/EmployeeWithAnimals';

import OwnerList from './owner/OwnerList';
import OwnerForm from './owner/OwnerForm';
import EditOwner from './owner/EditOwner';

const ApplicationViews = ({
	hasUser,
	handleLogin,
	handleFieldChange,
	handleCheckChange,
	isAuthenticated,
	checkLoggedIn
}) => {
	return (
		<>
			{/* <Route
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
								? isNaN(Number(urlLocation.split('/')[2]))
									? false
									: true
								: false
							: false;
					});
					const isValidUrl = urlValidArray.includes(true);
					return !isValidUrl && <Redirect to='/home' />;
				}}
			/> */}
			{/* <Redirect from='*' to='/404' /> */}
			{/* Login Route */}
			<Route
				exact
				path='/login'
				render={props =>
					isAuthenticated ? (
						<Redirect to='/home' />
					) : (
						<Login
							handleLogin={handleLogin}
							handleFieldChange={handleFieldChange}
							handleCheckChange={handleCheckChange}
						/>
					)
				}
			/>
			{/* Home Route */}
			<Route
				exact
				path='/home'
				render={props => {
					checkLoggedIn();
					return <Home />;
				}}
			/>

			<Route exact path='/' render={props => <Redirect to='/home' />} />
{console.log(isAuthenticated)}
			{/* Animal Route */}
			<Route
				exact
				path='/animals'
				render={props => {
					checkLoggedIn();
					return isAuthenticated ? (
						<AnimalList checkLoggedIn={checkLoggedIn} {...props} />
					) : (
						<Redirect to='/login' />
					);
				}}
			/>
			<Route
				exact
				path='/animals/:animalId(\d+)'
				render={props => {
					checkLoggedIn();
					return isAuthenticated ? (
						<AnimalDetail
							animalId={parseInt(props.match.params.animalId)}
							{...props}
						/>
					) : (
						<Redirect to='/login' />
					);
				}}
			/>
			<Route
				exact
				path='/animals/new'
				render={props => {
					checkLoggedIn();
					return isAuthenticated ? (
						<AnimalForm {...props} />
					) : (
						<Redirect to='/login' />
					);
				}}
			/>

			<Route
				path='/animals/:animalId(\d+)/edit'
				render={props => {
					checkLoggedIn();
					return isAuthenticated ? (
						<AnimalEditForm {...props} />
					) : (
						<Redirect to='/login' />
					);
				}}
			/>
			{/* Location Routes */}

			<Route
				exact
				path='/locations'
				render={props => {
					checkLoggedIn();
					return <LocationList {...props} hasUser={hasUser} />;
				}}
			/>

			<Route
				exact
				path='/locations/:locationId(\d+)'
				render={props =>{
					checkLoggedIn();
					return isAuthenticated ? (
						<LocationDetail
							locationId={parseInt(props.match.params.locationId)}
							{...props}
						/>
					) : (
						<Redirect to='/login' />
					)
				}}
				// Pass the animalId to the AnimalDetailComponent
			/>

			<Route
				path='/locations/new'
				render={props =>{
					checkLoggedIn();
					return isAuthenticated ? (
						<LocationForm {...props} />
					) : (
						<Redirect to='/login' />
					)
				}}
			/>

			<Route
				path='/locations/:locationId(\d+)/edit'
				render={props =>{
					checkLoggedIn();
					return isAuthenticated ? (
						<EditLocation {...props} />
					) : (
						<Redirect to='/login' />
					)
				}}
			/>
			{/* Employee Routes */}

			<Route
				exact
				path='/employees'
				render={props =>{
					checkLoggedIn();
					return isAuthenticated ? (
						<EmployeeList {...props} />
					) : (
						<Redirect to='/login' />
					)
				}}
			/>

			<Route
				path='/employees/new'
				render={props =>{
					checkLoggedIn();
					return isAuthenticated ? (
						<EmployeeForm {...props} />
					) : (
						<Redirect to='/login' />
					)
				}}
			/>

			<Route
				path='/employees/:employeeId(\d+)/edit'
				render={props =>{
					checkLoggedIn();
					return isAuthenticated ? (
						<EditEmployee {...props} />
					) : (
						<Redirect to='/login' />
					)
				}}
			/>

			<Route
				path='/employees/:employeeId(\d+)/details'
				render={props => {
					return <EmployeeWithAnimals {...props} />;
				}}
			/>
			{/* Owners Routes */}

			<Route
				exact
				path='/owners'
				render={props =>{
					checkLoggedIn();
					return isAuthenticated ? (
						<OwnerList {...props} />
					) : (
						<Redirect to='/login' />
					)
				}}
			/>
			<Route
				exact
				path='/owners/new'
				render={props =>{
					checkLoggedIn();
					return isAuthenticated ? (
						<OwnerForm {...props} />
					) : (
						<Redirect to='/login' />
					)
				}}
			/>
			<Route
				path='/owners/:ownerId(\d+)/edit'
				render={props =>{
					checkLoggedIn();
					return isAuthenticated ? (
						<EditOwner {...props} />
					) : (
						<Redirect to='/login' />
					)
				}}
			/>
		</>
	);
};

export default ApplicationViews;
