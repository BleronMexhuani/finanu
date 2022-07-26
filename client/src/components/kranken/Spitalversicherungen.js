import React, { useState, useEffect } from 'react'
import Economy from '../../assets/images/Dhomat-01.svg'
import Handshake from '../../assets/images/Dhomat-02.svg'
import Kravata from '../../assets/images/Dhomat-03.svg'

import EconomyDark from '../../assets/images/DhomatDark1.svg'
import HandshakeDark from '../../assets/images/DhomatDark2.svg'
import KravataDark from '../../assets/images/DhomatDark3.svg'

function Spitalversicherungen(props) {
    
    const [isHover, setIsHover] = useState(false)
    const [isHover1, setIsHover1] = useState(false)
    const [isHover2, setIsHover2] = useState(false)

    return (
        <>
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
        </>
    )
}

export default Spitalversicherungen