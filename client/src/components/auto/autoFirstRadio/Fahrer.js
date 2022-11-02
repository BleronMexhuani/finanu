import React from 'react'

function Fahrer(props) {
    return (
        <div>
            <div>
                <div className="pb-4">
                    <span className='finanuSubTitle'>
                        Fahrer/-in
                    </span>
                </div>
                <div className="pb-4">
                    <div className="row gx-4 gy-0 justify-content-center">
                        <div className="col-12 col-sm-6 col-lg-auto my-auto">
                            <div className="autoCheckbox textStartToEnd ">
                                <div className='pb-2 pb-sm-0'>
                                    <span className='fw-500'>Was ist Ihr Geschlecht?</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-auto">
                            <div className="">
                                <div className='row gx-0 gy-3 autoCheckbox'>
                                    <div className="col-12 col-sm-6 pe-0 pe-sm-2">
                                        <label htmlFor="male" className="container1 w-100">
                                            <input id='male' type="radio" name='gender' hidden />
                                            <span className="checkmark">Männlich</span>
                                        </label>
                                    </div>
                                    <div className="col-12 col-sm-6 ps-0 ps-sm-2">
                                        <label htmlFor="female" className="container1 w-100">
                                            <input id='female' type="radio" name='gender' hidden />
                                            <span className="checkmark">Weiblich</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pb-4">
                    <div className="row gx-4 gy-0 justify-content-center">
                        <div className="col-12 col-sm-6 col-lg-auto my-auto">
                            <div className="autoCheckbox textStartToEnd">
                                <div className='pb-2 pb-sm-0'>
                                    <span className='fw-500'>Wann sind Sie geboren?</span>
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
                        <div className="col-12 col-sm-6 col-lg-auto my-auto">
                            <div className="autoCheckbox textStartToEnd">
                                <div className='pb-2 pb-sm-0'>
                                    <span className='fw-500'>Wann wurde Ihr Führerausweis ausgestellt?</span>
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
                        <div className="col-12 col-sm-6 col-lg-auto my-auto">
                            <div className="autoCheckbox textStartToEnd">
                                <div className='pb-2 pb-sm-0'>
                                    <span className='fw-500'>Was ist Ihre Nationalität?</span>
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
                <div className="pb-4">
                    <div className="row gx-4 gy-0 justify-content-center">
                        <div className="col-12 col-sm-6 col-lg-auto my-auto">
                            <div className="autoCheckbox textStartToEnd">
                                <div className='pb-2 pb-sm-0'>
                                    <span className='fw-500'>In welchem Ort wohnen Sie?</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-auto">
                            <div>
                                <input type="text" className='krankenInputStyle krankenInputStepStyle p-3 autoCheckbox' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pb-4">
                    <div className="row gx-4 gy-0 justify-content-center">
                        <div className="col-12 col-sm-6 col-lg-auto my-auto">
                            <div className="autoCheckbox textStartToEnd ">
                                <div className='pb-2 pb-sm-0'>
                                    <span className='fw-500'>Fahren Sie das Auto am häufigsten?</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-auto">
                            <div className="">
                                <div className='row gx-0 gy-3 autoCheckbox'>
                                    <div className="col-12 col-sm-6 pe-0 pe-sm-2">
                                        <label htmlFor="JaDrive" className="container1 w-100">
                                            <input id='JaDrive' type="radio" name='driveCar' hidden />
                                            <span className="checkmark">Ja</span>
                                        </label>
                                    </div>
                                    <div className="col-12 col-sm-6 ps-0 ps-sm-2">
                                        <label htmlFor="NeinDrive" className="container1 w-100">
                                            <input id='NeinDrive' type="radio" name='driveCar' hidden />
                                            <span className="checkmark">Nein</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="row gx-4 gy-0 justify-content-center">
                        <div className="col-12 col-sm-6 col-lg-auto my-auto">
                            <div className="autoCheckbox textStartToEnd ">
                                <div className='pb-2 pb-sm-0'>
                                    <span className='fw-500'>Fahren Sie mehr als 7 000 Kilometer pro Jahr?</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-auto">
                            <div className="">
                                <div className='row gx-0 gy-3 autoCheckbox'>
                                    <div className="col-12 col-sm-6 pe-0 pe-sm-2">
                                        <label htmlFor="Ja7000" className="container1 w-100">
                                            <input id='Ja7000' type="radio" name='moreThan7000' hidden />
                                            <span className="checkmark">Ja</span>
                                        </label>
                                    </div>
                                    <div className="col-12 col-sm-6 ps-0 ps-sm-2">
                                        <label htmlFor="Nein7000" className="container1 w-100">
                                            <input id='Nein7000' type="radio" name='moreThan7000' hidden />
                                            <span className="checkmark">Nein</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row gx-4 gy-0 justify-content-center pt-5">
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

export default Fahrer