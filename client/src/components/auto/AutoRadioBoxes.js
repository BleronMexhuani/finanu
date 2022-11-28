import React from 'react'
import { useState } from 'react'
import FirstRadioChecked from './FirstRadioChecked'
import SecondRadioChecked from './SecondRadioChecked'
import MainImg from '../../assets/images/auto/mainImg.png'
import { ReactComponent as Checkbox1 } from '../../assets/images/auto/checkbox1.svg'
import { ReactComponent as Checkbox2 } from '../../assets/images/auto/checkbox2.svg'

function AutoRadioBoxes() {
    const [autoCheck, setAutoCheck] = useState(0)

    return (
        <div>
            <div className="wrapDiv container-xl px-4 px-xl-0 bodyCounterPadding">
                <div className="row justify-content-between gx-4 bodyCounterPadding">
                    <div className="col-12 col-md-6 col-lg-5 col-xl-4 text-start">
                        <div className='pb-5 pb-md-0 pe-0 pe-lg-5'>
                            <img src={MainImg} className="img-fluid" alt="" />
                        </div>

                    </div>
                    <div className="col-12 col-md-6 col-lg-7 col-xl-7 text-start my-md-auto">
                        <div className='fw-500 fs-5 normalTextToWhite'>
                            <span>
                                In der Schweiz ist der Abschluss einer Autoversicherung obligatorisch. Bei der Auswahl einer Autoversicherung steht neben dem zu versichernden Fahrzeug immer auch Ihr persönliches Sicherheitsbedürfnis im Vordergrund.
                            </span>
                        </div>
                    </div>
                </div>
                <div className="bodyCounterPadding">
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
                <div className="row gx-4 pb-5 justify-content-between">
                    <div className="col-12 col-md-6 col-lg-5 col-xl-5 text-start">
                        <div className='pb-4 pb-md-0'>
                            <span className='fw-700 firstBlueTitle fs-1 '>Autohaftpflicht <br></br> (Pflicht)  </span>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-7 col-xl-7 text-start">
                        <div className="">
                            <div className='fw-500 fs-5 normalTextToWhite'>
                                <span>
                                    Die Haftpflichtversicherung kommt für Schäden auf, die Sie (oder jemand anderes, der Ihr Auto fährt) mit Ihrem Fahrzeug an anderen Personen oder Sachen verursachen.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row gx-4 pb-5 justify-content-between">
                    <div className="col-12 col-md-6 col-lg-5 col-xl-5 text-start">
                        <div className='pb-4 pb-md-0'>
                            <span className='fw-700 firstBlueTitle fs-1 '> Teilkaskoversicherung <br></br> (Freiwillig) </span>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-7 col-xl-7 text-start">
                        <div className="">
                            <div className='fw-500 fs-5 normalTextToWhite'>
                                <span>
                                    Die Teilkaskoversicherung versichert zusätzlich Schäden an Ihrem Fahrzeug, die durch Unwetter, Tiere und unbekannte Personen verursacht werden. Dazu gehören Diebstahl, Glasbruch, Marderschäden, Wildunfälle und böswillige Beschädigung durch Dritte.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row gx-4 justify-content-between">
                    <div className="col-12 col-md-6 col-lg-5 col-xl-5 text-start">
                        <div className='pb-4 pb-md-0'>
                            <span className='fw-700 firstBlueTitle fs-1 '>Vollkaskoversicherung <br></br> (Freiwillig ausser bei Leasing)</span>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-7 col-xl-7 text-start">
                        <div className="">
                            <div className='fw-500 fs-5 normalTextToWhite'>
                                <span>
                                    Zusätzlich zur Teilkaskoversicherung deckt die Vollkaskoversicherung Schäden, die Sie selbst am Auto verursachen (Kollision).
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AutoRadioBoxes