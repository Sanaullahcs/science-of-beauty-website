import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../assets/CustomCSS/gallery.css';
import galleryimg1 from "../assets/images/services-1.png";
import galleryimg2 from "../assets/images/wwd2.png";
import galleryimg3 from "../assets/images/wwd3.png";
import galleryimg8 from "../assets/images/wwd4.png";
import galleryimg4 from "../assets/images/services-2.png";
import galleryimg5 from "../assets/images/services-1.png";
import galleryimg6 from "../assets/images/services-2.png";
import galleryimg7 from "../assets/images/services-3.png";



const allImages = [
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

  useEffect(() => {
    console.log("Selected image index:", selectedImageIndex);
  }, [selectedImageIndex]);

  const openCarousel = (index) => {
    console.log("Clicked index:", index);
    setTimeout(() => {
      const slides = document.querySelectorAll('.slide');
      console.log('slides', slides);
      if (slides.length > 0) {
        const firstSlide = slides[0];
        const marginLeft = allImages.length === 3 ? '100%' : `${(allImages.length - 2) * 100}%`;
        firstSlide.style.marginLeft = marginLeft;
      }
    }, 0);
    setSelectedImageIndex(index);
  };

  const closeCarousel = () => {
    setSelectedImageIndex(null);
  };

  const showMoreImages = () => {
    setDisplayCount(displayCount + 9);
  };

  return (
    <div className="gallery-container">
      <div className="gallery">
        {allImages.slice(0, displayCount).map((src, index) => (
          <div key={index} className="gallery-item">
            <img
              src={src}
              alt={`Gallery ${index + 1}`}
              onClick={() => openCarousel(index)}
              className="gallery-image"
            />
          </div>
        ))}
      </div>

      {displayCount < allImages.length && (
        <div className="show-more-container">
          <button className="show-more-button" onClick={showMoreImages}>
            View More
          </button>
        </div>
      )}

      {selectedImageIndex !== null && (
        <div className="carousel-modal" onClick={closeCarousel}>
          <div className="carousel-content" onClick={(e) => e.stopPropagation()}>
            <Carousel selectedItem={selectedImageIndex}>
              {allImages.map((src, index) => (
                <div key={index}>
                  <img src={src} alt={`Carousel ${index + 1}`} className="selected-image" />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
