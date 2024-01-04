import React from "react";
import "../assets/CustomCSS/BeforeAfter.css";
import { Button, Grid } from "@material-ui/core";
import mask from "../assets/images/mask.png";
import Plx from "react-plx";
import { Parallax } from 'react-scroll-parallax';
import { Link as ScrollLink } from 'react-scroll';



function BeforeAfter() {
  const parallaxDataTxt = [
    {
      start: 2400,
      end: 2900,
      properties: [
        {
          startValue: 2.5,
          endValue: 1,
          property: "scale",
        },
        {
          startValue: 500,
          endValue: 0,
          property: "translateY",
          factor: 0.3
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
        <div className="bg-component">
          <Grid container className="afterbefore-grid">
            <Grid items lg={6}>
              <div className="mask-img-holder">
                {/* <Plx parallaxData={parallaxDataMask}> */}
                <Parallax speed={30} tagOuter="figure">
                  <img className="mask-img" src={mask} alt="Mask" />
                </Parallax>

                {/* </Plx> */}
              </div>
            </Grid>
            <Grid items lg={6}>
              <div style={{ maxWidth: "668px", padding: "3%" }}>
                <Plx parallaxData={parallaxDataTxt}>
                  <p className="main-head">Before & After</p>
                </Plx>
                <Plx parallaxData={parallaxDataTxt}>
                  <p className="main-description">
                    Health and viatlity, once only available to a fortunate few,
                    are now in Huntington Beach for you. Allure Anti-Aging and
                    Aesthetics provides you with the most advanced functional
                    medicine with a natural, gentle approach to well-being.
                  </p>
                </Plx>
                <Plx parallaxData={parallaxDataTxt}>
                  <ScrollLink to="gallery" smooth duration={500}>
                    <Button className="main-btn" > View Gallery</Button>
                  </ScrollLink>
                </Plx>
              </div>

            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}
export default BeforeAfter;

