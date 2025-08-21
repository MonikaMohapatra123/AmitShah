import React from "react";
import "./AboutIntro.css";

const AboutIntro = ({ data }) => {
  if (!data) return null;

  return (
    <div className="about-intro">
      <div className="about-text">
        <h2>{data.title}</h2>
        {data.paragraphs.map((para, idx) => (
          <p key={idx}>{para}</p>
        ))}
      </div>
      <div className="about-image">
        <img src={data.image} alt={data.title} />
      </div>
    </div>
  );
};

export default AboutIntro;
