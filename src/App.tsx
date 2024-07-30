import React, { useState } from "react";
import { timeList } from "./Time";
import "./style.css";
import EmailText from "./components/EmailText";
import GWCDate from "./components/GWCDate";
import GWCTime from "./components/GWCTime";
import GWCName from "./components/GWCName";
import RoomsAndEquipment from "./components/RoomsAndEquipment";
import ToDoList from "./components/ToDoList";
import EmployeeInfo from "./components/EmployeeInfo";
import { Form, FormCheck } from "react-bootstrap";
import LatePaymentEmailText from "./components/LatePaymentEmailText";

// "npm run deploy" command to deploy website

function App(): JSX.Element {
  const [employeeName, setEmployeeName] = useState<string>("");
  const [employeeType, setEmployeeType] = useState<string>("");
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
  const [emailType, setEmailType] = useState<string>("Event Confirmation");
  const EMAILTYPE = ["Event Confirmation", "Late Payment Reminder"];

  function updateEventType(event: React.ChangeEvent<HTMLInputElement>) {
    setEmailType(event.target.value);
  }

  return (
    <div className="app">
      {/* <div className="employeeInfo">
        <EmployeeInfo
          employeeName={employeeName}
          setEmployeeName={setEmployeeName}
          employeeType={employeeType}
          setEmployeeType={setEmployeeType}
        ></EmployeeInfo>
      </div>
  */}
      <div className="noteForUser">
        <span style={{ textDecoration: "underline", fontWeight: "bold" }}>
          NOTE FOR USER:
        </span>{" "}
        When sending email, highlight <b>bolded</b> text with{" "}
        <mark>yellow</mark>
      </div>
      <div className="renterInformationSettingBox">
        <GWCName customerName={name} setCustomerName={setName}></GWCName>
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
      <div className="emailType">
        {EMAILTYPE.map((type: string) => (
          <Form.Check
            type="radio"
            label={type}
            value={type}
            checked={type === emailType}
            onChange={updateEventType}
          ></Form.Check>
        ))}
      </div>
      <div className="emailBody">
        {emailType === "Event Confirmation" ? (
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
        ) : (
          <LatePaymentEmailText
            name={name}
            eventDate={eventDate}
            dueDate={dueDate}
          ></LatePaymentEmailText>
        )}
      </div>
    </div>
  );
}

export default App;
