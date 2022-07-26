import React from 'react'
import {ReactComponent as Purple} from '../../assets/images/versicherungen/symanyLogo.svg'
import Logo from '../../assets/images/versicherungen/logoSympany.png'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { FreeMode, Autoplay } from "swiper";
import Photo1 from '../../assets/images/versicherungen/sympanyPhoto1.png'
import Accordion from 'react-bootstrap/Accordion';
import { NavLink } from 'react-router-dom'
function Sympany() {
    return (
        <>
            <div className='wrapDiv container-xl px-4 px-lg-5 bodyCounterPadding'>

                <img className='img-fluid' src={Logo} style={{ maxWidth: '300px' }} alt="" />

            </div>
            <div className='wrapDiv container-xl px-4 px-lg-5 bodyCounterPadding'>

                <Purple className='img-fluid w-100'/>

            </div>
            
            <div className='wrapDiv container-xl px-4 px-lg-5 bodyCounterPadding'>
                <div className=''>
                    <div className='text-center pb-4'>
                        <div className="pb-3">
                            <a href="https://www.sympany.ch/de.html" target="_blank" className='text-decoration-none' rel="noopener noreferrer">
                                <span className='finanuSubTitle fs-5 fw-800'>Quelle: www.sympany.ch/de.html</span>
                            </a>
                        </div>
                        <div className='pb-3'>
                            <span className='finanuSubTitle fs-3 fw-800'>Wobei können wir Ihnen helfen?</span>
                        </div>
                        <div>
                            <span className='fw-500 normalTextToWhite'>Wechsel und Angebotsanfragen können Sie gleich über unsere Webseite anfragen. Bei den anderen Links, verbinden wir Sie direkt mit den entsprechenden Sympany Unterseiten um Ihnen die Suche zu erleichtern.</span>
                        </div>
                    </div>
                    <div>
                        <div className="row g-3 justify-content-center ">
                            <Swiper
                                slidesPerView={1.3}
                                spaceBetween={20}
                                freeMode={false}
                                className="mySwiper py-4 px-2"
                                modules={[Autoplay, FreeMode]}
                                breakpoints={{
                                    578: {
                                        slidesPerView: 2.1,
                                        spaceBetween: 20,

                                    },
                                    768: {
                                        slidesPerView: 3.1,
                                        spaceBetween: 20,
                                    },
                                    1024: {
                                        slidesPerView: 3.5,
                                        spaceBetween: 25,
                                    },
                                    1400: {
                                        slidesPerView: 4.3,
                                        spaceBetween: 25,
                                    },
                                }}
                            >
                                <SwiperSlide>
                                    <NavLink to='/versicherungen/krankenkasse' className='text-decoration-none text-dark'>
                                        <div className='servicesBorderDiv p-4 text-start d-flex flex-column justify-content-between'>
                                            <div className="pb-4">
                                                <div className="svgPurpleCircle">
                                                    <svg width="30" height="40" viewBox="0 0 35 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M31.8742 0H3.12581C1.39948 0 0 1.38905 0 3.10251V43.8975C0 45.6109 1.39948 47 3.12581 47H31.8742C33.6005 47 35 45.6109 35 43.8975V3.10251C35 1.38905 33.6005 0 31.8742 0ZM4.96218 35.108V30.6945C4.96218 30.3419 5.2501 30.0561 5.60535 30.0561H10.052C10.4072 30.0561 10.6952 30.3419 10.6952 30.6945V35.108C10.6952 35.4606 10.4072 35.7464 10.052 35.7464H5.60535C5.2501 35.7464 4.96218 35.4605 4.96218 35.108ZM4.96218 26.2188V21.8053C4.96218 21.4527 5.2501 21.167 5.60535 21.167H10.052C10.4072 21.167 10.6952 21.4527 10.6952 21.8053V26.2188C10.6952 26.5714 10.4072 26.8572 10.052 26.8572H5.60535C5.2501 26.8572 4.96218 26.5713 4.96218 26.2188ZM25.6211 43.0152H9.37887C8.24178 43.0152 7.32004 42.1003 7.32004 40.9717C7.32004 39.8431 8.24178 38.9283 9.37887 38.9283H25.6211C26.7582 38.9283 27.68 39.8431 27.68 40.9717C27.68 42.1003 26.7582 43.0152 25.6211 43.0152ZM15.2767 30.056H19.7233C20.0786 30.056 20.3665 30.3418 20.3665 30.6944V35.1079C20.3665 35.4605 20.0786 35.7463 19.7233 35.7463H15.2767C14.9214 35.7463 14.6335 35.4605 14.6335 35.1079V30.6944C14.6335 30.3419 14.9214 30.056 15.2767 30.056ZM14.6335 26.2188V21.8053C14.6335 21.4527 14.9214 21.167 15.2767 21.167H19.7233C20.0786 21.167 20.3665 21.4527 20.3665 21.8053V26.2188C20.3665 26.5714 20.0786 26.8572 19.7233 26.8572H15.2767C14.9214 26.8572 14.6335 26.5713 14.6335 26.2188ZM29.3946 35.7464H24.948C24.5927 35.7464 24.3048 35.4606 24.3048 35.108V30.6945C24.3048 30.3419 24.5927 30.0561 24.948 30.0561H29.3946C29.7499 30.0561 30.0378 30.3419 30.0378 30.6945V35.108C30.0378 35.4606 29.7499 35.7464 29.3946 35.7464ZM29.3946 26.8572H24.948C24.5927 26.8572 24.3048 26.5714 24.3048 26.2188V21.8053C24.3048 21.4527 24.5927 21.167 24.948 21.167H29.3946C29.7499 21.167 30.0378 21.4527 30.0378 21.8053V26.2188C30.0378 26.5714 29.7499 26.8572 29.3946 26.8572ZM30.2647 15.289C30.2647 16.4945 29.2801 17.4717 28.0656 17.4717H6.93453C5.71993 17.4717 4.73529 16.4944 4.73529 15.289V6.37187C4.73529 5.16642 5.71993 4.18913 6.93453 4.18913H28.0656C29.2801 4.18913 30.2647 5.16642 30.2647 6.37187V15.289Z" fill="#8F85BA" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className='pb-2'>
                                                <span className='fw-700 normalTextToWhite'>Neuer Look. Klarer Fokus</span>
                                            </div>
                                            <div className="pb-5">
                                                <span className='fw-500 normalTextToWhite'>Infos zu unserem neuen Markenauftritt</span>
                                            </div>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="55" viewBox="0 0 21 21">
                                                    <g fill="none" fillRule="evenodd" stroke="#891250" strokeLinecap="round" strokeLinejoin="round" transform="translate(2 2)"><circle cx="8.5" cy="8.5" r="8" /><path d="m7.5 11.5 3-3-3.068-3" />
                                                    </g>
                                                </svg>
                                            </div>
                                        </div>
                                    </NavLink>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <NavLink to='/versicherungen/krankenkasse' className='text-decoration-none text-dark'>
                                        <div className='servicesBorderDiv p-4 text-start d-flex flex-column justify-content-between'>
                                            <div className="pb-4">
                                                <div className="svgPurpleCircle">
                                                    <svg width="30" height="40" viewBox="0 0 35 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M31.8742 0H3.12581C1.39948 0 0 1.38905 0 3.10251V43.8975C0 45.6109 1.39948 47 3.12581 47H31.8742C33.6005 47 35 45.6109 35 43.8975V3.10251C35 1.38905 33.6005 0 31.8742 0ZM4.96218 35.108V30.6945C4.96218 30.3419 5.2501 30.0561 5.60535 30.0561H10.052C10.4072 30.0561 10.6952 30.3419 10.6952 30.6945V35.108C10.6952 35.4606 10.4072 35.7464 10.052 35.7464H5.60535C5.2501 35.7464 4.96218 35.4605 4.96218 35.108ZM4.96218 26.2188V21.8053C4.96218 21.4527 5.2501 21.167 5.60535 21.167H10.052C10.4072 21.167 10.6952 21.4527 10.6952 21.8053V26.2188C10.6952 26.5714 10.4072 26.8572 10.052 26.8572H5.60535C5.2501 26.8572 4.96218 26.5713 4.96218 26.2188ZM25.6211 43.0152H9.37887C8.24178 43.0152 7.32004 42.1003 7.32004 40.9717C7.32004 39.8431 8.24178 38.9283 9.37887 38.9283H25.6211C26.7582 38.9283 27.68 39.8431 27.68 40.9717C27.68 42.1003 26.7582 43.0152 25.6211 43.0152ZM15.2767 30.056H19.7233C20.0786 30.056 20.3665 30.3418 20.3665 30.6944V35.1079C20.3665 35.4605 20.0786 35.7463 19.7233 35.7463H15.2767C14.9214 35.7463 14.6335 35.4605 14.6335 35.1079V30.6944C14.6335 30.3419 14.9214 30.056 15.2767 30.056ZM14.6335 26.2188V21.8053C14.6335 21.4527 14.9214 21.167 15.2767 21.167H19.7233C20.0786 21.167 20.3665 21.4527 20.3665 21.8053V26.2188C20.3665 26.5714 20.0786 26.8572 19.7233 26.8572H15.2767C14.9214 26.8572 14.6335 26.5713 14.6335 26.2188ZM29.3946 35.7464H24.948C24.5927 35.7464 24.3048 35.4606 24.3048 35.108V30.6945C24.3048 30.3419 24.5927 30.0561 24.948 30.0561H29.3946C29.7499 30.0561 30.0378 30.3419 30.0378 30.6945V35.108C30.0378 35.4606 29.7499 35.7464 29.3946 35.7464ZM29.3946 26.8572H24.948C24.5927 26.8572 24.3048 26.5714 24.3048 26.2188V21.8053C24.3048 21.4527 24.5927 21.167 24.948 21.167H29.3946C29.7499 21.167 30.0378 21.4527 30.0378 21.8053V26.2188C30.0378 26.5714 29.7499 26.8572 29.3946 26.8572ZM30.2647 15.289C30.2647 16.4945 29.2801 17.4717 28.0656 17.4717H6.93453C5.71993 17.4717 4.73529 16.4944 4.73529 15.289V6.37187C4.73529 5.16642 5.71993 4.18913 6.93453 4.18913H28.0656C29.2801 4.18913 30.2647 5.16642 30.2647 6.37187V15.289Z" fill="#8F85BA" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className='pb-2'>
                                                <span className='fw-700 normalTextToWhite'>Daten ändern</span>
                                            </div>
                                            <div className="pb-5">
                                                <span className='fw-500 normalTextToWhite'>Adresse, Telefonnummer oder E-Mail ändern</span>
                                            </div>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="55" viewBox="0 0 21 21">
                                                    <g fill="none" fillRule="evenodd" stroke="#891250" strokeLinecap="round" strokeLinejoin="round" transform="translate(2 2)"><circle cx="8.5" cy="8.5" r="8" /><path d="m7.5 11.5 3-3-3.068-3" />
                                                    </g>
                                                </svg>
                                            </div>
                                        </div>
                                    </NavLink>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <NavLink to='/versicherungen/krankenkasse' className='text-decoration-none text-dark'>
                                        <div className='servicesBorderDiv p-4 text-start d-flex flex-column justify-content-between'>
                                            <div className="pb-4">
                                                <div className="svgPurpleCircle">
                                                    <svg width="30" height="40" viewBox="0 0 35 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M31.8742 0H3.12581C1.39948 0 0 1.38905 0 3.10251V43.8975C0 45.6109 1.39948 47 3.12581 47H31.8742C33.6005 47 35 45.6109 35 43.8975V3.10251C35 1.38905 33.6005 0 31.8742 0ZM4.96218 35.108V30.6945C4.96218 30.3419 5.2501 30.0561 5.60535 30.0561H10.052C10.4072 30.0561 10.6952 30.3419 10.6952 30.6945V35.108C10.6952 35.4606 10.4072 35.7464 10.052 35.7464H5.60535C5.2501 35.7464 4.96218 35.4605 4.96218 35.108ZM4.96218 26.2188V21.8053C4.96218 21.4527 5.2501 21.167 5.60535 21.167H10.052C10.4072 21.167 10.6952 21.4527 10.6952 21.8053V26.2188C10.6952 26.5714 10.4072 26.8572 10.052 26.8572H5.60535C5.2501 26.8572 4.96218 26.5713 4.96218 26.2188ZM25.6211 43.0152H9.37887C8.24178 43.0152 7.32004 42.1003 7.32004 40.9717C7.32004 39.8431 8.24178 38.9283 9.37887 38.9283H25.6211C26.7582 38.9283 27.68 39.8431 27.68 40.9717C27.68 42.1003 26.7582 43.0152 25.6211 43.0152ZM15.2767 30.056H19.7233C20.0786 30.056 20.3665 30.3418 20.3665 30.6944V35.1079C20.3665 35.4605 20.0786 35.7463 19.7233 35.7463H15.2767C14.9214 35.7463 14.6335 35.4605 14.6335 35.1079V30.6944C14.6335 30.3419 14.9214 30.056 15.2767 30.056ZM14.6335 26.2188V21.8053C14.6335 21.4527 14.9214 21.167 15.2767 21.167H19.7233C20.0786 21.167 20.3665 21.4527 20.3665 21.8053V26.2188C20.3665 26.5714 20.0786 26.8572 19.7233 26.8572H15.2767C14.9214 26.8572 14.6335 26.5713 14.6335 26.2188ZM29.3946 35.7464H24.948C24.5927 35.7464 24.3048 35.4606 24.3048 35.108V30.6945C24.3048 30.3419 24.5927 30.0561 24.948 30.0561H29.3946C29.7499 30.0561 30.0378 30.3419 30.0378 30.6945V35.108C30.0378 35.4606 29.7499 35.7464 29.3946 35.7464ZM29.3946 26.8572H24.948C24.5927 26.8572 24.3048 26.5714 24.3048 26.2188V21.8053C24.3048 21.4527 24.5927 21.167 24.948 21.167H29.3946C29.7499 21.167 30.0378 21.4527 30.0378 21.8053V26.2188C30.0378 26.5714 29.7499 26.8572 29.3946 26.8572ZM30.2647 15.289C30.2647 16.4945 29.2801 17.4717 28.0656 17.4717H6.93453C5.71993 17.4717 4.73529 16.4944 4.73529 15.289V6.37187C4.73529 5.16642 5.71993 4.18913 6.93453 4.18913H28.0656C29.2801 4.18913 30.2647 5.16642 30.2647 6.37187V15.289Z" fill="#8F85BA" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className='pb-2'>
                                                <span className='fw-700 normalTextToWhite'>Rechnungen</span>
                                            </div>
                                            <div className="pb-5">
                                                <span className='fw-500 normalTextToWhite'>Rechnungen bezahlen und einsenden – so geht's</span>
                                            </div>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="55" viewBox="0 0 21 21">
                                                    <g fill="none" fillRule="evenodd" stroke="#891250" strokeLinecap="round" strokeLinejoin="round" transform="translate(2 2)"><circle cx="8.5" cy="8.5" r="8" /><path d="m7.5 11.5 3-3-3.068-3" />
                                                    </g>
                                                </svg>
                                            </div>
                                        </div>
                                    </NavLink>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <NavLink to='/versicherungen/krankenkasse' className='text-decoration-none text-dark'>
                                        <div className='servicesBorderDiv p-4 text-start d-flex flex-column justify-content-between'>
                                            <div className="pb-4">
                                                <div className="svgPurpleCircle">
                                                    <svg width="30" height="40" viewBox="0 0 35 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M31.8742 0H3.12581C1.39948 0 0 1.38905 0 3.10251V43.8975C0 45.6109 1.39948 47 3.12581 47H31.8742C33.6005 47 35 45.6109 35 43.8975V3.10251C35 1.38905 33.6005 0 31.8742 0ZM4.96218 35.108V30.6945C4.96218 30.3419 5.2501 30.0561 5.60535 30.0561H10.052C10.4072 30.0561 10.6952 30.3419 10.6952 30.6945V35.108C10.6952 35.4606 10.4072 35.7464 10.052 35.7464H5.60535C5.2501 35.7464 4.96218 35.4605 4.96218 35.108ZM4.96218 26.2188V21.8053C4.96218 21.4527 5.2501 21.167 5.60535 21.167H10.052C10.4072 21.167 10.6952 21.4527 10.6952 21.8053V26.2188C10.6952 26.5714 10.4072 26.8572 10.052 26.8572H5.60535C5.2501 26.8572 4.96218 26.5713 4.96218 26.2188ZM25.6211 43.0152H9.37887C8.24178 43.0152 7.32004 42.1003 7.32004 40.9717C7.32004 39.8431 8.24178 38.9283 9.37887 38.9283H25.6211C26.7582 38.9283 27.68 39.8431 27.68 40.9717C27.68 42.1003 26.7582 43.0152 25.6211 43.0152ZM15.2767 30.056H19.7233C20.0786 30.056 20.3665 30.3418 20.3665 30.6944V35.1079C20.3665 35.4605 20.0786 35.7463 19.7233 35.7463H15.2767C14.9214 35.7463 14.6335 35.4605 14.6335 35.1079V30.6944C14.6335 30.3419 14.9214 30.056 15.2767 30.056ZM14.6335 26.2188V21.8053C14.6335 21.4527 14.9214 21.167 15.2767 21.167H19.7233C20.0786 21.167 20.3665 21.4527 20.3665 21.8053V26.2188C20.3665 26.5714 20.0786 26.8572 19.7233 26.8572H15.2767C14.9214 26.8572 14.6335 26.5713 14.6335 26.2188ZM29.3946 35.7464H24.948C24.5927 35.7464 24.3048 35.4606 24.3048 35.108V30.6945C24.3048 30.3419 24.5927 30.0561 24.948 30.0561H29.3946C29.7499 30.0561 30.0378 30.3419 30.0378 30.6945V35.108C30.0378 35.4606 29.7499 35.7464 29.3946 35.7464ZM29.3946 26.8572H24.948C24.5927 26.8572 24.3048 26.5714 24.3048 26.2188V21.8053C24.3048 21.4527 24.5927 21.167 24.948 21.167H29.3946C29.7499 21.167 30.0378 21.4527 30.0378 21.8053V26.2188C30.0378 26.5714 29.7499 26.8572 29.3946 26.8572ZM30.2647 15.289C30.2647 16.4945 29.2801 17.4717 28.0656 17.4717H6.93453C5.71993 17.4717 4.73529 16.4944 4.73529 15.289V6.37187C4.73529 5.16642 5.71993 4.18913 6.93453 4.18913H28.0656C29.2801 4.18913 30.2647 5.16642 30.2647 6.37187V15.289Z" fill="#8F85BA" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className='pb-2'>
                                                <span className='fw-700 normalTextToWhite'>Unfall oder Schaden?</span>
                                            </div>
                                            <div className="pb-5">
                                                <span className='fw-500 normalTextToWhite'>Ganz einfach online melden</span>
                                            </div>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="55" viewBox="0 0 21 21">
                                                    <g fill="none" fillRule="evenodd" stroke="#891250" strokeLinecap="round" strokeLinejoin="round" transform="translate(2 2)"><circle cx="8.5" cy="8.5" r="8" /><path d="m7.5 11.5 3-3-3.068-3" />
                                                    </g>
                                                </svg>
                                            </div>
                                        </div>
                                    </NavLink>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <NavLink to='/versicherungen/krankenkasse' className='text-decoration-none text-dark'>
                                        <div className='servicesBorderDiv p-4 text-start d-flex flex-column justify-content-between'>
                                            <div className="pb-4">
                                                <div className="svgPurpleCircle">
                                                    <svg width="30" height="40" viewBox="0 0 35 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M31.8742 0H3.12581C1.39948 0 0 1.38905 0 3.10251V43.8975C0 45.6109 1.39948 47 3.12581 47H31.8742C33.6005 47 35 45.6109 35 43.8975V3.10251C35 1.38905 33.6005 0 31.8742 0ZM4.96218 35.108V30.6945C4.96218 30.3419 5.2501 30.0561 5.60535 30.0561H10.052C10.4072 30.0561 10.6952 30.3419 10.6952 30.6945V35.108C10.6952 35.4606 10.4072 35.7464 10.052 35.7464H5.60535C5.2501 35.7464 4.96218 35.4605 4.96218 35.108ZM4.96218 26.2188V21.8053C4.96218 21.4527 5.2501 21.167 5.60535 21.167H10.052C10.4072 21.167 10.6952 21.4527 10.6952 21.8053V26.2188C10.6952 26.5714 10.4072 26.8572 10.052 26.8572H5.60535C5.2501 26.8572 4.96218 26.5713 4.96218 26.2188ZM25.6211 43.0152H9.37887C8.24178 43.0152 7.32004 42.1003 7.32004 40.9717C7.32004 39.8431 8.24178 38.9283 9.37887 38.9283H25.6211C26.7582 38.9283 27.68 39.8431 27.68 40.9717C27.68 42.1003 26.7582 43.0152 25.6211 43.0152ZM15.2767 30.056H19.7233C20.0786 30.056 20.3665 30.3418 20.3665 30.6944V35.1079C20.3665 35.4605 20.0786 35.7463 19.7233 35.7463H15.2767C14.9214 35.7463 14.6335 35.4605 14.6335 35.1079V30.6944C14.6335 30.3419 14.9214 30.056 15.2767 30.056ZM14.6335 26.2188V21.8053C14.6335 21.4527 14.9214 21.167 15.2767 21.167H19.7233C20.0786 21.167 20.3665 21.4527 20.3665 21.8053V26.2188C20.3665 26.5714 20.0786 26.8572 19.7233 26.8572H15.2767C14.9214 26.8572 14.6335 26.5713 14.6335 26.2188ZM29.3946 35.7464H24.948C24.5927 35.7464 24.3048 35.4606 24.3048 35.108V30.6945C24.3048 30.3419 24.5927 30.0561 24.948 30.0561H29.3946C29.7499 30.0561 30.0378 30.3419 30.0378 30.6945V35.108C30.0378 35.4606 29.7499 35.7464 29.3946 35.7464ZM29.3946 26.8572H24.948C24.5927 26.8572 24.3048 26.5714 24.3048 26.2188V21.8053C24.3048 21.4527 24.5927 21.167 24.948 21.167H29.3946C29.7499 21.167 30.0378 21.4527 30.0378 21.8053V26.2188C30.0378 26.5714 29.7499 26.8572 29.3946 26.8572ZM30.2647 15.289C30.2647 16.4945 29.2801 17.4717 28.0656 17.4717H6.93453C5.71993 17.4717 4.73529 16.4944 4.73529 15.289V6.37187C4.73529 5.16642 5.71993 4.18913 6.93453 4.18913H28.0656C29.2801 4.18913 30.2647 5.16642 30.2647 6.37187V15.289Z" fill="#8F85BA" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className='pb-2'>
                                                <span className='fw-700 normalTextToWhite'>Spartipps & Rabatte</span>
                                            </div>
                                            <div className="pb-5">
                                                <span className='fw-500 normalTextToWhite'>Sparmöglichkeiten bei Prämien und Medikamenten</span>
                                            </div>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="55" viewBox="0 0 21 21">
                                                    <g fill="none" fillRule="evenodd" stroke="#891250" strokeLinecap="round" strokeLinejoin="round" transform="translate(2 2)"><circle cx="8.5" cy="8.5" r="8" /><path d="m7.5 11.5 3-3-3.068-3" />
                                                    </g>
                                                </svg>
                                            </div>
                                        </div>
                                    </NavLink>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <NavLink to='/versicherungen/krankenkasse' className='text-decoration-none text-dark'>
                                        <div className='servicesBorderDiv p-4 text-start d-flex flex-column justify-content-between'>
                                            <div className="pb-4">
                                                <div className="svgPurpleCircle">
                                                    <svg width="30" height="40" viewBox="0 0 35 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M31.8742 0H3.12581C1.39948 0 0 1.38905 0 3.10251V43.8975C0 45.6109 1.39948 47 3.12581 47H31.8742C33.6005 47 35 45.6109 35 43.8975V3.10251C35 1.38905 33.6005 0 31.8742 0ZM4.96218 35.108V30.6945C4.96218 30.3419 5.2501 30.0561 5.60535 30.0561H10.052C10.4072 30.0561 10.6952 30.3419 10.6952 30.6945V35.108C10.6952 35.4606 10.4072 35.7464 10.052 35.7464H5.60535C5.2501 35.7464 4.96218 35.4605 4.96218 35.108ZM4.96218 26.2188V21.8053C4.96218 21.4527 5.2501 21.167 5.60535 21.167H10.052C10.4072 21.167 10.6952 21.4527 10.6952 21.8053V26.2188C10.6952 26.5714 10.4072 26.8572 10.052 26.8572H5.60535C5.2501 26.8572 4.96218 26.5713 4.96218 26.2188ZM25.6211 43.0152H9.37887C8.24178 43.0152 7.32004 42.1003 7.32004 40.9717C7.32004 39.8431 8.24178 38.9283 9.37887 38.9283H25.6211C26.7582 38.9283 27.68 39.8431 27.68 40.9717C27.68 42.1003 26.7582 43.0152 25.6211 43.0152ZM15.2767 30.056H19.7233C20.0786 30.056 20.3665 30.3418 20.3665 30.6944V35.1079C20.3665 35.4605 20.0786 35.7463 19.7233 35.7463H15.2767C14.9214 35.7463 14.6335 35.4605 14.6335 35.1079V30.6944C14.6335 30.3419 14.9214 30.056 15.2767 30.056ZM14.6335 26.2188V21.8053C14.6335 21.4527 14.9214 21.167 15.2767 21.167H19.7233C20.0786 21.167 20.3665 21.4527 20.3665 21.8053V26.2188C20.3665 26.5714 20.0786 26.8572 19.7233 26.8572H15.2767C14.9214 26.8572 14.6335 26.5713 14.6335 26.2188ZM29.3946 35.7464H24.948C24.5927 35.7464 24.3048 35.4606 24.3048 35.108V30.6945C24.3048 30.3419 24.5927 30.0561 24.948 30.0561H29.3946C29.7499 30.0561 30.0378 30.3419 30.0378 30.6945V35.108C30.0378 35.4606 29.7499 35.7464 29.3946 35.7464ZM29.3946 26.8572H24.948C24.5927 26.8572 24.3048 26.5714 24.3048 26.2188V21.8053C24.3048 21.4527 24.5927 21.167 24.948 21.167H29.3946C29.7499 21.167 30.0378 21.4527 30.0378 21.8053V26.2188C30.0378 26.5714 29.7499 26.8572 29.3946 26.8572ZM30.2647 15.289C30.2647 16.4945 29.2801 17.4717 28.0656 17.4717H6.93453C5.71993 17.4717 4.73529 16.4944 4.73529 15.289V6.37187C4.73529 5.16642 5.71993 4.18913 6.93453 4.18913H28.0656C29.2801 4.18913 30.2647 5.16642 30.2647 6.37187V15.289Z" fill="#8F85BA" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className='pb-2'>
                                                <span className='fw-700 normalTextToWhite'>Versicherungsmodell wechseln</span>
                                            </div>
                                            <div className="pb-5">
                                                <span className='fw-500 normalTextToWhite'>So passen Sie Ihre Krankenversicherung an</span>
                                            </div>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="55" viewBox="0 0 21 21">
                                                    <g fill="none" fillRule="evenodd" stroke="#891250" strokeLinecap="round" strokeLinejoin="round" transform="translate(2 2)"><circle cx="8.5" cy="8.5" r="8" /><path d="m7.5 11.5 3-3-3.068-3" />
                                                    </g>
                                                </svg>
                                            </div>
                                        </div>
                                    </NavLink>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <NavLink to='/versicherungen/krankenkasse' className='text-decoration-none text-dark'>
                                        <div className='servicesBorderDiv p-4 text-start d-flex flex-column justify-content-between'>
                                            <div className="pb-4">
                                                <div className="svgPurpleCircle">
                                                    <svg width="30" height="40" viewBox="0 0 35 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M31.8742 0H3.12581C1.39948 0 0 1.38905 0 3.10251V43.8975C0 45.6109 1.39948 47 3.12581 47H31.8742C33.6005 47 35 45.6109 35 43.8975V3.10251C35 1.38905 33.6005 0 31.8742 0ZM4.96218 35.108V30.6945C4.96218 30.3419 5.2501 30.0561 5.60535 30.0561H10.052C10.4072 30.0561 10.6952 30.3419 10.6952 30.6945V35.108C10.6952 35.4606 10.4072 35.7464 10.052 35.7464H5.60535C5.2501 35.7464 4.96218 35.4605 4.96218 35.108ZM4.96218 26.2188V21.8053C4.96218 21.4527 5.2501 21.167 5.60535 21.167H10.052C10.4072 21.167 10.6952 21.4527 10.6952 21.8053V26.2188C10.6952 26.5714 10.4072 26.8572 10.052 26.8572H5.60535C5.2501 26.8572 4.96218 26.5713 4.96218 26.2188ZM25.6211 43.0152H9.37887C8.24178 43.0152 7.32004 42.1003 7.32004 40.9717C7.32004 39.8431 8.24178 38.9283 9.37887 38.9283H25.6211C26.7582 38.9283 27.68 39.8431 27.68 40.9717C27.68 42.1003 26.7582 43.0152 25.6211 43.0152ZM15.2767 30.056H19.7233C20.0786 30.056 20.3665 30.3418 20.3665 30.6944V35.1079C20.3665 35.4605 20.0786 35.7463 19.7233 35.7463H15.2767C14.9214 35.7463 14.6335 35.4605 14.6335 35.1079V30.6944C14.6335 30.3419 14.9214 30.056 15.2767 30.056ZM14.6335 26.2188V21.8053C14.6335 21.4527 14.9214 21.167 15.2767 21.167H19.7233C20.0786 21.167 20.3665 21.4527 20.3665 21.8053V26.2188C20.3665 26.5714 20.0786 26.8572 19.7233 26.8572H15.2767C14.9214 26.8572 14.6335 26.5713 14.6335 26.2188ZM29.3946 35.7464H24.948C24.5927 35.7464 24.3048 35.4606 24.3048 35.108V30.6945C24.3048 30.3419 24.5927 30.0561 24.948 30.0561H29.3946C29.7499 30.0561 30.0378 30.3419 30.0378 30.6945V35.108C30.0378 35.4606 29.7499 35.7464 29.3946 35.7464ZM29.3946 26.8572H24.948C24.5927 26.8572 24.3048 26.5714 24.3048 26.2188V21.8053C24.3048 21.4527 24.5927 21.167 24.948 21.167H29.3946C29.7499 21.167 30.0378 21.4527 30.0378 21.8053V26.2188C30.0378 26.5714 29.7499 26.8572 29.3946 26.8572ZM30.2647 15.289C30.2647 16.4945 29.2801 17.4717 28.0656 17.4717H6.93453C5.71993 17.4717 4.73529 16.4944 4.73529 15.289V6.37187C4.73529 5.16642 5.71993 4.18913 6.93453 4.18913H28.0656C29.2801 4.18913 30.2647 5.16642 30.2647 6.37187V15.289Z" fill="#8F85BA" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className='pb-2'>
                                                <span className='fw-700 normalTextToWhite'>Beratung anfordern</span>
                                            </div>
                                            <div className="pb-5">
                                                <span className='fw-500 normalTextToWhite'>Unser Verkaufsteam berät Sie gerne telefonisch oder persönlich</span>
                                            </div>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="55" viewBox="0 0 21 21">
                                                    <g fill="none" fillRule="evenodd" stroke="#891250" strokeLinecap="round" strokeLinejoin="round" transform="translate(2 2)"><circle cx="8.5" cy="8.5" r="8" /><path d="m7.5 11.5 3-3-3.068-3" />
                                                    </g>
                                                </svg>
                                            </div>
                                        </div>
                                    </NavLink>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <NavLink to='/versicherungen/krankenkasse' className='text-decoration-none text-dark'>
                                        <div className='servicesBorderDiv p-4 text-start d-flex flex-column justify-content-between'>
                                            <div className="pb-4">
                                                <div className="svgPurpleCircle">
                                                    <svg width="30" height="40" viewBox="0 0 35 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M31.8742 0H3.12581C1.39948 0 0 1.38905 0 3.10251V43.8975C0 45.6109 1.39948 47 3.12581 47H31.8742C33.6005 47 35 45.6109 35 43.8975V3.10251C35 1.38905 33.6005 0 31.8742 0ZM4.96218 35.108V30.6945C4.96218 30.3419 5.2501 30.0561 5.60535 30.0561H10.052C10.4072 30.0561 10.6952 30.3419 10.6952 30.6945V35.108C10.6952 35.4606 10.4072 35.7464 10.052 35.7464H5.60535C5.2501 35.7464 4.96218 35.4605 4.96218 35.108ZM4.96218 26.2188V21.8053C4.96218 21.4527 5.2501 21.167 5.60535 21.167H10.052C10.4072 21.167 10.6952 21.4527 10.6952 21.8053V26.2188C10.6952 26.5714 10.4072 26.8572 10.052 26.8572H5.60535C5.2501 26.8572 4.96218 26.5713 4.96218 26.2188ZM25.6211 43.0152H9.37887C8.24178 43.0152 7.32004 42.1003 7.32004 40.9717C7.32004 39.8431 8.24178 38.9283 9.37887 38.9283H25.6211C26.7582 38.9283 27.68 39.8431 27.68 40.9717C27.68 42.1003 26.7582 43.0152 25.6211 43.0152ZM15.2767 30.056H19.7233C20.0786 30.056 20.3665 30.3418 20.3665 30.6944V35.1079C20.3665 35.4605 20.0786 35.7463 19.7233 35.7463H15.2767C14.9214 35.7463 14.6335 35.4605 14.6335 35.1079V30.6944C14.6335 30.3419 14.9214 30.056 15.2767 30.056ZM14.6335 26.2188V21.8053C14.6335 21.4527 14.9214 21.167 15.2767 21.167H19.7233C20.0786 21.167 20.3665 21.4527 20.3665 21.8053V26.2188C20.3665 26.5714 20.0786 26.8572 19.7233 26.8572H15.2767C14.9214 26.8572 14.6335 26.5713 14.6335 26.2188ZM29.3946 35.7464H24.948C24.5927 35.7464 24.3048 35.4606 24.3048 35.108V30.6945C24.3048 30.3419 24.5927 30.0561 24.948 30.0561H29.3946C29.7499 30.0561 30.0378 30.3419 30.0378 30.6945V35.108C30.0378 35.4606 29.7499 35.7464 29.3946 35.7464ZM29.3946 26.8572H24.948C24.5927 26.8572 24.3048 26.5714 24.3048 26.2188V21.8053C24.3048 21.4527 24.5927 21.167 24.948 21.167H29.3946C29.7499 21.167 30.0378 21.4527 30.0378 21.8053V26.2188C30.0378 26.5714 29.7499 26.8572 29.3946 26.8572ZM30.2647 15.289C30.2647 16.4945 29.2801 17.4717 28.0656 17.4717H6.93453C5.71993 17.4717 4.73529 16.4944 4.73529 15.289V6.37187C4.73529 5.16642 5.71993 4.18913 6.93453 4.18913H28.0656C29.2801 4.18913 30.2647 5.16642 30.2647 6.37187V15.289Z" fill="#8F85BA" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className='pb-2'>
                                                <span className='fw-700 normalTextToWhite'>Häufige Fragen</span>
                                            </div>
                                            <div className="pb-5">
                                                <span className='fw-500 normalTextToWhite'>Antworten und Tipps im Überblick</span>
                                            </div>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="55" viewBox="0 0 21 21">
                                                    <g fill="none" fillRule="evenodd" stroke="#891250" strokeLinecap="round" strokeLinejoin="round" transform="translate(2 2)"><circle cx="8.5" cy="8.5" r="8" /><path d="m7.5 11.5 3-3-3.068-3" />
                                                    </g>
                                                </svg>
                                            </div>
                                        </div>
                                    </NavLink>
                                </SwiperSlide>
                            </Swiper>
                            
                                
                        </div>
                    </div>
                </div>
            </div>
            <div className='wrapDiv container-xl px-4 px-lg-5 bodyCounterPadding'>
                <div className="row gx-4 justify-content-between">
                    <div className="col-12 pb-4 pb-md-0 col-md-6">
                        <div className='photoBorderDiv'>
                            <img className='w-100' src={Photo1} alt="" />

                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-5 my-auto">
                        <div className='text-start pb-4 pb-md-0'>
                            {/* <div className='pb-4'>
                                <span className='finanuSubTitle fs-3 fw-800'>Services for corporate customers</span>
                            </div> */}
                            <div className=''>
                                <span className='fw-600 normalTextToWhite finanuSubTitle fs-5'>Sympany ist eine Versicherungsgesellschaft, die auf über 100 Jahre Geschichte zurückblickt.Besonders bekannt ist das Unternehmen, weil es 2016 als erste Krankenkasse der Schweiz seine Kunden an Überschussbeträgen beteiligt hat. </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='wrapDiv container-xl px-4 px-lg-5 bodyCounterPadding text-start'>
                <div className="pb-4">
                    <span className='finanuSubTitle fw-800'>Modelle in der Grundversicherung</span>
                </div>
                <div className='pb-3'>
                    <span className='fw-500 normalTextToWhite'>
                        Die obligatorische Grundversicherung wird bei der Sympany Krankenkasse durch verschiedene Modelle abgedeckt. Je nachdem, wie viel Selbstbestimmung die Kunden bei der Ärztewahl wünschen, fallen die Prämien dabei teurer oder günstiger aus. Folgende Tarife werden angeboten:
                    </span>
                </div>
                <Accordion defaultActiveKey="0" className='borderTopAccSympany'>
                    <Accordion.Item eventKey="0" className='sympanyAccItem'>
                        <Accordion.Header>
                            <div>
                                <span className='fw-700 fs-5'>casamed hmo </span>
                            </div>
                        </Accordion.Header>
                        <Accordion.Body>
                            <div className='pb-3'>
                                <div className='fw-700'>
                                    <span>
                                        Rabatt von 10%:
                                    </span>
                                </div>
                                <div className='fw-500'>
                                    <span>
                                        Prämie für Erwachsene in Zug ZG, Franchise CHF 2’500.–, ohne Unfalldeckung, Kolping Krankenkasse AG
                                    </span>
                                </div>
                            </div>
                            <div className=''>
                                <div className='fw-700'>
                                    <span>
                                        Rabatt von 17%:
                                    </span>
                                </div>
                                <div className='fw-500'>
                                    <span>
                                        Prämie für Erwachsene in Stans NW, Franchise CHF 2’500.–, ohne Unfalldeckung, Kolping Krankenkasse AG
                                    </span>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1" className='sympanyAccItem'>
                        <Accordion.Header>
                            <div>
                                <span className='fw-700 fs-5'>flexhelp 24 </span>

                            </div>

                        </Accordion.Header>
                        <Accordion.Body>
                            <div className='pb-3'>
                                <div className='fw-700'>
                                    <span>
                                        Rabatt von 14%:
                                    </span>
                                </div>
                                <div className='fw-500'>
                                    <span>
                                        Prämie für Erwachsene in Interlaken BE, Franchise CHF 2’500.–, ohne Unfalldeckung, Vivao Sympany AG
                                    </span>
                                </div>
                            </div>
                            <div className=''>
                                <div className='fw-700'>
                                    <span>
                                        Rabatt von 17%:
                                    </span>
                                </div>
                                <div className='fw-500'>
                                    <span>
                                        Prämie für Erwachsene in Zürich ZH, Franchise CHF 2’500.–, ohne Unfalldeckung, Kolping Krankenkasse AG
                                    </span>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2" className='sympanyAccItem'>
                        <Accordion.Header>
                            <div>
                                <span className='fw-700 fs-5'>Casamed Hausarzt: </span>

                            </div>

                        </Accordion.Header>
                        <Accordion.Body>
                            <div className='pb-3'>
                                <div className='fw-700'>
                                    <span>
                                        Rabatt von 6%:
                                    </span>
                                </div>
                                <div className='fw-500'>
                                    <span>
                                        Prämie für Erwachsene in Altdorf UR, Franchise CHF 2’500.–, ohne Unfalldeckung, Kolping Krankenkasse AG
                                    </span>
                                </div>
                            </div>
                            <div className=''>
                                <div className='fw-700'>
                                    <span>
                                        Rabatt von 12%:
                                    </span>
                                </div>
                                <div className='fw-500'>
                                    <span>
                                        Prämie für Erwachsene in Brig VS, Franchise CHF 2’500.–, ohne Unfalldeckung, Vivao Sympany AG
                                    </span>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3" className='sympanyAccItem'>
                        <Accordion.Header>
                            <div>
                                <span className='fw-700 fs-5'>Casamed Pharm: </span>
                            </div>

                        </Accordion.Header>
                        <Accordion.Body>
                            <div className='pb-3'>
                                <div className='fw-700'>
                                    <span>
                                        Rabatt von 9%:
                                    </span>
                                </div>
                                <div className='fw-500'>
                                    <span>
                                        Prämie für Erwachsene in Liestal BL, Franchise CHF 2’500.–, ohne Unfalldeckung, Vivao Sympany AG
                                    </span>
                                </div>
                            </div>
                            <div className=''>
                                <div className='fw-700'>
                                    <span>
                                        Rabatt von 14%:
                                    </span>
                                </div>
                                <div className='fw-500'>
                                    <span>
                                        Prämie für Erwachsene in Fribourg FR, Franchise CHF 2’500.–, ohne Unfalldeckung, Vivao Sympany AG
                                    </span>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4" className='sympanyAccItem'>
                        <Accordion.Header>
                            <div>
                                <span className='fw-700 fs-5'>callmed 24 </span>

                            </div>

                        </Accordion.Header>
                        <Accordion.Body>
                            <div className='pb-3'>
                                <div className='fw-700'>
                                    <span>
                                        Rabatt von 8%:
                                    </span>
                                </div>
                                <div className='fw-500'>
                                    <span>
                                        Prämie für Erwachsene in Frauenfeld TG, Franchise CHF 2'500.–, ohne Unfalldeckung, Moove Sympany AG
                                    </span>
                                </div>
                            </div>
                            <div className=''>
                                <div className='fw-700'>
                                    <span>
                                        Rabatt von 14%:
                                    </span>
                                </div>
                                <div className='fw-500'>
                                    <span>
                                        Prämie für Erwachsene in Zug ZG, Franchise CHF 2'500.–, ohne Unfalldeckung, Kolping Krankenkasse AG
                                    </span>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5" className='sympanyAccItem'>
                        <Accordion.Header>
                            <div>
                                <span className='fw-700 fs-5'>Warum sind die Rabatte unterschiedlich hoch? </span>
                            </div>
                        </Accordion.Header>
                        <Accordion.Body>
                            <div className='pb-3'>
                                <div className='fw-500'>
                                    <span>
                                        Je nach alternativem Versicherungsmodell stehen Versicherten eine oder mehrere Anlaufstellen (Medgate, Hausarzt-/HMO-Praxis, Apotheke) als Erstkontakt bei gesundheitlichen Beschwerden zur Verfügung.
                                    </span>
                                </div>

                            </div>
                            <div className=''>
                                <div className='fw-500'>
                                    <span>
                                        In einigen Modellen ist mehr Koordination der Behandlung möglich als in anderen, wodurch unterschiedlich hohe Kosteneinsparungen entstehen. Diese Kosteneinsparungen gibt Sympany als Prämienrabatt an ihre Kundinnen und Kunden weiter – immer genau berechnet für das jeweilige Modell, die Altersgruppe, die Franchise und die Prämienregion.
                                    </span>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>



            </div>
            <div className='wrapDiv container-xl px-4 px-lg-5 bodyCounterPadding text-start'>
                <div className="pb-4">
                    <span className='finanuSubTitle fw-800'>Sympany Grundversicherung
                    </span>
                </div>
                <div>
                    <div className="row g-3 justify-content-center">
                        <div className="col-12 col-sm-6 col-md-3">
                            <div className="servicesBorderDiv p-4 p-lg-5">
                                <div className='pb-4'>
                                    <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M44.5175 34.1278C42.8424 30.9606 37.0254 27.5265 36.7693 27.3763C36.0219 26.9508 35.2419 26.7255 34.5119 26.7255C33.4266 26.7255 32.5382 27.2228 32.0001 28.1272C31.1492 29.1451 30.0939 30.3349 29.8378 30.5192C27.8557 31.8642 26.3041 31.7115 24.5872 29.9944L15.0054 20.4104C13.2994 18.7042 13.1426 17.1331 14.4782 15.1616C14.665 14.9038 15.8546 13.8475 16.8724 12.9956C17.5214 12.6093 17.9669 12.0353 18.1621 11.3311C18.4215 10.3942 18.2305 9.29202 17.6182 8.21823C17.4739 7.97126 14.0386 2.15259 10.8735 0.478076C10.2829 0.165199 9.6172 0 8.94982 0C7.85032 0 6.81589 0.42885 6.0384 1.20562L3.92115 3.32233C0.572603 6.67053 -0.639516 10.4659 0.316498 14.6026C1.11401 18.0501 3.43814 21.7186 7.22549 25.5057L19.4927 37.7746C24.2861 42.5687 28.8559 45 33.0754 45C36.1787 45 39.0726 43.6809 41.6729 41.0803L43.7893 38.9636C45.0756 37.6779 45.3676 35.7338 44.5175 34.1278Z" fill="#8F85BA" />
                                    </svg>
                                </div>
                                <div>
                                    <span className='fw-800 normalTextToWhite'>Telmed</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-3">
                            <div className="servicesBorderDiv p-4 p-lg-5">
                                <div className='pb-4'>
                                    <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M32.0233 1.87349C32.0233 0.835723 31.1875 0 30.1498 0H13.1508C12.1131 0 11.2773 0.835723 11.2773 1.87349V5.09699H32.0233V1.87349Z" fill="#8F85BA" />
                                        <path d="M43.1265 8.85254H1.87347C0.835714 8.85254 0 9.68826 0 10.726V43.1264C0 44.1641 0.835714 44.9999 1.87347 44.9999H14.602V29.7089C14.602 28.6711 15.4378 27.8354 16.4755 27.8354H28.5245C29.5622 27.8354 30.398 28.6711 30.398 29.7089V44.9999H43.1265C44.1643 44.9999 45 44.1641 45 43.1264V10.726C45 9.68826 44.1643 8.85254 43.1265 8.85254ZM26.3296 19.772H24.3735V21.7282C24.3735 22.766 23.5378 23.6017 22.5 23.6017C21.4622 23.6017 20.6265 22.766 20.6265 21.7282V19.772H18.6704C17.6327 19.772 16.7969 18.9363 16.7969 17.8986C16.7969 16.8608 17.6327 16.0251 18.6704 16.0251H20.6265V14.0689C20.6265 13.0312 21.4622 12.1954 22.5 12.1954C23.5378 12.1954 24.3735 13.0312 24.3735 14.0689V16.0251H26.3296C27.3673 16.0251 28.2031 16.8608 28.2031 17.8986C28.2031 18.9363 27.3673 19.772 26.3296 19.772Z" fill="#8F85BA" />
                                    </svg>

                                </div>
                                <div>
                                    <span className='fw-800 normalTextToWhite'>HMO</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-3">
                            <div className="servicesBorderDiv p-4 p-lg-5">
                                <div className='pb-4'>
                                    <svg width="41" height="45" viewBox="0 0 41 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M28.8856 28.1254L20.5 36.5093L12.1144 28.1254C5.83105 28.3978 0.8125 33.5394 0.8125 39.8843C0.8125 41.2411 1.35152 42.5424 2.31097 43.5019C3.27043 44.4614 4.57174 45.0004 5.92861 45.0004H35.0714C36.4283 45.0004 37.7296 44.4614 38.689 43.5019C39.6485 42.5424 40.1875 41.2411 40.1875 39.8843C40.1875 33.5394 35.1689 28.3978 28.8856 28.1254ZM20.5 26.7191C23.4837 26.7191 26.3452 25.5339 28.455 23.4241C30.5647 21.3143 31.75 18.4528 31.75 15.4691V5.78533C31.7507 5.21229 31.5763 4.6527 31.2503 4.18148C30.9242 3.71026 30.4619 3.34989 29.9254 3.14861L22.4749 0.358086C21.2016 -0.119362 19.7984 -0.119362 18.5251 0.358086L11.0746 3.15213C10.5386 3.3532 10.0768 3.71303 9.75075 4.18356C9.42472 4.65408 9.25002 5.21289 9.25 5.78533V15.4691C9.25 18.4528 10.4353 21.3143 12.545 23.4241C14.6548 25.5339 17.5163 26.7191 20.5 26.7191ZM16.9844 6.29949C16.9844 6.18294 17.0307 6.07117 17.1131 5.98875C17.1955 5.90634 17.3073 5.86004 17.4238 5.86004H19.3284V3.95545C19.3284 3.8389 19.3747 3.72712 19.4571 3.64471C19.5395 3.5623 19.6513 3.516 19.7679 3.516H21.2321C21.3487 3.516 21.4605 3.5623 21.5429 3.64471C21.6253 3.72712 21.6716 3.8389 21.6716 3.95545V5.86004H23.5762C23.6927 5.86004 23.8045 5.90634 23.8869 5.98875C23.9693 6.07117 24.0156 6.18294 24.0156 6.29949V7.76375C24.0156 7.8803 23.9693 7.99208 23.8869 8.07449C23.8045 8.1569 23.6927 8.2032 23.5762 8.2032H21.6716V10.1078C21.6716 10.2243 21.6253 10.3361 21.5429 10.4185C21.4605 10.5009 21.3487 10.5472 21.2321 10.5472H19.7679C19.6513 10.5472 19.5395 10.5009 19.4571 10.4185C19.3747 10.3361 19.3284 10.2243 19.3284 10.1078V8.2032H17.4238C17.3073 8.2032 17.1955 8.1569 17.1131 8.07449C17.0307 7.99208 16.9844 7.8803 16.9844 7.76375V6.29949ZM13.4688 14.0629H27.5312V15.4691C27.5312 17.3339 26.7905 19.1224 25.4718 20.441C24.1532 21.7596 22.3648 22.5004 20.5 22.5004C18.6352 22.5004 16.8468 21.7596 15.5282 20.441C14.2095 19.1224 13.4688 17.3339 13.4688 15.4691V14.0629Z" fill="#8F85BA" />
                                    </svg>

                                </div>
                                <div>
                                    <span className='fw-800 normalTextToWhite'>Hausarzt</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='wrapDiv container-xl px-4 px-lg-5 bodyCounterPadding text-start'>
                <div className="pb-4">
                    <span className='finanuSubTitle fw-800'>Sympany Zusatzversicherung
                    </span>
                </div>
                <div className="pb-3">
                    <span className='fw-700 fs-5'>Ruhiger schlafen mit dem richtigen Schutz</span>
                </div>
                <div>
                    <div className="pb-5">
                        <span className='fw-500 normalTextToWhite'>
                            Das Leben passiert, während man andere Pläne macht. Genau deshalb lohnt es sich, den Basisschutz Ihrer Grundversicherung nach Ihren individuellen Bedürfnissen zu gestalten. Für Ihre Liebsten, für Sie selbst. Und für das gute Gefühl, auf die eine oder andere herausfordernde Überraschung gut vorbereitet zu sein.
                        </span>
                    </div>
                    <div className="px-0 px-lg-5">
                        <div className='p-4 mb-2 fw-500 normalTextToWhite' style={{ border: '2px solid #ebd7c1' }}>
                            <div className="row gx-3 gy-0 ">
                                <div className="col-12 col-sm-auto my-auto my-auto pb-4 pb-sm-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="110" height="110" viewBox="0 0 79 79" fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M70.7702 72.4167H8.22852V69.125H70.7702V72.4167Z" fill="#333333" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M39.4993 11.5205C40.4083 11.5205 41.1452 12.2574 41.1452 13.1663V23.0413C41.1452 23.9503 40.4083 24.6872 39.4993 24.6872C38.5904 24.6872 37.8535 23.9503 37.8535 23.0413V13.1663C37.8535 12.2574 38.5904 11.5205 39.4993 11.5205Z" fill="#333333" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M32.916 18.1038C32.916 17.1948 33.6529 16.458 34.5618 16.458H44.4368C45.3458 16.458 46.0827 17.1948 46.0827 18.1038C46.0827 19.0128 45.3458 19.7497 44.4368 19.7497H34.5618C33.6529 19.7497 32.916 19.0128 32.916 18.1038Z" fill="#333333" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M46.0827 9.87467H32.916C32.007 9.87467 31.2702 10.6115 31.2702 11.5205V24.6872C31.2702 25.5962 32.007 26.333 32.916 26.333H46.0827C46.9917 26.333 47.7285 25.5962 47.7285 24.6872V11.5205C47.7285 10.6115 46.9917 9.87467 46.0827 9.87467ZM32.916 6.58301H46.0827C48.8097 6.58301 51.0202 8.79361 51.0202 11.5205V24.6872C51.0202 27.4142 48.8097 29.6247 46.0827 29.6247H32.916C30.189 29.6247 27.9785 27.4142 27.9785 24.6872V11.5205C27.9785 8.79361 30.189 6.58301 32.916 6.58301Z" fill="#333333" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M14.8125 27.9795C14.8125 25.2525 17.023 23.042 19.75 23.042H28.4059V26.3337H19.75C18.841 26.3337 18.1042 27.0705 18.1042 27.9795V69.1253H14.8125V27.9795Z" fill="#333333" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M64.1872 27.9795C64.1872 25.2525 61.9767 23.042 59.2497 23.042H50.5938V26.3337H59.2497C60.1587 26.3337 60.8955 27.0705 60.8955 27.9795V69.1253H64.1872V27.9795Z" fill="#333333" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M39.4993 55.9587C37.6814 55.9587 36.2077 57.4323 36.2077 59.2503V70.7712H32.916V59.2503C32.916 55.6145 35.8635 52.667 39.4993 52.667C43.1352 52.667 46.0827 55.6145 46.0827 59.2503V70.7712H42.791V59.2503C42.791 57.4323 41.3173 55.9587 39.4993 55.9587Z" fill="#333333" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M29.6243 39.5003V32.917H23.041V39.5003H29.6243Z" fill="#333333" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M29.6243 49.3753V42.792H23.041V49.3753H29.6243Z" fill="#333333" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M42.7923 39.5003V32.917H36.209V39.5003H42.7923Z" fill="#333333" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M42.7923 49.3753V42.792H36.209V49.3753H42.7923Z" fill="#333333" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M55.9583 39.5003V32.917H49.375V39.5003H55.9583Z" fill="#333333" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M55.9583 49.3753V42.792H49.375V49.3753H55.9583Z" fill="#333333" />
                                    </svg>
                                </div>
                                <div className="col">
                                    <div className='pb-1'>
                                        <span style={{ fontSize: '14px' }}>Spitalzusatzversicherungen hospita </span>
                                    </div>
                                    <div className='pb-3'>
                                        <span className='finanuSubTitle fw-800'>Schweizweit freie Spitalwahl und mehr.</span>
                                    </div>
                                    <div className='pb-2'>
                                        <span className='fw-500'> Gönnen Sie sich freie Spitalwahl, freie Arztwahl und die Wahl der Spitalabteilung. </span>
                                    </div>
                                    <div>
                                        <a className='swicaLinks' href="https://www.sympany.ch/de/privatkunden/zusatzversicherungen/spital.html">Weiterlesen</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='p-4 mb-2 fw-500 normalTextToWhite' style={{ border: '2px solid #ebd7c1' }}>
                            <div className="row gx-3 gy-0">
                                <div className="col-12 col-sm-auto my-auto my-auto pb-4 pb-sm-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="110" height="110" viewBox="0 0 90 79" fill="none">
                                        <path d="M72.918 12.3163C71.0212 12.1353 69.1291 12.7625 67.7276 14.0367C66.325 15.3118 65.5205 17.1298 65.5205 19.0246C65.5205 19.7314 66.0935 20.3043 66.8002 20.3043C67.507 20.3043 68.0799 19.7314 68.0799 19.0246C68.0799 17.8494 68.579 16.7215 69.4492 15.9305C70.3312 15.1285 71.4769 14.7494 72.6751 14.8642C74.7866 15.0654 76.4406 16.9961 76.4406 19.2592V47.6899C76.4406 48.0086 76.336 48.3026 76.1611 48.5421C75.2269 40.4384 68.3251 34.1251 59.9752 34.1251C52.6096 34.1251 46.3708 39.0379 44.3608 45.7585C43.1333 44.4792 41.4088 43.6801 39.5 43.6801C37.5912 43.6801 35.8665 44.479 34.6392 45.7585C32.6292 39.0379 26.3904 34.1251 19.0248 34.1251C10.6749 34.1251 3.77289 40.4384 2.83888 48.5421C2.66399 48.3026 2.5594 48.0084 2.5594 47.6899V19.2592C2.5594 16.9961 4.21328 15.0654 6.32478 14.8641C7.5236 14.7494 8.66867 15.1285 9.55064 15.9303C10.421 16.7215 10.9201 17.8494 10.9201 19.0246C10.9201 19.7314 11.4931 20.3043 12.1998 20.3043C12.9065 20.3043 13.4795 19.7314 13.4795 19.0246C13.4795 17.13 12.6751 15.312 11.2724 14.0367C9.87091 12.7625 7.97917 12.1358 6.08198 12.3163C2.6715 12.6415 0 15.6913 0 19.2592V47.6899C0 49.4671 1.16248 50.977 2.76688 51.5015C3.32551 59.984 10.4034 66.7147 19.0248 66.7147C28.0099 66.7147 35.3197 59.4049 35.3197 50.4199C35.3197 48.1149 37.195 46.2395 39.5 46.2395C41.805 46.2395 43.6803 48.1149 43.6803 50.4199C43.6803 59.4049 50.9902 66.7147 59.9752 66.7147C68.5966 66.7147 75.6745 59.984 76.2331 51.5015C77.8374 50.977 79 49.4671 79 47.6899V19.2592C79 15.6913 76.3285 12.6415 72.918 12.3163ZM19.0248 64.1553C11.4511 64.1553 5.28942 57.9936 5.28942 50.4199C5.28942 42.8461 11.4511 36.6845 19.0248 36.6845C26.5986 36.6845 32.7603 42.8461 32.7603 50.4199C32.7603 57.9936 26.5986 64.1553 19.0248 64.1553ZM59.9752 64.1553C52.4014 64.1553 46.2397 57.9936 46.2397 50.4199C46.2397 42.8461 52.4014 36.6845 59.9752 36.6845C67.5489 36.6845 73.7106 42.8461 73.7106 50.4199C73.7106 57.9936 67.5489 64.1553 59.9752 64.1553Z" fill="black" />
                                    </svg>
                                </div>
                                <div className="col">
                                    <div className='pb-1'>
                                        <span style={{ fontSize: '14px' }}>Ambulante Zusatzversicherungen plus und premium</span>
                                    </div>
                                    <div className='pb-3'>
                                        <span className='finanuSubTitle fw-800'>Für Vorsorge und beliebte Extras.</span>
                                    </div>
                                    <div className='pb-2'>
                                        <span className='fw-500'> Schliessen Sie Deckungslücken der Grundversicherung. Erhalten Sie Beiträge an Vorsorgeuntersuchungen, Impfungen, Alternativmedizin und nicht-kassenpflichtige Medikamente. </span>
                                    </div>
                                    <div>
                                        <a className='swicaLinks' href="https://www.sympany.ch/de/privatkunden/zusatzversicherungen/ambulant.html">Weiterlesen</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='p-4 mb-2 fw-500 normalTextToWhite' style={{ border: '2px solid #ebd7c1' }}>
                            <div className="row gx-3 gy-0">
                                <div className="col-12 col-sm-auto my-auto my-auto pb-4 pb-sm-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="110" height="110" viewBox="0 0 79 79" fill="none">
                                        <path d="M64.1875 18.0214C64.1875 0.740177 44.4375 9.62768 39.5 9.62768C34.5625 9.62768 14.8125 0.987052 14.8125 18.0214C14.8125 24.6871 16.5406 30.6121 19.2563 35.7964C21.4781 39.9933 22.2188 44.9308 21.2313 49.3745C20.2438 54.0652 17.0344 71.5933 22.2187 71.5933C29.625 71.5933 29.625 49.3745 39.5 49.3745C49.375 49.3745 51.8437 71.5933 56.7812 71.5933C62.2125 71.5933 58.7562 54.0652 57.7687 49.3745C56.7812 44.6839 57.5219 39.9933 59.7437 35.7964C62.4594 30.8589 64.1875 24.6871 64.1875 18.0214Z" stroke="#333333" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div className="col">
                                    <div className='pb-1'>
                                        <span style={{ fontSize: '14px' }}>Zahnzusatzversicherung dental</span>
                                    </div>
                                    <div className='pb-3'>
                                        <span className='finanuSubTitle fw-800'>Zahnkosten minimal, Leistung optimal.</span>
                                    </div>
                                    <div className='pb-2'>
                                        <span className='fw-500'> Zahnbehandlungen sind in der Grundversicherung nicht enthalten. Mit dental schützen Sie sich vor Löchern im Haushaltsbudget. </span>
                                    </div>
                                    <div>
                                        <a className='swicaLinks' href="https://www.sympany.ch/de/privatkunden/zusatzversicherungen/zahn.html">Weiterlesen</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className='wrapDiv container-xl px-4 px-lg-5 bodyCounterPadding text-start'>
                <div className="pb-4">
                    <span className='finanuSubTitle fw-800'>Besondere Leistungen
                    </span>
                </div>
                <div>

                    <div className="pb-3">
                        <span className='fw-500 normalTextToWhite'>
                            Die Sympany Versicherungsgesellschaft gewährt ihren Kunden zahlreiche Vorteile. So werden beispielsweise Überschüsse jedes Jahr direkt an die Kunden zurückgegeben. Ausserdem dürfen Versicherte bis zum 25 Lebensjahr im Sommer über 90 Bäder der Schweiz kostenlos besuchen. Hinzu kommt ein fester jährlicher Betrag für die Mitgliedschaft in einem Sportverein oder die Teilnahme an einem entsprechenden Kurs.
                        </span>
                    </div>
                    <div className="pb-3">
                        <span className='fw-500 normalTextToWhite'>
                            Sie interessieren sich für eine Versicherung bei der Sympany? Dann lassen Sie uns jetzt Ihr unverbindliches Angebot berechnen!
                        </span>
                    </div>

                </div>
            </div>
            <div className='wrapDiv container-xl px-4 px-lg-5 bodyCounterPadding text-start'>
                <div className="pb-4">
                    <span className='finanuSubTitle fw-800'>Sympany in Kürze
                    </span>
                </div>
                <div>

                    <div className="pb-3">
                        <span className='fw-500 normalTextToWhite'>
                            Sympany ist eine Krankenversicherung mit Sitz in Basel und wurde 1914 gegründet. Zur Sympany Krankenkasse gehören fünf Unternehmen: Vivao Sympany AG, Moove Sympany AG, Kolping Krankenkasse AG, Sympany Versicherungen AG und Sympany Services AG. Die Grundversicherung (obligatorische Krankenpflegeversicherung) wird von der Vivao Sympany AG, Moove Sympany AG und Kolping Krankenkasse AG angeboten. Die Sympany Versicherungen AG bietet Zusatzversicherungen im Gesundheitsbereich an. Seit 2009 hat die Sympany Gruppe das Angebot um weitere Sachversicherungen wie Auto-, Motorrad- und Haushaltsversicherungen erweitert.

                        </span>
                    </div>
                    <div className="pb-3">
                        <span className='fw-500 normalTextToWhite'>
                            Sympany betreut über 261’100 Privatkunden. Davon 206’700 Versicherte in der obligatorischen Krankenpflegeversicherung (Grundversicherung).
                        </span>
                    </div>

                </div>
            </div>
            {/* <div className='wrapDiv container-xl px-4 px-lg-5 bodyCounterPadding text-start'>
                <div className='text-center'>
                    <div className='pb-4'>

                        <svg width="213" height="41" viewBox="0 0 213 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M40.9086 15.7396C40.6893 15.0647 40.106 14.5729 39.4039 14.471L27.4966 12.741L22.1714 1.95023C21.8574 1.314 21.2094 0.911133 20.4999 0.911133C19.7904 0.911133 19.1423 1.314 18.8284 1.95023L13.5036 12.7408L1.59598 14.4709C0.893887 14.5729 0.310466 15.0647 0.0912637 15.7395C-0.127938 16.4143 0.0548543 17.1551 0.562971 17.6503L9.17933 26.0483L7.1445 37.9088C7.02459 38.6082 7.31201 39.3149 7.88599 39.7319C8.21069 39.9679 8.59529 40.0879 8.98175 40.0879C9.27837 40.0879 9.57623 40.0172 9.84899 39.8738L20.4998 34.2746L31.1505 39.8738C31.4249 40.0181 31.7253 40.0868 32.023 40.0879C33.0512 40.0864 33.8843 39.2525 33.8843 38.224C33.8843 38.0808 33.8682 37.9413 33.8376 37.8074L31.8204 26.0484L40.4368 17.6503C40.945 17.1551 41.1278 16.4143 40.9086 15.7396Z" fill="#8F85BA" />
                            <path d="M83.9086 15.7396C83.6893 15.0647 83.106 14.5729 82.4039 14.471L70.4966 12.741L65.1714 1.95023C64.8574 1.314 64.2094 0.911133 63.4999 0.911133C62.7904 0.911133 62.1423 1.314 61.8284 1.95023L56.5036 12.7408L44.596 14.4709C43.8939 14.5729 43.3105 15.0647 43.0913 15.7395C42.8721 16.4143 43.0549 17.1551 43.563 17.6503L52.1793 26.0483L50.1445 37.9088C50.0246 38.6082 50.312 39.3149 50.886 39.7319C51.2107 39.9679 51.5953 40.0879 51.9818 40.0879C52.2784 40.0879 52.5762 40.0172 52.849 39.8738L63.4998 34.2746L74.1505 39.8738C74.4249 40.0181 74.7253 40.0868 75.023 40.0879C76.0512 40.0864 76.8843 39.2525 76.8843 38.224C76.8843 38.0808 76.8682 37.9413 76.8376 37.8074L74.8204 26.0484L83.4368 17.6503C83.945 17.1551 84.1278 16.4143 83.9086 15.7396Z" fill="#8F85BA" />
                            <path d="M126.909 15.7396C126.689 15.0647 126.106 14.5729 125.404 14.471L113.497 12.741L108.171 1.95023C107.857 1.314 107.209 0.911133 106.5 0.911133C105.79 0.911133 105.142 1.314 104.828 1.95023L99.5036 12.7408L87.596 14.4709C86.8939 14.5729 86.3105 15.0647 86.0913 15.7395C85.8721 16.4143 86.0549 17.1551 86.563 17.6503L95.1793 26.0483L93.1445 37.9088C93.0246 38.6082 93.312 39.3149 93.886 39.7319C94.2107 39.9679 94.5953 40.0879 94.9818 40.0879C95.2784 40.0879 95.5762 40.0172 95.849 39.8738L106.5 34.2746L117.15 39.8738C117.425 40.0181 117.725 40.0868 118.023 40.0879C119.051 40.0864 119.884 39.2525 119.884 38.224C119.884 38.0808 119.868 37.9413 119.838 37.8074L117.82 26.0484L126.437 17.6503C126.945 17.1551 127.128 16.4143 126.909 15.7396Z" fill="#8F85BA" />
                            <path d="M169.909 15.7396C169.689 15.0647 169.106 14.5729 168.404 14.471L156.497 12.741L151.171 1.95023C150.857 1.314 150.209 0.911133 149.5 0.911133C148.79 0.911133 148.142 1.314 147.828 1.95023L142.504 12.7408L130.596 14.4709C129.894 14.5729 129.31 15.0647 129.091 15.7395C128.872 16.4143 129.055 17.1551 129.563 17.6503L138.179 26.0483L136.145 37.9088C136.025 38.6082 136.312 39.3149 136.886 39.7319C137.211 39.9679 137.595 40.0879 137.982 40.0879C138.278 40.0879 138.576 40.0172 138.849 39.8738L149.5 34.2746L160.15 39.8738C160.425 40.0181 160.725 40.0868 161.023 40.0879C162.051 40.0864 162.884 39.2525 162.884 38.224C162.884 38.0808 162.868 37.9413 162.838 37.8074L160.82 26.0484L169.437 17.6503C169.945 17.1551 170.128 16.4143 169.909 15.7396Z" fill="#8F85BA" />
                            <path d="M212.909 15.7396C212.689 15.0647 212.106 14.5729 211.404 14.471L199.497 12.741L194.171 1.95023C193.857 1.314 193.209 0.911133 192.5 0.911133C191.79 0.911133 191.142 1.314 190.828 1.95023L185.504 12.7408L173.596 14.4709C172.894 14.5729 172.31 15.0647 172.091 15.7395C171.872 16.4143 172.055 17.1551 172.563 17.6503L181.179 26.0483L179.145 37.9088C179.025 38.6082 179.312 39.3149 179.886 39.7319C180.211 39.9679 180.595 40.0879 180.982 40.0879C181.278 40.0879 181.576 40.0172 181.849 39.8738L192.5 34.2746L203.15 39.8738C203.425 40.0181 203.725 40.0868 204.023 40.0879C205.051 40.0864 205.884 39.2525 205.884 38.224C205.884 38.0808 205.868 37.9413 205.838 37.8074L203.82 26.0484L212.437 17.6503C212.945 17.1551 213.128 16.4143 212.909 15.7396Z" fill="#8F85BA" />
                        </svg>

                    </div>
                    <div>
                        <span className='finanuSubTitle fw-800'>Customer satisfaction after making a claim
                        </span>
                    </div>
                </div>
            </div> */}
            <div className='wrapDiv container-xl px-4 px-lg-5 bodyCounterPadding text-start'>
                <div className='text-start'>
                    <div className='pb-4'>
                        <span className='finanuSubTitle fw-800'>Sympany Kontakt & Adresse
                        </span>
                    </div>
                    <div className='fw-500 normalTextToWhite'>
                        <div>
                            <span>Sympany Hauptsitz</span>
                        </div>
                        <div>
                            <span>Peter Merian-Weg 4</span>
                        </div>
                        <div className='pb-3'>
                            <span>4052 Basel</span>
                        </div>
                        <div className='pb-3'>
                            <span>Tel.: 058 262 42 00</span>
                        </div>
                        <div>
                            <span>Bei dieser Seite handelt es sich nicht um die offizielle Webseite der Sympany.</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sympany