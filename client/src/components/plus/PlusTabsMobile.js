import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { ReactComponent as Mobilecar } from '../../assets/images/plus/carmobile.svg'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { FreeMode } from "swiper";

export default function App() {
    return (
        <>
            <div className="fs-1 secondaryColor fw-700">
                The highest level of cover
            </div>
            <Swiper
                slidesPerView={1.5}
                spaceBetween={20}
                freeMode={true}
                modules={[FreeMode]}
                className="mySwiper py-5 px-4"
            >
                <SwiperSlide className="">
                    <div>
                        <div className="styleofplustabsmobile p-4">
                            <div>
                                <Mobilecar />
                            </div>
                            <div>
                                <p className="mobiletabstitle">Car Damage</p>
                                <p className="mobiletabssubtitle">Laden Sie ire bestehende Offerte hoch oder starten Sie eine neue Anfrage.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <div className="styleofplustabsmobile">
                            <div>
                                <Mobilecar />
                            </div>
                            <div>
                                <p className="mobiletabstitle">Car Damage</p>
                                <p className="mobiletabssubtitle">Laden Sie ire bestehende Offerte hoch oder starten Sie eine neue Anfrage.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="">
                    <div>
                        <div className="styleofplustabsmobile">
                            <div>
                                <Mobilecar />
                            </div>
                            <div>
                                <p className="mobiletabstitle">Car Damage</p>
                                <p className="mobiletabssubtitle">Laden Sie ire bestehende Offerte hoch oder starten Sie eine neue Anfrage.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <div className="styleofplustabsmobile">
                            <div>
                                <Mobilecar />
                            </div>
                            <div>
                                <p className="mobiletabstitle">Car Damage</p>
                                <p className="mobiletabssubtitle">Laden Sie ire bestehende Offerte hoch oder starten Sie eine neue Anfrage.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}