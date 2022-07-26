import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper';
import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { ReactComponent as Car } from '../../assets/images/auto/sliderCar.svg'
import { ReactComponent as CarDark } from '../../assets/images/plus/carDark.svg'

function PlusTabs(props) {
    const [swiperInstance, setSwiperInstance] = useState(0)
    const [active, setactive] = useState(0)



    return (
        <>
            <div className="container-xl px-4 px-xl-0">
                <div className='pb-4'>
                    <span className='fw-700 fs-1 secondaryColor'>The highest level of cover</span>
                </div>
                <div className='pb-0'>
                    <div className="row g-4 justify-content-around mb-5">
                        <div className="col-auto" >
                            <div className={`plusSliderButton px-2 ${(active === 0) ? 'sliderBtnEffect' : ''}`} onClick={() => { swiperInstance.slideToLoop(0, undefined, false); setactive(0) }}>
                                <span className='fw-600 fs-5 secondaryColor'>Car Damage</span>
                            </div>
                        </div>
                        <div className="col-auto" >
                            <div className={`plusSliderButton px-2 ${(active === 1) ? 'sliderBtnEffect' : ''}`} onClick={() => { swiperInstance.slideToLoop(1, undefined, false); setactive(1) }}>
                                <span className='fw-600 fs-5 secondaryColor'>Fire and Theft</span>
                            </div>
                        </div>

                        <div className="col-auto" >
                            <div className={`plusSliderButton px-2 ${(active === 2) ? 'sliderBtnEffect' : ''}`} onClick={() => { swiperInstance.slideToLoop(2, undefined, false); setactive(2) }}>
                                <span className='fw-600 fs-5 secondaryColor'>EU Cover for 90 Days</span>
                            </div>
                        </div>
                        <div className="col-auto" >
                            <div className={`plusSliderButton px-2 ${(active === 3) ? 'sliderBtnEffect' : ''}`} onClick={() => { swiperInstance.slideToLoop(3, undefined, false); setactive(3) }}>
                                <span className='fw-600 fs-5 secondaryColor'>Injury</span>
                            </div>
                        </div>
                        <div className="col-auto" >
                            <div className={`plusSliderButton px-2 ${(active === 4) ? 'sliderBtnEffect' : ''}`} onClick={() => { swiperInstance.slideToLoop(4, undefined, false); setactive(4) }}>
                                <span className='fw-600 fs-5 secondaryColor'>Courtesy car</span>
                            </div>
                        </div>

                        <div className="col-auto" >
                            <div className={`plusSliderButton px-2 ${(active === 5) ? 'sliderBtnEffect' : ''}`} onClick={() => { swiperInstance.slideToLoop(5, undefined, false); setactive(5) }}>
                                <span className='fw-600 fs-5 secondaryColor'>Property Damage</span>
                            </div>
                        </div>
                        <div className="col-auto" >
                            <div className={`plusSliderButton px-2 ${(active === 6) ? 'sliderBtnEffect' : ''}`} onClick={() => { swiperInstance.slideToLoop(6, undefined, false); setactive(6) }}>
                                <span className='fw-600 fs-5 secondaryColor'>Windscreen Damage</span>
                            </div>
                        </div>

                    </div>
                </div>
                <Swiper
                    onSwiper={(swiper) => setSwiperInstance(swiper)}
                    spaceBetween={30}
                    effect={"fade"}

                    fadeEffect={{
                        crossFade: true
                    }}
                    loop={true}
                    autoplay={{
                        delay: 2200,
                        disableOnInteraction: false,
                    }}
                    modules={[EffectFade, Autoplay]}
                    className="mySwiper mb-4 mb-md-2 mb-lg-0"
                    onSlideChange={(swiper) => { setactive((swiper.activeIndex - 1 > 6) ? 0 : swiper.activeIndex - 1) }}

                >

                    <SwiperSlide>
                        <div className="plusSliderBackground text-start">

                            <div className="row gx-5 gy-5 justify-content-center">
                                <div className="col-12 col-sm-6 col-lg-7 my-sm-auto order-2 order-sm-1">
                                    <div className='pb-3'>
                                        <span className='fs-1 fw-700 secondaryColor'>Car Damage</span>
                                    </div>
                                    <div>
                                        <span className='fs-5 fw-600 secondaryColor'>Laden Sie ire bestehende Offerte hoch oder starten Sie eine neue Anfrage. laden Sie ire bestehende Offerte hoch oder starten </span>
                                    </div>
                                </div>
                                <div className="col-8 col-sm order-1 order-sm-2 my-sm-auto">
                                    {props.darkMode
                                        ? <CarDark className="img-fluid" />
                                        : <Car className="img-fluid" />
                                    }
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="plusSliderBackground text-start">

                            <div className="row gx-5 gy-5 justify-content-center">
                                <div className="col-12 col-sm-6 col-lg-7 my-sm-auto order-2 order-sm-1">
                                    <div className='pb-3'>
                                        <span className='fs-1 fw-700 secondaryColor'>Car Damage 2</span>
                                    </div>
                                    <div>
                                        <span className='fs-5 fw-600 secondaryColor'>Laden Sie ire bestehende Offerte hoch oder starten Sie eine neue Anfrage. laden Sie ire bestehende Offerte hoch oder starten </span>
                                    </div>
                                </div>
                                <div className="col-8 col-sm order-1 order-sm-2 my-sm-auto">
                                    {props.darkMode
                                        ? <CarDark className="img-fluid" />
                                        : <Car className="img-fluid" />
                                    }
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="plusSliderBackground text-start">

                            <div className="row gx-5 gy-5 justify-content-center">
                                <div className="col-12 col-sm-6 col-lg-7 my-sm-auto order-2 order-sm-1">
                                    <div className='pb-3'>
                                        <span className='fs-1 fw-700 secondaryColor'>Car Damage 3</span>
                                    </div>
                                    <div>
                                        <span className='fs-5 fw-600 secondaryColor'>Laden Sie ire bestehende Offerte hoch oder starten Sie eine neue Anfrage. laden Sie ire bestehende Offerte hoch oder starten </span>
                                    </div>
                                </div>
                                <div className="col-8 col-sm order-1 order-sm-2 my-sm-auto">
                                    {props.darkMode
                                        ? <CarDark className="img-fluid" />
                                        : <Car className="img-fluid" />
                                    }
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="plusSliderBackground text-start">

                            <div className="row gx-5 gy-5 justify-content-center">
                                <div className="col-12 col-sm-6 col-lg-7 my-sm-auto order-2 order-sm-1">
                                    <div className='pb-3'>
                                        <span className='fs-1 fw-700 secondaryColor'>Car Damage4</span>
                                    </div>
                                    <div>
                                        <span className='fs-5 fw-600 secondaryColor'>Laden Sie ire bestehende Offerte hoch oder starten Sie eine neue Anfrage. laden Sie ire bestehende Offerte hoch oder starten </span>
                                    </div>
                                </div>
                                <div className="col-8 col-sm order-1 order-sm-2 my-sm-auto">
                                    {props.darkMode
                                        ? <CarDark className="img-fluid" />
                                        : <Car className="img-fluid" />
                                    }
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="plusSliderBackground text-start">

                            <div className="row gx-5 gy-5 justify-content-center">
                                <div className="col-12 col-sm-6 col-lg-7 my-sm-auto order-2 order-sm-1">
                                    <div className='pb-3'>
                                        <span className='fs-1 fw-700 secondaryColor'>Car Damage 5</span>
                                    </div>
                                    <div>
                                        <span className='fs-5 fw-600 secondaryColor'>Laden Sie ire bestehende Offerte hoch oder starten Sie eine neue Anfrage. laden Sie ire bestehende Offerte hoch oder starten </span>
                                    </div>
                                </div>
                                <div className="col-8 col-sm order-1 order-sm-2 my-sm-auto">
                                    {props.darkMode
                                        ? <CarDark className="img-fluid" />
                                        : <Car className="img-fluid" />
                                    }
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="plusSliderBackground text-start">

                            <div className="row gx-5 gy-5 justify-content-center">
                                <div className="col-12 col-sm-6 col-lg-7 my-sm-auto order-2 order-sm-1">
                                    <div className='pb-3'>
                                        <span className='fs-1 fw-700 secondaryColor'>Car Damage 6</span>
                                    </div>
                                    <div>
                                        <span className='fs-5 fw-600 secondaryColor'>Laden Sie ire bestehende Offerte hoch oder starten Sie eine neue Anfrage. laden Sie ire bestehende Offerte hoch oder starten </span>
                                    </div>
                                </div>
                                <div className="col-8 col-sm order-1 order-sm-2 my-sm-auto">
                                    {props.darkMode
                                        ? <CarDark className="img-fluid" />
                                        : <Car className="img-fluid" />
                                    }
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}

export default PlusTabs