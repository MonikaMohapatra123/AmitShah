import React from "react";
import "./NewsPress.css";

export default function NewsPress({ pressData, popularPress }) {
  return (
    <div className="news-press-wrapper">
      <div className="news-press-container">
        {/* Left News Grid */}
        <div className="news-press-grid">
          {pressData.map((item) => (
            <div key={item.id} className="news-press-card">
              <img src={item.image} alt={item.title} className="news-press-img" />
              <div className="news-press-content">
                <h3>{item.title}</h3>
                <p className="news-press-date">{item.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Sidebar */}
        <div className="news-popular">
          <h3>Popular News</h3>
          {popularPress.map((p) => (
            <div key={p.id} className="news-popular-card">
              <img src={p.image} alt={p.title} className="news-popular-img" />
              <div className="news-popular-text">
                <p>{p.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
