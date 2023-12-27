import React, { useState } from "react";
import { Button, Divider, Grid } from "@material-ui/core";
import blog1 from "../assets/images/Blog-1.png";
import blog2 from "../assets/images/Blog-2.png";
import blog3 from "../assets/images/Blog-3.png";
import lady from "../assets/images/lady.png";
import "../assets/CustomCSS/BlogMain.css";

function BlogsMain() {
  const [isContentVisible, setIsContentVisible] = useState(true);

  const handleReadMoreClick = () => {
    setIsContentVisible(!isContentVisible);
  };
  return (
    <>
      <div>
        <div>
          <Grid container>
            <Grid items lg={4} md={6} sm={12} xs={12}>
              <div>
                <img className="blog-post" src={blog1} />
              </div>
            </Grid>
            <Grid items lg={4} md={6} sm={12} xs={12}>
              <div>
                <img className="blog-post" src={blog2} />
              </div>
            </Grid>
            <Grid items lg={4} md={6} sm={12} xs={12}>
              <div>
                <img className="blog-post" src={blog3} />
              </div>
            </Grid>
            <Grid items lg={4} md={6} sm={12} xs={12}>
              <div>
                <img className="blog-post" src={blog1} />
              </div>
            </Grid>
            <Grid items lg={4} md={6} sm={12} xs={12}>
              <div>
                <img className="blog-post" src={blog2} />
              </div>
            </Grid>
            <Grid items lg={4} md={6} sm={12} xs={12}>
              <div>
                <img className="blog-post" src={blog3} />
              </div>
            </Grid>
          </Grid>
        </div>
        <div>
          <div>
            <img className="lady" src={lady} />
          </div>
        </div>
        <div style={{ margin: "0px 5%" }}>
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
        </div>

        {!isContentVisible && (
          <div style={{ margin: "0px 5%" }}>
            <Grid container>
              <Grid items lg={4}>
                <div>
                  <img src={blog1} />
                </div>
              </Grid>
              <Grid items lg={4}>
                <div>
                  <img src={blog2} />
                </div>
              </Grid>
              <Grid items lg={4}>
                <div>
                  <img src={blog3} />
                </div>
              </Grid>
            </Grid>
          </div>
        )}
        <Button className="blog-read-more" onClick={handleReadMoreClick}>
          {" "}
          {isContentVisible ? "Read More" : "Read Less"}
        </Button>
      </div>
    </>
  );
}
export default BlogsMain;
