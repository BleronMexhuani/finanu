import React from 'react'
import House from '../../assets/images/pensionHouse.svg'
import ShakingHands from '../../assets/images/shakingHands.svg'
import Emigration from '../../assets/images/emigration.svg'
import Vaccine from '../../assets/images/vaccine.svg'
import OldLady from '../../assets/images/oldLady.svg'


function PensionCards() {
    return (
        <>
            <div className='container-xl px-4 px-xl-0'>
                <div className='pb-5'>
                    <span className='fs-3 fw-bold' style={{ color: '#11A3E6' }}>BEZUGSMÖGLICHKEITEN</span>
                </div>
                <div className='pb-5 mb-5'>
                    <div className="row g-4">
                        <div className="col-12 col-sm-6 col-lg">
                            <div className="pensionWhiteCards p-4 h-100">
                                <div className='pb-4'>
                                    <img src={House} alt="" />
                                </div>
                                <div>
                                    <span className='fw-500'>Self-occupied home</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg">
                            <div className="pensionWhiteCards p-4 h-100">
                                <div className='pb-4'>
                                    <img src={ShakingHands} alt="" />
                                </div>
                                <div>
                                    <span className='fw-500'>Self-employment</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg">
                            <div className="pensionWhiteCards p-4 h-100">
                                <div className='pb-4'>
                                    <img src={Emigration} alt="" />
                                </div>
                                <div>
                                    <span className='fw-500'>Emigration</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg">
                            <div className="pensionWhiteCards p-4 h-100">
                                <div className='pb-4'>
                                    <img src={Vaccine} alt="" />
                                </div>
                                <div>
                                    <span className='fw-500'>IV at least 50%</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg">
                            <div className="pensionWhiteCards p-4 h-100">
                                <div className='pb-4'>
                                    <img src={OldLady} alt="" />
                                </div>
                                <div>
                                    <span className='fw-500'>5 years before the pension</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='my-5 py-5'>
                    <div className="row g-0 justify-content-center">
                        <div className="col-12 col-md-6 col-lg-5">
                            <div className=''>
                                <span className='fs-3 fw-bold' style={{ color: '#84CDEE' }}>WIESO VORSORGEN?</span>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-5">
                            <div className='text-start'>
                                <span style={{ lineHeight: '29.28px' }}>Im Laufe des Lebens erarbeiten sich viele Menschen einen bestimmten Lebensstandard.
                                    Treten sie dann in den verdienten Ruhestand ein,
                                    können sie diesen Standard jedoch nicht mehr halten,
                                    weil die gesetzliche Rente sehr niedrig ausfällt.
                                    Daher ist es wichtig, sich möglichst früh mit der eigenen Altersvorsorge zu befassen.
                                    Wer in jungen Jahren mit dem Sparen für das Rentenalter beginnt,
                                    kann die Altersarmut vermeiden und das Leben im Ruhestand in vollen Zügen genießen.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PensionCards