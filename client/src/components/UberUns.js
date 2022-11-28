import React from 'react'
import { ReactComponent as Idea } from '../assets/images/UberUns.svg'
import { ReactComponent as IdeaMobile } from '../assets/images/UberUns-Mobile.svg'
import { ReactComponent as IdeaDark } from '../assets/images/UberUns-Dark.svg'
import { ReactComponent as IdeaMobileDark } from '../assets/images/UberUns-Dark-Mobile.svg'

import Muscle from '../assets/images/uberUns/muscle.svg'
import '../assets/css/uberUns.css'
import ToggleDarkMode from "../components/ToggleDarkMode";

import SliderHausrat from './hausrat/SliderHausrat'
import { useState, useEffect } from 'react'

function UberUns(props) {

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
        <div className="wrapDiv container-xl px-4 px-xl-0 mx-auto">
            <div className='pb-5'>
                <span className='fw-800 firstBlueTitle fs-1'>Über uns</span>
            </div>

            <div className='bodyCounterPadding'>

                {(screenWidth > 575.98) && (

                    <>
                        {props.darkMode

                            ? <IdeaDark style={{ maxWidth: 'max-content' }} />
                            : <Idea style={{ maxWidth: 'max-content' }} />

                        }
                    </>
                )}
                {(screenWidth < 575.98) && (
                    <>
                        {props.darkMode

                            ? <IdeaMobileDark style={{ maxWidth: 'max-content' }} />
                            : <IdeaMobile style={{ maxWidth: 'max-content' }} />
                        }
                    </>

                )}

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
                                <svg xmlns="http://www.w3.org/2000/svg" width="138" height="109" viewBox="0 0 128 79" fill="none">
                                    <path d="M87.5 5.42188C44.3 -11.3781 11.8333 23.7553 1 42.9219C65 120.922 129 45.5128 126.5 40.5128C123 33.5128 105 14.9219 87.5 5.42188Z" fill="white" stroke="black" stroke-width="1.5" />
                                    <path d="M90.25 38.0957C90.25 45.5753 86.6004 52.3833 81.0905 57.337C75.5779 62.2929 68.2525 65.3457 61 65.3457C53.7747 65.3457 47.9861 62.3171 43.9891 57.4204C39.9811 52.5102 37.75 45.687 37.75 38.0957C37.75 23.0553 50.9932 10.3457 65.5 10.3457C79.9019 10.3457 90.25 22.9435 90.25 38.0957Z" fill="#BEE8FF" stroke="black" stroke-width="1.5" />
                                    <path d="M77.25 29.1488C77.25 30.5255 76.5463 31.8177 75.4205 32.785C74.2933 33.7536 72.7971 34.3457 71.3333 34.3457C69.8942 34.3457 68.7699 33.7749 67.9943 32.8668C67.209 31.9473 66.75 30.6419 66.75 29.1488C66.75 26.3193 69.3919 23.8457 72.3333 23.8457C75.1671 23.8457 77.25 26.2097 77.25 29.1488Z" fill="#BEE8FF" stroke="black" stroke-width="1.5" />
                                    <path d="M13 37.5957C14.1667 38.929 16.7 41.6957 17.5 42.0957" stroke="black" stroke-width="0.5" stroke-linecap="round" />
                                    <path d="M117.68 39.0957C117.623 42.2575 114.096 46.9032 113.094 47.8692" stroke="black" stroke-width="0.5" stroke-linecap="round" />
                                    <path d="M9.5 43.0957C14.5 51.0957 21 53.5957 24.4344 55.2348" stroke="black" stroke-width="0.5" stroke-linecap="round" />
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
                                    <path d="M1 112V27C1 26.4477 1.44772 26 2 26H6C6.55228 26 7 26.4477 7 27V100.927C7 101.48 7.44772 101.927 8 101.927H19C19.5523 101.927 20 101.48 20 100.927V79.7273C20 79.175 20.4477 78.7273 21 78.7273H29.5C30.0523 78.7273 30.5 79.175 30.5 79.7273V100.927C30.5 101.48 30.9477 101.927 31.5 101.927H38.5C39.0523 101.927 39.5 101.48 39.5 100.927V58.1091C39.5 57.5568 39.9477 57.1091 40.5 57.1091H50C50.5523 57.1091 51 57.5568 51 58.1091V100.927C51 101.48 51.4477 101.927 52 101.927H62C62.5523 101.927 63 101.48 63 100.927V74.9818C63 74.4295 63.4477 73.9818 64 73.9818H71C71.5523 73.9818 72 74.4295 72 74.9818V100.927C72 101.48 72.4477 101.927 73 101.927H81.5C82.0523 101.927 82.5 101.48 82.5 100.927V56.5273C82.5 55.975 82.9477 55.5273 83.5 55.5273H93.5C94.0523 55.5273 94.5 55.975 94.5 56.5273V100.927C94.5 101.48 94.9477 101.927 95.5 101.927H100C100.552 101.927 101 102.375 101 102.927V112C101 112.552 100.552 113 100 113H2C1.44772 113 1 112.552 1 112Z" fill="white" stroke="black" stroke-width="1.5" />
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

            <div className='px-0 px-md-4 px-lg-5 bodyCounterPadding'>
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