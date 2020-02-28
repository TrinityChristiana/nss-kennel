import React from 'react';
// import './AnimalForm.css';

const Form = ({
	handleFieldChange,
	handleClick,
	isLoading,
    location,
    exists
}) => {
	return (
		<>
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
