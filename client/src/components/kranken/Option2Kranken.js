import React from 'react'
import { useState, useEffect } from 'react'
// import TerminImg from '../../assets/images/terminImg.svg'

import Kalendari from '../../assets/images/kraken/calendar.svg'
import KalendariDark from '../../assets/images/kraken/calendarDarkMode.svg'

import TerminImg from '../../assets/images/kraken/opsions/01.svg'
import Phone from '../../assets/images/kraken/opsions/02.svg'
import Formular from '../../assets/images/kraken/opsions/03.svg'

import TerminImgDark from '../../assets/images/kraken/opsions/04Dark.svg'
import PhoneDark from '../../assets/images/kraken/opsions/05Dark.svg'
import FormularDark from '../../assets/images/kraken/opsions/Dark-06.svg'

// import Phone from '../../assets/images/telephoneImg.svg'
// import Formular from '../../assets/images/formular.svg'
import LastIlustration from '../../assets/images/krankenIlustration.svg'
import LastIlustrationDark from '../../assets/images/krankenIlustrationDark.svg'

import Modal from './Modal'
import Abschlie from '../../assets/images/abschliessen.svg'

import AbschlieDark from '../../assets/images/abschliessenDark.svg'

import {ReactComponent as MsgHand} from '../../assets/images/option2Hand.svg'
import {ReactComponent as MsgHandDark} from '../../assets/images/option2HandDark.svg'


function Option2Kranken(props) {

    const [openModal, setopenModal] = useState(false)

    const toggleModal = () => {
        setopenModal(!openModal)
        if (!openModal) {
            document.body.style.overflowY = "hidden"
            document.body.style.touchAction = "none"

        }
        else {
            document.body.style.overflowY = "auto"
            document.body.style.touchAction = "unset"

        }
    }
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    useEffect(() => {
        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        }

        window.addEventListener('resize', changeWidth)

        return () => {
            window.removeEventListener('resize', changeWidth)
        }
    }, [])

    return (
        <div className=''>
            <div className='wrapDiv container-xl px-4 px-xl-0'>
                <div className="row g-4 justify-content-between bodyCounterPadding">
                    <div className="col-12 col-lg-7 text-start">
                        <div className='pb-4 mb-1'>
                            <div className='pb-2'>
                                <span className='fs-3 fw-bold' style={{ color: "#50B8E7" }}>Variante 2: Persönliche Beratung</span>
                            </div>
                            <div className='pb-3'>
                                <span className='firstBlueTitle fw-600 normalTextToWhite'>Persönliche Beratung Mit Einem Kundenberater</span>
                            </div>
                            <div>
                                <span className='fw-500 normalTextToWhite descriptionFS'>Haben Sie keine Zeit oder Lust sich ins Thema einzulesen oder wissen bereits was Ihnen alles wichtig ist? Besprechen Sie ihre Wünsche doch mit einem unserer Kundenberater. Dieser hilft Ihnen, eine auf ihre Bedürfnisse zugeschnittene Lösung zu finden und steht Ihenne von der Offerten Anfrage bis zum Abschluss zur Seite. Jetzt mit den folgenden Möglichkeiten Anfragen:</span>
                            </div>
                            {(screenWidth < 991.98) && (
                                <div className='pt-5 pt-lg-0 text-center'>
                                    {props.darkMode
                                        ? <img src={LastIlustrationDark} className="lastIlustrationKranken img-fluid" alt="" />
                                        : <img src={LastIlustration} className="lastIlustrationKranken img-fluid" alt="" />
                                    }
                                </div>
                            )}
                        </div>
                        <div className="row g-4 justify-content-center">
                            <div className="col-12 col-sm-6 col-md-4">
                                <div style={{ cursor: 'pointer' }} className="krankenFirstStep h-100 px-4 py-5 text-center" onClick={toggleModal}>
                                    <div className=''>
                                        {props.darkMode
                                            ? <img src={TerminImgDark} alt="" />
                                            : <img src={TerminImg} alt="" />
                                        }
                                    </div>
                                    <div className='pt-3'>
                                        <span className='fw-500' style={{ color: 'white' }}>Termin buchen</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-4">
                                <div style={{ cursor: 'pointer' }} className="krankenFirstStep h-100 px-4 py-5 text-center" onClick={toggleModal}>
                                    <div>
                                        {props.darkMode
                                            ? <img src={PhoneDark} alt="" />
                                            : <img src={Phone} alt="" />
                                        }
                                    </div>
                                    <div className='pt-3'>
                                        <span className='fw-500' style={{ color: 'white' }}>Ruckrüf anfordern</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-4">
                                <div style={{ cursor: 'pointer' }} className="krankenFirstStep h-100 px-4 py-5 text-center" onClick={toggleModal}>
                                    <div>
                                        {props.darkMode
                                            ? < img src={FormularDark} width="105px" height="115px" alt="" />
                                            : < img src={Formular} width="105px" height="115px" alt="" />
                                        }
                                    </div>
                                    <div className='pt-3'>
                                        <span className='fw-500' style={{ color: 'white' }}>Kontaktformular</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {(screenWidth > 991.98) && (
                        <div className="col-12 col-lg-5 col-xl-4 my-auto">
                            <div className='pt-5 pt-lg-0'>
                                {props.darkMode
                                    ? <img src={LastIlustrationDark} className="lastIlustrationKranken img-fluid" alt="" />
                                    : <img src={LastIlustration} className="lastIlustrationKranken img-fluid" alt="" />
                                }
                            </div>
                        </div>
                    )}
                </div>

                <div className='normalTextToWhite'>
                    <div className="row gx-5 gy-5 gy-md-0 justify-content-center">
                        <div className="col-12 col-sm-6 col-md-4">
                            <div className='pb-3'>
                            {props.darkMode
                                        ? <MsgHandDark height="83" />
                                        : <MsgHand height="83" />
                                    }
                            </div>
                            <div>
                                <div className='pb-2'>
                                    <span className='firstBlueTitle fs-5 fw-700'>Beratung anfordern</span>
                                </div>
                                <div>
                                    <span className='fw-500'>Fordern Sie via Kontaktformular, Chatbot oder Livechat eine kostenlose und unverbindliche Beratung bei Ihnen Zuhause oder via Zoom an.
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4">
                            <div className='pb-3'>
                                {props.darkMode
                                    ? <img src={KalendariDark} height="83px" alt="" />
                                    : <img src={Kalendari} height="83px" alt="" />
                                }

                            </div>
                            <div>
                                <div className='pb-2'>
                                    <span className='firstBlueTitle fs-5 fw-700'>Beratungstermin</span>
                                </div>
                                <div>
                                    <span className='fw-500'>Ihr Kundenberater erstellt für Sie anhand ihrer Angaben verschiedene Offerten zusammen und zeigt Ihnen die verschiedenen Vorteile am Termin auf und beantwortet ihre Fragen.

                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4">
                            <div className='pb-3'>
                                {props.darkMode
                                    ? <img src={AbschlieDark} height="83px" alt="" />
                                    : <img src={Abschlie} height="83px" alt="" />
                                }
                            </div>
                            <div>
                                <div className='pb-2'>
                                    <span className='firstBlueTitle fs-5 fw-700'>Abschluss</span>
                                </div>
                                <div>
                                    <span className='fw-500'>Gemeinsam mit dem Kundenberater füllen Sie die nötigen Dokumente aus. Der Kundenberater erledigt für Sie den Rest.
                                    </span>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

            </div>
            {openModal && (
                <Modal toggleModal={toggleModal} />
            )}
        </div>
    )
}

export default Option2Kranken