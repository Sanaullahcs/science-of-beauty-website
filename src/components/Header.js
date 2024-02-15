import React from "react";
import "../assets/CustomCSS/Header.css";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";

function Header() {
  const handleClick = () => {
    const servicesDiv = document.getElementById("services");
    if (servicesDiv) {
      servicesDiv.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <div class="image-container"></div>
      <div className="bg-home-banner">
        <div>
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
