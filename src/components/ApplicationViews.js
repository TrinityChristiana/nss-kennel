import {Route} from 'react-router-dom';
import React from 'react';
import Home from './home/Home';

import AnimalList from './animal/AnimalList';
import AnimalDetail from './animal/AnimalDetail';

import LocationList from './location/LocationList';
import LocationDetail from './location/LocationDetail';

import EmployeeList from './employee/EmployeeList';
import OwnerList from './owner/OwnerList';

const ApplicationViews = () => {
	return (
		<React.Fragment>
			<Route
				exact
				path='/'
				render={props => {
					return <Home />;
				}}
			/>
			<Route
				exact
				path='/animals'
				render={props => {
					return <AnimalList />;
				}}
			/>
			<Route
				path='/animals/:animalId(\d+)'
				render={props => {
					// Pass the animalId to the AnimalDetailComponent
					return (
						<AnimalDetail
							animalId={parseInt(props.match.params.animalId)}
							{...props}
						/>
					);
				}}
			/>

			{/*
			This is a new route to handle a URL with the following pattern:
			http://localhost:3000/animals/1

			It will not handle the following URL because the `(\d+)`
			matches only numbers after the final slash in the URL
			http://localhost:3000/animals/jack
			*/}

			<Route
				exact
				path='/locations'
				render={props => {
					return <LocationList />;
				}}
			/>

			<Route
				exact
				path='/locations/:locationId(\d+)'
				render={props => {
					// Pass the animalId to the AnimalDetailComponent
					return (
						<LocationDetail
							locationId={parseInt(props.match.params.locationId)}
							{...props}
						/>
					);
				}}
			/>

			<Route
				exact
				path='/employees'
				render={props => {
					return <EmployeeList />;
				}}
			/>
			<Route
				exact
				path='/owners'
				render={props => {
					return <OwnerList />;
				}}
			/>
		</React.Fragment>
	);
};

export default ApplicationViews;
