import React from 'react'
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
    balanceDue: string
    setBalanceDue: (newString: string) => void;
    isResident: string[];
    resident: string;
    setResident: (newString: string) => void;
    hours: number;
    setHours: (newNumber: number) => void;
    price: number;
    setPrice: (newNumber: number) => void;
}

function ChangeEveryting({name , setName , 
    date, setDate , startTime , 
    setStartTime , endTime , 
    setEndTime , balanceDue , setBalanceDue , 
    isResident, resident, 
    setResident, hours, setHours, price, setPrice}: Everything) {
    const RESIDENTS = ["Resident","Non-Resident"];

    


    

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
    function updateResident(event: React.ChangeEvent<HTMLInputElement>) {
      setResident(event.target.value);
      }
    function updateHours(event: React.ChangeEvent<HTMLInputElement>) {
      if (isNaN(parseInt(event.target.value)) || parseInt(event.target.value) >= 0) {
        setHours(parseInt(event.target.value) || 0);
        if(resident === "Non-Resident") {
          price = hours * 65;
          setPrice(price);
          console.log(price);
        }
        else{
          const temp = hours * 65;
          setPrice(temp);
          console.log(price);
        }
      }
    }
    function updatePrice(resident: string, hours: number) {
      if(resident === "Non-Resident") {
        const temp = hours * 65;
        setPrice(temp);
      }
      else{
        const temp = hours * 65;
        setPrice(temp);
      }
    }
  return (
    <div>
    <div style={{textAlign: 'center'}}>
    <Form.Group controlId="formAnswerbox">
        <Form.Label> Change Name: </Form.Label>
        <Form.Control value={name} onChange={updateName} />
        <Form.Label> Change Date: </Form.Label>
        <Form.Control value={date} onChange={updateDate} />
        <Form.Label> Change StartTime: </Form.Label>
        <Form.Control value={startTime} onChange={updateStartTime} />
        <Form.Label> Change EndTime: </Form.Label>
        <Form.Control value={endTime} onChange={updateEndTime} />
        <Form.Label> Change Hours: </Form.Label>
        <Form.Control value={hours} onChange={updateHours} />
        </Form.Group>
        </div>
        
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
        </div>
  )
}

export default ChangeEveryting