import React from 'react'
import BlueBlob from "../../assets/images/blueBlob.svg"
function LastSectionRechtss() {
    return (
        <div className="wrapDiv container-xl px-4 px-xl-0 mx-auto pb-0 pb-md-5">
            <div className="col-12 col-lg-9 col-xl-7 mx-auto ">
                <div>
                    <span className='fw-700 fs-5' style={{ color: '#34ACE3' }}>Verkehrsrechtsschutz im<br></br>
                        Überblick</span>
                </div>
                <div className='pt-4 normalTextToWhite'>
                    <span>Die Verkehrsrechtsschutzversicherung unterstützt Sie bei Rechtsfällen und Streitigkeiten im Strassenverkehr. Weiter bietet der Verkehrsrechtsschutz<br></br>
                        rechtliche Hilfe durch Juristen und Anwälte bei Rechtsstreitigkeiten, die<br></br>
                        mit dem Kauf, Leasing oder Reparatur eines Fahrzeugs zusammenhängen.</span>
                </div>
            </div>
            <div className="col-12 col-lg-10 col-xl-8 mx-auto ">
                <div className='pt-5 mt-0 mt-md-5'>
                    <div className="row g-5">
                        <div className="col-12 col-sm-7 text-start">
                            <div className='pb-3'>
                                <span className='fw-700 fs-5' style={{ color: '#34ACE3' }}>
                                    Leistungen und Deckung
                                </span>
                            </div>
                            <div className='pb-4 normalTextToWhite'>
                                <span>
                                    Die Leistungen der Verkehrsrechtsschutz können von
                                    Versicherung zu Versicherung unter Umständen leicht
                                    abweichen.
                                </span>
                            </div>
                            <div className='pb-3'>
                                <span className='fw-700 normalTextToWhite' style={{ fontSize: '18px' }}>Folgende Leistungen werden abgedeckt:</span>
                            </div>
                            <div>
                                <ul className='normalTextToWhite'>
                                    <li>Beratung durch Juristen und Anwälte</li>
                                    <li>Übernahme von Anwaltskosten</li>
                                    <li>Bezahlung der Gerichtskosten</li>
                                    <li>Mediationskosten </li>
                                    <li>Übersetzungskosten</li>
                                    <li>Kostenübernahme von Gutachten</li>
                                    <li>Bezahlung der Prozessentschädigung an die Gegenseite</li>
                                </ul>
                            </div>

                        </div>
                        <div className="col my-auto">
                            <div className="pt-5 pt-sm-0">
                                <img src={BlueBlob} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LastSectionRechtss