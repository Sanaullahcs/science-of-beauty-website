import React from 'react';
import { Button, Grid } from "@material-ui/core";
import serviceImg from '../../assets/images/newServices13.png'
import '../../assets/CustomCSS/Services/SubServices.css'
import { Link } from 'react-router-dom';



const CustomizedChemicalPeel = () => {
    return (
        <div style={{ overflow: 'hidden' }}>
            <div className='subServiceContainer-wrapper'>
                <Grid container className='subServices-container '>
                    <Grid items lg={6} md={6} sm={12} xs={12}>
                        <div className='subServices-content-holder'>
                            <div>
                                <p className='subService-heading'>Customized Chemical Peel</p>
                                <p className='subService-Description'>
                                    We offer a Variety of Chemical Peels for your specific concern. From Hyper Pigmentation, Acne, Skin tone and Much More!
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
                                </div>
                                <p className='subService-Description subServices-price'>$3,500 (3)</p>
                                <p className='subService-Description subServices-price'>$1,250 (1)</p> */}
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

export default CustomizedChemicalPeel;
