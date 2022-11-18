import React from 'react'
import { ReactComponent as Signature } from '../../assets/images/plus/signature.svg'
function OurStory(props) {

    return (
        <div className='container-xl px-4 px-xl-0'>
            <div className='text-start'>
                <div className="d-block d-md-none">
                    <div>
                        <span className='plusTitle fw-700 secondaryColor'>
                            Our story
                        </span>
                    </div>
                    <div className='pb-4'>
                        <span className='fw-600 secondaryColor'>AS TOLD BY OUR FOUNDERS</span>
                    </div>
                </div>
                <div className="row gx-0 gx-md-5 gx-lg-0 gy-5 gy-md-0 justify-content-between">
                    <div className="col-12 col-md-6 col-lg-5 order-2 order-md-1">
                        <div className="d-none d-md-block">
                            <div className='pb-4'>
                                <span className='plusTitle fw-700 secondaryColor'>
                                    Our story
                                </span>
                            </div>
                            <div className='pb-5'>
                                <span className='fw-600 secondaryColor'>AS TOLD BY OUR FOUNDERS</span>
                            </div>
                        </div>
                        <div>
                            <div className="row gx-5 justify-content-between text-center">
                                <div className="col-0 col-md-1 order-3 order-lg-1">

                                </div>
                                <div className="col-6 col-sm-4 order-1 order-md-1">
                                    <div className='pb-5'>
                                        <Signature className="img-fluid" />

                                    </div>
                                    <div className='pb-3'>
                                        <span className='fw-600 secondaryColor fs-5'>Gresatis Bytyqitiosm</span>
                                    </div>
                                    <div>
                                        <span className='fw-600 secondaryColor'>CO-CEO</span>
                                    </div>
                                </div>
                                <div className="col-6 col-sm-4 order-2 order-md-2">
                                    <div className='pb-5'>
                                        <Signature className="img-fluid" />

                                    </div>
                                    <div className='pb-3'>
                                        <span className='fw-600 secondaryColor fs-5'>Gresatis Bytyqitiosm</span>
                                    </div>
                                    <div>
                                        <span className='fw-600 secondaryColor'>CO-CEO</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 order-1 order-md-2">

                        <div className='pb-4'>
                            <span className='secondaryColor fw-700 fs-1'>We learn from the past, but build for the future.</span>
                        </div>
                        <div className='secondaryColor fw-500 fs-5'>
                            <div className='pb-3'>
                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie</span>
                            </div>
                            <div className='pb-3'>
                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie</span>
                            </div>
                            <div className='pb-3'>
                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie turpis molestie Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie turpis </span>
                            </div>
                            <div className='pb-3'>
                                <span>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu molestie turpis molestie Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie turpis Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                                </span>
                            </div>
                        </div>

                        {(props.screenWidth < 575.98) && (
                            <div className="pt-4">
                                faq
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurStory