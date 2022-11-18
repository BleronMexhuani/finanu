import React from 'react'
import Img1 from '../../assets/images/plus/ltBlueSectionImg.png'
function LtBlueSetion() {
    return (
        <div className='container-xl px-4 px-xl-0'>
            <div className="ltBlueSection p-4 p-md-5 ">
                <div className="col-12 col-md-11 col-lg-10 col-xl-8 col-xxl-7 text-start mx-auto">
                    <div className='pb-3'>
                        <span className='fs-2 fw-700 secondaryColor'>Ihre Angebote un Rabatte mit Helsana+</span>
                    </div>
                    <div className='pb-5'>
                        <span className='fw-600 secondaryColor'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin </span>
                    </div>
                    <div className='px-0 px-lg-5 pb-5'>
                        <div className="row g-0 justify-content-between">
                            <div className="col-auto">
                                <img src={Img1} alt="" />
                            </div>
                            <div className="col-auto">
                                <img src={Img1} alt="" />
                            </div>
                            <div className="col-auto">
                                <img src={Img1} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="px-0 px-lg-5 pb-5">
                        <div className="row g-0 justify-content-between">
                            <div className="col-auto">
                                <img src={Img1} alt="" />
                            </div>
                            <div className="col-auto">
                                <img src={Img1} alt="" />
                            </div>
                            <div className="col-auto">
                                <img src={Img1} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='pt-5'>
                        <div className="topBottomBordersDiv py-4">
                            <span className='fs-5 fw-700 secondaryColor'>Lorem Ipsum lorem lorem</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LtBlueSetion