import React, { useState } from "react";
import blog1 from "../assets/images/Blog-1.png";
import blog2 from "../assets/images/Blog-2.png";
import blog3 from "../assets/images/Blog-3.png";
import Slider from "react-slick";
import "../assets/CustomCSS/Blog.css";
import next from "../assets/images/next-blog-arrow.png";
import prev from "../assets/images/prev-blog-arrow.png";

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
        <div className="blog-container">
          <h1 className="blog-heading">Blog</h1>
          <Slider style={{ marginleft: "50px" }} {...sliderSettings}>
            <div className="slide">
              <img src={blog1} />
            </div>
            <div className="slide">
              <img src={blog2} />
            </div>
            <div className="slide">
              <img src={blog3} />
            </div>
            <div className="slide">
              <img src={blog1} />
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}
export default Blogs;
