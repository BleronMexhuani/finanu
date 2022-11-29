import React from 'react'
import '../assets/css/krankenkasse.css'
import '../assets/css/mainComponents.css'
import KrankenSteps from './kranken/KrankenkasseSteps'
import KrankenBlueBg from './kranken/KrankenBlueBg'
import GutZuWissen from './kranken/GutZuWissen'
import KrankenCards from './kranken/KrankenCards'
import Option2Kranken from './kranken/Option2Kranken'
import Option1Kranken from './kranken/Option1Kranken'
import { ReactComponent as First } from '../assets/images/kraken/drinushe.svg'

function Krankenkasse(props) {
  return (
    <>
      <div className="container-xl px-4 px-xl-0">
        <div className='krankenFirstIluDiv'>
          <First className="img-fluid" />
        </div>
      </div>
      <div className='bodyCounterPadding container-xl px-4 px-xl-0'>
        <KrankenSteps />
      </div>

      <>
        <>
          <KrankenBlueBg />
        </>
        <>
          <GutZuWissen />
        </>
      </>

      <div>
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