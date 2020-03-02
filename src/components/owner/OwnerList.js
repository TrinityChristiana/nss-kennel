import React, {useState, useEffect} from 'react';
//import the components we will need
import OwnerCard from './OwnerCard';
import APIManager from '../../modules/APIManager';
import "./Owner.css"

const OwnerList = props => {
	// The initial state is an empty array
  const [owners, setOwners] = useState([]);
  
  const {history} = props;
  
	const getOwners = () => {
		// After the data comes back from the API, we
		//  use the setAnimals function to update state
		return APIManager.getAll("owners").then(ownersFromAPI => {
			setOwners(ownersFromAPI);
		});
	};

	const deleteOwner = id => {
		APIManager.delete(id, "owners").then(() =>
		APIManager.getAll("owners").then(setOwners)
		);
	};
	// got the animals from the API on the component's first render
	useEffect(() => {
		getOwners();
	}, []);

	// Finally we use map() to "loop over" the animals array to show a list of animal cards
	return (
    <>
    <section className='section-content'>
				<button
					type='button'
					className='btn'
					onClick={() => {
						history.push('/owners/new');
					}}>
					Add Owner
				</button>
			</section>
		<div className='container-cards'>
			{owners.map(owner => (
				<OwnerCard
					key={owner.id}
					owner={owner}
					deleteOwner={deleteOwner}
				/>
			))}
		</div>
    </>
	);
};
export default OwnerList;
