import React from 'react'
import { useState } from 'react'
import HausratHouse from '../../assets/images/hausratHouse.svg'

function HausratBlueForm() {
    const [interes, setInteres] = useState()
    return (
        <>
            <div className='wrapDiv container-xl px-4 px-xl-0 mx-auto'>
                <div className="col-12 col-sm-11 col-md-9 col-lg-8 col-xl-6 hausratBlueDiv mx-auto">
                    <div className='px-4 px-md-5 pt-4 pt-md-5 text-start mx-0 mx-sm-4'>
                        <div className='pb-4'>
                            <div className='pb-2'>
                                <span >Gesamtkaufpreis</span>
                            </div>
                            <div>
                                <input type="number" className='hausratFormInputs' />
                            </div>
                        </div>
                        <div className='pb-4'>
                            <div className='pb-2'>
                                <span >Jährliches Einkommen</span>
                            </div>
                            <div>
                                <input type="number" className='hausratFormInputs' />
                            </div>
                        </div>
                        <div className='pb-4'>
                            <div className='pb-2'>
                                <span >Eigenkapital</span>
                            </div>
                            <div>
                                <input type="number" className='hausratFormInputs' />
                            </div>
                        </div>
                        <div className='pb-2'>
                            <div className='pb-2'>
                                <div className="row g-0">
                                    <div className="col">
                                        <span >Angenommener Zinssatz</span>

                                    </div>
                                    <div className="col-auto">
                                        <span>{interes}%</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <input type="range" min={0.4} step={0.05} max={2} onChange={(e) => setInteres(e.target.value)} defaultValue="1" className='hausratRangeInput form-range' />
                            </div>
                        </div>
                    </div>
                    <div className='hausratHouseDiv'>
                        <img src={HausratHouse} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HausratBlueForm