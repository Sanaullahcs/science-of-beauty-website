import React from "react";
import "../assets/CustomCSS/BlogsHeader.css";
import Plx from "react-plx";


function BlogsHeader() {
  const parallaxDataTxt = [
    {
      start: 0,
      end: 500,
      properties: [
        {
          startValue: 1,
          endValue: 2,
          property: "scale",
        },

      ],
    },
    {
      start: 0,
      end: 500,
      properties: [
        {
          startValue: 1,
          endValue: 0,
          property: "opacity",
        },
      ],
    },
  ];
  return (
    <>
      <div>
        <div className="latest-bg">
          <Plx parallaxData={parallaxDataTxt}>

            <div>
              <p className="latestblog-minheading">Blogs</p>
              <p className="latestblog-heading"> Read Latest Blogs</p>
            </div>
          </Plx>

        </div>
      </div>
    </>
  );
}
export default BlogsHeader;
