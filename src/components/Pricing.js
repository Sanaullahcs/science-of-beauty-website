import React, { useState } from "react";
import Slider from "react-slick";
import { Divider } from "@material-ui/core";
import { Rating } from "@mui/material";
import next from "../assets/images/next-img.png";
import prev from "../assets/images/prev-img.png";
import "../assets/CustomCSS/Pricing.css";
import img1 from "../assets/images/car1.png";
import img2 from "../assets/images/car2.png";
import img3 from "../assets/images/car3.png";
import img4 from "../assets/images/car1.png";
import img5 from "../assets/images/car1.png";
import img6 from "../assets/images/car1.png";

function Pricing() {
  const NextArrow = (props) => {
    return (
      <div
        className="pricing-next-arrow-btn"
        {...props}
        style={{
          ...props.style,
          display: "block",
          background: `url(${next})`,
          backgroundSize: "cover",
          right: "10px",
          marginTop: "2%",
          width: "50px",
          height: "50px",
          zIndex: "22",
          opacity: "0.5",
          borderRadius: "100%",
          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          "@media (max-width: 520px)": {
            width: "30px",
            height: "30px",
          },
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
          left: "10px",
          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          zIndex: "28",
          marginTop: "2%",
          width: "50px",
          height: "50px",
          opacity: "0.5",
          borderRadius: "100%",
        }}
      >
        Prev
      </div>
    );
  };
  const images = [img1, img2, img3, img4, img5, img6];
  const cardTitles = [
    "Makeup Artist",
    "Wellnesscenter",
    "Barbersalon",
    "Frisorsalon",
    "Massageklinik",
    "fodterapeut",
  ];

  const [sliderSettings] = useState({
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
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
  });
  return (
    <>
      <div className="pricing-div-wrapper">
        <div>
          <p className="pre-heading">Pricing</p>
          <p className="heading">Right plan for you</p>
        </div>
        <div>
          <Slider
            className="pricing-slider"
            style={{ marginleft: "50px" }}
            {...sliderSettings}
          >
            {images.map((img, index) => (
              <div  className={`slide-pricing ${index === Math.floor(images.length / 2) ? "middle-carousel" : ""}`} key={index}>
                <div className="card">
                  <div>
                    <img src={img} alt={`Card ${index + 1}`} />
                  </div>
                  <div>
                    <p className="card-heading">{cardTitles[index]}</p>
                    <p className="card-pricing">(Master/Pro)</p>
                  </div>
                  <div className="card-row">
                    <p className="card-info">Time</p>
                    <p className="card-row-items-center">1h/45min</p>
                  </div>
                  <Divider />
                  <div className="card-row">
                    <p className="card-info">Price</p>
                    <p className="card-row-items-center">20/30$</p>
                  </div>
                  <Divider />
                  <div className="card-row">
                    <p className="card-info">Quality</p>
                    <p className="card-row-items-center">
                      <Rating name="size-small" defaultValue={2} size="small" />
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}
export default Pricing;
