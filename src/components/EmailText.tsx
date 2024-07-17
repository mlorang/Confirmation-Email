import { stringify } from "querystring";
import React from "react";

interface emailText {
  name: string;
  eventDate: string;
  dueDate: string;
  startTime: string;
  endTime: string;
  rooms: string;
  startTimePeriod: string;
  endTimePeriod: string;
  price: string;
  employeeName: string;
  employeeType: string;
}

function EmailText({
  name,
  eventDate,
  dueDate,
  startTime,
  endTime,
  rooms,
  startTimePeriod,
  endTimePeriod,
  price,
  employeeName,
  employeeType,
}: emailText) {
  return (
    <div>
      <p>
        {" "}
        Hi {name}!<br></br>
        <br></br> Thank you for booking the George Wilson Center. Please see and
        review attached guidelines for all information. Please be sure to print
        and return the forms that require{" "}
        <span className="textHighlight">
          signatures or initials (bolded and blue for your convenience)
        </span>
        {/*–{" "}
        Looks like the only signature needed is the COVID Waiver (final page)*/}
        . Also attached is a floor plan of the Main Hall if you wish to diagram
        your table/chair layout for your rental – Table and chair dimensions are
        included on this page as well.
        <br></br>
        <br></br>
        We look forward to your event scheduled for{" "}
        <span className="textHighlight">
          {eventDate}, from {startTime + startTimePeriod} –{" "}
          {endTime + endTimePeriod}
        </span>{" "}
        You are currently scheduled to rent the{" "}
        <span className="textHighlight">
          {rooms} from {startTime + startTimePeriod} – {endTime + endTimePeriod}
        </span>{" "}
        You are responsible for informing any additional planners, caterer, DJ
        or any other outside vendor that your/their arrival time cannot be any
        earlier than{" "}
        <span className="textHighlight">
          {startTime}
          {startTimePeriod}
        </span>{" "}
        Please note, you must have broken down your own decorations, left the
        rental facility the way you found it when you arrived and be leaving the
        facility at or before{" "}
        <span className="textHighlight">
          {endTime}
          {endTimePeriod + " "} Rentals running over time will be charged at the
          full hourly rate and subject to availability.
        </span>{" "}
        All persons in your party must be familiar with the Rules and
        Regulations (Attached), including our No-Alcohol Policy and updated
        guidelines due to COVID-19. Please note rules and regulations, including
        cleaning procedures and capacity requirements may be altered depending
        upon the Governor’s orders regarding COVID-19.
        <br></br>
        <br></br>
        Thank you for your payment of the{" "}
        <span className="textHighlight">
          $50 security deposit. Please note that the $50 security deposit will
          be returned following the event provided there are no damages.
        </span>{" "}
        All cancelled rentals will forfeit the{" "}
        <span className="textHighlight">$50</span> deposit. Renters that fail to
        give cancellation notice prior to 30 days preceding any use of the GWC
        will also forfeit additional monies paid. Cancellation requests must be
        made in writing (email is acceptable). Changing the date will also
        result in forfeiture of deposit. The remaining balance of{" "}
        <span className="textHighlight">
          ${price} must be paid by {dueDate}.
        </span>{" "}
        Payment can be made online using steps provided or please call
        302-366-7000 x1047 to schedule a time to come in. <br></br>
        <br></br>Steps to pay online: Your rental has been entered into our
        Registration System. If you did not create your own account, you should
        have automatically received a “Password auto-generated” email to the
        email address provided on your permit. If you did not receive this
        email, please contact us at 302-366-7000 x1047.
        <ol>
          <li>
            Follow the steps on the “Password Auto-generated” email to log in to
            your account.
          </li>{" "}
          <li>
            You can also access your account by clicking www.Newarkde.gov/play
          </li>{" "}
          <ol>
            <li>Click on the blue “Register Today”</li>{" "}
            <li>Click on ‘Login’ in the upper right of the page</li>
          </ol>{" "}
          <li>
            {" "}
            Enter email (Email listed on permit) and auto-generated password.
            You can change this once you are in your account.
          </li>
          <ol>
            <li>
              Once you are logged in, there should be a note of Balance Due
              Soon:
            </li>
            <li>Click Pay </li> <li>Click Add to Cart</li>{" "}
            <li>Click Checkout</li> <li>Click Continue to Payment</li>{" "}
            <li>Follow Prompts for payment, click Make a Payment</li>
          </ol>
        </ol>
        For any questions, please contact us at 302-366-7000 x1047, or reply
        all!
        <br></br>
        <br></br>
        Thank you and have a wonderful week!<br></br> <br></br>
        {employeeName}
        <br></br>
        {employeeType}
        <br></br>City of Newark Parks & Recreation Department <br></br>
        302-366-7000 x1047 | wjohnson@newark.de.us <br></br>
        www.NewarkDe.gov/play |@CityofNewarkDE
      </p>
    </div>
  );
}

export default EmailText;
