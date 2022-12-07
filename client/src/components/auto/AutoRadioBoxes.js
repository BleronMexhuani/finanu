import React from 'react'
import { useState } from 'react'

function AutoRadioBoxes() {

    return (
        <div>
            <div className="wrapDiv container-xl px-4 px-xl-0 bodyCounterPadding">
                {/* <div className="row justify-content-between gx-4 bodyCounterPadding">
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
                </div> */}
                
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