import React, { useState } from "react";
import "./Timeline.css";

const Timeline = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleYearClick = (index) => {
    setActiveIndex(index);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : data.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < data.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="timeline-container">
      {/* Top Header */}
      <div className="timeline-top">
        <div className="timeline-heading">JOURNEY</div>
        <div className="nav-buttons">
          <button onClick={handlePrev}>⟨</button>
          <button onClick={handleNext}>⟩</button>
        </div>
      </div>

      {/* Years Row */}
      <div className="timeline-years">
        {data.map((item, index) => (
          <span
            key={item.year}
            className={`year ${index === activeIndex ? "active" : ""}`}
            onClick={() => handleYearClick(index)}
          >
            {item.year}
          </span>
        ))}
      </div>

      {/* Card */}
      <div className="timeline-card">
        <img src={data[activeIndex].img} alt={data[activeIndex].year} />
        <div className="card-content">
          {/* Orange Year Badge in Right Corner */}
          <div className="year-badge">{data[activeIndex].year}</div>
          <h3>{data[activeIndex].title}</h3>
          <p>{data[activeIndex].desc}</p>
          <a href="/" className="read-more">Read More</a>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
