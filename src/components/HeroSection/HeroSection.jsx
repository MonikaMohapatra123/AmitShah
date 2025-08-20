import React, { useState, useEffect } from "react";
import "./HeroSection.css";

const HeroSection = ({ slides = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slider interval
  useEffect(() => {
    if (!slides.length) return; // safety check
    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        (prevIndex + 1) % slides.length
      );
    }, 3000);

    return () => clearTimeout(timer);
  }, [currentIndex, slides]);

  // Dot click
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  if (!slides.length) return <p>No slides available.</p>;

  return (
    <div className="hero-container">
      <div
        className="hero-slider"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div className="hero-slide" key={index}>
            <img
              src={slide.image}
              alt={`Slide ${index}`}
              className="hero-image"
            />
            <div className="hero-text-overlay">
              <p className="hero-text-1">“{slide.paragraph}”</p>
            </div>
          </div>
        ))}
      </div>

      {/* Dot Indicators */}
      <div className="hero-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`hero-dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
