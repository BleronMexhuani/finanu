import React from 'react'
import TerminImg from '../../assets/images/terminImg.svg'
import Phone from '../../assets/images/telephoneImg.svg'
import Formular from '../../assets/images/formular.svg'
import LastIlustration from '../../assets/images/krankenIlustration.svg'

function Option2Kranken() {
    return (
        <div>
            <div className='wrapDiv container-xl px-4 pt-5 mt-5'>
                <div className='pb-5 mb-3'>
                    <div className='pb-3'>
                        <span className='fs-2 fw-bold' style={{ color: "#84cdee" }}>OPTION 2 : PERSONAL ADVICE</span>
                    </div>
                    <div className='pb-3'>
                        <span className='fs-2 fw-600'>PERSONAL ADVICE WITH AN ADVISER</span>
                    </div>
                    <div>
                        <span className='fw-500'>Don't have the time or desire to read up on the topic or do you already know what is important to you?<br></br>
                            Discuss your wishes with one of our customer advisors.<br></br>
                            He will help you to find a solution tailored to your needs and will be at your side from the request for a quote to<br></br> completion. Inquire now with the following options:</span>
                    </div>
                </div>
                <div>
                    <div className="row g-5 justify-content-center">
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                            <div className="krankenFirstStep px-4 py-5">
                                <div>
                                    <img src={TerminImg} alt="" />
                                </div>
                                <div className='pt-3'>
                                    <span className='fw-500' style={{color: 'white'}}>Termin buchen</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                            <div className="krankenFirstStep px-4 py-5">
                                <div>
                                    <img src={Phone} alt="" />
                                </div>
                                <div className='pt-3'>
                                    <span className='fw-500' style={{color: 'white'}}>Ruckrüf anfordern</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                            <div className="krankenFirstStep px-4 py-5">
                                <div>
                                    <img src={Formular} alt="" />
                                </div>
                                <div className='pt-3'>
                                    <span className='fw-500' style={{color: 'white'}}>Kontaktformular</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='pt-5'>
                        <img src={LastIlustration} className="lastIlustrationKranken img-fluid" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Option2Kranken