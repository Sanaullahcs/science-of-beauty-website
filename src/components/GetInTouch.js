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
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, buying to many desktop publishing packages.
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
                          Mariendalsvej 50D 2 2000 Frederiksberg.
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
                          support@beautyness.com
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
                          Call: 1-800-123-9999
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
