import React from "react";
import "../style.css";

interface RentalDateTimeRoom {
  date: string;
  startTime: string;
  endTime: string;
  rooms: string;
  startTimePeriod: string;
  endTimePeriod: string;
}

function EventDateTimeAndRoom({
  date,
  startTime,
  endTime,
  rooms,
  startTimePeriod,
  endTimePeriod,
}: RentalDateTimeRoom): JSX.Element {
  return (
    <div>
      <br></br>
      We look forward to your event scheduled for{" "}
      <mark>
        {date}, from {startTime + startTimePeriod} –
      </mark>
      You are currently scheduled to rent the{" "}
      <mark>
        {rooms} from {startTime + startTimePeriod} – {endTime + endTimePeriod}
      </mark>{" "}
      You are responsible for informing any additional planners, caterer, DJ or
      any other outside vendor that your/their arrival time cannot be any
      earlier than{" "}
      <mark>
        {startTime}
        {startTimePeriod}
      </mark>{" "}
      Please note, you must have broken down your own decorations, left the
      rental facility the way you found it when you arrived and be leaving the
      facility at or before{" "}
      <mark>
        {endTime}
        {endTimePeriod}
        Rentals running over time will be charged at the full hourly rate and
        subject to availability.
      </mark>
      All persons in your party must be familiar with the Rules and Regulations
      (Attached), including our No-Alcohol Policy and updated guidelines due to
      COVID-19. Please note rules and regulations, including cleaning procedures
      and capacity requirements may be altered depending upon the Governor’s
      orders regarding COVID-19.
    </div>
  );
}

export default EventDateTimeAndRoom;
