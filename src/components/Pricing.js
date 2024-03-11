import React, { useState, useEffect } from "react";
import pricing1 from "../assets/images/lllc.jpg";
import pricing2 from "../assets/images/pricing2.png";
import pricing3 from "../assets/images/black4c.jpg";
import { Grid, Divider } from "@mui/material";
import { FETCH_PRICE } from "../env/apiConfig";
import "../assets/CustomCSS/Pricing.css";
import { Button } from "@material-ui/core";

function Pricing() {
  const [price, setPrice] = useState();
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(FETCH_PRICE, {
          headers: {
            "Access-Control-Allow-Origin": "http://localhost:3000", // Replace with your allowed origin
          },
        });
        
        const data = await response.json();
        
        setPrice(data.pricing);
      } catch (error) {
        console.error("Error:", error.message);
      }
    }
    fetchData();
  }, []);
  return (
    <>
      <div id="pricing" className="pricing-div-wrapper">
        <div style={{ marginBottom: "-40px" }}>
          <p className="pre-heading">Pricing</p>
          <p className="heading">Right plan for you</p>
        </div>
        <div>
          <div>
            <Grid container>
              {price &&
                price.map((pricing) => (
                  <Grid item lg={4} md={12} sm={12} xs={12} key={pricing.id}>
                    <div className="pricingCardHolder1">
                      <div className="flip-card">
                        <div className="flip-card-inner">
                          <div className="flip-card-front">
                            <div className="pricingCard">
                              <img
                                className="pricingCardImg"
                                src={pricing.image_url}
                              />
                              <div>
                                <Button className="princg-pack-btn">
                                  {pricing.name}
                                </Button>
                              </div>
                              <span className="pricngCardPrice">
                                ${pricing.price}
                              </span>
                              <span className="perPack">/month</span>
                            </div>
                          </div>
                          <div className="flip-card-back">
                            <div className="flip-card-back-inner">
                              <div></div>
                              <div className="pricingCardPackageList">
                                {/* Map through pricing_services array and render each service description */}
                                {pricing.pricing_services.map((service) => (
                                  <div key={service.id}>
                                    <p className="pricingServices">
                                      {service.service_description}
                                    </p>
                                    <Divider className="flip-divider" />
                                  </div>
                                ))}
                              </div>
                              <Button className="flip-card-buy-btn">
                                Buy Now
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Grid>
                ))}

              {/* <Grid items lg={4} md={12} sm={12} xs={12}>
                <div className="pricingCardHolder1">
                  <div className="flip-card">
                    <div className="flip-card-inner">
                      <div className="flip-card-front">
                        <div className="pricingCard">
                          <img className="pricingCardImg" src={pricing1} />
                          <div>
                            <Button className="princg-pack-btn">
                              Hydration Package
                            </Button>
                          </div>
                          <span className="pricngCardPrice">$129</span>
                          <span className="perPack">/month</span>
                        </div>
                      </div>
                      <div className="flip-card-back">
                        <div className="flip-card-back-inner">
                          <div></div>
                          <div className="pricingCardPackageList">
                            <p className="pricingServices">
                              1 IV Therapy treatment (limit 500CC)
                            </p>
                            <Divider className="flip-divider" />
                            <p className="pricingServices">
                              10% discount on all retail and extra IV treatments
                            </p>
                          </div>
                          <Button className="flip-card-buy-btn">Buy Now</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid items lg={4} md={12} sm={12} xs={12}>
                <div className="pricingCardHolder2">
                  <div className="flip-card">
                    <div className="flip-card-inner">
                      <div className="flip-card-front">
                        <div className="pricingCard">
                          <img className="pricingCardImg" src={pricing2} />
                          <div>
                            <Button className="princg-pack-btn">
                              Tight & Tone package
                            </Button>
                          </div>
                          <span className="pricngCardPrice">$249</span>
                          <span className="perPack">/month</span>
                        </div>
                      </div>
                      <div className="flip-card-back">
                        <div className="flip-card-back-inner">
                          <div className="pricingCardPackageList">
                            <p className="pricingServicesHeading">
                              Choice of 1 of the following
                            </p>
                            <Divider className="flip-divider" />
                            <p className="pricingServices">
                              20 units of botox per month (can bank and use
                              quarterly)
                            </p>
                            <Divider className="flip-divider" />
                            <p className="pricingServices">
                              1 Body contouring treatment per month + 1 Slim
                              shot
                            </p>
                            <Divider className="flip-divider" />
                            <p className="pricingServices">
                              Receive 15% off retail and additional units of
                              botox and Dermal fillers
                            </p>
                            
                          </div>
                          <Button className="flip-card-buy-btn">Buy Now</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid items lg={4} md={12} sm={12} xs={12}>
                <div className="pricingCardHolder3">
                  <div className="flip-card">
                    <div className="flip-card-inner">
                      <div className="flip-card-front">
                        <div className="pricingCard">
                          <img className="pricingCardImg" src={pricing3} />
                          <div>
                            <Button className="princg-pack-btn">
                              Total Wellness
                            </Button>
                          </div>
                          <span className="pricngCardPrice">$399</span>
                          <span className="perPack">/month</span>
                        </div>
                      </div>
                      <div className="flip-card-back">
                        <div className="flip-card-back-inner">
                          <div className="pricingCardPackageList">
                            <p className="pricingServicesHeading">
                              Choose 2 of the following
                            </p>
                            <Divider className="flip-divider" />
                            <p className="pricingServices">
                              1 body contouring treatment
                            </p>
                            <Divider className="flip-divider" />
                            <p className="pricingServices">
                              1 laser hair removal treatment{" "}
                            </p>
                            <Divider className="flip-divider" />
                            <p className="pricingServices">
                              1 IV therapy treatment (limit 500cc)
                            </p>
                            <Divider className="flip-divider" />
                            <p className="pricingServices">
                              20 units of botox per month (can bank and use
                              quarterly)
                            </p>
                            <Divider className="flip-divider" />
                            <p className="pricingServices">
                              Receive 20% off all additional spa services and
                              retail{" "}
                            </p>
                            
                          </div>
                          <Button className="flip-card-buy-btn">Buy Now</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Grid> */}
            </Grid>
          </div>
        </div>
      </div>
    </>
  );
}
export default Pricing;
