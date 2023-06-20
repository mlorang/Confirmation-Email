import React, { useState } from 'react';
import BalanceDue from './components/BalanceDue';
import ChangeEveryting from './components/ChangeEveryting';
import DateTimeAndRoom from './components/DateTimeAndRoom';
import Name from './components/Name';
import './style.css';

function App(): JSX.Element {
  const [name, setName] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [startTime, setStartTime] = useState<string>("");
  const [endTime, setEndTime] = useState<string>("");
  const [rooms, setRooms] = useState<string>("");
  const [balanceDue, setBalanceDue] = useState<string>("");
  const isResident = ["Resident","Non-Resident"];

  return (
    <div>
      <div className='body'>
        <ChangeEveryting name={name} setName={setName} date={date} setDate={setDate} startTime={startTime} setStartTime={setStartTime} endTime={endTime} setEndTime={setEndTime} rooms={rooms} setRooms={setRooms} balanceDue={balanceDue} setBalanceDue={setBalanceDue}></ChangeEveryting>
        <Name name={name}></Name>
        <DateTimeAndRoom date={date} startTime={startTime}  endTime={endTime}  rooms={rooms} ></DateTimeAndRoom> 
        <BalanceDue></BalanceDue>
      </div>
    </div>
  );
}

export default App;
