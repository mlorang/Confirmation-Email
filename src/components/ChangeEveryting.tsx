import { stringify } from 'querystring';
import React, { useState } from 'react'
import {Form} from "react-bootstrap";

interface Everything {
    name: string;
    setName: (newString: string) => void;
    date: string;
    setDate: (newString: string) => void;
    startTime: string;
    setStartTime: (newString: string) => void;
    endTime: string;
    setEndTime: (newString: string) => void;
    rooms: string;
    setRooms: (newString: string) => void;
    balanceDue: string
    setBalanceDue: (newString: string) => void;
}

function ChangeEveryting({name , setName , date, setDate , startTime , setStartTime , endTime , setEndTime , rooms , setRooms , balanceDue , setBalanceDue}: Everything) {
    const ROOMS = ["Main Hall", "Kitchen", "Rec Room 1 ", "Pavilion", "Pottery Room"];
    const [checkedState, setCheckedState] = useState<boolean[]>([false,false,false,false,false]);

    function handleOnChange(position: number) {
        const temp = !checkedState[position];
        const tempChecked = checkedState;
        tempChecked[position] = temp;
        const updateCheckedState = tempChecked;
        console.log(updateCheckedState);
        setCheckedState(updateCheckedState);
        let text: string[] = [];

        updateCheckedState.map((index: boolean ,  position: number):number => index === true ? text.push(ROOMS[position]) : 0);
        setRooms(text.join(" and "))
    }


    

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
      }
    function updateDate(event: React.ChangeEvent<HTMLInputElement>) {
        setDate(event.target.value);
      }
    function updateStartTime(event: React.ChangeEvent<HTMLInputElement>) {
        setStartTime(event.target.value);
      }
    function updateEndTime(event: React.ChangeEvent<HTMLInputElement>) {
        setEndTime(event.target.value);
      }
  return (
    <Form.Group controlId="formAnswerbox">
        <Form.Label>Change Name: </Form.Label>
        <Form.Control value={name} onChange={updateName} />
        <Form.Label>Change Date: </Form.Label>
        <Form.Control value={date} onChange={updateDate} />
        <Form.Label>Change StartTime: </Form.Label>
        <Form.Control value={startTime} onChange={updateStartTime} />
        <Form.Label>Change EndTime: </Form.Label>
        <Form.Control value={endTime} onChange={updateEndTime} />
        {ROOMS.map((choice: string, index: number) => 
        (<Form.Check type="checkbox" 
            label={choice} 
            value={choice} 
            onChange={() => handleOnChange(index)}
        />))}
        
        
    </Form.Group>
  )
}

export default ChangeEveryting