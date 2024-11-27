import React, { useState, useEffect } from "react";
import { Button, Grid } from "@material-ui/core";
import ser1 from "../assets/images/newServices1c.png";
import ser2 from "../assets/images/newServices2c.png";
import ser3 from "../assets/images/newServices3c.png";
import ser4 from "../assets/images/newServices4c.png";
import ser5 from "../assets/images/newServices5c.png";
import ser6 from "../assets/images/newServices6c.png";
import ser7 from "../assets/images/newServices7c.png";
import ser8 from "../assets/images/newServices8c.png";
import ser9 from "../assets/images/newServices9c.png";
import ser10 from "../assets/images/newServices10c.png";
import ser11 from "../assets/images/newServices11c.png";
import ser12 from "../assets/images/newServices12c.png";
import ser13 from "../assets/images/newServices13c.png";
import ser14 from "../assets/images/newServices14c.png";
import ser15 from "../assets/images/newServices15c.png";
import { Link } from "react-router-dom";
import { FETCH_SERVICES } from "../env/apiConfig";
import { useNavigate } from "react-router-dom";
import ReactPixel from "react-facebook-pixel"; // Import ReactPixel
import fbPixelInit from "../../src/assets/fbPixil";
// import DOMPurify from "dompurify";

import "../assets/CustomCSS/ServicesMain.css";
import Plx from "react-plx";

