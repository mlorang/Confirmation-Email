import React, { useState } from "react";
import { Form } from "react-bootstrap";

interface SetDate {
  eventDate: string;
  setEventDate: (newString: string) => void;
  dueDate: string;
  setDueDate: (newString: string) => void;
}
function GWCDate({ eventDate, setEventDate, dueDate, setDueDate }: SetDate) {
  function updateEventDate(event: React.ChangeEvent<HTMLInputElement>) {
    setEventDate(event.target.value);
  }

  function updateDueDate(event: React.ChangeEvent<HTMLInputElement>) {
    setDueDate(event.target.value);
  }

  return (
    <div>
      <Form.Label>
        {eventDate.length > 0 ? <span>✔️</span> : <span>❌</span>}Event Date:{" "}
      </Form.Label>
      <Form.Control value={eventDate} onChange={updateEventDate} />
      <br></br>
      <Form.Label>
        {dueDate.length > 0 ? <span>✔️</span> : <span>❌</span>}Final Payment
        Due Date:{" "}
      </Form.Label>
      <Form.Control value={dueDate} onChange={updateDueDate} />
    </div>
  );
}

export default GWCDate;
