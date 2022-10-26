import React from 'react'

function SelectCar(props) {
    return (
        <div>
            <div>
                <div className="pb-4">
                    <span className='firstBlueTitle fs-4'>
                        Neueinlösung eines Fahrzeuges
                    </span>
                </div>
                <div className="pb-5">
                    <div className="text-center">
                        <div className="pb-4">
                            <input type="text" className='krankenInputStyle krankenInputStepStyle p-3 autoCheckbox' placeholder='Marke' />
                        </div>
                        <div className="pb-4">
                            <input type="text" className='krankenInputStyle krankenInputStepStyle p-3 autoCheckbox' placeholder='Modell' />
                        </div>
                        <div className="">
                            <input type="text" className='krankenInputStyle krankenInputStepStyle p-3 autoCheckbox' placeholder='Modelljahr' />
                        </div>
                    </div>
                </div>

                <button className='nextBtnKranken' onClick={() => { props.setstep(props.step + 1) }}>
                    Weiter
                </button>
            </div>
        </div>


    )
}

export default SelectCar