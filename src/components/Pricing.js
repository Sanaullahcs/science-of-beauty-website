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

  const headings = [
    'choose 1 of the following services', 
    'choose 1 of the following services',
    'choose 2 of the following services',
    
  ];
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(FETCH_PRICE, {
         
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
      <div style={{ marginBottom: '-40px' }}>
        <p className="pre-heading">Pricing</p>
        <p className="heading">Right plan for you</p>
      </div>
      <div>
        <div>
          <Grid container spacing={3}>
            {price &&
              price.map((pricing, index) => (
                <Grid item lg={4} md={12} sm={12} xs={12} key={pricing.id}>
                  <div className="pricingCardHolder1">
                    <div className="flip-card">
                      <div className="flip-card-inner">
                        <div className="flip-card-front">
                          <div className="pricingCard">
                            <img className="pricingCardImg" src={pricing.image_url} alt={pricing.name} />
                            <div>
                              <Button className="princg-pack-btn">{pricing.name}</Button>
                            </div>
                            <span className="pricngCardPrice">${pricing.price}</span>
                            <span className="perPack">/month</span>
                          </div>
                        </div>
                        <div className="flip-card-back">
                          <div className="flip-card-back-inner">
                            <div  className="pricingCardPackageList">
                              {/* Render only one heading for each card */}
                              <h3>{headings[index]}</h3>
                              
                              {/* Map through pricing_services array and render each service description */}
                              {pricing.pricing_services.map((service) => (
                                <div key={service.id}>
                                  <p className="pricingServices">{service.service_description}</p>
<Divider className="flip-divider" />
                                </div>
                              ))}
                            </div>
                            <Button className="flip-card-buy-btn">Buy Now</Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Grid>
              ))}
          </Grid>
        </div>
      </div>
    </div>


    </>
  );
}
export default Pricing;
