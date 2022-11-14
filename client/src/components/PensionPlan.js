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
                <div className='bodyCounterPadding'>
                    <span className="firstBlueTitle fw-bold" style={{ color: '#50B8E7' }}>LIEBER SORGLOS STEUERN SPAREN, STATT VORSORGELOS STEUERN ZAHLEN</span>
                </div>
            </div>
            <div className='pensionPlanBlueBg'>
                <div className='bodyCounterPadding'>
                    <PensionChart />
                </div>
                <div className='bodyCounterPadding'>
                    <PensionCards darkMode={props.darkMode} />
                </div>
                <div>
                    <PensionLastBlue />
                </div>
            </div>
        </div>
    )
}

export default PensionPlan