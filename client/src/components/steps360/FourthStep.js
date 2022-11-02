import React from 'react'

function FourthStep(props) {
    const changeMY = (e) => {
        const el = e.target.parentNode.closest("div");
        const sib = el.parentNode.childNodes;
        const findsib = sib[0].childNodes;
        const anothersib = findsib[0].childNodes;

        var inputValue = anothersib[0].childNodes[0].value;
        var inputAttr = anothersib[0].childNodes[0].getAttribute("my");
        if (inputValue !== null && inputValue !== '0' && inputValue !== '') {
            if (inputAttr === "month") {

                inputValue = inputValue * 12
                anothersib[0].childNodes[0].value = inputValue
                anothersib[0].childNodes[0].setAttribute("my", "year")
            }
            else {
                inputValue = inputValue / 12
                anothersib[0].childNodes[0].value = inputValue
                anothersib[0].childNodes[0].setAttribute("my", "month")

            }
        }
    }

    const livingSelectChange = (e) => {
        props.setLivingPlace(e.target.value)
        props.setFourthStepInputs([0,0])
    }
    const handleFourthStep = (e) => {
        e.preventDefault()
        const value = []

        for (let i = 0; i < e.target.length - 1; i++) {
            if (e.target[i].name === 'fourthStepInput') {
                value.push(parseInt(e.target[i].value))
            }
        }
        
        props.setFourthStepInputs(value)
        props.toNext()
    }
    
    return (
        <div>
            <form onSubmit={handleFourthStep} className='m-0'>
                <div className="col-12 col-sm-9 col-md-7 col-lg-6 col-xl-4 stepsBlueDiv px-4 px-sm-5 pb-5 pt-4 mx-auto">
                    <div className='pb-4'>
                        <span className='finanuSubTitle fw-800 text-light'>Ausgaben</span>
                    </div>
                    <div className='text-start'>
                        <div className='pb-2'>
                            <span className='fw-600'> Wie wohnen Sie?</span>
                        </div>
                        <div className='pb-5'>
                            <select name="living" onChange={livingSelectChange} defaultValue={props.livingPlace} id="" className='form-select stepsFormInputs'>
                                <option value="1">Bitte wählen</option>
                                <option value="Eigenheim">Eigenheim</option>
                                <option value="Mietwohnung">Mietwohnung</option>
                            </select>
                        </div>
                        {(props.livingPlace === "Eigenheim") &&
                            <div>
                                <div className='pb-5'>
                                    <div className='pb-2'>
                                        <span className='fw-600'>Hypothek, Unterhalt usw. </span>
                                    </div>
                                    <div className="">
                                        <div className="row g-3">
                                            <div className="col">
                                                <div className="row g-0 stepsFormInputs rightBorderDiv">
                                                    <div className="col">
                                                        <input name="fourthStepInput" type="number" my={"month"} onChange={(e) => { props.setFourthStepInputs(e.target.value) }} defaultValue={props.fourthStepInputs[0]} className='w-100 borderRightInput' />
                                                    </div>
                                                    <div className="col-auto my-auto">
                                                        <div className='px-2'>
                                                            <span className='text-dark'>CHF</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-auto">
                                                <button type='button' className='stepsNextBtn' onClick={(e) => changeMY(e)}>M/Y</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='pb-5'>
                                    <div className='pb-2'>
                                        <span className='fw-600'>Strom, Heizung, Wasser, Gebühren etc. </span>
                                    </div>
                                    <div className="">
                                        <div className="row g-3">
                                            <div className="col">
                                                <div className="row g-0 stepsFormInputs rightBorderDiv">
                                                    <div className="col">
                                                        <input name="fourthStepInput" type="number" my={"month"} onChange={(e) => { props.setFourthStepInputs(e.target.value) }} defaultValue={props.fourthStepInputs[1]} className='w-100 borderRightInput' />
                                                    </div>
                                                    <div className="col-auto my-auto">
                                                        <div className='px-2'>
                                                            <span className='text-dark'>CHF</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-auto">
                                                <button type='button' className='stepsNextBtn' onClick={(e) => changeMY(e)}>M/Y</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                        {(props.livingPlace === "Mietwohnung") &&
                            <div className='pb-5'>
                                <div className='pb-2'>
                                    <span className='fw-600'>Mietkosten (+Nebenkosten) </span>
                                </div>
                                <div className="">
                                    <div className="row g-3">
                                        <div className="col">
                                            <div className="row g-0 stepsFormInputs rightBorderDiv">
                                                <div className="col">
                                                    <input name="fourthStepInput" type="number" my={"month"} onChange={(e) => { props.setFourthStepInputs(e.target.value) }} defaultValue={props.fourthStepInputs[0]} className='w-100 borderRightInput' />
                                                </div>
                                                <div className="col-auto my-auto">
                                                    <div className='px-2'>
                                                        <span className='text-dark'>CHF</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-auto">
                                            <button type='button' className='stepsNextBtn' onClick={(e) => changeMY(e)}>M/Y</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                        <div className='row g-3'>
                            <div className="col-6">
                                <button className='stepsNextBtn' onClick={props.toPrev}>Zurück</button>
                            </div>
                            <div className="col-6">
                                <button className='stepsNextBtn'>Weiter</button>
                            </div>
                        </div>
                    </div>
                </div >
            </form>
        </div >
    )
}

export default FourthStep