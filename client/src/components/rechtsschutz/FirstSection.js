import React from 'react'
import { ReactComponent as LawLight } from '../../assets/images/versicherungen/JawLight.svg'
import { ReactComponent as LawLightDark } from '../../assets/images/versicherungen/JawLightDark.svg'

function FirstSection(props) {
    return (
        <>
            <div className='container-xl px-4 px-xl-0 bodyCounterPadding'>
                <div className="row justify-content-between gy-5 gy-md-0 gx-5">
                    <div className="col-12 col-md-6 col-lg-6 my-md-auto">
                        <div className='pb-3 text-start'>
                            <span className='fw-700 fs-1 firstBlueTitle'>Jetzt passende<br></br>
                                <span style={{ wordBreak: 'break-all' }}>Rechtsschutzversicherung</span> finden!</span>
                        </div>
                        <div className='text-start pb-4'>
                            <span className='normalTextToWhite'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

                            </span>
                        </div>
                        <div className='text-start'>
                            <button onClick={props.toSteps} className='hausratBtn py-2'>
                                Rechtsschutzversicherung finden
                            </button>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 my-md-auto">

                        <div className="">
                            <div>
                                
                                {props.darkMode

                                    ? <LawLightDark className="img-fluid" />
                                    : <LawLight className="img-fluid" />
                                }
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default FirstSection