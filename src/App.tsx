import React, { useState } from 'react';
import BalanceDue from './components/BalanceDue';
import ChangeEventDate from './components/ChangeEventDate';
import ChangeEventPrice from './components/ChangeEventPrice';
import ChangeEventRoom from './components/ChangeEventRoom';
import ChangeEventTime from './components/ChangeEventTime';
import ChangeRenterName from './components/ChangeRenterName';
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
  const [hours, setHours] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);

  return (
    <div>
      <div className='body'>
        <ChangeRenterName 
          name={name} 
          setName={setName}></ChangeRenterName>

        <ChangeEventDate 
          date={date} 
          setDate={setDate}></ChangeEventDate>

        <ChangeEventTime 
          startTime={startTime} 
          setStartTime={setStartTime} 
          endTime={endTime} 
          setEndTime={setEndTime} ></ChangeEventTime>

          <ChangeEventPrice 
            balanceDue={balanceDue} 
            setBalanceDue={setBalanceDue} 
            hours={hours} 
            setHours={setHours} 
            price={price} 
            setPrice={setPrice}></ChangeEventPrice>

          <ChangeEventRoom 
            rooms={rooms} 
            setRooms={setRooms}></ChangeEventRoom>
        
        <Name 
          name={name}></Name>

        <DateTimeAndRoom 
          date={date} 
          startTime={startTime}  endTime={endTime} 
          rooms={rooms}></DateTimeAndRoom> 

        <BalanceDue 
          hours={hours}
          price={price}></BalanceDue>
          
      </div>
    </div>
  );
}

export default App;
