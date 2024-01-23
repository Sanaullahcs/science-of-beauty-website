import React from "react";
import "../assets/CustomCSS/ServicesHeader.css";
import Plx from "react-plx";


function ServicesHeader() {
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
        <div className="servicesHeader-bg">
          <Plx parallaxData={parallaxDataTxt}>

            <div>
              <p className="servicespage-minheading">Services</p>
              <p className="servicespage-heading"> Explore Our Services</p>
            </div>
          </Plx>

        </div>
      </div>
    </>
  );
}
export default ServicesHeader;
