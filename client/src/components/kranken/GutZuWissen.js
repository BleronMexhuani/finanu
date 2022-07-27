import React from 'react'
import WhiteBgArrow from '../../assets/images/whiteBgArrow.svg'
function GutZuWissen() {
    return (
        <div className='pt-5 pt-md-0 px-4'>
            <div className='krankenFirstStep wrapDiv container-xl p-4 p-sm-5 mt-5 mt-md-0' style={{ position: 'relative' }}>
                <div className="whiteBgKranken">
                    <span className='fs-1 fw-bold'>Gut zu wissen</span>
                </div>
                <div className="pt-5">
                    <div className='pb-5'>
                        <div className="row">
                            <div className="col-auto">
                                <img src={WhiteBgArrow} alt="" />
                            </div>
                            <div className="col text-start">
                                <div>
                                    <span className='krankenSubtitle' style={{ fontSize: "18px" }}>
                                        Die Krankenkassenprämien sinken 2022 voraussichtlich fast 1% und die
                                        Gesundheitskosten steigen jährlich ca. 1%.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='pb-5'>
                        <div className="row">
                            <div className="col-auto">
                                <img src={WhiteBgArrow} alt="" />
                            </div>
                            <div className="col text-start">
                                <div>
                                    <span className='krankenSubtitle' style={{ fontSize: "18px" }}>
                                        Ein Vergleich der Grund- und Zusatzversicherung ermöglicht eine Einsparung von
                                        bis zu 2237.- CHF pro Jahr!
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='pb-5'>
                        <div className="row">
                            <div className="col-auto">
                                <img src={WhiteBgArrow} alt="" />
                            </div>
                            <div className="col text-start">
                                <div>
                                    <span className='krankenSubtitle' style={{ fontSize: "18px" }}>
                                        Finanu verwendet die offizielle Datenbank des BAG. Der Vergleich ist unparteiisch
                                        und neutral.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='pb-5'>
                        <div className="row">
                            <div className="col-auto">
                                <img src={WhiteBgArrow} alt="" />
                            </div>
                            <div className="col text-start my-auto">
                                <div>
                                    <span className='krankenSubtitle' style={{ fontSize: "18px" }}>
                                    Ein Krankenkassenvergleich auf Finanu dauert durchschnittlich 3 Minuten.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GutZuWissen