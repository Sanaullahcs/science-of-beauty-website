import React from "react";
import "../assets/CustomCSS/CommonSemaglutide.css";
import { Button } from "@material-ui/core";

export default function SemaglutideHeader() {
  function handleAction() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      window.location.href = "tel:+2142729240"; // Open phone call on mobile devices
    }  else {
      window.location.href = "mailto:Info@thescienceofbeautydallas.com"; // Open email client on desktop/laptop
    }
  }

  return (
    <div>
      <div className="semiBg">
        <div>
          <p className="semiHeader">
            Semaglutide: A Revolutionary Approach to Wellness at The Science of Beauty
          </p>
          <p className="semiSubHeader">
            A groundbreaking treatment offering a new horizon in weight management and type 2 diabetes care.
          </p>
          <Button className="BookTheAppo" onClick={handleAction}>
            Book an Appointment
          </Button>
        </div>
      </div>
    </div>
  );
}