import { type } from "os";
import React from "react";
import { Form } from "react-bootstrap";

interface EmployeeInfo {
  employeeName: string;
  setEmployeeName: (newString: string) => void;
  employeeType: string;
  setEmployeeType: (newString: string) => void;
}

function EmployeeInfo({
  employeeName,
  setEmployeeName,
  employeeType,
  setEmployeeType,
}: EmployeeInfo) {
  const EMPLOYEETYPE = [
    "Community Center Attendant",
    "GWC Coordinator/ Recreation Supervisor/ Volunteer Coordinator",
  ];
  function updateEmployeeName(event: React.ChangeEvent<HTMLInputElement>) {
    setEmployeeName(event.target.value);
  }

  function updateEmployeeType(event: React.ChangeEvent<HTMLInputElement>) {
    setEmployeeType(event.target.value);
  }
  return (
    <div>
      <Form.Label>
        {employeeName.length > 0 ? <span>✔️</span> : <span>❌</span>} Employee
        Name:{" "}
      </Form.Label>
      <Form.Control value={employeeName} onChange={updateEmployeeName} />
      <br></br>
      <Form.Label>
        {employeeType.length > 0 ? <span>✔️</span> : <span>❌</span>}Employee
        Type
      </Form.Label>
      <br></br>
      {EMPLOYEETYPE.map((choice: string) => (
        <Form.Check
          style={{ overflow: "auto", float: "left" }}
          type="radio"
          label={choice}
          value={choice}
          checked={choice === employeeType}
          onChange={updateEmployeeType}
        />
      ))}
    </div>
  );
}

export default EmployeeInfo;
