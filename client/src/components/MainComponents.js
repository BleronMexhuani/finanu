import React, { lazy, Suspense } from 'react'
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
        
        <Suspense fallback={<div>Loading...</div>}>
          <HomeSlider />
        </Suspense>

      </div>

      <div className='wrapDiv bodyCounterPadding container-xl px-4 px-xl-0'>

        <Suspense fallback={<div>Loading...</div>}>
          <KrankenSteps darkMode={props.darkMode} />
        </Suspense>
      </div>
      <div className='bodyCounterPadding'>
        <Suspense fallback={<div>Loading...</div>}>
          <HomeFourthSection />
        </Suspense>
      </div>
    </>
  )
}

export default MainComponents