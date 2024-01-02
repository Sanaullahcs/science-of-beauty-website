import { React, useState } from "react";
import "../assets/CustomCSS/Navbar.css";
import { Link } from "react-router-dom";
import { Grid, Fab, TextField } from "@material-ui/core";
import Callimg from "../assets/images/nav-call.png";
import emailimg from "../assets/images/nav-gmail.png";
import logoNavbar from "../assets/images/logo.png";
import search from "../assets/images/search.png";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import { Sling as Hamburger } from "hamburger-react";
import fabIcon from "../assets/images/fab-icons-chat.png";
import chatbot from "../assets/images/chatbot.png";
import InputAdornment from "@mui/material/InputAdornment";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import SendIcon from "@mui/icons-material/Send";
import down from '../assets/images/chevon-down.svg'

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isChatVisible, setIsChatVisible] = useState(false);
  const toggleChatVisibility = () => {
    setIsChatVisible((prev) => !prev);
  };
  const [age, setAge] = useState(10);

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <div style={{ background: "#FFF3F8" }}>
        <Grid container>
          <Grid item lg={7} md={5} sm={0} xs={0}></Grid>
          <Grid item lg={2} md={3} sm={12} xs={12}>
            <p className="navbar-top-dail">
              {" "}
              <img className="img-margin" src={Callimg} />
              123 456 7890
            </p>
          </Grid>
          <Grid item lg={3} md={4} sm={12} xs={12}>
            <p className="navbar-top-email">
              {" "}
              <img className="img-margin" src={emailimg} />
              email@thescienceofbeauty.com
            </p>
          </Grid>
        </Grid>
      </div>
      <nav className="navbar">
        <div className="logo" style={{ zIndex: "2" }}>
          <img className="web-logo" src={logoNavbar} alt="Logo" />
        </div>
        <div
          style={{ zIndex: "2" }}
          className={`menu-icon ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <Hamburger toggled={isMenuOpen} />
        </div>

        <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <li>
            <Link to="/" onClick={closeMenu}>
              HOME
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={closeMenu}>
              ABOUT
            </Link>
          </li>
          <li>
            <Link to="/services" onClick={closeMenu}>
              SERVICES
            </Link>
          </li>
          <li>
            <Link to="" onClick={closeMenu}>
              PACKAGES
            </Link>
          </li>
          <li>
            <Link to="/blogs" onClick={closeMenu}>
              BLOGS
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={closeMenu}>
              CONTACT
            </Link>
          </li>
          <li>
            <Link to="/products" onClick={closeMenu}>
              PRODUCTS
            </Link>
          </li>
          <li className="langauge-select">
            <FormControl sx={{ m: 1, minWidth: 300 }} className="languageSelecter">
              <img className="down-arrow" src={down} />
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={age}
                onChange={handleChange}
                className="languageSelect"
              >
                {/* <MenuItem value="">
                  <em>None</em>
                </MenuItem> */}
                <MenuItem value={10}>EN</MenuItem>
                <MenuItem value={20}>ES</MenuItem>
                <MenuItem value={30}>FR</MenuItem>
              </Select>
            </FormControl>
          </li>
          <li>
            <Button className="login-btn">Login</Button>
          </li>
          <li>
            <Button className="signup-btn">Signup</Button>
          </li>
          <li>
            <img src={search} />
          </li>
        </ul>
      </nav>
      <div className="chatbot-icons">
        <div className={`chatscreen${isChatVisible ? " visible" : ""}`}>
          <div className="proper-chat-screen">
            <p className="chatscreen-date">Dec, 13</p>
            <div className="chat-reply">
              <Fab className="chatbot-profile">
                <img src={chatbot} />
              </Fab>
              <span className="bot-chat">how can i help today?</span>
            </div>
            <div className="my-reply">
              <span className="my-chat">lorem ipsem isa a</span>
              <span className="my-chat">Lorem ipsem is a type of</span>
            </div>
            <div className="my-reply">
              <span className="my-chat">lorem ipsem isa a</span>
              <span className="my-chat">Lorem ipsem is a type of</span>
            </div>
            <div className="my-reply">
              <span className="my-chat">lorem ipsem isa a</span>
              <span className="my-chat">Lorem ipsem is a type of</span>
            </div>
            <div className="my-reply">
              <span className="my-chat">lorem ipsem isa a</span>
              <span className="my-chat">Lorem ipsem is a type of</span>
            </div>
            <div className="my-reply">
              <span className="my-chat">lorem ipsem isa a</span>
              <span className="my-chat">Lorem ipsem is a type of</span>
            </div>
          </div>
          <div className="search-field-wrapper">
            <TextField
              className="search-field-for-chatbot"
              id="input-with-icon-textfield"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <label className="camera-input-label" htmlFor="file-input">
                      <CameraAltIcon className="camera-icon" />
                    </label>
                    <input
                      id="file-input"
                      type="file"
                      accept="image/*"
                      style={{ display: "none" }}
                      onChange={handleFileChange}
                    />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <SendIcon className="send-icon" />
                  </InputAdornment>
                ),
              }}
              variant="filled"
            />
          </div>
        </div>
        <Fab
          color="transparent"
          className="fab-icons-chatbot"
          onClick={toggleChatVisibility}
        >
          <img className="fabIcon-Img" src={fabIcon} />
        </Fab>
      </div>
    </>
  );
}
export default Navbar;
