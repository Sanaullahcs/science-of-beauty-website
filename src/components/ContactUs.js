import React, { useState } from "react";
import "../assets/CustomCSS/ContactUs.css";
import { Button, Grid, TextField } from "@material-ui/core";
import CallIcon from "@mui/icons-material/Call";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from '@mui/icons-material/X';
import send from "../assets/images/send.png";
import Plx from "react-plx";

function ContactUs() {
  const parallaxDataTxt = [
    {
      start: 0,
      end: 600,
      properties: [
        {
          startValue: 1.5,
          endValue: 1,
          property: "scale",
        },
      ],
    },
    {
      start: 0,
      end: 600,
      properties: [
        {
          startValue: 0,
          endValue: 1,
          property: "opacity",
        },
      ],
    },
    // {
    //   start: 4200,
    //   end: 5200,
    //   properties: [
    //     {
    //       startValue: 1.5,
    //       endValue: 1,
    //       property: "scale",
    //     },

    //   ],
    // },
    // {
    //   start: 4000,
    //   end: 5200,
    //   properties: [
    //     {
    //       startValue: 0,
    //       endValue: 1,
    //       property: "opacity",
    //     },
    //   ],
    // },
  ];
  const [activeButton, setActiveButton] = useState('phone');
  const [activeSocialButton, setActiveSocialButton] = useState('instagram');
  const [activeCategories, setActiveCategories] = useState(new Set());
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };
  const handleSocialButtonClick = (socialButtonName) => {
    setActiveSocialButton(socialButtonName);
  };
  const handleCategoryButtonClick = (category) => {
    const updatedCategories = new Set(activeCategories);

    if (updatedCategories.has(category)) {
      updatedCategories.delete(category);
    } else {
      updatedCategories.add(category);
    }

    setActiveCategories(updatedCategories);
  };
  return (
    <>
      <div style={{ padding: '4 % 0', overflow: 'hidden', padding: '2% 0' }}>
        <Plx parallaxData={parallaxDataTxt}>
          <div className="contact-card">
            <Grid container>
              <Grid items lg={6} md={12}>
                <div>
                  <p className="contact-heading">
                    Let’s discuss on something{" "}
                    <span className="cool-span">cool</span> together
                  </p>
                  <div className="btn-wrapper">
                    <Button
                      className={`contact-buttons ${activeButton === "email" ? "active-contact-btn" : ""}`}
                      onClick={() => handleButtonClick("email")}
                    >
                      <MailOutlineIcon style={{ color: "#9d4a43" }} />
                      <span>Info@thescienceofbeauty.co</span>
                    </Button>
                    <Button
                      className={`contact-buttons ${activeButton === "phone" ? "active-contact-btn" : ""}`}
                      onClick={() => handleButtonClick("phone")}
                    >
                      <CallIcon style={{ color: "#9d4a43" }} />
                      <span>+123 456 789</span>
                    </Button>
                    <Button
                      className={`contact-buttons ${activeButton === "location" ? "active-contact-btn" : ""}`}
                      onClick={() => handleButtonClick("location")}
                    >
                      <LocationOnIcon style={{ color: "#9d4a43" }} />
                      <span>123 Street 456 House</span>
                    </Button>
                  </div>
                  <div>
                    <div className="social-row">
                      <a href="https://www.facebook.com/Goddesshairxo" target="_blank">
                        <div
                          className={`social-icons-span ${activeSocialButton === "facebook" ? "active-social-btn" : ""}`}
                          onClick={() => handleSocialButtonClick("facebook")}
                        >
                          <FacebookIcon style={{ color: "#eee" }} />
                        </div>
                      </a>
                      <a href="https://www.instagram.com/thescienceofbeautydallas/" target="_blank">
                        <div
                          className={`social-icons-span ${activeSocialButton === "instagram" ? "active-social-btn" : ""}`}
                          onClick={() => handleSocialButtonClick("instagram")}
                        >
                          <InstagramIcon style={{ color: "#eee" }} />
                        </div>
                      </a>
                      <a href="#" target="_blank">
                        <div
                          className={`social-icons-span ${activeSocialButton === "twitter" ? "active-social-btn" : ""}`}
                          onClick={() => handleSocialButtonClick("twitter")}
                        >
                          <XIcon style={{ color: "#eee" }} />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid items lg={6} md={12}>
                <div className="additional-div">
                  {/* <p className="contact-interested-heading">
                    I’m interested in...
                  </p> */}
                  {/* <div className="btn-wrap">
                    <Button
                      className={`category-btn ${activeCategories.has("Makeup Artist") ? "active-category-btn" : ""}`}
                      onClick={() => handleCategoryButtonClick("Makeup Artist")}
                    >
                      Makeup Artist
                    </Button>
                    <Button
                      className={`category-btn ${activeCategories.has("Barbersalon") ? "active-category-btn" : ""}`}
                      onClick={() => handleCategoryButtonClick("Barbersalon")}
                    >
                      Barbersalon
                    </Button>
                    <Button
                      className={`category-btn ${activeCategories.has("Frisorsalon") ? "active-category-btn" : ""}`}
                      onClick={() => handleCategoryButtonClick("Frisorsalon")}
                    >
                      Frisorsalon
                    </Button>
                    <Button
                      className={`category-btn ${activeCategories.has("Massageclinic") ? "active-category-btn" : ""}`}
                      onClick={() => handleCategoryButtonClick("Massageclinic")}
                    >
                      Massageclinic
                    </Button>
                    <Button
                      className={`category-btn other-contact-btn ${activeCategories.has("Other") ? "active-category-btn" : ""}`}
                      onClick={() => handleCategoryButtonClick("Other")}
                    >
                      Other
                    </Button>
                  </div> */}
                  <div className="contact-textField-div">
                    <TextField
                      className="contact-form-fields"
                      id="standard-basic"
                      label="Your name"
                      variant="standard"
                    />
                    <TextField
                      className="contact-form-fields"
                      id="standard-basic"
                      label="Your email"
                      variant="standard"
                    />
                    <TextField
                      className="contact-form-fields"
                      id="standard-basic"
                      label="Your message"
                      variant="standard"
                    />
                  </div>
                  <div className="sendMessageBtn-div">
                    <Button className="send-message-btn">
                      <img src={send} />
                      <span className="send-messages-span">Send Messages</span>
                    </Button>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </Plx>
      </div>
    </>
  );
}
export default ContactUs;
