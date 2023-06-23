import React from "react";
import { Form } from "react-bootstrap";

interface SetName {
  name: string;
  setName: (newString: string) => void;
}

function ChangeName({ name, setName }: SetName) {
  function updateName(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }
  return (
    <div>
      <Form.Label> Change Name: </Form.Label>
      <Form.Control value={name} onChange={updateName} />
    </div>
  );
}

export default ChangeName;
