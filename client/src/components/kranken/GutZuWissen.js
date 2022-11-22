import React from 'react'
import WhiteBgArrow from '../../assets/images/whiteBgArrow.svg'
function GutZuWissen() {
    return (
        <div className='pt-5 pt-md-0 px-4 bodyCounterPadding'>
            <div className='krankenFirstStep wrapDiv container-xl p-3 p-sm-5 negavtiveMt gutZuWissenDiv' style={{ position: 'relative' }}>
                <div className="whiteBgKranken">
                    <span className='fs-1 fw-bold'>Gut zu wissen</span>
                </div>
                <div className="pt-5 descriptionFS">
                    <div className='pb-4 pb-sm-5'>
                        <div className="row g-3 g-sm-4">
                            <div className="col-auto">
                                <img src={WhiteBgArrow} alt="" />
                            </div>
                            <div className="col text-start">
                                <div>
                                    <span className='krankenSubtitle descriptionFS'>
                                        Die Krankenkassenprämie steigt 2023 im Schnitt ca. 8% und die Gesundheitskosten steigen jährlich mehrere Prozent.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='pb-4 pb-sm-5'>
                        <div className="row g-3 g-sm-4">
                            <div className="col-auto">
                                <img src={WhiteBgArrow} alt="" />
                            </div>
                            <div className="col text-start">
                                <div>
                                    <span className='krankenSubtitle descriptionFS'>
                                        Ein Vergleich der Grund- und Zusatzversicherung ermöglicht eine Einsparung von
                                        bis zu 2237.- CHF pro Jahr!
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='pb-4 pb-sm-5'>
                        <div className="row g-3 g-sm-4">
                            <div className="col-auto">
                                <img src={WhiteBgArrow} alt="" />
                            </div>
                            <div className="col text-start">
                                <div>
                                    <span className='krankenSubtitle descriptionFS'>
                                        Finanu verwendet die offizielle Datenbank des BAG. Der Vergleich ist unparteiisch
                                        und neutral.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className=''>
                        <div className="row g-3 g-sm-4">
                            <div className="col-auto">
                                <img src={WhiteBgArrow} alt="" />
                            </div>
                            <div className="col text-start">
                                <div>
                                    <span className='krankenSubtitle descriptionFS'>
                                        Ein Krankenkassenvergleich auf Finanu dauert durchschnittlich 3 Minuten.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default GutZuWissen