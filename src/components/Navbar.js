import { React, useState } from "react";
import "../assets/CustomCSS/Navbar.css";
import { Link } from "react-router-dom";
import { Grid, Fab, TextField, Tooltip } from "@material-ui/core";
import Callimg from "../assets/images/nav-call.svg";
import emailimg from "../assets/images/nav-gmail.svg";
import logoNavbar from "../assets/images/youLogo.svg";
import search from "../assets/images/search.png";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import { Sling as Hamburger } from "hamburger-react";
import fabIcon from "../assets/images/chatRobotIcon.svg";
import chatbot from "../assets/images/chatbot.svg";
import InputAdornment from "@mui/material/InputAdornment";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import SendIcon from "@mui/icons-material/Send";
import down from '../assets/images/chevon-down.svg'
import { useNavigate } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import fb from '../assets/images/fb-real.svg'
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from '@mui/icons-material/X';
import twitter from '../assets/images/x-real.svg'
import insta from '../assets/images/insta-real.svg'
import WidgetsIcon from '@mui/icons-material/Widgets';


function Navbar() {
  const navigate = useNavigate();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isAssistiveMenuOpen, setIsAssistiveMenuOpen] = useState(false);
  const [position, setPosition] = useState({ top: 100, left: 50 });
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
    setMenuOpen(!isMenuOpen)
  };
  const handleLinkClick = (event) => {
    event.preventDefault();
    closeMenu();
    navigate('/#pricing');
    handleLinkClicktest(event)
    console.log('one');
  };
  const handleLinkClicktest = (event) => {
    // event.preventDefault();
    closeMenu();
    navigate('/#pricing');
    console.log('two');

  };


  const handleMouseDown = (e) => {
    // Record initial mouse position
    const startX = e.clientX;
    const startY = e.clientY;

    // Calculate the offset between the initial mouse position and the current position of the draggable element
    const offsetX = startX - position.left;
    const offsetY = startY - position.top;

    // Update state to start dragging
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    function handleMouseMove(event) {
      // Calculate new position based on the mouse movement
      const newLeft = event.clientX - offsetX;
      const newTop = event.clientY - offsetY;

      // Update the state with the new position
      setPosition({ top: newTop, left: newLeft });
    }

    function handleMouseUp() {
      // Remove event listeners when mouse is released
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    }
  };

  const handleDoubleClick = () => {
    setIsAssistiveMenuOpen(!isAssistiveMenuOpen);
  };
  // const menuOptions = [
  //   { label: "Option 1", action: () => console.log("Option 1 clicked") },
  //   { label: "Option 2", action: () => console.log("Option 2 clicked") },
  //   // Add more menu options as needed
  // ];
  return (
    <>
      <div style={{ padding: '2% 0 17px', borderBottom: "1px solid #ccc" }}>
        <Grid container style={{ padding: "0 2%" }}>
          <Grid item lg={4} md={4} sm={4} xs={0} style={{ display: 'flex', alignItems: 'center' }}>
            <div>
              <div className="social-row socisal-row-nav">
                <a href="https://www.facebook.com/Goddesshairxo" target="_blank">
                  <div
                    className={`social-icons-span active-social-btn`}
                  // onClick={() => handleSocialButtonClick("facebook")}
                  >
                    <FacebookIcon style={{ color: "#eee" }} />
                  </div>
                </a>
                <a href="https://www.instagram.com/thescienceofbeautydallas/" target="_blank">
                  <div
                    className={`social-icons-span active-social-btn`}
                  // onClick={() => handleSocialButtonClick("instagram")}
                  >
                    <InstagramIcon style={{ color: "#eee" }} />
                  </div>
                </a>
                <a href="" target="_blank">
                  <div
                    className={`social-icons-span active-social-btn`}
                  // onClick={() => handleSocialButtonClick("twitter")}
                  >
                    <XIcon style={{ color: "#eee" }} />
                  </div>
                </a>
              </div>
            </div>
          </Grid>
          <Grid item lg={4} md={4} sm={0} xs={0} className="grid-1">
            <div className="logo" style={{ zIndex: "2" }}>
              <Link to="/">
                <img className="web-logo logoForLargeScreen" src={logoNavbar} alt="Logo" />
              </Link>
            </div>
          </Grid>
          <Grid item lg={4} md={4} sm={6} xs={12} style={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }} className="grid-2">
            <div className="toptopNav">
              <p className="navbar-top-dail">
                {" "}
                <img className="img-margin" src={Callimg} />
                123 456 7890
              </p>


              <p className="navbar-top-email">
                {" "}
                <img className="img-margin" src={emailimg} />
                Info@thescienceofbeautydallas.com
              </p>
            </div>
          </Grid>
        </Grid>
      </div>
      <nav className="navbar">
        <div style={{color:'white'}}>span span</div>
        <div className="logo" style={{ zIndex: "2" }}>
          <img className="web-logo logoForSmallScreen" src={logoNavbar} alt="Logo" />
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
              ABOUT US
            </Link>
          </li>
          <li>
            <Link to="/services" onClick={closeMenu}>
              SERVICES
            </Link>
          </li>
          {/* <li>
            <ScrollLink to="pricing" smooth duration={500}>
              <a
                href='/#pricing'
                onClick={handleLinkClick}

              >
                PRICING
              </a>
            </ScrollLink>
          </li> */}
          <li>
            <Link to="/blogs" onClick={closeMenu}>
              RESEARCH & BLOGS
            </Link>
          </li>
          {/* <li className="listForlogoForLargeScreen">
            <div className="logo" style={{ zIndex: "2" }}>
              <img className="web-logo logoForLargeScreen" src={logoNavbar} alt="Logo" />
            </div>
          </li> */}
          <li>
            <Link to="/contact" onClick={closeMenu}>
              CONNECT
            </Link>
          </li>
          <li>
            <Link to="/products" onClick={closeMenu}>
              SELF CARE
            </Link>
          </li>
          <div className="langaugeSelectorHolder">
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
          </div>
          {/* <li>
            <img src={search} />
          </li> */}
        </ul>
      </nav>
      <div className="chatbot-icons">
        <div className={`chatscreen${isChatVisible ? " visible" : ""}`}>
          <div className="chat-head-div">
            <Grid container className="chat-head-container">
              <Grid items lg={2}>
                <span className="chat-head-icon-wrapper">
                  <img className="chat-head-icons-img" src={chatbot} />
                </span>
              </Grid>
              <Grid items lg={8} style={{ margin: 'auto' }}>
                <p className="chat-head-txt1">Chat with</p>
                <p className="chat-head-txt2">AntBot AI</p>
              </Grid>
            </Grid>
          </div>
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
              placeholder="Write a msg..."
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
      {/* ====== assistive touch */}
      {/* <Tooltip title="Social Platforms" placement="top">
        <div
          id="drager"
          className="draggable"
          style={{ top: `${position.top}px`, left: `${position.left}px` }}
          onMouseDown={handleMouseDown}
          onClick={handleDoubleClick}
        >
          <WidgetsIcon style={{ color: '#A75E5B' }} />
          {isAssistiveMenuOpen && (
            <>
              <div className="menu-options">
                <div><a href="https://www.facebook.com/Goddesshairxo" target="_blank"><img className="dragger-fb" src={fb} /></a></div>
                <div><a href="https://www.instagram.com/thescienceofbeautydallas/" target="_blank"><img src={twitter} className="dragger-x" /></a></div>
                <div><a href="https://www.instagram.com/thescienceofbeautydallas/" target="_blank"><img src={insta} className="dragger-insta" /></a></div>
              </div>
            </>
          )}
          <div></div>
        </div>
      </Tooltip> */}


      {/* ====== assistive touch */}
    </>
  );
}
export default Navbar;
