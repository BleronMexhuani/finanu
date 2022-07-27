import React from 'react'
import houseSvg from '../../assets/images/houseSvg.svg'
import logo from "../../assets/images/logo.svg"
import stars from "../../assets/images/stars.svg"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { FreeMode, Autoplay } from "swiper";
function HomeFirstSection() {
    
    return (
        <>
            <div className='cloudsBackground wrapDiv1'>
                <div>
                    <div className="row g-0 justify-content-center">
                        <div className="col-12 col-md-9 text-center">
                            <div className='pb-3'>
                                <span className='firstBlueTitle fs-2'>Informieren, Vergleichen & Abschliessen</span>
                            </div>
                            <div className='pb-5'>
                                <span style={{fontWeight: 500}} >
                                    Oder wünschen Sie lieber eine kostenlose Gesamtberatung von<br></br>
                                    einem unserer Kundenberatern?
                                </span>
                            </div>
                            <div>
                                <button className='firstSectionBlueBtn1'>Jetzt Vergleichen</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="blueBackgroundDiv">
                <div className="wrapDiv container-xl px-4 px-xl-0">
                    <div className="marginGutter pt-5">
                        <div className="row gx-0 gx-sm-5 gy-4 gy-sm-5 px-0 mx-0 pb-5">
                            <div className="col-12 col-sm-6 col-lg-4">
                                <div className="blueBgdiv p-5">
                                    <div className='pb-4'>
                                        <img src={houseSvg} alt="" />
                                    </div>
                                    <div>
                                        <span className='servicesWhiteText'>Wohnen, Eigenheim &
                                            Hypotheken</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-4">
                                <div className="blueBgdiv p-5">
                                    <div className='pb-4'>
                                        <img src={houseSvg} alt="" />
                                    </div>
                                    <div>
                                        <span className='servicesWhiteText'>Wohnen, Eigenheim &
                                            Hypotheken</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-4">
                                <div className="blueBgdiv p-5">
                                    <div className='pb-4'>
                                        <img src={houseSvg} alt="" />
                                    </div>
                                    <div>
                                        <span className='servicesWhiteText'>Wohnen, Eigenheim &
                                            Hypotheken</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-4">
                                <div className="blueBgdiv p-5">
                                    <div className='pb-4'>
                                        <img src={houseSvg} alt="" />
                                    </div>
                                    <div>
                                        <span className='servicesWhiteText'>Wohnen, Eigenheim &
                                            Hypotheken</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-4">
                                <div className="blueBgdiv p-5">
                                    <div className='pb-4'>
                                        <img src={houseSvg} alt="" />
                                    </div>
                                    <div>
                                        <span className='servicesWhiteText'>Wohnen, Eigenheim &
                                            Hypotheken</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-4">
                                <div className="blueBgdiv p-5">
                                    <div className='pb-4'>
                                        <img src={houseSvg} alt="" />
                                    </div>
                                    <div>
                                        <span className='servicesWhiteText'>Wohnen, Eigenheim &
                                            Hypotheken</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row g-0 justify-content-center">
                        <div className="pt-5 mt-5 col-12 col-md-7">
                            <div className='pt-5'>
                                <img src={logo} width={250} alt="" />
                            </div>
                            <div className='pt-4'>
                                <span className='fs-4 firstBlueTitle' style={{ fontWeight: 700 }}>TRANSPARENT, SCHNELL, DIGITAL​</span>
                            </div>
                            <div className='pt-3'>
                                <span className='fs-5' style={{ fontWeight: 500 }}>Was ist finanu?</span>
                            </div>
                            <div className='pt-3'>
                                <span style={{ fontWeight: 500 }}>Finanu hilft Ihnen als unabhängige Vergleichsplattform dabei sich in der
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
                    spaceBetween= {40}
                    freeMode={false}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                      }}
                    loop={true}
                    className="mySwiper py-2 px-2"
                    modules={[Autoplay,FreeMode]}
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