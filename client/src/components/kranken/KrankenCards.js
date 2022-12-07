import React, { useState } from 'react'
import BeatingHeart from '../../assets/images/beatingHeart.svg'
import BeatingHeartDark from '../../assets/images/kraken/beatingHeartDark.svg'

import Doctor from '../../assets/images/doctor.svg'
import DoctorDark from '../../assets/images/doctorDark.svg'

import Hands from '../../assets/images/handsCross.svg'
import HandsDark from '../../assets/images/handsCrossDark.svg'

import Medicine from '../../assets/images/medicine.svg'
import MedicineDark from '../../assets/images/medicineDark.svg'

import Medicine2 from '../../assets/images/medicine2.svg'
import Transport from '../../assets/images/transport.svg'
import Alternative from '../../assets/images/alternativeMedicine.svg'
import Sport from '../../assets/images/sport.svg'
import Braces from '../../assets/images/braces.svg'
import Fitness from '../../assets/images/fitness.svg'
import Abroad from '../../assets/images/abroad.svg'
import Glasses from '../../assets/images/glasses.svg'



import Medicine2Dark from '../../assets/images/HapaDarkmode.svg'
import TransportDark from '../../assets/images/kerDarkMode.svg'
import AlternativeDark from '../../assets/images/plantDarkMode.svg'
import SportDark from '../../assets/images/BallDarkmode.svg'
import BracesDark from '../../assets/images/toothDarkmode.svg'
import FitnessDark from '../../assets/images/gymDarkmode.svg'
import AbroadDark from '../../assets/images/globDarkmode.svg'
import GlassesDark from '../../assets/images/glassesDarkmode.svg'


import PhoneDoc from '../../assets/images/phoneDoc.svg'
import PhoneDocDark from '../../assets/images/phoneDocDark.svg'

// import Economy from '../../assets/images/economy.svg'
// import Handshake from '../../assets/images/handshake.svg'
// import Kravata from '../../assets/images/kravata.svg'

