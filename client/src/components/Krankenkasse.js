import React, { useRef } from 'react'
import '../assets/css/krankenkasse.css'
import '../assets/css/mainComponents.css'
import KrankenSteps from './kranken/KrankenkasseSteps'
import KrankenBlueBg from './kranken/KrankenBlueBg'
import GutZuWissen from './kranken/GutZuWissen'
import KrankenCards from './kranken/KrankenCards'
import Option2Kranken from './kranken/Option2Kranken'
import Option1Kranken from './kranken/Option1Kranken'
import Spitalversicherungen from './kranken/Spitalversicherungen'
import FirstSectionKranken from './kranken/FirstSectionKranken'
// import { ReactComponent as FirstDark } from '../assets/images/kraken/LifecycleDarkmode.svg'

function Krankenkasse(props) {
  const stepsRef = useRef()

  const toSteps = () => {
    var elem = stepsRef
    window.scrollTo(
      {
        top: elem.current.offsetTop - 100,
        behavior: "smooth"
      })
  }
  return (
    <>
      <>
        <FirstSectionKranken toSteps={toSteps} />
      </>
      <>
        <KrankenBlueBg />
      </>

      <>
        <KrankenCards darkMode={props.darkMode} />
      </>

      <div ref={stepsRef} className='bodyCounterPadding container-xl px-4 px-xl-0'>
        <KrankenSteps darkMode={props.darkMode} />
      </div>
      <>
        <Spitalversicherungen darkMode={props.darkMode} />
      </>
      <div className='bodyCounterPadding'>
        <Option1Kranken darkMode={props.darkMode} />
      </div>
      <div className="pb-5">
        <div className='bodyCounterPadding'>
          <Option2Kranken darkMode={props.darkMode} />
        </div>
      </div>
      <>
        <GutZuWissen />
      </>
    </>
  )
}

export default Krankenkasse