import React from 'react'
import '../assets/css/mainComponents.css'
import AutoRadioBoxes from './auto/AutoRadioBoxes'
import Funktionert from './auto/Funktionert'
import Tipps from './auto/Tipps'
import SliderHausrat from './hausrat/SliderHausrat'

function Auto(props) {
  return (
    <div>
      <AutoRadioBoxes />
      <Funktionert  darkMode={props.darkMode} />
      <Tipps />
      <SliderHausrat />
    </div>
  )
}

export default Auto