function KrankenCards(props) {

    
    return (
        <div className='blueBgKrankenOverflow pt-0 pt-lg-5 pt-xl-0'>
            <div className='blueBgKranken1'>
                <div className="blueBgCenterTex">
                    <div className='pb-3 pb-md-2'>
                        <span className='fs-1 bigTitleKranken'>Grundversicherung</span>
                    </div>
                    <div className='pb-5 container-xl px-4 px-xl-0'>
                        <span className='fw-500 fs-5 normalTextToWhite'>
                            In einem ersten Schritt können Sie bei der Grundversicherung sparen, indem Sie eine höhere Franchise und ein anderes Versicherungsmodell als das Grundmodell wählen. Allein dadurch können Sie Prämienersparnisse von bis zu 50% erreichen.
                        </span>
                    </div>
                    <div className='px-4 px-lg-5 bodyCounterPadding grundImages '>
                        <div className="row g-3 justify-content-center">
                            <div className="col-12 col-sm-6 col-md-4 col-xl">
                                <div className='p-4 whiteCardKranken h-100'>
                                    <div className='pb-4'>
                                        {props.darkMode

                                            ? <img src={BeatingHeartDark} alt="" />
                                            : <img src={BeatingHeart} alt="" />
                                        }

                                    </div>
                                    <div className='pb-2'>
                                        <span className='fw-600 finanuSubTitle fs-5'>Grundmodell <br className='d-none d-sm-block'></br> (0%)</span>
                                    </div>
                                    <div>
                                        <span className='fw-400 secondaryColor'>Freie Arztwahl.</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-4 col-xl">
                                <div className='p-4 whiteCardKranken h-100'>
                                    <div className='pb-4'>
                                        {props.darkMode
                                            ? <img src={DoctorDark} alt="" />
                                            : <img src={Doctor} alt="" />
                                        }
                                    </div>
                                    <div className='pb-2'>
                                        <span className='fw-600 finanuSubTitle fs-5'>Hausarzt <br className='d-none d-sm-block'></br> (Max. 12%)</span>
                                    </div>
                                    <div>
                                        <span className='fw-400 secondaryColor'>Der Hausarzt überweist den
                                            Patienten wenn nötig an
                                            einen Spezialisten.</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-4 col-xl">
                                <div className='p-4 whiteCardKranken h-100'>
                                    <div className='pb-4'>
                                        {props.darkMode
                                            ? <img src={HandsDark} alt="" />
                                            : <img src={Hands} alt="" />
                                        }
                                    </div>
                                    <div className='pb-2'>
                                        <span className='fw-600 finanuSubTitle fs-5'>Versorgungznetz <br className='d-none d-sm-block'></br> (HMO)</span>
                                    </div>
                                    <div>
                                        <span className='fw-400 secondaryColor'>(Allgemeinärzte oder
                                            Spezialisten).</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-xl">
                                <div className='p-4 whiteCardKranken h-100'>
                                    <div className='pb-4'>
                                        {props.darkMode
                                            ? <img src={MedicineDark} alt="" />
                                            : <img src={Medicine} alt="" />
                                        }
                                    </div>
                                    <div className='pb-2'>
                                        <span className='fw-600 finanuSubTitle fs-5'>Apothekenmodell <br className='d-none d-sm-block'></br> (TELMED)</span>
                                    </div>
                                    <div>
                                        <span className='fw-400 secondaryColor'>Erste Anlaufstelle bei allen Fragen
                                            rund um Ihre Gesundheit ist die
                                            Partnerapotheke oder telefonische
                                            Gesundheitsberatung.</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-xl">
                                <div className='p-4 whiteCardKranken h-100'>
                                    <div className='pb-4'>
                                        {props.darkMode
                                            ? <img src={PhoneDocDark} alt="" />
                                            : <img src={PhoneDoc} alt="" />
                                        }
                                    </div>
                                    <div className='pb-2'>
                                        <span className='fw-600 finanuSubTitle fs-5'>Telemedizin <br className='d-none d-sm-block'></br> (TELMED)</span>
                                    </div>
                                    <div>
                                        <span className='fw-400 secondaryColor'>Der Versicherte muss eine
                                            medizinische Beratungsstelle
                                            anrufen, bevor er den Arzt
                                            aufsucht.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-100'>
                        <div className='wrapDiv container-xl px-4 px-xl-0 bodyCounterPadding'>
                            <div className='pb-3 pb-md-2'>
                                <span className='fs-1 bigTitleKranken'>
                                    Zusatzversicherung
                                </span>
                            </div>
                            <div className='pb-5'>
                                <span className='fw-500 fs-5 normalTextToWhite'>Nachdem Sie das Modell der Grundversicherung gewählt haben, ist es an der Zeit sich gedanken zu machen, welche Zusatzleistungen Sie in Anspruch nehmen möchten.</span>
                            </div>
                            <div className='w-100'>
                                <div className="row g-3 justify-content-center zuzatImages">
                                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                                        <div className='p-4 whiteCardKranken h-100'>
                                            <div className='pb-4'>
                                                {props.darkMode
                                                    ? <img src={Medicine2Dark} alt="" />
                                                    : <img src={Medicine2} alt="" />
                                                }
                                            </div>
                                            <div className='pb-2'>
                                                <span className='fw-600 finanuSubTitle'>Medikamente</span>
                                            </div>
                                            <div>
                                                <span className='fw-400 secondaryColor'>Übernahme bis zu 90% der Kosten</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                                        <div className='p-4 whiteCardKranken h-100'>
                                            <div className='pb-4'>
                                                {props.darkMode
                                                    ? <img src={TransportDark} alt="" />
                                                    : <img src={Transport} alt="" />
                                                }
                                            </div>
                                            <div className='pb-2'>
                                                <span className='fw-600 finanuSubTitle fs-5'>Transport</span>
                                            </div>
                                            <div>
                                                <span className='fw-400 secondaryColor'>Bis zu 100% Deckung aller Transport und Rettungskosten.</span>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                                        <div className='p-4 whiteCardKranken h-100'>
                                            <div className='pb-4'>
                                                {props.darkMode
                                                    ? <img src={AlternativeDark} alt="" />
                                                    : <img src={Alternative} alt="" />
                                                }
                                            </div>
                                            <div className='pb-2'>
                                                <span className='fw-600 finanuSubTitle fs-5'>Alternativmedizin</span>
                                            </div>
                                            <div>
                                                <span className='fw-400 secondaryColor'>Bis zu 100% Kostenübernahme bei der Nutzung von Alternativmedizin.</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                                        <div className='p-4 whiteCardKranken h-100'>
                                            <div className='pb-4'>
                                                {props.darkMode
                                                    ? <img src={SportDark} alt="" />
                                                    : <img src={Sport} alt="" />
                                                }

                                            </div>
                                            <div className='pb-2'>
                                                <span className='fw-600 finanuSubTitle fs-5'>Sport</span>
                                            </div>
                                            <div>
                                                <span className='fw-400 secondaryColor'>Bis zu 500.- am Sportverein</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                                        <div className='p-4 whiteCardKranken h-100'>
                                            <div className='pb-4'>
                                                {props.darkMode
                                                    ? <img src={BracesDark} alt="" />
                                                    : <img src={Braces} alt="" />
                                                }
                                            </div>
                                            <div className='pb-2'>
                                                <span className='fw-600 finanuSubTitle fs-5'>Zahnspange</span>
                                            </div>
                                            <div>
                                                <span className='fw-400 secondaryColor'>Bis zu 20‘000.- an der Zahnstellungskorrektur
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">

                                        <div className='p-4 whiteCardKranken h-100'>
                                            <div className='pb-4'>
                                                {props.darkMode
                                                    ? <img src={FitnessDark} alt="" />
                                                    : <img src={Fitness} alt="" />
                                                }

                                            </div>
                                            <div className='pb-2'>
                                                <span className='fw-600 finanuSubTitle fs-5'>Fitness</span>
                                            </div>
                                            <div>
                                                <span className='fw-400 secondaryColor'>Bis zu 1‘100.- am Fitnessabo!
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">

                                        <div className='p-4 whiteCardKranken h-100'>
                                            <div className='pb-4'>
                                                {props.darkMode
                                                    ? <img src={AbroadDark} alt="" />
                                                    : <img src={Abroad} alt="" />
                                                }

                                            </div>
                                            <div className='pb-2'>
                                                <span className='fw-600 finanuSubTitle fs-5'>Ausland</span>
                                            </div>
                                            <div>
                                                <span className='fw-400 secondaryColor'>Bis zu 100% Deckung aller Behandlungen im Ausland.
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                                        <div className='p-4 whiteCardKranken h-100'>
                                            <div className='pb-4'>
                                                {props.darkMode
                                                    ? <img src={GlassesDark} alt="" />
                                                    : <img src={Glasses} alt="" />
                                                }
                                            </div>
                                            <div className='pb-2'>
                                                <span className='fw-600 finanuSubTitle fs-5'>Brille</span>
                                            </div>
                                            <div>
                                                <span className='fw-400 secondaryColor'>Bis zu 800.- an der Brille!
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div>
                

            </div>

        </div>
    )
}

export default KrankenCards