import React from 'react'
import { useState, useEffect, useRef } from 'react'
import Fahrer from './autoFirstRadio/Fahrer'
import IhrAuto from './autoFirstRadio/IhrAuto'
import SelectCar from './autoFirstRadio/SelectCar'
import SecondStep from './autoSecondRadio/SecondStep'
import ThirdStep from './autoSecondRadio/ThirdStep'
function FirstRadioChecked() {
    const [step, setstep] = useState(0)
 
    return (
        <div>
            <form action="" className='mb-0'>
                <div className="wrapDiv container-xl px-0">
                    <div className="">
                        {
                            {
                                0: <SelectCar step={step} setstep={setstep} />,
                                1: <IhrAuto step={step} setstep={setstep} />,
                                2: <Fahrer step={step} setstep={setstep} />,
                                3: <SecondStep step={step} setstep={setstep} />,
                                4: <ThirdStep step={step} setstep={setstep} />
                            }[step]
                        }
                    </div>
                </div>
            </form>
        </div>
    )
}

export default FirstRadioChecked