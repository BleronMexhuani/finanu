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
import Economy from '../../assets/images/Dhomat-01.svg'
import Handshake from '../../assets/images/Dhomat-02.svg'
import Kravata from '../../assets/images/Dhomat-03.svg'

import EconomyDark from '../../assets/images/Dhomat-01-Dark.svg'
import HandshakeDark from '../../assets/images/Dhomat-02-Dark.svg'
import KravataDark from '../../assets/images/Dhomat-03-Dark.svg'

function KrankenCards(props) {

    const [isHover, setIsHover] = useState(false)
    const [isHover1, setIsHover1] = useState(false)
    const [isHover2, setIsHover2] = useState(false)
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
                <div className="wrapDiv container-xl px-4 px-xl-0 bodyCounterPadding">
                    <div className="pb-3 pb-md-2">
                        <span className='fs-1 bigTitleKranken'>Wahl der Spitalversicherungen</span>
                    </div>
                    <div className="pb-5">
                        <span className='fw-500 fs-5 normalTextToWhite'>Nachdem Sie sich nun bewusst sind welches Modell in der Grundversicherung Sie wählen und welche zusätzlichen <br></br>Leistungen zu Ihrem Lebensstil passen, müssen Sie sich entscheiden welche Leistungen Sie bei einem Spitalbesuch wünschen.</span>
                    </div>
                    <div className="row gy-4 gy-lg-0 gx-0 gx-sm-3 justify-content-center">
                        <div className="col-12 col-sm-6 col-lg-4">
                            <div onMouseEnter={() => { setIsHover(true) }} onMouseLeave={() => { setIsHover(false) }} className={` ${isHover ? ' blueBgDiv' : 'greyBorderDiv'} h-100 p-5 pt-0`}>
                                <div className={`mb-5 ${isHover ? ' whiteBorderBottom' : 'blueBorderBottom'}`}>
                                    <div className="pb-2">

                                        {props.darkMode
                                            ? <img src={EconomyDark} height={200} width={'100%'} alt="" />
                                            : <img src={Economy} height={200} width={'100%'} alt="" />
                                        }
                                        <div className='pt-4'>
                                            <span className='cardTitle fs-5 fw-600'>ALLGEMEIN</span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="pb-4">
                                        <div className="row gx-3">
                                            <div className="col-auto">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 28.478 28.814">
                                                    <path id="Path_103" data-name="Path 103" d="M-307.877,798.591a2.925,2.925,0,0,1-1.779,2.517,2.933,2.933,0,0,1-3.425-.675c-1.882-1.845-3.736-3.719-5.6-5.582-.85-.849-1.729-1.672-2.537-2.559-.558-.612-.945-.548-1.5.019-2.718,2.763-5.468,5.495-8.214,8.23a3.13,3.13,0,0,1-3,1.143,2.883,2.883,0,0,1-2.28-2.1,2.965,2.965,0,0,1,.863-3.08q4.045-4.013,8.06-8.055c1.106-1.107,1.105-1.109-.024-2.24l-7.971-7.98a3.037,3.037,0,0,1-.885-3.289,2.824,2.824,0,0,1,2.269-1.95,3.018,3.018,0,0,1,2.825,1c2.674,2.7,5.395,5.349,8.034,8.08.8.829,1.3.9,2.14.028,2.551-2.655,5.174-5.24,7.8-7.824a2.892,2.892,0,0,1,4.259-.242,2.988,2.988,0,0,1-.113,4.524c-2.56,2.593-5.117,5.189-7.742,7.715-.829.8-.907,1.279-.031,2.117,2.6,2.491,5.114,5.08,7.668,7.624A3.459,3.459,0,0,1-307.877,798.591Z" transform="translate(336.349 -772.939)" fill="#50B8E7" />
                                                </svg>
                                            </div>
                                            <div className="col text-start my-auto">
                                                <span className='fw-500'>Wartezeiten</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pb-4">
                                        <div className="row gx-3">
                                            <div className="col-auto">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 28.478 28.814">
                                                    <path id="Path_103" data-name="Path 103" d="M-307.877,798.591a2.925,2.925,0,0,1-1.779,2.517,2.933,2.933,0,0,1-3.425-.675c-1.882-1.845-3.736-3.719-5.6-5.582-.85-.849-1.729-1.672-2.537-2.559-.558-.612-.945-.548-1.5.019-2.718,2.763-5.468,5.495-8.214,8.23a3.13,3.13,0,0,1-3,1.143,2.883,2.883,0,0,1-2.28-2.1,2.965,2.965,0,0,1,.863-3.08q4.045-4.013,8.06-8.055c1.106-1.107,1.105-1.109-.024-2.24l-7.971-7.98a3.037,3.037,0,0,1-.885-3.289,2.824,2.824,0,0,1,2.269-1.95,3.018,3.018,0,0,1,2.825,1c2.674,2.7,5.395,5.349,8.034,8.08.8.829,1.3.9,2.14.028,2.551-2.655,5.174-5.24,7.8-7.824a2.892,2.892,0,0,1,4.259-.242,2.988,2.988,0,0,1-.113,4.524c-2.56,2.593-5.117,5.189-7.742,7.715-.829.8-.907,1.279-.031,2.117,2.6,2.491,5.114,5.08,7.668,7.624A3.459,3.459,0,0,1-307.877,798.591Z" transform="translate(336.349 -772.939)" fill="#50B8E7" />
                                                </svg>

                                            </div>
                                            <div className="col text-start my-auto">
                                                <span className='fw-500'>Keine freie Wahl des primär
                                                    behandelnden Arztes</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="row gx-3">
                                            <div className="col-auto">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 28.478 28.814">
                                                    <path id="Path_103" data-name="Path 103" d="M-307.877,798.591a2.925,2.925,0,0,1-1.779,2.517,2.933,2.933,0,0,1-3.425-.675c-1.882-1.845-3.736-3.719-5.6-5.582-.85-.849-1.729-1.672-2.537-2.559-.558-.612-.945-.548-1.5.019-2.718,2.763-5.468,5.495-8.214,8.23a3.13,3.13,0,0,1-3,1.143,2.883,2.883,0,0,1-2.28-2.1,2.965,2.965,0,0,1,.863-3.08q4.045-4.013,8.06-8.055c1.106-1.107,1.105-1.109-.024-2.24l-7.971-7.98a3.037,3.037,0,0,1-.885-3.289,2.824,2.824,0,0,1,2.269-1.95,3.018,3.018,0,0,1,2.825,1c2.674,2.7,5.395,5.349,8.034,8.08.8.829,1.3.9,2.14.028,2.551-2.655,5.174-5.24,7.8-7.824a2.892,2.892,0,0,1,4.259-.242,2.988,2.988,0,0,1-.113,4.524c-2.56,2.593-5.117,5.189-7.742,7.715-.829.8-.907,1.279-.031,2.117,2.6,2.491,5.114,5.08,7.668,7.624A3.459,3.459,0,0,1-307.877,798.591Z" transform="translate(336.349 -772.939)" fill="#50B8E7" />
                                                </svg>

                                            </div>
                                            <div className="col text-start my-auto">
                                                <span className='fw-500'>Keine freie Wahl eines
                                                    befreundeten Arztes</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div onMouseEnter={() => { setIsHover1(true) }} onMouseLeave={() => { setIsHover1(false) }} className="col-12 col-sm-6 col-lg-4">
                            <div className={` ${isHover1 ? ' blueBgDiv' : 'greyBorderDiv'} h-100 p-5  pt-0`}>
                                <div className={`mb-5 ${isHover1 ? ' whiteBorderBottom' : 'blueBorderBottom'}`}>
                                    <div className="pb-2">
                                        {props.darkMode
                                            ? <img src={HandshakeDark} height={200} width={'100%'} alt="" />
                                            : <img src={Handshake} height={200} width={'100%'} alt="" />
                                        }
                                        <div className='pt-4'>
                                            <span className='cardTitle fs-5 fw-600'>HALBPRIVATE</span>
                                        </div>
                                    </div>

                                </div>
                                <div>
                                    <div className="pb-4">
                                        <div className="row gx-3">
                                            <div className="col-auto">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="20" viewBox="0 0 40.599 29.09">
                                                    <path id="Path_106" data-name="Path 106" d="M-697.185,788.673a2.815,2.815,0,0,1,1.724-2.792,2.751,2.751,0,0,1,3.289.555c1.295,1.22,2.532,2.5,3.791,3.758,1.623,1.62,3.291,3.2,4.847,4.882.774.838,1.221.708,1.963-.039q9.731-9.813,19.531-19.559c1.57-1.568,3.193-1.634,4.572-.232a2.8,2.8,0,0,1,.337,3.684,11.085,11.085,0,0,1-1.236,1.435q-10.685,10.7-21.382,21.394a5.131,5.131,0,0,1-2.007,1.431,2.78,2.78,0,0,1-2.941-.773c-3.905-3.868-7.781-7.765-11.67-11.65A2.626,2.626,0,0,1-697.185,788.673Z" transform="translate(697.191 -774.247)" fill="#50B8E7" />
                                                </svg>


                                            </div>
                                            <div className="col text-start my-auto">
                                                <span className='fw-500'>Freie Wahl des primär
                                                    behandelnden Arztes</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pb-4">
                                        <div className="row gx-3">
                                            <div className="col-auto">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="20" viewBox="0 0 40.599 29.09">
                                                    <path id="Path_106" data-name="Path 106" d="M-697.185,788.673a2.815,2.815,0,0,1,1.724-2.792,2.751,2.751,0,0,1,3.289.555c1.295,1.22,2.532,2.5,3.791,3.758,1.623,1.62,3.291,3.2,4.847,4.882.774.838,1.221.708,1.963-.039q9.731-9.813,19.531-19.559c1.57-1.568,3.193-1.634,4.572-.232a2.8,2.8,0,0,1,.337,3.684,11.085,11.085,0,0,1-1.236,1.435q-10.685,10.7-21.382,21.394a5.131,5.131,0,0,1-2.007,1.431,2.78,2.78,0,0,1-2.941-.773c-3.905-3.868-7.781-7.765-11.67-11.65A2.626,2.626,0,0,1-697.185,788.673Z" transform="translate(697.191 -774.247)" fill="#50B8E7" />
                                                </svg>


                                            </div>
                                            <div className="col text-start my-auto">
                                                <span className='fw-500'>Freie Wahl eines befreundeten
                                                    Arztes</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pb-4">
                                        <div className="row gx-3">
                                            <div className="col-auto">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="20" viewBox="0 0 40.599 29.09">
                                                    <path id="Path_106" data-name="Path 106" d="M-697.185,788.673a2.815,2.815,0,0,1,1.724-2.792,2.751,2.751,0,0,1,3.289.555c1.295,1.22,2.532,2.5,3.791,3.758,1.623,1.62,3.291,3.2,4.847,4.882.774.838,1.221.708,1.963-.039q9.731-9.813,19.531-19.559c1.57-1.568,3.193-1.634,4.572-.232a2.8,2.8,0,0,1,.337,3.684,11.085,11.085,0,0,1-1.236,1.435q-10.685,10.7-21.382,21.394a5.131,5.131,0,0,1-2.007,1.431,2.78,2.78,0,0,1-2.941-.773c-3.905-3.868-7.781-7.765-11.67-11.65A2.626,2.626,0,0,1-697.185,788.673Z" transform="translate(697.191 -774.247)" fill="#50B8E7" />
                                                </svg>


                                            </div>
                                            <div className="col text-start my-auto">
                                                <span className='fw-500'>Anspruch auf Zweibettzimmer</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pb-4">
                                        <div className="row gx-3">
                                            <div className="col-auto">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="20" viewBox="0 0 40.599 29.09">
                                                    <path id="Path_106" data-name="Path 106" d="M-697.185,788.673a2.815,2.815,0,0,1,1.724-2.792,2.751,2.751,0,0,1,3.289.555c1.295,1.22,2.532,2.5,3.791,3.758,1.623,1.62,3.291,3.2,4.847,4.882.774.838,1.221.708,1.963-.039q9.731-9.813,19.531-19.559c1.57-1.568,3.193-1.634,4.572-.232a2.8,2.8,0,0,1,.337,3.684,11.085,11.085,0,0,1-1.236,1.435q-10.685,10.7-21.382,21.394a5.131,5.131,0,0,1-2.007,1.431,2.78,2.78,0,0,1-2.941-.773c-3.905-3.868-7.781-7.765-11.67-11.65A2.626,2.626,0,0,1-697.185,788.673Z" transform="translate(697.191 -774.247)" fill="#50B8E7" />
                                                </svg>


                                            </div>
                                            <div className="col text-start my-auto">
                                                <span className='fw-500'>Anspruch auf Zweitmeinung</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div onMouseEnter={() => { setIsHover2(true) }} onMouseLeave={() => { setIsHover2(false) }} className="col-12 col-sm-7 col-lg-4">
                            <div className={` ${isHover2 ? ' blueBgDiv' : 'greyBorderDiv'} h-100 p-5  pt-0`}>
                                <div className={`mb-5 ${isHover2 ? ' whiteBorderBottom' : 'blueBorderBottom'}`}>
                                    <div className="pb-2">
                                        {props.darkMode
                                            ? < img src={KravataDark} height={200} width={'100%'} alt="" />
                                            : < img src={Kravata} height={200} width={'100%'} alt="" />
                                        }
                                        <div className='pt-4'>
                                            <span className='cardTitle fs-5 fw-600'>PRIVATE</span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="pb-4">
                                        <div className="row gx-3">
                                            <div className="col-auto">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="20" viewBox="0 0 40.599 29.09">
                                                    <path id="Path_106" data-name="Path 106" d="M-697.185,788.673a2.815,2.815,0,0,1,1.724-2.792,2.751,2.751,0,0,1,3.289.555c1.295,1.22,2.532,2.5,3.791,3.758,1.623,1.62,3.291,3.2,4.847,4.882.774.838,1.221.708,1.963-.039q9.731-9.813,19.531-19.559c1.57-1.568,3.193-1.634,4.572-.232a2.8,2.8,0,0,1,.337,3.684,11.085,11.085,0,0,1-1.236,1.435q-10.685,10.7-21.382,21.394a5.131,5.131,0,0,1-2.007,1.431,2.78,2.78,0,0,1-2.941-.773c-3.905-3.868-7.781-7.765-11.67-11.65A2.626,2.626,0,0,1-697.185,788.673Z" transform="translate(697.191 -774.247)" fill="#50B8E7" />
                                                </svg>


                                            </div>
                                            <div className="col text-start my-auto">
                                                <span className='fw-500'>Keine Wartezeiten</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pb-4">
                                        <div className="row gx-3">
                                            <div className="col-auto">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="20" viewBox="0 0 40.599 29.09">
                                                    <path id="Path_106" data-name="Path 106" d="M-697.185,788.673a2.815,2.815,0,0,1,1.724-2.792,2.751,2.751,0,0,1,3.289.555c1.295,1.22,2.532,2.5,3.791,3.758,1.623,1.62,3.291,3.2,4.847,4.882.774.838,1.221.708,1.963-.039q9.731-9.813,19.531-19.559c1.57-1.568,3.193-1.634,4.572-.232a2.8,2.8,0,0,1,.337,3.684,11.085,11.085,0,0,1-1.236,1.435q-10.685,10.7-21.382,21.394a5.131,5.131,0,0,1-2.007,1.431,2.78,2.78,0,0,1-2.941-.773c-3.905-3.868-7.781-7.765-11.67-11.65A2.626,2.626,0,0,1-697.185,788.673Z" transform="translate(697.191 -774.247)" fill="#50B8E7" />
                                                </svg>


                                            </div>
                                            <div className="col text-start my-auto">
                                                <span className='fw-500'>Primärer Zugang zu Belegsund
                                                    Fachärzten</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pb-4">
                                        <div className="row gx-3">
                                            <div className="col-auto">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="20" viewBox="0 0 40.599 29.09">
                                                    <path id="Path_106" data-name="Path 106" d="M-697.185,788.673a2.815,2.815,0,0,1,1.724-2.792,2.751,2.751,0,0,1,3.289.555c1.295,1.22,2.532,2.5,3.791,3.758,1.623,1.62,3.291,3.2,4.847,4.882.774.838,1.221.708,1.963-.039q9.731-9.813,19.531-19.559c1.57-1.568,3.193-1.634,4.572-.232a2.8,2.8,0,0,1,.337,3.684,11.085,11.085,0,0,1-1.236,1.435q-10.685,10.7-21.382,21.394a5.131,5.131,0,0,1-2.007,1.431,2.78,2.78,0,0,1-2.941-.773c-3.905-3.868-7.781-7.765-11.67-11.65A2.626,2.626,0,0,1-697.185,788.673Z" transform="translate(697.191 -774.247)" fill="#50B8E7" />
                                                </svg>


                                            </div>
                                            <div className="col text-start my-auto">
                                                <span className='fw-500'>Anspruch auf Einzelbettzimmer</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="row gx-3">
                                            <div className="col-auto">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="20" viewBox="0 0 40.599 29.09">
                                                    <path id="Path_106" data-name="Path 106" d="M-697.185,788.673a2.815,2.815,0,0,1,1.724-2.792,2.751,2.751,0,0,1,3.289.555c1.295,1.22,2.532,2.5,3.791,3.758,1.623,1.62,3.291,3.2,4.847,4.882.774.838,1.221.708,1.963-.039q9.731-9.813,19.531-19.559c1.57-1.568,3.193-1.634,4.572-.232a2.8,2.8,0,0,1,.337,3.684,11.085,11.085,0,0,1-1.236,1.435q-10.685,10.7-21.382,21.394a5.131,5.131,0,0,1-2.007,1.431,2.78,2.78,0,0,1-2.941-.773c-3.905-3.868-7.781-7.765-11.67-11.65A2.626,2.626,0,0,1-697.185,788.673Z" transform="translate(697.191 -774.247)" fill="#50B8E7" />
                                                </svg>
                                            </div>
                                            <div className="col text-start my-auto">
                                                <span className='fw-500'>Viele Komfortprivilegien
                                                    (z.b grössere Speisekarte,
                                                    Medizinische Massagen)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default KrankenCards