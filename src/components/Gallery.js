import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../assets/CustomCSS/gallery.css";
import galleryimg1 from "../assets/images/services-1.png";
import galleryimg2 from "../assets/images/wwd2.png";
import galleryimg3 from "../assets/images/wwd3.png";
import galleryimg8 from "../assets/images/wwd4.png";
import galleryimg4 from "../assets/images/services-2.png";
import galleryimg5 from "../assets/images/services-1.png";
import galleryimg6 from "../assets/images/services-2.png";
import galleryimg7 from "../assets/images/services-3.png";
// import Plx from "react-plx";
// import { Link } from "react-router-dom";
import { FETCH_GALLERY } from "../env/apiConfig";
import ReactPixel from "react-facebook-pixel"; // Import ReactPixel
import fbPixelInit from "../../src/assets/fbPixil";

const all = [
  galleryimg7,
  galleryimg2,
  galleryimg3,
  galleryimg4,
  galleryimg8,
  galleryimg6,
  galleryimg3,
  galleryimg8,
  galleryimg7,
  galleryimg3,
  galleryimg2,
  galleryimg3,
  galleryimg2,
  galleryimg3,
  galleryimg2,
  galleryimg3,
  // add more images here if needed
];

const Gallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [displayCount, setDisplayCount] = useState(9);
  const [image, setImage] = useState([]);
  useEffect(() => {
    fbPixelInit(); // Initialize Facebook Pixel when the app loads
    ReactPixel.track("PageView", {
      page: "GalleryPage", // Replace 'HomePage' with the actual page name
    });
  }, []);
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log("Selected image index:", selectedImageIndex);
  }, [selectedImageIndex]);

  const openCarousel = (index) => {
    console.log("Clicked index:", index);
    setTimeout(() => {
      const slides = document.querySelectorAll(".slide");
      console.log("slides", slides);
      if (slides.length > 0) {
        const firstSlide = slides[0];
        const marginLeft =
          image.length === 3 ? "100%" : `${(image.length - 2) * 100}%`;
        firstSlide.style.marginLeft = marginLeft;
      }
    }, 0);
    setSelectedImageIndex(index);
  };
  async function fetchData() {
    try {
      const response = await fetch(FETCH_GALLERY, {});

      const data = await response.json();
      console.log("data============================>", data.Images);

      setImage(data.Images);
    } catch (error) {
      console.error("Error:", error.message);
    }
  }

  const closeCarousel = () => {
    setSelectedImageIndex(null);
  };

  const showMoreImages = () => {
    setDisplayCount(displayCount + 9);
  };

  return (
    <div className="gallery-container">
      <div className="gallery">
        {image.map((src, index) => (
          <div key={index} className="gallery-item">
            <img
              src={src.filename}
              alt={`Gallery ${index + 1}`}
              onClick={() => openCarousel(index)}
              className="gallery-image"
            />
          </div>
        ))}
      </div>

      {displayCount < Image.length && (
        <div className="show-more-container">
          <button className="show-more-button" onClick={showMoreImages}>
            View More
          </button>
        </div>
      )}

      {selectedImageIndex !== null && (
        <div className="carousel-modal" onClick={closeCarousel}>
          <div
            className="carousel-content"
            onClick={(e) => e.stopPropagation()}
          >
            <Carousel selectedItem={selectedImageIndex}>
              {image.length > 0 ? (
                image.map((image, index) => (
                  <div key={index}>
                    <img
                      src={image.filename}
                      alt={`Carousel ${index + 1}`}
                      className="selected-image"
                    />
                  </div>
                ))
              ) : (
                <p>No images available</p>
              )}
            </Carousel>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
