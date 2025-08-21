import React, { useState } from "react";
import "./ImageDownloads.css";
import { FaDownload, FaTimes } from "react-icons/fa";

export default function ImageDownloads({ data }) {
  const [selectedImage, setSelectedImage] = useState(null);

  // download function
  const handleDownload = (img) => {
    const link = document.createElement("a");
    link.href = img;
    link.download = img.split("/").pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="downloads-container">
      <h2 className="downloads-title">{data.title}</h2>
      <div className="downloads-grid">
        {data.images.map((img, index) => (
          <div key={index} className="downloads-card">
            <img
              src={img}
              alt="download"
              className="downloads-img"
              onClick={() => setSelectedImage(img)}
            />
            <FaDownload
              className="download-icon"
              onClick={() => handleDownload(img)}
            />
          </div>
        ))}
      </div>

      {/* Popup Modal */}
      {selectedImage && (
        <div className="popup-overlay" onClick={() => setSelectedImage(null)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <FaTimes
              className="close-icon"
              onClick={() => setSelectedImage(null)}
            />
            <img src={selectedImage} alt="Selected" className="popup-img" />
          </div>
        </div>
      )}
    </div>
  );
}
