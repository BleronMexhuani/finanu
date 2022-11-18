import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper";

function PlusReviews(props) {
    return (
        <div className="container-xl px-0">
            {(props.screenWidth > 575.98) && (
                <div>
                    <div>
                        <span className='fw-700 fs-1 secondaryColor'>Look at that! 4.5 stars on TrustPilot</span>
                    </div>
                    <div className='pb-4'>
                        <span className='secondaryColor fw-500 fs-4'>with 10.000+ reviews so far</span>
                    </div>
                </div>
            )}

            <Swiper
                slidesPerView={1.1}
                spaceBetween={20}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                loop={false}
                className="mySwiper py-4 px-4 px-xl-3"
                modules={[Autoplay]}
                breakpoints={{
                    640: {
                        slidesPerView: 1.5,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2.2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1224: {
                        slidesPerView: 3.1,
                        spaceBetween: 20,
                    },
                }}
            >
                <SwiperSlide>
                    <div className='plusReviewsDiv p-4 text-start'>
                        <div className='pb-2'>
                            <span className='fw-700 fs-5'>Benjamin.T</span>
                        </div>
                        <div className='pb-3'>
                            <svg width="121" height="25" viewBox="0 0 121 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="21" height="25" fill="#50B8E7" />
                                <rect x="25" width="21" height="25" fill="#50B8E7" />
                                <rect x="50" width="21" height="25" fill="#50B8E7" />
                                <rect x="75" width="21" height="25" fill="#50B8E7" />
                                <rect x="100" width="21" height="25" fill="#50B8E7" />
                                <path d="M11 5L13.472 9.93691L19 10.7334L15 14.5741L15.944 20L11 17.4369L6.056 20L7 14.5741L3 10.7334L8.528 9.93691L11 5Z" fill="white" />
                                <path d="M36 5L38.472 9.93691L44 10.7334L40 14.5741L40.944 20L36 17.4369L31.056 20L32 14.5741L28 10.7334L33.528 9.93691L36 5Z" fill="white" />
                                <path d="M61 5L63.472 9.93691L69 10.7334L65 14.5741L65.944 20L61 17.4369L56.056 20L57 14.5741L53 10.7334L58.528 9.93691L61 5Z" fill="white" />
                                <path d="M86 5L88.472 9.93691L94 10.7334L90 14.5741L90.944 20L86 17.4369L81.056 20L82 14.5741L78 10.7334L83.528 9.93691L86 5Z" fill="white" />
                                <path d="M111 5L113.472 9.93691L119 10.7334L115 14.5741L115.944 20L111 17.4369L106.056 20L107 14.5741L103 10.7334L108.528 9.93691L111 5Z" fill="white" />
                            </svg>

                        </div>
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

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='plusReviewsDiv p-4 text-start'>
                        <div className='pb-2'>
                            <span className='fw-700 fs-5'>Benjamin.T</span>
                        </div>
                        <div className='pb-3'>
                            <svg width="121" height="25" viewBox="0 0 121 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="21" height="25" fill="#50B8E7" />
                                <rect x="25" width="21" height="25" fill="#50B8E7" />
                                <rect x="50" width="21" height="25" fill="#50B8E7" />
                                <rect x="75" width="21" height="25" fill="#50B8E7" />
                                <rect x="100" width="21" height="25" fill="#50B8E7" />
                                <path d="M11 5L13.472 9.93691L19 10.7334L15 14.5741L15.944 20L11 17.4369L6.056 20L7 14.5741L3 10.7334L8.528 9.93691L11 5Z" fill="white" />
                                <path d="M36 5L38.472 9.93691L44 10.7334L40 14.5741L40.944 20L36 17.4369L31.056 20L32 14.5741L28 10.7334L33.528 9.93691L36 5Z" fill="white" />
                                <path d="M61 5L63.472 9.93691L69 10.7334L65 14.5741L65.944 20L61 17.4369L56.056 20L57 14.5741L53 10.7334L58.528 9.93691L61 5Z" fill="white" />
                                <path d="M86 5L88.472 9.93691L94 10.7334L90 14.5741L90.944 20L86 17.4369L81.056 20L82 14.5741L78 10.7334L83.528 9.93691L86 5Z" fill="white" />
                                <path d="M111 5L113.472 9.93691L119 10.7334L115 14.5741L115.944 20L111 17.4369L106.056 20L107 14.5741L103 10.7334L108.528 9.93691L111 5Z" fill="white" />
                            </svg>

                        </div>
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

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='plusReviewsDiv p-4 text-start'>
                        <div className='pb-2'>
                            <span className='fw-700 fs-5'>Benjamin.T</span>
                        </div>
                        <div className='pb-3'>
                            <svg width="121" height="25" viewBox="0 0 121 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="21" height="25" fill="#50B8E7" />
                                <rect x="25" width="21" height="25" fill="#50B8E7" />
                                <rect x="50" width="21" height="25" fill="#50B8E7" />
                                <rect x="75" width="21" height="25" fill="#50B8E7" />
                                <rect x="100" width="21" height="25" fill="#50B8E7" />
                                <path d="M11 5L13.472 9.93691L19 10.7334L15 14.5741L15.944 20L11 17.4369L6.056 20L7 14.5741L3 10.7334L8.528 9.93691L11 5Z" fill="white" />
                                <path d="M36 5L38.472 9.93691L44 10.7334L40 14.5741L40.944 20L36 17.4369L31.056 20L32 14.5741L28 10.7334L33.528 9.93691L36 5Z" fill="white" />
                                <path d="M61 5L63.472 9.93691L69 10.7334L65 14.5741L65.944 20L61 17.4369L56.056 20L57 14.5741L53 10.7334L58.528 9.93691L61 5Z" fill="white" />
                                <path d="M86 5L88.472 9.93691L94 10.7334L90 14.5741L90.944 20L86 17.4369L81.056 20L82 14.5741L78 10.7334L83.528 9.93691L86 5Z" fill="white" />
                                <path d="M111 5L113.472 9.93691L119 10.7334L115 14.5741L115.944 20L111 17.4369L106.056 20L107 14.5741L103 10.7334L108.528 9.93691L111 5Z" fill="white" />
                            </svg>

                        </div>
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

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='plusReviewsDiv p-4 text-start'>
                        <div className='pb-2'>
                            <span className='fw-700 fs-5'>Benjamin.T</span>
                        </div>
                        <div className='pb-3'>
                            <svg width="121" height="25" viewBox="0 0 121 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="21" height="25" fill="#50B8E7" />
                                <rect x="25" width="21" height="25" fill="#50B8E7" />
                                <rect x="50" width="21" height="25" fill="#50B8E7" />
                                <rect x="75" width="21" height="25" fill="#50B8E7" />
                                <rect x="100" width="21" height="25" fill="#50B8E7" />
                                <path d="M11 5L13.472 9.93691L19 10.7334L15 14.5741L15.944 20L11 17.4369L6.056 20L7 14.5741L3 10.7334L8.528 9.93691L11 5Z" fill="white" />
                                <path d="M36 5L38.472 9.93691L44 10.7334L40 14.5741L40.944 20L36 17.4369L31.056 20L32 14.5741L28 10.7334L33.528 9.93691L36 5Z" fill="white" />
                                <path d="M61 5L63.472 9.93691L69 10.7334L65 14.5741L65.944 20L61 17.4369L56.056 20L57 14.5741L53 10.7334L58.528 9.93691L61 5Z" fill="white" />
                                <path d="M86 5L88.472 9.93691L94 10.7334L90 14.5741L90.944 20L86 17.4369L81.056 20L82 14.5741L78 10.7334L83.528 9.93691L86 5Z" fill="white" />
                                <path d="M111 5L113.472 9.93691L119 10.7334L115 14.5741L115.944 20L111 17.4369L106.056 20L107 14.5741L103 10.7334L108.528 9.93691L111 5Z" fill="white" />
                            </svg>

                        </div>
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

                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default PlusReviews