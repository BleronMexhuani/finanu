import React from 'react'

function AktuelleHypothek() {
    return (
        <div>
            <div className="pt-5 mt-5 wrapDiv container-xl px-4 px-xl-0 mx-auto">
                <div className='px-0 px-md-4 px-lg-5'>
                    <div className="row g-0 pb-5">
                        <div className="col-12 col-md pb-4 pb-md-0">
                            <div className='text-start'>
                                <div className='pb-3'>
                                    <span className='finanuSubTitle fw-800' style={{ color: "#34ACE3" }}>Aktuelle Hypothekarzinsen​</span>
                                </div>
                                <div>
                                    <span className='normalTextToWhite'>Mit Finanu erhalten Sie attraktive Zinsen für die Finanzierung Ihren Immobilie und entscheiden unabhängig, welche Hypothekenform zu Ihren Bedurfnissen passt.</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-auto mt-auto">
                            <div className='pb-2'>
                                <button className='hausratBtn py-2'>Zum Hypothekenvergleich</button>
                            </div>
                        </div>
                    </div>
                    <div className='crookedText py-5'>
                        <div>
                            <span className='blackTextBig'>Flex/Saron ab *</span>
                        </div>
                        <div>
                            <span className='blueTextBig'>0,50%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AktuelleHypothek