import React from 'react';
import { Button, Grid } from "@material-ui/core";
import serviceImg from '../../assets/images/newServices15.png'
import '../../assets/CustomCSS/Services/SubServices.css'



const LashLiftAndTint = () => {
    return (
        <div style={{ overflow: 'hidden' }}>
            <div className='subServiceContainer-wrapper'>
                <Grid container className='subServices-container '>
                    <Grid items lg={6} md={6} sm={12} xs={12}>
                        <div className='subServices-content-holder'>
                            <div>
                                <p className='subService-heading'>Lash Lift & Tint</p>
                                <p className='subService-Description'>
                                    A lash lift and tint is essentially a perm and color for your eyelashes. This beauty treatment reshapes your eyelashes making your straight lashes curl more noticeably upward
                                </p>
                                <p className='subService-Description'>
                                    <p className='subService-Description'>
                                        A lash lift and tint is essentially a perm and color for your eyelashes. This beauty treatment reshapes your eyelashes making your straight lashes curl more noticeably upward
                                    </p>
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
                                <p className='subService-Description subServices-price'>Lash Tint $25</p>
                                <p className='subService-Description subServices-price'>Lash Lift $60</p>
                                <p className='subService-Description subServices-price'>Lash lift & tint $75</p>
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

export default LashLiftAndTint;
