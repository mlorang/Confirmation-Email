import React from "react";
import { Form } from "react-bootstrap";

interface SetDate {
  date: string;
  setDate: (newString: string) => void;
}

function GWCDate({ date, setDate }: SetDate) {
  function updateDate(event: React.ChangeEvent<HTMLInputElement>) {
    setDate(event.target.value);
  }
  return (
    <div>
      <Form.Label>Date: </Form.Label>
      <Form.Control value={date} onChange={updateDate} />
    </div>
  );
}

export default GWCDate;
