import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { FreeMode, Autoplay } from "swiper";

function HomeSlider() {
    return (
        <div className="wrapDiv container-xl px-4 px-xl-0">
            <Swiper
                spaceBetween={40}
                freeMode={false}
                centeredSlides={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                loop={true}
                className="mySwiper py-2 px-2"
                modules={[Autoplay, FreeMode]}
                breakpoints={{
                    640: {
                        slidesPerView: 1.5,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2.2,
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
                        <div className='pb-3 text-end'>
                            <svg width="37" height="27" viewBox="0 0 37 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.40954 10.7675C7.99821 10.7675 7.60349 10.8289 7.21061 10.8848C7.33788 10.4663 7.46884 10.0407 7.67911 9.65832C7.88939 9.1028 8.21771 8.62124 8.54419 8.13607C8.81718 7.61122 9.29859 7.25591 9.65274 6.80681C10.0235 6.37034 10.5289 6.07996 10.9291 5.71743C11.322 5.33868 11.8366 5.1493 12.2461 4.88236C12.674 4.64248 13.0466 4.37735 13.4451 4.2511L14.4392 3.8507L15.3135 3.49539L14.419 0L13.3178 0.259719C12.9655 0.346292 12.5357 0.447294 12.0469 0.568135C11.5471 0.658316 11.014 0.905411 10.4201 1.13086C9.8335 1.38697 9.15472 1.56012 8.5239 1.97134C7.88939 2.36453 7.15712 2.69279 6.51154 3.21944C5.88625 3.76232 5.13185 4.23307 4.5748 4.92385C3.96612 5.56954 3.36481 6.24769 2.89814 7.01964C2.3577 7.75551 1.99065 8.56353 1.6033 9.36252C1.25284 10.1615 0.970631 10.9786 0.740068 11.7721C0.302919 13.3629 0.107401 14.8743 0.0317758 16.1675C-0.0309375 17.4625 0.0059527 18.5393 0.0834221 19.3184C0.11109 19.6864 0.162736 20.0435 0.199626 20.2906L0.245739 20.5936L0.293696 20.5828C0.621763 22.0813 1.37698 23.4583 2.47199 24.5546C3.56701 25.651 4.95706 26.4217 6.48136 26.7778C8.00566 27.1339 9.60191 27.0608 11.0855 26.5668C12.569 26.0729 13.8793 25.1783 14.8646 23.9867C15.8499 22.795 16.4701 21.3549 16.6534 19.833C16.8367 18.3111 16.5756 16.7695 15.9003 15.3866C15.2251 14.0037 14.1632 12.836 12.8376 12.0186C11.5119 11.2012 9.97674 10.7674 8.40954 10.7675ZM28.6991 10.7675C28.2878 10.7675 27.8931 10.8289 27.5002 10.8848C27.6275 10.4663 27.7584 10.0407 27.9687 9.65832C28.179 9.1028 28.5073 8.62124 28.8338 8.13607C29.1068 7.61122 29.5882 7.25591 29.9423 6.80681C30.3131 6.37034 30.8185 6.07996 31.2187 5.71743C31.6116 5.33868 32.1262 5.1493 32.5357 4.88236C32.9637 4.64248 33.3362 4.37735 33.7347 4.2511L34.7288 3.8507L35.6031 3.49539L34.7086 0L33.6074 0.259719C33.2551 0.346292 32.8253 0.447294 32.3365 0.568135C31.8367 0.658316 31.3036 0.905411 30.7097 1.13086C30.125 1.38878 29.4443 1.56012 28.8135 1.97315C28.179 2.36633 27.4467 2.69459 26.8011 3.22124C26.1759 3.76413 25.4215 4.23487 24.8644 4.92385C24.2557 5.56954 23.6544 6.24769 23.1878 7.01964C22.6473 7.75551 22.2803 8.56353 21.8929 9.36252C21.5424 10.1615 21.2602 10.9786 21.0297 11.7721C20.5925 13.3629 20.397 14.8743 20.3214 16.1675C20.2587 17.4625 20.2956 18.5393 20.373 19.3184C20.4007 19.6864 20.4523 20.0435 20.4892 20.2906L20.5353 20.5936L20.5833 20.5828C20.9114 22.0813 21.6666 23.4583 22.7616 24.5546C23.8566 25.651 25.2467 26.4217 26.771 26.7778C28.2953 27.1339 29.8915 27.0608 31.3751 26.5668C32.8586 26.0729 34.1689 25.1783 35.1542 23.9867C36.1395 22.795 36.7597 21.3549 36.943 19.833C37.1263 18.3111 36.8652 16.7695 36.1899 15.3866C35.5147 14.0037 34.4528 12.836 33.1272 12.0186C31.8015 11.2012 30.2663 10.7674 28.6991 10.7675Z" fill="#50B8E7" />
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
                        <div className='pt-4'>
                            <div className="row g-0">
                                <div className="col">
                                    <div className=''>
                                        <span style={{ fontWeight: 600 }}>Benjamin.T</span>
                                    </div>
                                    <div>
                                        <span style={{ color: '#808080', fontSize: '14px' }}>UI UX Designer</span>
                                    </div>
                                </div>
                                <div className="col-auto my-auto">
                                    <svg width="95" height="18" viewBox="0 0 95 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18.2456 7.01988C18.1478 6.71888 17.8876 6.49951 17.5745 6.45407L12.2638 5.68247L9.88865 0.869697C9.7486 0.585931 9.45957 0.40625 9.14316 0.40625C8.82669 0.40625 8.53766 0.585931 8.39766 0.869697L6.02273 5.68241L0.711822 6.45401C0.398682 6.49951 0.138471 6.71888 0.0407045 7.01983C-0.0570617 7.32083 0.0244655 7.65121 0.25109 7.87207L4.09407 11.6177L3.18652 16.9076C3.13303 17.2195 3.26123 17.5347 3.51722 17.7207C3.66204 17.8259 3.83358 17.8795 4.00594 17.8795C4.13824 17.8795 4.27109 17.8479 4.39274 17.784L9.1431 15.2867L13.8934 17.784C14.0158 17.8483 14.1498 17.879 14.2825 17.8795C14.7412 17.8788 15.1127 17.5069 15.1127 17.0481C15.1127 16.9843 15.1055 16.922 15.0919 16.8623L14.1922 11.6177L18.0352 7.87207C18.2619 7.65121 18.3434 7.32083 18.2456 7.01988Z" fill="#50B8E7" />
                                        <path d="M37.424 7.01988C37.3261 6.71888 37.066 6.49951 36.7528 6.45407L31.4421 5.68247L29.067 0.869697C28.9269 0.585931 28.6379 0.40625 28.3215 0.40625C28.005 0.40625 27.716 0.585931 27.576 0.869697L25.2011 5.68241L19.8902 6.45401C19.577 6.49951 19.3168 6.71888 19.219 7.01983C19.1213 7.32083 19.2028 7.65121 19.4294 7.87207L23.2724 11.6177L22.3649 16.9076C22.3114 17.2195 22.4396 17.5347 22.6956 17.7207C22.8404 17.8259 23.0119 17.8795 23.1843 17.8795C23.3166 17.8795 23.4494 17.8479 23.5711 17.784L28.3214 15.2867L33.0718 17.784C33.1941 17.8483 33.3281 17.879 33.4609 17.8795C33.9195 17.8788 34.2911 17.5069 34.2911 17.0481C34.2911 16.9843 34.2839 16.922 34.2702 16.8623L33.3705 11.6177L37.2135 7.87207C37.4402 7.65121 37.5217 7.32083 37.424 7.01988Z" fill="#50B8E7" />
                                        <path d="M56.6024 7.01988C56.5046 6.71888 56.2444 6.49951 55.9313 6.45407L50.6206 5.68247L48.2455 0.869697C48.1054 0.585931 47.8164 0.40625 47.5 0.40625C47.1835 0.40625 46.8945 0.585931 46.7545 0.869697L44.3795 5.68241L39.0686 6.45401C38.7555 6.49951 38.4953 6.71888 38.3975 7.01983C38.2997 7.32083 38.3813 7.65121 38.6079 7.87207L42.4509 11.6177L41.5433 16.9076C41.4898 17.2195 41.618 17.5347 41.874 17.7207C42.0189 17.8259 42.1904 17.8795 42.3628 17.8795C42.4951 17.8795 42.6279 17.8479 42.7496 17.784L47.4999 15.2867L52.2502 17.784C52.3726 17.8483 52.5066 17.879 52.6393 17.8795C53.098 17.8788 53.4695 17.5069 53.4695 17.0481C53.4695 16.9843 53.4623 16.922 53.4487 16.8623L52.549 11.6177L56.392 7.87207C56.6187 7.65121 56.7002 7.32083 56.6024 7.01988Z" fill="#50B8E7" />
                                        <path d="M75.7808 7.01988C75.683 6.71888 75.4228 6.49951 75.1097 6.45407L69.7989 5.68247L67.4238 0.869697C67.2838 0.585931 66.9947 0.40625 66.6783 0.40625C66.3619 0.40625 66.0728 0.585931 65.9328 0.869697L63.5579 5.68241L58.247 6.45401C57.9338 6.49951 57.6736 6.71888 57.5759 7.01983C57.4781 7.32083 57.5596 7.65121 57.7862 7.87207L61.6292 11.6177L60.7217 16.9076C60.6682 17.2195 60.7964 17.5347 61.0524 17.7207C61.1972 17.8259 61.3687 17.8795 61.5411 17.8795C61.6734 17.8795 61.8062 17.8479 61.9279 17.784L66.6783 15.2867L71.4286 17.784C71.5509 17.8483 71.685 17.879 71.8177 17.8795C72.2763 17.8788 72.6479 17.5069 72.6479 17.0481C72.6479 16.9843 72.6407 16.922 72.627 16.8623L71.7274 11.6177L75.5703 7.87207C75.797 7.65121 75.8785 7.32083 75.7808 7.01988Z" fill="#50B8E7" />
                                        <path d="M94.9592 7.01988C94.8614 6.71888 94.6013 6.49951 94.2881 6.45407L88.9774 5.68247L86.6023 0.869697C86.4622 0.585931 86.1732 0.40625 85.8568 0.40625C85.5403 0.40625 85.2513 0.585931 85.1113 0.869697L82.7364 5.68241L77.4254 6.45401C77.1123 6.49951 76.8521 6.71888 76.7543 7.01983C76.6566 7.32083 76.7381 7.65121 76.9647 7.87207L80.8077 11.6177L79.9001 16.9076C79.8467 17.2195 79.9748 17.5347 80.2308 17.7207C80.3757 17.8259 80.5472 17.8795 80.7196 17.8795C80.8519 17.8795 80.9847 17.8479 81.1064 17.784L85.8567 15.2867L90.607 17.784C90.7294 17.8483 90.8634 17.879 90.9962 17.8795C91.4548 17.8788 91.8263 17.5069 91.8263 17.0481C91.8263 16.9843 91.8191 16.922 91.8055 16.8623L90.9058 11.6177L94.7488 7.87207C94.9755 7.65121 95.057 7.32083 94.9592 7.01988Z" fill="#50B8E7" />
                                    </svg>

                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='whiteTestimonials p-4 text-start'>
                        <div className='pb-3 text-end'>
                            <svg width="37" height="27" viewBox="0 0 37 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.40954 10.7675C7.99821 10.7675 7.60349 10.8289 7.21061 10.8848C7.33788 10.4663 7.46884 10.0407 7.67911 9.65832C7.88939 9.1028 8.21771 8.62124 8.54419 8.13607C8.81718 7.61122 9.29859 7.25591 9.65274 6.80681C10.0235 6.37034 10.5289 6.07996 10.9291 5.71743C11.322 5.33868 11.8366 5.1493 12.2461 4.88236C12.674 4.64248 13.0466 4.37735 13.4451 4.2511L14.4392 3.8507L15.3135 3.49539L14.419 0L13.3178 0.259719C12.9655 0.346292 12.5357 0.447294 12.0469 0.568135C11.5471 0.658316 11.014 0.905411 10.4201 1.13086C9.8335 1.38697 9.15472 1.56012 8.5239 1.97134C7.88939 2.36453 7.15712 2.69279 6.51154 3.21944C5.88625 3.76232 5.13185 4.23307 4.5748 4.92385C3.96612 5.56954 3.36481 6.24769 2.89814 7.01964C2.3577 7.75551 1.99065 8.56353 1.6033 9.36252C1.25284 10.1615 0.970631 10.9786 0.740068 11.7721C0.302919 13.3629 0.107401 14.8743 0.0317758 16.1675C-0.0309375 17.4625 0.0059527 18.5393 0.0834221 19.3184C0.11109 19.6864 0.162736 20.0435 0.199626 20.2906L0.245739 20.5936L0.293696 20.5828C0.621763 22.0813 1.37698 23.4583 2.47199 24.5546C3.56701 25.651 4.95706 26.4217 6.48136 26.7778C8.00566 27.1339 9.60191 27.0608 11.0855 26.5668C12.569 26.0729 13.8793 25.1783 14.8646 23.9867C15.8499 22.795 16.4701 21.3549 16.6534 19.833C16.8367 18.3111 16.5756 16.7695 15.9003 15.3866C15.2251 14.0037 14.1632 12.836 12.8376 12.0186C11.5119 11.2012 9.97674 10.7674 8.40954 10.7675ZM28.6991 10.7675C28.2878 10.7675 27.8931 10.8289 27.5002 10.8848C27.6275 10.4663 27.7584 10.0407 27.9687 9.65832C28.179 9.1028 28.5073 8.62124 28.8338 8.13607C29.1068 7.61122 29.5882 7.25591 29.9423 6.80681C30.3131 6.37034 30.8185 6.07996 31.2187 5.71743C31.6116 5.33868 32.1262 5.1493 32.5357 4.88236C32.9637 4.64248 33.3362 4.37735 33.7347 4.2511L34.7288 3.8507L35.6031 3.49539L34.7086 0L33.6074 0.259719C33.2551 0.346292 32.8253 0.447294 32.3365 0.568135C31.8367 0.658316 31.3036 0.905411 30.7097 1.13086C30.125 1.38878 29.4443 1.56012 28.8135 1.97315C28.179 2.36633 27.4467 2.69459 26.8011 3.22124C26.1759 3.76413 25.4215 4.23487 24.8644 4.92385C24.2557 5.56954 23.6544 6.24769 23.1878 7.01964C22.6473 7.75551 22.2803 8.56353 21.8929 9.36252C21.5424 10.1615 21.2602 10.9786 21.0297 11.7721C20.5925 13.3629 20.397 14.8743 20.3214 16.1675C20.2587 17.4625 20.2956 18.5393 20.373 19.3184C20.4007 19.6864 20.4523 20.0435 20.4892 20.2906L20.5353 20.5936L20.5833 20.5828C20.9114 22.0813 21.6666 23.4583 22.7616 24.5546C23.8566 25.651 25.2467 26.4217 26.771 26.7778C28.2953 27.1339 29.8915 27.0608 31.3751 26.5668C32.8586 26.0729 34.1689 25.1783 35.1542 23.9867C36.1395 22.795 36.7597 21.3549 36.943 19.833C37.1263 18.3111 36.8652 16.7695 36.1899 15.3866C35.5147 14.0037 34.4528 12.836 33.1272 12.0186C31.8015 11.2012 30.2663 10.7674 28.6991 10.7675Z" fill="#50B8E7" />
                            </svg>


                        </div>
                        <div>
                            <span style={{ fontWeight: 500 }}>Eine sehr Kompetente
                                Firma. Einfache, sehr gute
                                und seriose
                                Verischerungsabwicklungen.
                            </span>
                        </div>
                        <div className='pt-4'>
                            <div className="row g-0">
                                <div className="col">
                                    <div className=''>
                                        <span style={{ fontWeight: 600 }}>Benjamin.T</span>
                                    </div>
                                    <div>
                                        <span style={{ color: '#808080', fontSize: '14px' }}>UI UX Designer</span>
                                    </div>
                                </div>
                                <div className="col-auto my-auto">
                                    <svg width="95" height="18" viewBox="0 0 95 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18.2456 7.01988C18.1478 6.71888 17.8876 6.49951 17.5745 6.45407L12.2638 5.68247L9.88865 0.869697C9.7486 0.585931 9.45957 0.40625 9.14316 0.40625C8.82669 0.40625 8.53766 0.585931 8.39766 0.869697L6.02273 5.68241L0.711822 6.45401C0.398682 6.49951 0.138471 6.71888 0.0407045 7.01983C-0.0570617 7.32083 0.0244655 7.65121 0.25109 7.87207L4.09407 11.6177L3.18652 16.9076C3.13303 17.2195 3.26123 17.5347 3.51722 17.7207C3.66204 17.8259 3.83358 17.8795 4.00594 17.8795C4.13824 17.8795 4.27109 17.8479 4.39274 17.784L9.1431 15.2867L13.8934 17.784C14.0158 17.8483 14.1498 17.879 14.2825 17.8795C14.7412 17.8788 15.1127 17.5069 15.1127 17.0481C15.1127 16.9843 15.1055 16.922 15.0919 16.8623L14.1922 11.6177L18.0352 7.87207C18.2619 7.65121 18.3434 7.32083 18.2456 7.01988Z" fill="#50B8E7" />
                                        <path d="M37.424 7.01988C37.3261 6.71888 37.066 6.49951 36.7528 6.45407L31.4421 5.68247L29.067 0.869697C28.9269 0.585931 28.6379 0.40625 28.3215 0.40625C28.005 0.40625 27.716 0.585931 27.576 0.869697L25.2011 5.68241L19.8902 6.45401C19.577 6.49951 19.3168 6.71888 19.219 7.01983C19.1213 7.32083 19.2028 7.65121 19.4294 7.87207L23.2724 11.6177L22.3649 16.9076C22.3114 17.2195 22.4396 17.5347 22.6956 17.7207C22.8404 17.8259 23.0119 17.8795 23.1843 17.8795C23.3166 17.8795 23.4494 17.8479 23.5711 17.784L28.3214 15.2867L33.0718 17.784C33.1941 17.8483 33.3281 17.879 33.4609 17.8795C33.9195 17.8788 34.2911 17.5069 34.2911 17.0481C34.2911 16.9843 34.2839 16.922 34.2702 16.8623L33.3705 11.6177L37.2135 7.87207C37.4402 7.65121 37.5217 7.32083 37.424 7.01988Z" fill="#50B8E7" />
                                        <path d="M56.6024 7.01988C56.5046 6.71888 56.2444 6.49951 55.9313 6.45407L50.6206 5.68247L48.2455 0.869697C48.1054 0.585931 47.8164 0.40625 47.5 0.40625C47.1835 0.40625 46.8945 0.585931 46.7545 0.869697L44.3795 5.68241L39.0686 6.45401C38.7555 6.49951 38.4953 6.71888 38.3975 7.01983C38.2997 7.32083 38.3813 7.65121 38.6079 7.87207L42.4509 11.6177L41.5433 16.9076C41.4898 17.2195 41.618 17.5347 41.874 17.7207C42.0189 17.8259 42.1904 17.8795 42.3628 17.8795C42.4951 17.8795 42.6279 17.8479 42.7496 17.784L47.4999 15.2867L52.2502 17.784C52.3726 17.8483 52.5066 17.879 52.6393 17.8795C53.098 17.8788 53.4695 17.5069 53.4695 17.0481C53.4695 16.9843 53.4623 16.922 53.4487 16.8623L52.549 11.6177L56.392 7.87207C56.6187 7.65121 56.7002 7.32083 56.6024 7.01988Z" fill="#50B8E7" />
                                        <path d="M75.7808 7.01988C75.683 6.71888 75.4228 6.49951 75.1097 6.45407L69.7989 5.68247L67.4238 0.869697C67.2838 0.585931 66.9947 0.40625 66.6783 0.40625C66.3619 0.40625 66.0728 0.585931 65.9328 0.869697L63.5579 5.68241L58.247 6.45401C57.9338 6.49951 57.6736 6.71888 57.5759 7.01983C57.4781 7.32083 57.5596 7.65121 57.7862 7.87207L61.6292 11.6177L60.7217 16.9076C60.6682 17.2195 60.7964 17.5347 61.0524 17.7207C61.1972 17.8259 61.3687 17.8795 61.5411 17.8795C61.6734 17.8795 61.8062 17.8479 61.9279 17.784L66.6783 15.2867L71.4286 17.784C71.5509 17.8483 71.685 17.879 71.8177 17.8795C72.2763 17.8788 72.6479 17.5069 72.6479 17.0481C72.6479 16.9843 72.6407 16.922 72.627 16.8623L71.7274 11.6177L75.5703 7.87207C75.797 7.65121 75.8785 7.32083 75.7808 7.01988Z" fill="#50B8E7" />
                                        <path d="M94.9592 7.01988C94.8614 6.71888 94.6013 6.49951 94.2881 6.45407L88.9774 5.68247L86.6023 0.869697C86.4622 0.585931 86.1732 0.40625 85.8568 0.40625C85.5403 0.40625 85.2513 0.585931 85.1113 0.869697L82.7364 5.68241L77.4254 6.45401C77.1123 6.49951 76.8521 6.71888 76.7543 7.01983C76.6566 7.32083 76.7381 7.65121 76.9647 7.87207L80.8077 11.6177L79.9001 16.9076C79.8467 17.2195 79.9748 17.5347 80.2308 17.7207C80.3757 17.8259 80.5472 17.8795 80.7196 17.8795C80.8519 17.8795 80.9847 17.8479 81.1064 17.784L85.8567 15.2867L90.607 17.784C90.7294 17.8483 90.8634 17.879 90.9962 17.8795C91.4548 17.8788 91.8263 17.5069 91.8263 17.0481C91.8263 16.9843 91.8191 16.922 91.8055 16.8623L90.9058 11.6177L94.7488 7.87207C94.9755 7.65121 95.057 7.32083 94.9592 7.01988Z" fill="#50B8E7" />
                                    </svg>

                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='whiteTestimonials p-4 text-start'>
                        <div className='pb-3 text-end'>
                            <svg width="37" height="27" viewBox="0 0 37 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.40954 10.7675C7.99821 10.7675 7.60349 10.8289 7.21061 10.8848C7.33788 10.4663 7.46884 10.0407 7.67911 9.65832C7.88939 9.1028 8.21771 8.62124 8.54419 8.13607C8.81718 7.61122 9.29859 7.25591 9.65274 6.80681C10.0235 6.37034 10.5289 6.07996 10.9291 5.71743C11.322 5.33868 11.8366 5.1493 12.2461 4.88236C12.674 4.64248 13.0466 4.37735 13.4451 4.2511L14.4392 3.8507L15.3135 3.49539L14.419 0L13.3178 0.259719C12.9655 0.346292 12.5357 0.447294 12.0469 0.568135C11.5471 0.658316 11.014 0.905411 10.4201 1.13086C9.8335 1.38697 9.15472 1.56012 8.5239 1.97134C7.88939 2.36453 7.15712 2.69279 6.51154 3.21944C5.88625 3.76232 5.13185 4.23307 4.5748 4.92385C3.96612 5.56954 3.36481 6.24769 2.89814 7.01964C2.3577 7.75551 1.99065 8.56353 1.6033 9.36252C1.25284 10.1615 0.970631 10.9786 0.740068 11.7721C0.302919 13.3629 0.107401 14.8743 0.0317758 16.1675C-0.0309375 17.4625 0.0059527 18.5393 0.0834221 19.3184C0.11109 19.6864 0.162736 20.0435 0.199626 20.2906L0.245739 20.5936L0.293696 20.5828C0.621763 22.0813 1.37698 23.4583 2.47199 24.5546C3.56701 25.651 4.95706 26.4217 6.48136 26.7778C8.00566 27.1339 9.60191 27.0608 11.0855 26.5668C12.569 26.0729 13.8793 25.1783 14.8646 23.9867C15.8499 22.795 16.4701 21.3549 16.6534 19.833C16.8367 18.3111 16.5756 16.7695 15.9003 15.3866C15.2251 14.0037 14.1632 12.836 12.8376 12.0186C11.5119 11.2012 9.97674 10.7674 8.40954 10.7675ZM28.6991 10.7675C28.2878 10.7675 27.8931 10.8289 27.5002 10.8848C27.6275 10.4663 27.7584 10.0407 27.9687 9.65832C28.179 9.1028 28.5073 8.62124 28.8338 8.13607C29.1068 7.61122 29.5882 7.25591 29.9423 6.80681C30.3131 6.37034 30.8185 6.07996 31.2187 5.71743C31.6116 5.33868 32.1262 5.1493 32.5357 4.88236C32.9637 4.64248 33.3362 4.37735 33.7347 4.2511L34.7288 3.8507L35.6031 3.49539L34.7086 0L33.6074 0.259719C33.2551 0.346292 32.8253 0.447294 32.3365 0.568135C31.8367 0.658316 31.3036 0.905411 30.7097 1.13086C30.125 1.38878 29.4443 1.56012 28.8135 1.97315C28.179 2.36633 27.4467 2.69459 26.8011 3.22124C26.1759 3.76413 25.4215 4.23487 24.8644 4.92385C24.2557 5.56954 23.6544 6.24769 23.1878 7.01964C22.6473 7.75551 22.2803 8.56353 21.8929 9.36252C21.5424 10.1615 21.2602 10.9786 21.0297 11.7721C20.5925 13.3629 20.397 14.8743 20.3214 16.1675C20.2587 17.4625 20.2956 18.5393 20.373 19.3184C20.4007 19.6864 20.4523 20.0435 20.4892 20.2906L20.5353 20.5936L20.5833 20.5828C20.9114 22.0813 21.6666 23.4583 22.7616 24.5546C23.8566 25.651 25.2467 26.4217 26.771 26.7778C28.2953 27.1339 29.8915 27.0608 31.3751 26.5668C32.8586 26.0729 34.1689 25.1783 35.1542 23.9867C36.1395 22.795 36.7597 21.3549 36.943 19.833C37.1263 18.3111 36.8652 16.7695 36.1899 15.3866C35.5147 14.0037 34.4528 12.836 33.1272 12.0186C31.8015 11.2012 30.2663 10.7674 28.6991 10.7675Z" fill="#50B8E7" />
                            </svg>


                        </div>
                        <div>
                            <span style={{ fontWeight: 500 }}>Eine sehr Kompetente
                                Firma. Einfache, sehr gute
                                und seriose
                                Verischerungsabwicklungen.
                                Ich bedance mich bei Herr
                                Ramadani und Co. </span>
                        </div>
                        <div className='pt-4'>
                            <div className="row g-0">
                                <div className="col">
                                    <div className=''>
                                        <span style={{ fontWeight: 600 }}>Benjamin.T</span>
                                    </div>
                                    <div>
                                        <span style={{ color: '#808080', fontSize: '14px' }}>UI UX Designer</span>
                                    </div>
                                </div>
                                <div className="col-auto my-auto">
                                    <svg width="95" height="18" viewBox="0 0 95 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18.2456 7.01988C18.1478 6.71888 17.8876 6.49951 17.5745 6.45407L12.2638 5.68247L9.88865 0.869697C9.7486 0.585931 9.45957 0.40625 9.14316 0.40625C8.82669 0.40625 8.53766 0.585931 8.39766 0.869697L6.02273 5.68241L0.711822 6.45401C0.398682 6.49951 0.138471 6.71888 0.0407045 7.01983C-0.0570617 7.32083 0.0244655 7.65121 0.25109 7.87207L4.09407 11.6177L3.18652 16.9076C3.13303 17.2195 3.26123 17.5347 3.51722 17.7207C3.66204 17.8259 3.83358 17.8795 4.00594 17.8795C4.13824 17.8795 4.27109 17.8479 4.39274 17.784L9.1431 15.2867L13.8934 17.784C14.0158 17.8483 14.1498 17.879 14.2825 17.8795C14.7412 17.8788 15.1127 17.5069 15.1127 17.0481C15.1127 16.9843 15.1055 16.922 15.0919 16.8623L14.1922 11.6177L18.0352 7.87207C18.2619 7.65121 18.3434 7.32083 18.2456 7.01988Z" fill="#50B8E7" />
                                        <path d="M37.424 7.01988C37.3261 6.71888 37.066 6.49951 36.7528 6.45407L31.4421 5.68247L29.067 0.869697C28.9269 0.585931 28.6379 0.40625 28.3215 0.40625C28.005 0.40625 27.716 0.585931 27.576 0.869697L25.2011 5.68241L19.8902 6.45401C19.577 6.49951 19.3168 6.71888 19.219 7.01983C19.1213 7.32083 19.2028 7.65121 19.4294 7.87207L23.2724 11.6177L22.3649 16.9076C22.3114 17.2195 22.4396 17.5347 22.6956 17.7207C22.8404 17.8259 23.0119 17.8795 23.1843 17.8795C23.3166 17.8795 23.4494 17.8479 23.5711 17.784L28.3214 15.2867L33.0718 17.784C33.1941 17.8483 33.3281 17.879 33.4609 17.8795C33.9195 17.8788 34.2911 17.5069 34.2911 17.0481C34.2911 16.9843 34.2839 16.922 34.2702 16.8623L33.3705 11.6177L37.2135 7.87207C37.4402 7.65121 37.5217 7.32083 37.424 7.01988Z" fill="#50B8E7" />
                                        <path d="M56.6024 7.01988C56.5046 6.71888 56.2444 6.49951 55.9313 6.45407L50.6206 5.68247L48.2455 0.869697C48.1054 0.585931 47.8164 0.40625 47.5 0.40625C47.1835 0.40625 46.8945 0.585931 46.7545 0.869697L44.3795 5.68241L39.0686 6.45401C38.7555 6.49951 38.4953 6.71888 38.3975 7.01983C38.2997 7.32083 38.3813 7.65121 38.6079 7.87207L42.4509 11.6177L41.5433 16.9076C41.4898 17.2195 41.618 17.5347 41.874 17.7207C42.0189 17.8259 42.1904 17.8795 42.3628 17.8795C42.4951 17.8795 42.6279 17.8479 42.7496 17.784L47.4999 15.2867L52.2502 17.784C52.3726 17.8483 52.5066 17.879 52.6393 17.8795C53.098 17.8788 53.4695 17.5069 53.4695 17.0481C53.4695 16.9843 53.4623 16.922 53.4487 16.8623L52.549 11.6177L56.392 7.87207C56.6187 7.65121 56.7002 7.32083 56.6024 7.01988Z" fill="#50B8E7" />
                                        <path d="M75.7808 7.01988C75.683 6.71888 75.4228 6.49951 75.1097 6.45407L69.7989 5.68247L67.4238 0.869697C67.2838 0.585931 66.9947 0.40625 66.6783 0.40625C66.3619 0.40625 66.0728 0.585931 65.9328 0.869697L63.5579 5.68241L58.247 6.45401C57.9338 6.49951 57.6736 6.71888 57.5759 7.01983C57.4781 7.32083 57.5596 7.65121 57.7862 7.87207L61.6292 11.6177L60.7217 16.9076C60.6682 17.2195 60.7964 17.5347 61.0524 17.7207C61.1972 17.8259 61.3687 17.8795 61.5411 17.8795C61.6734 17.8795 61.8062 17.8479 61.9279 17.784L66.6783 15.2867L71.4286 17.784C71.5509 17.8483 71.685 17.879 71.8177 17.8795C72.2763 17.8788 72.6479 17.5069 72.6479 17.0481C72.6479 16.9843 72.6407 16.922 72.627 16.8623L71.7274 11.6177L75.5703 7.87207C75.797 7.65121 75.8785 7.32083 75.7808 7.01988Z" fill="#50B8E7" />
                                        <path d="M94.9592 7.01988C94.8614 6.71888 94.6013 6.49951 94.2881 6.45407L88.9774 5.68247L86.6023 0.869697C86.4622 0.585931 86.1732 0.40625 85.8568 0.40625C85.5403 0.40625 85.2513 0.585931 85.1113 0.869697L82.7364 5.68241L77.4254 6.45401C77.1123 6.49951 76.8521 6.71888 76.7543 7.01983C76.6566 7.32083 76.7381 7.65121 76.9647 7.87207L80.8077 11.6177L79.9001 16.9076C79.8467 17.2195 79.9748 17.5347 80.2308 17.7207C80.3757 17.8259 80.5472 17.8795 80.7196 17.8795C80.8519 17.8795 80.9847 17.8479 81.1064 17.784L85.8567 15.2867L90.607 17.784C90.7294 17.8483 90.8634 17.879 90.9962 17.8795C91.4548 17.8788 91.8263 17.5069 91.8263 17.0481C91.8263 16.9843 91.8191 16.922 91.8055 16.8623L90.9058 11.6177L94.7488 7.87207C94.9755 7.65121 95.057 7.32083 94.9592 7.01988Z" fill="#50B8E7" />
                                    </svg>

                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='whiteTestimonials p-4 text-start'>
                        <div className='pb-3 text-end'>
                            <svg width="37" height="27" viewBox="0 0 37 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.40954 10.7675C7.99821 10.7675 7.60349 10.8289 7.21061 10.8848C7.33788 10.4663 7.46884 10.0407 7.67911 9.65832C7.88939 9.1028 8.21771 8.62124 8.54419 8.13607C8.81718 7.61122 9.29859 7.25591 9.65274 6.80681C10.0235 6.37034 10.5289 6.07996 10.9291 5.71743C11.322 5.33868 11.8366 5.1493 12.2461 4.88236C12.674 4.64248 13.0466 4.37735 13.4451 4.2511L14.4392 3.8507L15.3135 3.49539L14.419 0L13.3178 0.259719C12.9655 0.346292 12.5357 0.447294 12.0469 0.568135C11.5471 0.658316 11.014 0.905411 10.4201 1.13086C9.8335 1.38697 9.15472 1.56012 8.5239 1.97134C7.88939 2.36453 7.15712 2.69279 6.51154 3.21944C5.88625 3.76232 5.13185 4.23307 4.5748 4.92385C3.96612 5.56954 3.36481 6.24769 2.89814 7.01964C2.3577 7.75551 1.99065 8.56353 1.6033 9.36252C1.25284 10.1615 0.970631 10.9786 0.740068 11.7721C0.302919 13.3629 0.107401 14.8743 0.0317758 16.1675C-0.0309375 17.4625 0.0059527 18.5393 0.0834221 19.3184C0.11109 19.6864 0.162736 20.0435 0.199626 20.2906L0.245739 20.5936L0.293696 20.5828C0.621763 22.0813 1.37698 23.4583 2.47199 24.5546C3.56701 25.651 4.95706 26.4217 6.48136 26.7778C8.00566 27.1339 9.60191 27.0608 11.0855 26.5668C12.569 26.0729 13.8793 25.1783 14.8646 23.9867C15.8499 22.795 16.4701 21.3549 16.6534 19.833C16.8367 18.3111 16.5756 16.7695 15.9003 15.3866C15.2251 14.0037 14.1632 12.836 12.8376 12.0186C11.5119 11.2012 9.97674 10.7674 8.40954 10.7675ZM28.6991 10.7675C28.2878 10.7675 27.8931 10.8289 27.5002 10.8848C27.6275 10.4663 27.7584 10.0407 27.9687 9.65832C28.179 9.1028 28.5073 8.62124 28.8338 8.13607C29.1068 7.61122 29.5882 7.25591 29.9423 6.80681C30.3131 6.37034 30.8185 6.07996 31.2187 5.71743C31.6116 5.33868 32.1262 5.1493 32.5357 4.88236C32.9637 4.64248 33.3362 4.37735 33.7347 4.2511L34.7288 3.8507L35.6031 3.49539L34.7086 0L33.6074 0.259719C33.2551 0.346292 32.8253 0.447294 32.3365 0.568135C31.8367 0.658316 31.3036 0.905411 30.7097 1.13086C30.125 1.38878 29.4443 1.56012 28.8135 1.97315C28.179 2.36633 27.4467 2.69459 26.8011 3.22124C26.1759 3.76413 25.4215 4.23487 24.8644 4.92385C24.2557 5.56954 23.6544 6.24769 23.1878 7.01964C22.6473 7.75551 22.2803 8.56353 21.8929 9.36252C21.5424 10.1615 21.2602 10.9786 21.0297 11.7721C20.5925 13.3629 20.397 14.8743 20.3214 16.1675C20.2587 17.4625 20.2956 18.5393 20.373 19.3184C20.4007 19.6864 20.4523 20.0435 20.4892 20.2906L20.5353 20.5936L20.5833 20.5828C20.9114 22.0813 21.6666 23.4583 22.7616 24.5546C23.8566 25.651 25.2467 26.4217 26.771 26.7778C28.2953 27.1339 29.8915 27.0608 31.3751 26.5668C32.8586 26.0729 34.1689 25.1783 35.1542 23.9867C36.1395 22.795 36.7597 21.3549 36.943 19.833C37.1263 18.3111 36.8652 16.7695 36.1899 15.3866C35.5147 14.0037 34.4528 12.836 33.1272 12.0186C31.8015 11.2012 30.2663 10.7674 28.6991 10.7675Z" fill="#50B8E7" />
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
                            </span>
                        </div>
                        <div className='pt-4'>
                            <div className="row g-0">
                                <div className="col">
                                    <div className=''>
                                        <span style={{ fontWeight: 600 }}>Benjamin.T</span>
                                    </div>
                                    <div>
                                        <span style={{ color: '#808080', fontSize: '14px' }}>UI UX Designer</span>
                                    </div>
                                </div>
                                <div className="col-auto my-auto">
                                    <svg width="95" height="18" viewBox="0 0 95 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18.2456 7.01988C18.1478 6.71888 17.8876 6.49951 17.5745 6.45407L12.2638 5.68247L9.88865 0.869697C9.7486 0.585931 9.45957 0.40625 9.14316 0.40625C8.82669 0.40625 8.53766 0.585931 8.39766 0.869697L6.02273 5.68241L0.711822 6.45401C0.398682 6.49951 0.138471 6.71888 0.0407045 7.01983C-0.0570617 7.32083 0.0244655 7.65121 0.25109 7.87207L4.09407 11.6177L3.18652 16.9076C3.13303 17.2195 3.26123 17.5347 3.51722 17.7207C3.66204 17.8259 3.83358 17.8795 4.00594 17.8795C4.13824 17.8795 4.27109 17.8479 4.39274 17.784L9.1431 15.2867L13.8934 17.784C14.0158 17.8483 14.1498 17.879 14.2825 17.8795C14.7412 17.8788 15.1127 17.5069 15.1127 17.0481C15.1127 16.9843 15.1055 16.922 15.0919 16.8623L14.1922 11.6177L18.0352 7.87207C18.2619 7.65121 18.3434 7.32083 18.2456 7.01988Z" fill="#50B8E7" />
                                        <path d="M37.424 7.01988C37.3261 6.71888 37.066 6.49951 36.7528 6.45407L31.4421 5.68247L29.067 0.869697C28.9269 0.585931 28.6379 0.40625 28.3215 0.40625C28.005 0.40625 27.716 0.585931 27.576 0.869697L25.2011 5.68241L19.8902 6.45401C19.577 6.49951 19.3168 6.71888 19.219 7.01983C19.1213 7.32083 19.2028 7.65121 19.4294 7.87207L23.2724 11.6177L22.3649 16.9076C22.3114 17.2195 22.4396 17.5347 22.6956 17.7207C22.8404 17.8259 23.0119 17.8795 23.1843 17.8795C23.3166 17.8795 23.4494 17.8479 23.5711 17.784L28.3214 15.2867L33.0718 17.784C33.1941 17.8483 33.3281 17.879 33.4609 17.8795C33.9195 17.8788 34.2911 17.5069 34.2911 17.0481C34.2911 16.9843 34.2839 16.922 34.2702 16.8623L33.3705 11.6177L37.2135 7.87207C37.4402 7.65121 37.5217 7.32083 37.424 7.01988Z" fill="#50B8E7" />
                                        <path d="M56.6024 7.01988C56.5046 6.71888 56.2444 6.49951 55.9313 6.45407L50.6206 5.68247L48.2455 0.869697C48.1054 0.585931 47.8164 0.40625 47.5 0.40625C47.1835 0.40625 46.8945 0.585931 46.7545 0.869697L44.3795 5.68241L39.0686 6.45401C38.7555 6.49951 38.4953 6.71888 38.3975 7.01983C38.2997 7.32083 38.3813 7.65121 38.6079 7.87207L42.4509 11.6177L41.5433 16.9076C41.4898 17.2195 41.618 17.5347 41.874 17.7207C42.0189 17.8259 42.1904 17.8795 42.3628 17.8795C42.4951 17.8795 42.6279 17.8479 42.7496 17.784L47.4999 15.2867L52.2502 17.784C52.3726 17.8483 52.5066 17.879 52.6393 17.8795C53.098 17.8788 53.4695 17.5069 53.4695 17.0481C53.4695 16.9843 53.4623 16.922 53.4487 16.8623L52.549 11.6177L56.392 7.87207C56.6187 7.65121 56.7002 7.32083 56.6024 7.01988Z" fill="#50B8E7" />
                                        <path d="M75.7808 7.01988C75.683 6.71888 75.4228 6.49951 75.1097 6.45407L69.7989 5.68247L67.4238 0.869697C67.2838 0.585931 66.9947 0.40625 66.6783 0.40625C66.3619 0.40625 66.0728 0.585931 65.9328 0.869697L63.5579 5.68241L58.247 6.45401C57.9338 6.49951 57.6736 6.71888 57.5759 7.01983C57.4781 7.32083 57.5596 7.65121 57.7862 7.87207L61.6292 11.6177L60.7217 16.9076C60.6682 17.2195 60.7964 17.5347 61.0524 17.7207C61.1972 17.8259 61.3687 17.8795 61.5411 17.8795C61.6734 17.8795 61.8062 17.8479 61.9279 17.784L66.6783 15.2867L71.4286 17.784C71.5509 17.8483 71.685 17.879 71.8177 17.8795C72.2763 17.8788 72.6479 17.5069 72.6479 17.0481C72.6479 16.9843 72.6407 16.922 72.627 16.8623L71.7274 11.6177L75.5703 7.87207C75.797 7.65121 75.8785 7.32083 75.7808 7.01988Z" fill="#50B8E7" />
                                        <path d="M94.9592 7.01988C94.8614 6.71888 94.6013 6.49951 94.2881 6.45407L88.9774 5.68247L86.6023 0.869697C86.4622 0.585931 86.1732 0.40625 85.8568 0.40625C85.5403 0.40625 85.2513 0.585931 85.1113 0.869697L82.7364 5.68241L77.4254 6.45401C77.1123 6.49951 76.8521 6.71888 76.7543 7.01983C76.6566 7.32083 76.7381 7.65121 76.9647 7.87207L80.8077 11.6177L79.9001 16.9076C79.8467 17.2195 79.9748 17.5347 80.2308 17.7207C80.3757 17.8259 80.5472 17.8795 80.7196 17.8795C80.8519 17.8795 80.9847 17.8479 81.1064 17.784L85.8567 15.2867L90.607 17.784C90.7294 17.8483 90.8634 17.879 90.9962 17.8795C91.4548 17.8788 91.8263 17.5069 91.8263 17.0481C91.8263 16.9843 91.8191 16.922 91.8055 16.8623L90.9058 11.6177L94.7488 7.87207C94.9755 7.65121 95.057 7.32083 94.9592 7.01988Z" fill="#50B8E7" />
                                    </svg>

                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default HomeSlider