import React from "react";
import { Grid, Divider } from "@material-ui/core";
import "../assets/CustomCSS/OurValue.css";
import beautyExpert from "../assets/images/beauty-expert.png";
import greatServices from "../assets/images/great-services.png";
import Genuine from "../assets/images/genuine.png";
import towel from "../assets/images/towel.png";
import ourValueImg from '../assets/images/whatIncludes.jpg'
import Plx from "react-plx";

function OurValues() {
  const ParallaxDataAboutLeft = [
    {
      start: 900,
      end: 1500,
      properties: [
        {
          startValue: -500,
          endValue: 0,
          property: "translateX",
        },
        {
          startValue: 0,
          endValue: 1,
          property: "opacity",
        },
      ],
    },
  ];
  return (
    <>
      <div>
        <div className="main ourValueMainWrapper">
          <div className="center-div">
            <p className="ourvalue-heading">OUR VALUES</p>
            <p className="ourvalue-mainheading">
              The work values we thrive for
            </p>
            <Grid container>
              <Grid items lg={6} md={6} sm={12} xs={12}>
                <div className="ourvalues-grid-wrapper">
                  <Grid container className="ourValuesSmall-gridWrapper">
                    <Grid items lg={2} md={2} sm={12} xs={12}>
                      <div className="img-holder">
                        <img src={beautyExpert} />
                      </div>
                    </Grid>
                    <Grid items lg={10} md={10} sm={12} xs={12}>
                      <h3 className="min-heading">Beauty Experts</h3>
                      <p className="min-description">
                        The majority have suffered alteration in some form, buying
                        to injected humour, or randomised words which desktop
                        publishing packages.
                      </p>
                    </Grid>
                  </Grid>
                  <Divider light />
                  <Grid container className="ourValuesSmall-gridWrapper">
                    <Grid items lg={2} md={2} sm={12} xs={12}>
                      <div className="img-holder">
                        <img src={greatServices} />
                      </div>
                    </Grid>
                    <Grid items lg={10} md={10} sm={12} xs={12}>
                      <h3 className="min-heading">Great Services</h3>
                      <p className="min-description">
                        The majority have suffered alteration in some form, buying
                        to injected humour, or randomised words which desktop
                        publishing packages.
                      </p>
                    </Grid>
                  </Grid>
                  <Divider light />
                  <Grid container className="ourValuesSmall-gridWrapper">
                    <Grid items lg={2} md={2} sm={12} xs={12}>
                      <div className="img-holder">
                        <img src={Genuine} />
                      </div>
                    </Grid>
                    <Grid items lg={10} md={10} sm={12} xs={12}>
                      <h3 className="min-heading">100% Genuine</h3>
                      <p className="min-description">
                        The majority have suffered alteration in some form, buying
                        to injected humour, or randomised words which desktop
                        publishing packages.
                      </p>
                    </Grid>
                  </Grid>
                </div>
              </Grid>
              <Grid items lg={6} md={6} sm={12} xs={12} className="ourvalueMainImag-grid">
                <div className="ourvalueMainImag-holder">
                  <img className="ourvalueMainImag" src={ourValueImg} />
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
        <div className="about-second-section">
          <Grid container className="about-second-section-grid">
            <Grid items lg={6} md={6} sm={12} xs={12}>
              {/* <Plx parallaxData={ParallaxDataAboutLeft}> */}
              <div className="second-section-img-holder">
                <img style={{ zIndex: "99" }} className="towel-img" src={towel} />
              </div>
              {/* </Plx> */}
            </Grid>
            <Grid items lg={6} sm={12} xs={12}>
              <div className="section-holder">

                <div className="section-div">
                  <Plx parallaxData={ParallaxDataAboutLeft}>
                    <p className="second-section-about">ABOUT US</p>
                    <h1 className="second-section-heading">
                      It’s the bridge between service companies and consumers.
                    </h1>
                    <p className="second-section-description">
                      ServiceMarket.dk is a Copenhagen-based technology company
                      known for our overview platform. Our aim is to simplify and
                      improve everyday life for citizens in Denmark. One platform
                      that brings together all services in an easy and controlled
                      environment.
                    </p>
                  </Plx>
                </div>

              </div>
            </Grid>
          </Grid>
        </div>
      </div >
    </>
  );
}
export default OurValues;
