import React from "react";
import '../assets/CustomCSS/aboutUsHeader.css'
import Plx from "react-plx";
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


function AboutUsHeader() {
  return (
    <>
      <div style={{ overflow: 'hidden' }}>
        <div className="bg-aboutbanner">
          <Plx parallaxData={parallaxDataTxt}>
            <div>
              {/* <p className="aboutPreHeading">Short Story About Us</p> */}
              <p className="aboutPreHeading">Start Your Aesthetic Wellness Plan Today</p>
              <p
                className="aboutHeading"
              > The experts behind the science of beauty</p>
            </div>
          </Plx>

        </div>

      </div>
    </>
  );
}
export default AboutUsHeader;
