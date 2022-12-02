import React, { lazy } from 'react'
import HomeFirstSection from './homepage/HomeFirstSection'
import '../assets/css/mainComponents.css'

const HomeSlider = lazy(() => import('./homepage/HomeSlider'))
const KrankenSteps = lazy(() => import('./kranken/KrankenkasseSteps'))
const HomeFourthSection = lazy(() => import('./homepage/HomeFourthSection'))

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