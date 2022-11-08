import React from 'react'
import UploadFileStep from './autoSecondRadio/UploadFileStep'
import { useState,useEffect,useRef } from 'react'
import SecondStep from './autoSecondRadio/SecondStep'
import ThirdStep from './autoSecondRadio/ThirdStep'

function SecondRadioChecked() {
    const [step, setstep] = useState(0)

    return (
        <div>
            <form action="" className='mb-0'>
                <div className="wrapDiv container-xl px-0">
                    <div className="">
                        {
                            {
                                0: <UploadFileStep step={step} setstep={setstep} />,
                                1: <SecondStep step={step} setstep={setstep} />,
                                2: <ThirdStep step={step} setstep={setstep} />
                            }[step]
                        }
                    </div>
                </div>

            </form>
        </div>
    )
}

export default SecondRadioChecked