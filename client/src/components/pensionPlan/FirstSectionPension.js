import React from 'react'
import {ReactComponent as First} from '../../assets/images/pension/First.svg'
import {ReactComponent as FirstDark} from '../../assets/images/pension/FirstDark.svg'

function FirstSectionPension(props) {
  return (
    <>
            <div className="container-xl px-4 px-xl-0 bodyCounterPadding">
                <div className="row justify-content-between gy-5 gy-md-0 gx-5">
                    <div className="col-12 col-md-6 col-lg-6 my-md-auto">
                        <div className='pb-3 text-start'>
                            <span className='fw-700 fs-1 firstBlueTitle'>Lieber sorglos steuern sparen, statt vorsorgelos steuern zahlen</span>
                        </div>
                        <div className='text-start pb-4'>
                            <span className='normalTextToWhite'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

                            </span>
                        </div>
                        <div className='text-start'>
                            <button onClick={props.toSteps} className='hausratBtn py-2'>
                                Lorem Ipsum
                            </button>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 my-md-auto">

                        <div className="">
                            <div>
                            {props.darkMode
                                        ? <FirstDark className="img-fluid" />
                                        : <First className="img-fluid" />
                                    }
                                
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
  )
}

export default FirstSectionPension