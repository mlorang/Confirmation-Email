import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

interface EventPrice {
  balanceDue: string;
  setBalanceDue: (newString: string) => void;
  hours: number;
  setHours: (newNumber: number) => void;
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
  const HALFHOUR = ["yes", "no"];
  const [resident, setResident] = useState<string>("Non-Resident");
  const [halfHour, setHalfHour] = useState<string>("no");

  function updateHours(event: React.ChangeEvent<HTMLInputElement>) {
    if (
      isNaN(parseInt(event.target.value)) ||
      parseInt(event.target.value) >= 0
    ) {
      setHours(parseInt(event.target.value) || 0);
    }
  }
  function updatePrice(): void {
    if (resident === "Non-Resident" && halfHour === "yes") {
      const price = hours * 65 + 32.5;
      setPrice(price);
    } else if (resident === "Non-Resident" && halfHour === "no") {
      const price = hours * 65;
      setPrice(price);
    } else if (resident === "Resident" && halfHour === "yes") {
      const price = hours * 60 + 30;
      setPrice(price);
    } else {
      const price = hours * 60;
      setPrice(price);
    }
  }
  function updateResident(event: React.ChangeEvent<HTMLInputElement>) {
    setResident(event.target.value);
  }
  function updateHalfHour(event: React.ChangeEvent<HTMLInputElement>) {
    setHalfHour(event.target.value);
  }
  return (
    <div>
      <Form.Label> Change Hours: </Form.Label>
      <Form.Control value={hours} onChange={updateHours} />
      <Button onClick={updatePrice}>UpdatePrice</Button>
      {RESIDENTS.map((choice: string) => (
        <Form.Check
          inline
          type="radio"
          onChange={updateResident}
          label={choice}
          value={choice}
          checked={choice === resident}
        />
      ))}
      <Form.Label>Is Half Hour?</Form.Label>
      {HALFHOUR.map((choice: string) => (
        <Form.Check
          inline
          type="radio"
          onChange={updateHalfHour}
          label={choice}
          value={choice}
          checked={choice === halfHour}
        />
      ))}
    </div>
  );
}

export default ChangeEventPrice;
