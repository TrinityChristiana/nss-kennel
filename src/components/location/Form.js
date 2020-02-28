import React from 'react';
import {Link} from "react-router-dom";

const Form = ({
	handleFieldChange,
	handleClick,
	isLoading,
    location,
    exists
}) => {
	return (
		<>
        <section className='section-content'>
				<Link to={`/locations`}>
					<button type='button' className='btn'>
						Go Back to Locations
					</button>
				</Link>
			</section>
			{exists ? (
			
                <fieldset>
                  <div className="formgrid">
                    <input
                      type="text"
                      required
                      onChange={handleFieldChange}
                      id="name"
                      placeholder="Location name"
                      value={location.name}
                    />
                    <label htmlFor="employeeName">Name</label>
                  </div>
                  <div className="alignRight">
                    <button
                      type="button"
                      disabled={isLoading}
                      onClick={handleClick}
                    >Submit</button>
                  </div>
                </fieldset>
            
			) : (
				<p>This Location does not exist!</p>
			)}
		</>
	);
};
export default Form;
