// components/common/ImageGallery.jsx
import React, { useState } from 'react';
import './ImageGallery.css';

const ImageGallery = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextImage = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevImage = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  
  return (
    <div className="image-gallery">
      <div className="gallery-main">
        <img 
          src={images[currentIndex].src} 
          alt={images[currentIndex].alt} 
        />
        <p className="image-caption">{images[currentIndex].caption}</p>
      </div>
      
      <div className="gallery-controls">
        <button onClick={prevImage}>&lt; Anterior</button>
        <div className="gallery-thumbnails">
          {images.map((image, index) => (
            <img 
              key={index}
              src={image.src} 
              alt={`thumbnail ${index}`}
              className={currentIndex === index ? 'active' : ''}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
        <button onClick={nextImage}>Próximo &gt;</button>
      </div>
    </div>
  );
};

export default ImageGallery;
