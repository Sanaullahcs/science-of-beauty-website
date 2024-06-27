import React from "react";
import "../assets/CustomCSS/GetInTouch.css";
import { Grid } from "@material-ui/core";
import getInTouch from "../assets/images/getInTouchc.png";
import icon1 from "../assets/images/Icon1.png";
import icon2 from "../assets/images/Icon2.png";
import icon3 from "../assets/images/Icon3.png";

function GetInTouch() {
  return (
    <>
      <div>
        <div className="getInTouch-outer-div">
          <Grid container className="getInTouch-grid-container">
            <Grid items lg={6}>
              <div>
                <img className="getInTouch" src={getInTouch} />
              </div>
            </Grid>
            <Grid items lg={6}>
              <div className="getInTouch-text-wrapper">
                <div>
                  <p className="touch-preheading">Get in Touch!</p>
                  <p className="touch-heading">
                    We are here to help you always...
                  </p>
                  <p className="touch-description">
                  Science of Beauty, we merge cutting-edge science with aesthetic artistry,
                  we redefine beauty and wellness with a
                     focus on anti-aging solutions.
                   offering research-based practices in our medspa sanctuary. Led by experts
                    in stem cell, PRP, and exosomes, Our commitment to excellence and scientifically
                      proven methodologies sets new standards in rejuvenation and holistic wellness.
                  </p>
                </div>
                <div>
                  <Grid container className="margin-container">
                    <Grid items lg={1} md={2} sm={2} xs={12}>
                      <div>
                        <img src={icon1} />
                      </div>
                    </Grid>
                    <Grid items lg={11} md={10} sm={10} xs={12}>
                      <div className="minor-margin-left">
                        <p className="touch-contact-heading">Visit Us:</p>
                        <p className="touch-contact-preheading">
                        4101 Bryan st suite 100 Dallas tx 75204
                        </p>
                      </div>
                    </Grid>
                  </Grid>
                  <Grid container className="margin-container">
                    <Grid items lg={1} md={2} sm={2} xs={12}>
                      <div>
                        <img src={icon2} />
                      </div>
                    </Grid>
                    <Grid items lg={11} md={10} sm={10} xs={12}>
                      <div className="minor-margin-left">
                        <p className="touch-contact-heading">Drop Us :</p>
                        <p className="touch-contact-preheading">
                        Info@thescienceofbeautydallas.com
                        </p>
                      </div>
                    </Grid>
                  </Grid>
                  <Grid container className="margin-container">
                    <Grid items lg={1} md={2} sm={2} xs={12}>
                      <div>
                        <img src={icon2} />
                      </div>
                    </Grid>
                    <Grid items lg={11} md={10} sm={10} xs={12}>
                      <div className="minor-margin-left">
                        <p className="touch-contact-heading">Call Us :</p>
                        <p className="touch-contact-preheading">
                          Call: (214) 272-9240
                        </p>
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}
export default GetInTouch;
