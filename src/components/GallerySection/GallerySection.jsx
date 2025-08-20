
// import React, { useRef, useEffect, useState } from "react";
// import { FaChevronUp, FaChevronDown } from "react-icons/fa";
// import "./GallerySection.css";

// export default function GallerySection() {
//   const rightRef = useRef(null);
//   const containerRef = useRef(null);
//   const [isFixed, setIsFixed] = useState(false);
//   const [stopTop, setStopTop] = useState(0);

//   useEffect(() => {
//     const onScroll = () => {
//       const container = containerRef.current;
//       const rightCard = rightRef.current;
//       if (!container || !rightCard) return;

//       const containerRect = container.getBoundingClientRect();
//       const rightHeight = rightCard.offsetHeight;
//       const topOffset = 100;

//       if (containerRect.top <= topOffset) {
//         if (containerRect.bottom > rightHeight + topOffset) {
//           setIsFixed(true);
//           setStopTop(topOffset);
//         } else {
//           setIsFixed(false);
//           setStopTop(containerRect.bottom - rightHeight);
//         }
//       } else {
//         setIsFixed(false);
//         setStopTop(0);
//       }
//     };

//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   const [selectedVideo, setSelectedVideo] = useState(null);
//   const [selectedPhoto, setSelectedPhoto] = useState(null);

//   const videos = [
//     { id: 1, thumb: "https://img.youtube.com/vi/tgbNymZ7vqY/0.jpg", url: "https://www.youtube.com/embed/tgbNymZ7vqY" },
//     { id: 2, thumb: "https://img.youtube.com/vi/ScMzIvxBSi4/0.jpg", url: "https://www.youtube.com/embed/ScMzIvxBSi4" },
//     { id: 3, thumb: "https://img.youtube.com/vi/ysz5S6PUM-U/0.jpg", url: "https://www.youtube.com/embed/ysz5S6PUM-U" },
//   ];

//   const photos = [
//     { id: 1, src: "https://picsum.photos/id/1015/400/250" },
//     { id: 2, src: "https://picsum.photos/id/1016/400/250" },
//     { id: 3, src: "https://picsum.photos/id/1020/400/250" },
//   ];

//   const scrollSlider = (ref, dir) => {
//     if (ref.current) {
//       const scrollAmount = 100;
//       ref.current.scrollBy({ top: dir === "next" ? scrollAmount : -scrollAmount, behavior: "smooth" });
//     }
//   };

//   const videoSliderRef = useRef(null);
//   const photoSliderRef = useRef(null);

//   return (
//     <section className="gallery-wrap" ref={containerRef}>
//       <div className="left-col">
//         {/* VIDEO GALLERY */}
//         <h2>Video Gallery</h2>
//         <div className="video-row">
//           {selectedVideo ? (
//             <iframe className="video-player" src={selectedVideo} title="Video player" allowFullScreen />
//           ) : (
//             <p className="placeholder">Select a video to play</p>
//           )}
//           <div className="slider-column">
//             <button className="nav-btn" onClick={() => scrollSlider(videoSliderRef, "prev")}><FaChevronUp /></button>
//             <div className="slider vertical" ref={videoSliderRef}>
//               {videos.map((v) => (
//                 <img key={v.id} src={v.thumb} alt="video thumb" className="slider-item" onClick={() => setSelectedVideo(v.url)} />
//               ))}
//             </div>
//             <button className="nav-btn" onClick={() => scrollSlider(videoSliderRef, "next")}><FaChevronDown /></button>
//           </div>
//         </div>

//         {/* PHOTO GALLERY */}
//         <h2>Photo Gallery</h2>
//         <div className="video-row">
//           {selectedPhoto ? (
//             <img className="photo-viewer" src={selectedPhoto} alt="Selected" />
//           ) : (
//             <p className="placeholder">Select a photo to view</p>
//           )}
//           <div className="slider-column">
//             <button className="nav-btn" onClick={() => scrollSlider(photoSliderRef, "prev")}><FaChevronUp /></button>
//             <div className="slider vertical" ref={photoSliderRef}>
//               {photos.map((p) => (
//                 <img key={p.id} src={p.src} alt="gallery" className="slider-item" onClick={() => setSelectedPhoto(p.src)} />
//               ))}
//             </div>
//             <button className="nav-btn" onClick={() => scrollSlider(photoSliderRef, "next")}><FaChevronDown /></button>
//           </div>
//         </div>
//       </div>

//       {/* RIGHT SIDE */}
//       <div className="right-col" ref={rightRef} style={{ position: isFixed ? "fixed" : "absolute", top: stopTop }}>
//         <div className="biz-card">
//           <h2>Donate</h2>
//           <div className="rating">............</div>
//           <button className="book-now">PM CARES</button>
//           <button className="book-now">BHARAT KE VEER</button>
//           <button className="book-now">BJP</button>
//         </div>
//       </div>
//     </section>
//   );
// }








// src/components/GallerySection.jsx
import React, { useRef, useEffect, useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import "./GallerySection.css";

export default function GallerySection() {
  const rightRef = useRef(null);
  const containerRef = useRef(null);
  const [isFixed, setIsFixed] = useState(false);
  const [stopTop, setStopTop] = useState(0);

  // Sticky right card logic
  useEffect(() => {
    const onScroll = () => {
      const container = containerRef.current;
      const rightCard = rightRef.current;
      if (!container || !rightCard) return;

      const containerRect = container.getBoundingClientRect();
      const rightHeight = rightCard.offsetHeight;
      const topOffset = 100;

      if (containerRect.top <= topOffset) {
        if (containerRect.bottom > rightHeight + topOffset) {
          setIsFixed(true);
          setStopTop(topOffset);
        } else {
          setIsFixed(false);
          setStopTop(containerRect.bottom - rightHeight);
        }
      } else {
        setIsFixed(false);
        setStopTop(0);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const photos = [
    { id: 1, src: "/amit-1.jpeg" },
    { id: 2, src: "/amit-2.jpeg" },
    { id: 3, src: "/amit-3.jpeg" },
    { id: 4, src: "/amit-4.jpeg" },
    { id: 5, src: "/amit-1.jpg" },
   
  ];

  const [selectedPhoto, setSelectedPhoto] = useState(photos[0].src);
  const photoSliderRef = useRef(null);

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
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="gallery-wrap" ref={containerRef}>
      {/* LEFT SIDE */}
      <div className="left-col">
        <h2>Photo Gallery</h2>
        <div className="video-row">
          <img className="photo-viewer" src={selectedPhoto} alt="Selected" />
          <div className="slider-column">
            <button className="nav-btn" onClick={() => scrollSlider(photoSliderRef, "prev")}><FaChevronUp /></button>
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
            <button className="nav-btn" onClick={() => scrollSlider(photoSliderRef, "next")}><FaChevronDown /></button>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div
        className="right-col"
        ref={rightRef}
        style={{ position: isFixed ? "fixed" : "absolute", top: stopTop }}
      >
        <div className="biz-card">
          <h2>Donate</h2>
          <div className="rating">Rating: ★★★★☆</div>
          <button className="book-now">PM CARES</button>
          <button className="book-now">BHARAT KE VEER</button>
          <button className="book-now">BJP</button>
        </div>
      </div>
    </section>
  );
}
