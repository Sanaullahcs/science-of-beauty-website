import React from "react";
import Button from "@material-ui/core/Button";
import '../assets/CustomCSS/aboutUsHeader.css'

/*
    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0"
*/


function AboutUsHeader() {
  return (
    <>
      <div>
        <div className="bg-aboutbanner">
          <div>
            <p className="aboutPreHeading">Short Story About Us</p>
           <p 
           className="aboutHeading"
           > The big story behind, our beautyness center</p>
           <Button className="aboutbtn">CONTACT US</Button>
          </div>
        </div>
         
      </div>
    </>
  );
}
export default AboutUsHeader;
