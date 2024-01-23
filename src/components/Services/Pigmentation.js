import React from 'react';
import { Button, Grid } from "@material-ui/core";
import serviceImg from '../../assets/images/newServices5.png'
import '../../assets/CustomCSS/Services/SubServices.css'
import { Link } from 'react-router-dom';



const Pigmentation = () => {
  return (
    <div style={{ overflow: 'hidden' }}>
      <div className='subServiceContainer-wrapper'>
        <Grid container className='subServices-container '>
          <Grid items lg={6} md={6} sm={12} xs={12}>
            <div className='subServices-content-holder'>
              <div>
                <p className='subService-heading'>Pigmentation</p>
                <p className='subService-Description'>
                  Unwanted Sun Spots, Age Spots , Pigmentation? Our Elite IQ Laser is the best option for you! Great to treat Face, Neck, Hands and much more!
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
                <p className='subService-Description subServices-price'>Face- $325.00</p>
                <p className='subService-Description subServices-price'>Neck- $150.00</p>
                <p className='subService-Description subServices-price'>Decollete- $275.00</p>
                <p className='subService-Description subServices-price'>Hands- $175.00</p>
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

export default Pigmentation;
