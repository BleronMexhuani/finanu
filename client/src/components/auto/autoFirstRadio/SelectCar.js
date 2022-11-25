import React from 'react'
import { useState } from 'react'
function SelectCar(props) {

    const [isFocused, setIsFocused] = useState(false)
    const [inputValue, setInputValue] = useState("")

    const showSelectDropdown = () => {
        setIsFocused(true)
    }

    const hideSelectDropdown = () => {
        setTimeout(() => {
            setIsFocused(false)
        }, 100);
    }

    const handleInput = (e) => {
        document.getElementById('inputChange').value = e.target.getAttribute('value')
        setInputValue(e.target.getAttribute('value'))
        setIsFocused(false)

    }

    return (
        <div>
            <div>
                <div className="pb-4">
                    <span className='fs-4 fw-700'>
                        Neueinlösung eines Fahrzeuges
                    </span>
                </div>
                <div className="pb-5">
                    <div className="text-center">
                        <div style={{ position: 'relative' }}>

                            <div className="pb-4">
                                <input type="text" autoComplete='off' className='krankenInputStyle krankenInputStepStyle p-3 autoCheckbox' placeholder='Marke' id="inputChange" onChange={(e) => setInputValue(e.target.value)} onFocus={showSelectDropdown} onBlur={hideSelectDropdown} />
                            </div>
                            {(isFocused) && (
                                <div className='krankenSelectDropdown autoCheckbox autoSelectDropdown'>
                                    <div className='selectOptionStyle' onClick={handleInput} value='test' >
                                        asd
                                    </div>

                                </div>
                            )}
                        </div>

                        <div className="pb-4">
                            <input type="text" className='krankenInputStyle krankenInputStepStyle p-3 autoCheckbox' placeholder='Modell' />
                        </div>
                        <div className="">
                            <input type="text" className='krankenInputStyle krankenInputStepStyle p-3 autoCheckbox' placeholder='Modelljahr' />
                        </div>
                    </div>
                </div>
                <div className='text-center'>
                    <button className='autoBtnStyle' onClick={() => { props.setstep(props.step + 1) }}>
                        Weiter
                    </button>
                </div>

            </div>
        </div>


    )
}

export default SelectCar