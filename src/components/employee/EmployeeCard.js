import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

const EmployeeCard = ({ deleteEmployee, employee, history }) => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>Name: {employee.name}</h3>
        <p>Position: Cashier</p>
        <Link to={`/employees/${employee.id}/edit`}>
          <button>Edit</button>
        </Link>
        <button
          type="button"
          onClick={() => {
            history.push(`/employees/${employee.id}`);
          }}
        >
          Details
        </button>
        {deleteEmployee && (
          <button onClick={() => deleteEmployee(employee.id)}>Fire</button>
        )}
      </div>
    </div>
  );
};

EmployeeCard.propTypes = {
  // This rule ensures that `employee` is passed a property
  // and that is an object - not a string or number
  employee: PropTypes.object.isRequired,
  deleteEmployee: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,

};

export default EmployeeCard;
