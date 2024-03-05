import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "../components/Navbar";
import Headers from "../components/Header";
import WhoWeAre from "../components/WhoWeAre";
import OurServices from "../components/OurServices";
import BeforeAfter from "../components/BeforeAfter";
import Testimonials from "../components/Testimonials";
import ContactUs from "../components/ContactUs";
import Blogs from "../components/Blogs";
import OurTeam from "../components/OurTeam";
import Footer from "../components/Footer";
import AboutUsHeaders from "../components/AboutUsHeader";
import OurValues from "../components/OurValues";
import WhatIncludes from "../components/WhatIncludes";
import ContactUsHeaders from "../components/ContactUsHeader";
import GetInTouch from "../components/GetInTouch";
import Pricing from "../components/Pricing";
import ServicesHeaders from "../components/ServicesHeader";
import ServicesMain from "../components/ServicesMain";
import BlogsHeader from "../components/BlogsHeader";
import BlogsMain from "../components/BlogsMain";
import Products from "../components/Products/index";
import SubProducts from "../components/Products/SubProducts";
import FaceAndNeck from "../components/Services/FaceAndNeck";
import BodyTightening from "../components/Services/BodyTightening";
import BodyScarring from "../components/Services/BodyScarring";
import LaserHairRemoval from "../components/Services/LaserHairRemoval";
import Pigmentation from "../components/Services/Pigmentation";
import FacialAndSpiderVeinTreatment from "../components/Services/FacialAndSpiderVeinTreatment";
import CRYOFacial from "../components/Services/CRYOFacial";
import BodyToning from "../components/Services/BodyToning";
import BodySlimming from "../components/Services/BodySlimming";
import AntiAgingFacial from "../components/Services/AntiAgingFacial";
import IlluminatingFacial from "../components/Services/IlluminatingFacial";
import BeClearPurifyingFacial from "../components/Services/BeClearPurifyingFacial";
import CustomizedChemicalPeel from "../components/Services/CustomizedChemicalPeel";
import BrowLamination from "../components/Services/BrowLamination";
import LashLiftAndTint from "../components/Services/LashLiftAndTint";
import BlogDetails from "../components/BlogDetails";
import BlogCard from "../JSONData/BlogCard";
import LoginComponent from "../components/LoginAndSignUp/LoginCom";
import SignupComponent from "../components/LoginAndSignUp/SignUpComponent";
import Appoinments from "../components/Appointments";
import SemaglutideHeader from "../components/SemaglutideHeader.js";
import SemaglutideMain from "../components/SemaglutideMain.js";
import SemaglutideNavbar from "../components/SemaglutideNavbar.js";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
const AnimatedComponent = ({ children }) => (
  <motion.div
    // initial={{ opacity: 0 }}
    // animate={{ opacity: 1 }}
    // exit={{ opacity: 0 }}
    // initial={{
    //   opacity: 0,
    //   x: "100vh", // Start off-screen at the bottom
    // }}
    // animate={{ opacity: 1, x: 0 }}
    // transition={{ duration: 0.2 }}
    initial={{
      opacity: 0,
      x: "-10vw",
    }}
    animate={{ opacity: 1, 
        x: 0
     }}
    transition={{ duration: 0.2 }}
  >
    {children}
  </motion.div>
);
function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route
          exact
          path={"/"}
          element={
            <>
              <AnimatedComponent>
                <Navbar />
                <Headers />
                <WhoWeAre />
                <OurServices />
                <BeforeAfter />
                <Pricing />
                <ContactUs />
                <Blogs blogs={BlogCard} />
                <Appoinments />
                <Footer />
              </AnimatedComponent>
            </>
          }
        />
        <Route
          exact
          path={"/about"}
          element={
            <>
              <AnimatedComponent>
                <Navbar />
                <AboutUsHeaders />
                <OurValues />
                <OurTeam />
                <WhatIncludes />
                <Pricing />
                <Footer />
              </AnimatedComponent>
            </>
          }
        />
        <Route
          exact
          path={"/contact"}
          element={
            <>
              <AnimatedComponent>
                <Navbar />
                <ContactUsHeaders />
                <ContactUs />
                <GetInTouch />
                <Footer />
              </AnimatedComponent>
            </>
          }
        />
        <Route
          exact
          path={"/services"}
          element={
            <>
              <AnimatedComponent>
                <Navbar />
                <ServicesHeaders />
                <ServicesMain />
                <Pricing />
                {/* <Testimonials /> */}
                <Footer />
              </AnimatedComponent>
            </>
          }
        />
        <Route
          exact
          path={"/blogs"}
          element={
            <>
              <AnimatedComponent>
                <Navbar />
                <BlogsHeader />
                <BlogsMain blogs={BlogCard} />
                {/* <Testimonials /> */}
                <Footer />
              </AnimatedComponent>
            </>
          }
        />
        <Route
          exact
          path={"/semaglutide"}
          element={
            <>
              <AnimatedComponent>
                {/* <SemaglutideNavbar /> */}
                <Navbar />
                <SemaglutideHeader />
                <SemaglutideMain />
                <Appoinments />
                <Footer />
              </AnimatedComponent>
            </>
          }
        />
        <Route
          exact
          path={"/blogs/:id"}
          element={
            <>
              <AnimatedComponent>
                <Navbar />
                <BlogDetails blogs={BlogCard} />
                <Footer />
              </AnimatedComponent>
            </>
          }
        />
        <Route
          exact
          path={"/products"}
          element={
            <>
              <AnimatedComponent>
                <Navbar />
                <Products />
                {/* <Testimonials /> */}
                <Footer />
              </AnimatedComponent>
            </>
          }
        />
        <Route
          exact
          path={"/sub-products/:productId"}
          element={
            <>
              <AnimatedComponent>
                <Navbar />
                <SubProducts />
                {/* <Testimonials /> */}
                <Footer />
              </AnimatedComponent>
            </>
          }
        />
        {/* services sub routes */}
        <Route
          exact
          path={"/services/face-and-neck"}
          element={
            <>
              <AnimatedComponent>
                <Navbar />
                <FaceAndNeck />
                <Footer />
              </AnimatedComponent>
            </>
          }
        />
        <Route
          exact
          path={"/services/body-tightening"}
          element={
            <>
              <AnimatedComponent>
                <Navbar />
                <BodyTightening />
                <Footer />
              </AnimatedComponent>
            </>
          }
        />
        <Route
          exact
          path={"/services/body-scarring"}
          element={
            <>
              <AnimatedComponent>
                <Navbar />
                <BodyScarring />
                <Footer />
              </AnimatedComponent>
            </>
          }
        />
        <Route
          exact
          path={"/services/LaserHairRemoval"}
          element={
            <>
              <AnimatedComponent>
                <Navbar />
                <LaserHairRemoval />
                <Footer />
              </AnimatedComponent>
            </>
          }
        />
        <Route
          exact
          path={"/services/Pigmentation"}
          element={
            <>
              <AnimatedComponent>
                <Navbar />
                <Pigmentation />
                <Footer />
              </AnimatedComponent>
            </>
          }
        />
        <Route
          exact
          path={"/services/facial-spidervein-treatment"}
          element={
            <>
              <AnimatedComponent>
                <Navbar />
                <FacialAndSpiderVeinTreatment />
                <Footer />
              </AnimatedComponent>
            </>
          }
        />
        <Route
          exact
          path={"/services/cryo-facial"}
          element={
            <>
              <AnimatedComponent>
                <Navbar />
                <CRYOFacial />
                <Footer />
              </AnimatedComponent>
            </>
          }
        />
        <Route
          exact
          path={"/services/body-toning"}
          element={
            <>
              <AnimatedComponent>
                <Navbar />
                <BodyToning />
                <Footer />
              </AnimatedComponent>
            </>
          }
        />
        <Route
          exact
          path={"/services/body-slimming"}
          element={
            <>
              <AnimatedComponent>
                <Navbar />
                <BodySlimming />
                <Footer />
              </AnimatedComponent>
            </>
          }
        />
        <Route
          exact
          path={"/services/anti-aging-facial"}
          element={
            <>
              <AnimatedComponent>
                <Navbar />
                <AntiAgingFacial />
                <Footer />
              </AnimatedComponent>
            </>
          }
        />
        <Route
          exact
          path={"/services/illuminating-facial"}
          element={
            <>
              <AnimatedComponent>
                <Navbar />
                <IlluminatingFacial />
                <Footer />
              </AnimatedComponent>
            </>
          }
        />
        <Route
          exact
          path={"/services/purifying-facial"}
          element={
            <>
              <AnimatedComponent>
                <Navbar />
                <BeClearPurifyingFacial />
                <Footer />
              </AnimatedComponent>
            </>
          }
        />
        <Route
          exact
          path={"/services/customized-chemicl-peel"}
          element={
            <>
              <AnimatedComponent>
                <Navbar />
                <CustomizedChemicalPeel />
                <Footer />
              </AnimatedComponent>
            </>
          }
        />
        <Route
          exact
          path={"/services/brow-lamination"}
          element={
            <>
              <AnimatedComponent>
                <Navbar />
                <BrowLamination />
                <Footer />
              </AnimatedComponent>
            </>
          }
        />
        <Route
          exact
          path={"/services/lash-lift-and-tint"}
          element={
            <>
              <AnimatedComponent>
                <Navbar />
                <LashLiftAndTint />
                <Footer />
              </AnimatedComponent>
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
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
