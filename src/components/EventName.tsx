import React from "react";
import "../style.css";

interface RenterName {
  name: string;
}

function EventName({ name }: RenterName): JSX.Element {
  return (
    <div>
      <div className="body">
        Hi {name}!<div></div>
        Thank you for booking the XXXXXX XXXXXX XXXXXX. Please see and review
        attached guidelines for all information. Please be sure to print and
        return the forms that require{" "}
        <mark>signatures or initials (highlighted for your convenience)</mark> –
        Looks like the only signature needed is the COVID Waiver (final page).
        Also attached is a floor plan of the Main Hall if you wish to diagram
        your table/chair layout for your rental – Table and chair dimensions are
        included on this page as well.
      </div>
    </div>
  );
}

export default EventName;
