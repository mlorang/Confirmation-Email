import React from "react";
import { Form } from "react-bootstrap";

interface SetDate {
  date: string;
  setDate: (newString: string) => void;
  dueDate: string;
  setDueDate: (newString: string) => void;
}

function GWCDate({ date, setDate, dueDate, setDueDate }: SetDate) {
  function updateDate(event: React.ChangeEvent<HTMLInputElement>) {
    setDate(event.target.value);
  }

  function updateDueDate(event: React.ChangeEvent<HTMLInputElement>) {
    setDueDate(event.target.value);
  }

  return (
    <div>
      <Form.Label>Date: </Form.Label>
      <Form.Control value={date} onChange={updateDate} />
      <br></br>
      <Form.Label>Due Date: </Form.Label>
      <Form.Control value={dueDate} onChange={updateDueDate} />
    </div>
  );
}

export default GWCDate;
