import React, { useState, useEffect } from "react";
import "../assets/CustomCSS/Header.css";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";
import Popup from "./Popup";

function Header() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const visitedBefore = localStorage.getItem("visitedBefore");
    const isHomePage = window.location.pathname === "/";
    // if (!visitedBefore) {
    //   setShowPopup(true);
    //   localStorage.setItem("visitedBefore", true);
    // }
    if (!visitedBefore && isHomePage) {
      setTimeout(() => {
        setShowPopup(true);
      }, 600);
      // localStorage.setItem("visitedBefore", true);
    }
  }, []);
  const handleClick = () => {
    const servicesDiv = document.getElementById("services");
    if (servicesDiv) {
      servicesDiv.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return (
    <>
      <div className="image-container"></div>
      <div className="bg-home-banner">
        <div>
          {showPopup && <Popup onClose={handleClosePopup} />}
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
                <div style={{ display: "flex", justifyContent: "start" }}>
                  <Button
                    class="exploremoreHeaderBtn"
                    disableTouchRipple
                    onClick={handleClick}
                  >
                    Explore More
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
