import React, {useRef} from 'react'
import '../assets/css/mainComponents.css'
import AutoRadioBoxes from './auto/AutoRadioBoxes'
import AutoStep from './auto/AutoStep'
import FirstSectionAuto from './auto/FirstSectionAuto'
import Funktionert from './auto/Funktionert'
import Tipps from './auto/Tipps'
import SliderHausrat from './hausrat/SliderHausrat'

function Auto(props) {
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
      <FirstSectionAuto toSteps={toSteps} />
      <AutoRadioBoxes />
      <Funktionert  darkMode={props.darkMode} />
      <div ref={stepsRef}>
        <AutoStep />
      </div>
      <Tipps />
      <SliderHausrat />
    </>
  )
}

export default Auto