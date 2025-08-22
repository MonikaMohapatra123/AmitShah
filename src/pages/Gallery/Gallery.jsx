import React from "react";
import GalleryHeader from "../../components/GalleryHeader/GalleryHeader";
import ImageDownloads from "../../components/ImageDownloads/ImageDownloads";
import data from "../../json/data.json";
import { useLanguage } from "../LanguageContext/LanguageContext";

const Gallery = () => {
    const { data } = useLanguage();
  const galleryData = data["4"].downloads; // fetch downloads data
  return (
    <div>
      <GalleryHeader />
      <ImageDownloads data={galleryData} />
    </div>
  );
};

export default Gallery;
