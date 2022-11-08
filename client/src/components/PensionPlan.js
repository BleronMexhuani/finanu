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
                <div className='pb-3'>
                    <span className="firstBlueTitle fw-bold" style={{ color: '#50B8E7' }}>LIEBER SORGLOS STEUERN SPAREN, STATT VORSORGELOS STEUERN ZAHLEN</span>
                </div>
                <div className='bodyCounterPadding'>
                    <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's<br></br> standard dummy text ever since the 1500s,</span>
                </div>
            </div>
            <div className='pensionPlanBlueBg'>
                <div className='pb-5 mb-5'>
                    <PensionChart />
                </div>
                <div className=''>
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