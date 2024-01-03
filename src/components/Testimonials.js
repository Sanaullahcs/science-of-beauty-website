import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Grid } from "@material-ui/core";
import startComma from "../assets/images/start-comma.png";
import endComma from "../assets/images/end-comma.png";
import "../assets/CustomCSS/Testimonials.css";
import next from "../assets/images/next-img.png";
import prev from "../assets/images/prev-img.png";
import Plx from "react-plx";


function Testimonials() {
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
      testimonial1: "Leslie Alexander",
      testimonial2: "Moncton, Canada",
      testimonialHeading: "Neque porro quisquam est qui dolum",
      testimonialDescription:
        "It is a long established fact that a reader will be distracted by the readable content of a page is when looking at its layout. The point of using Lorem of distribution it look like readable English",
    },
    {
      imgSrc: require("../assets/images/testimonial.png"),
      testimonial1: "David Watson",
      testimonial2: "London, England",
      testimonialHeading: "Neque porro quisquam est qui dolum",
      testimonialDescription:
        "The point of using Lorem of distribution it look like readable English. It is a long established fact that a reader will be distracted by the readable content of a page is when looking at its layout.",
    },
    {
      imgSrc: require("../assets/images/testimonial.png"),
      testimonial1: "John Doe",
      testimonial2: "New York, USA",
      testimonialHeading: "Lorem Ipsum is simply dummy text",
      testimonialDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi .",
    },
  ];
  const parallaxDataTestimonial = [
    // animation for the services page testimonial section
    {
      start: 1500,
      end: 2000,
      properties: [
        {
          startValue: 500,
          endValue: 0,
          property: "translateY",
        },
      ],
    },
    // animation for the home page testimonial section
    {
      start: 3000,
      end: 3500,
      properties: [
        {
          startValue: 500,
          endValue: 0,
          property: "translateY",
        },
      ],
    },
    {
      start: 1000,
      end: 1400,
      properties: [

        {
          startValue: 0,
          endValue: 1,
          property: "opacity",
        },

      ],
    },
  ];
  const parallaxDataImg = [
    // animation for the services page testimonial section
    {
      start: 2000,
      end: 2400,
      properties: [
        {
          startValue: 0,
          endValue: 1,
          property: "scale",
        },
        {
          startValue: 0,
          endValue: 1,
          property: "opacity",
        },

      ],
    },
    // animation for the home page testimonial section
    {
      start: 3300,
      end: 3800,
      properties: [
        {
          startValue: 0,
          endValue: 1,
          property: "scale",
        },
        {
          startValue: 0,
          endValue: 1,
          property: "opacity",
        },

      ],
    },
    // {
    //   start: 4600,
    //   end: 5500,
    //   properties: [
    //     {
    //       startValue: 0,
    //       endValue: 1,
    //       property: "opacity",
    //     },
    //   ],
    // },
  ];

  return (
    <div className="main-testimonial">
      <Plx parallaxData={parallaxDataTestimonial}>
        <div>
          <p className="testimonial-prehead">Testimonials</p>
          <p className="testimonial-heading">What our Customers says...</p>
        </div>
      </Plx>

      <Slider className="slider-carausel" style={{ padding: "0px 10%", margin: "3% 0px" }} {...settings}>
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="sliders">
            <Grid container className="testimonial-slider">
              <Grid item lg={6}>
                <Plx parallaxData={parallaxDataImg}>
                  <img className="test-img" src={testimonial.imgSrc} alt="Image goes here" />
                </Plx>
              </Grid>
              <Grid item lg={6}>
                <div className="side-holder">
                  <img src={startComma} alt="Start comma" />
                  <p className="testimonial-1">{testimonial.testimonial1}</p>
                  <p className="testimonial-2">{testimonial.testimonial2}</p>
                  <p className="testimonial-heading">
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
