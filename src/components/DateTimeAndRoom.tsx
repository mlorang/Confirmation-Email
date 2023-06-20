import React from 'react'
import { Form } from 'react-bootstrap';
import '../style.css';

interface RentalDateTimeRoom {
  date: string;
  startTime: string;
  endTime: string;
  rooms: string;
}

function DateTimeAndRoom({date  , startTime  , endTime , rooms }: RentalDateTimeRoom): JSX.Element {
  
  return (
      <div>We look forward to your event scheduled for {date}, from {startTime} – {endTime}
        You are currently scheduled to rent the {rooms} from {startTime} – {endTime} You are responsible
        for informing any additional planners, caterer, DJ or any other outside vendor that your/their arrival time
        cannot be any earlier than {startTime} Please note, you must have broken down your own decorations,
        left the rental facility the way you found it when you arrived and be leaving the facility at or before {endTime}
        Rentals running over time will be charged at the full hourly rate and subject to availability.
        All persons in your party must be familiar with the Rules and Regulations (Attached), including
        our No-Alcohol Policy and updated guidelines due to COVID-19. Please note rules and regulations, including
        cleaning procedures and capacity requirements may be altered depending upon the Governor’s orders
        regarding COVID-19.
      </div>
  )
}

export default DateTimeAndRoom