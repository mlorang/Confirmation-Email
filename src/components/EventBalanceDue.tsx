import React from "react";
import "../style.css";

interface Options {
  price: number;
}

function EventBalanceDue({ price }: Options): JSX.Element {
  return (
    <div>
      <br></br>
      Thank you for your payment of the{" "}
      <mark>
        $XX. Please note that the $XX security deposit will be returned
        following the event provided there are no damages.
      </mark>{" "}
      All cancelled rentals will forfeit the <mark>$XX</mark> deposit. Renters
      that fail to give cancellation notice prior to 30 days preceding any use
      of the XXX will also forfeit additional monies paid. Cancellation requests
      must be made in writing (email is acceptable). Changing the date will also
      result in forfeiture of deposit. The remaining balance of{" "}
      <mark>${price} must be paid by XXXXX XX, XXXX.</mark> Payment can be made
      online using steps provided or please call XXX-XXX- XXXX XXXXX to schedule
      a time to come in.
    </div>
  );
}

export default EventBalanceDue;
