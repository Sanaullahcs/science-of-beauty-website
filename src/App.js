// import logo from "./logo.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Headers from "./components/Header";
import WhoWeAre from "./components/WhoWeAre";
import OurServices from "./components/OurServices";
import BeforeAfter from "./components/BeforeAfter";
import Testimonials from "./components/Testimonials";
import ContactUs from "./components/ContactUs";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";
import AboutUsHeaders from "./components/AboutUsHeader";
import OurValues from "./components/OurValues";
import WhatIncludes from "./components/WhatIncludes";
import ContactUsHeaders from "./components/ContactUsHeader";
import GetInTouch from "./components/GetInTouch";
import Pricing from "./components/Pricing";
import ServicesHeaders from "./components/ServicesHeader";
import ServicesMain from "./components/ServicesMain";
import BlogsHeader from "./components/BlogsHeader";
import BlogsMain from "./components/BlogsMain";
import React from "react";
import './assets/CustomCSS/Main.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            exact
            path={"/"}
            element={
              <>
                <Navbar />
                <Headers />
                <WhoWeAre />
                <OurServices />
                <BeforeAfter />
                <Testimonials />
                <Pricing />
                <ContactUs />
                <Blogs />
                <Footer />
              </>
            }
          />
          <Route
            exact
            path={"/about"}
            element={
              <>
                <Navbar />
                <AboutUsHeaders />
                <OurValues />
                <WhatIncludes />
                <Testimonials />
                <Footer />
              </>
            }
          />
          <Route
            exact
            path={"/contact"}
            element={
              <>
                <Navbar />
                <ContactUsHeaders />
                <ContactUs />
                <GetInTouch />
                <Footer />
              </>
            }
          />
          <Route
            exact
            path={"/services"}
            element={
              <>
                <Navbar />
                <ServicesHeaders />
                <ServicesMain />
                <Testimonials />
                <Footer />
              </>
            }
          />
            <Route
            exact
            path={"/blogs"}
            element={
              <>
                <Navbar />
                <BlogsHeader />
                <BlogsMain />
                <Testimonials />
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
