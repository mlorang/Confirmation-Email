import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import ChangeEventRoomPrice from "./ChangeEventRoomPrice";

interface EventPrice {
  balanceDue: string;
  setBalanceDue: (newString: string) => void;
  price: number;
  setPrice: (newNumber: number) => void;
  rooms: string;
  setRooms: (newString: string) => void;
}

function ChangeEventPrice({
  balanceDue,
  setBalanceDue,

  price,
  setPrice,
  rooms,
  setRooms,
}: EventPrice) {
  const RESIDENTS = ["Resident", "Non-Resident"];
  const [resident, setResident] = useState<string>("Non-Resident");
  const ROOMS = [
    "Main Hall",
    "Kitchen",
    "Rec Room 1",
    "Pottery Room",
    "Pavilion",
  ];
  const [checkedState, setCheckedState] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
  ]);

  function handleSelecetedRoomChange(position: number) {
    const temp = !checkedState[position];
    const tempChecked = checkedState;
    tempChecked[position] = temp;
    const updateCheckedState = tempChecked;
    console.log(updateCheckedState);
    setCheckedState(updateCheckedState);
    let text: string[] = [];

    updateCheckedState.map((index: boolean, position: number): number =>
      index === true ? text.push(ROOMS[position]) : 0
    );
    setRooms(text.join(" and "));
  }

  function updateResident(event: React.ChangeEvent<HTMLInputElement>) {
    setResident(event.target.value);
  }

  return (
    <div>
      {RESIDENTS.map((choice: string) => (
        <Form.Check
          type="radio"
          onChange={updateResident}
          label={choice}
          value={choice}
          checked={choice === resident}
        />
      ))}
      <Form.Label>Select Rooms</Form.Label>
      {ROOMS.map((choice: string, index: number) => (
        <Form.Check
          type="checkbox"
          label={choice}
          value={choice}
          onChange={() => handleSelecetedRoomChange(index)}
        />
      ))}
      <ChangeEventRoomPrice
        resident={resident}
        checkedState={checkedState}
        price={price}
        setPrice={setPrice}
      ></ChangeEventRoomPrice>
    </div>
  );
}

export default ChangeEventPrice;
