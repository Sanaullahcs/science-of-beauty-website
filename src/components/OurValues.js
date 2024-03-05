import React, { useState } from "react";
import { Grid, Divider, Button, Dialog, DialogActions } from "@material-ui/core";
import "../assets/CustomCSS/OurValue.css";
import beautyExpert from "../assets/images/beauty-expert.svg";
import greatServices from "../assets/images/great-services.svg";
import Genuine from "../assets/images/genuine.svg";
import towel from "../assets/images/Slice001.png";
import ourValueImg from '../assets/images/po.jpg'
import Plx from "react-plx";

function OurValues() {
  const [dialogOpen, setDialogOpen] = useState(false);
  
  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };
  const ParallaxDataAboutLeftFirst = [
    {
      start: 0,
      end: 500,
      properties: [
        {
          startValue: 500,
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
  const ParallaxDataAboutLeftSecond = [
    {
      start: 300,
      end: 600,
      properties: [
        {
          startValue: 500,
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
  const ParallaxDataAboutLeftThird = [
    {
      start: 400,
      end: 700,
      properties: [
        {
          startValue: 500,
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
      <div style={{ overflow: 'hidden' }}>
        <div className="main ourValueMainWrapper">
          <div className="center-div">
            <p className="ourvalue-heading">OUR VALUES</p>
            <p className="ourvalue-mainheading">
              The work values we thrive for
            </p>
            <Grid container>
              <Grid items lg={6} md={6} sm={12} xs={12}>
                <div className="ourvalues-grid-wrapper">
                  <Plx parallaxData={ParallaxDataAboutLeftFirst}>
                    <Grid container className="ourValuesSmall-gridWrapper">
                      <Grid items lg={2} md={2} sm={12} xs={12}>
                        <div className="img-holder">
                          <img src={beautyExpert} />
                        </div>
                      </Grid>
                      <Grid items lg={10} md={10} sm={12} xs={12}>
                        <h3 className="min-heading">Personalization</h3>
                        <p className="min-description">
                          Tailoring treatments and recommendations to each individual's unique needs and goals. Ensuring a personalized experience through detailed consultations and customized plans.
                        </p>
                      </Grid>
                    </Grid>
                  </Plx>
                  <Divider light />
                  <Plx parallaxData={ParallaxDataAboutLeftSecond}>
                    <Grid container className="ourValuesSmall-gridWrapper">
                      <Grid items lg={2} md={2} sm={12} xs={12}>
                        <div className="img-holder">
                          <img src={greatServices} />
                        </div>
                      </Grid>
                      <Grid items lg={10} md={10} sm={12} xs={12}>
                        <h3 className="min-heading">Expertise & Innovation</h3>
                        <p className="min-description">
                          Offering cutting-edge treatments backed by expertise in the latest technologies and methodologies in medical aesthetics. Staying at the forefront of innovation and research to provide top-tier services.
                        </p>
                      </Grid>
                    </Grid>
                  </Plx>
                  <Divider light />
                  <Plx parallaxData={ParallaxDataAboutLeftThird}>
                    <Grid container className="ourValuesSmall-gridWrapper">
                      <Grid items lg={2} md={2} sm={12} xs={12}>
                        <div className="img-holder">
                          <img src={Genuine} />
                        </div>
                      </Grid>
                      <Grid items lg={10} md={10} sm={12} xs={12}>
                        <h3 className="min-heading">Trust & Care</h3>
                        <p className="min-description">
                          Fostering a sense of trust and care through transparent communication, empathy, and a commitment to ethical practices. Prioritizing patient comfort, safety, and satisfaction throughout their entire journey.
                        </p>
                      </Grid>
                    </Grid>
                  </Plx>
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
            <Grid items lg={6} md={6} sm={12} xs={12} className="gridFutureSecond">
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
                      The bridge between Science & Beauty
                    </h1>
                    <p className="second-section-description">Welcome to The Science of Beauty Medspa and wellness center, where expertise meets innovation to redefine the essence of beauty and wellness. Dr. Rozier, our esteemed Medical Director, brings a wealth of knowledge in ....</p>
                    <div className="aboutUsReadBtnHolder">
                      <Button className="AboutUsReadMoreBtn" onClick={handleOpenDialog}>
                        Read More
                      </Button>
                    </div>
                    {/* this is the dialog open when the read more is clicked  */}
                    {/* Dialog Component */}
                    <Dialog open={dialogOpen} onClose={handleCloseDialog} className='readMoreDialog'>
                      <p className="second-section-about">ABOUT US</p>
                      <h1 className="second-section-heading second-section-heading-dialog">
                        The bridge between Science & Beauty
                      </h1>
                      <p className="second-section-description second-section-description-dialog">Welcome to The Science of Beauty Medspa and wellness center, where expertise meets innovation to redefine the essence of beauty and wellness. Dr. Rozier, our esteemed Medical Director, brings a wealth of knowledge in stem cell therapy, PRP treatments, and exosome applications, honed through his ownership of a leading pain management clinic. His dedication to cutting-edge medical advancements is the cornerstone of our commitment to transformative care</p>
                      <p className="second-section-description second-section-description-dialog">Complementing this expertise is Brittany Deen, our co-owner, whose extensive background in medical aesthetics and ownership of a r enowned salon and spa infuses our approach with an artistic touch. Together, our team's collective experience spans over 35 years, fusing medical precision with aesthetic artistry to curate a space where science seamlessly intertwines with the pursuit of timeless beauty.</p>
                      <p className="second-section-description second-section-description-dialog">At The Science of Beauty Medspa and wellness center, we blend innovation and artistry to craft personalized journeys that transcend expectations, ensuring each client receives tailored solutions backed by years of expertise and a passion for excellence. Join us in embracing the harmony of science and aesthetics, and let us guide you on your path to radiant beauty and holistic wellness.</p>
                      <DialogActions>
                        <Button className='closeBtnDialogReadMore' onClick={handleCloseDialog}>
                          Close
                        </Button>
                      </DialogActions>
                    </Dialog>
                    {/* dialog ends */}
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
