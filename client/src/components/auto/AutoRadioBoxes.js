import React from 'react'
import { useState } from 'react'
import FirstRadioChecked from './FirstRadioChecked'
import SecondRadioChecked from './SecondRadioChecked'
import MainImg from '../../assets/images/auto/mainImg.png'
import { ReactComponent as Checkbox1 } from '../../assets/images/auto/checkbox1.svg'
import { ReactComponent as Checkbox2 } from '../../assets/images/auto/checkbox2.svg'

function AutoRadioBoxes() {
    const [autoCheck, setAutoCheck] = useState(0)

    return (
        <div>
            <div className="wrapDiv container-xl px-4 px-xl-0 bodyCounterPadding">
                <div className="row justify-content-between gx-4 bodyCounterPadding">
                    <div className="col-12 col-md-6 col-lg-5 col-xl-4 text-start">
                        <div className='pb-5 pb-md-0 pe-0 pe-lg-5'>
                            <img src={MainImg} className="img-fluid" alt="" />
                        </div>

                    </div>
                    <div className="col-12 col-md-6 col-lg-7 col-xl-7 text-start">
                        <div className='fw-500 fs-5 normalTextToWhite'>
                            <span>
                                In der Schweiz ist der Abschluss einer Autoversicherung obligatorisch. Bei der Auswahl einer Autoversicherung steht neben dem zu versichernden Fahrzeug immer auch Ihr persönliches Sicherheitsbedürfnis im Vordergrund.
                            </span>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-10 col-lg-7 col-xl-6 mx-auto text-start">
                    <div className="hausratBlueDiv p-4">
                        <div className="pb-5 text-center">
                            <span className='firstBlueTitle fs-4 fw-700'>
                                Ihre Autoversicherung
                            </span>
                        </div>
                        <div className="">
                            <div className="row gx-4 gy-4 gy-sm-0 justify-content-center">
                                <div className="col-12 col-sm-6">
                                    <label htmlFor="autoFirstRadio" className="container1 autoCheckbox w-100">
                                        <input onChange={() => { setAutoCheck(1) }} id='autoFirstRadio' type="radio" name='autoRadio' hidden />
                                        <div className="checkmark checkmarkColorAuto">
                                            <div>
                                                <div className=' text-center'>

                                                    <Checkbox1 height="90" width="100" />
                                                </div>


                                            </div>
                                        </div>
                                        <div className='text-center pt-2'>
                                            <span className='fw-400'>Neueinlösung eines Fahrzeuges</span>
                                        </div>
                                    </label>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <label htmlFor="autoSecondRadio" className="container1 autoCheckbox w-100">
                                        <input onChange={() => { setAutoCheck(2) }} id='autoSecondRadio' type="radio" name='autoRadio' hidden />
                                        <div className="checkmark checkmarkColorAuto">
                                            <div className='text-center'>
                                                <Checkbox2 height="90" />


                                            </div>
                                        </div>
                                        <div className='pt-2 text-center'>
                                            <span className='fw-400'>
                                                Vergleichsofferte für bestehende Autoversicherung
                                            </span>
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>
                        {/* <div className='pt-5'>
                            <div className="row g-0 justify-content-around">
                                <div className="col-auto">
                                    <button style={{ visibility: 'hidden' }} type='button' className='bg-transparent border-0'>
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
                                    <button type='button' className='bg-transparent border-0'>
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
                        </div> */}
                    </div>
                </div>
                <div className='bodyCounterPadding'>
                    {
                        {
                            1: <FirstRadioChecked />,
                            2: <SecondRadioChecked />
                        }[autoCheck]
                    }
                </div>

                <div className="row gx-4 pb-5 justify-content-between">
                    <div className="col-12 col-md-6 col-lg-5 col-xl-5 text-start">
                        <div className='pb-4'>
                            <span className='fw-700 firstBlueTitle fs-1 '>Autohaftpflicht <br></br> (Pflicht)  </span>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-7 col-xl-7 text-start">
                        <div className="">
                            <div className='fw-500 fs-5 normalTextToWhite'>
                                <span>
                                    Die Haftpflichtversicherung kommt für Schäden auf, die Sie (oder jemand anderes, der Ihr Auto fährt) mit Ihrem Fahrzeug an anderen Personen oder Sachen verursachen.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="row gx-4 pb-5 justify-content-between">
                    <div className="col-12 col-md-6 col-lg-5 col-xl-5 text-start">
                        <div className='pb-4'>
                            <span className='fw-700 firstBlueTitle fs-1 '> Teilkaskoversicherung <br></br> (Freiwillig) </span>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-7 col-xl-7 text-start">
                        <div className="">
                            <div className='fw-500 fs-5 normalTextToWhite'>
                                <span>
                                     Die Teilkaskoversicherung versichert zusätzlich Schäden an Ihrem Fahrzeug, die durch Unwetter, Tiere und unbekannte Personen verursacht werden. Dazu gehören Diebstahl, Glasbruch, Marderschäden, Wildunfälle und böswillige Beschädigung durch Dritte.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="row gx-4 justify-content-between">
                    <div className="col-12 col-md-6 col-lg-5 col-xl-5 text-start">
                        <div className='pb-4 pb-md-0'>
                            <span className='fw-700 firstBlueTitle fs-1 '>Vollkaskoversicherung <br></br> (Freiwillig ausser bei Leasing)</span>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-7 col-xl-7 text-start">
                        <div className="">
                            <div className='fw-500 fs-5 normalTextToWhite'>
                                <span>
                                 Zusätzlich zur Teilkaskoversicherung deckt die Vollkaskoversicherung Schäden, die Sie selbst am Auto verursachen (Kollision).
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AutoRadioBoxes