import React, {useState, useEffect} from 'react';
import APIManager from '../../modules/APIManager';
import AnimalCard from '../animal/AnimalCard';
import "./Employee.css"

const EmployeeWithAnimals = ({match, ...props}) => {
	const [employee, setEmployee] = useState({});
	const [animals, setAnimals] = useState([]);


	useEffect(() => {
		APIManager.getWithEmbed(match.params.employeeId, "employees", "animals").then(
			APIResult => {
				console.log(APIResult)
				setEmployee(APIResult);
				setAnimals(APIResult.animals);
			}
		);
	}, []);


	return (
		<>
			<p className="card" id="employee-name">{employee.name}'s Animals</p>

			{animals.map(animal => (
				<AnimalCard key={animal.id} animal={animal} {...props} />
			))}
		</>
	);
};

export default EmployeeWithAnimals;
