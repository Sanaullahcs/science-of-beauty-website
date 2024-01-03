import React from "react";
import "../assets/CustomCSS/Header.css";
import salon from "../assets/images/hair-salon-logo.png";
import Button from "@material-ui/core/Button";
import { Grid, TextField } from "@material-ui/core";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import searchIcon from '../assets/images/searchIcon.svg'
// import InputAdornment from '@mui/material/InputAdornment';
// import AccountCircle from '@mui/icons-material/AccountCircle';
import Plx from "react-plx";

function Header() {
  const parallaxData = [
    {
      start: 0,
      end: 500,
      properties: [
        {
          startValue: 1,
          endValue: 0,
          property: "opacity",
        },
      ],
    },
  ];
  return (
    <>
      <div className="bg-home-banner">
        <div>
          <Grid container>
            <Grid items lg={7}>
              <Plx parallaxData={parallaxData}>
                <div>
                  <div className="img-text-div">
                    <img className="salon-img" src={salon} />
                    <p className="text-img-heading">
                      Hair Salon, Masseuse, Beauty Salon
                    </p>
                  </div>
                  <p className="heading-header">Face | Skin | Body</p>
                  <p className="header-header-by">
                    <span className="preHeading1">by</span>{" "}
                    <span className="preHeading2">ALLURE</span>
                  </p>
                  <p className="banner-description">
                    There are many variation of passages are Ipsum available,
                    majority have suffered alteration in some form.
                  </p>
                  <div>
                    <div>
                      <Grid container className="header-form-wrapper">
                        <Grid items lg="4" md="6" sm="12" xs="12">
                          <div className="field-wrapper">
                            <p className="form-field">Service Name</p>
                            <TextField
                              className="form-field-text-area"
                              id="standard-basic"
                              label="Book now..."
                              variant="standard"
                              InputProps={{
                                endAdornment: (
                                  <SearchIcon style={{ color: "#BA7894" }} />
                                ),
                              }}
                            />
                          </div>
                        </Grid>
                        <Grid items lg="4" md="6" sm="12" xs="12">
                          <div className="field-wrapper">
                            <p className="form-field">Address</p>
                            <TextField
                              className="form-field-text-area"
                              id="standard-basic"
                              label="Where"
                              variant="standard"
                              InputProps={{
                                endAdornment: (
                                  <LocationOnIcon style={{ color: "#BA7894" }} />
                                ),
                              }}
                            />
                          </div>
                        </Grid>
                        <Grid items lg="4" md="6" sm="12" xs="12">
                          <div className="search-div-wrapper">
                            <Button className="searchBtnHeader">
                              <img className="searchIcon-svg" src={searchIcon} />
                              Search</Button>
                          </div>
                        </Grid>
                      </Grid>
                    </div>
                  </div>
                </div>
              </Plx>
            </Grid>
            <Grid items lg={0}></Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}
export default Header;
