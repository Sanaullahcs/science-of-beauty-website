import React from "react";
import "../assets/CustomCSS/CommonSemaglutide.css";
import main from "../assets/images/newseg.png";
import { Grid } from "@material-ui/core";
import img1 from "../assets/images/consultant.svg";
import img2 from "../assets/images/specialist.svg";
import img3 from "../assets/images/finding.svg";
import img4 from "../assets/images/protocol.svg";

export default function SemaglutideMain() {
  return (
    <div>
      <div className="containerMargin">
        <p className="mainCommonHeading">
          <span className="commonTheme">Why Choose</span>
          <br /> Semaglutide at The Science of Beauty?
        </p>
        <p className="commonText commonTextMargin">
          At The Science of Beauty, we provide personalized care to every
          patient, tailoring treatment plans to meet individual needs and health
          goals. Our experienced medical team specializes in administering
          Semaglutide, ensuring the highest standard of care. We take a holistic
          approach, focusing on the entire person rather than just symptoms.
          Alongside Semaglutide, we offer nutritional guidance, lifestyle
          recommendations, and continuous support.
        </p>
        {/* <p className="commonText">
          In the summer of 2022, Wegovy (one of the two original brand names for
          Semagultide) became FDA-approved for weight loss purposes. However, it
          came with the stipulation that patients need to display at least one
          weight-related medical condition to qualify (high cholesterol, Type 2
          diabetes, high blood pressure, etc.).
        </p> */}
        <img className="mainMainDia" src={main} />
        {/* <p className="commonText">
          Since then, Wegovy has regularly cleared itself off the shelves.
          According to the supplier's website (Novo Nordisk), demand is growing
          at such a substantial rate that they foresee many patients struggling
          to fill their Wegovy prescriptions at least through September of 2023.
          With the limited supply, Novo Nordisk has paused key promotional
          efforts to try and limit interest. However, these efforts are doing
          little to dampen the soaring demand for all things Semaglutide.
        </p>
        <p className="commonText">
          With other Semaglutide treatments such as Ozempic and Monjauro on the
          horizon for FDA approval, it's only a matter of time until supply
          issues sort themselves out. In the meantime, it's a smart move for
          your med spa to begin prescribing when available and developing your
          Semaglutide marketing strategy into your med spa business plan.
        </p>
        <p className="commonText">
          We'll now go over how deliberate website design, SEO, PPC, social
          media, emails, and text campaigns can all work together to build a
        </p> */}
        <p className="commonSegHead">In our Semaglutide Program:</p>

        <p className="commonText compressTxt">
          Your journey begins with a thorough consultation to determine if
          Semaglutide is suitable for you.
        </p>

        <p className="commonText compressTxt">
          Receive a customized treatment plan including Semaglutide injections,
          dietary advice, and exercise recommendations.
        </p>

        <p className="commonText compressTxt">
          Benefit from regular follow-ups to monitor progress, adjust treatment
          as needed, and provide motivational support.
        </p>
        <p className="commonText">
          Transform your health with The Science of Beauty.
        </p>
      </div>
      <div className="themeBg">
        <h2 className="platHead">WHAT IS THE SYSTEM WORK?</h2>
        <div className="platRowMargin">
          <Grid container>
            <Grid items lg={3} md={6} sm={12} xs={12} className="flexBox">
              <div className="themeSubBg">
                <img src={img1} />
                <p className="platCardTxt">Set Up a Free Consultation Today</p>
              </div>
            </Grid>
            <Grid items lg={3} md={6} sm={12} xs={12} className="flexBox">
              <div className="themeSubBg">
                <img src={img2} />
                <p className="platCardTxt">
                  Visit a specialist and finish your tests
                </p>
              </div>
            </Grid>
            <Grid items lg={3} md={6} sm={12} xs={12} className="flexBox">
              <div className="themeSubBg">
                <img src={img3} />
                <p className="platCardTxt">
                  Review your findings with a doctor
                </p>
              </div>
            </Grid>
            <Grid items lg={3} md={6} sm={12} xs={12} className="flexBox">
              <div className="themeSubBg">
                <img src={img4} />
                <p className="platCardTxt">Beginning Your Protocol</p>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
      <div className="containerMargin">
        <h2 className="mainCommonHeading">
          Ready for <span className="commonTheme">Change?</span>
        </h2>
        <p className="themeText">
          Begin your transformative health journey with Semaglutide at The
          Science of Beauty. Contact us today to schedule your free consultation
          and learn how our dedicated team can assist you in achieving your
          wellness goals.
        </p>
        {/* <p className="commonText">
          <span className="commonTextTheme">
            {" "}
            How can Semaglutide benefit me?
          </span>{" "}
          Currently, obesity or overweight affects almost 70% of Americans,
          which is associated with a range of health issues. Joining our plan
          and losing weight will reduce your risk of getting diabetes, heart
          disease, and stroke, among other diseases and conditions. It's
          intended to empower you to take charge of your future. By helping you
          feel fuller faster, this drug helps you say goodbye to your nagging
          sweet hunger. You eat less calories as a result, and the time you
          spend feeling full is also prolonged. Semaglutide delays “gastric
          emptying,” the process by which stomach contents are transported into
          the first segment of the small intestine during digestion. If the
          impact's effectiveness steadily deteriorates over time, our medical
          team may change the suggested weekly dose for you.
        </p> */}
      </div>
    </div>
  );
}
