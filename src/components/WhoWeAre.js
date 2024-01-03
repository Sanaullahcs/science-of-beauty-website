import React from "react";
import { Grid, Button } from "@material-ui/core";
import whoWeAre1 from "../assets/images/www1.png";
import whoWeAre2 from "../assets/images/www2.png";
import "../assets/CustomCSS/WhoWeAre.css";
import Plx from "react-plx";

function WhoWeAre() {
  const parallaxDataWWWTop = [
    {
      start: 0,
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
    {
      start: 1000,
      end: 1500,
      properties: [

        {
          startValue: 1,
          endValue: 0,
          property: "opacity",
        },
      ],
    },
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
    {
      start: 1000,
      end: 1500,
      properties: [

        {
          startValue: 1,
          endValue: 0,
          property: "opacity",
        },
      ],
    },
  ];
  const parallaxDataWWWLeft = [
    {
      start: 1000,
      end: 1500,
      properties: [

        {
          startValue: 1,
          endValue: 0,
          property: "opacity",
        },
      ],
    },
  ];
  return (
    <>
      <div style={{ overflowX: 'hidden' }}>
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
                    An award winning Hair Salon based in UK. Silverclip offers a
                    haven of calm and indulgent luxury lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua diam valupat.
                  </p>
                  <p style={{ marginBottom: '5px' }}>
                    Nulla malesuada pellentesque elit eget gravida cum sociis
                    natoque penatibus. Consequat semper viverra nam libero justo
                    laoreet sit.
                  </p>
                  <p style={{ marginTop: '0' }}>
                    Facibus scelerisque eleifend donec pretium vulputate sapien.
                    Dui nunc mattis enim ut tellus elemntum suscipt biben.
                  </p>
                  <Button className="more-about-us-btn ">More About Us</Button>
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
