import React, { useState } from 'react'
import BeatingHeart from '../../assets/images/beatingHeart.svg'
import Doctor from '../../assets/images/doctor.svg'
import Hands from '../../assets/images/handsCross.svg'
import Medicine from '../../assets/images/medicine.svg'
import Medicine2 from '../../assets/images/medicine2.svg'
import Transport from '../../assets/images/transport.svg'
import Alternative from '../../assets/images/alternativeMedicine.svg'
import Sport from '../../assets/images/sport.svg'
import Braces from '../../assets/images/braces.svg'
import Fitness from '../../assets/images/fitness.svg'
import Abroad from '../../assets/images/abroad.svg'
import Glasses from '../../assets/images/glasses.svg'
import PhoneDoc from '../../assets/images/phoneDoc.svg'
// import DocumentCheck from "../../assets/images/documentCheck.svg"
// import Lock from "../../assets/images/lock.svg"
// import DocumentLock from "../../assets/images/documentLock.svg"

function KrankenCards() {

    const [isHover, setIsHover] = useState(false)
    const [isHover1, setIsHover1] = useState(false)
    const [isHover2, setIsHover2] = useState(false)
    return (
        <div className='blueBgKrankenOverflow pt-5 pt-md-0'>
            <div className='blueBgKranken1 mb-5 pb-5 mb-lg-0 pb-lg-0'>
                <div className="blueBgCenterText">
                    <div className='pb-5'>
                        <span className='fs-1 bigTitleKranken'>GRUNDVERSICHERUNG</span>
                    </div>
                    <div className='w-100 px-4 px-lg-5 '>
                        <div className="row g-3">
                            <div className="col-12 col-sm-6 col-md">
                                <div className='p-4 whiteCardKranken h-100 text-start'>
                                    <div className='pb-4'>
                                        <img src={BeatingHeart} alt="" />
                                    </div>
                                    <div className='pb-2'>
                                        <span className='fw-600'>Grundmodell (0%)</span>
                                    </div>
                                    <div>
                                        <span className='fw-500'>Freie Arztwahl.</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md">
                                <div className='p-4 whiteCardKranken h-100 text-start'>
                                    <div className='pb-4'>
                                        <img src={Doctor} alt="" />
                                    </div>
                                    <div className='pb-2'>
                                        <span className='fw-600'>Hausarzt (Max. 12%)</span>
                                    </div>
                                    <div>
                                        <span className='fw-500'>Der Hausarzt überweist den
                                            Patienten wenn nötig an
                                            einen Spezialisten.</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md">
                                <div className='p-4 whiteCardKranken h-100 text-start'>
                                    <div className='pb-4'>
                                        <img src={Hands} alt="" />
                                    </div>
                                    <div className='pb-2'>
                                        <span className='fw-600'>Versorgungznetz (HMO)</span>
                                    </div>
                                    <div>
                                        <span className='fw-500'>(Allgemeinärzte oder
                                            Spezialisten).</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md">
                                <div className='p-4 whiteCardKranken h-100 text-start'>
                                    <div className='pb-4'>
                                        <img src={Medicine} alt="" />
                                    </div>
                                    <div className='pb-2'>
                                        <span className='fw-600'>Apothekenmodell (TELMED)</span>
                                    </div>
                                    <div>
                                        <span className='fw-500'>Erste Anlaufstelle bei allen Fragen
                                            rund um Ihre Gesundheit ist die
                                            Partnerapotheke oder telefonische
                                            Gesundheitsberatung.</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md">
                                <div className='p-4 whiteCardKranken h-100 text-start'>
                                    <div className='pb-4'>
                                        <img src={PhoneDoc} alt="" />
                                    </div>
                                    <div className='pb-2'>
                                        <span className='fw-600'>Telemedizin (TELMED)</span>
                                    </div>
                                    <div>
                                        <span className='fw-500'>Der Versicherte muss eine
                                            medizinische Beratungsstelle
                                            anrufen, bevor er den Arzt
                                            aufsucht.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-100 pt-5 mt-5'>
                        <div className='wrapDiv container-xl px-4'>
                            <div className='pb-2'>
                                <span className='fs-1 bigTitleKranken'>
                                    ZUSATZVERSICHERUNG
                                </span>
                            </div>
                            <div className='pb-5 mb-4'>
                                <span className='fw-500 fs-5'>Welche Abteilung ist Ihnen bei einem Spitaleintritt am wichtigsten?</span>
                            </div>
                            <div className='w-100 px-0 px-md-5'>
                                <div className="row gx-0 gy-4 gy-md-5 justify-content-center zuzatImages">
                                    <div className="col-6 col-sm-4 col-lg-3">
                                        <img src={Medicine2} alt="" />
                                    </div>
                                    <div className="col-6 col-sm-4 col-lg-3">
                                        <img src={Transport} alt="" />
                                    </div>
                                    <div className="col-6 col-sm-4 col-lg-3">
                                        <img src={Alternative} alt="" />
                                    </div>
                                    <div className="col-6 col-sm-4 col-lg-3">
                                        <img src={Sport} alt="" />
                                    </div>
                                    <div className="col-6 col-sm-4 col-lg-3">
                                        <img src={Braces} alt="" />
                                    </div>
                                    <div className="col-6 col-sm-4 col-lg-3">
                                        <img src={Fitness} alt="" />

                                    </div>
                                    <div className="col-6 col-sm-4 col-lg-3">
                                        <img src={Abroad} alt="" />

                                    </div>
                                    <div className="col-6 col-sm-4 col-lg-3">
                                        <img src={Glasses} alt="" />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div>
                <div className="wrapDiv container-xl px-4 px-xl-0 pt-0 pt-lg-5 mt-0 mt-lg-5 pt-xl-0 mt-xl-0 pb-5">
                    <div className="row gy-4 gy-lg-0 gx-0 gx-sm-4 gx-xl-5 justify-content-center">
                        <div className="col-12 col-sm-6 col-lg-4">
                            <div onMouseEnter={() => { setIsHover(true) }} onMouseLeave={() => { setIsHover(false) }} className={` ${isHover ? ' blueBgDiv' : 'greyBorderDiv'} h-100 p-5`}>
                                <div className={`mb-5 ${isHover ? ' whiteBorderBottom' : 'blueBorderBottom'}`}>
                                    <div className="pb-5">
                                        {/* <img src={DocumentCheck} width={55} height={70} alt="" /> */}
                                        <svg width={55} height={70} viewBox="0 0 61 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M58.5298 53.5154C58.5298 56.4345 56.6185 59.6151 53.5691 62.1441C50.541 64.6555 46.6856 66.2686 43.2984 66.2686C40.0158 66.2686 37.5351 64.752 35.8276 62.414C34.0917 60.0372 33.1592 56.799 33.1592 53.5154C33.1592 47.4557 39.1919 42.1875 46.2082 42.1875C53.1206 42.1875 58.5298 47.3626 58.5298 53.5154Z" stroke="#84CDEE" strokeWidth="3" />
                                            <path d="M40.6855 54.2279L43.9095 58.0966C45.6289 55.0876 49.5836 48.9406 51.6469 48.4248" stroke="#84CDEE" strokeWidth="3" />
                                            <path d="M34.3532 68.5871C23.3913 66.6527 0.178983 73.1006 2.11388 62.1392V20.228C2.40943 19.4891 2.77929 18.612 3.21798 17.6487M18.233 2.174C27.9048 2.17404 50.4724 0.239429 50.4724 9.26666V36.3475M18.233 2.174C19.0927 7.33223 19.7805 17.6487 15.6539 17.6487C11.5272 17.6487 5.64384 17.6487 3.21798 17.6487M18.233 2.174C11.4275 2.17398 5.96929 11.6069 3.21798 17.6487" stroke="#84CDEE" strokeWidth="3" />
                                        </svg>

                                    </div>
                                </div>
                                <div>
                                    <div className="pb-4">
                                        <div className="row gx-3">
                                            <div className="col-auto">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 28.478 28.814">
                                                    <path id="Path_103" data-name="Path 103" d="M-307.877,798.591a2.925,2.925,0,0,1-1.779,2.517,2.933,2.933,0,0,1-3.425-.675c-1.882-1.845-3.736-3.719-5.6-5.582-.85-.849-1.729-1.672-2.537-2.559-.558-.612-.945-.548-1.5.019-2.718,2.763-5.468,5.495-8.214,8.23a3.13,3.13,0,0,1-3,1.143,2.883,2.883,0,0,1-2.28-2.1,2.965,2.965,0,0,1,.863-3.08q4.045-4.013,8.06-8.055c1.106-1.107,1.105-1.109-.024-2.24l-7.971-7.98a3.037,3.037,0,0,1-.885-3.289,2.824,2.824,0,0,1,2.269-1.95,3.018,3.018,0,0,1,2.825,1c2.674,2.7,5.395,5.349,8.034,8.08.8.829,1.3.9,2.14.028,2.551-2.655,5.174-5.24,7.8-7.824a2.892,2.892,0,0,1,4.259-.242,2.988,2.988,0,0,1-.113,4.524c-2.56,2.593-5.117,5.189-7.742,7.715-.829.8-.907,1.279-.031,2.117,2.6,2.491,5.114,5.08,7.668,7.624A3.459,3.459,0,0,1-307.877,798.591Z" transform="translate(336.349 -772.939)" fill="#84cdee" />
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
                                                    <path id="Path_103" data-name="Path 103" d="M-307.877,798.591a2.925,2.925,0,0,1-1.779,2.517,2.933,2.933,0,0,1-3.425-.675c-1.882-1.845-3.736-3.719-5.6-5.582-.85-.849-1.729-1.672-2.537-2.559-.558-.612-.945-.548-1.5.019-2.718,2.763-5.468,5.495-8.214,8.23a3.13,3.13,0,0,1-3,1.143,2.883,2.883,0,0,1-2.28-2.1,2.965,2.965,0,0,1,.863-3.08q4.045-4.013,8.06-8.055c1.106-1.107,1.105-1.109-.024-2.24l-7.971-7.98a3.037,3.037,0,0,1-.885-3.289,2.824,2.824,0,0,1,2.269-1.95,3.018,3.018,0,0,1,2.825,1c2.674,2.7,5.395,5.349,8.034,8.08.8.829,1.3.9,2.14.028,2.551-2.655,5.174-5.24,7.8-7.824a2.892,2.892,0,0,1,4.259-.242,2.988,2.988,0,0,1-.113,4.524c-2.56,2.593-5.117,5.189-7.742,7.715-.829.8-.907,1.279-.031,2.117,2.6,2.491,5.114,5.08,7.668,7.624A3.459,3.459,0,0,1-307.877,798.591Z" transform="translate(336.349 -772.939)" fill="#84cdee" />
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
                                                    <path id="Path_103" data-name="Path 103" d="M-307.877,798.591a2.925,2.925,0,0,1-1.779,2.517,2.933,2.933,0,0,1-3.425-.675c-1.882-1.845-3.736-3.719-5.6-5.582-.85-.849-1.729-1.672-2.537-2.559-.558-.612-.945-.548-1.5.019-2.718,2.763-5.468,5.495-8.214,8.23a3.13,3.13,0,0,1-3,1.143,2.883,2.883,0,0,1-2.28-2.1,2.965,2.965,0,0,1,.863-3.08q4.045-4.013,8.06-8.055c1.106-1.107,1.105-1.109-.024-2.24l-7.971-7.98a3.037,3.037,0,0,1-.885-3.289,2.824,2.824,0,0,1,2.269-1.95,3.018,3.018,0,0,1,2.825,1c2.674,2.7,5.395,5.349,8.034,8.08.8.829,1.3.9,2.14.028,2.551-2.655,5.174-5.24,7.8-7.824a2.892,2.892,0,0,1,4.259-.242,2.988,2.988,0,0,1-.113,4.524c-2.56,2.593-5.117,5.189-7.742,7.715-.829.8-.907,1.279-.031,2.117,2.6,2.491,5.114,5.08,7.668,7.624A3.459,3.459,0,0,1-307.877,798.591Z" transform="translate(336.349 -772.939)" fill="#84cdee" />
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
                            <div className={` ${isHover1 ? ' blueBgDiv' : 'greyBorderDiv'} h-100 p-5`}>
                                <div className={`mb-5 ${isHover1 ? ' whiteBorderBottom' : 'blueBorderBottom'}`}>
                                    <div className="pb-5">
                                        {/* <img src={DocumentLock} width={55} height={70}  alt="" /> */}
                                        <svg width={55} height={70} viewBox="0 0 73 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M53.0409 38.6191C50.2554 38.7666 47.603 38.9395 45.4803 39.0968C43.5899 69.3435 66.4054 59.1727 68.165 58C71.0012 56.1098 71.0006 40.9871 71.0006 39.0968C71.0006 38.4874 68.2383 38.2668 64.3832 38.2618M53.0409 38.6191C52.0957 33.7371 51.7176 24.1621 57.7669 24.9183C63.8161 25.6744 64.6983 34.129 64.3832 38.2618M53.0409 38.6191C56.9205 38.4136 61.0583 38.2575 64.3832 38.2618" stroke="#84CDEE" strokeWidth="3" />
                                            <path d="M2 3.18264V80.6885C13.0273 90.7706 35.0818 103.37 35.0818 95.8116C35.0818 92.8273 35.0818 88.1714 35.0818 82.5759M2 3.18264C27.7093 13.0127 34.7667 22.4016 35.0818 25.8673C35.0818 39.6335 35.0818 65.4868 35.0818 82.5759M2 3.18264C2 3.18264 55.876 -1.54639 56.8212 7.90861C56.8212 16.9825 56.8212 18.3033 56.8212 19.2473M35.0818 82.5759C43.2735 83.2081 56.8212 83.7156 56.8212 80.6885C56.8212 77.6615 56.8212 69.3432 56.8212 65.5624" stroke="#84CDEE" strokeWidth="3" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <div className="pb-4">
                                        <div className="row gx-3">
                                            <div className="col-auto">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="20" viewBox="0 0 40.599 29.09">
                                                    <path id="Path_106" data-name="Path 106" d="M-697.185,788.673a2.815,2.815,0,0,1,1.724-2.792,2.751,2.751,0,0,1,3.289.555c1.295,1.22,2.532,2.5,3.791,3.758,1.623,1.62,3.291,3.2,4.847,4.882.774.838,1.221.708,1.963-.039q9.731-9.813,19.531-19.559c1.57-1.568,3.193-1.634,4.572-.232a2.8,2.8,0,0,1,.337,3.684,11.085,11.085,0,0,1-1.236,1.435q-10.685,10.7-21.382,21.394a5.131,5.131,0,0,1-2.007,1.431,2.78,2.78,0,0,1-2.941-.773c-3.905-3.868-7.781-7.765-11.67-11.65A2.626,2.626,0,0,1-697.185,788.673Z" transform="translate(697.191 -774.247)" fill="#84cdee" />
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
                                                    <path id="Path_106" data-name="Path 106" d="M-697.185,788.673a2.815,2.815,0,0,1,1.724-2.792,2.751,2.751,0,0,1,3.289.555c1.295,1.22,2.532,2.5,3.791,3.758,1.623,1.62,3.291,3.2,4.847,4.882.774.838,1.221.708,1.963-.039q9.731-9.813,19.531-19.559c1.57-1.568,3.193-1.634,4.572-.232a2.8,2.8,0,0,1,.337,3.684,11.085,11.085,0,0,1-1.236,1.435q-10.685,10.7-21.382,21.394a5.131,5.131,0,0,1-2.007,1.431,2.78,2.78,0,0,1-2.941-.773c-3.905-3.868-7.781-7.765-11.67-11.65A2.626,2.626,0,0,1-697.185,788.673Z" transform="translate(697.191 -774.247)" fill="#84cdee" />
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
                                                    <path id="Path_106" data-name="Path 106" d="M-697.185,788.673a2.815,2.815,0,0,1,1.724-2.792,2.751,2.751,0,0,1,3.289.555c1.295,1.22,2.532,2.5,3.791,3.758,1.623,1.62,3.291,3.2,4.847,4.882.774.838,1.221.708,1.963-.039q9.731-9.813,19.531-19.559c1.57-1.568,3.193-1.634,4.572-.232a2.8,2.8,0,0,1,.337,3.684,11.085,11.085,0,0,1-1.236,1.435q-10.685,10.7-21.382,21.394a5.131,5.131,0,0,1-2.007,1.431,2.78,2.78,0,0,1-2.941-.773c-3.905-3.868-7.781-7.765-11.67-11.65A2.626,2.626,0,0,1-697.185,788.673Z" transform="translate(697.191 -774.247)" fill="#84cdee" />
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
                                                    <path id="Path_106" data-name="Path 106" d="M-697.185,788.673a2.815,2.815,0,0,1,1.724-2.792,2.751,2.751,0,0,1,3.289.555c1.295,1.22,2.532,2.5,3.791,3.758,1.623,1.62,3.291,3.2,4.847,4.882.774.838,1.221.708,1.963-.039q9.731-9.813,19.531-19.559c1.57-1.568,3.193-1.634,4.572-.232a2.8,2.8,0,0,1,.337,3.684,11.085,11.085,0,0,1-1.236,1.435q-10.685,10.7-21.382,21.394a5.131,5.131,0,0,1-2.007,1.431,2.78,2.78,0,0,1-2.941-.773c-3.905-3.868-7.781-7.765-11.67-11.65A2.626,2.626,0,0,1-697.185,788.673Z" transform="translate(697.191 -774.247)" fill="#84cdee" />
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
                            <div className={` ${isHover2 ? ' blueBgDiv' : 'greyBorderDiv'} h-100 p-5`}>
                                <div className={`mb-5 ${isHover2 ? ' whiteBorderBottom' : 'blueBorderBottom'}`}>
                                    <div className="pb-5">
                                        {/* <img src={Lock} width={55} height={70} alt="" /> */
                                            <svg width={55} height={70} viewBox="0 0 55 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.1706 28.9374C9.21414 28.9843 8.23742 29.0377 7.23999 29.0979C0.206636 30.8794 -1.5517 63.5414 8.99833 64.1352C19.5484 64.7291 52.3707 67.6984 52.3707 57.6028C52.3707 49.5264 52.3707 41.9647 52.3707 39.1934C53.1223 36.8001 51.313 33.2708 42.9929 30.9712M10.1706 28.9374C8.41222 18.6974 8.99833 -0.951218 25.4095 2.37437C41.8207 5.69995 43.9697 22.8246 42.9929 30.9712M10.1706 28.9374C26.2257 28.1496 36.5571 29.1925 42.9929 30.9712M27.7539 39.1934C30.6845 38.9812 34.2012 42.7567 28.9262 48.1014C28.9262 52.3772 28.9262 53.0502 28.9262 53.4461H25.4095V48.1014C23.2604 45.5281 19.5484 39.7875 27.7539 39.1934Z" stroke="#84CDEE" strokeWidth="3" />
                                            </svg>
                                        }
                                    </div>
                                </div>
                                <div>
                                    <div className="pb-4">
                                        <div className="row gx-3">
                                            <div className="col-auto">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="20" viewBox="0 0 40.599 29.09">
                                                    <path id="Path_106" data-name="Path 106" d="M-697.185,788.673a2.815,2.815,0,0,1,1.724-2.792,2.751,2.751,0,0,1,3.289.555c1.295,1.22,2.532,2.5,3.791,3.758,1.623,1.62,3.291,3.2,4.847,4.882.774.838,1.221.708,1.963-.039q9.731-9.813,19.531-19.559c1.57-1.568,3.193-1.634,4.572-.232a2.8,2.8,0,0,1,.337,3.684,11.085,11.085,0,0,1-1.236,1.435q-10.685,10.7-21.382,21.394a5.131,5.131,0,0,1-2.007,1.431,2.78,2.78,0,0,1-2.941-.773c-3.905-3.868-7.781-7.765-11.67-11.65A2.626,2.626,0,0,1-697.185,788.673Z" transform="translate(697.191 -774.247)" fill="#84cdee" />
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
                                                    <path id="Path_106" data-name="Path 106" d="M-697.185,788.673a2.815,2.815,0,0,1,1.724-2.792,2.751,2.751,0,0,1,3.289.555c1.295,1.22,2.532,2.5,3.791,3.758,1.623,1.62,3.291,3.2,4.847,4.882.774.838,1.221.708,1.963-.039q9.731-9.813,19.531-19.559c1.57-1.568,3.193-1.634,4.572-.232a2.8,2.8,0,0,1,.337,3.684,11.085,11.085,0,0,1-1.236,1.435q-10.685,10.7-21.382,21.394a5.131,5.131,0,0,1-2.007,1.431,2.78,2.78,0,0,1-2.941-.773c-3.905-3.868-7.781-7.765-11.67-11.65A2.626,2.626,0,0,1-697.185,788.673Z" transform="translate(697.191 -774.247)" fill="#84cdee" />
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
                                                    <path id="Path_106" data-name="Path 106" d="M-697.185,788.673a2.815,2.815,0,0,1,1.724-2.792,2.751,2.751,0,0,1,3.289.555c1.295,1.22,2.532,2.5,3.791,3.758,1.623,1.62,3.291,3.2,4.847,4.882.774.838,1.221.708,1.963-.039q9.731-9.813,19.531-19.559c1.57-1.568,3.193-1.634,4.572-.232a2.8,2.8,0,0,1,.337,3.684,11.085,11.085,0,0,1-1.236,1.435q-10.685,10.7-21.382,21.394a5.131,5.131,0,0,1-2.007,1.431,2.78,2.78,0,0,1-2.941-.773c-3.905-3.868-7.781-7.765-11.67-11.65A2.626,2.626,0,0,1-697.185,788.673Z" transform="translate(697.191 -774.247)" fill="#84cdee" />
                                                </svg>


                                            </div>
                                            <div className="col text-start my-auto">
                                                <span className='fw-500'>Anspruch auf Einzelbettzimmer</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pb-4">
                                        <div className="row gx-3">
                                            <div className="col-auto">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="20" viewBox="0 0 40.599 29.09">
                                                    <path id="Path_106" data-name="Path 106" d="M-697.185,788.673a2.815,2.815,0,0,1,1.724-2.792,2.751,2.751,0,0,1,3.289.555c1.295,1.22,2.532,2.5,3.791,3.758,1.623,1.62,3.291,3.2,4.847,4.882.774.838,1.221.708,1.963-.039q9.731-9.813,19.531-19.559c1.57-1.568,3.193-1.634,4.572-.232a2.8,2.8,0,0,1,.337,3.684,11.085,11.085,0,0,1-1.236,1.435q-10.685,10.7-21.382,21.394a5.131,5.131,0,0,1-2.007,1.431,2.78,2.78,0,0,1-2.941-.773c-3.905-3.868-7.781-7.765-11.67-11.65A2.626,2.626,0,0,1-697.185,788.673Z" transform="translate(697.191 -774.247)" fill="#84cdee" />
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