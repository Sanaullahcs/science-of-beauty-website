import React from "react";
import Grid from "@mui/material/Grid";
import image from "../assets/images/beauty.png";
import "../assets/CustomCSS/Services/SubServices.css";
import { Link } from "react-router-dom";

const BeautyDrip = () => {
  return (
    <div style={{ background: " #EBEBEB" }}>
      <Grid container spacing={2}>
        <Grid item lg={6} md={6} xs={12}>
          <div>
            <img src={image} />
          </div>
        </Grid>
        <Grid item lg={6} md={6} xs={12}>
          <div style={{ padding: "20px" }}>
            <p className="subService-heading">Glo (Beauty) Drip</p>
            <p className="subService-Description">
              Beauty starts from within…and we’re not just talking about
              personality! Our GLO Drip contains a specially formulated blend of
              vitamins and antioxidants to heal your skin, increase collagen
              production, and bring back that vibrant glow!
            </p>
            <p className="subService-Description">
              Get the ultimate beauty boost from the inside out with this
              perfect blend of hydration, high-dose glutathione, biotin and
              multi-trace elements. No tricks or angles, just 100% vitamin and
              antioxidant absorption to keep your hair, skin, and nails looking
              pristine.
            </p>
            <p className="subService-Description">
              <b>INGREDIENTS</b>: Biotin, Vitamin C, ALA, Taurine, Vitamin B12,
              Glutathione (high dose), Electrolytes​
            </p>
            <p className="subService-heading margin-0">$200</p>
            <p className="subService-Description">
              Upgrade to our <b>Super Glo Drip</b>: 2,000mg of Glutathione for
              double the detox and double the glow! (+$30)
            </p>
            <Link className="none-decor" to="/contact">
              <button className="subService-contactUsBtn flexBoxCode">
                Book Now
              </button>
            </Link>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default BeautyDrip;
