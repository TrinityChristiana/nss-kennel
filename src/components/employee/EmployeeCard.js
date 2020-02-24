import React from "react";

const EmployeeCard = props => {
  const {deleteEmployee, employee} = props;
  return (
    <div className="card">
      <div className="card-content">
        <h3>
          Name: {employee.name}
        </h3>
        <p>Position: Cashier</p>
        <button onClick={() => deleteEmployee(employee.id)}>Fire</button>
      </div>
    </div>
  );
};

export default EmployeeCard;