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
        {...props}
        style={{
          ...props.style,
          display: "block",
          background: `url(${next})`,
          backgroundSize: "cover",
          right: "20px",
          marginTop: "2%",
          width: "50px",
          height: "50px",
          zIndex: "22",
          opacity: "0.5",
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
          zIndex: "28",
          marginTop: "2%",
          width: "50px",
          height: "50px",
          opacity: "0.5",
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
      <div>
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
              <div className="slide-pricing" key={index}>
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
