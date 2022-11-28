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
                    <div className='pb-3'>
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
                    1524: {
                        slidesPerView: 4,
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
                            <svg width="121" height="20" viewBox="0 0 121 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.4786 0.873535L13.5686 7.13354L20.4786 8.14354L15.4786 13.0135L16.6586 19.8935L10.4786 16.6435L4.29864 19.8935L5.47864 13.0135L0.478638 8.14354L7.38864 7.13354L10.4786 0.873535Z" fill="#50B8E7" />
                                <path d="M35.4786 0.873535L38.5686 7.13354L45.4786 8.14354L40.4786 13.0135L41.6586 19.8935L35.4786 16.6435L29.2986 19.8935L30.4786 13.0135L25.4786 8.14354L32.3886 7.13354L35.4786 0.873535Z" fill="#50B8E7" />
                                <path d="M60.4786 0.873535L63.5686 7.13354L70.4786 8.14354L65.4786 13.0135L66.6586 19.8935L60.4786 16.6435L54.2986 19.8935L55.4786 13.0135L50.4786 8.14354L57.3886 7.13354L60.4786 0.873535Z" fill="#50B8E7" />
                                <path d="M85.4786 0.873535L88.5686 7.13354L95.4786 8.14354L90.4786 13.0135L91.6586 19.8935L85.4786 16.6435L79.2986 19.8935L80.4786 13.0135L75.4786 8.14354L82.3886 7.13354L85.4786 0.873535Z" fill="#50B8E7" />
                                <path d="M110.479 0.873535L113.569 7.13354L120.479 8.14354L115.479 13.0135L116.659 19.8935L110.479 16.6435L104.299 19.8935L105.479 13.0135L100.479 8.14354L107.389 7.13354L110.479 0.873535Z" fill="#50B8E7" />
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
                            <svg width="121" height="20" viewBox="0 0 121 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.4786 0.873535L13.5686 7.13354L20.4786 8.14354L15.4786 13.0135L16.6586 19.8935L10.4786 16.6435L4.29864 19.8935L5.47864 13.0135L0.478638 8.14354L7.38864 7.13354L10.4786 0.873535Z" fill="#50B8E7" />
                                <path d="M35.4786 0.873535L38.5686 7.13354L45.4786 8.14354L40.4786 13.0135L41.6586 19.8935L35.4786 16.6435L29.2986 19.8935L30.4786 13.0135L25.4786 8.14354L32.3886 7.13354L35.4786 0.873535Z" fill="#50B8E7" />
                                <path d="M60.4786 0.873535L63.5686 7.13354L70.4786 8.14354L65.4786 13.0135L66.6586 19.8935L60.4786 16.6435L54.2986 19.8935L55.4786 13.0135L50.4786 8.14354L57.3886 7.13354L60.4786 0.873535Z" fill="#50B8E7" />
                                <path d="M85.4786 0.873535L88.5686 7.13354L95.4786 8.14354L90.4786 13.0135L91.6586 19.8935L85.4786 16.6435L79.2986 19.8935L80.4786 13.0135L75.4786 8.14354L82.3886 7.13354L85.4786 0.873535Z" fill="#50B8E7" />
                                <path d="M110.479 0.873535L113.569 7.13354L120.479 8.14354L115.479 13.0135L116.659 19.8935L110.479 16.6435L104.299 19.8935L105.479 13.0135L100.479 8.14354L107.389 7.13354L110.479 0.873535Z" fill="#50B8E7" />
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
                            <svg width="121" height="20" viewBox="0 0 121 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.4786 0.873535L13.5686 7.13354L20.4786 8.14354L15.4786 13.0135L16.6586 19.8935L10.4786 16.6435L4.29864 19.8935L5.47864 13.0135L0.478638 8.14354L7.38864 7.13354L10.4786 0.873535Z" fill="#50B8E7" />
                                <path d="M35.4786 0.873535L38.5686 7.13354L45.4786 8.14354L40.4786 13.0135L41.6586 19.8935L35.4786 16.6435L29.2986 19.8935L30.4786 13.0135L25.4786 8.14354L32.3886 7.13354L35.4786 0.873535Z" fill="#50B8E7" />
                                <path d="M60.4786 0.873535L63.5686 7.13354L70.4786 8.14354L65.4786 13.0135L66.6586 19.8935L60.4786 16.6435L54.2986 19.8935L55.4786 13.0135L50.4786 8.14354L57.3886 7.13354L60.4786 0.873535Z" fill="#50B8E7" />
                                <path d="M85.4786 0.873535L88.5686 7.13354L95.4786 8.14354L90.4786 13.0135L91.6586 19.8935L85.4786 16.6435L79.2986 19.8935L80.4786 13.0135L75.4786 8.14354L82.3886 7.13354L85.4786 0.873535Z" fill="#50B8E7" />
                                <path d="M110.479 0.873535L113.569 7.13354L120.479 8.14354L115.479 13.0135L116.659 19.8935L110.479 16.6435L104.299 19.8935L105.479 13.0135L100.479 8.14354L107.389 7.13354L110.479 0.873535Z" fill="#50B8E7" />
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
                            <svg width="121" height="20" viewBox="0 0 121 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.4786 0.873535L13.5686 7.13354L20.4786 8.14354L15.4786 13.0135L16.6586 19.8935L10.4786 16.6435L4.29864 19.8935L5.47864 13.0135L0.478638 8.14354L7.38864 7.13354L10.4786 0.873535Z" fill="#50B8E7" />
                                <path d="M35.4786 0.873535L38.5686 7.13354L45.4786 8.14354L40.4786 13.0135L41.6586 19.8935L35.4786 16.6435L29.2986 19.8935L30.4786 13.0135L25.4786 8.14354L32.3886 7.13354L35.4786 0.873535Z" fill="#50B8E7" />
                                <path d="M60.4786 0.873535L63.5686 7.13354L70.4786 8.14354L65.4786 13.0135L66.6586 19.8935L60.4786 16.6435L54.2986 19.8935L55.4786 13.0135L50.4786 8.14354L57.3886 7.13354L60.4786 0.873535Z" fill="#50B8E7" />
                                <path d="M85.4786 0.873535L88.5686 7.13354L95.4786 8.14354L90.4786 13.0135L91.6586 19.8935L85.4786 16.6435L79.2986 19.8935L80.4786 13.0135L75.4786 8.14354L82.3886 7.13354L85.4786 0.873535Z" fill="#50B8E7" />
                                <path d="M110.479 0.873535L113.569 7.13354L120.479 8.14354L115.479 13.0135L116.659 19.8935L110.479 16.6435L104.299 19.8935L105.479 13.0135L100.479 8.14354L107.389 7.13354L110.479 0.873535Z" fill="#50B8E7" />
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