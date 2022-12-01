import React from 'react'
import IconNr1 from '../../assets/images/rechtsschutzImgs/IconNr1Dark.svg'
import IconNr2 from '../../assets/images/newimages/libri.svg'
import IconNr3 from '../../assets/images/newimages/payment2-07.svg'
import IconNr4 from '../../assets/images/rechtsschutzImgs/Konflikti.svg'
import IconNr5 from '../../assets/images/rechtsschutzImgs/final-01.svg'
import IconNr6 from '../../assets/images/rechtsschutzImgs/IconNr6.svg'
import IconNr7 from '../../assets/images/newimages/parja.svg'
import IconNr8 from '../../assets/images/rechtsschutzImgs/Law.svg'

import IconNr1Dark from '../../assets/images/rechtsschutzImgs/darkmode-05.svg'
import IconNr2Dark from '../../assets/images/rechtsschutzImgs/darkmode-09.svg'
import IconNr3Dark from '../../assets/images/rechtsschutzImgs/IconNr3Dark.svg'
import IconNr4Dark from '../../assets/images/rechtsschutzImgs/IconNr4Dark.svg'
import IconNr5Dark from '../../assets/images/rechtsschutzImgs/IconNr5Dark.svg'
import IconNr6Dark from '../../assets/images/rechtsschutzImgs/darkmode-06.svg'
import IconNr7Dark from '../../assets/images/rechtsschutzImgs/darkmode-08.svg'
import IconNr8Dark from '../../assets/images/rechtsschutzImgs/IconNr8Dark.svg'

function Privatenrechtsschutz(props) {
    return (
        <div>
            <div className='wrapDiv container-xl px-4 px-xl-0 mx-auto'>
                <div className='pb-5'>
                    <span className='fw-700 fs-1 titleoffolgende'>
                        Folgende Leistungen werden abgedeckt:
                    </span>
                </div>
                <div className="row g-3 bodyCounterPadding justify-content-center">
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <div className='px-4 whiteCardKranken privatenImgSize pt-0 pb-4'>
                            <div className=''>
                                {!props.darkMode
                                    ? <img src={IconNr1} alt="" />
                                    : <img src={IconNr1Dark} alt="" />
                                }
                            </div>
                            <div >
                                <span className='fw-500'>Beratung durch Juristen und Anwälte</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <div className='px-4 whiteCardKranken privatenImgSize pt-0 pb-4'>
                            <div className=''>
                                {!props.darkMode
                                    ? <img src={IconNr2} alt="" />
                                    : <img src={IconNr2Dark} alt="" />
                                }
                            </div>
                            <div >
                                <span className='fw-500'>Übernahme von Anwaltskosten</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <div className='px-4 whiteCardKranken privatenImgSize pt-0 pb-4'>
                            <div className=''>
                            {!props.darkMode
                                    ? <img src={IconNr3} alt="" />
                                    : <img src={IconNr3Dark} alt="" />
                                }
                            </div>
                            <div >
                                <span className='fw-500'>Bezahlung der Gerichtskosten</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <div className='px-4 whiteCardKranken privatenImgSize pt-0 pb-4'>
                            <div className=''>
                            {!props.darkMode
                                    ? <img src={IconNr4} alt="" />
                                    : <img src={IconNr4Dark} alt="" />
                                }
                            </div>
                            <div >
                                <span className='fw-500'>Mediationskosten</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <div className='px-4 whiteCardKranken privatenImgSize pt-0 pb-4'>
                            <div className=''>
                                {!props.darkMode
                                    ? <img src={IconNr5} alt="" />
                                    : <img src={IconNr5Dark} alt="" />
                                }
                            </div>
                            <div >
                                <span className='fw-500'>Übersetzungskosten</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <div className='px-4 whiteCardKranken privatenImgSize pt-0 pb-4'>
                            <div className=''>
                                {!props.darkMode
                                    ? <img src={IconNr6} alt="" />
                                    : <img src={IconNr6Dark} alt="" />
                                }

                            </div>
                            <div >
                                <span className='fw-500'>Kostenübernahme von Gutachten</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <div className='px-3 whiteCardKranken privatenImgSize pt-0 pb-4'>
                            <div className=''>
                                {!props.darkMode
                                    ? <img src={IconNr7} alt="" />
                                    : <img src={IconNr7Dark} alt="" />
                                }

                            </div>
                            <div >
                                <span className='fw-500'>Bezahlung der Prozessentschädigung an die Gegenseite</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <div className='px-4 whiteCardKranken privatenImgSize pt-0 pb-4'>
                            <div className=''>
                            {!props.darkMode
                                    ? <img src={IconNr8} alt="" />
                                    : <img src={IconNr8Dark} alt="" />
                                }
                            </div>
                            <div >
                                <span className='fw-500'>Freie Anwaltswahl</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className='pb-5 text-start text-md-center'>
                        <span className='fw-700 firstBlueTitle fs-1'>Was gibt es für <br></br>Rechtsschutzversicherungen</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Privatenrechtsschutz