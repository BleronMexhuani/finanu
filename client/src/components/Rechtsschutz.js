import React, { useState, useRef } from 'react'
import BlueBackgroundSection from './rechtsschutz/BlueBackgroundSection'
import Faq from './rechtsschutz/Faq'
import FirstSection from './rechtsschutz/FirstSection'
import LastSectionRechtss from './rechtsschutz/LastSectionRechtss'
import Privatenrechtsschutz from './rechtsschutz/Privatenrechtsschutz'
import RechtsschutzSteps from './rechtsschutz/RechtsschutzSteps'

function Rechtsschutz(props) {
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
    <div>
      <>
        <FirstSection toSteps={toSteps} darkMode={props.darkMode} />
      </>

      <>
        <Privatenrechtsschutz darkMode={props.darkMode} />
      </>

      <div className='bodyCounterPadding'>
        <LastSectionRechtss darkMode={props.darkMode} />
      </div>

      <div ref={stepsRef}>
        <RechtsschutzSteps  darkMode={props.darkMode} />
      </div>

      <div className='bodyCounterPadding'>
        <BlueBackgroundSection darkMode={props.darkMode} />
      </div>

      <>
        <Faq />
      </>

    </div>
  )
}

export default Rechtsschutz