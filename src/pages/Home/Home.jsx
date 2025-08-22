import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import data from "../../json/data.json"; 
import AboutCompany from "../../components/AboutCompany/AboutCompany";
import ImpactSection from "../../components/ImpactSection/ImpactSection";
import Timeline from "../../components/Timeline/Timeline";
import StalwartSlider from "../../components/StalwartSlider/StalwartSlider";
import GallerySection from "../../components/GallerySection/GallerySection";
import PressSection from "../../components/PressSection/PressSection";
import EventsSection from "../../components/EventsSection/EventsSection";

const Home = () => {
  const heroSlides = data["1"].heroSlides;
  const aboutCompanyData = data["1"].aboutCompany;
  const impactSectionData = data["1"].impactSection;
  const timelineData = data["1"].timeline;
  const stalwartSliderData = data["1"].stalwartSlider;
  const pressSectionData = data["1"].pressSection;
  const eventsSectionData = data["1"].eventsSection;
  const gallerySectionData = data["1"].gallerySection;

  return (
    <div>
      <HeroSection slides={heroSlides} />
      <AboutCompany data={aboutCompanyData} />
      <ImpactSection data={impactSectionData} />
      <Timeline data={timelineData} />
      <StalwartSlider data={stalwartSliderData} />
      <GallerySection data={gallerySectionData}/>
     <PressSection
        pressData={pressSectionData.pressData}
        popularPress={pressSectionData.popularPress}
      />
       <EventsSection data={eventsSectionData} />
    </div>
  );
};

export default Home;