function ServicesMain() {
  // const sanitizedDescription = DOMPurify.sanitize(item.description);
  const [services, setServices] = useState();
  // const [showAll, setShowAll] = useState(false);
  useEffect(() => {
    fbPixelInit(); // Initialize Facebook Pixel when the app loads
    ReactPixel.track("PageView", {
      page: "ServicePage", // Replace 'HomePage' with the actual page name
    });
  }, []);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(FETCH_SERVICES, {});

        const data = await response.json();

        setServices(data.services);
      } catch (error) {
        console.error("Error:", error.message);
      }
    }

    fetchData();
  }, []);
  const navigate = useNavigate();
  // Retrieve showAllItems state from URL
  const searchParams = new URLSearchParams(window.location.search);
  const showAllItemsFromURL = searchParams.get("showAllItems") === "true";
  // const [showAllItems, setShowAllItems] = useState(showAllItemsFromURL);

  // const handleViewMoreClick = () => {
  //   setShowAllItems(!showAllItems);

  //   // Update URL with the current showAllItems state
  //   const newSearchParams = new URLSearchParams(searchParams);
  //   newSearchParams.set("showAllItems", String(!showAllItems));
  //   navigate(`?${newSearchParams.toString()}`, { replace: true });
  // };
  const generateParallaxData = (start, end) => [
    {
      start: start,
      end: end,
      properties: [
        {
          startValue: 1.1,
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
  ];
  // const imageParallaxDataOne = generateParallaxData(0, 500);
  // const imageParallaxDataTwo = generateParallaxData(400, 1200);
  // const imageParallaxDataThree = generateParallaxData(900, 1800);
  // const imageParallaxDataFour = generateParallaxData(1500, 2300);
  // const imageParallaxDataFive = generateParallaxData(2200, 3000);
  // const imageParallaxDataSix = generateParallaxData(2800, 3600);
  // const imageParallaxDataSeven = generateParallaxData(3400, 4000);
  // const imageParallaxDataEight = generateParallaxData(4000, 4700);
  // const imageParallaxDataNine = generateParallaxData(4600, 5200);
  // const imageParallaxDataTen = generateParallaxData(5200, 5800);
  // const imageParallaxDataEleven = generateParallaxData(5800, 6400);
  // const imageParallaxDataTwelve = generateParallaxData(6400, 7000);
  // const imageParallaxDataThirteen = generateParallaxData(7000, 7600);
  // const imageParallaxDataFourteen = generateParallaxData(7600, 8200);
  // const imageParallaxDataFifteen = generateParallaxData(8200, 9000);

  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  const handleReadMoreClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  // const handleViewMoreClick = () => {
  //   setShowAll(!showAll);
  // };
  const truncateDescription = (description) => {
    if (!description) return "";
    const plainText = description.replace(/<[^>]+>/g, "");
    const words = plainText.split(" ");
    if (words.length <= 40) {
      return plainText;
    } else {
      return words.slice(0, 40).join(" ") + " ...";
    }
  };

  return (
    <>
      <div style={{ overflow: "hidden" }}>
        <div className="main-blog-content">
          {/* THIS IS THE DIV ONLY FOR THE MD AND SM SCREEN */}
          <Grid container className="main-main-blogs ForSmall">
            {services &&
              services.map((item, index) => (
                <React.Fragment key={index}>
                  <Grid item lg={6} md={12}>
                    {/* <Plx parallaxData={imageParallaxDataOne}> */}
                    {item.image && (
                      <div className="services-img-holderHolder">
                        <img
                          className="blog-img-holder"
                          src={item.image}
                          alt={`Image ${index}`}
                        />
                      </div>
                    )}
                    {/* </Plx> */}
                  </Grid>
                  <Grid item lg={6} md={12}>
                    <div className="blog-main-div">
                      <p className="blog-main-heading">{item.title}</p>
                      <p
                        className="blog-description-heading"
                        dangerouslySetInnerHTML={{ __html: truncateDescription(item.description) }}
                      >
                        {/* {truncateDescription(item.description)} */}
                      </p>
                      <div className="contactus-btn-div">
                        <Link to={`/services/${item.id}`}>
                          <Button
                            className="blog-contact-btn"
                            onClick={handleReadMoreClick}
                          >
                            Read More
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </Grid>
                </React.Fragment>
              ))}
          </Grid>
          {/* THIS IS HTE DIV ONLY FOR THE LG AND FURTHER SCREEN */}
          <Grid container className="main-main-blogs ForLarge">
            {services &&
              services.map((item, index) => (
                <React.Fragment key={index}>
                  {index % 2 == 0 ? ( // Check if index is even
                    <>
                      <Grid item lg={6}>
                        {/* <Plx parallaxData={imageParallaxDataOne}> */}
                        {item.image && (
                          <div className="services-img-holderHolder">
                            <img
                              className="blog-img-holder"
                              src={item.image}
                              alt={`Image ${index}`}
                            />
                          </div>
                        )}
                        {/* </Plx> */}
                      </Grid>
                      <Grid item lg={6}>
                        <div className="blog-main-div">
                          <p className="blog-main-heading">{item.title}</p>
                          <p  dangerouslySetInnerHTML={{ __html: truncateDescription(item.description) }} className="blog-description-heading">
                            {/* {truncateDescription(item.description)} */}
                          </p>
                          <div className="contactus-btn-div">
                            <Link to={`/services/${item.id}`}>
                              <Button
                                className="blog-contact-btn"
                                onClick={handleReadMoreClick}
                              >
                                Read More
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </Grid>
                    </>
                  ) : (
                    <>
                      <Grid item lg={6}>
                        <div className="blog-main-div">
                          <p className="blog-main-heading">{item.title}</p>
                          <p  dangerouslySetInnerHTML={{ __html: truncateDescription(item.description) }} className="blog-description-heading">
                            {/* {truncateDescription(item.description)} */}
                          </p>
                          <div className="contactus-btn-div">
                            <Link to={`/services/${item.id}`}>
                              <Button
                                className="blog-contact-btn"
                                onClick={handleReadMoreClick}
                              >
                                Read More
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </Grid>
                      <Grid item lg={6}>
                        {/* <Plx parallaxData={imageParallaxDataOne}> */}
                        {item.image && (
                          <div className="services-img-holderHolder">
                            <img
                              className="blog-img-holder"
                              src={item.image}
                              alt={`Image ${index}`}
                            />
                          </div>
                        )}
                        {/* </Plx> */}
                      </Grid>
                    </>
                  )}
                </React.Fragment>
              ))}
          </Grid>
          {/* {!showAll && (
            <div className="explore-more-button">
              <Button onClick={handleViewMoreClick}>Explore More</Button>
            </div>
          )} */}
        </div>
      </div>
    </>
  );
}
export default ServicesMain;
