import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { Button } from "@material-ui/core";
import "../assets/CustomCSS/Blog.css";
import next from "../assets/images/next-blog-arrow.png";
import prev from "../assets/images/prev-blog-arrow.png";
import Plx from "react-plx";
import { Link } from "react-router-dom";
import { FETCH_BLOG_URL } from "../env/apiConfig";

function Blogs({ blogs }) {
  const [Blog, setBlog] = useState();
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(FETCH_BLOG_URL, {});

        const data = await response.json();
        setBlog(data.blogs);
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
  const truncateDescription = (description) => {
    // Create a temporary element to parse HTML string
    const tempElement = document.createElement("div");
    tempElement.innerHTML = description;

    // Extract text content from the temporary element
    let textContent = tempElement.innerText;

    // Split the text content into words
    const words = textContent.split(" ");

    // Check if the number of words is greater than 30
    if (words.length > 30) {
      // Join the first 30 words and add ellipsis
      return words.slice(0, 30).join(" ") + "...";
    }

    // Return the original text content if less than or equal to 30 words
    return textContent;
  };
  return (
    <>
      <div style={{ overflowX: "hidden" }}>
        <div className="blog-container">
          <Plx parallaxData={parallaxDataTxt}>
            <h1 className="blog-heading">Blogs</h1>
          </Plx>

          <Slider
            style={{ marginleft: "50px" }}
            {...sliderSettings}
            className="slider-blog-card-holder"
          >
            {/* <div style={{ overflow: 'hidden' }} className="slide">
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
            </div> */}
            {Blog &&
              Blog.map((blog) => (
                <div key={blog.id} className="slide">
                  <Link to={`/blogs/${blog.id}`} className="blog-link">
                    <div
                      style={{ backgroundImage: `url(${blog.image})` }}
                      className={`blog-bg`}
                    >
                      <div className="fashion-div-wrapper">
                        <Button className="fashion-btn">Fashion</Button>
                      </div>
                      {/* <p className="blog-card-date">{blog.date}</p>
                    <p className="blog-card-heading">{blog.title}</p>
                    <p className="blog-card-description">{blog.content}</p> */}
                    </div>
                    <div className="blogExpand">
                      <p className="blog-card-date">{blog.date}</p>
                      <p className="blog-card-heading">{blog.title}</p>
                      <p className="blog-card-description">
                        {truncateDescription(blog.description)}
                      </p>
                    </div>
                  </Link>
                </div>
              ))}
          </Slider>
        </div>
        <div className="spacer-divider-bloggers"></div>
      </div>
    </>
  );
}
export default Blogs;
