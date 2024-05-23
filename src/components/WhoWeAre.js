import React from "react";
import { Grid, Button } from "@material-ui/core";
import whoWeAre1 from "../assets/images/updatedwww1.png";
import whoWeAre2 from "../assets/images/updatedwww2.png";
import "../assets/CustomCSS/WhoWeAre.css";
import Plx from "react-plx";
import { Link } from 'react-router-dom'

function WhoWeAre() {
  const goToAbout = () => {

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const parallaxDataWWWTop = [
    {
      start:  0,
      end: 700,
      properties: [
        {
          startValue: -500,
          endValue: 0,
          property: "translateY",
        },
        {
          startValue: 0,
          endValue: 1,
          property: "opacity",
        },
      ],
    },
    // {
    //   start: 1000,
    //   end: 1500,
    //   properties: [

    //     {
    //       startValue: 1,
    //       endValue: 0,
    //       property: "opacity",
    //     },
    //   ],
    // },
  ];
  const parallaxDataWWWBottom = [
    {
      start: 0,
      end: 700,
      properties: [
        {
          startValue: 500,
          endValue: 0,
          property: "translateY",
        },
        {
          startValue: 0,
          endValue: 1,
          property: "opacity",
        },
      ],
    },
    // {
    //   start: 1000,
    //   end: 1500,
    //   properties: [

    //     {
    //       startValue: 1,
    //       endValue: 0,
    //       property: "opacity",
    //     },
    //   ],
    // },
  ];
  const parallaxDataWWWLeft = [
    // {
    //   start: 1200,
    //   end: 2000,
    //   properties: [

    //     {
    //       startValue: 1,
    //       endValue: 0,
    //       property: "opacity",
    //     },
    //   ],
    // },
  ];
  return (
    <>
      <div style={{ overflow: 'hidden' }}>
        <div className="whoWeAre-container">
          <Grid container>
            <Grid items lg="6" md="6" sm="12" xs="12">
              {/* <Plx parallaxData={parallaxDataWWWRight}> */}
              <div className="whoweare-the-wrapper-img">
                <Plx parallaxData={parallaxDataWWWTop}>
                  <img className="whoWeAreImg-main" src={whoWeAre1} />
                </Plx>
                <Plx parallaxData={parallaxDataWWWBottom}>
                  <img className="whoWeAreImg-main" src={whoWeAre2} />
                </Plx>
              </div>
              {/* </Plx> */}
            </Grid>
            <Grid items lg="6" md="6" sm="12" xs="12">
              <Plx parallaxData={parallaxDataWWWLeft}>
                <div className="whoweare-wrapper">
                  <p className="main-main">WHO WE ARE</p>
                  <p className="www-description">
                  At The Science of Beauty, we blend advanced science and artistic aesthetics. Our medspa, led by a medical director specializing in stem cell, PRP, and exosomes, alongside our founder's aesthetic expertise, redefines beauty and wellness. We focus on anti-aging solutions, setting new standards in rejuvenation and holistic wellness. Our commitment to "Research-Based Beauty and Wellness" showcases our dedication to enhancing and preserving your natural radiance.
                  </p>
                  {/* <p style={{ marginBottom: '5px' }}>
                    Nulla malesuada pellentesque elit eget gravida cum sociis
                    natoque penatibus. Consequat semper viverra nam libero justo
                    laoreet sit.
                  </p>
                  <p style={{ marginTop: '0' }}>
                    Facibus scelerisque eleifend donec pretium vulputate sapien.
                    Dui nunc mattis enim ut tellus elemntum suscipt biben.
                  </p> */}
                  <Link to='/about'><Button className="more-about-us-btn " onClick={goToAbout}>More About Us</Button></Link>
                </div>
              </Plx>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}
export default WhoWeAre;
