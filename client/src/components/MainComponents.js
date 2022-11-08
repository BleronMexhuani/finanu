import React from 'react'
import HomeFirstSection from './homepage/HomeFirstSection'
import HomeThirdSection from './homepage/HomeThirdSection'
import HomeFourthSection from './homepage/HomeFourthSection'
import '../assets/css/mainComponents.css'
function MainComponents(props) {
  return (
    <>
      <div className='bodyCounterPadding'>
        <HomeFirstSection darkMode={props.darkMode} />
      </div>
      
      <div className='wrapDiv bodyCounterPadding container-xl px-4 px-xl-0'>
        <HomeThirdSection />
      </div>
      <div className='pb-5'>
        <HomeFourthSection />
      </div>
    </>
  )
}

export default MainComponents