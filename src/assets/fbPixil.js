import ReactPixel from 'react-facebook-pixel';

const fbPixelInit = () => {
  const options = {
    autoConfig: true, // If false, you can manually configure Pixel
    debug: false,     // Set to true if you want to log pixel events to console for debugging
  };

  ReactPixel.init('2052986478453297', options); // Replace this with your Pixel ID
};

export default fbPixelInit;
