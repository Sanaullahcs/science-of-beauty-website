import React from 'react';
import { Button, Grid } from "@material-ui/core";
import serviceImg from '../../assets/images/newServices1.png'
import '../../assets/CustomCSS/Services/SubServices.css'
import { Link } from 'react-router-dom';



const FaceAndNeck = () => {
  return (
    <div style={{ overflow: 'hidden' }}>
      <div className='subServiceContainer-wrapper'>
        <Grid container className='subServices-container '>
          <Grid items lg={6} md={6} sm={12} xs={12}>
            <div className='subServices-content-holder'>
              <div>
                <p className='subService-heading'>FACE & NECK</p>
                <p className='subService-Description'>
                  Morpheus8 is a micro-needling device that utilizes radio frequency energy to remodel and contour the face and body. This fractional treatment penetrates deep into the skin and fat for a smoother and sleeker appearance. The radio-frequency heat also stimulates the production of collagen and elastin, tightening the fibroseptal network. This results in firmer, more youthful-looking skin.
                </p>
                <p className='subService-Description'>WHAT CAN MORPHEUS 8 ADDRESS?</p>
                <div>
                  <ul className='subService-Description'>
                    <li >Fine lines and wrinkles</li>
                    <li>Restoration of lost volume in the cheeks and mid face</li>
                    <li>Laxity in the face, neck, and jawline</li>
                    <li>Skin texture and quality</li>
                    <li>Crepe-y skin</li>
                    <li >Acne scarring</li>
                  </ul>
                </div>
                <p className='subService-Description subServices-price'>$3,500 (3)</p>
                <p className='subService-Description subServices-price'>$1,250 (1)</p>
              </div>
              <div className='subservice-contactUsBtn-holder'>
                <Link to={`/contact`}>
                  <Button className='subService-contactUsBtn '>Contact Us</Button>
                </Link>
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

export default FaceAndNeck;
