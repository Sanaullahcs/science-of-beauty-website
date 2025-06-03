import React, { useEffect } from "react";
import { Button } from "@material-ui/core";
import "../assets/CustomCSS/Appointments.css";
import ReactPixel from "react-facebook-pixel"; // Import ReactPixel
import fbPixelInit from "../../src/assets/fbPixil";

// function redirectToLink() {
//   if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
//     window.location.href = "tel:+18184150083"; // Open phone call on mobile devices
//   }  else {
//     window.location.href = "mailto:Info@thescienceofbeautydallas.com"; // Open email client on desktop/laptop
//   }
// }
function redirectToLink() {
  ReactPixel.track("Lead", {
    book: "Book Appointment", // Optional: name of the form
  });
  window.open(
    "https://na02.patientnow.com/a/thescienceofbeautydallas/OnlineBooking.aspx",
    "_blank"
  );
}

export default function Appointments() {
  return (
    <div>
      <div className="cardAppintments">
        <p className="subscribeHeading">BOOK NOW</p>
        <p className="AppoinmentsHeading">The Science of Beauty</p>
        <p className="appointmentEmail">Info@thescienceofbeautydallas.com</p>
        <Button
          className="bookAppointmentButton"
          target="_blank"
          onClick={redirectToLink}
        >
          Book an Appointment
        </Button>
      </div>
    </div>
  );
}
