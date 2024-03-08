import React from "react";
import { Button } from "@material-ui/core";
import "../assets/CustomCSS/Appointments.css";
function redirectToLink() {
    window.open("https://direct.me/thescienceofbeautydallas", "_blank");
}
export default function Appointments() {
  return (
    <div>
      <div className="cardAppintments">
        <p className="subscribeHeading">Subscribe</p>
        <p className="AppoinmentsHeading">The Science of Beauty</p>
        <p className="appointmentEmail">@thescienceofbeauty.co</p>
        <Button className="bookAppointmentButton" onClick={redirectToLink}>
          Book an Appointment
        </Button>
      </div>
    </div>
  );
}
