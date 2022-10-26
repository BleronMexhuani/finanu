import React from 'react'
import '../assets/css/mainComponents.css'
import AutoRadioBoxes from './auto/AutoRadioBoxes'
import Funktionert from './auto/Funktionert'
import Tipps from './auto/Tipps'
import SliderHausrat from './hausrat/SliderHausrat'

function Auto() {
  return (
    <div>
      <AutoRadioBoxes />
      <Tipps />
      <Funktionert />
      <SliderHausrat />
    </div>
  )
}

export default Auto