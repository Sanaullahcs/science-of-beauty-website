import React from "react";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import insta from "../assets/images/Insta.png";
import facebook from "../assets/images/fb.png";
import twitter from "../assets/images/twitter.png";
import "../assets/CustomCSS/Footer.css";

function Footer() {
  return (
    <>
      <div className="main-footer">
        <Grid container>
          <Grid item lg={4} md={12} sm={12} xs={12}>
            <div>
              <h1 className="footer-heading">Explore</h1>
              <p className="common-txt">
                <Link to="/">Home</Link>
              </p>
              <p className="common-txt">
                <Link to="/about">About Us</Link>
              </p>
              <p className="common-txt">
                {" "}
                <Link to="/services">Services</Link>
              </p>
              <p className="common-txt">
                <Link to="/blogs">Blog</Link>
              </p>
              <p className="common-txt">
                <Link to="/contact">Contact</Link>
              </p>
            </div>
          </Grid>
          <Grid item lg={4} md={12} sm={12} xs={12}>
            <h1 className="footer-heading">Utility Pages</h1>
            <p className="common-txt">
              <Link to="/">Privacy Policy</Link>
            </p>
            <p className="common-txt">
              <Link to="/">Terms of Use</Link>
            </p>
          </Grid>
          <Grid item lg={4} md={12} sm={12} xs={12}>
            <h1 className="footer-heading">Keep in Touch</h1>
            <p className="common-txt">
              <span className="bold">Address</span>: Mariendalsvej 50D 2 2000{" "}
              <br /> Frederiksberg.
            </p>
            <p className="common-txt">
              <span className="bold">Mail:</span>: support@servicemarket.com
            </p>
            <p className="common-txt">
              <span className="bold">Phone :</span>(+22) 123 - 4567 - 900
            </p>
            <div className="footer-social-div">
              <span className="img-holder">
                <img src={facebook} />
              </span>
              <span className="img-holder">
                <img src={insta} />
              </span>
              <span className="img-holder">
                <img src={twitter} />
              </span>
            </div>
          </Grid>
        </Grid>
      </div>
      <div className="footer-bottom">
        <p>&copy; Copyright 2023, ServiceMarket.dk | All rights reserved.</p>
      </div>
    </>
  );
}
export default Footer;
