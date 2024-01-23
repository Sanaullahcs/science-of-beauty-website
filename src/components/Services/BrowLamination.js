import React from 'react';
import { Button, Grid } from "@material-ui/core";
import serviceImg from '../../assets/images/newServices14.png'
import '../../assets/CustomCSS/Services/SubServices.css'
import { Link } from 'react-router-dom';



const BrowLamination = () => {
    return (
        <div style={{ overflow: 'hidden' }}>
            <div className='subServiceContainer-wrapper'>
                <Grid container className='subServices-container '>
                    <Grid items lg={6} md={6} sm={12} xs={12}>
                        <div className='subServices-content-holder'>
                            <div>
                                <p className='subService-heading'>Brow Lamination</p>
                                <p className='subService-Description'>
                                    Brow lamination is a process of perming your brow hairs, but instead of curls, you get straighter, upward-facing hairs that are set in place. It can help get rid of the appearance of bare patches and irregular hairs, as well as make thin brows look way fuller and appear styled at all times. It makes a great option to give the brow definition . Your brows are permed to go in a particular direction, so it barely takes any time or work to get them to look lifted and styled.
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
                                <p className='subService-Description subServices-price'>$125.00</p>
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

export default BrowLamination;
