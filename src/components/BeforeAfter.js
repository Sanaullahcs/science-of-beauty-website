import React from "react";
import "../assets/CustomCSS/BeforeAfter.css";
import { Button, Grid } from "@material-ui/core";
import mask from "../assets/images/mask.png";

function BeforeAfter() {
  return (
    <>
      <div>
        <div className="bg-component">
          <Grid container className="afterbefore-grid">
            <Grid items lg={6}>
              <div className="mask-img-holder">
                <img className="mask-img" src={mask} />
              </div>
            </Grid>
            <Grid items lg={6}>
              <div style={{ maxWidth: "668px", padding: "3%" }}>
                <p className="main-head">Before & After</p>
                <p className="main-description">
                  Health and viatlity, once only available to a fortunate few,
                  are now in Huntington Beach for you. Allure Anti-Aging and
                  Aesthetics provides you with the most advanced functional
                  medicine with a natural, gentle approach to well-being.
                </p>
                <Button className="main-btn"> View Gallery</Button>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}
export default BeforeAfter;
