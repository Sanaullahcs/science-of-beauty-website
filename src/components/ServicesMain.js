import React from "react";
import { Button, Grid } from "@material-ui/core";
import ser1 from "../assets/images/ser-1.png";
import ser2 from "../assets/images/ser-2.png";
import ser3 from "../assets/images/ser-3.png";
import ser4 from "../assets/images/ser-4.png";
import "../assets/CustomCSS/ServicesMain.css";
import Plx from "react-plx";

function ServicesMain() {
  const imageParallaxDataOne = [
    {
      start: 0,
      end: 500,
      properties: [
        {
          startValue: 1.1,
          endValue: 1,
          property: "scale",
        },
        {
          startValue: 0,
          endValue: 1,
          property: "opacity",
        },
      ],
    },
  ];
  const imageParallaxDataTwo = [
    {
      start: 500,
      end: 1200,
      properties: [
        {
          startValue: 1.1,
          endValue: 1,
          property: "scale",
        },
        {
          startValue: 0,
          endValue: 1,
          property: "opacity",
        },
      ],
    },
  ];
  const imageParallaxDataThree = [
    {
      start: 1300,
      end: 2000,
      properties: [
        {
          startValue: 1.1,
          endValue: 1,
          property: "scale",
        },
        {
          startValue: 0,
          endValue: 1,
          property: "opacity",
        },
      ],
    },
  ];
  const imageParallaxDataFour = [
    {
      start: 2000,
      end: 2700,
      properties: [
        {
          startValue: 1.1,
          endValue: 1,
          property: "scale",
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
      <div style={{ overflow: 'hidden' }}>
        <div className="main-blog-content">
          <Grid container className="main-main-blogs">
            <Grid items lg={6}>
              <div className="blog-main-div">
                <p className="blog-main-heading">Makeup-Artist</p>
                <p className="blog-description-heading">
                  Health and viatlity, once only available to a fortunate few,
                  are now in Huntington Beach for you. Allure Anti-Aging and
                  Aesthetics provides you with the most advanced functional
                  medicine with a natural, gentle approach to well-being.
                </p>
                <div className="contactus-btn-div">
                  <Button className="blog-contact-btn">Contact Us</Button>
                </div>
              </div>
            </Grid>
            <Grid items lg={6}>
              <Plx parallaxData={imageParallaxDataOne}>
                <div className="services-img-holderHolder">
                  <img className="blog-img-holder" src={ser1} />
                </div>
              </Plx>
            </Grid>
            <Grid items lg={6}>
              <Plx parallaxData={imageParallaxDataTwo}>
                <div className="services-img-holderHolder">
                  <img className="blog-img-holder" src={ser2} />
                </div>
              </Plx>

            </Grid>
            <Grid items lg={6}>
              <div className="blog-main-div">
                <p className="blog-main-heading">Wellnesscenter</p>
                <p className="blog-description-heading">
                  Health and viatlity, once only available to a fortunate few,
                  are now in Huntington Beach for you. Allure Anti-Aging and
                  Aesthetics provides you with the most advanced functional
                  medicine with a natural, gentle approach to well-being.
                </p>
                <div className="contactus-btn-div">
                  <Button className="blog-contact-btn">Contact Us</Button>
                </div>
              </div>
            </Grid>
            <Grid items lg={6}>
              <div className="blog-main-div">
                <p className="blog-main-heading">Barbersalon</p>
                <p className="blog-description-heading">
                  Health and viatlity, once only available to a fortunate few,
                  are now in Huntington Beach for you. Allure Anti-Aging and
                  Aesthetics provides you with the most advanced functional
                  medicine with a natural, gentle approach to well-being.
                </p>
                <div className="contactus-btn-div">
                  <Button className="blog-contact-btn">Contact Us</Button>
                </div>
              </div>
            </Grid>
            <Grid items lg={6}>
              <Plx parallaxData={imageParallaxDataThree}>
                <div className="services-img-holderHolder">
                  <img className="blog-img-holder" src={ser3} />
                </div>
              </Plx>
            </Grid>
            <Grid items lg={6}>
              <Plx parallaxData={imageParallaxDataFour}>
                <div className="services-img-holderHolder">
                  <img className="blog-img-holder" src={ser4} />
                </div>
              </Plx>
            </Grid>
            <Grid items lg={6}>
              <div className="blog-main-div">
                <p className="blog-main-heading">Massageclinic</p>
                <p className="blog-description-heading">
                  Health and viatlity, once only available to a fortunate few,
                  are now in Huntington Beach for you. Allure Anti-Aging and
                  Aesthetics provides you with the most advanced functional
                  medicine with a natural, gentle approach to well-being.
                </p>
                <div className="contactus-btn-div">
                  <Button className="blog-contact-btn">Contact Us</Button>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}
export default ServicesMain;
