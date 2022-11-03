import React from 'react'
import Logo from '../../assets/images/versicherungen/swicalogo.svg'
import { NavLink } from 'react-router-dom'
function Swica() {
    return (
        <>
            <div className='pt-5 bodyCounterPadding'>
                <div className='swicaBackground py-5'>
                    <div className="swicaLogoDiv">
                        <img src={Logo} alt="" />
                    </div>
                    <div className='container-xl px-4 px-xl-0 py-5 h-100'>
                        <div className="d-flex h-100 flex-column justify-content-between text-start">
                            <div className='col-auto'>
                                <span className='fw-800 fs-3 text-light'>Gesundheit fördern und begleiten</span>
                            </div>
                            <div className='col-auto'>
                                <div className='pb-3'>

                                    <div className="row g-1">
                                        <div className="col-auto">
                                            <svg width="21" height="2" viewBox="0 0 21 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect width="21" height="2" rx="1" fill="#179F96" />
                                            </svg>
                                        </div>
                                        <div className="col">
                                            <span className='fw-600 text-light'>Die Nr. 1 im Krankenkassenvergleich</span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <button className='swicaBtn'>
                                        Prämienrechner
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='wrapDiv container-xl px-4 px-lg-5 bodyCounterPadding'>
                <div className=''>
                    <div className='text-center pb-5'>
                        <div className='pb-2'>
                            <span style={{ color: "#179F96" }} className='fs-3 fw-800'>SERVICES</span>
                        </div>
                        <div>
                            <span className='fw-800 normalTextToWhite'>
                                Prämien berechnen, Rechnungen einreichen oder persönliche Daten anpassen.
                            </span>
                        </div>
                    </div>
                    <div>
                        <div className="row g-4 justify-content-center">
                            <div className="col-12 col-sm-6 col-md-3">
                                <NavLink to='/versicherungen/krankenkasse' className='text-decoration-none text-dark'>
                                    <div className='servicesBorderDivSwica p-4 p-lg-5'>
                                        <div className="pb-4">
                                            <svg width="35" height="47" viewBox="0 0 35 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M31.8742 0H3.12581C1.39948 0 0 1.38905 0 3.10251V43.8975C0 45.6109 1.39948 47 3.12581 47H31.8742C33.6005 47 35 45.6109 35 43.8975V3.10251C35 1.38905 33.6005 0 31.8742 0ZM4.96218 35.108V30.6945C4.96218 30.3419 5.2501 30.0561 5.60535 30.0561H10.052C10.4072 30.0561 10.6952 30.3419 10.6952 30.6945V35.108C10.6952 35.4606 10.4072 35.7464 10.052 35.7464H5.60535C5.2501 35.7464 4.96218 35.4605 4.96218 35.108ZM4.96218 26.2188V21.8053C4.96218 21.4527 5.2501 21.167 5.60535 21.167H10.052C10.4072 21.167 10.6952 21.4527 10.6952 21.8053V26.2188C10.6952 26.5714 10.4072 26.8572 10.052 26.8572H5.60535C5.2501 26.8572 4.96218 26.5713 4.96218 26.2188ZM25.6211 43.0152H9.37887C8.24178 43.0152 7.32004 42.1003 7.32004 40.9717C7.32004 39.8431 8.24178 38.9283 9.37887 38.9283H25.6211C26.7582 38.9283 27.68 39.8431 27.68 40.9717C27.68 42.1003 26.7582 43.0152 25.6211 43.0152ZM15.2767 30.056H19.7233C20.0786 30.056 20.3665 30.3418 20.3665 30.6944V35.1079C20.3665 35.4605 20.0786 35.7463 19.7233 35.7463H15.2767C14.9214 35.7463 14.6335 35.4605 14.6335 35.1079V30.6944C14.6335 30.3419 14.9214 30.056 15.2767 30.056ZM14.6335 26.2188V21.8053C14.6335 21.4527 14.9214 21.167 15.2767 21.167H19.7233C20.0786 21.167 20.3665 21.4527 20.3665 21.8053V26.2188C20.3665 26.5714 20.0786 26.8572 19.7233 26.8572H15.2767C14.9214 26.8572 14.6335 26.5713 14.6335 26.2188ZM29.3946 35.7464H24.948C24.5927 35.7464 24.3048 35.4606 24.3048 35.108V30.6945C24.3048 30.3419 24.5927 30.0561 24.948 30.0561H29.3946C29.7499 30.0561 30.0378 30.3419 30.0378 30.6945V35.108C30.0378 35.4606 29.7499 35.7464 29.3946 35.7464ZM29.3946 26.8572H24.948C24.5927 26.8572 24.3048 26.5714 24.3048 26.2188V21.8053C24.3048 21.4527 24.5927 21.167 24.948 21.167H29.3946C29.7499 21.167 30.0378 21.4527 30.0378 21.8053V26.2188C30.0378 26.5714 29.7499 26.8572 29.3946 26.8572ZM30.2647 15.289C30.2647 16.4945 29.2801 17.4717 28.0656 17.4717H6.93453C5.71993 17.4717 4.73529 16.4944 4.73529 15.289V6.37187C4.73529 5.16642 5.71993 4.18913 6.93453 4.18913H28.0656C29.2801 4.18913 30.2647 5.16642 30.2647 6.37187V15.289Z" fill="#8F85BA" />
                                            </svg>
                                        </div>
                                        <div>
                                            <span className='fw-800 '>Prämien berechnen</span>
                                        </div>
                                    </div>
                                </NavLink>

                            </div>
                            <div className="col-12 col-sm-6 col-md-3">
                                {/* <a rel="noreferrer" className='text-decoration-none text-dark' target='_blank' href='https://www.sympany.ch/de/privatkunden/wissenswertes/einmaleins/bezahlen-einsenden.html'> */}
                                <div className='servicesBorderDivSwica p-4 p-lg-5'>
                                    <div className="pb-4">
                                        <svg width="35" height="48" viewBox="0 0 35 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.83333 0C2.61589 0 0 2.69063 0 6V42C0 45.3094 2.61589 48 5.83333 48H29.1667C32.3841 48 35 45.3094 35 42V15H23.3333C21.7201 15 20.4167 13.6594 20.4167 12V0H5.83333ZM23.3333 0V12H35L23.3333 0ZM10.2083 24H24.7917C25.5938 24 26.25 24.675 26.25 25.5C26.25 26.325 25.5938 27 24.7917 27H10.2083C9.40625 27 8.75 26.325 8.75 25.5C8.75 24.675 9.40625 24 10.2083 24ZM10.2083 30H24.7917C25.5938 30 26.25 30.675 26.25 31.5C26.25 32.325 25.5938 33 24.7917 33H10.2083C9.40625 33 8.75 32.325 8.75 31.5C8.75 30.675 9.40625 30 10.2083 30ZM10.2083 36H24.7917C25.5938 36 26.25 36.675 26.25 37.5C26.25 38.325 25.5938 39 24.7917 39H10.2083C9.40625 39 8.75 38.325 8.75 37.5C8.75 36.675 9.40625 36 10.2083 36Z" fill="#8F85BA" />
                                        </svg>

                                    </div>
                                    <div>
                                        <span className='fw-800 '>Rechnungen einreichen</span>
                                    </div>
                                </div>
                                {/* </a> */}
                            </div>
                            <div className="col-12 col-sm-6 col-md-3">
                                {/* <a rel="noreferrer" className='text-decoration-none text-dark' target='_blank' href='https://www.sympany.ch/de/privatkunden/wissenswertes/einmaleins/bezahlen-einsenden.html'> */}

                                <div className='servicesBorderDivSwica p-4 p-lg-5'>
                                    <div className="pb-4">
                                        <svg width="35" height="48" viewBox="0 0 33 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16 37V52" stroke="#8F85BA" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M16.5 31C25.0604 31 32 24.2843 32 16C32 7.71573 25.0604 1 16.5 1C7.93959 1 1 7.71573 1 16C1 24.2843 7.93959 31 16.5 31Z" fill="#8F85BA" stroke="#8F85BA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>


                                    </div>
                                    <div>
                                        <span className='fw-800 '>Adresse ändern</span>
                                    </div>
                                </div>
                                {/* </a> */}
                            </div>
                            <div className="col-12 col-sm-6 col-md-3">
                                {/* <a rel="noreferrer" className='text-decoration-none text-dark' target='_blank' href='https://www.sympany.ch/de/privatkunden/wissenswertes/einmaleins/bezahlen-einsenden.html'> */}

                                <div className='servicesBorderDivSwica p-4 p-lg-5'>
                                    <div className="pb-4">
                                        <svg height="48" viewBox="0 0 69 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M32.3742 31.5313L23.5626 53.8809L30.6763 53.3164C41.0987 38.4113 40.0814 40.16 46.0806 31.5719L64.1362 31.5719C66.7614 31.5719 68.0558 29.2442 68.0268 26.9412C68.0573 24.6382 66.7614 22.3119 64.1362 22.3119L46.0835 22.3119C40.0843 13.7238 41.1001 15.4711 30.6792 0.565961L23.564 0L32.3756 22.3497C32.3756 22.3497 10.1101 22.2887 9.76476 22.3409L4.29235 14.3435H0.00120544L3.52322 24.5656V29.3124L0.00120544 39.5375H4.2909L9.76331 31.5371C10.1116 31.5922 32.3742 31.5313 32.3742 31.5313Z" fill="#8F85BA" />
                                        </svg>
                                    </div>
                                    <div>
                                        <span className='fw-800 '>Reiseversicherung</span>
                                    </div>
                                </div>
                                {/* </a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='wrapDiv container-xl px-4 px-lg-5 bodyCounterPadding text-start'>
                <div className="pb-4">
                    <span className='finanuSubTitle fw-800'>Swica Grundversicherung
                    </span>
                </div>
                <div className='pb-3'>
                    <span className='fw-600 normalTextToWhite'>
                        In der Grundversicherung bietet SWICA die klassischen Modelle Telemedizin, Hausarzt, HMO, Apothekermodell und freie Arztwahl an.
                    </span>
                </div>
                <div className='fw-600 normalTextToWhite'>
                    <div>
                        <span>
                            {'>'} STANDARD (Freie Arztwahl)
                        </span>
                    </div>
                    <div>
                        <span>
                            {'>'} FAVORIT CASA (Hausarztmodell)
                        </span>
                    </div>
                    <div>
                        <span>
                            {'>'} FAVORIT SANTE (HMO-Modell)
                        </span>
                    </div>
                    <div>
                        <span>
                            {'>'} FAVORIT MEDICA (Spital-/Ärztelistenmodell)
                        </span>
                    </div>
                    <div>
                        <span>
                            {'>'} FAVORIT TELMED (Telemedizin)
                        </span>
                    </div>
                    <div>
                        <span>
                            {'>'} FAVORIT MEDPHARM (Apothekenmodell)
                        </span>
                    </div>
                </div>
            </div>
            <div className='wrapDiv container-xl px-4 px-lg-5 bodyCounterPadding text-start'>
                <div className="pb-4">
                    <span className='finanuSubTitle fw-800'>Swica Zusatzversicherung
                    </span>
                </div>
                <div className='pb-3'>
                    <span className='fw-600 normalTextToWhite'>
                        Als Ergänzung zur obligatorischen Krankenpflegeversicherung verfügt die SWICA Krankenkasse über eine grosse Auswahl an attraktiven Zusatzversicherungen. Zudem können bei SWICA zusätzlich diverse Spezialversicherungen wie Reiseversicherung oder private Unfallversicherungen erworben werden.
                    </span>
                </div>
                <div className='fw-600 normalTextToWhite'>
                    <div>
                        <span>
                            {'>'} SWICA COMPLETA TOP
                        </span>
                    </div>
                    <div>
                        <span>
                            {'>'} SWICA COMPLETA PRAEVENTA
                        </span>
                    </div>
                    <div>
                        <span>
                            {'>'} SWICA OPTIMA
                        </span>
                    </div>
                    <div>
                        <span>
                            {'>'} SUPPLEMENTA
                        </span>
                    </div>
                    <div>
                        <span>
                            {'>'} SWICA Zahnversicherung DENTA
                        </span>
                    </div>
                    <div>
                        <span>
                            {'>'} Unfallversicherung
                        </span>
                    </div>
                    <div>
                        <span>
                            {'>'} SWICA Reiseversicherung VACANZA
                        </span>
                    </div>
                </div>
            </div>
            <div className='wrapDiv container-xl px-4 px-lg-5 bodyCounterPadding text-center'>
                <div className='col-12 col-sm-11 col-md-10 col-lg-9 col-xl-8 mx-auto'>
                    <div className="pb-4">
                        <span className='normalTextToWhite fw-800 firstBlueTitle'>SWICA benefits for corporate customers
                        </span>
                    </div>
                    <div className='pb-3'>
                        <span className='fw-600 normalTextToWhite'>
                            Whether Comparis, K-Tipp, bonus.ch or AmPuls - SWICA receives the best marks among the major Swiss health insurance companies in terms of customer satisfaction.
                            Put your trust in SWICA and benefit from the exclusive advantages.
                        </span>
                    </div>
                </div>
            </div>
            <div className='wrapDiv container-xl px-4 px-lg-5 bodyCounterPadding text-start'>
                <div className="benefitsDiv">
                    <div className='benefitsRow px-0 px-md-3 py-3'>
                        <div className="row g-3">
                            <div className="col-auto">
                                <svg width="27" height="20" viewBox="0 0 27 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M25.8346 1.25L8.8763 18.2083L1.16797 10.5" stroke="#5E5E5E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <div className="col">
                                <div>
                                    <span className="fw-600">Persönlicher Kundenservice rund um die Uhr</span>
                                </div>
                            </div>
                            <div className="col-auto">
                                <svg width="23" height="13" viewBox="0 0 23 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.75 1.625L11.5 11.375L21.25 1.625" stroke="#4E9D95" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Swica