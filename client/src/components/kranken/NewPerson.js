import React from 'react'
import { useState } from 'react'
import Trash from '../../assets/images/removePerson.png'

function NewPerson(props) {
    const [checkJahr, setCheckJahr] = useState(false)
    const [isChild, setIsChild] = useState(true)
    const validateJahrgang = (e) => {
        const d = new Date();
        let year = d.getFullYear();

        if (e.target.value <= year && e.target.value !== '' && e.target.value >= 1900) {
            setCheckJahr(true)
            if (year - e.target.value <= 18) {
                setIsChild(true)
            }
            else {
                setIsChild(false)
            }
        }
        else {
            setCheckJahr(false)
        }


    }

    const under18Price = [0, 100, 200, 300, 400, 500, 600]
    const over18Price = [300, 500, 1000, 1500, 2000, 2500]

    return (
        <div >
            <div className='krankenSecondStep mt-5' >
                <div className='krankenStepsBox' id={'Person' + props.id}>
                    <div className="row g-4">
                        <div className="col-6 col-md-3">
                            <label htmlFor={"maleradio" + props.id} className='container1 w-100'>
                                <input type="radio" id={"maleradio" + props.id} name={"gender" + props.id} hidden />
                                <span className='checkmark'>Herr</span>
                            </label>
                        </div>
                        <div className="col-6 col-md-3">
                            <label htmlFor={"femaleradio" + props.id} className='container1 w-100'>
                                <input type="radio" id={"femaleradio" + props.id} name={"gender" + props.id} hidden />
                                <span className='checkmark'>Frau</span>
                            </label>
                        </div>
                        <div className="col-12 col-md-6">
                            <input type="text" name={"personName" + props.id} id="" placeholder='Vorname & Nachname' className='krankenInputStyle krankenInputStepStyle p-2 p-3' />
                        </div>
                        <div className="col-12 col-md-6">
                            <input type="text" name={"Jahrgang"}
                                placeholder='Jahrgang'
                                min={1900}
                                onChange={validateJahrgang}
                                className='krankenInputStyle krankenInputStepStyle p-2 p-3' />
                        </div>
                        <div className="col-12 col-md-6">
                            <select disabled={checkJahr ? false : "disabled"} name={"franchise" } id="" className='krankenInputStyle form-select krankenInputStepStyle p-3'>
                                <option value="" defaultValue=''>Franchise</option>
                                {isChild && (
                                    under18Price.map((numri) =>
                                        <option key={numri.toString()} value={numri}>{"CHF " + numri}</option>
                                    )
                                )}
                                {!isChild && ( 
                                    over18Price.map((numri) =>
                                        <option key={numri.toString()} value={numri}>{"CHF " + numri}</option>
                                    )
                                )}
                            </select>
                        </div>
                        <div className="col-12 col-md-6">
                            <label htmlFor={"mit" + props.id} className='container1 w-100'>
                                <input type="radio" value={"MIT-UNF"} id={"mit" + props.id} data-accident='asd' name={'accident' + props.id} hidden />
                                <span className='checkmark'>mit Unfall</span>
                            </label>
                        </div>
                        <div className="col-12 col-md-6">
                            <label htmlFor={"ohne" + props.id} className='container1 w-100'>
                                <input type="radio" value={"OHN-UNF"} id={"ohne" + props.id} data-accident='asd' name={'accident' + props.id} hidden />
                                <span className='checkmark'>ohne Unfall</span>
                            </label>
                        </div>
                        <div className='text-end' >
                            <img src={Trash} width={'30px'} alt="" style={{ cursor: 'pointer' }} onClick={() => props.removeItem(props.id)} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewPerson