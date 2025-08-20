// src/components/ImpactSection.jsx
import React, { useState } from "react";
import "./ImpactSection.css";
import { FaChevronDown, FaTimes } from "react-icons/fa";

const ImpactSection = ({ data }) => {
  const [openCircle, setOpenCircle] = useState(false);
  const [openCard, setOpenCard] = useState(null);

  if (!data) return null; // safety check

  const { circle, cards } = data;

  return (
    <div className="impact-container">
      {/* Circle */}
      <div className="circle animated">
        <h2>{circle.title}</h2>
        <p>{circle.desc}</p>

        {/* Dropdown toggle */}
        <div className="dropdown-toggle" onClick={() => setOpenCircle(!openCircle)}>
          <FaChevronDown />
        </div>

        {openCircle && (
          <div className="dropdown-content">
            <button className="close-btn" onClick={() => setOpenCircle(false)}>
              <FaTimes />
            </button>
            <p>{circle.dropdown}</p>
          </div>
        )}

        {/* edges */}
        <div className="edge left"></div>
        <div className="edge top"></div>
        <div className="edge right"></div>
        <div className="edge bottom"></div>
      </div>

      {/* Cards */}
      <div className="cards-container">
        {cards.map((card, i) => (
          <div key={i} className="card animated">
            <h3>{card.title}</h3>
            <p>{card.desc}</p>

            <div
              className="dropdown-toggle"
              onClick={() => setOpenCard(openCard === i ? null : i)}
            >
              <FaChevronDown />
            </div>

            {openCard === i && (
              <div className="dropdown-content">
                <button className="close-btn" onClick={() => setOpenCard(null)}>
                  <FaTimes />
                </button>
                <p>{card.dropdown}</p>
              </div>
            )}

            {/* edges */}
            <div className="edge left"></div>
            <div className="edge top"></div>
            <div className="edge right"></div>
            <div className="edge bottom"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImpactSection;
