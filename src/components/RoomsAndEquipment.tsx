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
  let [equipmentChecker, setEquipmentChecker] = useState<boolean>(true);
  let [roomChecker, setRoomChecker] = useState<boolean>(true);

  const ROOMS = [
    "Main Hall",
    "Kitchen",
    "Rec Room 1",
    "Pottery Room",
    "Pavilion",
  ];
  const EQUIPMENT = [
    "Stage[s] ",
    "Podium",
    "Projector",
    "Microphone with Speaker",
    "None",
  ];
  const [roomsPriceRate, setRoomsPriceRate] = useState<number[]>([
    65, 45, 45, 45, 0,
  ]);
  const ADDITIONALEQUIPMENTPRICE = ["($10 per)", "($10)", "($10)", "($20)", ""];
  const [roomsCheckedState, setRoomsCheckedState] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
  ]);

  const [equipmentCheckedState, setEquipmentCheckedState] = useState<boolean[]>(
    [false, false, false, false, false]
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
    setRoomChecker(roomsCheckedState.every((value) => value === false));
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
    setEquipmentChecker(
      equipmentCheckedState.every((value) => value === false)
    );
  }

  function updateResident(event: React.ChangeEvent<HTMLInputElement>) {
    setResident(event.target.value);

    const roomPrice = roomsPriceRate.map((price: number): number =>
      resident === "Resident" ? (price = price + 5) : (price = price - 5)
    );
    if (roomPrice[4] === -5 || roomPrice[4] === 5) {
      roomPrice[4] = 0;
    }
    setRoomsPriceRate(roomPrice);
  }

  return (
    <div>
      <Form.Label>
        {resident === "Resident" || resident === "Non-Resident" ? (
          <span>✔️</span>
        ) : (
          <span>❌</span>
        )}
        Resident Type:
      </Form.Label>
      {RESIDENTS.map((choice: string) => (
        <Form.Check
          type="radio"
          onChange={updateResident}
          label={choice}
          value={choice}
          checked={choice === resident}
        />
      ))}
      <Form.Label>
        {" "}
        {roomChecker === false ? <span>✔️</span> : <span>❌</span>}Select Rooms:
      </Form.Label>
      {ROOMS.map((choice: string, index: number) => (
        <Form.Check
          type="checkbox"
          label={choice + " ($" + roomsPriceRate[index] + ")"}
          value={choice}
          onChange={() => handleSelecetedRoomChange(index)}
        />
      ))}
      <Form.Label>
        {equipmentChecker === false ? <span>✔️</span> : <span>❌</span>}
        Additional Equipment:
      </Form.Label>
      {EQUIPMENT.map((choice: string, index: number) => (
        <Form.Check
          type="checkbox"
          label={choice + " " + ADDITIONALEQUIPMENTPRICE[index]}
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
