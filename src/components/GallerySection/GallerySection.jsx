import React, { useRef, useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import "./GallerySection.css";

export default function GallerySection({ data }) {
  const photoSliderRef = useRef(null);
  const photos = data.photos;
  const [selectedPhoto, setSelectedPhoto] = useState(data.defaultSelected);

  const scrollSlider = (ref, dir) => {
    if (ref.current) {
      const slider = ref.current;
      const firstItem = slider.querySelector(".slider-item");
      if (!firstItem) return;

      const style = window.getComputedStyle(firstItem);
      const gap = parseInt(style.marginBottom) || 12;
      const itemHeight = firstItem.offsetHeight + gap;

      slider.scrollBy({
        top: dir === "next" ? itemHeight : -itemHeight,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="gallery-wrap">
      {/* LEFT SIDE */}
      <div className="left-col">
        <h2>Photo Gallery</h2>
        <div className="video-row">
          <img className="photo-viewer" src={selectedPhoto} alt="Selected" />
          <div className="slider-column">
            <button
              className="nav-btn"
              onClick={() => scrollSlider(photoSliderRef, "prev")}
            >
              <FaChevronUp />
            </button>
            <div className="slider vertical" ref={photoSliderRef}>
              {photos.map((p) => (
                <img
                  key={p.id}
                  src={p.src}
                  alt="gallery"
                  className="slider-item"
                  onClick={() => setSelectedPhoto(p.src)}
                />
              ))}
            </div>
            <button
              className="nav-btn"
              onClick={() => scrollSlider(photoSliderRef, "next")}
            >
              <FaChevronDown />
            </button>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="right-col">
        <div className="biz-card">
          <h2>Donate</h2>
          <div className="rating">Rating: ★★★★☆</div>
          {data.donateButtons.map((btn, idx) => (
            <a
              key={idx}
              href={btn.link}
              target="_blank"
              rel="noopener noreferrer"
              className="book-now"
            >
              {btn.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
