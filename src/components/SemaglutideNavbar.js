import { React, useState } from "react";
import "../assets/CustomCSS/Navbar.css";
import { Link } from "react-router-dom";
import { Grid, Fab, TextField } from "@material-ui/core";
import { Tooltip } from "@material-ui/core";
import Callimg from "../assets/images/nav-call.svg";
import emailimg from "../assets/images/nav-gmail.svg";
import logoNavbar from "../assets/images/logo14.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";

function SemaglutideNavbar() {
  return (
    <>
      <div
        style={{
          padding: "1% 0 17px",
          borderBottom: "1px solid #ccc",
          background: "#FDF7F3",
        }}
      >
        <Grid container style={{ padding: "0 2%" }}>
          <Grid
            item
            lg={4}
            md={4}
            sm={12}
            xs={12}
            className="navSocialIconsHolder"
          >
            <div>
              <div className="social-row socisal-row-nav">
                <a
                  href="https://www.facebook.com/Goddesshairxo"
                  target="_blank"
                >
                  <div className={`social-icons-span active-social-btn`}>
                    <FacebookIcon style={{ color: "#eee" }} />
                  </div>
                </a>
                <a
                  href="https://www.instagram.com/thescienceofbeautydallas/"
                  target="_blank"
                >
                  <div className={`social-icons-span active-social-btn`}>
                    <InstagramIcon style={{ color: "#eee" }} />
                  </div>
                </a>
                <a href="" target="_blank">
                  <div className={`social-icons-span active-social-btn`}>
                    <XIcon style={{ color: "#eee" }} />
                  </div>
                </a>
              </div>
            </div>
            <div className="smallScreenEMailHolder">
              <Tooltip title="123 456 7890" placement="top">
                <img className="img-margin ml-18" src={Callimg} />
              </Tooltip>
              <Tooltip title="Info@thescienceofbeauty.co" placement="top">
                <img className="img-margin" src={emailimg} />
              </Tooltip>
            </div>
          </Grid>
          <Grid item lg={4} md={4} sm={0} xs={0} className="grid-1">
            <div className="logo" style={{ zIndex: "2" }}>
              <Link to="/">
                <img className="web-logo" src={logoNavbar} alt="Logo" />
              </Link>
            </div>
          </Grid>
          <Grid
            item
            lg={4}
            md={4}
            sm={6}
            xs={12}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "end",
            }}
            className="grid-2 emailNavGrid"
          >
            <div className="toptopNav">
              <p className="navbar-top-dail">
                {" "}
                <img className="img-margin" src={Callimg} />
                (818) 415-0083.
              </p>

              <p className="navbar-top-email">
                {" "}
                <img className="img-margin" src={emailimg} />
                Info@thescienceofbeauty.co
              </p>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
export default SemaglutideNavbar;
