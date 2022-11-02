import React from 'react'
import { useState } from 'react'
function IhrAuto(props) {

    const [leasing, setleasing] = useState(false)
    return (
        <div>
            <div className="pb-4">
                <span className='finanuSubTitle'>
                    Neueinlösung eines Fahrzeuges
                </span>
            </div>
            <div className="pb-5">
                <div className='pb-3'>
                    <span className='fw-500'>Haben Sie einen Leasingvertrag?</span>
                </div>
                <div className="row g-4 justify-content-center">
                    <div className="col-12 col-sm-6 col-md-4">
                        <label htmlFor="ya" className="container1 checkboxWidth">
                            <input onChange={() => setleasing(true)} id='ya' type="radio" name='leasing' hidden />
                            <span className="checkmark">Ja</span>
                        </label>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4">
                        <label htmlFor="batterie" className="container1 checkboxWidth">
                            <input onChange={() => setleasing(true)} id='batterie' type="radio" name='leasing' hidden />
                            <span className="checkmark">Ja, nur Batterie für Antrieb</span>
                        </label>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4">
                        <label htmlFor="nein" className="container1 checkboxWidth">
                            <input onChange={() => setleasing(false)} id='nein' type="radio" name='leasing' hidden />
                            <span className="checkmark">Nein</span>
                        </label>
                    </div>
                </div>
                <div >
                    {leasing &&
                        <div className='pt-5'>
                            <div className='pb-3'>
                                <span className='fw-500'>Wer ist der Leasinggeber?</span>
                            </div>
                            <div>
                                <input style={{ maxWidth: '420px' }} type="text" className='krankenInputStyle krankenInputStepStyle p-3' />
                            </div>
                        </div>
                    }
                </div>
                <div className="py-5">
                    <div className="pb-4">
                        <span className='finanuSubTitle'>
                            Wählen Sie Ihre Leistungen
                        </span>
                    </div>
                    <div className="row g-4 justify-content-center">
                        <div className="col-12 col-sm-6 col-md-4">
                            <label htmlFor="teilkasko" className="container1 checkboxWidth">
                                <input onChange={() => setleasing(true)} id='teilkasko' type="radio" name='services' hidden />
                                <div className="checkmark">
                                    <div className='py-4'>
                                        <span className='fw-700'>Teilkasko</span>
                                    </div>
                                    <div>
                                        <span>Deckt Diebstahl, Elementarschäden, Feuer, Glasbruch und Haftpflichtschäden.</span>
                                    </div>
                                </div>
                            </label>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4">
                            <label htmlFor="Vollkasko" className="container1 checkboxWidth">
                                <input onChange={() => setleasing(true)} id='Vollkasko' type="radio" name='services' hidden />
                                <div className="checkmark">
                                    <div className='py-4'>
                                        <span className='fw-700'>Vollkasko</span>
                                    </div>
                                    <div className=''>
                                        <span>Versichert Diebstahl, Elementarschäden, Feuer, Glasbruch, Kollisions- umd Haftpflichtschäden.</span>
                                    </div>
                                </div>
                            </label>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4">
                            <label htmlFor="Haftpflicht" className="container1 checkboxWidth">
                                <input onChange={() => setleasing(true)} id='Haftpflicht' type="radio" name='services' hidden />
                                <div className="checkmark">
                                    <div className='py-4'>
                                        <span className='fw-700'>Nur Haftpflicht</span>
                                    </div>
                                    <div>
                                        <span>Deckt Schäden, die Sie mit Ihrem Fahrzeug anderen Personen, Tieren oder Sachen zufügen.</span>
                                    </div>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="pb-4">
                        <div className="row gx-4 gy-0 justify-content-center">
                            <div className="col-12 col-sm-6 col-md-auto my-auto">
                                <div className="autoCheckbox textStartToEnd">
                                    <div className='pb-2 pb-sm-0'>
                                        <span className='fw-500'>Ab wann wollen Sie Ihr Auto versichern?</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-auto">
                                <div>
                                    <input type="date" className='krankenInputStyle krankenInputStepStyle p-3 autoCheckbox' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pb-4">
                        <div className="row gx-4 gy-0 justify-content-center">
                            <div className="col-12 col-sm-6 col-md-auto my-auto">
                                <div className="autoCheckbox textStartToEnd">
                                    <div className='pb-2 pb-sm-0'>
                                        <span className='fw-500'>In welchem Jahr haben Sie Ihr Auto gekauft?</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-auto">
                                <div>
                                    <input type="number" placeholder='2022' className='krankenInputStyle krankenInputStepStyle p-3 autoCheckbox' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pb-4">
                        <div className="row gx-4 gy-0 justify-content-center">
                            <div className="col-12 col-sm-6 col-md-auto my-auto">
                                <div className="autoCheckbox textStartToEnd">
                                    <div className='pb-2 pb-sm-0'>
                                        <span className='fw-500'>Wann war die erste Inverkehrsetzung?</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-auto">
                                <div>
                                    <input type="date" className='krankenInputStyle krankenInputStepStyle p-3 autoCheckbox' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="row gx-4 gy-0 justify-content-center">
                            <div className="col-12 col-sm-6 col-md-auto my-auto">
                                <div className="autoCheckbox textStartToEnd">
                                    <div className='pb-2 pb-sm-0'>
                                        <span className='fw-500'>In welchem Kanton ist Ihr Auto eingelöst?</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-auto">
                                <div>
                                    <select name="" id="" className='krankenInputStyle form-select krankenInputStepStyle p-3 autoCheckbox'>
                                        <option value="0">---</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row gx-4 gy-0 justify-content-center">
                <div className="col-6 col-sm-auto">
                    <div>
                        <button className='nextBtnKranken' onClick={() => { props.setstep(props.step - 1) }}>
                            Zurück
                        </button>
                    </div>
                </div>
                <div className="col-6 col-sm-auto">
                    <div>
                        <button className='nextBtnKranken' onClick={() => { props.setstep(props.step + 1) }}>
                            Weiter
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IhrAuto