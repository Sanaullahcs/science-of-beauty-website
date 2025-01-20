import React from "react";
import "../assets/CustomCSS/ContactUsHeader.css";
import Plx from "react-plx";

function FinanceHeader() {
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
            <div>
              <p className="ContactUsHeader-heading">
                 Finance Available
              </p>
            </div>
          </Plx>
        </div>
      </div>
    </>
  );
}
export default FinanceHeader;
