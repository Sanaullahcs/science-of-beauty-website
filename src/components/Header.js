import React, { useState, useEffect } from "react";
import "../assets/CustomCSS/Header.css";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";
// import Popup from "./Popup";
import ReactPixel from "react-facebook-pixel"; // Import ReactPixel
import fbPixelInit from "../../src/assets/fbPixil";

function Header() {
  // const [showPopup, setShowPopup] = useState(false);
  useEffect(() => {
    fbPixelInit(); // Initialize Facebook Pixel when the app loads
    ReactPixel.track("PageView", {
      page: "HomePage", // Replace 'HomePage' with the actual page name
    });
  }, []);
  // useEffect(() => {
  //   const visitedBefore = localStorage.getItem("visitedBefore");
  //   const isHomePage = window.location.pathname === "/";
  //   // if (!visitedBefore) {
  //   //   setShowPopup(true);
  //   //   localStorage.setItem("visitedBefore", true);
  //   // }
  //   // if (!visitedBefore && isHomePage) {
  //   //   setTimeout(() => {
  //   //     setShowPopup(true);
  //   //   }, 600);
  //   //   // localStorage.setItem("visitedBefore", true);
  //   // }
  // }, []);
  const handleClick = () => {
    const servicesDiv = document.getElementById("services");
    if (servicesDiv) {
      servicesDiv.scrollIntoView({ behavior: "smooth" });
    }
  };
  // const handleClosePopup = () => {
  //   setShowPopup(false);
  // };
  function redirectToLink() {
    window.open(
      "https://thescienceofbeautydallas.myaestheticrecord.com/online-booking?utm_source=sqmktg_email",
      "_blank"
    );
  }

  return (
    <>
      <div className="image-container"></div>
      <div className="bg-home-banner">
        <div>
          {/* {showPopup && <Popup onClose={handleClosePopup} />} */}
          <Grid container>
            <Grid items lg={7}>
              <div className="smallScreenCard">
                <p className="heading-header">
                  Welcome to <br /> The Science of Beauty
                </p>
                <p className="header-header-by">
                  <span className="preHeading2">
                    Research Based Beauty and wellness
                  </span>
                </p>
                <div
                  className="Screen-700"
                  style={{ display: "flex", justifyContent: "start" }}
                >
                  <Button
                    class="exploremoreHeaderBtn1"
                    disableTouchRipple
                    onClick={redirectToLink}
                  >
                    Book An Appointment
                  </Button>
                </div>
              </div>
            </Grid>
            <Grid items lg={0}></Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}
export default Header;
