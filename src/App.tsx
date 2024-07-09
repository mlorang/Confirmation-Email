import React, { useState } from "react";
import { timeList } from "./Time";
import "./style.css";
import EmailText from "./components/EmailText";
import GWCDate from "./components/GWCDate";
import GWCTime from "./components/GWCTime";
import GWCName from "./components/GWCName";
import RoomsAndEquipment from "./components/RoomsAndEquipment";
import ToDoList from "./components/ToDoList";

// "npm run deploy" command to deploy website

function App(): JSX.Element {
  const [name, setName] = useState<string>("");
  const [eventDate, setEventDate] = useState<string>("");
  const [dueDate, setDueDate] = useState<string>("");
  const [startTime, setStartTime] = useState<string>("");
  const [endTime, setEndTime] = useState<string>("");
  const [rooms, setRooms] = useState<string>("");
  const [equipment, setEquipment] = useState<string>("");
  const [balanceDue, setBalanceDue] = useState<string>("");
  const [startTimePeriod, setStartTimePeriod] = useState<string>("");
  const [endTimePeriod, setEndTimePeriod] = useState<string>("");
  const [price, setPrice] = useState<string>("0");

  return (
    <div className="app">
      <div className="renterInformationSettingBox">
        <GWCName name={name} setName={setName}></GWCName>

        <GWCDate
          eventDate={eventDate}
          setEventDate={setEventDate}
          dueDate={dueDate}
          setDueDate={setDueDate}
        ></GWCDate>
        <GWCTime
          startTime={startTime} //string start time
          setStartTime={setStartTime}
          endTime={endTime} //string end time
          setEndTime={setEndTime}
          startTimePeriod={startTimePeriod}
          setStartTimePeriod={setStartTimePeriod} //string start time a.m. or p.m.
          endTimePeriod={endTimePeriod}
          setEndTimePeriod={setEndTimePeriod} //string end time a.m. or p.m.
          timeList={timeList}
        ></GWCTime>
        <RoomsAndEquipment
          balanceDue={balanceDue}
          setBalanceDue={setBalanceDue}
          price={price}
          setPrice={setPrice}
          rooms={rooms}
          setRooms={setRooms}
          equipment={equipment}
          setEquipment={setEquipment}
        ></RoomsAndEquipment>
      </div>
      <div className="toDoList">
        <ToDoList></ToDoList>
      </div>

      <div className="emailBody">
        <EmailText
          name={name}
          eventDate={eventDate}
          dueDate={dueDate}
          startTime={startTime}
          endTime={endTime}
          rooms={rooms}
          startTimePeriod={startTimePeriod}
          endTimePeriod={endTimePeriod}
          price={price}
        ></EmailText>
      </div>
    </div>
  );
}

export default App;
