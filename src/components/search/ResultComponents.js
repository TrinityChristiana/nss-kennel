import React from 'react';
import {Link} from 'react-router-dom';

const ResultComponent = ({results, title}) => {
	const lowerTitle = title.toLowerCase();
	return (
		<>
			{results.map((item, i) => {
				return (
					<div key={i} className='card search-card'>
						<div className='card-content'>
							{item.breed && (
								<picture>
									<img
										
										src={require('../animal/dog.svg')}
										alt='My Dog'
									/>
								</picture>
							)}
							{item.name && (
								<h3>
									Name:{' '}
									<span className='card-petname'>
										{item.name}
									</span>
								</h3>
							)}

							{item.breed && <p>Breed: {item.breed}</p>}
							{item.phone && <p>Number: {item.phone}</p>}
							{lowerTitle !== 'owners' && (
								<Link to={`/${lowerTitle}/${item.id}`}>
									<button>Details</button>
								</Link>
							)}
						</div>
					</div>
				);
			})}
		</>
	);
};

export default ResultComponent;
