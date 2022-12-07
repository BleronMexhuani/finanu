import React, { useState } from 'react'
import FirstRadioChecked from './FirstRadioChecked'
import SecondRadioChecked from './SecondRadioChecked'
import { ReactComponent as Checkbox1 } from '../../assets/images/auto/checkbox1.svg'
import { ReactComponent as Checkbox2 } from '../../assets/images/auto/checkbox2.svg'

function AutoStep() {
    const [autoCheck, setAutoCheck] = useState(0)

    return (
        <div className='container-xl px-4 px-xl-0'>
            <div className="col-12 col-xl-11 col-xxl-10 mx-auto hausratBlueDiv p-4 p-md-5 ">
                <div className="">
                    <div className="pb-5 text-center">
                        <span className='firstBlueTitle fs-4 fw-700'>
                            Ihre Autoversicherung
                        </span>
                    </div>
                    <div className="mx-auto col-12 col-lg-10">
                        <div className="row gx-4 gy-4 gy-sm-0 justify-content-center">
                            <div className="col-12 col-sm-6">
                                <label htmlFor="autoFirstRadio" className="container1 autoCheckbox w-100">
                                    <input onChange={() => { setAutoCheck(1) }} id='autoFirstRadio' type="radio" name='autoRadio' hidden />
                                    <div className="checkmark checkmarkColorAuto">
                                        <div>
                                            <div className=' text-center'>

                                                <Checkbox1 height="90" width="100" />
                                            </div>


                                        </div>
                                    </div>
                                    <div className='text-center pt-2'>
                                        <span className='fw-400'>Neueinlösung eines Fahrzeuges</span>
                                    </div>
                                </label>
                            </div>
                            <div className="col-12 col-sm-6">
                                <label htmlFor="autoSecondRadio" className="container1 autoCheckbox w-100">
                                    <input onChange={() => { setAutoCheck(2) }} id='autoSecondRadio' type="radio" name='autoRadio' hidden />
                                    <div className="checkmark checkmarkColorAuto">
                                        <div className='text-center'>
                                            <Checkbox2 height="90" />


                                        </div>
                                    </div>
                                    <div className='pt-2 text-center'>
                                        <span className='fw-400'>
                                            Vergleichsofferte für bestehende Autoversicherung
                                        </span>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>

                </div>
                <div className=''>
                    {
                        {
                            1: <FirstRadioChecked />,
                            2: <SecondRadioChecked />
                        }[autoCheck]
                    }
                </div>
            </div>
        </div>
    )
}

export default AutoStep