import React from 'react'
import WhiteBgArrow from '../../assets/images/whiteBgArrow.svg'

function Tipps() {
    return (
        <div className='paddingTopDiv px-4 mt-5 pb-3'>
            <div className='krankenFirstStep wrapDiv container-xl p-3 p-sm-5 ' style={{ position: 'relative' }}>
                <div className="whiteBgKranken">
                    <span className='firstBlueTitle fw-bold fs-1'>Fazit und Tipps</span>
                </div>
                <div className="pt-5">
                    <div className='pb-4 pb-sm-5'>
                        <div className="row g-3 g-sm-4">
                            <div className="col-auto">
                                <img src={WhiteBgArrow} alt="" />
                            </div>
                            <div className="col text-start">
                                <div>
                                    <span className='krankenSubtitle'>
                                        Die Nutzung einer unabhängigen Vergleichsplattform, bietet Kunden den Mehrwert, dass Sie verschiedene Offerten von Gesellschaften ohne grossen Aufwand vergleichen können.
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
                                    <span className='krankenSubtitle'>
                                        Bei einem Vergleich ist es wichtig nicht nur auf den Preis zu achten. Oftmals hat man mit der günstigsten Offerte auch gewisse Leistungseinbussen.
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
                                    <span className='krankenSubtitle'>
                                        Lassen Sie sich bei offenen Fragen persönlich beraten, um das passende Angebot zu finden.
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
                                    <span className='krankenSubtitle'>
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

export default Tipps