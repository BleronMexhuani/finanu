import React from 'react'
import HausratBlueForm from './hausrat/HausratBlueForm'
import AktuelleHypothek from './hausrat/AktuelleHypothek'
import HausratCards from './hausrat/HausratCards'
import '../assets/css/hausrat.css'
import SliderHausrat from './hausrat/SliderHausrat'
function Hausrat(props) {
  return (
    <>
        <div>
            <HausratBlueForm darkMode={props.darkMode} />
        </div>
        <div>
            <AktuelleHypothek darkMode={props.darkMode} />
        </div>
        <div>
            <HausratCards />
        </div>
        <div>
            <SliderHausrat />
        </div>
    </>
  )
}

export default Hausrat