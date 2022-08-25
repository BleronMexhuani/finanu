import React from 'react'
import HomeFirstSection from './homepage/HomeFirstSection'
import HomeSecondSection from './homepage/HomeSecondSection'
import HomeThirdSection from './homepage/HomeThirdSection'
import HomeFourthSection from './homepage/HomeFourthSection'
import '../assets/css/mainComponents.css'
function MainComponents(props) {
  return (
    <>
      <div className='pb-5'>
        <HomeFirstSection darkMode={props.darkMode} />
      </div>
      <div>
        <HomeSecondSection />
      </div>
      <div className='wrapDiv pb-5 container-xl px-4 px-xl-0'>
        <HomeThirdSection />
      </div>
      <div className='pb-5'>
        <HomeFourthSection />
      </div>
    </>
  )
}

export default MainComponents