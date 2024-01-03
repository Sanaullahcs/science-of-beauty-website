import React, { useState } from "react";
import Slider from "react-slick";
import { Button } from "@material-ui/core";
import "../assets/CustomCSS/Blog.css";
import next from "../assets/images/next-blog-arrow.png";
import prev from "../assets/images/prev-blog-arrow.png";
import Plx from "react-plx";


function Blogs() {
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
        }}
      >
        Prev
      </div>
    );
  };
  const [sliderSettings] = useState({
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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
  });
  const parallaxDataTxt = [
    {
      start: 5800,
      end: 6200,
      properties: [
        {
          startValue: 2,
          endValue: 1,
          property: "scale",
        },

      ],
    },
    {
      start: 5800,
      end: 6200,
      properties: [
        {
          startValue: 0,
          endValue: 1,
          property: "opacity",
        },
      ],
    },
  ];
  return (
    <>
      <div style={{ overflowX: 'hidden' }}>
        <div className="blog-container">
          <Plx parallaxData={parallaxDataTxt}>
            <h1 className="blog-heading">Blog</h1>
          </Plx>

          <Slider style={{ marginleft: "50px" }} {...sliderSettings}>
            <div style={{ overflow: 'hidden' }} className="slide">
              <div className="blog-bg-1 blog-bg">
                <div className="fashion-div-wrapper">
                  <Button className="fashion-btn">FASHION</Button>
                </div>
                <p className="blog-card-date">08.08.2021</p>
                <p className="blog-card-heading">
                  Richird Norton photorealistic rendering as real photos
                </p>
                <p className="blog-card-description">
                  Progressively incentivize cooperative systems through
                  technically sound functionalities. The credibly productivate
                  seamless data.
                </p>
              </div>
            </div>
            <div className="slide">
              <div className="blog-bg-2 blog-bg">
                <div className="fashion-div-wrapper">
                  <Button className="fashion-btn">FASHION</Button>
                </div>
                <p className="blog-card-date">08.08.2021</p>
                <p className="blog-card-heading">
                  Richird Norton photorealistic rendering as real photos
                </p>
                <p className="blog-card-description">
                  Progressively incentivize cooperative systems through
                  technically sound functionalities. The credibly productivate
                  seamless data.
                </p>
              </div>
            </div>
            <div className="slide">
              <div className="blog-bg-3 blog-bg">
                <div className="fashion-div-wrapper">
                  <Button className="fashion-btn">FASHION</Button>
                </div>
                <p className="blog-card-date">08.08.2021</p>
                <p className="blog-card-heading">
                  Richird Norton photorealistic rendering as real photos
                </p>
                <p className="blog-card-description">
                  Progressively incentivize cooperative systems through
                  technically sound functionalities. The credibly productivate
                  seamless data.
                </p>
              </div>
            </div>
            <div className="slide">
              <div className="blog-bg-1 blog-bg">
                <div className="fashion-div-wrapper">
                  <Button className="fashion-btn">FASHION</Button>
                </div>
                <p className="blog-card-date">08.08.2021</p>
                <p className="blog-card-heading">
                  Richird Norton photorealistic rendering as real photos
                </p>
                <p className="blog-card-description">
                  Progressively incentivize cooperative systems through
                  technically sound functionalities. The credibly productivate
                  seamless data.
                </p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}
export default Blogs;
