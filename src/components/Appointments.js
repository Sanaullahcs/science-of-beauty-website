import React from "react";
import { Button } from "@material-ui/core";
import "../assets/CustomCSS/Appointments.css";
function redirectToLink() {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    window.location.href = "tel:+18184150083"; // Open phone call on mobile devices
  }  else {
    window.location.href = "mailto:Info@thebeautyofsciencedallas.com"; // Open email client on desktop/laptop
  }
}
export default function Appointments() {
  return (
    <div>
      <div className="cardAppintments">
        <p className="subscribeHeading">Subscribe</p>
        <p className="AppoinmentsHeading">The Science of Beauty</p>
        <p className="appointmentEmail">Info@thebeautyofsciencedallas.com</p>
        <Button className="bookAppointmentButton" onClick={redirectToLink}>
          Book an Appointment
        </Button>
      </div>
    </div>
  );
}
