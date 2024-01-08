import React from 'react';
import { Button, Grid } from "@material-ui/core";
import serviceImg from '../../assets/images/newServices4.png'
import '../../assets/CustomCSS/Services/SubServices.css'



const LaserHairRemoval = () => {
    return (
        <div style={{ overflow: 'hidden' }}>
            <div className='subServiceContainer-wrapper'>
                <Grid container className='subServices-container '>
                    <Grid items lg={6} md={6} sm={12} xs={12}>
                        <div className='subServices-content-holder'>
                            <div>
                                <p className='subService-heading'>Laser Hair Removal</p>
                                <p className='subService-Description'>
                                    The Elite iQ device offers quick, easy and personalized laser hair treatments using smart technology. The Elite iQ device is equipped with the FDA-cleared Skintel melanin reader. The Skintel device is equipped with technology that reads your precise skin type, so we can safely treat all skin types and areas – making the Elite iQ device the perfect hair removal solution for men and women.
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
                                <p className='subService-Description subServices-price'>Chin- $281.00</p>
                                <p className='subService-Description subServices-price'>Lip- $281.00</p>
                                <p className='subService-Description subServices-price'>Lower Face- $842.00</p>
                                <p className='subService-Description subServices-price'>Under arms- $485.00</p>
                                <p className='subService-Description subServices-price'>Bikini Line- $485.00</p>
                                <p className='subService-Description subServices-price'>Bikini (excludes the "Clean Zone")- $791.00</p>
                                <p className='subService-Description subServices-price'>Full Brazilian- $893.00</p>
                                <p className='subService-Description subServices-price'>Half Leg (Upper or Lower)- $1199.00</p>
                                <p className='subService-Description subServices-price'>Full Back- $1760.00</p>
                                <p className='subService-Description subServices-price'>Chest- $1148.00</p>
                                <p className='subService-Description subServices-price'>Arms (Upper Or Lower)- $842.00</p>
                                <p className='subService-Description subServices-price'>See an area not listed, Please feel free to ask for a Quote</p>
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

export default LaserHairRemoval;
