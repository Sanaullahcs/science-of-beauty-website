// import logo from "./logo.svg";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route ,useLocation } from "react-router-dom";
// ===================================== Components =============================================
// import Navbar from "./components/Navbar";
// import Headers from "./components/Header";
// import WhoWeAre from "./components/WhoWeAre";
// import OurServices from "./components/OurServices";
// import BeforeAfter from "./components/BeforeAfter";
// import Testimonials from "./components/Testimonials";
// import ContactUs from "./components/ContactUs";
// import Blogs from "./components/Blogs";
// import OurTeam from "./components/OurTeam";
// import Footer from "./components/Footer";
// import AboutUsHeaders from "./components/AboutUsHeader";
// import OurValues from "./components/OurValues";
// import WhatIncludes from "./components/WhatIncludes";
// import ContactUsHeaders from "./components/ContactUsHeader";
// import GetInTouch from "./components/GetInTouch";
// import Pricing from "./components/Pricing";
// import ServicesHeaders from "./components/ServicesHeader";
// import ServicesMain from "./components/ServicesMain";
// import BlogsHeader from "./components/BlogsHeader";
// import BlogsMain from "./components/BlogsMain";
// import Products from "./components/Products/index";
// import SubProducts from "./components/Products/SubProducts";
// import FaceAndNeck from "./components/Services/FaceAndNeck";
// import BodyTightening from "./components/Services/BodyTightening";
// import BodyScarring from "./components/Services/BodyScarring";
// import LaserHairRemoval from "./components/Services/LaserHairRemoval";
// import Pigmentation from "./components/Services/Pigmentation";
// import FacialAndSpiderVeinTreatment from "./components/Services/FacialAndSpiderVeinTreatment";
// import CRYOFacial from "./components/Services/CRYOFacial";
// import BodyToning from "./components/Services/BodyToning";
// import BodySlimming from "./components/Services/BodySlimming";
// import AntiAgingFacial from "./components/Services/AntiAgingFacial";
// import IlluminatingFacial from "./components/Services/IlluminatingFacial";
// import BeClearPurifyingFacial from "./components/Services/BeClearPurifyingFacial";
// import CustomizedChemicalPeel from "./components/Services/CustomizedChemicalPeel";
// import BrowLamination from "./components/Services/BrowLamination";
// import LashLiftAndTint from "./components/Services/LashLiftAndTint";
// import BlogDetails from "./components/BlogDetails";
// import BlogCard from "./JSONData/BlogCard";
// import LoginComponent from "./components/LoginAndSignUp/LoginCom";
// import SignupComponent from "./components/LoginAndSignUp/SignUpComponent";
// import Appoinments from "./components/Appointments";
// import SemaglutideHeader from "./components/SemaglutideHeader.js";
// import SemaglutideMain from "./components/SemaglutideMain.js";
// import SemaglutideNavbar from "./components/SemaglutideNavbar.js";

// =============================== Assets ===================================
import React from "react";
import "./assets/CustomCSS/Main.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import AnimatedRoutes from "./components/AnimatedRoutes.js";

function App() {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []); // The empty dependency array ensures that this effect runs only once when the component mounts

  return (
    <Router>
      <div className="App">
       <AnimatedRoutes/>
      </div>
    </Router>
  );
}

export default App;
