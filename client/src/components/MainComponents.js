import React from 'react'
import HomeFirstSection from './homepage/HomeFirstSection'
import HomeFourthSection from './homepage/HomeFourthSection'
import KrankenSteps from './kranken/KrankenkasseSteps'

import '../assets/css/mainComponents.css'
import HomeSlider from './homepage/HomeSlider'
function MainComponents(props) {
  return (
    <>
      <div className='bodyCounterPadding'>
        <HomeFirstSection darkMode={props.darkMode} />
        <HomeSlider />
      </div>

      <div className='wrapDiv bodyCounterPadding container-xl px-4 px-xl-0'>
        <KrankenSteps />
      </div>
      <div className='bodyCounterPadding'>
        <HomeFourthSection />
      </div>
    </>
  )
}

export default MainComponents