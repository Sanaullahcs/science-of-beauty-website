import React from 'react';
import { Button, Grid } from "@material-ui/core";
import serviceImg from '../../assets/images/newServices6.png'
import '../../assets/CustomCSS/Services/SubServices.css'



const FacialAndSpiderVeinTreatment = () => {
  return (
    <div style={{ overflow: 'hidden' }}>
      <div className='subServiceContainer-wrapper'>
        <Grid container className='subServices-container '>
          <Grid items lg={6} md={6} sm={12} xs={12}>
            <div className='subServices-content-holder'>
              <div>
                <p className='subService-heading'>Facial or Spider Vein Treatment</p>
                <p className='subService-Description'>
                  Tired of stubborn facial and body spider Veins... Elite IQ is the answer for you! Our noninvasive, focused, heat-based treatment that will destroys the underlying spider veins with minimal damage to the surrounding skin.
                </p>
                {/* <p className='subService-Description'>WHAT CAN MORPHEUS 8 ADDRESS?</p>
                <div>
                  <ul className='subService-Description'>
                    <li >Fine lines and wrinkles</li>
                    <li>Restoration of lost volume in the cheeks and mid face</li>
                    <li>Laxity in the face, neck, and jawline</li>
                    <li>Skin texture and quality</li>
                    <li>Crepe-y skin</li>
                    <li >Acne scarring</li>
                  </ul>
                </div> */}
                <p className='subService-Description subServices-price'>2x2 Area -$150</p>
                <p className='subService-Description subServices-price'>4x4 Area- $300</p>
                <p className='subService-Description subServices-price'>Pricing may vary</p>
              </div>
              <div className='subservice-contactUsBtn-holder'>
                <Button className='subService-contactUsBtn '>Contact Us</Button>
              </div>
            </div>
          </Grid>
          <Grid items lg={6} md={6} sm={12} xs={12}>
            <div>
              <img src={serviceImg} />
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default FacialAndSpiderVeinTreatment;
