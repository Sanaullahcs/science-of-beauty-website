import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../assets/CustomCSS/gallery.css';
import galleryimg1 from "../assets/images/galleryimage1.png";
import galleryimg2 from "../assets/images/galleryimg2.png";
import galleryimg3 from "../assets/images/galleryimg3.png";

const images = [
  galleryimg1,
  galleryimg2,
  galleryimg3,
  galleryimg1,
  galleryimg2,
  galleryimg3,
  galleryimg1,
  galleryimg2,
  galleryimg3,
  galleryimg1,
  galleryimg2,
  galleryimg3,
  galleryimg1,
  galleryimg2,
  galleryimg3,
  galleryimg1,
  galleryimg2,
  galleryimg3,
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openCarousel = (src) => {
    console.log("myimage",src)
    setSelectedImage(src);
  };

  const closeCarousel = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery-container">
      <div className="gallery">
        {images.map((src, index) => (
          <div key={index} className="gallery-item">
            <img
              src={src}
              alt={`Gallery ${index + 1}`}
              onClick={() => openCarousel(src)}
              className="gallery-image"
            />
          </div>
        ))}
      </div>

      {selectedImage !== null && (
        <div className="carousel-modal" onClick={closeCarousel}>
          <div className="carousel-content" onClick={(e) => e.stopPropagation()}>
            <Carousel >
              {images.map((src, index) => (
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
