import React from "react";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import insta from "../assets/images/Insta.png";
import facebook from "../assets/images/fb.png";
import twitter from "../assets/images/x.svg";
import "../assets/CustomCSS/Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="main-footer">
        <Grid container>
          <Grid item lg={4} md={12} sm={12} xs={12}>
            <div className="footer-1-wrapper">
              <h1 className="footer-heading">Explore</h1>
              <p className="common-txt">
                <Link to="/" onClick={scrollToTop}>
                  Home
                </Link>
              </p>
              <p className="common-txt">
                <Link to="/about" onClick={scrollToTop}>
                  About Us
                </Link>
              </p>
              <p className="common-txt">
                {" "}
                <Link to="/services" onClick={scrollToTop}>
                  Services
                </Link>
              </p>
              <p className="common-txt">
                <Link to="/blogs" onClick={scrollToTop}>
                  Blog
                </Link>
              </p>
              <p className="common-txt">
                <Link to="/contact" onClick={scrollToTop}>
                  Contact
                </Link>
              </p>
            </div>
          </Grid>
          <Grid item lg={4} md={12} sm={12} xs={12}>
            <div className="footer-2-wrapper">
              <h1 className="footer-heading">Utility Pages</h1>
              <p className="common-txt">
                <Link to="/">Privacy Policy</Link>
              </p>
              <p className="common-txt">
                <Link to="/">Terms of Use</Link>
              </p>
            </div>
          </Grid>
          <Grid item lg={4} md={12} sm={12} xs={12}>
            <div className="footer-3-wrapper">
              <h1 className="footer-heading">Keep in Touch</h1>
              {/* ========== */}
              {/* <p className="common-txt">
                <span className="bold">Address</span>
              </p>
              <p className="common-txt">
                <span className="bold">Mail:</span>: support@servicemarket.com
              </p>
              <p className="common-txt">
                <span className="bold">Phone :</span>(+22) 123 - 4567 - 900
              </p> */}
              {/* =========== */}
              <div>
                <Grid container>
                  <Grid items lg={4} md={4} sm={4} xs={12}>
                    <p className="common-txt bold">Address:</p>
                  </Grid>
                  <Grid
                    items
                    lg={8}
                    md={8}
                    sm={8}
                    xs={12}
                    className="footerSemiSecond-grid"
                  >
                    <p className="common-txt">
                    4101 Bryan st suite 100 Dallas tx 75204
                    </p>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid items lg={4} md={4} sm={4} xs={12}>
                    <p className="common-txt bold">Mail:</p>
                  </Grid>
                  <Grid
                    items
                    lg={8}
                    md={8}
                    sm={8}
                    xs={12}
                    className="footerSemiSecond-grid"
                  >
                    <p className="common-txt">Info@thescienceofbeautydallas.com</p>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid items lg={4} md={4} sm={4} xs={12}>
                    <p className="common-txt bold">Phone:</p>
                  </Grid>
                  <Grid
                    items
                    lg={8}
                    md={8}
                    sm={8}
                    xs={12}
                    className="footerSemiSecond-grid"
                  >
                    {/* <p className="common-txt">(818) 415-0083.</p> */}
                    <p className="common-txt">(214) 272-9240.</p>
                  </Grid>
                </Grid>
              </div>
              <div className="footer-social-div">
                <span className="img-holder">
                  <a
                   href="https://m.facebook.com/profile.php?id=100083188941922&name=xhp_nt_"
                    target="_blank"
                  >
                    <img src={facebook} />
                  </a>
                </span>
                <span className="img-holder">
                  <a
                    href="https://www.instagram.com/thescienceofbeauty.co/"
                    target="_blank"
                  >
                    <img src={insta} />
                  </a>
                </span>
                <span className="img-holder">
                  <a
                    href="https://www.instagram.com/thescienceofbeauty.co/"
                    target="_blank"
                  >
                    <img src={twitter} />
                  </a>
                </span>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {currentYear}, The Science of Beauty | All rights reserved.
        </p>
      </div>
    </>
  );
}
export default Footer;
