import React from 'react'
import { ReactComponent as BlueBg } from '../../assets/images/plus/blueBg.svg'
import { ReactComponent as MobIlu } from '../../assets/images/plus/mobileIlu.svg'
import { ReactComponent as Users } from '../../assets/images/plus/users.svg'
import { ReactComponent as FormIlu } from '../../assets/images/plus/formIlu.svg'
import { ReactComponent as Vid1 } from '../../assets/images/plus/vid1.svg'

import { useState, useEffect } from 'react'
function FirstSection() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    useEffect(() => {
        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        }

        window.addEventListener('resize', changeWidth)

        return () => {
            window.removeEventListener('resize', changeWidth)
        }
    }, [])
    return (
        <>
            <div className="blueBg">
                {(screenWidth > 991.98) && (
                    <BlueBg />
                )}
                {(screenWidth < 575.98) && (
                    <div className="pt-5 pe-4 mb-5">
                        <div className="row g-0">
                            <div className="col">
                                <MobIlu />

                            </div>
                            <div className="col-auto my-auto">
                                <div>
                                    <span className='fw-500 fs-5 secondaryColor'>Das Leben lieben</span>
                                </div>
                            </div>
                        </div>
                        <div className="text-start p-4">
                            <span className='fw-700 fs-3 secondaryColor'>UNSERE Erfahre Sie hier  über PRO Life...</span>
                        </div>
                    </div>
                )}

            </div>

            <div className="container-xl px-4 px-xl-0 text-start">
                <div className="row gy-5 justify-content-between">
                    {(screenWidth > 575.98) && (
                        <div className="col-12 col-lg-6">
                            <div className='pb-5'>
                                <span className='plusTitle fw-700 triaryColor'>UNSERE Erfahre Sie hier mehr über PRO Life...AUFGABE</span>
                            </div>
                            <div className='pb-5'>
                                <span className='fs-5 fw-400 secondaryColor'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.</span>
                            </div>
                            <div className='pb-5'>
                                <button className='plusBtn fw-700 w-30 py-2 px-4 fs-5' >Get A Quote</button>
                            </div>
                            <div>
                                <div className="row gx-5 gy-4">
                                    <div className="col-5 pe-0">
                                        <div className="row gx-2 gy-0">
                                            <div className="col-auto">
                                                <Users />
                                            </div>
                                            <div className="col my-auto">
                                                <span className='fw-600 secondaryColor fs-5'>Dolor sit amet</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-5">
                                        <div className="row gx-2 gy-0">
                                            <div className="col-auto">
                                                <Users />
                                            </div>
                                            <div className="col my-auto">
                                                <span className='fw-600 secondaryColor fs-5'>Dolor sit amet</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-5">
                                        <div className="row gx-2 gy-0">
                                            <div className="col-auto">
                                                <Users />
                                            </div>
                                            <div className="col my-auto">
                                                <span className='fw-600 secondaryColor fs-5'>Dolor sit amet</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-5">
                                        <div className="row gx-2 gy-0">
                                            <div className="col-auto">
                                                <Users />
                                            </div>
                                            <div className="col my-auto">
                                                <span className='fw-600 secondaryColor fs-5'>Dolor sit amet</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="col-12 col-lg-6 col-xl-auto order-2 order-md-1">
                        <div className="plusForm p-5">
                            <div className='pb-4'>
                                <span className='fs-3 fw-700 plusFormTitle' style={{color: 'white'}}>Lohnt sich eine Mitgliedschaft fur dich?</span>
                            </div>
                            <div className="pb-4">
                                <span className='fs-5 text-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                            </div>
                            <div className='pb-3'>
                                <input className='form-control plusInput p-3' type="text" placeholder='Vorname*' style={{background: 'white'}} />
                            </div>
                            <div className='pb-3' style={{ position: 'relative' }}>
                                <div>
                                    <select name="" id="" className='form-select plusInput plusSelectArrow p-3' style={{color: 'black !important'}}>
                                        <option value="">Vorname*</option>
                                    </select>
                                </div>
                                <div className='plusFormBtnDiv'>
                                    <button className='px-4 px-sm-5 py-3 finanuWhiteBtn'>Los Gehts</button>
                                </div>
                            </div>
                            <div className='formIluDiv'>
                                <FormIlu />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 order-1 order-md-2 pt-4 text-center">
                        <div style={{ width: '100%', maxWidth: '850px' }} className="mx-auto">
                            <div className="px-0 px-md-4 px-lg-5 pb-5">

                                <div className='pb-4'>
                                    <span className='fs-3 fw-700 secondaryColor'>Why on earth did we start an insurance company?</span>
                                </div>
                                <div className='pb-3'>
                                    <span className='secondaryColor fw-400 fs-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, </span>
                                </div>
                                {/* <div>
                                    <a href="" className='plusLink'>Click link Finanu</a>
                                </div> */}
                            </div>
                            <div className="videobackground pe-2 pt-3">
                                <div className=''>
                                    <Vid1 className="img-fluid pt-2" style={{ borderRadius: '20px', marginLeft: '-25px', marginBottom: '-25px' }}  />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default FirstSection