import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

interface EventPrice {
  balanceDue: string;
  setBalanceDue: (newString: string) => void;
  hours: string;
  setHours: (newString: string) => void;
  price: number;
  setPrice: (newNumber: number) => void;
}

function ChangeEventPrice({
  balanceDue,
  setBalanceDue,
  hours,
  setHours,
  price,
  setPrice,
}: EventPrice) {
  const RESIDENTS = ["Resident", "Non-Resident"];
  const [resident, setResident] = useState<string>("Non-Resident");

  function updateHours(event: React.ChangeEvent<HTMLInputElement>) {
    setHours(event.target.value);
  }

  function updatePrice(): void {
    if (resident === "Non-Resident") {
      const price = parseFloat(hours) * 65;
      setPrice(price);
    } else {
      const price = parseFloat(hours) * 60;
      setPrice(price);
    }
  }
  function updateResident(event: React.ChangeEvent<HTMLInputElement>) {
    setResident(event.target.value);
  }
  return (
    <div>
      <Form.Label> Change Hours: </Form.Label>
      <Form.Control value={hours} onChange={updateHours} />
      <Button onClick={updatePrice}>UpdatePrice</Button>
      {RESIDENTS.map((choice: string) => (
        <Form.Check
          type="radio"
          onChange={updateResident}
          label={choice}
          value={choice}
          checked={choice === resident}
        />
      ))}
    </div>
  );
}

export default ChangeEventPrice;
