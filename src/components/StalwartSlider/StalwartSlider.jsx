import React, { useState, useEffect } from "react";
import "./StalwartSlider.css";

const StalwartSlider = ({ data }) => {
  const [current, setCurrent] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  // Update number of visible cards based on window width
  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth <= 768) {
        setVisibleCards(1);
      } else if (window.innerWidth <= 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(timer);
  });

  const nextSlide = () => {
    setCurrent((prev) =>
      prev + 1 >= data.length - (visibleCards - 1) ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? data.length - visibleCards : prev - 1));
  };

  return (
    <div className="stalwart-slider-container">
      <div className="stalwart-slider-header">
        <h3>STALWART SAYS</h3>
      </div>

      <div className="stalwart-slider-wrapper">
        <div
          className="stalwart-slider-track"
          style={{
            transform: `translateX(-${current * (100 / visibleCards)}%)`,
          }}
        >
          {data.map((item, index) => (
            <div
              key={index}
              className="stalwart-slide"
              style={{ flex: `0 0 ${100 / visibleCards}%` }}
            >
              <img
                src={item.img}
                alt={item.author}
                className="stalwart-slide-img"
              />
              <div className="stalwart-slide-content">
                <p className="stalwart-slide-text">{item.text}</p>
                <p className="stalwart-slide-author">{item.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="stalwart-slider-buttons">
        <button onClick={prevSlide} className="stalwart-prev">
          &#10094;
        </button>
        <button onClick={nextSlide} className="stalwart-next">
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default StalwartSlider;
