import React from "react";
import "../assets/CustomCSS/CommonSemaglutide.css";
import { Button } from "@material-ui/core";

export default function SemaglutideHeader() {
  function redirectToLink() {
    window.open("https://direct.me/thescienceofbeautydallas", "_blank");
  }
  return (
    <div>
      <div className="semiBg">
        <div>
          <p className="semiHeader">Semaglutide Demand Continues to Soar</p>
          <p className="semiSubHeader">
            {" "}
            Is your Semaglutide marketing in place to convert the most bookings?
          </p>
          <Button className="BookTheAppo" onClick={redirectToLink}>
            Book an Appointment
          </Button>
        </div>
      </div>
    </div>
  );
}
