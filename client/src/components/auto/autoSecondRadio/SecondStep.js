import React from 'react'

function SecondStep(props) {
    return (
        <div>
            <div>
                <div className="pb-4">
                    <span className='fw-700 fs-4'>
                        Wie möchten Sie fortfahren?
                    </span>
                </div>
                <div className="pb-5">
                    <div className="row g-4 justify-content-center">
                        <div className="col-12 col-sm-6 col-lg-auto">
                            <label htmlFor="email" className="container1 autoCheckbox">
                                <input id='email' type="radio" name='secondStepRadio' hidden />
                                <span className="checkmark checkmarkColorAuto ">Unverbindliche Offerte per E-Mail zusenden</span>
                            </label>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-auto">
                            <label htmlFor="unsure" className="container1 autoCheckbox">
                                <input id='unsure' type="radio" name='secondStepRadio' hidden />
                                <span className="checkmark checkmarkColorAuto ">Unsicher, bitte eine kostenlose Beratung</span>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="row gx-4 gy-0 justify-content-center">
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

            </div>
        </div>
    )
}

export default SecondStep