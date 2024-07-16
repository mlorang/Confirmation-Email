import React, { useState, useEffect, useRef } from "react";
import { Button, Form } from "react-bootstrap";

function ToDoList() {
  const TASKS = [
    "Voicemails",
    "Call Log",
    "Emails",
    "Setup Info",
    "Payments",
    "Pending Rentals",
  ];
  const [tasksCheckedState, setTasksCheckedState] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [allTasksComplete, setAllTasksComplete] = useState<boolean>(false);

  function handleTasksChange(position: number) {
    const temp = !tasksCheckedState[position];
    const tempChecked = tasksCheckedState;
    tempChecked[position] = temp;
    const updateCheckedState = tempChecked;
    setTasksCheckedState(updateCheckedState);
    setAllTasksComplete(tasksCheckedState.every((value) => value === true));
    console.log(updateCheckedState);
  }
  return (
    <div>
      <Form.Label>To Do List: </Form.Label>
      {TASKS.map((task: string, index: number) => (
        <Form.Check
          type="checkbox"
          label={task}
          value={task}
          onChange={() => handleTasksChange(index)}
        ></Form.Check>
      ))}
      {allTasksComplete === true ? <button>Celebrate</button> : ""}
    </div>
  );
}

export default ToDoList;
