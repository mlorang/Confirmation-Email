import React, { useState } from "react";
import { Form } from "react-bootstrap";
import CalculatePrice from "./CalculatePrice";

interface EventPrice {
  balanceDue: string;
  setBalanceDue: (newString: string) => void;
  price: string;
  setPrice: (newString: string) => void;
  rooms: string;
  setRooms: (newString: string) => void;
  equipment: string;
  setEquipment: (newString: string) => void;
}

function RoomsAndEquipment({
  balanceDue,
  setBalanceDue,
  price,
  setPrice,
  rooms,
  setRooms,
  equipment,
  setEquipment,
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
  const EQUIPMENT = ["Stage", "Podium", "Projector", "Microphone with Speaker"];
  const [roomsCheckedState, setRoomsCheckedState] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
  ]);
  const [equipmentCheckedState, setEquipmentCheckedState] = useState<boolean[]>(
    [false, false, false, false]
  );

  function handleSelecetedRoomChange(position: number) {
    const temp = !roomsCheckedState[position];
    const tempChecked = roomsCheckedState;
    tempChecked[position] = temp;
    const updateCheckedState = tempChecked;
    console.log(updateCheckedState);
    setRoomsCheckedState(updateCheckedState);
    let text: string[] = [];

    updateCheckedState.map((index: boolean, position: number): number =>
      index === true ? text.push(ROOMS[position]) : 0
    );
    setRooms(text.join(" and "));
  }

  function handleSelecetedEquipmentChange(position: number) {
    const temp = !equipmentCheckedState[position];
    const tempChecked = equipmentCheckedState;
    tempChecked[position] = temp;
    const updateCheckedState = tempChecked;
    console.log(updateCheckedState);
    setEquipmentCheckedState(updateCheckedState);
    let text: string[] = [];

    updateCheckedState.map((index: boolean, position: number): number =>
      index === true ? text.push(EQUIPMENT[position]) : 0
    );
    setEquipment(text.join(" and "));
  }

  function updateResident(event: React.ChangeEvent<HTMLInputElement>) {
    setResident(event.target.value);
  }

  return (
    <div>
      <Form.Label>Resident Type:</Form.Label>
      {RESIDENTS.map((choice: string) => (
        <Form.Check
          type="radio"
          onChange={updateResident}
          label={choice}
          value={choice}
          checked={choice === resident}
        />
      ))}
      <Form.Label>Select Rooms:</Form.Label>
      {ROOMS.map((choice: string, index: number) => (
        <Form.Check
          type="checkbox"
          label={choice}
          value={choice}
          onChange={() => handleSelecetedRoomChange(index)}
        />
      ))}
      <Form.Label>Additional Equipment:</Form.Label>
      {EQUIPMENT.map((choice: string, index: number) => (
        <Form.Check
          type="checkbox"
          label={choice}
          value={choice}
          onChange={() => handleSelecetedEquipmentChange(index)}
        />
      ))}
      <CalculatePrice
        resident={resident}
        roomsCheckedState={roomsCheckedState}
        equipmentCheckedState={equipmentCheckedState}
        price={price}
        setPrice={setPrice}
      ></CalculatePrice>
    </div>
  );
}

export default RoomsAndEquipment;
