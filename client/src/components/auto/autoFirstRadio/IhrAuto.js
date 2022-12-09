import React, { useRef } from 'react'
import { useState, useEffect } from 'react'
function IhrAuto(props) {

    const [leasing, setleasing] = useState(false)
    const [step, setstep] = useState(0)

    const step1 = useRef()
    const step2 = useRef()

    useEffect(() => {
        var elem = (step === 1) ? step1 : step2
        window.scrollTo(
            {
                top: elem.current.offsetTop + 400,
                behavior: "smooth"
            });
    }, [step])

    return (
        <div>

            {(step >= 0) && (
                <div >
                    <div className="pb-4">
                        <span className='fw-700 fs-4'>
                            Neueinlösung eines Fahrzeuges
                        </span>
                    </div>

                    <div className='pb-3'>
                        <span className='fw-500'>Haben Sie einen Leasingvertrag?</span>
                    </div>
                    <div className="row g-4 justify-content-center">
                        <div className="col-12 col-sm-6 col-md-4">
                            <label htmlFor="ya" className="container1 checkboxWidth">
                                <input onChange={() => { setleasing(true) }} id='ya' type="radio" name='leasing' hidden />
                                <span className="checkmark checkmarkColorAuto ">Ja</span>
                            </label>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4">
                            <label htmlFor="batterie" className="container1 checkboxWidth">
                                <input onChange={() => { setleasing(true) }} id='batterie' type="radio" name='leasing' hidden />
                                <span className="checkmark checkmarkColorAuto ">Ja, nur Batterie für Antrieb</span>
                            </label>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4">
                            <label htmlFor="nein" className="container1 checkboxWidth">
                                <input onChange={() => { setleasing(false); setstep(1) }} id='nein' type="radio" name='leasing' hidden />
                                <span className="checkmark checkmarkColorAuto ">Nein</span>
                            </label>
                        </div>
                    </div>
                    <div >
                        {leasing &&
                            <>
                                <div className='pt-5'>
                                    <div className='pb-3'>
                                        <span className='fw-500'>Wer ist der Leasinggeber?</span>
                                    </div>
                                    <div>
                                        <input style={{ maxWidth: '420px' }} type="text" className='krankenInputStyle krankenInputStepStyle p-2 p-3' />
                                    </div>
                                </div>
                                <div className="pt-4">
                                    <button type='button' className='autoBtnStyle' onClick={() => { setstep(step + 1) }}>
                                        Weiter
                                    </button>
                                </div>
                            </>
                        }
                    </div>
                </div>
            )}
            <div ref={step1}>


                {(step >= 1) && (

                    <div className="py-5" >
                        <div className="pb-4">
                            <span className='fs-4 fw-700'>
                                Wählen Sie Ihre Leistungen
                            </span>
                        </div>
                        <div className="row g-4 justify-content-center">
                            <div className="col-12 col-sm-6 col-md-4">
                                <label htmlFor="teilkasko" className="container1 checkboxWidth">
                                    <input id='teilkasko' type="radio" name='services' hidden onChange={() => { setstep(2) }} />
                                    <div className="checkmark checkmarkColorAuto ">
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
                                    <input id='Vollkasko' type="radio" name='services' hidden onChange={() => { setstep(2) }} />
                                    <div className="checkmark checkmarkColorAuto ">
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
                                    <input id='Haftpflicht' type="radio" name='services' hidden onChange={() => { setstep(2) }} />
                                    <div className="checkmark checkmarkColorAuto ">
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
                )
                }
            </div>
            <div ref={step2}>

                {(step >= 2) && (
                    <>
                        <div>
                            <div className="pb-4">
                                <div className="row gx-4 gy-0 justify-content-center">
                                    <div className="col-12 col-sm-6 col-lg-auto my-auto">
                                        <div className="autoCheckbox textStartToEnd">
                                            <div className='pb-2 pb-sm-0'>
                                                <span className='fw-500 normalTextToWhite'>Ab wann wollen Sie Ihr Auto versichern?</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 col-lg-auto">
                                        <div>
                                            <input type="date" className='krankenInputStyle form-control krankenInputStepStyle p-3 autoCheckbox' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pb-4">
                                <div className="row gx-4 gy-0 justify-content-center">
                                    <div className="col-12 col-sm-6 col-lg-auto my-auto">
                                        <div className="autoCheckbox textStartToEnd">
                                            <div className='pb-2 pb-sm-0'>
                                                <span className='fw-500 normalTextToWhite'>In welchem Jahr haben Sie Ihr Auto gekauft?</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 col-lg-auto">
                                        <div>
                                            <input type="number" placeholder='2022' className='krankenInputStyle form-control krankenInputStepStyle p-3 autoCheckbox' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pb-4">
                                <div className="row gx-4 gy-0 justify-content-center">
                                    <div className="col-12 col-sm-6 col-lg-auto my-auto">
                                        <div className="autoCheckbox textStartToEnd">
                                            <div className='pb-2 pb-sm-0'>
                                                <span className='fw-500 normalTextToWhite'>Wann war die erste Inverkehrsetzung?</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 col-lg-auto">
                                        <div>
                                            <input type="date" className='krankenInputStyle form-control krankenInputStepStyle p-3 autoCheckbox' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <div className="row gx-4 gy-0 justify-content-center">
                                    <div className="col-12 col-sm-6 col-lg-auto my-auto">
                                        <div className="autoCheckbox textStartToEnd">
                                            <div className='pb-2 pb-sm-0'>
                                                <span className='fw-500 normalTextToWhite'>In welchem Kanton ist Ihr Auto eingelöst?</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 col-lg-auto">
                                        <div>
                                            <select name="" id="" className='krankenInputStyle  form-select krankenInputStepStyle p-3 autoCheckbox'>
                                                <option value="0">---</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row gx-4 gy-0 justify-content-center pt-5">
                            <div className="col-6 col-sm-auto">
                                <div>
                                    <button className='autoBtnStyle' onClick={() => { props.setstep(props.step - 1) }}>
                                        Zurück
                                    </button>
                                </div>
                            </div>
                            <div className="col-6 col-sm-auto">
                                <div>
                                    <button className='autoBtnStyle' onClick={() => { props.setstep(props.step + 1) }}>
                                        Weiter
                                    </button>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>

        </div >
    )
}

export default IhrAuto