import React, { useState } from 'react';
import BalanceDue from './components/BalanceDue';
import DateTimeAndRoom from './components/DateTimeAndRoom';
import Name from './components/Name';
import './style.css';

function App(): JSX.Element {
  const [name, setName] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [startTime, setStartTime] = useState<string>("");
  const [endTime, setEndTime] = useState<string>("");
  const [rooms, setRooms] = useState<string[]>(["Kitchen",
  "Main Hall",
  "Pavilion",
  "Pottery Studio",
  "Recreation Room 1 (Dance Room)"])
  const [balanceDue, setBalanceDue] = useState<number>(0);
  const isResident = ["Resident","Non-Resident"];

  return (
    <div>
      <div className='body'>
        <Name name={name} setName={setName}></Name>
        <DateTimeAndRoom></DateTimeAndRoom> 
        <BalanceDue></BalanceDue>
      </div>
    </div>
  );
}

export default App;
