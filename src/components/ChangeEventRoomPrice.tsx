import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

interface BooleanValues {
  resident: string;
  checkedState: boolean[];
  price: string;
  setPrice: (newString: string) => void;
}

function ChangeEventRoomPrice({
  checkedState,
  resident,
  price,
  setPrice,
}: BooleanValues) {
  const [mainHallHours, setMainHallHours] = useState<string>("0");
  const [kitchenHours, setKitchenHours] = useState<string>("0");
  const [recRoom1Hours, setRecRoom1Hours] = useState<string>("0");
  const [potteryRoomHours, setPotteryRoomHours] = useState<string>("0");

  function updateMainHallHours(event: React.ChangeEvent<HTMLInputElement>) {
    setMainHallHours(event.target.value);
  }

  function updateKitchenHoursHours(event: React.ChangeEvent<HTMLInputElement>) {
    setKitchenHours(event.target.value);
  }

  function updateRecRoom1Hours(event: React.ChangeEvent<HTMLInputElement>) {
    setRecRoom1Hours(event.target.value);
  }

  function updatePotteryRoomHours(event: React.ChangeEvent<HTMLInputElement>) {
    setPotteryRoomHours(event.target.value);
  }

  function computePrice(): void {
    if (resident === "Resident") {
      updateResidentPrice();
    } else {
      updateNonResidentPrice();
    }
  }

  function updateNonResidentPrice(): void {
    let tempPrice = 0;
    tempPrice = tempPrice + parseFloat(mainHallHours) * 65;
    tempPrice = tempPrice + parseFloat(kitchenHours) * 40;
    tempPrice = tempPrice + parseFloat(recRoom1Hours) * 40;
    tempPrice = tempPrice + parseFloat(potteryRoomHours) * 40;

    setPrice(tempPrice.toFixed(2));
  }

  function updateResidentPrice(): void {
    let tempPrice = 0;
    tempPrice = tempPrice + parseFloat(mainHallHours) * 60;
    tempPrice = tempPrice + parseFloat(kitchenHours) * 35;
    tempPrice = tempPrice + parseFloat(recRoom1Hours) * 35;
    tempPrice = tempPrice + parseFloat(potteryRoomHours) * 35;
    setPrice(tempPrice.toFixed(2));
  }

  return (
    <div>
      <div style={{ position: "absolute", left: 133, top: 205 }}>
        <Form.Label>Set Hours:</Form.Label>
      </div>
      <div style={{ position: "absolute", left: 130, top: 226 }}>
        {checkedState[0] === true && (
          <Form.Control value={mainHallHours} onChange={updateMainHallHours} />
        )}
      </div>
      <div style={{ position: "absolute", left: 130, top: 248 }}>
        {checkedState[1] === true && (
          <Form.Control
            value={kitchenHours}
            onChange={updateKitchenHoursHours}
          />
        )}
      </div>
      <div style={{ position: "absolute", left: 130, top: 270 }}>
        {checkedState[2] === true && (
          <Form.Control value={recRoom1Hours} onChange={updateRecRoom1Hours} />
        )}
      </div>
      <div style={{ position: "absolute", left: 130, top: 292 }}>
        {checkedState[3] === true && (
          <Form.Control
            value={potteryRoomHours}
            onChange={updatePotteryRoomHours}
          />
        )}
      </div>

      <div style={{ position: "absolute", left: 100, top: 344 }}>
        <Button onClick={computePrice}>Compute Price</Button>
      </div>
    </div>
  );
}

export default ChangeEventRoomPrice;
