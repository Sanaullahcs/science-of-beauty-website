import React from "react";
import { Grid } from "@material-ui/core";
import check from "../assets/images/check.png";
import "../assets/CustomCSS/WhatIncludes.css";
import mainIMG from "../assets/images/whatIncludes.jpg";

function WhatIncludes() {
  return (
    <>
      <div>
        <div style={{ overflowX: "hidden" }}>
          <Grid container className="whatincludes-section-grid">
            <Grid items className="side-grid" lg={7}>
              <div className="what-includes-side-div">
                <p className="min-heading">WHAT INCLUDES?</p>
                <p className="heading">The start of the journey</p>
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
                    <Grid items>
                      <img src={check} />
                    </Grid>
                    <Grid items>
                      {" "}
                      <div>
                        <h1 className="meta-prehead">The Assessment Stage</h1>
                        <p className="meta-predescription">
                          The point of using Lorem Ipsum is that it has a
                          more-or-less normal letters.
                        </p>
                      </div>
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid items>
                      <img src={check} />
                    </Grid>
                    <Grid items>
                      {" "}
                      <div>
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
                    <Grid items>
                      <img src={check} />
                    </Grid>
                    <Grid items>
                      <div>
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
            </Grid>
            <Grid items lg={5}>
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
