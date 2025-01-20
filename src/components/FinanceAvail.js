import React from "react";
import "../assets/CustomCSS/ContactUs.css";
import Plx from "react-plx";
import { Button, Grid, Divider } from "@material-ui/core";

const FinanceAvail = () => {
  const parallaxDataTxt = [
    {
      start: 0,
      end: 600,
      properties: [
        {
          startValue: 1.5,
          endValue: 1,
          property: "scale",
        },
      ],
    },
    {
      start: 0,
      end: 600,
      properties: [
        {
          startValue: 0,
          endValue: 1,
          property: "opacity",
        },
      ],
    },
  ];
  // Function to handle Care Credit button click
  const handleCareCredit = () => {
    window.open("https://www.carecredit.com/go/828DST/", "_blank");
  };

  // Function to handle  Cherry button click
  const handleCherry = () => {
    window.open(
      "https://pay.withcherry.com/brittanydeen?utm_source=practice&utm_medium=email&m=9714",
      "_blank"
    );
  };
  return (
    <div>
      <div style={{ padding: "4 % 0", overflow: "hidden", padding: "2% 0" }}>
        <Plx parallaxData={parallaxDataTxt}>
          <div className="contact-card">
            <Grid container>
              <Grid items lg={6} md={12} sm={12} xs={12} cols={12}>
                <div className="d-flex" style={{ margin: "50" }}>
                  <p className="contact-interested-center">
                    CHERRY- Finance your next purchase at The Science of Beauty 
                    LLC with Cherry
                  </p>
                  <Button onClick={handleCherry} className="blog-contact-btn">
                    <span className="send-messages-span">Cherry</span>
                  </Button>
                </div>
                <Divider
                  orientation="vertical"
                  flexItem
                  style={{
                    height: "100%", // Full height
                    backgroundColor: "#ccc", // Divider color
                  }}
                />
              </Grid>
              <Grid items lg={6} md={12} sm={12} xs={12} cols={12}>
                <div className="d-flex" style={{ margin: "50" }}>
                  <p className="contact-interested-center">
                    Care Credit- Finance your next purchase at The Science of
                    Beauty LLC with Care Credit
                  </p>
                  <Button className="finance-btn" onClick={handleCareCredit}>
                    <span className="send-messages-span">Care Credit</span>
                  </Button>
                </div>
              </Grid>
            </Grid>
          </div>
        </Plx>
      </div>
    </div>
  );
};

export default FinanceAvail;
