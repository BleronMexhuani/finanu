import React from 'react'

function ThirdStep(props) {
    return (
        <div>
            <div className="col-12 col-sm-9 col-md-7 col-lg-6 col-xl-4 stepsBlueDiv px-5 pb-5 pt-4 mx-auto">
                <div className='pb-4'>
                    <span className='fs-4 fw-800'>Einnahmen</span>
                </div>
                <div className='text-start'>
                    <div className='pb-2'>
                        <span className='fw-600'>Welche monatlichen Einnahmen hat ihr Haushalt? </span>
                    </div>
                    <div className="pb-5">
                        <div className="row g-3">
                            <div className="col">
                                <div className="row g-0 stepsFormInputs rightBorderDiv">
                                    <div className="col">
                                        <input type="number" className='w-100 borderRightInput' />
                                    </div>
                                    <div className="col-auto my-auto">
                                        <div className='px-2'>
                                            <span className='text-dark'>CHF</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-auto">
                                <button className='stepsNextBtn'>M/Y</button>
                            </div>
                        </div>
                    </div>
                    <div className="pb-2">
                        <span className="fw-600">Gibt es noch weitere Einnahmen, die noch nicht notiert wurden (Kindergeld, Allimente etc.)?</span>
                    </div>
                    <div className="">
                        <div className="row g-3">
                            <div className="col">
                                <div className="row g-0 stepsFormInputs rightBorderDiv">
                                    <div className="col">
                                        <input type="number" className='w-100 borderRightInput' />
                                    </div>
                                    <div className="col-auto my-auto">
                                        <div className='px-2'>
                                            <span className='text-dark'>CHF</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-auto">
                                <button className='stepsNextBtn'>M/Y</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='pt-5 row g-3'>
                    <div className="col-6">
                        <button className='stepsNextBtn' onClick={props.toPrev}>Zurück</button>
                    </div>
                    <div className="col-6">
                        <button className='stepsNextBtn' onClick={props.toNext}>Weiter</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThirdStep