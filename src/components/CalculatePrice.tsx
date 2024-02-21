import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

interface BooleanValues {
  resident: string;
  roomsCheckedState: boolean[];
  equipmentCheckedState: boolean[];
  price: string;
  setPrice: (newString: string) => void;
}

function CalculatePrice({
  roomsCheckedState,
  equipmentCheckedState,
  resident,
  price,
  setPrice,
}: BooleanValues) {
  const [mainHallHours, setMainHallHours] = useState<string>("0");
  const [kitchenHours, setKitchenHours] = useState<string>("0");
  const [recRoom1Hours, setRecRoom1Hours] = useState<string>("0");
  const [potteryRoomHours, setPotteryRoomHours] = useState<string>("0");
  const [stageAmount, setStageAmount] = useState<string>("0");

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

  function updateStageAmount(event: React.ChangeEvent<HTMLInputElement>) {
    setStageAmount(event.target.value);
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
    tempPrice = tempPrice + parseFloat(kitchenHours) * 45;
    tempPrice = tempPrice + parseFloat(recRoom1Hours) * 45;
    tempPrice = tempPrice + parseFloat(potteryRoomHours) * 45;
    tempPrice = tempPrice + computeEquipmentPrice();
    setPrice(tempPrice.toFixed(2));
  }

  function updateResidentPrice(): void {
    let tempPrice = 0;
    tempPrice = tempPrice + parseFloat(mainHallHours) * 60;
    tempPrice = tempPrice + parseFloat(kitchenHours) * 40;
    tempPrice = tempPrice + parseFloat(recRoom1Hours) * 40;
    tempPrice = tempPrice + parseFloat(potteryRoomHours) * 40;
    tempPrice = tempPrice + computeEquipmentPrice();
    setPrice(tempPrice.toFixed(2));
  }

  function computeEquipmentPrice(): number {
    let tempPrice = 0;
    if (equipmentCheckedState[0] === true) {
      tempPrice = parseInt(stageAmount) * 10;
    }
    if (equipmentCheckedState[1] === true) {
      tempPrice = tempPrice + 10;
    }
    if (equipmentCheckedState[2] === true) {
      tempPrice = tempPrice + 10;
    }
    if (equipmentCheckedState[3] === true) {
      tempPrice = tempPrice + 20;
    }
    return tempPrice;
  }

  return (
    <div>
      <div style={{ position: "absolute", left: 163, top: 228 }}>
        <Form.Label>Set Hours:</Form.Label>
      </div>
      <div style={{ position: "absolute", left: 160, top: 247 }}>
        {roomsCheckedState[0] === true && (
          <Form.Control value={mainHallHours} onChange={updateMainHallHours} />
        )}
      </div>
      <div style={{ position: "absolute", left: 160, top: 269 }}>
        {roomsCheckedState[1] === true && (
          <Form.Control
            value={kitchenHours}
            onChange={updateKitchenHoursHours}
          />
        )}
      </div>
      <div style={{ position: "absolute", left: 160, top: 291 }}>
        {roomsCheckedState[2] === true && (
          <Form.Control value={recRoom1Hours} onChange={updateRecRoom1Hours} />
        )}
      </div>
      <div style={{ position: "absolute", left: 160, top: 313 }}>
        {roomsCheckedState[3] === true && (
          <Form.Control
            value={potteryRoomHours}
            onChange={updatePotteryRoomHours}
          />
        )}
      </div>
      <div style={{ position: "absolute", left: 160, top: 381 }}>
        {equipmentCheckedState[0] === true && (
          <Form.Control value={stageAmount} onChange={updateStageAmount} />
        )}
      </div>

      <div style={{ position: "absolute", left: 100, top: 475 }}>
        <Button onClick={computePrice}>Compute Price</Button>
      </div>
    </div>
  );
}

export default CalculatePrice;
