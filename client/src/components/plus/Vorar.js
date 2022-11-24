import React from 'react'
import { ReactComponent as Ilu } from '../../assets/images/plus/vorarIlu.svg'
function Vorar() {
    return (
        <div className='container-xl px-4 px-xl-0 text-start'>
            <div className='pb-5 text-center'>
                <span className='fs-2 fw-700 triaryColor '>Vorarussetzungen  -  Vergunstigung  -  Mitgliederbeirtrag</span>
            </div>
            <div>
                <div className="row g-4">
                    <div className="col-lg-4 col-6">
                        <Ilu className="img-fluid" />
                    </div>
                    <div className="col fs-5 fw-600 my-auto secondaryColor">
                        <div className="pb-3">
                            <span className='fs-5 fw-700'>
                                Lorem Ipsum
                            </span>
                        </div>
                        <div className="pb-3">
                            <span className='fs-6 fw-400'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </span>
                        </div>
                        <div className="pb-3">
                            <span className='fs-6 fw-400'>
                                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
                            </span>
                        </div>
                        <div className="">
                            <span className='fs-6 fw-400'>
                                Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
                            </span>
                        </div>
                    </div>
                    <div className="col-lg-3 col-12 my-auto" style={{textAlign: '-webkit-center'}}>
                        <div className='cardofthelastcomponent d-flex'>
                            <div className='px-4 '>
                                <p className='text-center fw-400 pt-2'>ProLife Weiterempfehlen</p>
                                <p className='text-center fw-700 pt-2'>und für jede erfolgreiche Verfmittlung CHF 50.00 erhalten.</p>
                                <div className='text-center pt-1'>
                                    <button className='buttonofthelastcomponent py-1 px-3'>
                                        Meine Empfehlung
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='text-center my-3'>
                        <button className='lastcomponentbutton w-50 py-2 border-0 ' style={{borderRadius: '10px'}}>Get a qoute</button>
                    </div>
            </div>
        </div>
    )
}

export default Vorar