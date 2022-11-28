import React from 'react'

function FifthStep(props) {
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

    const handleFifthStep = (e) => {
        e.preventDefault()
        const value = []

        for (let i = 0; i < e.target.length - 1; i++) {
            if (e.target[i].name === 'fifthStepInput') {
                value.push(parseInt(e.target[i].value))
            }
        }

        props.setFifthStepInputs(value)
        props.toNext()
    }
    

    return (
        <div>
            <form className='m-0' onSubmit={handleFifthStep}>
                <div className="col-12 col-sm-9 col-md-7 col-lg-6 col-xl-4 stepsBlueDiv px-4 px-sm-5 pb-5 pt-4 mx-auto">
                    <div className='pb-4'>
                        <span className='fs-5 fw-800 text-light'>Familie</span>
                    </div>
                    <div className='text-start'>
                        <div className='pb-5'>
                            <div className='pb-2'>
                                <span className='fw-600'>Kinderbetreuung </span>
                            </div>
                            <div className="">
                                <div className="row g-3">
                                    <div className="col">
                                        <div className="row g-0 stepsFormInputs rightBorderDiv">
                                            <div className="col">
                                                <input name="fifthStepInput" onFocus={(e) => { if(e.target.value === '0') {e.target.value = ''}}} onChange={(e) => { props.setFifthStepInputs(e.target.value) }} defaultValue={props.fifthStepInputs[0]} type="number" my={"month"} className='w-100 borderRightInput' />
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
                                <span className='fw-600'>Alimente</span>
                            </div>
                            <div className="">
                                <div className="row g-3">
                                    <div className="col">
                                        <div className="row g-0 stepsFormInputs rightBorderDiv">
                                            <div className="col">
                                                <input name="fifthStepInput" onFocus={(e) => { if(e.target.value === '0') {e.target.value = ''}}} onChange={(e) => { props.setFifthStepInputs(e.target.value) }} defaultValue={props.fifthStepInputs[1]} type="number" my={"month"} className='w-100 borderRightInput' />
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
        </div>
    )
}

export default FifthStep