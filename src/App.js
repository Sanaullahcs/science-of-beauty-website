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
import Products from "./components/Products/index";
import SubProducts from "./components/Products/SubProducts";
import FaceAndNeck from './components/Services/FaceAndNeck'
import BodyTightening from './components/Services/BodyTightening'
import BodyScarring from './components/Services/BodyScarring'
import LaserHairRemoval from './components/Services/LaserHairRemoval'
import Pigmentation from './components/Services/Pigmentation'
import FacialAndSpiderVeinTreatment from './components/Services/FacialAndSpiderVeinTreatment'
import CRYOFacial from './components/Services/CRYOFacial'
import BodyToning from './components/Services/BodyToning'
import BodySlimming from './components/Services/BodySlimming'
import AntiAgingFacial from './components/Services/AntiAgingFacial'
import IlluminatingFacial from './components/Services/IlluminatingFacial'
import BeClearPurifyingFacial from './components/Services/BeClearPurifyingFacial'
import CustomizedChemicalPeel from './components/Services/CustomizedChemicalPeel'
import BrowLamination from './components/Services/BrowLamination'
import LashLiftAndTint from './components/Services/LashLiftAndTint'



import React from "react";
import "./assets/CustomCSS/Main.css";
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
                <Pricing />
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
                <Pricing />
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
          <Route
            exact
            path={"/products"}
            element={
              <>
                <Navbar />
                <Products />
                <Testimonials />
                <Footer />
              </>
            }
          />
          <Route
            exact
            path={"/sub-products/:productId"}
            element={
              <>
                <Navbar />
                <SubProducts />
                <Testimonials />
                <Footer />
              </>
            }
          />
          {/* services sub routes */}
          <Route
            exact
            path={"/services/face-and-neck"}
            element={
              <>
                <Navbar />
                <FaceAndNeck />
                <Footer />
              </>
            }
          />
          <Route
            exact
            path={"/services/body-tightening"}
            element={
              <>
                <Navbar />
                <BodyTightening />
                <Footer />
              </>
            }
          />
          <Route
            exact
            path={"/services/body-scarring"}
            element={
              <>
                <Navbar />
                <BodyScarring />
                <Footer />
              </>
            }
          />
          <Route
            exact
            path={"/services/LaserHairRemoval"}
            element={
              <>
                <Navbar />
                <LaserHairRemoval />
                <Footer />
              </>
            }
          />
          <Route
            exact
            path={"/services/Pigmentation"}
            element={
              <>
                <Navbar />
                <Pigmentation />
                <Footer />
              </>
            }
          />
          <Route
            exact
            path={"/services/facial-spidervein-treatment"}
            element={
              <>
                <Navbar />
                <FacialAndSpiderVeinTreatment />
                <Footer />
              </>
            }
          />
          <Route
            exact
            path={"/services/cryo-facial"}
            element={
              <>
                <Navbar />
                <CRYOFacial />
                <Footer />
              </>
            }
          />
          <Route
            exact
            path={"/services/body-toning"}
            element={
              <>
                <Navbar />
                <BodyToning />
                <Footer />
              </>
            }
          />
          <Route
            exact
            path={"/services/body-slimming"}
            element={
              <>
                <Navbar />
                <BodySlimming />
                <Footer />
              </>
            }
          />
          <Route
            exact
            path={"/services/anti-aging-facial"}
            element={
              <>
                <Navbar />
                <AntiAgingFacial />
                <Footer />
              </>
            }
          />
          <Route
            exact
            path={"/services/illuminating-facial"}
            element={
              <>
                <Navbar />
                <IlluminatingFacial />
                <Footer />
              </>
            }
          />
          <Route
            exact
            path={"/services/purifying-facial"}
            element={
              <>
                <Navbar />
                <BeClearPurifyingFacial />
                <Footer />
              </>
            }
          />
          <Route
            exact
            path={"/services/customized-chemicl-peel"}
            element={
              <>
                <Navbar />
                <CustomizedChemicalPeel />
                <Footer />
              </>
            }
          />
          <Route
            exact
            path={"/services/brow-lamination"}
            element={
              <>
                <Navbar />
                <BrowLamination />
                <Footer />
              </>
            }
          />
          <Route
            exact
            path={"/services/lash-lift-and-tint"}
            element={
              <>
                <Navbar />
                <LashLiftAndTint />
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
