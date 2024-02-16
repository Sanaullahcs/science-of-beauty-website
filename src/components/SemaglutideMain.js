import React from "react";
import "../assets/CustomCSS/CommonSemaglutide.css";
import main from "../assets/images/diabMain.png";
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
          <span className="commonTheme">Semaglutide:</span><br/> The Diabetes
          Treatment Turned Weight Loss Revolution
        </p>
        <p className="commonText">
          For over 15 years, Semaglutide has been prescribed for Type 2 diabetes
          patients because of its insulin producing abilities. However, its
          significant weight loss side effects have recently attracted a much
          wider spotlight.
        </p>
        <p className="commonText">
          In the summer of 2022, Wegovy (one of the two original brand names for
          Semagultide) became FDA-approved for weight loss purposes. However, it
          came with the stipulation that patients need to display at least one
          weight-related medical condition to qualify (high cholesterol, Type 2
          diabetes, high blood pressure, etc.).
        </p>
        <img className="mainMainDia" src={main} />
        <p className="commonText">
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
            <Grid items lg={3} md={6} sm={12} xs={12}className="flexBox">
              <div className="themeSubBg">
                <img src={img2} />
                <p className="platCardTxt">Set Up a Free Consultation Today</p>
              </div>
            </Grid>
            <Grid items lg={3} md={6} sm={12} xs={12} className="flexBox">
              <div className="themeSubBg">
                <img src={img3} />
                <p className="platCardTxt">Set Up a Free Consultation Today</p>
              </div>
            </Grid>
            <Grid items lg={3} md={6} sm={12} xs={12} className="flexBox">
              <div className="themeSubBg">
                <img src={img4} />
                <p className="platCardTxt">Set Up a Free Consultation Today</p>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
      <div className="containerMargin">
        <h2 className="mainCommonHeading">
          What to <span className="commonTheme">Know?</span>
        </h2>
        <p className="commonText">
          <span className="commonTextTheme">Semaglutide definition:</span> Semaglutide is the first
          weight-loss medication to enter the market since 2014 that has been
          approved by the FDA. It is marketed under the brand names Wegovy and
          Ozempic. It transforms treatment for persistent overweight issues and
          obesity. Once each week, semaglutide is given by self-injection under
          the skin. It imitates the actions of a hormone known as glucagon-like
          peptide-1 (GLP-1), which targets the body's appetite-controlling
          receptors as well as the brain's “I'm full” triggers after eating.
        </p>
        <p className="commonText">
          <span className="commonTextTheme"> How can Semaglutide benefit me?</span> Currently, obesity or
          overweight affects almost 70% of Americans, which is associated with a
          range of health issues. Joining our plan and losing weight will reduce
          your risk of getting diabetes, heart disease, and stroke, among other
          diseases and conditions. It's intended to empower you to take charge
          of your future. By helping you feel fuller faster, this drug helps you
          say goodbye to your nagging sweet hunger. You eat less calories as a
          result, and the time you spend feeling full is also prolonged.
          Semaglutide delays “gastric emptying,” the process by which stomach
          contents are transported into the first segment of the small intestine
          during digestion. If the impact's effectiveness steadily deteriorates
          over time, our medical team may change the suggested weekly dose for
          you.
        </p>
      </div>
    </div>
  );
}
