import React from "react";

const EmployeeCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>
          Name: {props.employee.name}
        </h3>
        <p>Position: Cashier</p>
      </div>
    </div>
  );
};

export default EmployeeCard;