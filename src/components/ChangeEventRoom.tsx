import React, { useState } from "react";
import { Form } from "react-bootstrap";

interface AllRooms {
  rooms: string;
  setRooms: (newString: string) => void;
}

function ChangeRoom({ rooms, setRooms }: AllRooms) {
  const ROOMS = [
    "Main Hall",
    "Kitchen",
    "Rec Room 1 ",
    "Pavilion",
    "Pottery Room",
  ];
  const [checkedState, setCheckedState] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
  ]);

  function handleOnChange(position: number) {
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
    console.log(text.join(" and "));
    console.log(updateCheckedState);
  }

  return (
    <div>
      <Form.Group controlId="formAnswerbox">
        {ROOMS.map((choice: string, index: number) => (
          <Form.Check
            inline
            //style={{position:'absolute',right:'0'}}
            type="checkbox"
            label={choice}
            value={choice}
            onChange={() => handleOnChange(index)}
          />
        ))}
      </Form.Group>
    </div>
  );
}

export default ChangeRoom;
