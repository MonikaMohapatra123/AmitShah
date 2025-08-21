import React from "react";
import "./PressSection.css";

export default function PressSection({ pressData, popularPress }) {
  return (
    <div className="press-wrapper">
      {/* Top header with image button */}
      <div className="pressSection-header">
        <button className="press-btn">PRESS</button>
      </div>

      <div className="press-container">
        {/* Left Press Grid */}
        <div className="press-grid">
          {pressData.map((item) => (
            <div key={item.id} className="press-card">
              <img src={item.img} alt={item.title} className="press-img" />
              <div className="press-content">
                <h3>{item.title}</h3>
                <p className="press-date">{item.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Sidebar */}
        <div className="popular-press">
          <h3>Popular Press</h3>
          {popularPress.map((p) => (
            <div key={p.id} className="popular-card">
              <img src={p.img} alt={p.title} className="popular-img" />
              <div className="popular-text">
                <p>{p.title}</p>
                <span>{p.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
