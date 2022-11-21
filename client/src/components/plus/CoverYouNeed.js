import React from 'react'
import car from '../../assets/images/plus/car.svg'

function CoverYouNeed() {
    return (
        <div className='container-xl px-4 px-xl-0'>
            <div className='pb-3'>
                <span className='fs-1 fw-700 secondaryColor'>Get the cover you need</span>
            </div>
            <div className='pb-5'>
                <span className='secondaryColor fw-500 fs-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie</span>
            </div>
            <div>
                <div className="row g-3 text-start">
                    <div className="col-12 col-sm-6 col-lg-3 col-xl-3 pluscoverbackground">
                        <div className="plusCoverDiv px-4 py-5">
                            <div className="pb-3">
                                <img src={car} />
                            </div>
                            <div className='pb-3'>
                                <span className='fs-5 fw-700 secondaryColor'>Lorem Ipsum</span>
                            </div>
                            <div className="pb-3">
                                <span className='fw-600 secondaryColor'>Laden Sie ire bestehende Offerte hoch oder starten Sie eine neue Anfrage.</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3 col-xl-3">
                        <div className="plusCoverDiv px-4 py-5">
                            <div className="pb-3">
                                <img src={car} />
                            </div>
                            <div className='pb-3'>
                                <span className='fs-5 fw-700 secondaryColor'>Lorem Ipsum</span>
                            </div>
                            <div className="pb-3">
                                <span className='fw-600 secondaryColor'>Laden Sie ire bestehende Offerte hoch oder starten Sie eine neue Anfrage.</span>

                            </div>

                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3 col-xl-3">
                        <div className="plusCoverDiv px-4 py-5">
                            <div className="pb-3">
                            <img src={car} />
                            </div>
                            <div className='pb-3'>
                                <span className='fs-5 fw-700 secondaryColor'>Lorem Ipsum</span>
                            </div>
                            <div className="pb-3">
                                <span className='fw-600 secondaryColor'>Laden Sie ire bestehende Offerte hoch oder starten Sie eine neue Anfrage.</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3 col-xl-3">
                        <div className="plusCoverDiv px-4 py-5">
                            <div className="pb-3">
                                <img src={car} />
                            </div>
                            <div className='pb-3'>
                                <span className='fs-5 fw-700 secondaryColor'>Lorem Ipsum</span>
                            </div>
                            <div className="pb-3">
                                <span className='fw-600 secondaryColor'>Laden Sie ire bestehende Offerte hoch oder starten Sie eine neue Anfrage.</span>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoverYouNeed