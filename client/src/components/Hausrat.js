import React from 'react'
import HausratBlueForm from './hausrat/HausratBlueForm'
import AktuelleHypothek from './hausrat/AktuelleHypothek'
import HausratCards from './hausrat/HausratCards'
import '../assets/css/hausrat.css'
import SliderHausrat from './hausrat/SliderHausrat'
function Hausrat() {
  return (
    <>
        <div>
            <HausratBlueForm />
        </div>
        <div>
            <AktuelleHypothek />
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