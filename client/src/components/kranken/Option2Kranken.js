import React from 'react'
import { useState } from 'react'
import TerminImg from '../../assets/images/terminImg.svg'
import Phone from '../../assets/images/telephoneImg.svg'
import Formular from '../../assets/images/formular.svg'
import LastIlustration from '../../assets/images/krankenIlustration.svg'
import LastIlustrationDark from '../../assets/images/krankenIlustrationDark.svg'
import Modal from './Modal'

function Option2Kranken(props) {

    const [openModal, setopenModal] = useState(false)
    return (
        <div className=''>
            <div className='wrapDiv container-xl px-4'>
                <div className="row g-4">
                    <div className="col-12 col-lg-7 text-start">
                        <div className='pb-5 mb-3'>
                            <div className='pb-3'>
                                <span className='fs-3 fw-bold' style={{ color: "#50B8E7" }}>VARIANTE 2: PERSÖNLICHE BERATUNG</span>
                            </div>
                            <div className='pb-3'>
                                <span className='firstBlueTitle fw-600 normalTextToWhite'>PERSÖNLICHE BERATUNG MIT EINEM KUNDENBERATER</span>
                            </div>
                            <div>
                                <span className='fw-500 normalTextToWhite'>Haben Sie keine Zeit oder Lust sich ins Thema einzulesen oder wissen bereits was Ihnen alles wichtig ist? Besprechen Sie ihre Wünsche doch mit einem unserer Kundenberater. Dieser hilft Ihnen, eine auf ihre Bedürfnisse zugeschnittene Lösung zu finden und steht Ihenne von der Offerten Anfrage bis zum Abschluss zur Seite. Jetzt mit den folgenden Möglichkeiten Anfragen:</span>
                            </div>
                        </div>
                        <div className="row g-4 justify-content-center">
                            <div className="col-12 col-sm-6 col-md-4">
                                <div style={{ cursor: 'pointer' }} className="krankenFirstStep h-100 px-4 py-5 text-center">
                                    <div className=''>
                                        <img src={TerminImg} alt="" />
                                    </div>
                                    <div className='pt-3'>
                                        <span className='fw-500' style={{ color: 'white' }}>Termin buchen</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-4">
                                <div style={{ cursor: 'pointer' }} className="krankenFirstStep h-100 px-4 py-5 text-center" onClick={() => setopenModal(true)}>
                                    <div>
                                        <img src={Phone} alt="" />
                                    </div>
                                    <div className='pt-3'>
                                        <span className='fw-500' style={{ color: 'white' }}>Ruckrüf anfordern</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-4">
                                <div style={{ cursor: 'pointer' }} className="krankenFirstStep h-100 px-4 py-5 text-center" onClick={() => setopenModal(true)}>
                                    <div>
                                        <img src={Formular} alt="" />
                                    </div>
                                    <div className='pt-3'>
                                        <span className='fw-500' style={{ color: 'white' }}>Kontaktformular</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-5 my-auto">
                        <div className='pt-5 pt-lg-0'>

                            {props.darkMode
                                ? <img src={LastIlustrationDark} className="lastIlustrationKranken img-fluid" alt="" />
                                : <img src={LastIlustration} className="lastIlustrationKranken img-fluid" alt="" />
                            }
                        </div>
                    </div>
                </div>

                <div>


                </div>
                {openModal && (
                    <Modal setopenModal={setopenModal} />
                )}
            </div>
        </div>
    )
}

export default Option2Kranken