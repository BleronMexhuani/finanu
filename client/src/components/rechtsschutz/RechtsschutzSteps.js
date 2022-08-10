import React from 'react'
import Book from '../../assets/images/rechtsschutzImgs/rechtsschutzBook.png'
import Einzel from '../../assets/images/rechtsschutzImgs/einzel.svg'
import Familie from '../../assets/images/rechtsschutzImgs/familie.svg'
import Building from '../../assets/images/rechtsschutzImgs/building.svg'
import Privat from '../../assets/images/rechtsschutzImgs/privat.svg'
import BlueBlob from '../../assets/images/blueBlob.svg'

import '../../assets/css/rechtsschutz.css'
function RechtsschutzSteps() {

    return (
        <div>
            <div className="blueBgRechtss">
                <div className="px-4">
                    <div>
                        <img src={Book} alt="" />
                    </div>
                    <div className='pt-2 pb-5'>
                        <span className='fw-700 fs-4'>Jetzt passende<br></br>
                            Rechtsschutzversicherung finden!</span>
                    </div>
                </div>
                <div className="wrapDiv container-xl px-4 px-xl-0 mx-auto">
                    <div className="col-12 col-lg-9 col-xl-7 hausratBlueDiv mb-5 mx-auto p-4 p-md-5">
                        <div className='pb-5'>
                            <span className='fw-700 fs-4'>Für wen suchen Sie eine<br></br>
                                Rechtsschutzversicherung?</span>
                        </div>
                        <div className="row g-4 g-md-5">
                            <div className="col-6 col-md-3">
                                <label htmlFor="Einzelpersonen" className='containerRes w-100 h-100'>
                                    <input type="radio" id='Einzelpersonen' name='who' hidden />
                                    <div className='checkmarkRes px-1 mb-2'><img src={Einzel} className="img-fluid" alt="" /></div>
                                    <span className='underCheckmarkSpan'>Einzelpersonen</span>
                                </label>
                            </div>
                            <div className="col-6 col-md-3">
                                <label htmlFor="Familien" className='containerRes w-100'>
                                    <input type="radio" id='Familien' name='who' hidden />
                                    <div className='checkmarkRes px-1 mb-2'><img src={Familie} className="img-fluid" alt="" /></div>
                                    <span className='underCheckmarkSpan'>Familien</span>
                                </label>
                            </div>
                            <div className="col-6 col-md-3">
                                <label htmlFor="Unternehmer" className='containerRes w-100 h-100'>
                                    <input type="radio" id='Unternehmer' name='who' hidden />
                                    <div className='checkmarkRes px-1 mb-2'><img src={Building} className="img-fluid" alt="" /></div>
                                    <span className='underCheckmarkSpan'>Unternehmer</span>
                                </label>
                            </div>
                            <div className="col-6 col-md-3">
                                <label htmlFor="Privat" className='containerRes w-100 h-100'>
                                    <input type="radio" id='Privat' name='who' hidden />
                                    <div className='checkmarkRes px-1 mb-2'><img src={Privat} className="img-fluid" alt="" /></div>
                                    <span className='underCheckmarkSpan'>Privat + Unternehmer</span>
                                </label>
                            </div>

                        </div>
                        <div className='pt-4'>
                            <button className='bg-transparent border-0'>
                                <div className="row gx-1 gy-0 justify-content-center">
                                    <div className="col-auto my-auto">
                                        <div>
                                            <span>Weiter</span>
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <svg width="16" viewBox="0 0 19 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.819 15.5216L3.59204 5.48264C2.61204 4.60664 1.62005 3.74164 0.660045 2.84464C0.480733 2.70858 0.331359 2.53706 0.221248 2.34074C0.111137 2.14443 0.042641 1.92755 0.0200305 1.7036C-0.00258 1.47965 0.0211916 1.25344 0.0898395 1.03908C0.158487 0.824716 0.27055 0.626793 0.419048 0.457642C0.573584 0.306095 0.757261 0.187471 0.958965 0.108963C1.16067 0.0304548 1.3762 -0.0063132 1.59253 0.000885127C1.80885 0.00808346 2.02146 0.0591051 2.21749 0.150849C2.41353 0.242592 2.58892 0.373153 2.73304 0.534638C7.77904 5.03664 12.8197 9.54464 17.855 14.0586C18.968 15.0586 18.965 16.0006 17.837 17.0136C12.8057 21.5316 7.76371 26.038 2.71104 30.5326C2.56841 30.6954 2.39347 30.8266 2.19734 30.9181C2.00121 31.0095 1.78818 31.0591 1.57183 31.0637C1.35549 31.0683 1.14055 31.0278 0.9407 30.9448C0.740853 30.8618 0.560471 30.7381 0.411037 30.5816C0.260022 30.4133 0.146219 30.215 0.0770526 29.9997C0.00788633 29.7844 -0.0150865 29.5569 0.00963927 29.3321C0.034365 29.1073 0.106234 28.8902 0.220546 28.6951C0.334859 28.5 0.489051 28.3311 0.673046 28.1996C4.58238 24.6816 8.50104 21.174 12.429 17.6766C13.206 16.9786 13.981 16.2756 14.819 15.5216Z" fill="white" />
                                        </svg>
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className="col-12 col-lg-9 col-xl-7 mx-auto ">
                        <div className='py-4 my-5'>
                            <img src={BlueBlob} alt="" />
                        </div>
                        <div className='mb-4'>
                            <span style={{ color: '#50B8E7' }} className='fw-700 fs-3'>KURZ ERKLÄRT</span>
                        </div>
                        <div>
                            <div className='pb-3'>
                                <span className='fw-700 fs-1'>
                                    Wozu Rechtsschutz?
                                </span>
                            </div>
                            <div className='pb-4'>
                                <span>Nicht immer läuft alles so wie es soll. Auch Rechtsschutzversicherungen sind<br></br> deshalb zu bedenken, um bei einem Rechtsstreit abgesichert zu sein.</span>
                            </div>
                            <div className='pb-4'>
                                <span>
                                    Der Privatrechtsschutz unterstützt Sie bei privatrechtlichen Streitigkeiten oder<br></br>
                                    Meinungsverschiedenheiten – zum Beispiel mit den Nachbarn, dem Arbeitgeber,<br></br>
                                    der Versicherungsgesellschaft, der AHV, der IV oder der Pensionskasse.<br></br>
                                </span>
                            </div>
                            <div>
                                <span>
                                    Erfahren Sie mehr zum Thema auf finanu oder in einem persönlichen<br></br> Beratungsgespräch.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default RechtsschutzSteps