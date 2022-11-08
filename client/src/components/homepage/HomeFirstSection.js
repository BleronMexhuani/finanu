import React from 'react'
import VorsorgeHome from '../../assets/images/vorsorgeHome.svg'
import VorsorgeHomeDark from '../../assets/images/vorsorgeHomeDark.svg'
import houseSvg from '../../assets/images/houseSvg.svg'
import houseDark from '../../assets/images/houseSvgDark.svg'
import AutoHome from '../../assets/images/autoHome.svg'
import AutoHomeDark from '../../assets/images/autoHomeDark.svg'
import KrankHome from '../../assets/images/krankHome.svg'
import KrankHomeDark from '../../assets/images/krankHomeDark.svg'
import Rechtsschutz from '../../assets/images/rechtsschutz.svg'
import RechtsschutzDark from '../../assets/images/rechtsschutzDark.svg'
import Finanzen from '../../assets/images/finanzenHome.svg'
import FinanzenDark from '../../assets/images/finanzenDark.svg'
import logo from "../../assets/images/logo.svg"
import stars from "../../assets/images/stars.svg"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { FreeMode, Autoplay } from "swiper";
import { Link } from "react-router-dom";
import HeroImg from '../../assets/images/heroIlu.svg'
function HomeFirstSection(props) {

    return (
        <>
        <div className="blueBackgroundDiv">
            <div className='cloudsBackground wrapDiv1'>
                <div>
                    <div className="row gx-4 gy-0 justify-content-center">
                        <div className="col-12 col-md-6 text-start my-auto">
                            <div className='pb-3'>
                                <span className='firstBlueTitle'>Informieren, Vergleichen & Abschliessen</span>
                            </div>
                            <div>
                                <span className='finanuSubTitle' style={{ fontWeight: 500 }} >
                                    Oder wünschen Sie lieber eine kostenlose Gesamtberatung von<br></br>
                                    einem unserer Kundenberatern?
                                </span>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 mt-5 mt-md-0">
                            <img className='img-fluid' src={HeroImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
                <div className="wrapDiv container-xl px-4 px-xl-0">
                    <div className="marginGutter pt-5">
                        <div className="row gx-0 gx-sm-5 gy-4 gy-sm-5 px-0 mx-0 pb-5">
                            <div className="col-12 col-sm-6 col-lg-4">
                                <div className="blueBgdiv p-5">
                                    <Link to='/finanzen/pensionsplanung-und-ruhestand'>

                                        <div className='pb-4'>
                                            {props.darkMode

                                                ? <img src={VorsorgeHomeDark} alt="" />
                                                : <img src={VorsorgeHome} alt="" />
                                            }
                                        </div>
                                        <div>
                                            <span className='servicesWhiteText'>Vorsorge & Pensionierung</span>
                                        </div>
                                    </Link>

                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-4">
                                <div className="blueBgdiv p-5">
                                    <Link to='/finanzen/haus-hypothek'>

                                        <div className='pb-4'>
                                            {props.darkMode

                                                ? <img src={houseDark} alt="" />
                                                : <img src={houseSvg} alt="" />
                                            }
                                        </div>
                                        <div>
                                            <span className='servicesWhiteText'>Wohnen, Eigenheim &
                                                Hypotheken</span>
                                        </div>
                                    </Link>

                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-4">
                                <div className="blueBgdiv p-5">
                                    <Link to="/versicherungen/auto-motorrad">

                                        <div className='pb-4'>
                                            {props.darkMode

                                                ? <img src={AutoHomeDark} alt="" />
                                                : <img src={AutoHome} alt="" />
                                            }
                                        </div>
                                        <div>
                                            <span className='servicesWhiteText'>Auto & Motorrad</span>
                                        </div>
                                    </Link>

                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-4">
                                <div className="blueBgdiv p-5">
                                    <Link to='/versicherungen/Krankenkasse'>

                                        <div className='pb-4'>
                                            {props.darkMode

                                                ? <img src={KrankHomeDark} alt="" />
                                                : <img src={KrankHome} alt="" />
                                            }
                                        </div>
                                        <div>
                                            <span className='servicesWhiteText'>Krankheit &
                                                Unfall</span>
                                        </div>
                                    </Link>

                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-4">
                                <div className="blueBgdiv p-5">
                                    <Link to='/versicherungen/Rechtsschutz'>

                                        <div className='pb-4'>
                                            {props.darkMode

                                                ? <img src={RechtsschutzDark} alt="" />
                                                : <img src={Rechtsschutz} alt="" />
                                            }
                                        </div>
                                        <div>
                                            <span className='servicesWhiteText'>Rechtsschutz</span>
                                        </div>
                                    </Link>

                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-4">
                                <div className="blueBgdiv p-5">
                                    <Link to='/finanzen/360'>
                                        <div className='pb-4'>
                                            {props.darkMode
                                                ? <img src={FinanzenDark} alt="" />
                                                : <img src={Finanzen} alt="" />
                                            }
                                        </div>
                                        <div>
                                            <span className='servicesWhiteText'>Finanzen &
                                                Budget</span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row g-0 justify-content-center">
                        <div className="col-12 col-md-7 pb-5">
                            <div className='pt-5'>
                                <img src={logo} width={250} alt="" />
                            </div>
                            <div className='pt-4'>
                                <span className='fs-4 firstBlueTitle' style={{ fontWeight: 700 }}>TRANSPARENT, SCHNELL, DIGITAL​</span>
                            </div>
                            <div className='pt-3'>
                                <span className='normalTextToWhite finanuSubTitle' style={{ fontWeight: 500 }}>Was ist finanu?</span>
                            </div>
                            <div className='pt-3'>
                                <span className='normalTextToWhite' style={{ fontWeight: 500 }}>Finanu hilft Ihnen als unabhängige Vergleichsplattform dabei sich in der
                                    unübersichtlichen Landschaft der Versicherungen und Finanzdienstleister
                                    zurechtzufinden und zu verstehen wofür Sie überhaupt zahlen.</span>
                            </div>
                            <div className='py-5'>
                                <img src={stars} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-4">
                <Swiper
                    // slidesPerView={3}
                    spaceBetween={40}
                    freeMode={false}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    className="mySwiper py-2 px-2"
                    modules={[Autoplay, FreeMode]}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                    }}
                >
                    <SwiperSlide>
                        <div className='whiteTestimonials p-4 text-start'>
                            <div>
                                <span style={{ fontWeight: 500 }}>Eine sehr Kompetente
                                    Firma. Einfache, sehr gute
                                    und seriose
                                    Verischerungsabwicklungen.
                                    Ich bedance mich bei Herr
                                    Ramadani und Co. Fur die
                                    Beratung und Versicherung.
                                    Top Leistung
                                    empfhelenswert um Eine
                                    Offerte,Beratung
                                    einzuholen!</span>
                            </div>
                            <div className='pt-4 text-end'>
                                <span style={{ fontWeight: 700 }}>Benjamin.T</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='whiteTestimonials p-4 text-start'>
                            <div>
                                <span style={{ fontWeight: 500 }}>Eine sehr Kompetente
                                    Bester Service</span>
                            </div>
                            <div className='pt-4 text-end'>
                                <span style={{ fontWeight: 700 }}>Karin.A</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='whiteTestimonials p-4 text-start'>
                            <div>
                                <span style={{ fontWeight: 500 }}>Eine sehr Kompetente
                                    Sehr gute Erfahrung mit
                                    einem Berater, der meine
                                    Bedufnisse erfullen konnte.
                                    Sie ist meiner Akte gefolgt
                                    und hat alles Notwendige
                                    von Anfag bis Ende getan.
                                    Nichts zu sagen. Danke ihr.
                                    Sehr professionell und
                                    reaktionsschnell. Ich empfehle sehr.</span>
                            </div>
                            <div className='pt-4 text-end'>
                                <span style={{ fontWeight: 700 }}>Coline.K</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='whiteTestimonials p-4 text-start'>
                            <div>
                                <span style={{ fontWeight: 500 }}>Eine sehr Kompetente
                                    Super personal sehr
                                    Freundlich. Viele angebote
                                    von allen Versicherungen in
                                    der schweiz. Professionel
                                    und schnelle bearbeitung</span>
                            </div>
                            <div className='pt-4 text-end'>
                                <span style={{ fontWeight: 700 }}>Ted.J</span>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}

export default HomeFirstSection