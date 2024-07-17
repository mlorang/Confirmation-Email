import React from "react";
import { Form } from "react-bootstrap";

interface SetName {
  customerName: string;
  setCustomerName: (newString: string) => void;
}

function GWCName({ customerName, setCustomerName }: SetName) {
  function updateCustomerName(event: React.ChangeEvent<HTMLInputElement>) {
    setCustomerName(event.target.value);
  }

  return (
    <div>
      <Form.Label>
        {customerName.length > 0 ? <span>✔️</span> : <span>❌</span>}Customer
        Name:{" "}
      </Form.Label>
      <Form.Control value={customerName} onChange={updateCustomerName} />
    </div>
  );
}

export default GWCName;
