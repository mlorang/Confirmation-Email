import React, { useState } from "react";
import ChangeEventDate from "./components/ChangeEventDate";
import ChangeEventPrice from "./components/ChangeEventPrice";
import ChangeEventTime from "./components/ChangeEventTime";
import ChangeRenterName from "./components/ChangeRenterName";
import EventBalanceDue from "./components/EventBalanceDue";
import EventDateTimeRoom from "./components/EventDateTimeRoom";
import EventEndText from "./components/EventEndText";
import EventName from "./components/EventName";
import "./style.css";

function App(): JSX.Element {
  const [name, setName] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [startTime, setStartTime] = useState<string>("");
  const [endTime, setEndTime] = useState<string>("");
  const [rooms, setRooms] = useState<string>("");
  const [balanceDue, setBalanceDue] = useState<string>("");
  const [startTimePeriod, setStartTimePeriod] = useState<string>("");
  const [endTimePeriod, setEndTimePeriod] = useState<string>("");
  const [price, setPrice] = useState<string>("0");

  return (
    <div className="app">
      <div className="renterInformationSettingBox">
        <ChangeRenterName name={name} setName={setName}></ChangeRenterName>

        <ChangeEventDate date={date} setDate={setDate}></ChangeEventDate>

        <ChangeEventTime
          startTime={startTime} //string start time
          setStartTime={setStartTime}
          endTime={endTime} //string end time
          setEndTime={setEndTime}
          startTimePeriod={startTimePeriod}
          setStartTimePeriod={setStartTimePeriod} //string start time a.m. or p.m.
          endTimePeriod={endTimePeriod}
          setEndTimePeriod={setEndTimePeriod} //string end time a.m. or p.m.
        ></ChangeEventTime>
        <ChangeEventPrice
          balanceDue={balanceDue}
          setBalanceDue={setBalanceDue}
          price={price}
          setPrice={setPrice}
          rooms={rooms}
          setRooms={setRooms}
        ></ChangeEventPrice>
      </div>
      <div className="emailBody">
        <EventName name={name}></EventName>

        <EventDateTimeRoom
          date={date}
          startTime={startTime}
          endTime={endTime}
          rooms={rooms}
          startTimePeriod={startTimePeriod}
          endTimePeriod={endTimePeriod}
        ></EventDateTimeRoom>

        <EventBalanceDue price={price}></EventBalanceDue>
        {/*<EventEndText></EventEndText>*/}
      </div>
    </div>
  );
}

export default App;
