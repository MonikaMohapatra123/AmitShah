import React, { useState } from "react";
import "./EventsSection.css";

const EventsSection = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

  return (
    <div className="events-container">
      {/* Left Side - Events */}
      <div className="events-left">
        <div className="section-header">
          <h3>EVENTS</h3>
          
        </div>

        {data.events.map((event) => (
          <div className="event-card" key={event.id}>
            <img src={event.img} alt="event" />
            <div className="event-details">
              <h4>{event.title}</h4>
              <p>{event.date}</p>
              <span className="share-icon">↗</span>
            </div>
          </div>
        ))}
      </div>

      {/* Right Side - Live Video */}
      <div className="events-right">
        <div className="section-header">
          <h3>WATCH LIVE</h3>
        </div>

        <div className="live-box" onClick={openPopup}>
          <span className="live-tag">{data.watchLive.tag}</span>
          <img src={data.watchLive.thumbnail} alt="Live" />
          <div className="live-overlay">
            <h4>{data.watchLive.title}</h4>
            <h2>{data.watchLive.name}</h2>
            <p dangerouslySetInnerHTML={{ __html: data.watchLive.status }} />
          </div>
        </div>
      </div>

      {/* Popup Video */}
      {isOpen && (
        <div className="video-popup">
          <div className="video-content">
            <span className="close-btn" onClick={closePopup}>✖</span>
            <video width="100%" height="100%" controls autoPlay>
              <source src={data.watchLive.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventsSection;
