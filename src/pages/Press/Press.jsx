import React from 'react'
import PressHeader from '../../components/PressHeader/PressHeader'
import NewsPress from '../../components/NewsPress/NewsPress'
import data from "../../json/data.json"; 

const Press = () => {
  const pressSectionData = data["5"].pressSection;
  return (
    <div>
        <PressHeader/>
        <NewsPress
         pressData={pressSectionData.pressData}
        popularPress={pressSectionData.popularPress}
        />
    </div>
  )
}

export default Press