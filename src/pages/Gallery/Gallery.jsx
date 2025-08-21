import React from "react";
import GalleryHeader from "../../components/GalleryHeader/GalleryHeader";
import ImageDownloads from "../../components/ImageDownloads/ImageDownloads";
import data from "../../json/data.json";

const Gallery = () => {
  const galleryData = data["4"].downloads; // fetch downloads data
  return (
    <div>
      <GalleryHeader />
      <ImageDownloads data={galleryData} />
    </div>
  );
};

export default Gallery;
