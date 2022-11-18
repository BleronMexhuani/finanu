import React from 'react'
import { ReactComponent as Idea } from '../assets/images/uberUns/idea.svg'
import Muscle from '../assets/images/uberUns/muscle.svg'
import Block from '../assets/images/uberUns/blocks.svg'
import '../assets/css/uberUns.css'
import SliderHausrat from './hausrat/SliderHausrat'
function UberUns() {
    return (
        <div className="wrapDiv container-xl px-4 px-xl-0 mx-auto">
            <div className='pb-5'>
                <span className='fw-800 firstBlueTitle fs-1'>Über uns</span>
            </div>
            <div className='bodyCounterPadding'>
                <Idea style={{ maxWidth: '700px' }} />
            </div>
            <div className="row gx-4 justify-content-between bodyCounterPadding">
                <div className="col-12 col-md-5 col-xl-4 text-start">

                    <div className='pb-4'>
                        <span className='fw-700 firstBlueTitle fs-1'>Unsere Aufgabe</span>
                    </div>

                </div>
                <div className="col-12 col-md-6 col-lg-7 col-xl-7 text-start">
                    <div className=''>
                        <span className='fw-500 fs-5 normalTextToWhite'>Finanu hilft Ihnen als unabhängige Vergleichsplattform dabei sich in der unübersichtlichen Landschaft der Versicherungen und Finanzdienstleister zurechtzufinden. Mit wenigen Klicks können Sie verschiedene Angebote vergleichen und unverbindliche Offerten anfordern. Des Weiteren haben Sie die Option weitere Fragen via Chatbot, Live Chat oder bei einer persönlichen Beratung zu klären. Finanu unterstützt und begleitet Sie kostenlos bis zum Abschluss.</span>
                    </div>
                </div>
            </div>


            <div className="col-12 col-sm-12 col-md-10 col-lg-9 col-xl-8 mx-auto bodyCounterPadding">
                <div className="row g-4 justify-content-center">
                    <div className="col-12 col-sm-6 col-md-4">
                        <div className="whiteBgUber px-5 py-5 h-100">
                            <div>
                                <img src={Muscle} alt="" />
                            </div>
                            <div className='pt-4'>
                                <span className='fw-500 fs-5'>Unabhängig</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4">
                        <div className="whiteBgUber px-5 py-5 h-100">
                            <div>
                                <svg width="129" height="109" viewBox="0 0 129 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.12305 44C20.7897 11.6667 72.823 -33.1998 127.623 42.0002" stroke="black" stroke-width="1.5" />
                                    <path d="M127.5 41.5C107.756 69.5886 56.138 108.827 1.12305 43.4995" stroke="black" stroke-width="1.5" />
                                    <path d="M92.373 41C92.373 48.4796 88.7234 55.2876 83.2135 60.2413C77.701 65.1972 70.3756 68.25 63.123 68.25C55.8977 68.25 50.1091 65.2214 46.1122 60.3247C42.1041 55.4145 39.873 48.5912 39.873 41C39.873 25.9595 53.1162 13.25 67.623 13.25C82.025 13.25 92.373 25.8478 92.373 41Z" fill="#BEE8FF" stroke="black" stroke-width="1.5" />
                                    <path d="M79.373 32.0531C79.373 33.4298 78.6694 34.722 77.5436 35.6893C76.4163 36.6579 74.9201 37.25 73.4564 37.25C72.0173 37.25 70.8929 36.6792 70.1174 35.7711C69.332 34.8516 68.873 33.5462 68.873 32.0531C68.873 29.2236 71.515 26.75 74.4564 26.75C77.2902 26.75 79.373 29.114 79.373 32.0531Z" fill="#BEE8FF" stroke="black" stroke-width="1.5" />
                                    <path d="M15.123 40.5C16.2897 41.8333 18.823 44.6 19.623 45" stroke="black" stroke-width="0.5" stroke-linecap="round" />
                                    <path d="M119.803 42C119.746 45.1618 116.219 49.8075 115.217 50.7735" stroke="black" stroke-width="0.5" stroke-linecap="round" />
                                    <path d="M11.623 46C16.623 54 23.123 56.5 26.5574 58.1391" stroke="black" stroke-width="0.5" stroke-linecap="round" />
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
                                <svg xmlns="http://www.w3.org/2000/svg" width="121" height="109" viewBox="0 0 121 114" fill="none">
                                    <path d="M1 112V27C1 26.4477 1.44772 26 2 26H6C6.55228 26 7 26.4477 7 27V100.927C7 101.48 7.44772 101.927 8 101.927H19C19.5523 101.927 20 101.48 20 100.927V79.7273C20 79.175 20.4477 78.7273 21 78.7273H29.5C30.0523 78.7273 30.5 79.175 30.5 79.7273V100.927C30.5 101.48 30.9477 101.927 31.5 101.927H38.5C39.0523 101.927 39.5 101.48 39.5 100.927V58.1091C39.5 57.5568 39.9477 57.1091 40.5 57.1091H50C50.5523 57.1091 51 57.5568 51 58.1091V100.927C51 101.48 51.4477 101.927 52 101.927H62C62.5523 101.927 63 101.48 63 100.927V74.9818C63 74.4295 63.4477 73.9818 64 73.9818H71C71.5523 73.9818 72 74.4295 72 74.9818V100.927C72 101.48 72.4477 101.927 73 101.927H81.5C82.0523 101.927 82.5 101.48 82.5 100.927V56.5273C82.5 55.975 82.9477 55.5273 83.5 55.5273H93.5C94.0523 55.5273 94.5 55.975 94.5 56.5273V100.927C94.5 101.48 94.9477 101.927 95.5 101.927H100C100.552 101.927 101 102.375 101 102.927V112C101 112.552 100.552 113 100 113H2C1.44772 113 1 112.552 1 112Z" stroke="black" stroke-width="1.5" />
                                    <path d="M91 63V101.5M47.5 63V101.5M27.5 83V101M65.5 79V100.5M65.5 109.5H97" stroke="black" stroke-width="0.5" />
                                    <path d="M16.3017 67.7242L13.14 64.2111C12.782 63.8134 12.8006 63.2044 13.182 62.8292L42.4138 34.0766C42.7544 33.7416 43.2845 33.6943 43.679 33.9637L63.0263 47.1765C63.3197 47.3769 63.6973 47.4065 64.0184 47.2545L72.4281 43.2709C72.7773 43.1055 73 42.7544 73 42.368V36.8415C73 36.6202 72.9244 36.403 72.791 36.2264C64.7288 25.5512 66.5076 13.4851 77.6734 1.84384C78.1005 1.39859 78.8362 1.46719 79.1843 1.97656C92.1164 20.9001 80.9748 32.5168 79.5 33.5C78.3 34.3 78.5 23.5 77.5 14C75 24 75.7 41.8 76.5 41C77.5 40 103 25.5 108 23.5C104.4 23.1 96 25.5 91.5 28C100.744 9.99774 103.834 18.0356 119.197 18.4812C119.853 18.5002 120.33 19.143 120.148 19.7731C112.931 44.7076 95.9591 35.9918 93.5 35.5C91.5417 35.1083 72.4859 47.1483 64.0257 54.0653C63.7042 54.3282 63.2605 54.3656 62.8982 54.1624L43.6541 43.3669C43.2665 43.1495 42.7819 43.2139 42.4646 43.5251L17.7452 67.7691C17.3389 68.1676 16.6824 68.1472 16.3017 67.7242Z" fill="#BEE8FF" stroke="black" stroke-width="1.5" />
                                </svg>


                            </div>
                            <div className='pt-4'>
                                <span className='fw-500 fs-5'>Nachhaltig</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=''>

                <div className="row gx-4 justify-content-between bodyCounterPadding">
                    <div className="col-12 col-md-5 col-xl-4 text-start">


                        <div className='pb-4' style={{ wordBreak: 'break-all' }}>
                            <span className='fw-700 firstBlueTitle fs-1'>Unternehmensphilosophie</span>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-7 col-xl-7 text-start">
                        <div className=''>
                            <span className='fw-500 fs-5 normalTextToWhite'>
                                Unsere Unternehmensphilosophie basiert auf den Grundsätzen: Unabhängigkeit, Objektivität, Kompetenz, Leidenschaft und Vertraulichkeit. Als unabhängiger Finanzdienstleister beraten wir unsere Kunden individuell. Wir bieten Ihnen nachhaltige Konzepte, ob als Privatperson oder KMU. Wir sorgen für Ihre finanzielle Absicherung unter dem Aspekt der grösst möglichen Freiheit. Unsere Bewertungen erfolgen unabhängig von Dritten, unsere Beratung berücksichtigt Chancen und Risiken. Wir engagieren uns für unsere Kunden voll Leidenschaft und beraten kompetent und zuverlässig.
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='px-0 px-md-4 px-lg-5'>
                <div className="row g-0">
                    <div className="col-6 col-md-4 ">

                    </div>
                    <div className="col col-md-4">
                        <div className="uberBlueBg ps-1 py-3 ps-md-0">
                            <span className='fw-600'>Finanu</span>
                        </div>
                    </div>
                    <div className="col col-md-4">
                        <div className="uberBlueBg2 pe-1 py-3 pe-md-0">
                            <span className='fw-600'>Klassische</span>
                        </div>
                    </div>
                </div>
                <div className="lightBlueBgUber">
                    <div className="row g-0">
                        <div className="col-6 col-md-4 text-start greyBorderRightUber greyBorderBottomUber ">
                            <div className=''>
                                <span className='fw-600'>Gesamtberatung</span>
                            </div>
                        </div>
                        <div className="col col-md-4 greyBorderRightUber greyBorderBottomUber">
                            <svg viewBox="0 0 34 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M32 2L11.375 25L2 14.5455" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className="col col-md-4 greyBorderBottomUber">
                            <svg viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M27 2L2 27" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M2 2L27 27" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className="col-6 col-md-4 text-start greyBorderRightUber greyBorderBottomUber">
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
                            <svg viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M27 2L2 27" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M2 2L27 27" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className="col-6 col-md-4 text-start greyBorderRightUber greyBorderBottomUber">
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
                            <svg viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M27 2L2 27" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M2 2L27 27" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className="col-6 col-md-4 text-start greyBorderRightUber greyBorderBottomUber">
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
                            <svg viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M27 2L2 27" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M2 2L27 27" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className="col-6 col-md-4 text-start greyBorderRightUber greyBorderBottomUber">
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
                            <svg viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M27 2L2 27" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M2 2L27 27" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className="col-6 col-md-4 text-start greyBorderRightUber greyBorderBottomUber">
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
                            <svg viewBox="0 0 34 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M32 2L11.375 25L2 14.5455" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className="col-6 col-md-4 text-start greyBorderRightUber">
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
                            <svg viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M27 2L2 27" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M2 2L27 27" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
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