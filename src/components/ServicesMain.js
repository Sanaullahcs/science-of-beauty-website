import React, { useState } from "react";
import { Button, Grid } from "@material-ui/core";
import ser1 from "../assets/images/newServices1c.png";
import ser2 from "../assets/images/newServices2c.png";
import ser3 from "../assets/images/newServices3c.png";
import ser4 from "../assets/images/newServices4c.png";
import ser5 from "../assets/images/newServices5c.png";
import ser6 from "../assets/images/newServices6c.png";
import ser7 from "../assets/images/newServices7c.png";
import ser8 from "../assets/images/newServices8c.png";
import ser9 from "../assets/images/newServices9c.png";
import ser10 from "../assets/images/newServices10c.png";
import ser11 from "../assets/images/newServices11c.png";
import ser12 from "../assets/images/newServices12c.png";
import ser13 from "../assets/images/newServices13c.png";
import ser14 from "../assets/images/newServices14c.png";
import ser15 from "../assets/images/newServices15c.png";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


import "../assets/CustomCSS/ServicesMain.css";
import Plx from "react-plx";

function ServicesMain() {
  const navigate = useNavigate();
  // Retrieve showAllItems state from URL
  const searchParams = new URLSearchParams(window.location.search);
  const showAllItemsFromURL = searchParams.get('showAllItems') === 'true';
  const [showAllItems, setShowAllItems] = useState(showAllItemsFromURL);

  const handleViewMoreClick = () => {
    setShowAllItems(!showAllItems);


    // Update URL with the current showAllItems state
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set('showAllItems', String(!showAllItems));
    navigate(`?${newSearchParams.toString()}`, { replace: true });
  };
  const generateParallaxData = (start, end) => [
    {
      start: start,
      end: end,
      properties: [
        {
          startValue: 1.1,
          endValue: 1,
          property: "scale",
        },
        {
          startValue: 0,
          endValue: 1,
          property: "opacity",
        },
      ],
    }
  ];
  const imageParallaxDataOne = generateParallaxData(0, 500);
  const imageParallaxDataTwo = generateParallaxData(400, 1200);
  const imageParallaxDataThree = generateParallaxData(900, 1800);
  const imageParallaxDataFour = generateParallaxData(1500, 2300);
  const imageParallaxDataFive = generateParallaxData(2200, 3000);
  const imageParallaxDataSix = generateParallaxData(2800, 3600);
  const imageParallaxDataSeven = generateParallaxData(3400, 4000);
  const imageParallaxDataEight = generateParallaxData(4000, 4700);
  const imageParallaxDataNine = generateParallaxData(4600, 5200);
  const imageParallaxDataTen = generateParallaxData(5200, 5800);
  const imageParallaxDataEleven = generateParallaxData(5800, 6400);
  const imageParallaxDataTwelve = generateParallaxData(6400, 7000);
  const imageParallaxDataThirteen = generateParallaxData(7000, 7600);
  const imageParallaxDataFourteen = generateParallaxData(7600, 8200);
  const imageParallaxDataFifteen = generateParallaxData(8200, 9000);



  const handleReadMoreClick = () => {

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <div style={{ overflow: 'hidden' }}>
        <div className="main-blog-content">
          {/* ==================== */}
          {/* <Grid container className="main-main-blogs">
            <Grid items lg={6} style={{ order: 2 }}>
              <div className="blog-main-div">
                <p className="blog-main-heading">Face & Neck</p>
                <p className="blog-description-heading">
                  Morpheus8 is a micro-needling device that utilizes radio frequency energy to remodel and contour the face and body. This fractional treatment penetrates deep into the skin and fat for a smoother…
                </p>
                <div className="contactus-btn-div">
                  <Link to="/services/face-and-neck">  <Button className="blog-contact-btn" onClick={handleReadMoreClick}>Read More</Button></Link>
                </div>
              </div>
            </Grid>
            <Grid items lg={6} style={{ order: 1 }}>
              <Plx parallaxData={imageParallaxDataOne} >
                <div className="services-img-holderHolder">
                  <img className="blog-img-holder" src={ser1} />
                </div>
              </Plx>
            </Grid>
            </Grid> */}
          {/* ==================== */}
          <Grid container className="main-main-blogs">
            <Grid items lg={6}>
              <div className="blog-main-div">
                <p className="blog-main-heading">Face & Neck</p>
                <p className="blog-description-heading">
                  Morpheus8 is a micro-needling device that utilizes radio frequency energy to remodel and contour the face and body. This fractional treatment penetrates deep into the skin and fat for a smoother…
                </p>
                <div className="contactus-btn-div">
                  <Link to="/services/face-and-neck">  <Button className="blog-contact-btn" onClick={handleReadMoreClick}>Read More</Button></Link>
                </div>
              </div>
            </Grid>
            <Grid items lg={6}>
              <Plx parallaxData={imageParallaxDataOne} >
                <div className="services-img-holderHolder">
                  <img className="blog-img-holder" src={ser1} />
                </div>
              </Plx>
            </Grid>
            <Grid items lg={6}>
              <Plx parallaxData={imageParallaxDataTwo}>
                <div className="services-img-holderHolder">
                  <img className="blog-img-holder" src={ser2} />
                </div>
              </Plx>

            </Grid>
            <Grid items lg={6}>
              <div className="blog-main-div">
                <p className="blog-main-heading">Body Tightening</p>
                <p className="blog-description-heading">
                  Morpheus8 (M8) Body is the latest radio frequency micro-needling technology FDA approved for deep tissue remodeling. This minimally -invasive treatment tightens skin, liquefies fat, and reduces the…
                </p>
                <div className="contactus-btn-div">
                  <Link to="/services/body-tightening"> <Button className="blog-contact-btn" onClick={handleReadMoreClick}>Read More</Button></Link>
                </div>
              </div>
            </Grid>
            <Grid items lg={6}>
              <div className="blog-main-div">
                <p className="blog-main-heading">Body Scarring</p>
                <p className="blog-description-heading">
                  Morpheus8 focuses on skin reconstruction, increased collagen and elastin formation, as well as improved skin cell turnover, which helps to reduce the appearance of acne scars, surgical scarring…more
                </p>
                <div className="contactus-btn-div">
                  <Link to="/services/body-scarring"> <Button className="blog-contact-btn" onClick={handleReadMoreClick}>Read More</Button></Link>
                </div>
              </div>
            </Grid>
            <Grid items lg={6}>
              <Plx parallaxData={imageParallaxDataThree}>
                <div className="services-img-holderHolder">
                  <img className="blog-img-holder" src={ser3} />
                </div>
              </Plx>
            </Grid>
            <Grid items lg={6}>
              <Plx parallaxData={imageParallaxDataFour}>
                <div className="services-img-holderHolder">
                  <img className="blog-img-holder" src={ser8} />
                </div>
              </Plx>
            </Grid>
            <Grid items lg={6}>
              <div className="blog-main-div">
                <p className="blog-main-heading">Body Toning</p>
                <p className="blog-description-heading">
                  Improve skin appearance. With CryoToning® treatments, cold temperatures boost collagen production, which tightens loose skin, reduces the appearance of cellulite, and
                  improves the…
                </p>
                <div className="contactus-btn-div">
                  <Link to="/services/body-toning"> <Button className="blog-contact-btn" onClick={handleReadMoreClick}>Read More</Button></Link>
                </div>
              </div>
            </Grid>
            {showAllItems && (<>
              <Grid items lg={6}>
                <div className="blog-main-div">
                  <p className="blog-main-heading">Pigmentation</p>
                  <p className="blog-description-heading">
                    Unwanted Sun Spots, Age Spots , Pigmentation? Our Elite IQ Laser is the best option for you! Great to treat Face, Neck, Hands and much more...
                  </p>
                  <div className="contactus-btn-div">
                    <Link to="/services/Pigmentation"> <Button className="blog-contact-btn" onClick={handleReadMoreClick}>Read More</Button></Link>
                  </div>
                </div>
              </Grid>
              <Grid items lg={6}>
                <Plx parallaxData={imageParallaxDataFive}>
                  <div className="services-img-holderHolder">
                    <img className="blog-img-holder" src={ser5} />
                  </div>
                </Plx>
              </Grid>
              <Grid items lg={6}>
                <Plx parallaxData={imageParallaxDataSix}>
                  <div className="services-img-holderHolder">
                    <img className="blog-img-holder" src={ser6} />
                  </div>
                </Plx>
              </Grid>
              <Grid items lg={6}>
                <div className="blog-main-div">
                  <p className="blog-main-heading">Facial or Spider Vein Treatment </p>
                  <p className="blog-description-heading">
                    Tired of stubborn facial and body spider Veins... Elite IQ is the answer for you! Our noninvasive, focused, heat-based treatment…
                  </p>
                  <div className="contactus-btn-div">
                    <Link to="/services/facial-spidervein-treatment"> <Button className="blog-contact-btn" onClick={handleReadMoreClick}>Read More</Button></Link>
                  </div>
                </div>
              </Grid>
              <Grid items lg={6}>
                <div className="blog-main-div">
                  <p className="blog-main-heading">CRYO Facial</p>
                  <p className="blog-description-heading">
                    Reduce fine lines and wrinkles. CryoFacial treatments use cold temperatures to increase blood flow and oxygen, which boosts collagen production, reduces the appearance of wrinkles and pores and…
                  </p>
                  <div className="contactus-btn-div">
                    <Link to="/services/cryo-facial"> <Button className="blog-contact-btn" onClick={handleReadMoreClick}>Read More</Button></Link>
                  </div>
                </div>
              </Grid>
              <Grid items lg={6}>
                <Plx parallaxData={imageParallaxDataSeven}>
                  <div className="services-img-holderHolder">
                    <img className="blog-img-holder" src={ser7} />
                  </div>
                </Plx>
              </Grid>
              <Grid items lg={6}>
                <Plx parallaxData={imageParallaxDataEight}>
                  <div className="services-img-holderHolder">
                    <img className="blog-img-holder" src={ser4} />
                  </div>
                </Plx>
              </Grid>
              <Grid items lg={6}>
                <div className="blog-main-div">
                  <p className="blog-main-heading">Laser Hair Removal</p>
                  <p className="blog-description-heading">
                    The Elite iQ device offers quick, easy and personalized laser hair treatments using smart technology. The Elite iQ device is equipped with the FDA-cleared Skintel melanin reader. The Skintel device is…
                  </p>
                  <div className="contactus-btn-div">
                    <Link to="/services/LaserHairRemoval"> <Button className="blog-contact-btn" onClick={handleReadMoreClick}>Read More</Button></Link>
                  </div>
                </div>

              </Grid>
              <Grid items lg={6}>
                <div className="blog-main-div">
                  <p className="blog-main-heading">Body Slimming</p>
                  <p className="blog-description-heading">
                    Reduce fat and lose inches. During CryoSlimming® treatments the skin is warmed then rapidly cooled. We recommend 5-10 sessions for best results. On average, people see 18.96% fat reduction in…
                  </p>
                  <div className="contactus-btn-div">
                    <Link to="/services/body-slimming"> <Button className="blog-contact-btn" onClick={handleReadMoreClick}>Read More</Button></Link>
                  </div>
                </div>
              </Grid>
              <Grid items lg={6}>
                <Plx parallaxData={imageParallaxDataNine}>
                  <div className="services-img-holderHolder">
                    <img className="blog-img-holder" src={ser9} />
                  </div>
                </Plx>
              </Grid>
              <Grid items lg={6}>
                <Plx parallaxData={imageParallaxDataTen}>
                  <div className="services-img-holderHolder">
                    <img className="blog-img-holder" src={ser10} />
                  </div>
                </Plx>
              </Grid>
              <Grid items lg={6}>
                <div className="blog-main-div">
                  <p className="blog-main-heading">Anti Aging Facial</p>
                  <p className="blog-description-heading">
                    Our correction, prevention and nutrition system targets fine lines and wrinkles, loss of elasticity and dull skin for a firmer and more youthful appearance.
                  </p>
                  <div className="contactus-btn-div">
                    <Link to="/services/anti-aging-facial"> <Button className="blog-contact-btn" onClick={handleReadMoreClick}>Read More</Button></Link>
                  </div>
                </div>
              </Grid>
              <Grid items lg={6}>
                <div className="blog-main-div">
                  <p className="blog-main-heading">Illuminating Facial</p>
                  <p className="blog-description-heading">
                    This comprehensive brightening treatment combines the latest innovationsin skin lightening technology to correct all forms ofhyperpigmentation without
                    drying the skin...
                  </p>
                  <div className="contactus-btn-div">
                    <Link to="/services/illuminating-facial"> <Button className="blog-contact-btn" onClick={handleReadMoreClick}>Read More</Button></Link>
                  </div>
                </div>
              </Grid>
              <Grid items lg={6}>
                <Plx parallaxData={imageParallaxDataEleven}>
                  <div className="services-img-holderHolder">
                    <img className="blog-img-holder" src={ser11} />
                  </div>
                </Plx>
              </Grid>
              <Grid items lg={6}>
                <Plx parallaxData={imageParallaxDataTwelve}>
                  <div className="services-img-holderHolder">
                    <img className="blog-img-holder" src={ser12} />
                  </div>
                </Plx>
              </Grid>
              <Grid items lg={6}>
                <div className="blog-main-div">
                  <p className="blog-main-heading">Be Clear Purifying Facial</p>
                  <p className="blog-description-heading">
                    This comprehensive treatment combats all grades of acne, combining powerful anti-bacterial peptides and salicylic acid with soothing anti-inflammatory botanicals.
                    perfect for...
                  </p>
                  <div className="contactus-btn-div">
                    <Link to="/services/purifying-facial"> <Button className="blog-contact-btn" onClick={handleReadMoreClick}>Read More</Button></Link>
                  </div>
                </div>
              </Grid>
              <Grid items lg={6}>
                <div className="blog-main-div">
                  <p className="blog-main-heading">Customized Chemical Peel</p>
                  <p className="blog-description-heading">
                    We offer a Variety of Chemical Peels for your specific concern. From Hyper Pigmentation, Acne, Skin tone and
                    Much More!
                  </p>
                  <div className="contactus-btn-div">
                    <Link to="/services/customized-chemicl-peel"> <Button className="blog-contact-btn" onClick={handleReadMoreClick}>Read More</Button></Link>
                  </div>
                </div>
              </Grid>
              <Grid items lg={6}>
                <Plx parallaxData={imageParallaxDataThirteen}>
                  <div className="services-img-holderHolder">
                    <img className="blog-img-holder" src={ser13} />
                  </div>
                </Plx>
              </Grid>
              <Grid items lg={6}>
                <Plx parallaxData={imageParallaxDataFourteen}>
                  <div className="services-img-holderHolder">
                    <img className="blog-img-holder" src={ser14} />
                  </div>
                </Plx>
              </Grid>
              <Grid items lg={6}>
                <div className="blog-main-div">
                  <p className="blog-main-heading">Brow Lamination</p>
                  <p className="blog-description-heading">
                    Brow lamination is a process of perming your brow hairs, but instead of curls, you get straighter, upward-facing hairs that are set in place. It can help get rid of the appearance of bare patches and irregular…
                  </p>
                  <div className="contactus-btn-div">
                    <Link to="/services/brow-lamination"> <Button className="blog-contact-btn" onClick={handleReadMoreClick}>Read More</Button></Link>
                  </div>
                </div>
              </Grid>
              <Grid items lg={6}>
                <div className="blog-main-div">
                  <p className="blog-main-heading">Lash Lift & Tint</p>
                  <p className="blog-description-heading">
                    A lash lift and tint is essentially a perm and color for your eyelashes. This beauty treatment reshapes your eyelashes making your straight lashes curl more
                    noticeably upward…
                  </p>
                  <div className="contactus-btn-div">
                    <Link to="/services/lash-lift-and-tint"> <Button className="blog-contact-btn" onClick={handleReadMoreClick}>Read More</Button></Link>
                  </div>
                </div>
              </Grid>
              <Grid items lg={6}>
                <Plx parallaxData={imageParallaxDataFifteen}>
                  <div className="services-img-holderHolder">
                    <img className="blog-img-holder" src={ser15} />
                  </div>
                </Plx>
              </Grid>
            </>)}
            <Button className="exploreMoreBtn" onClick={handleViewMoreClick}> {!showAllItems ? "Explore More" : "Close"}</Button>
          </Grid>
        </div>
      </div>
    </>
  );
}
export default ServicesMain;
