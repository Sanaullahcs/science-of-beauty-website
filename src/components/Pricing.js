import React from "react";
import pricing1 from '../assets/images/pricing1.png'
import pricing2 from '../assets/images/pricing2.png'
import pricing3 from '../assets/images/pricing3.png'
import { Grid, Divider } from "@mui/material";

import "../assets/CustomCSS/Pricing.css";
import { Button } from "@material-ui/core";


function Pricing() {
  return (
    <>
      <div id="pricing" className="pricing-div-wrapper">
        <div>
          <p className="pre-heading">Pricing</p>
          <p className="heading">Right plan for you</p>
        </div>
        <div>
        </div>
        <div>
          <div>
            <Grid container>
              <Grid items lg={4} md={12} sm={12} xs={12}>
                <div className="pricingCardHolder">

                  <div class="flip-card">
                    <div class="flip-card-inner">
                      <div class="flip-card-front">
                        <div className="pricingCard">
                          <img className="pricingCardImg" src={pricing1} />
                          <div>
                            <Button className="princg-pack-btn">
                              FAMILY PACK
                            </Button>
                          </div>
                          <span className="pricngCardPrice">
                            $310
                          </span>
                          <span className="perPack">/month</span>
                        </div>
                      </div>
                      <div class="flip-card-back">
                        <div className="flip-card-back-inner">
                          <div>
                            <p className="pricingServices">Nail Cutting and styling</p>
                            <Divider className="flip-divider" />
                            <p className="pricingServices">Hair Coloring</p>
                            <Divider className="flip-divider" />
                            <p className="pricingServices">Spa Therapy</p>
                            <Divider className="flip-divider" />
                            <p className="pricingServices">Body massage</p>
                            <Divider className="flip-divider" />
                          </div>
                          <Button className="flip-card-buy-btn">Buy Now</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid items lg={4} md={12} sm={12} xs={12}>
                <div className="pricingCardHolder">

                  <div class="flip-card">
                    <div class="flip-card-inner">
                      <div class="flip-card-front">
                        <div className="pricingCard">
                          <img className="pricingCardImg" src={pricing2} />
                          <div>
                            <Button className="princg-pack-btn">
                              MEDIUM PACK
                            </Button>
                          </div>
                          <span className="pricngCardPrice">
                            $210
                          </span>
                          <span className="perPack">/month</span>
                        </div>
                      </div>
                      <div class="flip-card-back">
                        <div className="flip-card-back-inner">
                          <div>
                            <p className="pricingServices">Nail Cutting and styling</p>
                            <Divider className="flip-divider" />
                            <p className="pricingServices">Hair Coloring</p>
                            <Divider className="flip-divider" />
                            <p className="pricingServices">Spa Therapy</p>
                            <Divider className="flip-divider" />
                            <p className="pricingServices">Body massage</p>
                            <Divider className="flip-divider" />
                          </div>
                          <Button className="flip-card-buy-btn">Buy Now</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid items lg={4} md={12} sm={12} xs={12}>
                <div className="pricingCardHolder">

                  <div class="flip-card">
                    <div class="flip-card-inner">
                      <div class="flip-card-front">
                        <div className="pricingCard">
                          <img className="pricingCardImg" src={pricing3} />
                          <div>
                            <Button className="princg-pack-btn">
                              PREMIUM PACK
                            </Button>
                          </div>
                          <span className="pricngCardPrice">
                            $410
                          </span>
                          <span className="perPack">/month</span>
                        </div>
                      </div>
                      <div class="flip-card-back">
                        <div className="flip-card-back-inner">
                          <div>
                            <p className="pricingServices">Nail Cutting and styling</p>
                            <Divider className="flip-divider" />
                            <p className="pricingServices">Hair Coloring</p>
                            <Divider className="flip-divider" />
                            <p className="pricingServices">Spa Therapy</p>
                            <Divider className="flip-divider" />
                            <p className="pricingServices">Body massage</p>
                            <Divider className="flip-divider" />
                          </div>
                          <Button className="flip-card-buy-btn">Buy Now</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </>
  );
}
export default Pricing;
