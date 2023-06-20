import React from 'react'
import {Form} from "react-bootstrap";

interface RenterName {
  name: string;
  setName: (newString: string) => void;
}

function Name({name, setName}: RenterName): JSX.Element {
  function updateName(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }


  return (
    <div>
    <Form.Group controlId="formAnswerbox">
      <Form.Control value={name} onChange={updateName} />
    </Form.Group><div className="body">Hi {name}!
      Thank you for booking the XXXXXX XXXXXX XXXXXX. Please see and review attached guidelines for all
      information. Please be sure to print and return the forms that require signatures or initials (highlighted for
      your convenience) – Looks like the only signature needed is the COVID Waiver (final page). Also
      attached is a floor plan of the Main Hall if you wish to diagram your table/chair layout for your rental –
        Table and chair dimensions are included on this page as well.  </div>
      </div>
  )
}

export default Name