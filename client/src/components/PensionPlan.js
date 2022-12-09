import React, { useRef } from 'react'
import PensionChart from './pensionPlan/PensionChart'
import '../assets/css/pension.css'
import '../assets/css/mainComponents.css'
import PensionCards from './pensionPlan/PensionCards'
import PensionLastBlue from './pensionPlan/PensionLastBlue'
import FirstSectionPension from './pensionPlan/FirstSectionPension'
function PensionPlan(props) {
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
                <FirstSectionPension darkMode={props.darkMode} toSteps={toSteps} />
            </>
            <div className='pensionPlanBlueBg'>

                <div ref={stepsRef} className='bodyCounterPadding'>
                    <PensionChart darkMode={props.darkMode} />
                </div>
                <div className='bodyCounterPadding'>
                    <PensionCards darkMode={props.darkMode} />
                </div>

                <>
                    <PensionLastBlue darkMode={props.darkMode} />
                </>
            </div>
        </>

    )
}

export default PensionPlan