import { React, useState } from "react";
import "../assets/CustomCSS/Navbar.css";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";
import Callimg from "../assets/images/nav-call.png";
import emailimg from "../assets/images/nav-gmail.png";
import logoNavbar from "../assets/images/logo.png";
import search from "../assets/images/search.png";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import { Sling as Hamburger } from "hamburger-react";

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <div style={{ background: "#FFF3F8" }}>
        <Grid container>
          <Grid item lg={8} md={6} sm={0} xs={0}></Grid>
          <Grid item lg={2} md={3} sm={12} xs={12}>
            <p>
              {" "}
              <img className="img-margin" src={Callimg} />
              123 456 7890
            </p>
          </Grid>
          <Grid item lg={2} md={3} sm={12} xs={12}>
            <p>
              {" "}
              <img className="img-margin" src={emailimg} />
              email@thescienceofbeauty.com
            </p>
          </Grid>
        </Grid>
      </div>
      <nav className="navbar">
        <div className="logo" style={{ zIndex: "2" }}>
          <img src={logoNavbar} alt="Logo" />
        </div>
        <div
          style={{ zIndex: "2" }}
          className={`menu-icon ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <Hamburger />
        </div>

        <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/about">ABOUT US</Link>
          </li>
          <li>
            <Link to="/services">SERVICES</Link>
          </li>
          <li>
            <Link to="">PACKAGES</Link>
          </li>
          <li>
            <Link to="/blogs">BLOGS</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT US</Link>
          </li>
          <li className="langauge-select">
            <FormControl sx={{ m: 1, minWidth: 300 }}>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={age}
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>EN</MenuItem>
                <MenuItem value={20}>EN</MenuItem>
                <MenuItem value={30}>EN</MenuItem>
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
    </>
  );
}
export default Navbar;
