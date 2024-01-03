import React, { useState } from "react";
import Slider from "react-slick";
import next from "../assets/images/services-next.png";
import prev from "../assets/images/services-prev.png";
import img1 from "../assets/images/makeup-artist.png";
import img2 from "../assets/images/Wellnesscenter.png";
import img3 from "../assets/images/Barbersalon.png";
import img4 from "../assets/images/Frisorsalon.png";
import img5 from "../assets/images/Massageklinik.png";
import img6 from "../assets/images/fodterapeut.png";
import "../assets/CustomCSS/OurServices.css";
// import { Grid } from "@material-ui/core";
import ser1 from "../assets/images/services-1.png";
import ser2 from "../assets/images/services-2.png";
import ser3 from "../assets/images/services-3.png";
import ser4 from "../assets/images/services-4.png";
import ser5 from "../assets/images/services-5.png";
import Plx from "react-plx";

const serviceData = [
  { img: img1, title: "Makeup-artist" },
  { img: img2, title: "Wellnesscenter" },
  { img: img3, title: "Barbersalon" },
  { img: img4, title: "Frisørsalon" },
  { img: img5, title: "Massageklinik" },
  { img: img6, title: "Fodterapeut" },
  { img: img6, title: "Fodterapeut" },
];

const OurServices = () => {
  const NextArrow = (props) => {
    return (
      <div
        {...props}
        style={{
          ...props.style,
          display: "block",
          background: `url(${next})`,
          backgroundSize: "cover",
          right: "20px",
          top: '50%',
          width: "50px",
          height: "50px",
          zIndex: "22",
        }}
      >
        Next
      </div>
    );
  };

  const PrevArrow = (props) => {
    return (
      <div
        {...props}
        style={{
          ...props.style,
          display: "block",
          background: `url(${prev})`,
          backgroundSize: "cover",
          left: "20px",
          top: '50%',
          zIndex: "2",
          width: "50px",
          height: "50px",
        }}
      >
        Prev
      </div>
    );
  };

  const [sliderSettings] = useState({
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 730,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  const parallaxDataServices = [
    {
      start: 800,
      end: 1200,
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
  const parallaxDataGrid = [
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
    {
      start: 1700,
      end: 2300,
      properties: [
        {
          startValue: 0,
          endValue: 1,
          property: "opacity",
        },
      ],
    }
  ];



  return (
    <>
      <div style={{ overflowX: 'hidden' }}>
        <Plx parallaxData={parallaxDataServices}>
          <div>
            <p className="services-preheading">SERVICES</p>
            <p className="services-heading">Our Services</p>
          </div>
        </Plx>
        {/* <Plx className="MyAwesomeParallax" parallaxDataServices={parallaxDataServices}> */}
        <Slider className="services-slider" {...sliderSettings}>
          {serviceData.map((service, index) => (
            <div className="harm" key={index}>
              <div className="slider">
                <img src={service.img} alt={`Service ${index + 1}`} />
                <p>{service.title}</p>
              </div>
            </div>
          ))}
        </Slider>
        {/* </Plx> */}

      </div>
      <div className="ourservices-second-wrapper">
        <div className="ourservices-heading-wrapper">
          <p className="sub-heading">
            We are Experienced in making you very Beautiful
          </p>
          <p className="sub-description">
            Lorem ipsum dolor sit amet consectetur. Eu quis enim tempor et proin
            neque.
          </p>
        </div>
        <div className="grid-system-outer-div">
          <Plx parallaxData={parallaxDataGrid}>
            <div className="main-grid-imgs">

              <div className="testi">

                <img className="ser1" src={ser1} />
              </div>

              <div className="testi">

                <img className="ser1" src={ser2} />

              </div>
              <div className="testi">

                <img className="ser1" src={ser4} />

              </div>
              <div className="testi">

                <img className="ser1" src={ser3} />

              </div>
              <div className="testi">

                <img className="ser1" src={ser5} />

              </div>
            </div>
          </Plx>
        </div>
      </div>
    </>
  );
};

export default OurServices;
