import React from 'react'
import PensionChart from './pensionPlan/PensionChart'
import '../assets/css/pension.css'
import '../assets/css/mainComponents.css'
import PensionCards from './pensionPlan/PensionCards'
import PensionLastBlue from './pensionPlan/PensionLastBlue'
function PensionPlan(props) {
    return (
        <div>
            <div className='container-xl px-4 px-xl-0'>
                <div className='pb-4'>
                    <span className="firstBlueTitle fw-bold fs-1" style={{ color: '#50B8E7'}}>Lieber sorglos steuern sparen, statt vorsorgelos steuern zahlen</span>
                </div>
            </div>
            <div className='pensionPlanBlueBg'>
                <div className='bodyCounterPadding'>
                    <PensionChart darkMode={props.darkMode} />
                </div>
                <div className='bodyCounterPadding'>
                    <PensionCards darkMode={props.darkMode} />
                </div>
                <div>
                    <PensionLastBlue darkMode={props.darkMode} />
                </div>
            </div>
        </div>
    )
}

export default PensionPlan