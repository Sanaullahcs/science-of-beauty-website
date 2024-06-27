import React, { useEffect } from "react";
import "../assets/CustomCSS/GalleryHeader.css";
import Plx from "react-plx";

function GalleryHeader() {
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="latest-bg-gallery">
        <Plx parallaxData={parallaxDataTxt}>
          <div>
            {/* <p className="latestblog-minheading">Gallery</p> */}
            <p className="latestblog-heading">Results</p>
          </div>
        </Plx>
      </div>
    </div>
  );
}

export default GalleryHeader;
