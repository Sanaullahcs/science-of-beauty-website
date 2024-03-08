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
          <p className="semiHeader">
            Semaglutide: A Revolutionary Approach to Wellness at The Science of
            Beauty
          </p>
          <p className="semiSubHeader">
            {" "}
            A groundbreaking treatment offering a new horizon in weight management and type 2 diabetes care.
          </p>
          <Button className="BookTheAppo" onClick={redirectToLink}>
            Book an Appointment
          </Button>
        </div>
      </div>
    </div>
  );
}
