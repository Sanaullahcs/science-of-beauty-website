import React from 'react';
import { Button, Grid } from "@material-ui/core";
import serviceImg from '../../assets/images/newServices2.png'
import '../../assets/CustomCSS/Services/SubServices.css'



const BodyTightening = () => {
    return (
        <div style={{ overflow: 'hidden' }}>
            <div className='subServiceContainer-wrapper'>
                <Grid container className='subServices-container '>
                    <Grid items lg={6} md={6} sm={12} xs={12}>
                        <div className='subServices-content-holder'>
                            <div>
                                <p className='subService-heading'>Body Tightening</p>
                                <p className='subService-Description'>
                                    Morpheus8 (M8) Body is the latest radio frequency micro-needling technology FDA approved for deep tissue remodeling. This minimally -invasive treatment tightens skin, liquefies fat, and reduces the appearance of cellulite, all while improving the overall tone and texture of the skin.
                                </p>
                                <p className='subService-Description'>WHAT CAN MORPHEUS8 FOR BODY DO?</p>
                                <div>
                                    <ul className='subService-Description'>
                                        <li >Tightens the skin</li>
                                        <li>Liquifies fat</li>
                                        <li>Improves cellulite</li>
                                        <li>Reduces the appearance of stretch marks and scars</li>
                                        <li>Improves “rippled” skin</li>
                                        <li >Evens out skin texture</li>
                                    </ul>
                                </div>
                                <p className='subService-Description subServices-price'>Small Area:</p>
                                <p className='subService-Description subServices-price'>$3,500 for a package of 3</p><br />
                                <p className='subService-Description subServices-price'>Large Area:</p>
                                <p className='subService-Description subServices-price'>$4,500 for a package of 3</p>
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

export default BodyTightening;
