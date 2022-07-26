import React from 'react'

function ThirdStep(props) {
    return (
        <div className='autoThirdStep'>
            <div className="pb-3">
                <span className='fw-700  fs-5'>
                    Personalien
                </span>
            </div>
            <div className='pb-4'>
                <span className='firstBlueTitle fw-700 fs-4'>Versicherungsnehmer</span>
            </div>
            <div className='pb-4'>
                <div className="row g-4 justify-content-center">
                    <div className="col-12 col-sm-auto">
                        <input type="text" className='krankenInputStyle krankenInputStepStyle p-2 p-3 autoCheckbox' placeholder='Vorname *' />
                    </div>
                    <div className="col-12 col-sm-auto">
                        <input type="text" className='krankenInputStyle krankenInputStepStyle p-2 p-3 autoCheckbox' placeholder='Nachname *' />
                    </div>
                </div>
            </div>
            <div className="pb-4">
                <div className="row g-4 justify-content-center">
                    <div className="col-12 col-sm-auto">
                        <input type="text" className='krankenInputStyle krankenInputStepStyle p-2 p-3 autoCheckbox' placeholder='Strasse & Nr. *' />
                    </div>
                    <div className="col-12 col-sm-auto">
                        <input type="text" className='krankenInputStyle krankenInputStepStyle p-2 p-3 autoCheckbox' placeholder='PLZ / Ort *' />
                    </div>
                </div>
            </div>
            <div className="pb-4">
                <div className="row g-4 justify-content-center">
                    <div className="col-12 col-sm-auto">
                        <input type="tel" className='krankenInputStyle krankenInputStepStyle p-2 p-3 autoCheckbox' placeholder='Telefonnummer *' />
                    </div>
                    <div className="col-12 col-sm-auto">
                        <input type="text" className='krankenInputStyle krankenInputStepStyle p-2 p-3 autoCheckbox' placeholder='E-Mail-Adresse *' />
                    </div>
                </div>
            </div>
            <div className="pb-5">
                <div className="row g-4 justify-content-center">
                    <div className="col-12 col-sm-auto">
                        <input type="date" className='krankenInputStyle krankenInputStepStyle p-2 p-3 autoCheckbox form-control' placeholder='Geburtsdatum *' />
                    </div>
                    <div className="col-12 col-sm-auto">
                        <input type="text" className='krankenInputStyle krankenInputStepStyle p-2 p-3 autoCheckbox' placeholder='Nationalität *' />
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
                            Berechnung
                            </button>
                        </div>
                    </div>
                </div>
        </div>
    )
}
export default ThirdStep