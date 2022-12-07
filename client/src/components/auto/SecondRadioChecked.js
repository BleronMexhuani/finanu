import React from 'react'
import UploadFileStep from './autoSecondRadio/UploadFileStep'
import { useState, useEffect, useRef } from 'react'
import SecondStep from './autoSecondRadio/SecondStep'
import ThirdStep from './autoSecondRadio/ThirdStep'

function SecondRadioChecked() {
    const [step, setstep] = useState(0)

    const scrollDiv1 = useRef();
    // useEffect(() => {

    //     var elem = scrollDiv1
    //     window.scrollTo(
    //         {
    //             top: elem.current.offset,
    //             behavior: "smooth"
    //         });
    //         console.log(offset.top);
            
    // }, [step])
    return (
        <div className='pt-5 mt-5'>
            <form action="" className='mb-0'>
                <div className="wrapDiv container-xl px-0">
                    <div className="" ref={scrollDiv1}>
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