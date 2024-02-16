import React from "react";
import "../assets/CustomCSS/Popup.css";
import diab from "../assets/images/diab.png";
import cross from "../assets/images/popupCross.png";
import { Link } from "react-router-dom";

const Popup = ({ onClose }) => {
  return (
    <div className="overlayPopup">
      <div className="popup">
        <div className="popup-content">
          <div>
            <img className="popupIMage" src={diab} />
          </div>
          <hr className="hrPopup" />
          <h2 className="popHead-heading">Kickstart your Weight Loss!</h2>

          <Link to={`/semaglutide`} style={{ textDecoration: 'none' }}>
            <button className="GoToSemaglutide">Go to Semaglutide</button>
          </Link>
          <button className="closeButtonPopup" onClick={onClose}>
            <img className="closer" src={cross} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
