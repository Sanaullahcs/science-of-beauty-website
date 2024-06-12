import React from "react";
import { Button } from "@material-ui/core";
import "../assets/CustomCSS/Appointments.css";
// function redirectToLink() {
//   if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
//     window.location.href = "tel:+18184150083"; // Open phone call on mobile devices
//   }  else {
//     window.location.href = "mailto:Info@thescienceofbeautydallas.com"; // Open email client on desktop/laptop
//   }
// }
function redirectToLink() {
  window.location.href = "https://ghkuz.myaestheticrecord.com/online-booking";
}
export default function Appointments() {
  return (
    <div>
      <div className="cardAppintments">
        <p className="subscribeHeading">Subscribe</p>
        <p className="AppoinmentsHeading">The Science of Beauty</p>
        <p className="appointmentEmail">Info@thescienceofbeautydallas.com</p>
        <Button className="bookAppointmentButton" onClick={redirectToLink}>
          Book an Appointment
        </Button>
      </div>
    </div>
  );
}
