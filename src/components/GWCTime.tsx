import React from "react";
import { Form } from "react-bootstrap";

interface SetTime {
  startTime: string;
  setStartTime: (newString: string) => void;
  endTime: string;
  setEndTime: (newString: string) => void;
  startTimePeriod: string;
  setStartTimePeriod: (newString: string) => void;
  endTimePeriod: string;
  setEndTimePeriod: (newString: string) => void;
  timeList: string[];
}

function GWCTime({
  startTime,
  setStartTime,
  endTime,
  setEndTime,
  startTimePeriod,
  setStartTimePeriod,
  endTimePeriod,
  setEndTimePeriod,
  timeList,
}: SetTime) {
  const TIMEPERIOD = [" a.m.", " p.m."];

  function updateStartTime(event: React.ChangeEvent<HTMLInputElement>) {
    setStartTime(event.target.value);
    console.log(event.target.value);
  }
  function updateEndTime(event: React.ChangeEvent<HTMLInputElement>) {
    setEndTime(event.target.value);
  }
  function updateStartTimePeriod(event: React.ChangeEvent<HTMLInputElement>) {
    setStartTimePeriod(event.target.value);
    console.log(event.target.value);
  }
  function updateEndTimePeriod(event: React.ChangeEvent<HTMLInputElement>) {
    setEndTimePeriod(event.target.value);
    console.log(endTimePeriod);
  }
  return (
    <div>
      <div>
        <Form.Label> StartTime: </Form.Label>
        <Form.Control value={startTime} onChange={updateStartTime} />

        <br></br>
        {TIMEPERIOD.map((choice: string) => (
          <Form.Check
            style={{ overflow: "auto", float: "left" }}
            type="radio"
            onChange={updateStartTimePeriod}
            label={choice}
            value={choice}
            checked={choice === startTimePeriod}
          />
        ))}
      </div>
      <br></br>
      <div>
        <Form.Label>EndTime: </Form.Label>
        <Form.Control value={endTime} onChange={updateEndTime} />
        <br></br>
        {TIMEPERIOD.map((choice: string) => (
          <Form.Check
            style={{ overflow: "auto", float: "left" }}
            type="radio"
            onChange={updateEndTimePeriod}
            label={choice}
            value={choice}
            checked={choice === endTimePeriod}
          />
        ))}
      </div>
      <br></br>
    </div>
  );
}

export default GWCTime;
