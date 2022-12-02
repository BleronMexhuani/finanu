import React from 'react'
import Img1 from '../../assets/images/plus/ltBlueSectionImg.png'
function LtBlueSetion() {
    return (
        <div className='container-xl px-4 px-xl-0'>
            <div className="ltBlueSection p-4 p-md-5 ">
                <div className="col-12 col-md-11 col-lg-10 col-xl-8 col-xxl-8 text-start mx-auto">
                    <div className='pb-3 text-center' >
                        <span className='fs-1 fw-700 secondaryColor text-center'>Ihre Angebote un Rabatte mit Helsana+</span>
                    </div>
                    <div className='pb-2 text-center'>
                        <span className='fw-400 fs-6 secondaryColor'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin </span>
                    </div>
                    <div className='px-0 px-lg-5 pb-3'>
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
                    <div className="px-0 px-lg-5 pb-3">
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

                            {/* <select className="form-select selectofangebote  fs-5 fw-700 " aria-label="Default select example">
                                <option value="0" className='fs-6'>Lorem Ipsum lorem lorem</option>
                                <option value="1" className='fs-6'>One</option>
                                <option value="2" className='fs-6'>Two</option>
                                <option value="3" className='fs-6'>Three</option>
                            </select> */}

                            <select className="krankenSelectStyle selectofltblue form-select">
                                <option value="0" className='fs-6 textstyleofselect'>Lorem Ipsum lorem lorem</option>
                                <option value="1" className='fs-6 textstyleofselect'>One</option>
                                <option value="2" className='fs-6 textstyleofselect'>Two</option>
                                <option value="3" className='fs-6 textstyleofselect'>Three</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LtBlueSetion