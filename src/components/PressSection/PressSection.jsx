import React from "react";
import "./PressSection.css";

export default function PressSection({ pressData, popularPress }) {
  return (
    <div className="press-wrapper">
      {/* Top header with button */}
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

        {/* Right Sidebar - Popular Press */}
        <div className="popular-press">
          <h3 className="popular-heading">Popular Press</h3>
          <div className="popular-list">
            {popularPress.map((p) => (
              <div key={p.id} className="popular-card">
                <img src={p.img} alt={p.title} className="popular-img" />
                <div className="popular-text">
                  <p className="popular-title">{p.title}</p>
                  <span className="popular-date">{p.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
