import React, { useState } from "react";
import { Grid, Button, Dialog, DialogActions } from "@material-ui/core";
import check from "../assets/images/check.svg";
import "../assets/CustomCSS/WhatIncludes.css";
import mainIMG from "../assets/images/whatIncludesc.jpg";
import CloseIcon from '@mui/icons-material/Close';
import Plx from "react-plx";

function WhatIncludes() {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };
  const ParallaxDataAboutLeft = [
    {
      start: 2000,
      end: 2400,
      properties: [
        {
          startValue: 500,
          endValue: 0,
          property: "translateX",
        },
      ],
    },
  ];
  return (
    <>
      <div>
        <div style={{ overflowX: "hidden" }}>
          <Grid container className="whatincludes-section-grid">
            <Grid item className="side-grid" lg={7}>
              <Plx parallaxData={ParallaxDataAboutLeft}>
                <div className="what-includes-side-div">
                  <p className="whatIncludes-min-heading">WHAT INCLUDES?</p>
                  <p className="what-includes-heading">
                    The start of the journey
                  </p>
                  <p className="description">
                    ServiceMarket.dk was founded in 2021 by two young
                    entrepreneurs who saw a problem with the fragmented service
                    industry in Denmark. There were thousands of small businesses
                    offering services, but it was difficult for consumers to find
                    them and know which ones to choose. They developed the idea of
                    creating a platform that would bring all these service
                    providers together in one place, making it easier for
                    consumers to find what they need and get their issues resolved
                    quickly and easily. Without having to go to many different
                    websites, each with their own booking system.
                  </p>
                  <div style={{ display: 'flex' }}>
                    <Button className='main-btn viewMethBtn' onClick={handleOpenDialog}>View Methodologies</Button>
                  </div>

                </div>
              </Plx>
            </Grid>
            <Grid item lg={5} style={{ zIndex: '9' }}>
              <div>
                <img style={{ width: "100%" }} src={mainIMG} />
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
      {/* this is the dialog open when the viewMethodologies is clicked  */}
      {/* Dialog Component */}
      <Dialog open={dialogOpen} onClose={handleCloseDialog} className='viewMethDialog'>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <p className="meta-heading">Our Methodology :</p>
          <CloseIcon onClick={handleCloseDialog} color='red' />
        </div>
        <div>
          <Grid container>
            <Grid items lg={1} md={1} sm={1} xs={1}>
              <img className="check" src={check} />
            </Grid>
            <Grid items lg={11} md={11} sm={11} xs={11}>
              {" "}
              <div style={{ paddingLeft: "20px" }}>
                <h1 className="meta-prehead">Precision Blending Protocols</h1>
                <p className="meta-predescription">
                  Implementing meticulous and precision-based treatment protocols that leverage the synergy between Dr. Rozier's medical expertise and Brittany Deen's aesthetic proficiency. This approach involves combining innovative medical techniques such as PRP with advanced aesthetic procedures like Morpheus 8 to achieve harmonious and natural-looking results, emphasizing precision in every aspect of the client's journey.
                </p>
              </div>
            </Grid>
          </Grid>
          <Grid container>
            <Grid items lg={1} md={1} sm={1} xs={1}>
              <img className="check" src={check} />
            </Grid>
            <Grid items lg={11} md={11} sm={11} xs={11}>
              {" "}
              <div style={{ paddingLeft: "20px" }}>
                <h1 className="meta-prehead">
                  Skill-Driven Treatment Excellence
                </h1>
                <p className="meta-predescription">
                  Emphasizing our commitment to excellence, each treatment at The Science of Beauty Medspa is conducted by our highly skilled and trained staff. Our practitioners bring a wealth of experience and a deep understanding of medical aesthetics to every session. Through skillful application and attention to detail, our team ensures that each client receives the highest level of care, showcasing the proficiency and expertise of our trained staff.
                </p>
              </div>
            </Grid>
          </Grid>
          <Grid container>
            <Grid items lg={1} md={1} sm={1} xs={1}>
              <img className="check" src={check} />
            </Grid>
            <Grid items lg={11} md={11} sm={11} xs={11}>
              <div style={{ paddingLeft: "20px" }}>
                <h1 className="meta-prehead">Personalized Care Paths</h1>
                <p className="meta-predescription">
                  At The Science of Beauty Medspa, our trained staff crafts personalized care paths for each client. Drawing on their expertise in medical aesthetics, our practitioners assess individual needs and design tailored treatment plans. This methodology highlights our staff's dedication to providing a unique and personalized experience, ensuring that clients receive the most effective and specialized care for their aesthetic goals.
                </p>
              </div>
            </Grid>
          </Grid>
        </div>
      </Dialog>
      {/* dialog ends */}
    </>
  );
}
export default WhatIncludes;
