import React from "react";

interface LatePaymentText {
  name: string;
  eventDate: string;
  dueDate: string;
}

function LatePaymentEmailText({ name, eventDate, dueDate }: LatePaymentText) {
  return (
    <p>
      {" "}
      Hi {name}, <br></br>
      <br></br>This is a reminder from the George Wilson Center to make your
      payment for your rental on{" "}
      <b>
        {eventDate} by {dueDate}. If your payment is not made, we will have to
        cancel your event.
      </b>
      <br></br>
      <br></br>
      Please reply all to this email or give us a call back at 302-366-7000
      x1047.
      <br></br>
      <br></br>
      Regards,<br></br>
      <br></br>
      Bill Johnson
      <br></br>
      GWC Coordinator/ Recreation Supervisor/ Volunteer Coordinator
      <br></br>City of Newark Parks & Recreation Department <br></br>
      302-366-7000 x1047 | wjohnson@newark.de.us <br></br>
      www.NewarkDe.gov/play |@CityofNewarkDE
    </p>
  );
}

export default LatePaymentEmailText;
