

interface Options {
  resident: string;
  hours: number;
  price: number;
}

function BalanceDue({resident, hours, price}: Options): JSX.Element {

  return (
    <div>Thank you for your payment of the $XX. Please note that the $XX security deposit will be returned 
    following the event provided there are no damages. All cancelled rentals will forfeit the $XX deposit. 
    Renters that fail to give cancellation notice prior to 30 days preceding any use of the XXX will also 
    forfeit additional monies paid. Cancellation requests must be made in writing (email is acceptable). 
    Changing the date will also result in forfeiture of deposit.  The remaining balance of ${price} must be 
    paid by XXXXX XX, XXXX. Payment can be made online using steps provided or please call XXX-XXX-
    XXXX XXXXX to schedule a time to come in. </div>
  )
}

export default BalanceDue