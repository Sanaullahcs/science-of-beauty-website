import React from "react";
import { Grid, Button } from "@material-ui/core";
import whoWeAre from "../assets/images/whoWeAreimg.png";
import "../assets/CustomCSS/WhoWeAre.css";

function WhoWeAre() {
  return (
    <>
      <div>
        <div className="whoWeAre-container">
          <Grid container>
            <Grid items lg="6" md="6" sm="12" xs="12">
              <div className="whoweare-the-wrapper-img">
                <img className="whoWeAreImg-main" src={whoWeAre} />
              </div>
            </Grid>
            <Grid items lg="6" md="6" sm="12" xs="12">
              <div className="whoweare-wrapper">
                <p className="main-main">WHO WE ARE</p>
                <p className="www-description">
                  An award winning Hair Salon based in UK. Silverclip offers a
                  haven of calm and indulgent luxury lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua diam valupat.
                </p>
                <p>
                  Nulla malesuada pellentesque elit eget gravida cum sociis
                  natoque penatibus. Consequat semper viverra nam libero justo
                  laoreet sit.
                </p>
                <p>
                  Facibus scelerisque eleifend donec pretium vulputate sapien.
                  Dui nunc mattis enim ut tellus elemntum suscipt biben.
                </p>
                <Button className="more-about-us-btn ">MORE ABOUT US</Button>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}
export default WhoWeAre;
