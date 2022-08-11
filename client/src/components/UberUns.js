import React from 'react'
import Idea from '../assets/images/uberUns/idea.svg'
import Muscle from '../assets/images/uberUns/muscle.svg'
import Block from '../assets/images/uberUns/blocks.svg'
import '../assets/css/uberUns.css'
import SliderHausrat from './hausrat/SliderHausrat'
function UberUns() {
    return (
        <div className="wrapDiv container-xl px-4 px-xl-0 mx-auto">
            <div className="col-12 col-sm-11 col-md-9 col-lg-8 col-xl-6 mx-auto">
                <div className='pb-5'>
                    <span className='fw-800 fs-1'>About us</span>
                </div>
                <div className='pb-5'>
                    <img src={Idea} alt="" />
                </div>
                <div className='pb-3'>
                    <span className='fw-700 fs-5' style={{ color: '#84CDEE' }}>UNSERE AUFGABE</span>
                </div>
            </div>
            <div className='pb-5 mb-5'>
                <span>Berechnen Sie ihr monatliches und jährliches Budget mit unsererem einfachen Budgetrechner. Tragen Sie hierfür einfach Ihre Einnahmen, Ausgaben und Sparziele ein und erhalten sehen Sie sich Ihren aktuellen Budgetplan an!</span>
            </div>
            <div className="col-12 col-sm-12 col-md-10 col-lg-9 col-xl-8 mx-auto">
                <div className="row g-4">
                    <div className="col-12 col-sm-6 col-md-4">
                        <div className="whiteBgUber px-5 py-5">
                            <div>
                                <img src={Muscle} alt="" />
                            </div>
                            <div className='pt-4'>
                                <span className='fw-500 fs-5'>Independent</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4">
                        <div className="whiteBgUber px-5 py-5">
                            <div>
                                <img src={Muscle} alt="" />
                            </div>
                            <div className='pt-4'>
                                <span className='fw-500 fs-5'>Transparent</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4">
                        <div className="whiteBgUber px-5 py-5">
                            <div>
                                <img src={Muscle} alt="" />
                            </div>
                            <div className='pt-4'>
                                <span className='fw-500 fs-5'>Sustainable</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='pt-5 mt-5'>
                <div className='pb-3' style={{wordBreak: 'break-all'}}>
                    <span style={{ color: '#34ACE3' }} className='fw-700 fs-5'>UNTERNEHMENSPHILOSOPHIE</span>
                </div>
                <div className='pb-5 mb-4'>
                    <span>Berechnen Sie ihr monatliches und jährliches Budget mit unsererem einfachen Budgetrechner. Tragen Sie hierfür einfach Ihre Einnahmen, Ausgaben und Sparziele ein und erhalten sehen Sie sich Ihren aktuellen Budgetplan an!</span>
                </div>
                <div className='pb-5 mb-4'>
                    <img src={Block} style={{ maxWidth: '370px' }} alt="" />
                </div>
            </div>
            <div className='px-0 px-md-4 px-lg-5'>
                <div className="row g-0">
                    <div className="col-7 col-md-4 ">

                    </div>
                    <div className="col col-md-4">
                        <div className="uberBlueBg ps-1 py-3 ps-md-3">
                            <span className='fw-600'>Finanu</span>
                        </div>
                    </div>
                    <div className="col col-md-4">
                        <div className="uberBlueBg2 pe-1 py-3 pe-md-3">
                            <span className='fw-600'>Finanu</span>
                        </div>
                    </div>
                </div>
                <div className="lightBlueBgUber">
                    <div className="row g-0">
                        <div className="col-7 col-md-4 text-start greyBorderRightUber greyBorderBottomUber ">
                            <div>
                                <span className='fw-600'>Gesamtberatung</span>
                            </div>
                        </div>
                        <div className="col col-md-4 greyBorderRightUber greyBorderBottomUber">
                            <svg viewBox="0 0 34 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M32 2L11.375 25L2 14.5455" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className="col col-md-4 greyBorderBottomUber">
                            <svg viewBox="0 0 34 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M32 2L11.375 25L2 14.5455" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className="col-7 col-md-4 text-start greyBorderRightUber greyBorderBottomUber">
                            <div>
                                <span className='fw-600'>Ordnungssystem</span>
                            </div>
                        </div>
                        <div className="col col-md-4 greyBorderRightUber greyBorderBottomUber">
                            <svg viewBox="0 0 34 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M32 2L11.375 25L2 14.5455" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className="col col-md-4 greyBorderBottomUber">
                            <svg  viewBox="0 0 34 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M32 2L11.375 25L2 14.5455" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className="col-7 col-md-4 text-start greyBorderRightUber greyBorderBottomUber">
                            <div>
                                <span className='fw-600'>Budget App</span>
                            </div>
                        </div>
                        <div className="col col-md-4 greyBorderRightUber greyBorderBottomUber">
                            <svg  viewBox="0 0 34 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M32 2L11.375 25L2 14.5455" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className="col col-md-4 greyBorderBottomUber">
                            <svg  viewBox="0 0 34 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M32 2L11.375 25L2 14.5455" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className="col-7 col-md-4 text-start greyBorderRightUber greyBorderBottomUber">
                            <div>
                                <span className='fw-600'>Jährliche Optimierung</span>
                            </div>
                        </div>
                        <div className="col col-md-4 greyBorderRightUber greyBorderBottomUber">
                            <svg  viewBox="0 0 34 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M32 2L11.375 25L2 14.5455" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className="col col-md-4 greyBorderBottomUber">
                            <svg  viewBox="0 0 34 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M32 2L11.375 25L2 14.5455" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className="col-7 col-md-4 text-start greyBorderRightUber greyBorderBottomUber">
                            <div>
                                <span className='fw-600'>Unabhangig</span>
                            </div>
                        </div>
                        <div className="col col-md-4 greyBorderRightUber greyBorderBottomUber">
                            <svg  viewBox="0 0 34 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M32 2L11.375 25L2 14.5455" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className="col col-md-4 greyBorderBottomUber">
                            <svg  viewBox="0 0 34 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M32 2L11.375 25L2 14.5455" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className="col-7 col-md-4 text-start greyBorderRightUber greyBorderBottomUber">
                            <div>
                                <span className='fw-600'>Exklusivvertreter</span>
                            </div>
                        </div>
                        <div className="col col-md-4 greyBorderRightUber greyBorderBottomUber">
                            <svg viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M27 2L2 27" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M2 2L27 27" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

                        </div>
                        <div className="col col-md-4 greyBorderBottomUber">
                            <svg viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M27 2L2 27" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M2 2L27 27" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className="col-7 col-md-4 text-start greyBorderRightUber">
                            <div>
                                <span className='fw-600'>Flexibilitat</span>
                            </div>
                        </div>
                        <div className="col col-md-4 greyBorderRightUber">
                            <svg  viewBox="0 0 34 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M32 2L11.375 25L2 14.5455" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className="col col-md-4">
                            <svg  viewBox="0 0 34 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M32 2L11.375 25L2 14.5455" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <SliderHausrat />
            </div>
        </div>
    )
}

export default UberUns