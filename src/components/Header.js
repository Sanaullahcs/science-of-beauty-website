import React from "react";
import "../assets/CustomCSS/Header.css";
import salon from "../assets/images/minLogo.svg";
import Button from "@material-ui/core/Button";
import headerImg from "../assets/images/headerForSmall.png";
import headerImg1 from "../assets/images/headerforSmall2.png";
import headerImg2 from "../assets/images/headerforSmall3.png";
import headerImg3 from "../assets/images/headerforSmall4.png";
import {
  Grid,
  // TextField
} from "@material-ui/core";
// import SearchIcon from "@mui/icons-material/Search";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import searchIcon from '../assets/images/searchIcon.svg'
// import InputAdornment from '@mui/material/InputAdornment';
// import AccountCircle from '@mui/icons-material/AccountCircle';
import Plx from "react-plx";

function Header() {
  const handleClick = () => {
    const servicesDiv = document.getElementById("services");
    if (servicesDiv) {
      servicesDiv.scrollIntoView({ behavior: "smooth" });
    }
  };
  // const parallaxData = [
  //   {
  //     start: 200,
  //     end: 500,
  //     properties: [
  //       {
  //         startValue: 1,
  //         endValue: 0,
  //         property: "opacity",
  //       },
  //     ],
  //   },
  // ];
  return (
    <>
      <div class="image-container">
        {/* <img className="smallScreenImg" src={headerImg} /> */}
        {/* <img className="smallScreenImg" src={headerImg2} />
        <img className="smallScreenImg" src={headerImg3} />
        <img className="smallScreenImg" src={headerImg1} /> */}
      </div>
      <div className="bg-home-banner">
        <div>
          <Grid container>
            <Grid items lg={7}>
              {/* <Plx parallaxData={parallaxData}> */}
              <div className="smallScreenCard">
                {/* <div className="img-text-div">
                  <img className="salon-img" src={salon} />
                  <p className="text-img-heading">Science, Beauty, Wellness</p>
                </div> */}
                <p className="heading-header">
                  Welcome to <br/> The Science of Beauty
                </p>
                <p className="header-header-by">
                  {/* <span className="preHeading1">by</span>{" "} */}
                  <span className="preHeading2">
                    Research Based Beauty and wellness
                  </span>
                </p>
                {/* <p className="banner-description">
                  There are many variation of passages are Ipsum available,
                  majority have suffered alteration in some form.
                </p> */}
                <div style={{ display: "flex", justifyContent: "start" }}>
                  <Button
                    class="exploremoreHeaderBtn"
                    disableTouchRipple
                    onClick={handleClick}
                  >
                    Explore More
                  </Button>
                </div>
                {/* <div>
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
                                  <SearchIcon style={{ color: "#9d4a43" }} />
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
                                  <LocationOnIcon style={{ color: "#9d4a43" }} />
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
                  </div> */}
              </div>
              {/* </Plx> */}
            </Grid>
            <Grid items lg={0}></Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}
export default Header;
