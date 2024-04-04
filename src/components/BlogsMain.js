import React, { useState, useEffect } from "react";
import { Button, Divider, Grid } from "@material-ui/core";
import lady from "../assets/images/ladyc.png";
import "../assets/CustomCSS/BlogMain.css";
import "../assets/CustomCSS/Blog.css";
import { Link } from "react-router-dom";

import { FETCH_BLOG_URL } from "../env/apiConfig";

function BlogsMain({ blogs }) {
  const [isContentVisible, setIsContentVisible] = useState(true);
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

  const handleReadMoreClick = () => {
    setIsContentVisible(!isContentVisible);
  };
  return (
    <>
      <div>
        <div>
          <Grid
            container
            className="blogPageContainer-wrapper"
            style={{ padding: "0 8%" }}
          >
            {Blog &&
              Blog.map((blog) => (
                <Grid key={blog.id} items lg={4} md={6} sm={12} xs={12}>
                  <div className="blog-postWrapper">
                    <Link to={`/blogs/${blog.id}`} className="blog-link">
                      <div
                        style={{ backgroundImage: `url(${blog.image})` }}
                        className={`blog-bg-${blog.id} blog-bg`}
                      >
                        <div className="fashion-div-wrapper">
                          <Button className="fashion-btn">FASHION</Button>
                        </div>
                      </div>
                      <div className="blogExpand">
                        <p className="blog-card-date">{blog.date}</p>
                        <p className="blog-card-heading">{blog.title}</p>
                        <p className="blog-card-description">
                          {" "}
                          {truncateDescription(blog.description)}
                        </p>
                      </div>
                    </Link>
                  </div>
                </Grid>
              ))}
            {/* <Grid items lg={4} md={6} sm={12} xs={12}>

              <div className="blog-postWrapper">
                <Link to={`/blogs/:id`}>
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
                </Link >
              </div>

            </Grid>
            <Grid items lg={4} md={6} sm={12} xs={12}>
              <div className="blog-postWrapper">
                <Link to={`/blogs/:id`}>
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
                </Link >
              </div>
            </Grid>
            <Grid items lg={4} md={6} sm={12} xs={12}>
              <div className="blog-postWrapper">
                <Link to={`/blogs/:id`}>
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
                </Link >
              </div>
            </Grid>
            <Grid items lg={4} md={6} sm={12} xs={12}>
              <div className="blog-postWrapper">
                <Link to={`/blogs/:id`}>
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
                </Link >
              </div>
            </Grid>
            <Grid items lg={4} md={6} sm={12} xs={12}>
              <div className="blog-postWrapper">
                <Link to={`/blogs/:id`}>
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
                </Link >
              </div>
            </Grid>
            <Grid items lg={4} md={6} sm={12} xs={12}>
              <div className="blog-postWrapper">
                <Link to={`/blogs/:id`}>
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
                </Link >
              </div>
            </Grid> */}
          </Grid>
        </div>
        {/* <div>
          <div className="lady-div-wrapper">
            <img className="lady" src={lady} />
          </div>
        </div> */}
        {/* <div style={{ margin: "0px 5%" }}>
          <p className="blog-textarea-date">08.08.2021</p>
          <p className="blog-textarea-heading">
            Richird Norton photorealistic rendering as real photos
          </p>
          <p className="blog-textarea-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
            quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
            mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
            Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos.
            Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.
            Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem
            at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut
            ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel,
            suscipit quis, luctus non, massa. Fusce ac turpis quis ligula
            lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel,
            tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit.
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non
            tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante
            quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc
            feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin
            quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit.
            Sed lectus. Integer euismod lacus luctus magna.
          </p>
          <p className="blog-textarea-minHeading">Vestibulum lacinia arcu </p>
          <p className="blog-textarea-description">
            Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem,
            at interdum magna augue eget diam. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia Curae; Morbi
            lacinia molestie dui. Praesent blandit dolor. Sed non quam. In vel
            mi sit amet augue congue elementum. Morbi in ipsum sit amet pede
            facilisis laoreet. Donec lacus nunc, viverra nec, blandit vel,
            egestas et, augue. Vestibulum tincidunt malesuada tellus. Ut
            ultrices ultrices enim. Curabitur sit amet mauris. Morbi in dui quis
            est pulvinar ullamcorper. Nulla facilisi.
          </p>
          <Divider className="blogs-divider" />
        </div> */}

        {/* {!isContentVisible && (
          <div style={{ margin: "4% 0 0 0" }}>
            <Grid container>
              <Grid items lg={4} md={6} sm={12} xs={12}>
                <div className="flex-center">
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
                      technically sound functionalities. The credibly
                      productivate seamless data.
                    </p>
                  </div>
                </div>
              </Grid>
              <Grid items lg={4} md={6} sm={12} xs={12}>
                <div className="flex-center">
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
                      technically sound functionalities. The credibly
                      productivate seamless data.
                    </p>
                  </div>
                </div>
              </Grid>
              <Grid items lg={4} md={6} sm={12} xs={12}>
                <div className="flex-center">
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
                      technically sound functionalities. The credibly
                      productivate seamless data.
                    </p>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        )} */}
        {/* <Button className="blog-read-more" onClick={handleReadMoreClick}>
          {" "}
          {isContentVisible ? "Read More" : "Read Less"}
        </Button> */}
      </div>
    </>
  );
}
export default BlogsMain;
