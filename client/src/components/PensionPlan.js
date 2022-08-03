import React from 'react'
import PensionChart from './pensionPlan/PensionChart'
import '../assets/css/pension.css'
import '../assets/css/mainComponents.css'
import PensionCards from './pensionPlan/PensionCards'
import PensionLastBlue from './pensionPlan/PensionLastBlue'
function PensionPlan() {
    return (
        <div>
            <div className='container-xl px-4 px-xl-0'>
                <div className='pb-5'>
                    <span class="firstBlueTitle fs-3 fw-bold" style={{ color: '#84CDEE' }}>LIEBER SORGLOS STEUERN SPAREN, STATT VORSORGELOS STEUERN ZAHLEN</span>
                </div>
            </div>
            <div className='pensionPlanBlueBg'>
                <div className='pb-5 mb-5'>
                    <PensionChart />
                </div>
                <div className='pt-5 mt-5'>
                    <PensionCards />
                </div>
                <div>
                    <PensionLastBlue />
                </div>
            </div>
        </div>
    )
}

export default PensionPlan