import React, { useState } from "react";
import "./AboutCompany.css";
import { FaTimes } from "react-icons/fa";

const AboutCompany = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  if (!data) return null; // Safety check

  return (
    <div className="about-company-container">
      <div className="about-company">
        {/* Left: Video Thumbnail */}
        <div className="about-company-left" onClick={openModal}>
          <img
            src={data.thumbnail}
            alt="Video Thumbnail"
            className="about-company-thumbnail"
          />
          <div className="about-company-play-button">
            <div className="play-icon-triangle"></div>
          </div>
        </div>

        {/* Right: Description */}
        <div className="about-company-right">
          <p><strong>"{data.paragraph}"</strong></p>
        </div>

        {/* Modal */}
        {isOpen && (
          <div className="about-company-modal">
            <div className="about-company-modal-content">
              <span className="about-company-close" onClick={closeModal}>
                <FaTimes size={25} />
              </span>
              <video controls autoPlay className="about-company-video">
                <source src={data.video} type="video/mp4" />
                Your browser does not support HTML video.
              </video>
            </div>
          </div>
        )}
      </div>

      {/* Dot indicators below */}
      <div className="about-company-dots">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
  );
};

export default AboutCompany;
