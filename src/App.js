// import logo from "./logo.svg";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// ===================================== Components =============================================
import Navbar from "./components/Navbar";
import Headers from "./components/Header";
import WhoWeAre from "./components/WhoWeAre";
import OurServices from "./components/OurServices";
import BeforeAfter from "./components/BeforeAfter";
import Testimonials from "./components/Testimonials";
import ContactUs from "./components/ContactUs";
import Blogs from "./components/Blogs";
import OurTeam from "./components/OurTeam";
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
import FaceAndNeck from "./components/Services/FaceAndNeck";
import BodyTightening from "./components/Services/BodyTightening";
import BodyScarring from "./components/Services/BodyScarring";
import LaserHairRemoval from "./components/Services/LaserHairRemoval";
import Pigmentation from "./components/Services/Pigmentation";
import FacialAndSpiderVeinTreatment from "./components/Services/FacialAndSpiderVeinTreatment";
import CRYOFacial from "./components/Services/CRYOFacial";
import BodyToning from "./components/Services/BodyToning";
import BodySlimming from "./components/Services/BodySlimming";
import AntiAgingFacial from "./components/Services/AntiAgingFacial";
import IlluminatingFacial from "./components/Services/IlluminatingFacial";
import BeClearPurifyingFacial from "./components/Services/BeClearPurifyingFacial";
import CustomizedChemicalPeel from "./components/Services/CustomizedChemicalPeel";
import BrowLamination from "./components/Services/BrowLamination";
import LashLiftAndTint from "./components/Services/LashLiftAndTint";
import BlogDetails from "./components/BlogDetails";
import BlogCard from "./JSONData/BlogCard";
import LoginComponent from "./components/LoginAndSignUp/LoginCom";
import SignupComponent from "./components/LoginAndSignUp/SignUpComponent";
import Appoinments from "./components/Appointments";

// =============================== Assets ===================================
import React from "react";
import "./assets/CustomCSS/Main.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";

function App() {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []); // The empty dependency array ensures that this effect runs only once when the component mounts

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
                <Pricing />
                <ContactUs />
                <Blogs blogs={BlogCard} />
                <Appoinments />
                <Testimonials />
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
                <OurTeam />
                <WhatIncludes />
                <Pricing />
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
                {/* <Testimonials /> */}
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
                <BlogsMain blogs={BlogCard} />
                {/* <Testimonials /> */}
                <Footer />
              </>
            }
          />
          <Route
            exact
            path={"/blogs/:id"}
            element={
              <>
                <Navbar />
                <BlogDetails blogs={BlogCard} />
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
                {/* <Testimonials /> */}
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
                {/* <Testimonials /> */}
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
          <Route
            exact
            path={"/login"}
            element={
              <>
                <LoginComponent />
              </>
            }
          />
          <Route
            exact
            path={"/signup"}
            element={
              <>
                <SignupComponent />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
