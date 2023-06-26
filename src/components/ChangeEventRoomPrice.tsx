import React, { useState } from "react";
import { Form } from "react-bootstrap";

interface BooleanValues {
  checkedState: boolean[];
  hours: string[];
  setHours: (newStringArray: string[]) => void;
}

function ChangeEventRoomPrice({
  checkedState,
  hours,
  setHours,
}: BooleanValues) {
  const [visible, setVisible] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
  ]);
  return <div></div>;
}

export default ChangeEventRoomPrice;
