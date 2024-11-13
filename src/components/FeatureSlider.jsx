import React, { useEffect, useState } from 'react';

export function FeatureSlider({ images, features }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [loadedImages, setLoadedImages] = useState(new Set());

  useEffect(() => {
    // Preload images
    images.forEach((src, index) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setLoadedImages(prev => new Set(prev).add(index));
      };
    });

    const timer = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(timer);
  }, [images]);

  return (
    <div className="landing__feature-row">
      <div className="landing__feature-cards">
        {features.map((feature, index) => (
          <div key={index} className="landing__feature-card">
            <div className="landing__feature-icon">
              <feature.icon />
            </div>
            <h3 className="landing__feature-title">{feature.title}</h3>
            <p className="landing__feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
      <div className="landing__feature-image">
        {images.map((image, index) => (
          <div
            key={index}
            className={`landing__feature-slide ${
              loadedImages.has(index) ? 'loaded' : ''
            } ${index === currentImage ? 'active' : ''}`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>
    </div>
  );
}