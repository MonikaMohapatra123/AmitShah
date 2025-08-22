import React from "react";
import AboutIntro from "../../components/AboutIntro/AboutIntro";
import data from "../../json/data.json"; // adjust path
import Timeline from "../../components/Timeline/Timeline";
import { useLanguage } from "../LanguageContext/LanguageContext";

const About = () => {
  const { data } = useLanguage();
  const aboutData = data["3"].aboutIntro;
  const timelineData = data["3"].timeline;

  return (
    <div>
      <AboutIntro data={aboutData} />
      <Timeline data={timelineData} />
    </div>
  );
};

export default About;
