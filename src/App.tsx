import React, { useState } from 'react';
import BalanceDue from './components/BalanceDue';
import ChangeEveryting from './components/ChangeEveryting';
import ChangeRoom from './components/ChangeRoom';
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
  const [resident, setResident] = useState<string>("Non-Resident");
  const [hours, setHours] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);
  const isResident = ["Resident","Non-Resident"];

  return (
    <div>
      <div className='body'>
        <ChangeEveryting 
          name={name} setName={setName} 
          date={date} setDate={setDate} 
          startTime={startTime} setStartTime={setStartTime} 
          endTime={endTime} setEndTime={setEndTime} 
          balanceDue={balanceDue} setBalanceDue={setBalanceDue} 
          isResident={isResident} resident={resident} setResident={setResident} 
          hours={hours} setHours={setHours}
          price={price} setPrice={setPrice}></ChangeEveryting>

          <ChangeRoom rooms={rooms} setRooms={setRooms}></ChangeRoom>
        <Name 
          name={name}></Name>

        <DateTimeAndRoom 
          date={date} 
          startTime={startTime}  endTime={endTime} 
          rooms={rooms}></DateTimeAndRoom> 

        <BalanceDue 
          resident={resident} 
          hours={hours}
          price={price}></BalanceDue>
      </div>
    </div>
  );
}

export default App;
