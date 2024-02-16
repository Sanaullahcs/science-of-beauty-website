import React from 'react';

const Popup = ({ onClose }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Welcome to Our Website!</h2>
        <p>Thank you for visiting. Enjoy your stay!</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Popup;
