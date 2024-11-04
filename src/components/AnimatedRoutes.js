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
import SingleService from "../components/Services/SingleService.js";
import LoginComponent from "../components/LoginAndSignUp/LoginCom";
import SignupComponent from "../components/LoginAndSignUp/SignUpComponent";
import Appoinments from "../components/Appointments";
import SemaglutideHeader from "../components/SemaglutideHeader.js";
import SemaglutideMain from "../components/SemaglutideMain.js";
import Gallery from "../components/Gallery.js";
import GalleryHeader from "../components/GalleryHeader.js";
import SemaglutideNavbar from "../components/SemaglutideNavbar.js";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
const AnimatedComponent = ({ children }) => (
  <motion.div
    //   example 1============================
    // initial={{ opacity: 0 }}
    // animate={{ opacity: 1 }}
    // exit={{ opacity: 0 }}
    // example 2===========================
    initial={{
      opacity: 0,
      x: "-100px",
    }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.2 }}
    // example 3==============================
    // initial={{ opacity: 0, scale: 0.5 }}
    // animate={{ opacity: 1, scale: 1 }}
    // transition={{ duration: 0.5 }}
    // example 4 ===========================
    // layoutId="underline"
    // transition={{ duration: 0.1 }}
    // example 5 ======================
    // initial={{
    //   y: 100,
    //   //  opacity: 0
    // }}
    // animate={{
    //   y: 0,
    //   // opacity: 1
    // }}
    // transition={{ duration: 0.2, opacity: 0 }}
    // transition={{ delay: 0 }}
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
              <Navbar />
              <AnimatedComponent>
                <Headers />
                <WhoWeAre />
                {/* <OurServices /> */}
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
              <Navbar />
              <AnimatedComponent>
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
              <Navbar />
              <AnimatedComponent>
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
              <Navbar />
              <AnimatedComponent>
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
              <Navbar />
              <AnimatedComponent>
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
          path={"/gallery"}
          element={
            <>
              <Navbar />
              <AnimatedComponent>
                <GalleryHeader />
                <Gallery />
                <Appoinments />
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
              <Navbar />
              <AnimatedComponent>
                {/* <SemaglutideNavbar /> */}
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
          path={"/blogs/:slug"}
          element={
            <>
              <Navbar />
              <AnimatedComponent>
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
              <Navbar />
              <AnimatedComponent>
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
              <Navbar />
              <AnimatedComponent>
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
          path={"/services/:id"}
          element={
            <>
              <Navbar />
              <AnimatedComponent>
                <SingleService />
                {/* <FaceAndNeck /> */}
                <Footer />
              </AnimatedComponent>
            </>
          }
        />
        <Route
          exact
          path={"/services/face-and-neck"}
          element={
            <>
              <Navbar />
              <AnimatedComponent>
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
              <Navbar />
              <AnimatedComponent>
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
              <Navbar />
              <AnimatedComponent>
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
              <Navbar />
              <AnimatedComponent>
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
              <Navbar />
              <AnimatedComponent>
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
              <Navbar />
              <AnimatedComponent>
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
              <Navbar />
              <AnimatedComponent>
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
              <Navbar />
              <AnimatedComponent>
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
              <Navbar />
              <AnimatedComponent>
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
              <Navbar />
              <AnimatedComponent>
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
              <Navbar />
              <AnimatedComponent>
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
              <Navbar />
              <AnimatedComponent>
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
              <Navbar />
              <AnimatedComponent>
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
              <Navbar />
              <AnimatedComponent>
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
              <Navbar />
              <AnimatedComponent>
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
