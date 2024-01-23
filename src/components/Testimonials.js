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
      testimonial1: "lorem lorem",
      testimonial2: "Moncton, Canada",
      testimonialHeading: "Emily Grace Anderson,",
      testimonialDescription:
        " Dr. Rozier's commitment to innovation and personalized care defines our approach, making The Science of Beauty Medspa a trusted destination for transformative and regenerative wellness.",
    },
    {
      imgSrc: require("../assets/images/testimonial.png"),
      testimonial1: "Lorem ipsum dolor sit amet",
      testimonial2: "London, England",
      testimonialHeading: "Benjamin Thomas Davis",
      testimonialDescription:
        "ease during their treatments, making the experience not only effective but also comfortable and enjoyable. With Felicia, you are in the hands of a skilled professional who prioritizes both expertise and personalized care.",
    },
    {
      imgSrc: require("../assets/images/testimonial.png"),
      testimonial1: "Lorem ipsum dolor sit amet,",
      testimonial2: "New York, USA",
      testimonialHeading: "Benjamin Thomas Davis",
      testimonialDescription:
        " approach, ensures that each patient receives not only the benefits of her technical skill but also the compassionate care synonymous with her background in critical care nursing. At The Science of Beauty, Leah's expertise ensures a transformative and safe journey towards aesthetic enhancement.",
    },
    {
      imgSrc: require("../assets/images/testimonial.png"),
      testimonial1: "Lorem ipsum dolor sit amet, ",
      testimonial2: "New York, USA",
      testimonialHeading: "Emily Grace Anderson ",
      testimonialDescription:
        "our practice. Brittany's commitment to creating a space that fosters confidence from within reflects in every aspect of our center, making The Science of Beauty a sanctuary where transformative care and genuine well-being converge under her expert guidance.",
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
        <p className="testimonial-heading">What our customers say</p>
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
                  <p className="testimonial-1">{testimonial.testimonial1}</p>
                  <p className="testimonial-2">{testimonial.testimonial2}</p>
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
