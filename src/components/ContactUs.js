import React, { useState, useEffect } from "react";
import "../assets/CustomCSS/ContactUs.css";
import { Button, Grid, TextField } from "@material-ui/core";
import CallIcon from "@mui/icons-material/Call";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import send from "../assets/images/send.png";
import Plx from "react-plx";
import { POST_CONTACT } from "../env/apiConfig";

function ContactUs() {
  const [buttonText, setButtonText] = useState("Send Messages");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    interested: [],
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    if (type === "checkbox") {
      const updatedInterested = checked
        ? [...formData.interested, value]
        : formData.interested.filter((item) => item !== value);

      setFormData((prevFormData) => ({
        ...prevFormData,
        interested: updatedInterested,
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let valid = true;
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = "Name is required";
      valid = false;
    } else if (!/^[a-zA-Z\s]+$/.test(formData.name)) {
      errors.name = "Name should only contain letters and spaces";
      valid = false;
    } else if (formData.name.length > 25) {
      errors.name = "Name should be less than 25 characters";
      valid = false;
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is not valid";
      valid = false;
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required";
      valid = false;
    }

    if (!valid) {
      setFormErrors(errors);
      return;
    }

    try {
      const formDataWithCategories = {
        username: formData.name,
        user_email: formData.email,
        interested_in: Array.from(activeCategories),
        user_message: formData.message,
      };
      const response = await fetch(POST_CONTACT, {
        method: "POST",

        body: JSON.stringify(formDataWithCategories),
      });

      if (response.ok) {
        console.log("Success");
        setButtonText("Delivered");
        setFormData({ name: "", email: "", message: "", interested: [] });
      } else {
        // Handle error
        console.error("Failed to send message");
      }
    } catch (error) {
      console.error("Error:", error);
      setButtonText("Undelivered");
    }
  };
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
  ];
  const [activeButton, setActiveButton] = useState("phone");
  const [activeSocialButton, setActiveSocialButton] = useState("instagram");
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
      <div style={{ padding: "4 % 0", overflow: "hidden", padding: "2% 0" }}>
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
                      className={`contact-buttons ${
                        activeButton === "email" ? "active-contact-btn" : ""
                      }`}
                      onClick={() => handleButtonClick("email")}
                    >
                      <MailOutlineIcon style={{ color: "#9d4a43" }} />
                      <span>Info@thescienceofbeauty.co</span>
                    </Button>
                    <Button
                      className={`contact-buttons ${
                        activeButton === "phone" ? "active-contact-btn" : ""
                      }`}
                      onClick={() => handleButtonClick("phone")}
                    >
                      <CallIcon style={{ color: "#9d4a43" }} />
                      <span>(818) 415-0083</span>
                    </Button>
                    <Button
                      className={`contact-buttons ${
                        activeButton === "location" ? "active-contact-btn" : ""
                      }`}
                      onClick={() => handleButtonClick("location")}
                    >
                      <LocationOnIcon style={{ color: "#9d4a43" }} />
                      <span>4101 Bryan st suite 100 Dallas tx 75204</span>
                    </Button>
                  </div>
                  <div>
                    <div className="social-row">
                      <a
                        href="https://m.facebook.com/profile.php?id=100083188941922&name=xhp_nt_"
                        target="_blank"
                      >
                        <div
                          className={`social-icons-span ${
                            activeSocialButton === "facebook"
                              ? "active-social-btn"
                              : ""
                          }`}
                          onClick={() => handleSocialButtonClick("facebook")}
                        >
                          <FacebookIcon style={{ color: "#eee" }} />
                        </div>
                      </a>
                      <a
                        href="https://www.instagram.com/thescienceofbeauty.co/"
                        target="_blank"
                      >
                        <div
                          className={`social-icons-span ${
                            activeSocialButton === "instagram"
                              ? "active-social-btn"
                              : ""
                          }`}
                          onClick={() => handleSocialButtonClick("instagram")}
                        >
                          <InstagramIcon style={{ color: "#eee" }} />
                        </div>
                      </a>
                      <a href="#" target="_blank">
                        <div
                          className={`social-icons-span ${
                            activeSocialButton === "twitter"
                              ? "active-social-btn"
                              : ""
                          }`}
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
                <form onSubmit={handleSubmit}>
                  <div className="additional-div">
                    <p className="contact-interested-heading">
                      I’m interested in...
                    </p>
                    <div className="btn-wrap">
                      <Button
                        className={`category-btn ${
                          activeCategories.has("Semaglutide")
                            ? "active-category-btn"
                            : ""
                        }`}
                        onClick={() => handleCategoryButtonClick("Semaglutide")}
                      >
                        Semaglutide
                      </Button>
                      <Button
                        className={`category-btn ${
                          activeCategories.has("Face & Neck")
                            ? "active-category-btn"
                            : ""
                        }`}
                        onClick={() => handleCategoryButtonClick("Face & Neck")}
                      >
                        Face & Neck
                      </Button>
                      <Button
                        className={`category-btn ${
                          activeCategories.has("BodyTightening")
                            ? "active-category-btn"
                            : ""
                        }`}
                        onClick={() =>
                          handleCategoryButtonClick("BodyTightening")
                        }
                      >
                        BodyTightening
                      </Button>
                      <Button
                        className={`category-btn ${
                          activeCategories.has("BodyScarring")
                            ? "active-category-btn"
                            : ""
                        }`}
                        onClick={() =>
                          handleCategoryButtonClick("BodyScarring")
                        }
                      >
                        BodyScarring
                      </Button>
                      <Button
                        className={`category-btn other-contact-btn ${
                          activeCategories.has("Other")
                            ? "active-category-btn"
                            : ""
                        }`}
                        onClick={() => handleCategoryButtonClick("Other")}
                      >
                        Other
                      </Button>
                    </div>
                    <div className="contact-textField-div">
                      <TextField
                        className="contact-form-fields"
                        id="standard-basic"
                        name="name"
                        label="Your name"
                        variant="standard"
                        value={formData.name}
                        onChange={handleChange}
                      />
                      <TextField
                        className="contact-form-fields"
                        id="standard-basic"
                        name="email"
                        label="Your email"
                        value={formData.email}
                        variant="standard"
                        onChange={handleChange}
                      />
                      <TextField
                        className="contact-form-fields"
                        id="standard-basic"
                        name="message"
                        value={formData.message}
                        label="Your message"
                        variant="standard"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="sendMessageBtn-div">
                      <Button type="submit" className="send-message-btn">
                        <img src={send} />
                        <span className="send-messages-span">
                          {/* Send Messages */}
                          {buttonText}
                        </span>
                      </Button>
                    </div>
                  </div>
                </form>
              </Grid>
            </Grid>
          </div>
        </Plx>
      </div>
    </>
  );
}
export default ContactUs;
