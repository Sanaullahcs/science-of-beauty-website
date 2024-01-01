import React from "react";
import "../assets/CustomCSS/ContactUs.css";
import { Button, Grid, TextField } from "@material-ui/core";
import CallIcon from "@mui/icons-material/Call";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import send from "../assets/images/send.png";

function ContactUs() {
  return (
    <>
      <div>
        <p className="starting-contact-heading">Contact us</p>
        <div className="contact-card">
          <Grid container>
            <Grid items lg={6} md={12}>
              <div>
                <p className="contact-heading">
                  Let’s discuss on something{" "}
                  <span className="cool-span">cool</span> together
                </p>
                <div className="btn-wrapper">
                  <Button className="contact-buttons">
                    <MailOutlineIcon style={{ color: "#fff" }} />
                    <span>user12345@gmail.com</span>
                  </Button>
                  <Button className="contact-buttons">
                    <CallIcon style={{ color: "#fff" }} />
                    <span>+123 456 789</span>
                  </Button>
                  <Button className="contact-buttons">
                    <LocationOnIcon style={{ color: "#fff" }} />
                    <span>123 Street 456 House</span>
                  </Button>
                </div>
                <div>
                  <div className="social-row">
                    <div className="social-icons-span">
                      <FacebookIcon style={{ color: "#eee" }} />
                    </div>
                    <div className="social-icons-span">
                      <InstagramIcon
                        style={{
                          color: "#eee",
                        }}
                      />
                    </div>
                    <div className="social-icons-span">
                      <TwitterIcon style={{ color: "#eee" }} />
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid items lg={6} md={12}>
              <div className="additional-div">
                <p className="contact-interested-heading">
                  I’m interested in...
                </p>
                <div className="btn-wrap">
                  <Button className="category-btn">Makeup Artist</Button>
                  <Button className="category-btn">Barbersalon</Button>
                  <Button className="category-btn">Frisorsalon</Button>
                  <Button className="category-btn">Massageclinic</Button>
                  <Button className="category-btn">Other</Button>
                </div>
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
                <div>
                  <Button className="send-message-btn">
                    <img src={send} />
                    <span className="send-messages-span">Send Messages</span>
                  </Button>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}
export default ContactUs;
