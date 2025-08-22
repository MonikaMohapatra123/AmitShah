import React, { useRef, useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import "./GallerySection.css";

export default function GallerySection({ data }) {
  const photoSliderRef = useRef(null);
  const photos = data.photos;
  const [selectedPhoto, setSelectedPhoto] = useState(data.defaultSelected);

  const scrollSlider = (dir) => {
    if (photoSliderRef.current) {
      const slider = photoSliderRef.current;
      const firstItem = slider.querySelector(".gallery-slider-item");
      if (!firstItem) return;

      const itemHeight = firstItem.offsetHeight + 12;
      slider.scrollBy({
        top: dir === "next" ? itemHeight : -itemHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="gallery-wrap">
      {/* LEFT SIDE */}
      <div className="gallery-left-col">
        <h2 className="gallery-title">Photo Gallery</h2>
        <div className="gallery-content">
          {/* Big Image */}
          <div className="gallery-main-image">
            <img src={selectedPhoto} alt="Selected" />
          </div>

          {/* Thumbnail Slider */}
          <div className="gallery-slider-column">
            <button
              className="gallery-nav-btn"
              onClick={() => scrollSlider("prev")}
            >
              <FaChevronUp />
            </button>
            <div className="gallery-slider vertical" ref={photoSliderRef}>
              {photos.map((p) => (
                <img
                  key={p.id}
                  src={p.src}
                  alt="gallery"
                  className={`gallery-slider-item ${
                    selectedPhoto === p.src ? "active" : ""
                  }`}
                  onClick={() => setSelectedPhoto(p.src)}
                />
              ))}
            </div>
            <button
              className="gallery-nav-btn"
              onClick={() => scrollSlider("next")}
            >
              <FaChevronDown />
            </button>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="gallery-right-col">
        <div className="gallery-biz-card">
          <h2>Donate</h2>
          <div className="gallery-rating">Rating: ★★★★★</div>
          {data.donateButtons.map((btn, idx) => (
            <a
              key={idx}
              href={btn.link}
              target="_blank"
              rel="noopener noreferrer"
              className="gallery-book-now"
            >
              {btn.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
