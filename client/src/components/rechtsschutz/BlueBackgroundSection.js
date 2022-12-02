import React from 'react'
import { useState } from 'react'
import Modal from './Modal'
function BlueBackgroundSection(props) {
    const [openModal, setopenModal] = useState(false)

    const toggleModal = () => {
        setopenModal(!openModal)
        if (!openModal) {
            document.body.style.overflowY = "hidden"
        }
        else {
            document.body.style.overflowY = "auto"
        }


    }
    const [isHover, setIsHover] = useState(false)
    const [isHover1, setIsHover1] = useState(false)
    const [isHover2, setIsHover2] = useState(false)
    return (
        <div>
            <div className='blueBgRechtssPriv'>
                <div className='pb-5 container-xl px-4 px-xl-0'>
                    <span className='firstBlueTitle fw-700 fs-1'>Die besten Angebote im Vergleich</span>
                </div>
                <div className='container-xl px-4 px-xl-0 pb-4'>
                    <div className="row gy-4 gy-lg-0 gx-0 gx-sm-3 justify-content-center">
                        <div className="col-12 col-sm-6 col-lg-4">
                            <div onMouseEnter={() => { setIsHover(true) }} onMouseLeave={() => { setIsHover(false) }} className={` ${isHover ? ' blueBgDiv' : 'greyBorderDiv'} h-auto p-5 pt-0`}>
                                
                                <div className={`mb-5 ${isHover ? ' whiteBorderBottom' : 'blueBorderBottom'}`}>
                                    <div className="pb-2">
                                        <div className='pt-5'>
                                            <span style={{textTransform: 'uppercase'}} className='cardTitle fs-5 fw-600'>Basler</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-start lh-1 fw-500">
                                    <div className=''>
                                        <span>ab CHF</span>
                                    </div>
                                    <div className='pb-3'>
                                        <span className='fw-700 fs-2'>159.00</span>
                                    </div>
                                    <div className='pb-3'>
                                        <span>/ Jahr</span>
                                    </div>
                                    <div className='pb-4'>
                                        <span style={{fontSize: '14px'}}>
                                            *Preise basieren auf Recherchen welche ende 2022 durchgeführt wurden. Möglicherweise haben sich die Preise zum Zeitpunkt Ihres Seitenbesuches bereits weider geändert.
                                        </span>
                                    </div>
                                    <div className='pb-4'>
                                        <span className='fw-700'>Rechtsgebiete</span>
                                    </div>
                                </div>

                                <div>
                                    <div className="pb-2">
                                        <div className="row gx-3">
                                            <div className="col-auto">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 40.599 29.09">
                                                    <path id="Path_106" data-name="Path 106" d="M-697.185,788.673a2.815,2.815,0,0,1,1.724-2.792,2.751,2.751,0,0,1,3.289.555c1.295,1.22,2.532,2.5,3.791,3.758,1.623,1.62,3.291,3.2,4.847,4.882.774.838,1.221.708,1.963-.039q9.731-9.813,19.531-19.559c1.57-1.568,3.193-1.634,4.572-.232a2.8,2.8,0,0,1,.337,3.684,11.085,11.085,0,0,1-1.236,1.435q-10.685,10.7-21.382,21.394a5.131,5.131,0,0,1-2.007,1.431,2.78,2.78,0,0,1-2.941-.773c-3.905-3.868-7.781-7.765-11.67-11.65A2.626,2.626,0,0,1-697.185,788.673Z" transform="translate(697.191 -774.247)" fill="#50B8E7" />
                                                </svg>
                                            </div>
                                            <div className="col text-start my-auto">
                                                <span className='fw-500'>Arbeitsrecht</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pb-2">
                                        <div className="row gx-3">
                                            <div className="col-auto">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 40.599 29.09">
                                                    <path id="Path_106" data-name="Path 106" d="M-697.185,788.673a2.815,2.815,0,0,1,1.724-2.792,2.751,2.751,0,0,1,3.289.555c1.295,1.22,2.532,2.5,3.791,3.758,1.623,1.62,3.291,3.2,4.847,4.882.774.838,1.221.708,1.963-.039q9.731-9.813,19.531-19.559c1.57-1.568,3.193-1.634,4.572-.232a2.8,2.8,0,0,1,.337,3.684,11.085,11.085,0,0,1-1.236,1.435q-10.685,10.7-21.382,21.394a5.131,5.131,0,0,1-2.007,1.431,2.78,2.78,0,0,1-2.941-.773c-3.905-3.868-7.781-7.765-11.67-11.65A2.626,2.626,0,0,1-697.185,788.673Z" transform="translate(697.191 -774.247)" fill="#50B8E7" />
                                                </svg>
                                            </div>
                                            <div className="col text-start my-auto">
                                                <span className='fw-500'>Eigentums- und Sachrecht</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pb-2">
                                        <div className="row gx-3">
                                            <div className="col-auto">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 40.599 29.09">
                                                    <path id="Path_106" data-name="Path 106" d="M-697.185,788.673a2.815,2.815,0,0,1,1.724-2.792,2.751,2.751,0,0,1,3.289.555c1.295,1.22,2.532,2.5,3.791,3.758,1.623,1.62,3.291,3.2,4.847,4.882.774.838,1.221.708,1.963-.039q9.731-9.813,19.531-19.559c1.57-1.568,3.193-1.634,4.572-.232a2.8,2.8,0,0,1,.337,3.684,11.085,11.085,0,0,1-1.236,1.435q-10.685,10.7-21.382,21.394a5.131,5.131,0,0,1-2.007,1.431,2.78,2.78,0,0,1-2.941-.773c-3.905-3.868-7.781-7.765-11.67-11.65A2.626,2.626,0,0,1-697.185,788.673Z" transform="translate(697.191 -774.247)" fill="#50B8E7" />
                                                </svg>
                                            </div>
                                            <div className="col text-start my-auto">
                                                <span className='fw-500'>Versicherungsrecht</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pb-2">
                                        <div className="row gx-3">
                                            <div className="col-auto">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 40.599 29.09">
                                                    <path id="Path_106" data-name="Path 106" d="M-697.185,788.673a2.815,2.815,0,0,1,1.724-2.792,2.751,2.751,0,0,1,3.289.555c1.295,1.22,2.532,2.5,3.791,3.758,1.623,1.62,3.291,3.2,4.847,4.882.774.838,1.221.708,1.963-.039q9.731-9.813,19.531-19.559c1.57-1.568,3.193-1.634,4.572-.232a2.8,2.8,0,0,1,.337,3.684,11.085,11.085,0,0,1-1.236,1.435q-10.685,10.7-21.382,21.394a5.131,5.131,0,0,1-2.007,1.431,2.78,2.78,0,0,1-2.941-.773c-3.905-3.868-7.781-7.765-11.67-11.65A2.626,2.626,0,0,1-697.185,788.673Z" transform="translate(697.191 -774.247)" fill="#50B8E7" />
                                                </svg>
                                            </div>
                                            <div className="col text-start my-auto">
                                                <span className='fw-500'>Internet-Rechtschutz</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pb-2">
                                        <div className="row gx-3">
                                            <div className="col-auto">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 40.599 29.09">
                                                    <path id="Path_106" data-name="Path 106" d="M-697.185,788.673a2.815,2.815,0,0,1,1.724-2.792,2.751,2.751,0,0,1,3.289.555c1.295,1.22,2.532,2.5,3.791,3.758,1.623,1.62,3.291,3.2,4.847,4.882.774.838,1.221.708,1.963-.039q9.731-9.813,19.531-19.559c1.57-1.568,3.193-1.634,4.572-.232a2.8,2.8,0,0,1,.337,3.684,11.085,11.085,0,0,1-1.236,1.435q-10.685,10.7-21.382,21.394a5.131,5.131,0,0,1-2.007,1.431,2.78,2.78,0,0,1-2.941-.773c-3.905-3.868-7.781-7.765-11.67-11.65A2.626,2.626,0,0,1-697.185,788.673Z" transform="translate(697.191 -774.247)" fill="#50B8E7" />
                                                </svg>
                                            </div>
                                            <div className="col text-start my-auto">
                                                <span className='fw-500'>Mobbing-Rechtschutz</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pb-2">
                                        <div className="row gx-3">
                                            <div className="col-auto">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 40.599 29.09">
                                                    <path id="Path_106" data-name="Path 106" d="M-697.185,788.673a2.815,2.815,0,0,1,1.724-2.792,2.751,2.751,0,0,1,3.289.555c1.295,1.22,2.532,2.5,3.791,3.758,1.623,1.62,3.291,3.2,4.847,4.882.774.838,1.221.708,1.963-.039q9.731-9.813,19.531-19.559c1.57-1.568,3.193-1.634,4.572-.232a2.8,2.8,0,0,1,.337,3.684,11.085,11.085,0,0,1-1.236,1.435q-10.685,10.7-21.382,21.394a5.131,5.131,0,0,1-2.007,1.431,2.78,2.78,0,0,1-2.941-.773c-3.905-3.868-7.781-7.765-11.67-11.65A2.626,2.626,0,0,1-697.185,788.673Z" transform="translate(697.191 -774.247)" fill="#50B8E7" />
                                                </svg>
                                            </div>
                                            <div className="col text-start my-auto">
                                                <span className='fw-500'>Erbrecht</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pb-2">
                                        <div className="row gx-3">
                                            <div className="col-auto">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 40.599 29.09">
                                                    <path id="Path_106" data-name="Path 106" d="M-697.185,788.673a2.815,2.815,0,0,1,1.724-2.792,2.751,2.751,0,0,1,3.289.555c1.295,1.22,2.532,2.5,3.791,3.758,1.623,1.62,3.291,3.2,4.847,4.882.774.838,1.221.708,1.963-.039q9.731-9.813,19.531-19.559c1.57-1.568,3.193-1.634,4.572-.232a2.8,2.8,0,0,1,.337,3.684,11.085,11.085,0,0,1-1.236,1.435q-10.685,10.7-21.382,21.394a5.131,5.131,0,0,1-2.007,1.431,2.78,2.78,0,0,1-2.941-.773c-3.905-3.868-7.781-7.765-11.67-11.65A2.626,2.626,0,0,1-697.185,788.673Z" transform="translate(697.191 -774.247)" fill="#50B8E7" />
                                                </svg>
                                            </div>
                                            <div className="col text-start my-auto">
                                                <span className='fw-500'>Steuerrecht</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pb-4">
                                        <div className="row gx-3">
                                            <div className="col-auto">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 40.599 29.09">
                                                    <path id="Path_106" data-name="Path 106" d="M-697.185,788.673a2.815,2.815,0,0,1,1.724-2.792,2.751,2.751,0,0,1,3.289.555c1.295,1.22,2.532,2.5,3.791,3.758,1.623,1.62,3.291,3.2,4.847,4.882.774.838,1.221.708,1.963-.039q9.731-9.813,19.531-19.559c1.57-1.568,3.193-1.634,4.572-.232a2.8,2.8,0,0,1,.337,3.684,11.085,11.085,0,0,1-1.236,1.435q-10.685,10.7-21.382,21.394a5.131,5.131,0,0,1-2.007,1.431,2.78,2.78,0,0,1-2.941-.773c-3.905-3.868-7.781-7.765-11.67-11.65A2.626,2.626,0,0,1-697.185,788.673Z" transform="translate(697.191 -774.247)" fill="#50B8E7" />
                                                </svg>
                                            </div>
                                            <div className="col text-start my-auto">
                                                <span className='fw-500'>Auslandreise-Rechtschutz</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='pb-3 text-start'>
                                        <span className='fw-700'>Deckung</span>
                                    </div>
                                    <div className="pb-2">
                                        <div className="row gx-3">
                                            <div className="col-auto">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 40.599 29.09">
                                                    <path id="Path_106" data-name="Path 106" d="M-697.185,788.673a2.815,2.815,0,0,1,1.724-2.792,2.751,2.751,0,0,1,3.289.555c1.295,1.22,2.532,2.5,3.791,3.758,1.623,1.62,3.291,3.2,4.847,4.882.774.838,1.221.708,1.963-.039q9.731-9.813,19.531-19.559c1.57-1.568,3.193-1.634,4.572-.232a2.8,2.8,0,0,1,.337,3.684,11.085,11.085,0,0,1-1.236,1.435q-10.685,10.7-21.382,21.394a5.131,5.131,0,0,1-2.007,1.431,2.78,2.78,0,0,1-2.941-.773c-3.905-3.868-7.781-7.765-11.67-11.65A2.626,2.626,0,0,1-697.185,788.673Z" transform="translate(697.191 -774.247)" fill="#50B8E7" />
                                                </svg>
                                            </div>
                                            <div className="col text-start my-auto">
                                                <span className='fw-500'>Schweize CHF 500'000</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pb-4">
                                        <div className="row gx-3">
                                            <div className="col-auto">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 40.599 29.09">
                                                    <path id="Path_106" data-name="Path 106" d="M-697.185,788.673a2.815,2.815,0,0,1,1.724-2.792,2.751,2.751,0,0,1,3.289.555c1.295,1.22,2.532,2.5,3.791,3.758,1.623,1.62,3.291,3.2,4.847,4.882.774.838,1.221.708,1.963-.039q9.731-9.813,19.531-19.559c1.57-1.568,3.193-1.634,4.572-.232a2.8,2.8,0,0,1,.337,3.684,11.085,11.085,0,0,1-1.236,1.435q-10.685,10.7-21.382,21.394a5.131,5.131,0,0,1-2.007,1.431,2.78,2.78,0,0,1-2.941-.773c-3.905-3.868-7.781-7.765-11.67-11.65A2.626,2.626,0,0,1-697.185,788.673Z" transform="translate(697.191 -774.247)" fill="#50B8E7" />
                                                </svg>
                                            </div>
                                            <div className="col text-start my-auto">
                                                <span className='fw-500'>Weltweit CHF 100'000</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <button onClick={toggleModal} className='rechtssBtn py-3'>Offerte bestellen</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-4">
                            <div onMouseEnter={() => { setIsHover1(true) }} onMouseLeave={() => { setIsHover1(false) }} className={` ${isHover1 ? ' blueBgDiv' : 'greyBorderDiv'} h-auto p-5 pt-0`}>
                                <div className={`mb-5 ${isHover1 ? ' whiteBorderBottom' : 'blueBorderBottom'}`}>
                                    <div className="pb-2">
                                        <div className='pt-5'>
                                            <span style={{textTransform: 'uppercase'}} className='cardTitle fs-5 fw-600'>Zürich</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-start lh-1 fw-500">
                                    <div className=''>
                                        <span>ab CHF</span>
                                    </div>
                                    <div className='pb-3'>
                                        <span className='fw-700 fs-2'>196.35</span>
                                    </div>
                                    <div className='pb-3'>
                                        <span>/ Jahr</span>
                                    </div>
                                    <div className='pb-4'>
                                        <span style={{fontSize: '14px'}}>
                                            *Preise basieren auf Recherchen welche ende 2022 durchgeführt wurden. Möglicherweise haben sich die Preise zum Zeitpunkt Ihres Seitenbesuches bereits weider geändert.
                                        </span>
                                    </div>
                                    <div className='pb-4'>
                                        <span className='fw-700'>Rechtsgebiete</span>
                                    </div>
                                </div>

                                <div>
                                    <div className="pb-2">
                                        <div className="row gx-3">
                                            <div className="col-auto">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 40.599 29.09">
                                                    <path id="Path_106" data-name="Path 106" d="M-697.185,788.673a2.815,2.815,0,0,1,1.724-2.792,2.751,2.751,0,0,1,3.289.555c1.295,1.22,2.532,2.5,3.791,3.758,1.623,1.62,3.291,3.2,4.847,4.882.774.838,1.221.708,1.963-.039q9.731-9.813,19.531-19.559c1.57-1.568,3.193-1.634,4.572-.232a2.8,2.8,0,0,1,.337,3.684,11.085,11.085,0,0,1-1.236,1.435q-10.685,10.7-21.382,21.394a5.131,5.131,0,0,1-2.007,1.431,2.78,2.78,0,0,1-2.941-.773c-3.905-3.868-7.781-7.765-11.67-11.65A2.626,2.626,0,0,1-697.185,788.673Z" transform="translate(697.191 -774.247)" fill="#50B8E7" />
                                                </svg>
                                            </div>
                                            <div className="col text-start my-auto">
                                                <span className='fw-500'>Arbeitsrecht</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pb-2">
                                        <div className="row gx-3">
                                            <div className="col-auto">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 40.599 29.09">
                                                    <path id="Path_106" data-name="Path 106" d="M-697.185,788.673a2.815,2.815,0,0,1,1.724-2.792,2.751,2.751,0,0,1,3.289.555c1.295,1.22,2.532,2.5,3.791,3.758,1.623,1.62,3.291,3.2,4.847,4.882.774.838,1.221.708,1.963-.039q9.731-9.813,19.531-19.559c1.57-1.568,3.193-1.634,4.572-.232a2.8,2.8,0,0,1,.337,3.684,11.085,11.085,0,0,1-1.236,1.435q-10.685,10.7-21.382,21.394a5.131,5.131,0,0,1-2.007,1.431,2.78,2.78,0,0,1-2.941-.773c-3.905-3.868-7.781-7.765-11.67-11.65A2.626,2.626,0,0,1-697.185,788.673Z" transform="translate(697.191 -774.247)" fill="#50B8E7" />
                                                </svg>
                                            </div>
                                            <div className="col text-start my-auto">
                                                <span className='fw-500'>Eigentums- und Sachrecht</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pb-2">
                                        <div className="row gx-3">
                                            <div className="col-auto">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 40.599 29.09">
                                                    <path id="Path_106" data-name="Path 106" d="M-697.185,788.673a2.815,2.815,0,0,1,1.724-2.792,2.751,2.751,0,0,1,3.289.555c1.295,1.22,2.532,2.5,3.791,3.758,1.623,1.62,3.291,3.2,4.847,4.882.774.838,1.221.708,1.963-.039q9.731-9.813,19.531-19.559c1.57-1.568,3.193-1.634,4.572-.232a2.8,2.8,0,0,1,.337,3.684,11.085,11.085,0,0,1-1.236,1.435q-10.685,10.7-21.382,21.394a5.131,5.131,0,0,1-2.007,1.431,2.78,2.78,0,0,1-2.941-.773c-3.905-3.868-7.781-7.765-11.67-11.65A2.626,2.626,0,0,1-697.185,788.673Z" transform="translate(697.191 -774.247)" fill="#50B8E7" />
                                                </svg>
                                            </div>
                                            <div className="col text-start my-auto">
                                                <span className='fw-500'>Versicherungsrecht</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pb-2">
                                        <div className="row gx-3">
                                            <div className="col-auto">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 40.599 29.09">
                                                    <path id="Path_106" data-name="Path 106" d="M-697.185,788.673a2.815,2.815,0,0,1,1.724-2.792,2.751,2.751,0,0,1,3.289.555c1.295,1.22,2.532,2.5,3.791,3.758,1.623,1.62,3.291,3.2,4.847,4.882.774.838,1.221.708,1.963-.039q9.731-9.813,19.531-19.559c1.57-1.568,3.193-1.634,4.572-.232a2.8,2.8,0,0,1,.337,3.684,11.085,11.085,0,0,1-1.236,1.435q-10.685,10.7-21.382,21.394a5.131,5.131,0,0,1-2.007,1.431,2.78,2.78,0,0,1-2.941-.773c-3.905-3.868-7.781-7.765-11.67-11.65A2.626,2.626,0,0,1-697.185,788.673Z" transform="translate(697.191 -774.247)" fill="#50B8E7" />
                                                </svg>
                                            </div>
                                            <div className="col text-start my-auto">
                                                <span className='fw-500'>Internet-Rechtschutz</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pb-2">
                                        <div className="row gx-3">
                                            <div className="col-auto">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 40.599 29.09">
                                                    <path id="Path_106" data-name="Path 106" d="M-697.185,788.673a2.815,2.815,0,0,1,1.724-2.792,2.751,2.751,0,0,1,3.289.555c1.295,1.22,2.532,2.5,3.791,3.758,1.623,1.62,3.291,3.2,4.847,4.882.774.838,1.221.708,1.963-.039q9.731-9.813,19.531-19.559c1.57-1.568,3.193-1.634,4.572-.232a2.8,2.8,0,0,1,.337,3.684,11.085,11.085,0,0,1-1.236,1.435q-10.685,10.7-21.382,21.394a5.131,5.131,0,0,1-2.007,1.431,2.78,2.78,0,0,1-2.941-.773c-3.905-3.868-7.781-7.765-11.67-11.65A2.626,2.626,0,0,1-697.185,788.673Z" transform="translate(697.191 -774.247)" fill="#50B8E7" />
                                                </svg>
                                            </div>
                                            <div className="col text-start my-auto">
                                                <span className='fw-500'>Mobbing-Rechtschutz</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pb-2">
                                        <div className="row gx-3">
                                            <div className="col-auto">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 40.599 29.09">
                                                    <path id="Path_106" data-name="Path 106" d="M-697.185,788.673a2.815,2.815,0,0,1,1.724-2.792,2.751,2.751,0,0,1,3.289.555c1.295,1.22,2.532,2.5,3.791,3.758,1.623,1.62,3.291,3.2,4.847,4.882.774.838,1.221.708,1.963-.039q9.731-9.813,19.531-19.559c1.57-1.568,3.193-1.634,4.572-.232a2.8,2.8,0,0,1,.337,3.684,11.085,11.085,0,0,1-1.236,1.435q-10.685,10.7-21.382,21.394a5.131,5.131,0,0,1-2.007,1.431,2.78,2.78,0,0,1-2.941-.773c-3.905-3.868-7.781-7.765-11.67-11.65A2.626,2.626,0,0,1-697.185,788.673Z" transform="translate(697.191 -774.247)" fill="#50B8E7" />
                                                </svg>
                                            </div>
                                            <div className="col text-start my-auto">
                                                <span className='fw-500'>Erbrecht</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pb-2">
                                        <div className="row gx-3">
                                            <div className="col-auto">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 40.599 29.09">
                                                    <path id="Path_106" data-name="Path 106" d="M-697.185,788.673a2.815,2.815,0,0,1,1.724-2.792,2.751,2.751,0,0,1,3.289.555c1.295,1.22,2.532,2.5,3.791,3.758,1.623,1.62,3.291,3.2,4.847,4.882.774.838,1.221.708,1.963-.039q9.731-9.813,19.531-19.559c1.57-1.568,3.193-1.634,4.572-.232a2.8,2.8,0,0,1,.337,3.684,11.085,11.085,0,0,1-1.236,1.435q-10.685,10.7-21.382,21.394a5.131,5.131,0,0,1-2.007,1.431,2.78,2.78,0,0,1-2.941-.773c-3.905-3.868-7.781-7.765-11.67-11.65A2.626,2.626,0,0,1-697.185,788.673Z" transform="translate(697.191 -774.247)" fill="#50B8E7" />
                                                </svg>
                                            </div>
                                            <div className="col text-start my-auto">
                                                <span className='fw-500'>Steuerrecht</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pb-4">
                                        <div className="row gx-3">
                                            <div className="col-auto">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 40.599 29.09">
                                                    <path id="Path_106" data-name="Path 106" d="M-697.185,788.673a2.815,2.815,0,0,1,1.724-2.792,2.751,2.751,0,0,1,3.289.555c1.295,1.22,2.532,2.5,3.791,3.758,1.623,1.62,3.291,3.2,4.847,4.882.774.838,1.221.708,1.963-.039q9.731-9.813,19.531-19.559c1.57-1.568,3.193-1.634,4.572-.232a2.8,2.8,0,0,1,.337,3.684,11.085,11.085,0,0,1-1.236,1.435q-10.685,10.7-21.382,21.394a5.131,5.131,0,0,1-2.007,1.431,2.78,2.78,0,0,1-2.941-.773c-3.905-3.868-7.781-7.765-11.67-11.65A2.626,2.626,0,0,1-697.185,788.673Z" transform="translate(697.191 -774.247)" fill="#50B8E7" />
                                                </svg>
                                            </div>
                                            <div className="col text-start my-auto">
                                                <span className='fw-500'>Auslandreise-Rechtschutz</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='pb-3 text-start'>
                                        <span className='fw-700'>Deckung</span>
                                    </div>
                                    <div className="pb-2">
                                        <div className="row gx-3">
                                            <div className="col-auto">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 40.599 29.09">
                                                    <path id="Path_106" data-name="Path 106" d="M-697.185,788.673a2.815,2.815,0,0,1,1.724-2.792,2.751,2.751,0,0,1,3.289.555c1.295,1.22,2.532,2.5,3.791,3.758,1.623,1.62,3.291,3.2,4.847,4.882.774.838,1.221.708,1.963-.039q9.731-9.813,19.531-19.559c1.57-1.568,3.193-1.634,4.572-.232a2.8,2.8,0,0,1,.337,3.684,11.085,11.085,0,0,1-1.236,1.435q-10.685,10.7-21.382,21.394a5.131,5.131,0,0,1-2.007,1.431,2.78,2.78,0,0,1-2.941-.773c-3.905-3.868-7.781-7.765-11.67-11.65A2.626,2.626,0,0,1-697.185,788.673Z" transform="translate(697.191 -774.247)" fill="#50B8E7" />
                                                </svg>
                                            </div>
                                            <div className="col text-start my-auto">
                                                <span className='fw-500'>Schweize CHF 600'000</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pb-4">
                                        <div className="row gx-3">
                                            <div className="col-auto">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 40.599 29.09">
                                                    <path id="Path_106" data-name="Path 106" d="M-697.185,788.673a2.815,2.815,0,0,1,1.724-2.792,2.751,2.751,0,0,1,3.289.555c1.295,1.22,2.532,2.5,3.791,3.758,1.623,1.62,3.291,3.2,4.847,4.882.774.838,1.221.708,1.963-.039q9.731-9.813,19.531-19.559c1.57-1.568,3.193-1.634,4.572-.232a2.8,2.8,0,0,1,.337,3.684,11.085,11.085,0,0,1-1.236,1.435q-10.685,10.7-21.382,21.394a5.131,5.131,0,0,1-2.007,1.431,2.78,2.78,0,0,1-2.941-.773c-3.905-3.868-7.781-7.765-11.67-11.65A2.626,2.626,0,0,1-697.185,788.673Z" transform="translate(697.191 -774.247)" fill="#50B8E7" />
                                                </svg>
                                            </div>
                                            <div className="col text-start my-auto">
                                                <span className='fw-500'>Weltweit CHF 150'000</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <button onClick={toggleModal} className='rechtssBtn py-3'>Offerte bestellen</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-4">
                            <div onMouseEnter={() => { setIsHover2(true) }} onMouseLeave={() => { setIsHover2(false) }} className={` ${isHover2 ? ' blueBgDiv' : 'greyBorderDiv'} h-100 p-5 pt-0`}>
                                <div className={`mb-5 ${isHover2 ? ' whiteBorderBottom' : 'blueBorderBottom'}`}>
                                    <div className="pb-2">
                                        <div className='pt-5'>
                                            <span style={{textTransform: 'uppercase'}} className='cardTitle fs-5 fw-600'>Dextra</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-start lh-1 fw-500">
                                    <div className=''>
                                        <span>ab CHF</span>
                                    </div>
                                    <div className='pb-3'>
                                        <span className='fw-700 fs-2'>21.50</span>
                                    </div>
                                    <div className='pb-3'>
                                        <span>/ Jahr</span>
                                    </div>
                                    <div className='pb-4'>
                                        <span style={{fontSize: '14px'}}>
                                            *Preise basieren auf Recherchen welche ende 2022 durchgeführt wurden. Möglicherweise haben sich die Preise zum Zeitpunkt Ihres Seitenbesuches bereits weider geändert.
                                        </span>
                                    </div>
                                    <div className='pb-4'>
                                        <span className='fw-700'>Rechtsgebiete</span>
                                    </div>
                                </div>

                                <div>
                                    <div className="pb-2">
                                        <div className="row gx-3">
                                            <div className="col-auto">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 40.599 29.09">
                                                    <path id="Path_106" data-name="Path 106" d="M-697.185,788.673a2.815,2.815,0,0,1,1.724-2.792,2.751,2.751,0,0,1,3.289.555c1.295,1.22,2.532,2.5,3.791,3.758,1.623,1.62,3.291,3.2,4.847,4.882.774.838,1.221.708,1.963-.039q9.731-9.813,19.531-19.559c1.57-1.568,3.193-1.634,4.572-.232a2.8,2.8,0,0,1,.337,3.684,11.085,11.085,0,0,1-1.236,1.435q-10.685,10.7-21.382,21.394a5.131,5.131,0,0,1-2.007,1.431,2.78,2.78,0,0,1-2.941-.773c-3.905-3.868-7.781-7.765-11.67-11.65A2.626,2.626,0,0,1-697.185,788.673Z" transform="translate(697.191 -774.247)" fill="#50B8E7" />
                                                </svg>
                                            </div>
                                            <div className="col text-start my-auto">
                                                <span className='fw-500'>Arbeitsrecht</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pb-2">
                                        <div className="row gx-3">
                                            <div className="col-auto">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 40.599 29.09">
                                                    <path id="Path_106" data-name="Path 106" d="M-697.185,788.673a2.815,2.815,0,0,1,1.724-2.792,2.751,2.751,0,0,1,3.289.555c1.295,1.22,2.532,2.5,3.791,3.758,1.623,1.62,3.291,3.2,4.847,4.882.774.838,1.221.708,1.963-.039q9.731-9.813,19.531-19.559c1.57-1.568,3.193-1.634,4.572-.232a2.8,2.8,0,0,1,.337,3.684,11.085,11.085,0,0,1-1.236,1.435q-10.685,10.7-21.382,21.394a5.131,5.131,0,0,1-2.007,1.431,2.78,2.78,0,0,1-2.941-.773c-3.905-3.868-7.781-7.765-11.67-11.65A2.626,2.626,0,0,1-697.185,788.673Z" transform="translate(697.191 -774.247)" fill="#50B8E7" />
                                                </svg>
                                            </div>
                                            <div className="col text-start my-auto">
                                                <span className='fw-500'>Eigentums- und Sachrecht</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pb-2">
                                        <div className="row gx-3">
                                            <div className="col-auto">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 40.599 29.09">
                                                    <path id="Path_106" data-name="Path 106" d="M-697.185,788.673a2.815,2.815,0,0,1,1.724-2.792,2.751,2.751,0,0,1,3.289.555c1.295,1.22,2.532,2.5,3.791,3.758,1.623,1.62,3.291,3.2,4.847,4.882.774.838,1.221.708,1.963-.039q9.731-9.813,19.531-19.559c1.57-1.568,3.193-1.634,4.572-.232a2.8,2.8,0,0,1,.337,3.684,11.085,11.085,0,0,1-1.236,1.435q-10.685,10.7-21.382,21.394a5.131,5.131,0,0,1-2.007,1.431,2.78,2.78,0,0,1-2.941-.773c-3.905-3.868-7.781-7.765-11.67-11.65A2.626,2.626,0,0,1-697.185,788.673Z" transform="translate(697.191 -774.247)" fill="#50B8E7" />
                                                </svg>
                                            </div>
                                            <div className="col text-start my-auto">
                                                <span className='fw-500'>Versicherungsrecht</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pb-2">
                                        <div className="row gx-3">
                                            <div className="col-auto">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 40.599 29.09">
                                                    <path id="Path_106" data-name="Path 106" d="M-697.185,788.673a2.815,2.815,0,0,1,1.724-2.792,2.751,2.751,0,0,1,3.289.555c1.295,1.22,2.532,2.5,3.791,3.758,1.623,1.62,3.291,3.2,4.847,4.882.774.838,1.221.708,1.963-.039q9.731-9.813,19.531-19.559c1.57-1.568,3.193-1.634,4.572-.232a2.8,2.8,0,0,1,.337,3.684,11.085,11.085,0,0,1-1.236,1.435q-10.685,10.7-21.382,21.394a5.131,5.131,0,0,1-2.007,1.431,2.78,2.78,0,0,1-2.941-.773c-3.905-3.868-7.781-7.765-11.67-11.65A2.626,2.626,0,0,1-697.185,788.673Z" transform="translate(697.191 -774.247)" fill="#50B8E7" />
                                                </svg>
                                            </div>
                                            <div className="col text-start my-auto">
                                                <span className='fw-500'>Internet-Rechtschutz</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pb-2">
                                        <div className="row gx-3">
                                            <div className="col-auto">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 40.599 29.09">
                                                    <path id="Path_106" data-name="Path 106" d="M-697.185,788.673a2.815,2.815,0,0,1,1.724-2.792,2.751,2.751,0,0,1,3.289.555c1.295,1.22,2.532,2.5,3.791,3.758,1.623,1.62,3.291,3.2,4.847,4.882.774.838,1.221.708,1.963-.039q9.731-9.813,19.531-19.559c1.57-1.568,3.193-1.634,4.572-.232a2.8,2.8,0,0,1,.337,3.684,11.085,11.085,0,0,1-1.236,1.435q-10.685,10.7-21.382,21.394a5.131,5.131,0,0,1-2.007,1.431,2.78,2.78,0,0,1-2.941-.773c-3.905-3.868-7.781-7.765-11.67-11.65A2.626,2.626,0,0,1-697.185,788.673Z" transform="translate(697.191 -774.247)" fill="#50B8E7" />
                                                </svg>
                                            </div>
                                            <div className="col text-start my-auto">
                                                <span className='fw-500'>Mobbing-Rechtschutz</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pb-2">
                                        <div className="row gx-3">
                                            <div className="col-auto">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 40.599 29.09">
                                                    <path id="Path_106" data-name="Path 106" d="M-697.185,788.673a2.815,2.815,0,0,1,1.724-2.792,2.751,2.751,0,0,1,3.289.555c1.295,1.22,2.532,2.5,3.791,3.758,1.623,1.62,3.291,3.2,4.847,4.882.774.838,1.221.708,1.963-.039q9.731-9.813,19.531-19.559c1.57-1.568,3.193-1.634,4.572-.232a2.8,2.8,0,0,1,.337,3.684,11.085,11.085,0,0,1-1.236,1.435q-10.685,10.7-21.382,21.394a5.131,5.131,0,0,1-2.007,1.431,2.78,2.78,0,0,1-2.941-.773c-3.905-3.868-7.781-7.765-11.67-11.65A2.626,2.626,0,0,1-697.185,788.673Z" transform="translate(697.191 -774.247)" fill="#50B8E7" />
                                                </svg>
                                            </div>
                                            <div className="col text-start my-auto">
                                                <span className='fw-500'>Erbrecht</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pb-2">
                                        <div className="row gx-3">
                                            <div className="col-auto">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 40.599 29.09">
                                                    <path id="Path_106" data-name="Path 106" d="M-697.185,788.673a2.815,2.815,0,0,1,1.724-2.792,2.751,2.751,0,0,1,3.289.555c1.295,1.22,2.532,2.5,3.791,3.758,1.623,1.62,3.291,3.2,4.847,4.882.774.838,1.221.708,1.963-.039q9.731-9.813,19.531-19.559c1.57-1.568,3.193-1.634,4.572-.232a2.8,2.8,0,0,1,.337,3.684,11.085,11.085,0,0,1-1.236,1.435q-10.685,10.7-21.382,21.394a5.131,5.131,0,0,1-2.007,1.431,2.78,2.78,0,0,1-2.941-.773c-3.905-3.868-7.781-7.765-11.67-11.65A2.626,2.626,0,0,1-697.185,788.673Z" transform="translate(697.191 -774.247)" fill="#50B8E7" />
                                                </svg>
                                            </div>
                                            <div className="col text-start my-auto">
                                                <span className='fw-500'>Steuerrecht</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pb-2">
                                        <div className="row gx-3">
                                            <div className="col-auto">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 40.599 29.09">
                                                    <path id="Path_106" data-name="Path 106" d="M-697.185,788.673a2.815,2.815,0,0,1,1.724-2.792,2.751,2.751,0,0,1,3.289.555c1.295,1.22,2.532,2.5,3.791,3.758,1.623,1.62,3.291,3.2,4.847,4.882.774.838,1.221.708,1.963-.039q9.731-9.813,19.531-19.559c1.57-1.568,3.193-1.634,4.572-.232a2.8,2.8,0,0,1,.337,3.684,11.085,11.085,0,0,1-1.236,1.435q-10.685,10.7-21.382,21.394a5.131,5.131,0,0,1-2.007,1.431,2.78,2.78,0,0,1-2.941-.773c-3.905-3.868-7.781-7.765-11.67-11.65A2.626,2.626,0,0,1-697.185,788.673Z" transform="translate(697.191 -774.247)" fill="#50B8E7" />
                                                </svg>
                                            </div>
                                            <div className="col text-start my-auto">
                                                <span className='fw-500'>Auslandreise-Rechtschutz</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pb-2">
                                        <div className="row gx-3">
                                            <div className="col-auto">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 40.599 29.09">
                                                    <path id="Path_106" data-name="Path 106" d="M-697.185,788.673a2.815,2.815,0,0,1,1.724-2.792,2.751,2.751,0,0,1,3.289.555c1.295,1.22,2.532,2.5,3.791,3.758,1.623,1.62,3.291,3.2,4.847,4.882.774.838,1.221.708,1.963-.039q9.731-9.813,19.531-19.559c1.57-1.568,3.193-1.634,4.572-.232a2.8,2.8,0,0,1,.337,3.684,11.085,11.085,0,0,1-1.236,1.435q-10.685,10.7-21.382,21.394a5.131,5.131,0,0,1-2.007,1.431,2.78,2.78,0,0,1-2.941-.773c-3.905-3.868-7.781-7.765-11.67-11.65A2.626,2.626,0,0,1-697.185,788.673Z" transform="translate(697.191 -774.247)" fill="#50B8E7" />
                                                </svg>
                                            </div>
                                            <div className="col text-start my-auto">
                                                <span className='fw-500'>Verkehrsrechtschutz</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pb-2">
                                        <div className="row gx-3">
                                            <div className="col-auto">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 40.599 29.09">
                                                    <path id="Path_106" data-name="Path 106" d="M-697.185,788.673a2.815,2.815,0,0,1,1.724-2.792,2.751,2.751,0,0,1,3.289.555c1.295,1.22,2.532,2.5,3.791,3.758,1.623,1.62,3.291,3.2,4.847,4.882.774.838,1.221.708,1.963-.039q9.731-9.813,19.531-19.559c1.57-1.568,3.193-1.634,4.572-.232a2.8,2.8,0,0,1,.337,3.684,11.085,11.085,0,0,1-1.236,1.435q-10.685,10.7-21.382,21.394a5.131,5.131,0,0,1-2.007,1.431,2.78,2.78,0,0,1-2.941-.773c-3.905-3.868-7.781-7.765-11.67-11.65A2.626,2.626,0,0,1-697.185,788.673Z" transform="translate(697.191 -774.247)" fill="#50B8E7" />
                                                </svg>
                                            </div>
                                            <div className="col text-start my-auto">
                                                <span className='fw-500'>Scheidungsrecht</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pb-2">
                                        <div className="row gx-3">
                                            <div className="col-auto">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 40.599 29.09">
                                                    <path id="Path_106" data-name="Path 106" d="M-697.185,788.673a2.815,2.815,0,0,1,1.724-2.792,2.751,2.751,0,0,1,3.289.555c1.295,1.22,2.532,2.5,3.791,3.758,1.623,1.62,3.291,3.2,4.847,4.882.774.838,1.221.708,1.963-.039q9.731-9.813,19.531-19.559c1.57-1.568,3.193-1.634,4.572-.232a2.8,2.8,0,0,1,.337,3.684,11.085,11.085,0,0,1-1.236,1.435q-10.685,10.7-21.382,21.394a5.131,5.131,0,0,1-2.007,1.431,2.78,2.78,0,0,1-2.941-.773c-3.905-3.868-7.781-7.765-11.67-11.65A2.626,2.626,0,0,1-697.185,788.673Z" transform="translate(697.191 -774.247)" fill="#50B8E7" />
                                                </svg>
                                            </div>
                                            <div className="col text-start my-auto">
                                                <span className='fw-500'>All Risk</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pb-4">
                                        <div className="row gx-3">
                                            <div className="col-auto">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 40.599 29.09">
                                                    <path id="Path_106" data-name="Path 106" d="M-697.185,788.673a2.815,2.815,0,0,1,1.724-2.792,2.751,2.751,0,0,1,3.289.555c1.295,1.22,2.532,2.5,3.791,3.758,1.623,1.62,3.291,3.2,4.847,4.882.774.838,1.221.708,1.963-.039q9.731-9.813,19.531-19.559c1.57-1.568,3.193-1.634,4.572-.232a2.8,2.8,0,0,1,.337,3.684,11.085,11.085,0,0,1-1.236,1.435q-10.685,10.7-21.382,21.394a5.131,5.131,0,0,1-2.007,1.431,2.78,2.78,0,0,1-2.941-.773c-3.905-3.868-7.781-7.765-11.67-11.65A2.626,2.626,0,0,1-697.185,788.673Z" transform="translate(697.191 -774.247)" fill="#50B8E7" />
                                                </svg>
                                            </div>
                                            <div className="col text-start my-auto">
                                                <span className='fw-500'>Freie Anwaltswahl</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='pb-3 text-start'>
                                        <span className='fw-700'>Deckung</span>
                                    </div>
                                    <div className="pb-2">
                                        <div className="row gx-3">
                                            <div className="col-auto">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 40.599 29.09">
                                                    <path id="Path_106" data-name="Path 106" d="M-697.185,788.673a2.815,2.815,0,0,1,1.724-2.792,2.751,2.751,0,0,1,3.289.555c1.295,1.22,2.532,2.5,3.791,3.758,1.623,1.62,3.291,3.2,4.847,4.882.774.838,1.221.708,1.963-.039q9.731-9.813,19.531-19.559c1.57-1.568,3.193-1.634,4.572-.232a2.8,2.8,0,0,1,.337,3.684,11.085,11.085,0,0,1-1.236,1.435q-10.685,10.7-21.382,21.394a5.131,5.131,0,0,1-2.007,1.431,2.78,2.78,0,0,1-2.941-.773c-3.905-3.868-7.781-7.765-11.67-11.65A2.626,2.626,0,0,1-697.185,788.673Z" transform="translate(697.191 -774.247)" fill="#50B8E7" />
                                                </svg>
                                            </div>
                                            <div className="col text-start my-auto">
                                                <span className='fw-500'>Schweize CHF 1'200'000</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pb-4">
                                        <div className="row gx-3">
                                            <div className="col-auto">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 40.599 29.09">
                                                    <path id="Path_106" data-name="Path 106" d="M-697.185,788.673a2.815,2.815,0,0,1,1.724-2.792,2.751,2.751,0,0,1,3.289.555c1.295,1.22,2.532,2.5,3.791,3.758,1.623,1.62,3.291,3.2,4.847,4.882.774.838,1.221.708,1.963-.039q9.731-9.813,19.531-19.559c1.57-1.568,3.193-1.634,4.572-.232a2.8,2.8,0,0,1,.337,3.684,11.085,11.085,0,0,1-1.236,1.435q-10.685,10.7-21.382,21.394a5.131,5.131,0,0,1-2.007,1.431,2.78,2.78,0,0,1-2.941-.773c-3.905-3.868-7.781-7.765-11.67-11.65A2.626,2.626,0,0,1-697.185,788.673Z" transform="translate(697.191 -774.247)" fill="#50B8E7" />
                                                </svg>
                                            </div>
                                            <div className="col text-start my-auto">
                                                <span className='fw-500'>Weltweit CHF 1'200'000</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <button onClick={toggleModal} className='rechtssBtn py-3'>Offerte bestellen</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            {openModal && (
                <Modal darkMode={props.darkMode} setopenModal={toggleModal} />
            )}
        </div>
    )
}

export default BlueBackgroundSection