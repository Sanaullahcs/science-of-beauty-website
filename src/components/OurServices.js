import React, { useState } from "react";
import Slider from "react-slick";
import next from "../assets/images/services-next.png";
import prev from "../assets/images/services-prev.png";
import img1 from "../assets/images/facials1.png";
import img2 from "../assets/images/PRP1.png";
import img3 from "../assets/images/filler1.png";
import img4 from "../assets/images/IV1.png";
import img5 from "../assets/images/laser1.png";
import img6 from "../assets/images/contouring1.png";
import img7 from "../assets/images/81.png";
import img8 from "../assets/images/toxin1.png";
import img9 from "../assets/images/peels1.png";
import "../assets/CustomCSS/OurServices.css";
// import { Grid } from "@material-ui/core";
import ser1 from "../assets/images/black.png";
import ser2 from "../assets/images/black2.png";
import ser3 from "../assets/images/asia.jpg";
import ser4 from "../assets/images/wwd4.png";
import ser5 from "../assets/images/compress.jpg";
import Plx from "react-plx";
// import { Parallax } from 'react-scroll-parallax';
// =======================================================FOR THE LIGHT GALLERY======================================
// import LightGallery from 'lightgallery/react';
// import 'lightgallery/css/lightgallery.css';
// import 'lightgallery/css/lg-zoom.css';
// import 'lightgallery/css/lg-thumbnail.css';
// import lgThumbnail from 'lightgallery/plugins/thumbnail';
// import lgZoom from 'lightgallery/plugins/zoom';




const serviceData = [
  { img: img1, title: "Facials" },
  { img: img2, title: "PRP Hair Restoration" },
  { img: img3, title: "Dermal Fillers" },
  { img: img4, title: "IV therapy" },
  { img: img5, title: "Laser Hair Removal " },
  { img: img6, title: "Body Contouring " },
  { img: img7, title: " Morpheus 8" },
  { img: img8, title: "NeuroToxin" },
  { img: img9, title: "Chemical Peels" },
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
    // autoplay: true,
    autoplaySpeed: 2000,
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
      start: 1800,
      end: 2300,
      properties: [
        {
          startValue: 500,
          endValue: 0,
          property: "translateY",
        },
      ],
    },
    {
      start: 1800,
      end: 2400,
      properties: [
        {
          startValue: 0,
          endValue: 1,
          property: "opacity",
        },
      ],
    }
  ];

  const onInit = () => {
    console.log('lightGallery has been initialized');
  };

  return (
    <>
      <div id='services' style={{ overflowX: 'hidden', paddingTop: '5%' }}>
        <Plx parallaxData={parallaxDataServices}>
          {/* <Parallax speed={30} tagOuter="figure"> */}
          <div style={{ zIndex: '999' }}>
            <p className="services-preheading">SERVICES</p>
            <p className="services-heading">Our Services</p>
          </div>
          {/* </Parallax> */}
        </Plx>
        {/* <Plx className="MyAwesomeParallax" parallaxDataServices={parallaxDataServices}> */}
        <Slider className="services-slider" {...sliderSettings}>
          {serviceData.map((service, index) => (
            <div className="harm" key={index}>
              <div className="slider">
                <img className="w-120" src={service.img} alt={`Service ${index + 1}`} />
                <p>{service.title}</p>
              </div>
            </div>
          ))}
        </Slider>
        {/* </Plx> */}

      </div>
      <div id="gallery" className="ourservices-second-wrapper">
        <div className="ourservices-heading-wrapper">
          <p className="sub-heading">
            What We Do
          </p>
          <p className="sub-description">
            At The Science of Beauty, we blend cutting-edge science with the artistry of aesthetics to provide meticulously tailored and scientifically proven solutions, ensuring a personalized journey to timeless beauty and wellness that builds trust through our dedication to your individual needs."
          </p>
        </div>
        <div className="grid-system-outer-div">
          <Plx parallaxData={parallaxDataGrid}>
            {/* <div className="main-grid-imgs">

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
            </div> */}
            {/* <LightGallery
              onInit={onInit}
              speed={500}
              plugins={[lgThumbnail, lgZoom]}
            > */}
              <div className="main-grid-imgs">
                <div className="testi">
                  {/* <a href={ser1}> */}
                    <img className="ser1" src={ser1} alt="ser1" />
                  {/* </a> */}
                </div>
                <div className="testi">
                  {/* <a href={ser2}> */}
                    <img className="ser1" src={ser2} alt="ser2" />
                  {/* </a> */}
                </div>
                <div className="testi">
                  {/* <a href={ser4}> */}
                    <img className="ser1" src={ser4} alt="ser4" />
                  {/* </a> */}
                </div>
                <div className="testi">
                  {/* <a href={ser3}> */}
                    <img className="ser1" src={ser3} alt="ser3" />
                  {/* </a> */}
                </div>
                <div className="testi">
                  {/* <a href={ser5}> */}
                    <img className="ser1" src={ser5} alt="ser5" />
                  {/* </a> */}
                </div>
              </div>
            {/* </LightGallery> */}

          </Plx>
        </div>
      </div>
      {/* <LightGallery
        onInit={onInit}
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
      >
        <a href={ser1}>
          <img alt="ser1" src={ser1} />
        </a>
        <a href={ser2}>
          <img alt="ser2" src={ser2} />
        </a>
      </LightGallery> */}
    </>
  );
};

export default OurServices;
