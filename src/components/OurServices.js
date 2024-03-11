import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import next from "../assets/images/services-next.png";
import prev from "../assets/images/services-prev.png";
import img1 from "../assets/images/facials1.png";
import img2 from "../assets/images/PRP1.png";
import img3 from "../assets/images/filler1.png";
import img4 from "../assets/images/autoY.png";
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
import { Link } from "react-router-dom";
import { FETCH_GALLERY } from "../env/apiConfig";
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
  const [image, setImage] = useState();
  const [randomImage, setRandomImage] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(FETCH_GALLERY, {
          headers: {
            "Access-Control-Allow-Origin": "http://localhost:3000", // Replace with your allowed origin
          },
        });

        const data = await response.json();

        setImage(data.Images);
      } catch (error) {
        console.error("Error:", error.message);
      }
    }
    fetchData();
  }, []);
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
          top: "50%",
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
          top: "50%",
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
    },
  ];
  const parallaxDataOne = [
    {
      start: 1800,
      end: 2300,
      properties: [
        {
          startValue: 500,
          endValue: 0,
          property: "translateY",
        },
        {
          startValue: -100,
          endValue: 0,
          property: "translateX",
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
    },
  ];
  const parallaxDataTwo = [
    {
      start: 1800,
      end: 2300,
      properties: [
        {
          startValue: 500,
          endValue: 0,
          property: "translateY",
        },
        // {
        //   startValue: 500,
        //   endValue: 0,
        //   property: "translateX",
        // },
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
    },
  ];
  const parallaxDataThree = [
    {
      start: 1800,
      end: 2300,
      properties: [
        {
          startValue: 500,
          endValue: 0,
          property: "translateY",
        },
        {
          startValue: 100,
          endValue: 0,
          property: "translateX",
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
    },
  ];
  const parallaxDataFour = [
    {
      start: 1800,
      end: 2300,
      properties: [
        {
          startValue: 500,
          endValue: 0,
          property: "translateY",
        },
        // {
        //   startValue: 100,
        //   endValue: 0,
        //   property: "translateX",
        // },
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
    },
  ];
  const parallaxDataFive = [
    {
      start: 1800,
      end: 2300,
      properties: [
        {
          startValue: 500,
          endValue: 0,
          property: "translateY",
        },
        {
          startValue: 100,
          endValue: 0,
          property: "translateX",
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
    },
  ];
  useEffect(() => {
    if (image && Array.isArray(image) && image.length > 0) {
      const interval = setInterval(() => {
        const shuffledImages = shuffleArray(image);
        const newRandomImages = shuffledImages.slice(0, 5);
        setRandomImage(newRandomImages);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [image]);
  if (!image || !Array.isArray(image) || image.length === 0) {
    return null; // Or handle the case where image is not defined
  }
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const shuffledImages = shuffleArray(image);

  const randomImages = shuffledImages.slice(0, 5);

  const onInit = () => {
    // console.log("lightGallery has been initialized");
  };

  return (
    <>
      <div id="services" style={{ overflowX: "hidden", paddingTop: "2%" }}>
        <Plx parallaxData={parallaxDataServices}>
          {/* <Parallax speed={30} tagOuter="figure"> */}
          <div style={{ zIndex: "999" }}>
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
                <Link to={`/services`}>
                  <img
                    className="w-120"
                    src={service.img}
                    alt={`Service ${index + 1}`}
                  />
                </Link>
                <p className="servicesTitleControl">{service.title}</p>
              </div>
            </div>
          ))}
        </Slider>
        {/* </Plx> */}
      </div>
      <div id="gallery" className="ourservices-second-wrapper">
        <div className="ourservices-heading-wrapper">
          <p className="sub-heading">What We Do</p>
          <p className="sub-description">
            At The Science of Beauty, we blend cutting-edge science with the
            artistry of aesthetics to provide meticulously tailored and
            scientifically proven solutions, ensuring a personalized journey to
            timeless beauty and wellness that builds trust through our
            dedication to your individual needs."
          </p>
        </div>
        <div className="grid-system-outer-div">
          <div className="main-grid-imgs">
            <div className="testi">
              <Plx className="widthHeight100" parallaxData={parallaxDataOne}>
                <img className="ser1" src={randomImages[0].filename} />
              </Plx>
            </div>
            <div className="testi">
              <Plx className="widthHeight100" parallaxData={parallaxDataTwo}>
                <img className="ser1" src={randomImages[1].filename} />
              </Plx>
            </div>
            <div className="testi">
              <Plx className="widthHeight100" parallaxData={parallaxDataThree}>
                <img className="ser1" src={randomImages[2].filename} />
              </Plx>
            </div>
            <div className="testi">
              <Plx className="widthHeight100" parallaxData={parallaxDataFour}>
                <img className="ser1" src={randomImages[3].filename} />
              </Plx>
            </div>
            <div className="testi">
              <Plx className="widthHeight100" parallaxData={parallaxDataFive}>
                <img className="ser1" src={randomImages[4].filename} />
              </Plx>
            </div>
          </div>
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
