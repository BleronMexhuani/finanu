import React, {useRef} from 'react'
import HausratBlueForm from './hausrat/HausratBlueForm'
import AktuelleHypothek from './hausrat/AktuelleHypothek'
import HausratCards from './hausrat/HausratCards'
import '../assets/css/hausrat.css'
import SliderHausrat from './hausrat/SliderHausrat'
import FirstSectionHaus from './hausrat/FirstSectionHaus'
function Hausrat(props) {
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
            <FirstSectionHaus toSteps={toSteps} darkMode={props.darkMode} />
        </>
        <div ref={stepsRef}>
            <HausratBlueForm darkMode={props.darkMode} />
        </div>
        <>
            <AktuelleHypothek darkMode={props.darkMode} />
        </>
        
        <>
            <HausratCards darkMode={props.darkMode} />
        </>
        <>
            <SliderHausrat />
        </>
    </>
  )
}

export default Hausrat