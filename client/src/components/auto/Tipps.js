import React from 'react'
import WhiteBgArrow from '../../assets/images/whiteBgArrow.svg'

function Tipps() {
    return (
        <div className='paddingTopDiv px-4'>
            <div className='pb-5 mb-5'>
                <div className='pb-3'>
                    <span className='finanuSubTitle fw-700'>More Information</span>
                </div>
                <div className='pb-5'>

                    <span>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,<br></br> when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,<br></br> but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,<br></br> and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </span>
                </div>

            </div>
            <div className='krankenFirstStep wrapDiv container-xl p-3 p-sm-5 ' style={{ position: 'relative' }}>
                <div className="whiteBgKranken">
                    <span className='firstBlueTitle fw-bold'>Fazit und Tipps</span>
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
                    <div className=''>
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tipps