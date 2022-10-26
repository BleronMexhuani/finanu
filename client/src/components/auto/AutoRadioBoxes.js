import React from 'react'
import { useState } from 'react'
import FirstRadioChecked from './FirstRadioChecked'
import SecondRadioChecked from './SecondRadioChecked'
function AutoRadioBoxes() {
    const [autoCheck, setAutoCheck] = useState(0)

    return (
        <div>
            <div className="wrapDiv container-xl px-4 px-xl-0">
                <div className="pb-5">
                    <span className='firstBlueTitle fs-2'>
                        Ihre Autoversicherung
                    </span>
                </div>
                <div className="pb-5 mb-5">
                    <div className="row g-4 justify-content-center">
                        <div className="col-12 col-sm-auto">
                            <label htmlFor="autoFirstRadio" className="container1 autoCheckbox">
                                <input onChange={() => { setAutoCheck(1) }} id='autoFirstRadio' type="radio" name='autoRadio' hidden />
                                <span className="checkmark">Neueinlösung eines Fahrzeuges</span>
                            </label>
                        </div>
                        <div className="col-12 col-sm-auto">
                            <label htmlFor="autoSecondRadio" className="container1 autoCheckbox">
                                <input onChange={() => { setAutoCheck(2) }} id='autoSecondRadio' type="radio" name='autoRadio' hidden />
                                <span className="checkmark">Vergleichsofferte für bestehende Autoversicherung</span>
                            </label>
                        </div>
                    </div>
                </div>
                {
                    {
                        0: <img className='img-fluid autoImage' src="https://www.finanu.ch/wp-content/uploads/2021/10/automotorrad-illustration-car-marks.png" alt="" />,
                        1: <FirstRadioChecked />,
                        2: <SecondRadioChecked />
                    }[autoCheck]
                }
                <div>

                </div>
            </div>
        </div>
    )
}

export default AutoRadioBoxes