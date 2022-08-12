import React from 'react'
import { useState } from 'react'
import BlueBlob from '../../assets/images/blueBlob.svg'
import Book from '../../assets/images/rechtsschutzImgs/rechtsschutzBook.png'
import Einzel from '../../assets/images/rechtsschutzImgs/einzel.svg'
import Familie from '../../assets/images/rechtsschutzImgs/familie.svg'
import Building from '../../assets/images/rechtsschutzImgs/building.svg'
import Privat from '../../assets/images/rechtsschutzImgs/privat.svg'
import Step2First from '../../assets/images/rechtsschutzImgs/step2First.svg'
import Step2Second from '../../assets/images/rechtsschutzImgs/step2Second.svg'
import Step2Third from '../../assets/images/rechtsschutzImgs/step2Third.svg'
import Step3First from '../../assets/images/rechtsschutzImgs/step3First.png'


import '../../assets/css/rechtsschutz.css'
function RechtsschutzSteps() {
    const [step, setStep] = useState(0);
    const onNext = () => setStep(step + 1);
    const onPrevious = () => setStep(step - 1);
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
                        <form action="" className='mb-0'>
                            <div className={`${(step === 0) ? 'd-block' : 'd-none'}`}>
                                <div className='pb-5' style={{ wordBreak: 'break-all' }}>
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
                                <div className='pt-5'>
                                    <button className='bg-transparent border-0' onClick={onNext}>
                                        <div className="row gx-2 gy-0 justify-content-center">
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
                            <div className={`${(step === 1) ? 'd-block' : 'd-none'}`}>
                                <div className='pb-5' style={{ wordBreak: 'break-all' }}>
                                    <span className='fw-700 fs-4'>Für wen suchen Sie eine<br></br>
                                        Rechtsschutzversicherung?</span>
                                </div>
                                <div className="row g-4 g-md-5 justify-content-evenly">
                                    <div className="col-6 col-md-4 col-lg-3">
                                        <label htmlFor="Kosten" className='containerRes w-100 h-100'>
                                            <input type="radio" id='Kosten' name='who1' hidden />
                                            <div className='checkmarkRes px-1 mb-2'><img src={Step2First} className="img-fluid" alt="" /></div>
                                            <span className='underCheckmarkSpan'>Tiefe Kosten</span>
                                        </label>
                                    </div>
                                    <div className="col-6 col-md-4 col-lg-3">
                                        <label htmlFor="Weltweite" className='containerRes w-100'>
                                            <input type="radio" id='Weltweite' name='who1' hidden />
                                            <div className='checkmarkRes px-1 mb-2'><img src={Step2Second} className="img-fluid" alt="" /></div>
                                            <span className='underCheckmarkSpan'>Weltweite Deckung</span>
                                        </label>
                                    </div>
                                    <div className="col-6 col-md-4 col-lg-3">
                                        <label htmlFor="Guter" className='containerRes w-100 h-100'>
                                            <input type="radio" id='Guter' name='who1' hidden />
                                            <div className='checkmarkRes px-1 mb-2'><img src={Step2Third} className="img-fluid" alt="" /></div>
                                            <span className='underCheckmarkSpan'>Guter Kundendienst</span>
                                        </label>
                                    </div>
                                </div>
                                <div className='pt-5'>
                                    <div className="row g-0 justify-content-around">
                                        <div className="col-auto">
                                            <button className='bg-transparent border-0' onClick={onPrevious}>
                                                <div className="row gx-2 gy-0 justify-content-center">
                                                    <div className="col-auto my-auto">
                                                        <svg width="16" viewBox="0 0 19 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M3.86677 15.6051L15.0938 5.56609C16.0738 4.69009 17.0648 3.82509 18.0258 2.92809C18.2051 2.79203 18.3545 2.62051 18.4646 2.4242C18.5747 2.22788 18.6432 2.011 18.6658 1.78705C18.6884 1.5631 18.6646 1.33689 18.596 1.12253C18.5273 0.908167 18.4153 0.710244 18.2668 0.541093C18.1122 0.389704 17.9286 0.271212 17.727 0.192796C17.5254 0.11438 17.31 0.0776731 17.0938 0.0848705C16.8776 0.0920679 16.6651 0.143031 16.4692 0.234681C16.2732 0.326332 16.0979 0.456758 15.9538 0.618089C10.9078 5.12009 5.8671 9.62809 0.831768 14.1421C-0.282232 15.1421 -0.278227 16.0841 0.849773 17.0971C5.88111 21.6151 10.9231 26.1214 15.9758 30.6161C16.1184 30.7788 16.2934 30.9101 16.4895 31.0015C16.6856 31.0929 16.8986 31.1425 17.115 31.1472C17.3313 31.1518 17.5463 31.1113 17.7461 31.0283C17.946 30.9453 18.1263 30.8216 18.2758 30.6651C18.4268 30.4967 18.5406 30.2984 18.6098 30.0831C18.6789 29.8678 18.7019 29.6403 18.6772 29.4155C18.6524 29.1907 18.5806 28.9737 18.4663 28.7786C18.352 28.5834 18.1978 28.4146 18.0138 28.2831C14.1044 24.7651 10.1858 21.2574 6.25778 17.7601C5.47978 17.0621 4.70477 16.3601 3.86677 15.6051Z" fill="white" />
                                                        </svg>
                                                    </div>
                                                    <div className="col-auto my-auto">
                                                        <div>
                                                            <span>Zurück</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </button>
                                        </div>
                                        <div className="col-auto">
                                            <button className='bg-transparent border-0' onClick={onNext}>
                                                <div className="row gx-2 gy-0 justify-content-center">
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

                                </div>
                            </div>
                            <div className={`${(step === 2) ? 'd-block' : 'd-none'}`}>
                                <div className='pb-4 text-start'>
                                    <div className='pb-2'>
                                        <span className='fw-700'>Bitte geben Sie hier ihre Angaben ein.</span>
                                    </div>
                                    <div className='pb-4'>
                                        <div className="row g-4">
                                            <div className="col-4 text-center">
                                                <label htmlFor="female" className='containerRes2 w-100 h-100'>
                                                    <input type="radio" id='female' name='who3' hidden />
                                                    <div className='checkmarkRes2'><img src={Step3First} className="img-fluid" alt="" /></div>
                                                </label>
                                            </div>
                                            <div className="col-4 text-center">
                                                <label htmlFor="male" className='containerRes2 w-100 h-100'>
                                                    <input type="radio" id='male' name='who3' hidden />
                                                    <div className='checkmarkRes2'><img src={Step3First} className="img-fluid" alt="" /></div>
                                                </label>
                                            </div>
                                            <div className="col-4 text-center">
                                                <label htmlFor="notSpecified" className='containerRes2 w-100 h-100'>
                                                    <input type="radio" id='notSpecified' name='who3' hidden />
                                                    <div className='checkmarkRes2'><img src={Step3First} className="img-fluid" alt="" /></div>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='pb-4'>
                                        <div className='pb-2'>
                                            <span className='fw-700'>Vorname und Nachname / Firmenname</span>
                                        </div>
                                        <div>
                                            <input className='step3InputRechtss' type="text" name="" placeholder='Vorname und Nachname / Firmenname' id="" />
                                        </div>
                                    </div>
                                    <div className='pb-4'>
                                        <div className="row g-4">
                                            <div className="col-12 col-md-6">
                                                <div className='pb-2'>
                                                    <span className='fw-700'>Postleitzahl</span>
                                                </div>
                                                <div className="">
                                                    <input className='step3InputRechtss' type="text" name="" placeholder='PLZ' id="" />
                                                </div>
                                            </div>
                                            <div className='col-12 col-md-6'>
                                                <div className='pb-2'>
                                                    <span className='fw-700'>Ort</span>
                                                </div>
                                                <div className="">
                                                    <input className='step3InputRechtss' type="text" name="" placeholder='Ort' id="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='pb-4'>
                                        <div className='pb-2'>
                                            <span className='fw-700'>Strasse</span>
                                        </div>
                                        <div>
                                            <input className='step3InputRechtss' type="text" name="" placeholder='Strasse' id="" />
                                        </div>
                                    </div>
                                    <div className='pb-4'>
                                        <div className="row g-4">
                                            <div className="col-12 col-md-6">
                                                <div className='pb-2'>
                                                    <span className='fw-700'>Geburtsdatum</span>
                                                </div>
                                                <div className="">
                                                    <input className='step3InputRechtss' type="date" name="" placeholder='PLZ' id="" />
                                                </div>
                                            </div>
                                            <div className='col-12 col-md-6'>
                                                <div className='pb-2'>
                                                    <span className='fw-700'>Telefonnummer</span>
                                                </div>
                                                <div className="">
                                                    <input className='step3InputRechtss' type="text" name="" placeholder='Telefonnummer' id="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='pb-4'>
                                        <div className='pb-2'>
                                            <span className='fw-700'>E-mail</span>
                                        </div>
                                        <div>
                                            <input className='step3InputRechtss' type="text" name="" placeholder='E-mail' id="" />
                                        </div>
                                    </div>
                                    <div className='text-center'>
                                        <button className='step3RechtssBtn'>Vergleich anfordern</button>
                                    </div>
                                </div>
                                <button className='bg-transparent border-0 px-0' onClick={onPrevious}>
                                    <div className="row gx-2 gy-0 justify-content-center">
                                        <div className="col-auto my-auto">
                                            <svg width="16" viewBox="0 0 19 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3.86677 15.6051L15.0938 5.56609C16.0738 4.69009 17.0648 3.82509 18.0258 2.92809C18.2051 2.79203 18.3545 2.62051 18.4646 2.4242C18.5747 2.22788 18.6432 2.011 18.6658 1.78705C18.6884 1.5631 18.6646 1.33689 18.596 1.12253C18.5273 0.908167 18.4153 0.710244 18.2668 0.541093C18.1122 0.389704 17.9286 0.271212 17.727 0.192796C17.5254 0.11438 17.31 0.0776731 17.0938 0.0848705C16.8776 0.0920679 16.6651 0.143031 16.4692 0.234681C16.2732 0.326332 16.0979 0.456758 15.9538 0.618089C10.9078 5.12009 5.8671 9.62809 0.831768 14.1421C-0.282232 15.1421 -0.278227 16.0841 0.849773 17.0971C5.88111 21.6151 10.9231 26.1214 15.9758 30.6161C16.1184 30.7788 16.2934 30.9101 16.4895 31.0015C16.6856 31.0929 16.8986 31.1425 17.115 31.1472C17.3313 31.1518 17.5463 31.1113 17.7461 31.0283C17.946 30.9453 18.1263 30.8216 18.2758 30.6651C18.4268 30.4967 18.5406 30.2984 18.6098 30.0831C18.6789 29.8678 18.7019 29.6403 18.6772 29.4155C18.6524 29.1907 18.5806 28.9737 18.4663 28.7786C18.352 28.5834 18.1978 28.4146 18.0138 28.2831C14.1044 24.7651 10.1858 21.2574 6.25778 17.7601C5.47978 17.0621 4.70477 16.3601 3.86677 15.6051Z" fill="white" />
                                            </svg>
                                        </div>
                                        <div className="col-auto my-auto">
                                            <div>
                                                <span>Zurück</span>
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </form>
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