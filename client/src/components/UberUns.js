import React from 'react'
import Idea from '../assets/images/uberUns/idea.svg'
import Muscle from '../assets/images/uberUns/muscle.svg'
import Block from '../assets/images/uberUns/blocks.svg'
import '../assets/css/uberUns.css'
import SliderHausrat from './hausrat/SliderHausrat'
function UberUns() {
    return (
        <div className="wrapDiv container-xl px-4 px-xl-0 mx-auto">
            <div className="row gx-4 gy-0 mb-5 pb-5">
                <div className="col-12 col-md-6 text-start">
                    <div className='pb-4'>
                        <span className='fw-800 firstBlueTitle'>About us</span>
                    </div>
                    <div className='pb-3'>
                        <span className='fw-700 finanuSubTitle'>UNSERE AUFGABE</span>
                    </div>
                    <div className=''>
                        <span className='normalTextToWhite'>Finanu hilft Ihnen als unabhängige Vergleichsplattform dabei sich in der unübersichtlichen Landschaft der Versicherungen und Finanzdienstleister zurechtzufinden. Mit wenigen Klicks können Sie verschiedene Angebote vergleichen und unverbindliche Offerten anfordern. Des Weiteren haben Sie die Option weitere Fragen via Chatbot, Live Chat oder bei einer persönlichen Beratung zu klären. Finanu unterstützt und begleitet Sie kostenlos bis zum Abschluss.</span>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div className=''>
                        <img src={Idea} alt="" />
                    </div>
                </div>
            </div>


            <div className="col-12 col-sm-12 col-md-10 col-lg-9 col-xl-8 mx-auto bodyCounterPadding">
                <div className="row g-4">
                    <div className="col-12 col-sm-6 col-md-4">
                        <div className="whiteBgUber px-5 py-5 h-100">
                            <div>
                                <img src={Muscle} alt="" />
                            </div>
                            <div className='pt-4'>
                                <span className='fw-500 fs-5'>Independent</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4">
                        <div className="whiteBgUber px-5 py-5 h-100">
                            <div>
                                <svg width="86" height="109" viewBox="0 0 128 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 44C20.6667 11.6667 72.7 -33.1998 127.5 42.0002" stroke="black" />
                                    <path d="M127.5 41.9996C107.756 70.0882 56.0149 108.827 1 43.4995" stroke="black" />
                                    <path d="M92.5 41C92.5 48.5637 88.8096 55.4358 83.2576 60.4272C77.7039 65.4201 70.3203 68.5 63 68.5C55.6978 68.5 49.8388 65.4362 45.7955 60.4828C41.7448 55.5204 39.5 48.6382 39.5 41C39.5 25.8184 52.8582 13 67.5 13C82.0719 13 92.5 25.7439 92.5 41Z" stroke="black" />
                                    <path d="M79.5 32.0531C79.5 33.5183 78.7515 34.8753 77.5835 35.879C76.4145 36.8834 74.8614 37.5 73.3333 37.5C71.8217 37.5 70.6276 36.8976 69.8042 35.9335C68.9743 34.9617 68.5 33.5959 68.5 32.0531C68.5 29.072 71.2678 26.5 74.3333 26.5C77.3271 26.5 79.5 28.9989 79.5 32.0531Z" stroke="black" />
                                    <path d="M15 40.5C16.1667 41.8333 18.7 44.6 19.5 45" stroke="black" />
                                    <path d="M119.68 42C119.623 45.1618 116.096 49.8075 115.094 50.7735" stroke="black" />
                                    <path d="M11.5 46C16.5 54 23 56.5 26.4344 58.1391" stroke="black" />
                                    <path d="M51.0455 57.1576C52.8437 59.4819 54.9505 61.52 57.2902 63.0982C48.0683 58.698 41.6868 48.8949 41.8076 37.9929C41.9402 26.029 49.8786 17.3412 60.7366 14.6624C57.5719 15.986 54.6579 17.9696 52.1942 20.4082C47.5026 25.0519 44.4094 31.3792 44.3358 38.0209C44.2625 44.6356 46.8334 51.7131 51.0455 57.1576ZM82.7113 17.6503C89.8449 21.8698 94.4888 29.2879 94.3859 38.5755C94.2651 49.4775 87.668 59.1368 78.3507 63.3316C80.7249 61.8056 82.8764 59.8147 84.7256 57.5309C89.0573 52.181 91.7844 45.1621 91.8577 38.5475C91.9484 30.3633 88.5023 22.4805 82.7113 17.6503Z" fill="#70B5E9" stroke="#70B5E9" />
                                </svg>
                            </div>
                            <div className='pt-4'>
                                <span className='fw-500 fs-5'>Transparent</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4">
                        <div className="whiteBgUber px-5 py-5 h-100">
                            <div>
                                <svg width="86" height="109" viewBox="0 0 156 164" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.1203 53.4151C41.3956 33.764 52.7529 17.8698 93.0126 34.3977C104.295 39.0297 113.396 47.6478 120.193 57.7745V57.7745M120.193 57.7745C117.255 56.0489 110.54 52.9391 107.185 54.3039M120.193 57.7745C119.292 54.3116 118.963 46.3976 121.908 44.4211" stroke="#70B5E9" strokeWidth="3" />
                                    <path d="M138.878 114.498C130.711 123.782 100.607 164.154 59.9173 132.288C50.3728 124.813 44.2174 114.011 39.3162 102.923V102.923M39.3162 102.923C41.7574 105.148 47.4448 109.44 50.6647 108.81M39.3162 102.923C39.6845 106.395 38.9578 113.985 36.031 115.278" stroke="#70B5E9" strokeWidth="3" />
                                    <path d="M139.332 114.307C110.777 144.207 46.2649 182.549 13.2254 101.269C12.1415 98.6025 11.6148 95.6696 11.6148 92.7911C11.6148 85.602 11.6148 78.666 11.6148 75.6908M11.6148 75.6908C13.5499 79.2664 18.5812 86.6323 23.2254 87.4904M11.6148 75.6908C10.0667 79.624 4.64837 87.4904 0.00410461 87.4904" stroke="black" />
                                    <path d="M92.8892 105.879C36.5862 107.964 47.3909 78.5309 63.9131 59.612C67.4257 55.5898 72.7279 53.5212 78.0515 53.9426C132.45 58.2486 97.3205 105.715 92.8892 105.879Z" stroke="black" />
                                    <path d="M52.0059 93.999C57.1175 101.007 89.5059 105.499 104.506 90.999" stroke="black" />
                                    <path d="M99.505 59.9993C91.5048 54.9996 68.5059 57.4997 56.0059 70.4995" stroke="black" />
                                    <path d="M16.2598 53.6306C44.8305 21.2504 110.404 -13.8795 142.495 67.9892C143.512 70.5831 144.006 73.4236 144.004 76.2097C143.998 84.2176 143.977 92.1374 143.977 95.4285M143.977 95.4285C142.042 91.5583 137.011 83.5856 132.366 82.6567M143.977 95.4285C145.525 91.1712 150.943 82.6567 155.588 82.6567" stroke="black" />
                                </svg>

                            </div>
                            <div className='pt-4'>
                                <span className='fw-500 fs-5'>Sustainable</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row gx-4 gy-0'>
                <div className="col-12 col-md-6">
                    <div className=''>
                        <img src={Block} style={{ maxWidth: '370px' }} alt="" />
                    </div>
                </div>
                <div className="col-12 col-md-6 text-start">
                    <div className='pb-3' style={{ wordBreak: 'break-all' }}>
                        <span className='fw-700 finanuSubTitle '>UNTERNEHMENSPHILOSOPHIE</span>
                    </div>
                    <div className=''>
                        <span className='normalTextToWhite'>Unsere Unternehmensphilosophie basiert auf den Grundsätzen: Unabhängigkeit, Objektivität, Kompetenz, Leidenschaft und Vertraulichkeit. Als unabhängiger Finanzdienstleister beraten wir unsere Kunden individuell. Wir bieten Ihnen nachhaltige Konzepte, ob als Privatperson oder KMU. Wir sorgen für Ihre finanzielle Absicherung unter dem Aspekt der grösst möglichen Freiheit. Unsere Bewertungen erfolgen unabhängig von Dritten, unsere Beratung berücksichtigt Chancen und Risiken. Wir engagieren uns für unsere Kunden voll Leidenschaft und beraten kompetent und zuverlässig. </span>
                    </div>
                </div>
            </div>
            <div className='px-0 px-md-4 px-lg-5'>
                <div className="row g-0">
                    <div className="col-7 col-md-4 ">

                    </div>
                    <div className="col col-md-4">
                        <div className="uberBlueBg ps-1 py-3 ps-md-0">
                            <span className='fw-600'>Finanu</span>
                        </div>
                    </div>
                    <div className="col col-md-4">
                        <div className="uberBlueBg2 pe-1 py-3 pe-md-0">
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
                            <svg viewBox="0 0 34 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M32 2L11.375 25L2 14.5455" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className="col-7 col-md-4 text-start greyBorderRightUber greyBorderBottomUber">
                            <div>
                                <span className='fw-600'>Budget App</span>
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
                                <span className='fw-600'>Jährliche Optimierung</span>
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
                                <span className='fw-600'>Unabhangig</span>
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
                            <svg viewBox="0 0 34 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M32 2L11.375 25L2 14.5455" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className="col col-md-4">
                            <svg viewBox="0 0 34 27" fill="none" xmlns="http://www.w3.org/2000/svg">
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