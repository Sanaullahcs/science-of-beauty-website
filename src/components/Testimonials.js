import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Rating from "@mui/material/Rating";
import startComma from "../assets/images/cot.png";
import endComma from "../assets/images/backCot.svg";
import "../assets/CustomCSS/Testimonials.css";
import next from "../assets/images/next-img.png";
import prev from "../assets/images/prev-img.png";
import Plx from "react-plx";
import { useLocation } from "react-router-dom";

function Testimonials() {
  const location = useLocation();
  const isSubProductPage = location.pathname.includes("/sub-products/");

  // Custom component for the next button
  const NextArrow = (props) => {
    return <div {...props}>Next</div>;
  };

  // Custom component for the previous button
  const PrevArrow = (props) => {
    return <div {...props}>Prev</div>;
  };
  const [settings] = useState({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    // fade: true,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    nextArrow: <NextArrow className="next-testimonial-button" />,
    prevArrow: <PrevArrow className="prev-testimonial-button" />,
  });
  const testimonialsData = [
    {
      imgSrc: require("../assets/images/newTest.png"),
      testimonial1: "lorem lorem1",
      testimonial2: "Moncton, Canada",
      testimonialHeading: "Emily,",
      testimonialDescription:
        " I absolutely love this moisturizer! It leaves my skin feeling hydrated and silky smooth without any greasiness. The scent is divine too!.",
    },
    {
      imgSrc: require("../assets/images/newTest.png"),
      testimonial1: "lorem lorem2",
      testimonial2: "Moncton, Canada",
      testimonialHeading: " Grace ,",
      testimonialDescription:
        " This lipstick is my new go-to! The color is rich and long-lasting, and the formula feels so comfortable on my lips. I've gotten so many compliments since I started wearing it!",
    },
    {
      imgSrc: require("../assets/images/newTest.png"),
      testimonial1: "lorem lorem3",
      testimonial2: "Moncton, Canada",
      testimonialHeading: "  Anderson,",
      testimonialDescription:
        " I've struggled with acne for years, but this acne treatment serum has been a game-changer for me. It's cleared up my skin without drying it out or causing irritation. I can finally say goodbye to breakouts!",
    },
    {
      imgSrc: require("../assets/images/newTest.png"),
      testimonial1: "Lorem ipsum dolor sit amet4",
      testimonial2: "London, England",
      testimonialHeading: "Benjamin",
      testimonialDescription:
        " I'm obsessed with this eyeshadow palette! The shades are stunning and blend effortlessly. I can create so many different looks with just one palette. Definitely a must-have in my makeup collection!",
    },
    {
      imgSrc: require("../assets/images/newTest.png"),
      testimonial1: "Lorem ipsum dolor sit amet5,",
      testimonial2: "New York, USA",
      testimonialHeading: " Thomas ",
      testimonialDescription:
        " I've been using this shampoo and conditioner duo for a few weeks now, and I'm amazed at how soft and shiny it's made my hair. Plus, it smells amazing! I'll definitely be repurchasing.",
    },
    {
      imgSrc: require("../assets/images/newTest.png"),
      testimonial1: "Lorem ipsum dolor sit amet6, ",
      testimonial2: "New York, USA",
      testimonialHeading: "Davis ",
      testimonialDescription:
        " I've been searching for a good sunscreen for ages, and I finally found it with this one! It's lightweight, non-greasy, and absorbs quickly into my skin",
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

      <Slider className="slider-carausel" {...settings}>
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="sliders">
            {/* <Grid container className="testimonial-slider">
              <Grid item lg={6}>
               
                <img className="test-img" src={testimonial.imgSrc} alt="Image goes here" />
               
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
            </Grid> */}
            <div>
              <div>
                <img
                  className="test-img"
                  src={testimonial.imgSrc}
                  alt="Image goes here"
                />
              </div>
              <div>
                <img
                  className="commas-test"
                  src={startComma}
                  alt="Start comma"
                />
                <p className="testimonial-1">
                  {testimonial.testimonialHeading}
                </p>
                <Rating
                  className="test-rating"
                  name="read-only"
                  value="4"
                  readOnly
                />
                <p className="testimonial-description">
                  {testimonial.testimonialDescription}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Testimonials;
