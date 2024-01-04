import React from "react";
import { Grid } from "@material-ui/core";
import check from "../assets/images/check.svg";
import "../assets/CustomCSS/WhatIncludes.css";
import mainIMG from "../assets/images/whatIncludes.jpg";
import Plx from "react-plx";

function WhatIncludes() {
  const ParallaxDataAboutLeft = [
    {
      start: 2800,
      end: 3600,
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
            <Grid items className="side-grid" lg={7}>
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
                  <p className="meta-heading">Our Methodology :</p>
                  <div>
                    <Grid container>
                      <Grid items lg={1} md={1} sm={1} xs={1}>
                        <img className="check" src={check} />
                      </Grid>
                      <Grid items lg={11} md={11} sm={11} xs={11}>
                        {" "}
                        <div style={{ paddingLeft: "20px" }}>
                          <h1 className="meta-prehead">The Assessment Stage</h1>
                          <p className="meta-predescription">
                            The point of using Lorem Ipsum is that it has a
                            more-or-less normal letters.
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
                            The Initialisation Stage
                          </h1>
                          <p className="meta-predescription">
                            The point of using Lorem Ipsum is that it has a
                            more-or-less normal letters.
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
                          <h1 className="meta-prehead">The Treatment Stage</h1>
                          <p className="meta-predescription">
                            The point of using Lorem Ipsum is that it has a
                            more-or-less normal letters.
                          </p>
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                </div>
              </Plx>
            </Grid>
            <Grid items lg={5} style={{ zIndex: '9' }}>
              <div>
                <img style={{ width: "100%" }} src={mainIMG} />
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}
export default WhatIncludes;
