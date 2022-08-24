import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import Valiant from '../../assets/images/hausratSliderPhotos/valiant.png'
import Swica from '../../assets/images/hausratSliderPhotos/swica.png'
import Groupe from '../../assets/images/hausratSliderPhotos/groupe.png'
import Helvetia from '../../assets/images/hausratSliderPhotos/helvetia.png'
import Helsana from '../../assets/images/hausratSliderPhotos/helsana.png'
import Sanitas from '../../assets/images/hausratSliderPhotos/sanitas.png'
import Credit from '../../assets/images/hausratSliderPhotos/credit.png'
import Axa from '../../assets/images/hausratSliderPhotos/axa.png'
import Basler from '../../assets/images/hausratSliderPhotos/basel.png'



function SliderHausrat() {
    return (
        <>
            <div className='mt-5 pt-5'>
                <div className='wrapDiv container-xl px-4 px-xl-0 mx-auto'>
                    <div className="col-12 col-sm-11 col-md-9 col-lg-8 col-xl-6 mx-auto">
                        <div className=''>
                            <span className='fs-3 fw-500 normalTextToBlue'>Vergleich der grössten Gesellschaften</span>
                        </div>
                        <div className='pt-5 mt-4'>
                            <Swiper
                                spaceBetween={10}
                                slidesPerView={1}
                                pagination={
                                    { clickable: true }
                                }
                                autoplay={{
                                    delay: 500,
                                    disableOnInteraction: false,
                                }}
                                breakpoints={
                                    {
                                        576: {
                                            slidesPerView: 3,
                                            spaceBetween: 20
                                        },
                                        768: {
                                            slidesPerView: 3,
                                            spaceBetween: 40
                                        },
                                        1000: {
                                            slidesPerView: 3,
                                            spaceBetween: 100
                                        }
                                    }
                                }

                                modules={[Pagination]}
                                className="hausratSwiper"
                            >
                                <SwiperSlide>
                                    <div className="pb-5">
                                        <img width={150} src={Valiant} alt="" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="pb-5">
                                        <img width={150} src={Swica} alt="" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="pb-5">
                                        <img width={150} src={Groupe} alt="" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="pb-5">
                                        <img width={150} src={Helvetia} alt="" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="pb-5">
                                        <img width={150} src={Helsana} alt="" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="pb-5">
                                        <img width={150} src={Sanitas} alt="" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="pb-5">
                                        <img width={150} src={Credit} alt="" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="pb-5">
                                        <img width={150} src={Axa} alt="" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="pb-5">
                                        <img width={150} src={Basler} alt="" />
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SliderHausrat