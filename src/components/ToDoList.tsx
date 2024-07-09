import React from "react";
import { Form } from "react-bootstrap";

function ToDoList() {
  const TASKS = [
    "Voicemails",
    "Call Log",
    "Emails",
    "Setup Info",
    "Payments",
    "Pending Rentals",
  ];
  return (
    <div>
      <Form.Label>ToDoList:</Form.Label>
      {TASKS.map((task: string) => (
        <Form.Check type="checkbox" label={task}></Form.Check>
      ))}
    </div>
  );
}

export default ToDoList;
