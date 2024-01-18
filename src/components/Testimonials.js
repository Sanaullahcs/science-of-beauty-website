import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Grid } from "@material-ui/core";
import startComma from "../assets/images/frontCot.svg";
import endComma from "../assets/images/backCot.svg";
import "../assets/CustomCSS/Testimonials.css";
import next from "../assets/images/next-img.png";
import prev from "../assets/images/prev-img.png";
import Plx from "react-plx";
import { useLocation } from 'react-router-dom';


function Testimonials() {
  const location = useLocation();
  const isSubProductPage = location.pathname.includes('/sub-products/');


  // Custom component for the next button
  const NextArrow = (props) => {
    return (
      <div
        {...props}
        style={{
          ...props.style,
          display: "block",
          background: `url(${next})`,
          backgroundSize: "cover",
          right: "47%",
          transform: "translateX(50%)",
          top: "100%",
          marginTop: "2%",
          width: "50px", // Adjust the width as needed
          height: "50px", // Adjust the height as needed
        }}
      >
        Next
      </div>
    );
  };

  // Custom component for the previous button
  const PrevArrow = (props) => {
    return (
      <div
        {...props}
        style={{
          ...props.style,
          display: "block",
          background: `url(${prev})`,
          backgroundSize: "cover",
          left: "47%",
          transform: "translateX(-50%)",
          bottom: "2px",
          zIndex: "2",
          top: "100%",
          marginTop: "2%",
          width: "50px", // Adjust the width as needed
          height: "50px", // Adjust the height as neede
        }}
      >
        Prev
      </div>
    );
  };
  const [settings] = useState({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    fade: true,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow className='next-testimonial-button' />,
    prevArrow: <PrevArrow className='prev-testimonial-button' />
  });
  const testimonialsData = [
    {
      imgSrc: require("../assets/images/testimonial.png"),
      testimonial1: "Dr. Rozier Medical director",
      testimonial2: "Moncton, Canada",
      testimonialHeading: "Dr. Rozier Medical director",
      testimonialDescription:
        "Meet Dr. Rozier, the esteemed Medical Director and owner at The Science of Beauty Medspa and Wellness Center. Renowned for his expertise in pain management, Dr. Rozier stands at the forefront of regenerative medicine, specializing in cutting-edge therapies such as PRP (Platelet-Rich Plasma), stem cell treatments, and exosome applications. As a dedicated practitioner, he brings a wealth of knowledge and experience to our center, ensuring that each client benefits from the latest advancements in medical aesthetics. Dr. Rozier's commitment to innovation and personalized care defines our approach, making The Science of Beauty Medspa a trusted destination for transformative and regenerative wellness.",
    },
    {
      imgSrc: require("../assets/images/testimonial.png"),
      testimonial1: "Felisia Matthews Laser Professional",
      testimonial2: "London, England",
      testimonialHeading: "Felisia Matthews Laser Professional",
      testimonialDescription:
        "Meet Felicia Matthews, our accomplished Laser Professional at The Science of Beauty Medspa and Wellness Center. With an impressive 15 years of laser experience, Felicia is a true expert in her field. Specializing in laser hair removal across all skin types, as well as utilizing advanced technologies like Morpheus 8 for skin rejuvenation and body contouring, Felicia combines her technical prowess with a warm and inviting personality. Her friendly and outgoing nature ensures that every client feels at ease during their treatments, making the experience not only effective but also comfortable and enjoyable. With Felicia, you are in the hands of a skilled professional who prioritizes both expertise and personalized care.",
    },
    {
      imgSrc: require("../assets/images/testimonial.png"),
      testimonial1: "Leah Wright Nurse Injector",
      testimonial2: "New York, USA",
      testimonialHeading: "Leah Wright Nurse Injector",
      testimonialDescription:
        "Introducing Leah Wright, our accomplished Nurse Injector at The Science of Beauty Medspa and Wellness Center. With a background as an ICU nurse, Leah brings a wealth of experience in prioritizing safety and patient care to her role. Having seamlessly merged her passion for science and beauty, Leah ventured into the aesthetic world. Specializing in full-face rejuvenation, she is dedicated to creating natural, timeless results for her clients. Leah's commitment to excellence, coupled with her nurturing approach, ensures that each patient receives not only the benefits of her technical skill but also the compassionate care synonymous with her background in critical care nursing. At The Science of Beauty, Leah's expertise ensures a transformative and safe journey towards aesthetic enhancement.",
    },
    {
      imgSrc: require("../assets/images/testimonial.png"),
      testimonial1: "Brittany Deen- Clinical manager ",
      testimonial2: "New York, USA",
      testimonialHeading: "Brittany Deen- Clinical manager ",
      testimonialDescription:
        "Meet Brittany Deen, the visionary Clinical Manager and Owner of The Science of Beauty Wellness Center. Stepping into the medspa world in 2009, Brittany has devoted her career to empowering women and men to feel confidently comfortable in their own skin. The inception of The Science of Beauty was driven by Brittany's keen observation of a growing need for a safe, inclusive haven for beauty and wellness. Her passion for holistic wellness and scientifically proven beauty treatments serves as the cornerstone of our practice. Brittany's commitment to creating a space that fosters confidence from within reflects in every aspect of our center, making The Science of Beauty a sanctuary where transformative care and genuine well-being converge under her expert guidance.",
    },
  ];
  // const parallaxDataImg = [
  //   // animation for the services page testimonial section
  //   {
  //     start: 2000,
  //     end: 2400,
  //     properties: [
  //       {
  //         startValue: isSubProductPage ? 1 : 0,
  //         endValue: 1,
  //         property: "scale",
  //       },
  //       {
  //         startValue: isSubProductPage ? 1 : 0,
  //         endValue: 1,
  //         property: "opacity",
  //       },

  //     ],
  //   },
  //   // animation for the home page testimonial section
  //   {
  //     start: 3300,
  //     end: 3800,
  //     properties: [
  //       {
  //         startValue: isSubProductPage ? 1 : 0,
  //         endValue: 1,
  //         property: "scale",
  //       },
  //       {
  //         startValue: isSubProductPage ? 1 : 0,
  //         endValue: 1,
  //         property: "opacity",
  //       },

  //     ],
  //   },

  // ];

  return (
    <div className="main-testimonial">

      <div>
        <p className="testimonial-prehead">Testimonials</p>
        <p className="testimonial-heading">Our Team </p>
      </div>


      <Slider className="slider-carausel" style={{ padding: "0px 10%", margin: "3% 0px" }} {...settings}>
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="sliders">
            <Grid container className="testimonial-slider">
              <Grid item lg={6}>
                {/* <Plx parallaxData={parallaxDataImg}> */}
                <img className="test-img" src={testimonial.imgSrc} alt="Image goes here" />
                {/* </Plx> */}
              </Grid>
              <Grid item lg={6}>
                <div className="side-holder">
                  <img src={startComma} alt="Start comma" />
                  {/* <p className="testimonial-1">{testimonial.testimonial1}</p>
                  <p className="testimonial-2">{testimonial.testimonial2}</p> */}
                  <p className="testimonial-subsubheading">
                    {testimonial.testimonialHeading}
                  </p>
                  <p className="testimonial-description">
                    {testimonial.testimonialDescription}
                  </p>
                  <img className="end-comma" src={endComma} alt="End comma" />
                </div>
              </Grid>
            </Grid>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Testimonials;
