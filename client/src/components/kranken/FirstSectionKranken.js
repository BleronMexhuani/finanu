import React from 'react'
import { ReactComponent as First } from '../../assets/images/krakenmainimg.svg'

function FirstSectionKranken(props) {
    return (
        <>
            <div className="container-xl px-4 px-xl-0 bodyCounterPadding">
                <div className="row justify-content-between gy-5 gy-md-0 gx-5">
                    <div className="col-12 col-md-6 col-lg-6 my-md-auto">
                        <div className='pb-3 text-start'>
                            <span className='fw-700 fs-1 firstBlueTitle'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
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
                                <First className="img-fluid" />

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default FirstSectionKranken