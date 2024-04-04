import React from "react";
import "../assets/CustomCSS/ContactUsHeader.css";
import Plx from "react-plx";

function ContactUsHeader() {
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
        <div className="ContactUsHeader-bg">
          <Plx parallaxData={parallaxDataTxt}>
            <div className="contactus-heading-wrapper">
              <p className="ContactUsHeader-minheading">Get in touch with us</p>
              <p className="ContactUsHeader-heading">
                We Are Ready To Assist You In 24x7
              </p>
            </div>
          </Plx>
        </div>
      </div>
    </>
  );
}
export default ContactUsHeader;
