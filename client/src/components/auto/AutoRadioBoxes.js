import React from 'react'
import { useState } from 'react'
import FirstRadioChecked from './FirstRadioChecked'
import SecondRadioChecked from './SecondRadioChecked'
import MainImg from '../../assets/images/auto/mainImg.svg'
function AutoRadioBoxes() {
    const [autoCheck, setAutoCheck] = useState(0)

    return (
        <div>
            <div className="wrapDiv container-xl px-4 py-5 px-xl-5" style={{border: '1px solid #ddd',borderRadius: '16px'}}>
                <div className="pb-5">
                    <span className='firstBlueTitle'>
                        Ihre Autoversicherung
                    </span>
                </div>
                <div className="pb-5 mb-5">
                    <div className="row g-4 justify-content-center">
                        <div className="col-12 col-sm-6 col-lg-auto">
                            <label htmlFor="autoFirstRadio" className="container1 autoCheckbox">
                                <input onChange={() => { setAutoCheck(1) }} id='autoFirstRadio' type="radio" name='autoRadio' hidden />
                                <span className="checkmark">Neueinlösung eines Fahrzeuges</span>
                            </label>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-auto">
                            <label htmlFor="autoSecondRadio" className="container1 autoCheckbox">
                                <input onChange={() => { setAutoCheck(2) }} id='autoSecondRadio' type="radio" name='autoRadio' hidden />
                                <span className="checkmark">Vergleichsofferte für bestehende Autoversicherung</span>
                            </label>
                        </div>
                    </div>
                </div>
                {
                    {
                        0: <img className='img-fluid autoImage' src={MainImg} alt="" />,
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