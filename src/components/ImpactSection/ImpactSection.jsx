// src/components/ImpactSection.jsx
import React, { useState } from "react";
import "./ImpactSection.css";
import { FaChevronDown, FaTimes } from "react-icons/fa";

const ImpactSection = ({ data }) => {
  const [openCircle, setOpenCircle] = useState(false);
  const [openCard, setOpenCard] = useState(null);

  if (!data) return null;

  const { circle, cards } = data;

  return (
    <div className="impact-section-container">
      {/* Circle */}
      <div className="impact-circle animated">
        <h2>{circle.title}</h2>
        <p>{circle.desc}</p>

        <div
          className="impact-dropdown-toggle"
          onClick={() => setOpenCircle(!openCircle)}
        >
          <FaChevronDown />
        </div>

        {openCircle && (
          <div className="impact-dropdown-content">
            <button
              className="impact-close-btn"
              onClick={() => setOpenCircle(false)}
            >
              <FaTimes />
            </button>
            <p>{circle.dropdown}</p>
          </div>
        )}

        {/* edges */}
        <div className="impact-edge left"></div>
        <div className="impact-edge top"></div>
        <div className="impact-edge right"></div>
        <div className="impact-edge bottom"></div>
      </div>

      {/* Cards */}
      <div className="impact-cards-container">
        {cards.map((card, i) => (
          <div key={i} className="impact-card animated">
            <h3>{card.title}</h3>
            <p>{card.desc}</p>

            <div
              className="impact-dropdown-toggle"
              onClick={() => setOpenCard(openCard === i ? null : i)}
            >
              <FaChevronDown />
            </div>

            {openCard === i && (
              <div className="impact-dropdown-content">
                <button
                  className="impact-close-btn"
                  onClick={() => setOpenCard(null)}
                >
                  <FaTimes />
                </button>
                <p>{card.dropdown}</p>
              </div>
            )}

            {/* edges */}
            <div className="impact-edge left"></div>
            <div className="impact-edge top"></div>
            <div className="impact-edge right"></div>
            <div className="impact-edge bottom"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImpactSection;
