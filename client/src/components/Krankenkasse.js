import React from 'react'
import '../assets/css/krankenkasse.css'
import '../assets/css/mainComponents.css'
import KrankenSteps from './kranken/KrankenkasseSteps'
import KrankenBlueBg from './kranken/KrankenBlueBg'
import GutZuWissen from './kranken/GutZuWissen'
import KrankenCards from './kranken/KrankenCards'
import Option2Kranken from './kranken/Option2Kranken'
import Option1Kranken from './kranken/Option1Kranken'
function Krankenkasse(props) {
  return (
    <>
      <div className='mx-4 mx-lg-0'>
        <KrankenSteps />
      </div>
      <div>
        <KrankenBlueBg />
      </div>
      <div>
        <GutZuWissen />
      </div>
      <div>
      </div>
      <div className=''>
        <KrankenCards />
      </div>
      <div className='bodyCounterPadding'>
        <Option1Kranken darkMode={props.darkMode} />

      </div>
      <div className='bodyCounterPadding'>
        <Option2Kranken darkMode={props.darkMode} />
      </div>
    </>
  )
}

export default Krankenkasse