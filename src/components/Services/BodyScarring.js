import React from 'react';
import { Button, Grid } from "@material-ui/core";
import serviceImg from '../../assets/images/newServices3.png'
import '../../assets/CustomCSS/Services/SubServices.css'



const BodyScarring = () => {
    return (
        <div style={{ overflow: 'hidden' }}>
            <div className='subServiceContainer-wrapper'>
                <Grid container className='subServices-container '>
                    <Grid items lg={6} md={6} sm={12} xs={12}>
                        <div className='subServices-content-holder'>
                            <div>
                                <p className='subService-heading'>BodyScarring</p>
                                <p className='subService-Description'>
                                    Morpheus8 focuses on skin reconstruction, increased collagen and elastin formation, as well as improved skin cell turnover, which helps to reduce the appearance of acne scars, surgical scarring and smooth the skin’s general texture. Morpheus8 will offer further anti-aging benefits making it an even more appealing option.
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
                                <p className='subService-Description subServices-price'>$1,300 (3)</p>
                                <p className='subService-Description subServices-price'>$500 (1)</p>
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

export default BodyScarring;
