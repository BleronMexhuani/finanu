import React from 'react'
function FirstStep(props) {
    

    const checkChild = (e) => {
        if (e.target.value === '3' || e.target.value === '4') {
            props.setChild(true)
        }
        else {
            props.setChild(false)
        }
        props.changeHousehold(e.target.value)

    }
    
    return (
        <div>
            <div className="col-12 col-sm-9 col-md-7 col-lg-6 col-xl-4 stepsBlueDiv px-4 px-sm-5 pb-5 pt-4 mx-auto">
                <div className='pb-4'>
                    <span className='fs-4 fw-800'>Haushalt</span>
                </div>
                <div className='text-start'>
                    <div className='pb-2'>
                        <span className='fw-600'> Wie sieht ihr Haushalt aus?</span>
                    </div>
                    <div className='pb-4'>
                        <select onChange={checkChild} defaultValue={props.setHouseholdValue} name="household" id="" className='form-select stepsFormInputs'>
                            <option value="1">Einzelperson</option>
                            <option value="2">Paar ohne Kind/er</option>
                            <option value="3">Alleinerziehend mit Kind/ern</option>
                            <option value="4">Familie mit Kind/ern</option>
                        </select>
                    </div>
                    {props.child &&
                        <div className='pb-5'>
                            <div className='pb-2'>
                                <span className='fw-600'>Wie viele Kinder?</span>
                            </div>
                            <select onChange={(e) => {props.setChildren(e.target.value)}} defaultValue={props.children} name='childrenNumber' id="" className='form-select stepsFormInputs'>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                            </select>
                        </div>
                    }
                    <div>
                            <button className='stepsNextBtn' onClick={props.toNext}>Weiter</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FirstStep