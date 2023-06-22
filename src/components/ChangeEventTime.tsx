import React, { useState } from 'react'
import { Form } from 'react-bootstrap';

interface SetTime {
    startTime: string;
    setStartTime: (newString: string) => void;
    endTime: string;
    setEndTime: (newString: string) => void;
}

function ChangeEventTime({startTime, setStartTime, endTime, setEndTime}: SetTime) {
    const TIME = [" a.m." , " p.m."];
    const [time, setTime] = useState<string>("");
    
    function updateStartTime(event: React.ChangeEvent<HTMLInputElement>) {
      if(event.target.value.includes(time)) {
        setStartTime(event.target.value);
      }
      else {
        setStartTime(event.target.value + time)
      }
    }
    function updateEndTime(event: React.ChangeEvent<HTMLInputElement>) {
        setEndTime(event.target.value);
      }
      function updateTime(event: React.ChangeEvent<HTMLInputElement>) {
        setTime(event.target.value);
        }
  return (
    <div><div>
    <Form.Label> Change StartTime: </Form.Label>
    <Form.Control value={startTime} onChange={updateStartTime} />
    {TIME.map((choice: string) => (
      <Form.Check
        inline
        type="radio"
        onChange={updateTime}
        label={choice}
        value={choice}
        checked={choice === time}
        />
    ))}
    </div>
    <div>
    <Form.Label> Change EndTime: </Form.Label>
    <Form.Control value={endTime} onChange={updateEndTime} />
    {TIME.map((choice: string) => (
      <Form.Check
        type="radio"
        onChange={updateTime}
        label={choice}
        value={choice}
        checked={choice === time}
        />
    ))}
    </div></div>
  )
}

export default ChangeEventTime