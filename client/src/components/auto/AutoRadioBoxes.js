import React from 'react'
import { useState } from 'react'
import FirstRadioChecked from './FirstRadioChecked'
import SecondRadioChecked from './SecondRadioChecked'
import {ReactComponent as MainImg} from '../../assets/images/auto/sideImg.svg'
function AutoRadioBoxes() {
    const [autoCheck, setAutoCheck] = useState(0)
    
    return (
        <div>
            <div className="wrapDiv container-xl px-4 px-xl-0 bodyCounterPadding">
                <div className="row justify-content-between gx-4 bodyCounterPadding">
                    <div className="col-12 col-md-6 col-lg-5 col-xl-4 text-start">
                        <div className='pb-5 text-start'>
                            <span className='fw-700 fs-3 normalTextToBlue'>
                                Lorem Ipsum Dolor
                            </span>
                        </div>
                        <div className='pb-5 pb-md-0 pe-0 pe-lg-5'>
                            <MainImg className='img-fluid' />
                        </div>

                    </div>
                    <div className="col-12 col-md-6 col-lg-7 col-xl-7 text-start">
                        <div className='fw-500 fs-5 normalTextToWhite'>
                            <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</span>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-7 col-xl-6 mx-auto text-start">
                    <div className="hausratBlueDiv p-4">
                        <div className="pb-5 text-center">
                            <span className='firstBlueTitle fs-4 fw-700'>
                                Ihre Autoversicherung
                            </span>
                        </div>
                        <div className="">
                            <div className="row gx-4 gy-4 gy-sm-0 justify-content-center">
                                <div className="col-12 col-sm-6">
                                    <label htmlFor="autoFirstRadio" className="container1 autoCheckbox w-100">
                                        <input onChange={() => { setAutoCheck(1) }} id='autoFirstRadio' type="radio" name='autoRadio' hidden />
                                        <div className="checkmark checkmarkColorAuto">
                                            <div>
                                                <div className=' text-center'>
                                                    <svg width="57" height="90" viewBox="0 0 57 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M9.45605 42.6033L3.66555 42.6167C3.18798 42.6167 2.67725 42.1234 2.67725 41.5234L2.73031 25.4242C2.73031 24.5976 3.49972 24.1776 3.97729 24.1776L9.65504 24.2443C10.1326 24.2443 10.703 24.7376 10.703 25.3376L10.6831 41.3167C10.6831 41.9234 10.1724 42.61 9.45605 42.6033Z" fill="#5A5A5A" />
                                                        <path d="M52.8818 42.6033L47.0913 42.6167C46.6138 42.6167 46.103 42.1234 46.103 41.5234L46.1561 25.4242C46.1561 24.5976 46.9255 24.1776 47.4031 24.1776L53.0808 24.2443C53.5584 24.2443 54.1288 24.7376 54.1288 25.3376L54.1089 41.3167C54.1089 41.9234 53.5982 42.61 52.8818 42.6033Z" fill="#5A5A5A" />
                                                        <path d="M55.5738 33.6377C55.6733 28.678 56.1443 24.0182 56.0315 19.0651C56.0182 18.6118 56.005 18.1385 55.7927 17.7585C55.5208 17.2785 51.9987 15.2653 49.7568 14.3187C48.543 10.7255 45.2 3.14592 44.5168 2.15931C43.8867 1.24602 42.9581 0.53939 41.9565 0.53939C33.8312 0.486059 25.5335 0.506058 17.2291 0.53939C16.3271 0.546056 15.3719 0.559389 14.5959 1.0927C13.8132 1.63267 13.329 2.59929 12.8846 3.52591C11.2065 7.00573 9.52835 10.4922 7.75737 14.2387C6.11905 15.0787 4.48736 15.9119 2.84903 16.7519C2.3781 16.9919 1.90053 17.2385 1.53572 17.6652C0.8658 18.4518 0.733143 19.6518 0.666814 20.7584C0.401499 25.2048 0.487726 28.698 0.832636 33.3911C0.68008 35.9043 6.48385 35.5843 9.32936 35.5909C24.1074 35.6309 37.8574 35.6709 52.6355 35.7043C53.3253 35.7043 54.0483 35.6976 54.6651 35.3443C55.2886 34.9976 55.5672 34.231 55.5738 33.6377Z" fill="white" />
                                                        <path d="M52.7631 36.2178C52.7167 36.2178 52.6769 36.2178 52.6304 36.2178L9.32434 36.1044C9.04575 36.1044 8.73401 36.1044 8.409 36.1111C5.76248 36.1311 2.14092 36.1578 0.834243 34.7778C0.469434 34.3912 0.296979 33.9312 0.323511 33.4046C-0.0479308 28.3582 -0.094361 24.925 0.157689 20.7385C0.23065 19.5719 0.369941 18.252 1.14599 17.3387C1.57713 16.8321 2.12765 16.5521 2.61186 16.3054L7.36764 13.8722C9.11208 10.1791 10.7968 6.69258 12.4219 3.31275C12.853 2.41947 13.3903 1.30619 14.3056 0.679554C15.2342 0.039586 16.3419 0.0395865 17.2241 0.0329201C25.2167 -0.000411502 33.7466 -0.0204105 41.9515 0.0329201C43.0327 0.0329201 44.1204 0.706218 44.9297 1.87283C45.6725 2.93944 48.9028 10.3124 50.1564 13.9455C52.0799 14.7922 55.8209 16.7987 56.2255 17.5187C56.504 18.0187 56.5173 18.6253 56.5306 19.0653C56.6035 22.0918 56.451 25.065 56.3051 27.9382C56.2122 29.7981 56.1127 31.7246 56.0729 33.6646L55.5622 33.6579L56.0729 33.6646C56.0596 34.3578 55.7479 35.3311 54.9055 35.8111C54.2157 36.1978 53.4264 36.2178 52.7631 36.2178ZM9.22484 35.0845C9.25801 35.0845 9.2978 35.0845 9.33097 35.0845L52.6371 35.1978C53.2539 35.1978 53.8973 35.1978 54.4147 34.9045C54.8525 34.6578 55.0581 34.0712 55.0713 33.6312C55.1111 31.6713 55.2106 29.7447 55.3035 27.8715C55.4494 25.0183 55.5953 22.0651 55.529 19.0786C55.5224 18.7253 55.5091 18.292 55.3566 18.012C55.0448 17.6254 51.8544 15.7588 49.5727 14.7922C49.44 14.7388 49.3339 14.6255 49.2875 14.4855C48.0604 10.8524 44.7572 3.38608 44.1138 2.4528C43.5036 1.57951 42.7076 1.05287 41.9714 1.05287C33.7599 0.999537 25.2366 1.01954 17.2506 1.05287C16.4613 1.05953 15.5725 1.05953 14.896 1.51951C14.1995 1.99282 13.7551 2.92611 13.3571 3.75273C11.7055 7.17256 10.0009 10.719 8.22991 14.4589C8.18348 14.5588 8.10389 14.6455 8.00439 14.6922L3.09606 17.2054C2.67819 17.4187 2.24041 17.6454 1.9353 17.9987C1.36487 18.6653 1.25211 19.7919 1.19242 20.7919C0.940369 24.9383 0.986799 28.3448 1.35824 33.3579C1.35824 33.3779 1.35824 33.4046 1.35824 33.4246C1.34497 33.6779 1.41794 33.8845 1.59039 34.0645C2.59196 35.1245 6.24005 35.0978 8.42226 35.0845C8.69421 35.0845 8.97279 35.0845 9.22484 35.0845Z" fill="#5A5A5A" />
                                                        <path d="M12.853 14.5451C14.3388 11.292 16.2491 5.59225 17.6088 4.93228C18.491 4.50564 30.0587 4.69229 36.3865 4.66563C37.7263 4.65896 39.2254 4.73229 40.1341 5.79224C40.6117 6.35888 44.2597 14.2985 44.2597 14.2985L12.853 14.5451Z" fill="#BEE8FF" />
                                                        <path d="M12.8531 15.0593C12.6807 15.0593 12.5215 14.9726 12.4286 14.826C12.3358 14.6793 12.3225 14.4926 12.3955 14.3327C12.8001 13.446 13.2312 12.3861 13.6889 11.2595C15.2675 7.38634 16.3089 4.9998 17.39 4.47316C18.0467 4.15317 21.907 4.11318 30.8879 4.14651C32.8844 4.15317 34.7947 4.15984 36.38 4.15317C37.8392 4.15317 39.4775 4.23983 40.5189 5.45977C41.023 6.04641 44.1073 12.7461 44.7175 14.086C44.7905 14.246 44.7772 14.426 44.6843 14.5726C44.5915 14.7193 44.4323 14.806 44.2598 14.8126L12.8531 15.0593C12.8598 15.0593 12.8531 15.0593 12.8531 15.0593ZM26.4903 5.16645C22.3514 5.16645 18.365 5.20645 17.8212 5.40644C17.0252 5.79309 15.6389 9.17959 14.6307 11.6595C14.2858 12.4994 13.9608 13.306 13.6424 14.0393L43.4705 13.806C42.0776 10.7862 40.0745 6.53972 39.7495 6.13307C38.9933 5.24645 37.6734 5.17312 36.3932 5.18645C34.808 5.19312 32.8911 5.18645 30.8946 5.17979C29.5083 5.16646 27.9894 5.16645 26.4903 5.16645Z" fill="#5A5A5A" />
                                                        <path d="M24.2753 27.8253C21.8809 27.8253 19.4997 27.8187 17.1185 27.7987C17.0256 27.7987 16.9526 27.7187 16.9526 27.6253C16.9526 27.532 17.0322 27.4587 17.1251 27.4587C24.6269 27.512 32.2348 27.4854 39.7233 27.3654C39.8162 27.3654 39.8892 27.4387 39.8958 27.532C39.8958 27.6253 39.8228 27.7053 39.73 27.7053C34.6027 27.7853 29.4291 27.8253 24.2753 27.8253Z" fill="#5A5A5A" />
                                                        <path d="M24.2753 23.559C21.8809 23.559 19.4997 23.5523 17.1185 23.5323C17.0256 23.5323 16.9526 23.4523 16.9526 23.359C16.9526 23.2657 17.0322 23.1923 17.1251 23.1923C24.6269 23.2457 32.2348 23.2123 39.7233 23.099C39.8029 23.0924 39.8958 23.1724 39.8958 23.2657C39.8958 23.359 39.8228 23.439 39.73 23.439C34.6027 23.519 29.4291 23.559 24.2753 23.559Z" fill="#5A5A5A" />
                                                        <path d="M49.1274 12.5118C48.8886 12.5118 48.6763 12.3452 48.6299 12.0985C48.5768 11.8185 48.7559 11.5519 49.0345 11.4985C50.9713 11.1186 52.9546 10.9719 54.9245 11.0586C55.2031 11.0719 55.422 11.3119 55.4087 11.5919C55.3955 11.8719 55.1567 12.1052 54.8781 12.0785C52.9877 11.9919 51.0907 12.1385 49.2269 12.4985C49.1871 12.5052 49.1539 12.5118 49.1274 12.5118Z" fill="#5A5A5A" />
                                                        <path d="M8.42797 12.6656C8.36164 12.6656 8.30195 12.6522 8.23562 12.6256C6.91567 12.0856 3.5727 11.8856 2.16653 12.0523C1.88795 12.0856 1.6359 11.8856 1.60273 11.6056C1.56957 11.3256 1.76855 11.0723 2.04714 11.039C3.57933 10.8657 7.08813 11.059 8.61369 11.6856C8.87237 11.7923 8.9984 12.0923 8.89227 12.3523C8.81931 12.5456 8.62696 12.6656 8.42797 12.6656Z" fill="#5A5A5A" />
                                                        <path d="M4.65388 23.1782C4.38193 23.1782 4.15642 22.9648 4.14315 22.6915C4.12988 22.4115 4.34877 22.1715 4.62735 22.1582C6.8759 22.0582 9.15098 21.9982 11.3863 21.9716C11.6582 21.9782 11.897 22.1982 11.9036 22.4782C11.9036 22.7582 11.6781 22.9915 11.3995 22.9982C9.17088 23.0248 6.90906 23.0848 4.67378 23.1848C4.66715 23.1782 4.66051 23.1782 4.65388 23.1782Z" fill="#5A5A5A" />
                                                        <path d="M45.7525 23.0847C45.4806 23.0847 45.255 22.8713 45.2418 22.598C45.2285 22.318 45.4474 22.078 45.726 22.0647C47.9613 21.9647 50.2363 21.9047 52.4849 21.8781H52.4915C52.7701 21.8781 52.9956 22.1047 53.0023 22.3847C53.0023 22.6647 52.7834 22.898 52.4982 22.9047C50.2562 22.9313 47.9944 22.9913 45.7724 23.0913C45.7658 23.0847 45.7591 23.0847 45.7525 23.0847Z" fill="#5A5A5A" />
                                                    </svg>

                                                </div>


                                            </div>
                                        </div>
                                        <div className='text-center pt-2'>
                                            <span className='fw-400'>Neueinlösung eines Fahrzeuges</span>
                                        </div>
                                    </label>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <label htmlFor="autoSecondRadio" className="container1 autoCheckbox w-100">
                                        <input onChange={() => { setAutoCheck(2) }} id='autoSecondRadio' type="radio" name='autoRadio' hidden />
                                        <div className="checkmark checkmarkColorAuto">
                                            <div className='text-center'>
                                                <svg className='w-100' height="90" viewBox="0 0 112 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M62.0664 6.40507C61.3262 3.57924 58.2914 -1.22469 52.0739 2.16632C44.3019 6.40507 52.8141 11.622 55.7748 11.622C55.7748 13.1871 55.7748 14.6653 55.7748 15.2087M55.7748 15.2087C57.3785 15.3174 60.512 16.1217 60.2159 18.4693C59.8909 21.0461 58.9952 23.6229 55.7748 23.109M55.7748 15.2087C51.7038 15.8608 49.8533 21.0777 54.2944 22.708C54.8358 22.9068 55.3277 23.0377 55.7748 23.109M55.7748 23.109V41.9455M55.7748 41.9455H86.1223M55.7748 41.9455H28.388M86.1223 41.9455V66.3998M86.1223 41.9455L98.3354 66.3998M86.1223 41.9455L70.2084 73.5731M28.388 41.9455L27.6478 66.3998M28.388 41.9455L42.4515 73.5731M28.388 41.9455L11.7339 73.5731" stroke="#5A5A5A" strokeLinecap="round" />
                                                    <path d="M111.288 94.4408H59.8457C59.8457 98.8752 64.5335 100.636 66.8774 100.962C77.24 101.179 99.1495 101.484 103.887 100.962C108.624 100.44 110.795 96.3971 111.288 94.4408Z" fill="#BEE8FF" stroke="#5A5A5A" strokeLinecap="round" />
                                                    <path d="M52.4428 94.4408H1C1 98.8752 5.68783 100.636 8.03174 100.962C18.3943 101.179 40.3037 101.484 45.0409 100.962C49.7781 100.44 51.9493 96.3971 52.4428 94.4408Z" fill="#BEE8FF" stroke="#5A5A5A" strokeLinecap="round" />
                                                    <path d="M17.0545 92.5724L14.0228 92.5785C13.7728 92.5785 13.5054 92.351 13.5054 92.0742L13.5332 84.6481C13.5332 84.2668 13.936 84.0731 14.186 84.0731L17.1587 84.1039C17.4087 84.1039 17.7074 84.3314 17.7074 84.6082L17.697 91.9789C17.697 92.2587 17.4296 92.5755 17.0545 92.5724Z" fill="#5A5A5A" />
                                                    <path d="M39.7904 92.5724L36.7587 92.5785C36.5086 92.5785 36.2412 92.351 36.2412 92.0742L36.269 84.6481C36.269 84.2668 36.6718 84.0731 36.9219 84.0731L39.8945 84.1039C40.1446 84.1039 40.4432 84.3314 40.4432 84.6082L40.4328 91.9789C40.4328 92.2587 40.1654 92.5755 39.7904 92.5724Z" fill="#5A5A5A" />
                                                    <path d="M41.2 88.4368C41.2521 86.149 41.4987 83.9996 41.4396 81.7149C41.4327 81.5058 41.4257 81.2875 41.3146 81.1122C41.1722 80.8908 39.3282 79.9621 38.1544 79.5255C37.5189 77.8681 35.7686 74.3718 35.4109 73.9167C35.081 73.4954 34.5948 73.1695 34.0704 73.1695C29.8163 73.1449 25.4719 73.1541 21.124 73.1695C20.6517 73.1726 20.1516 73.1787 19.7453 73.4247C19.3355 73.6738 19.082 74.1197 18.8494 74.5471C17.9708 76.1522 17.0922 77.7604 16.1649 79.4886C15.3072 79.876 14.4529 80.2604 13.5951 80.6479C13.3485 80.7586 13.0985 80.8723 12.9075 81.0691C12.5567 81.432 12.4873 81.9855 12.4526 82.4959C12.3136 84.5469 12.3588 86.1582 12.5394 88.323C12.4595 89.4823 15.4982 89.3347 16.988 89.3378C24.7253 89.3562 31.9243 89.3747 39.6616 89.3901C40.0227 89.3901 40.4013 89.387 40.7242 89.224C41.0507 89.0641 41.1965 88.7105 41.2 88.4368Z" fill="white" />
                                                    <path d="M39.7285 89.627C39.7042 89.627 39.6833 89.627 39.659 89.627L16.9854 89.5747C16.8396 89.5747 16.6763 89.5747 16.5062 89.5778C15.1206 89.587 13.2244 89.5993 12.5403 88.9628C12.3493 88.7845 12.259 88.5723 12.2729 88.3294C12.0784 86.0016 12.0541 84.418 12.1861 82.4869C12.2243 81.9488 12.2972 81.3399 12.7035 80.9186C12.9292 80.6849 13.2175 80.5558 13.471 80.442L15.961 79.3196C16.8743 77.6161 17.7564 76.0079 18.6072 74.4489C18.8329 74.0368 19.1142 73.5233 19.5935 73.2342C20.0796 72.939 20.6596 72.939 21.1215 72.936C25.3061 72.9206 29.7721 72.9114 34.0679 72.936C34.6339 72.936 35.2035 73.2465 35.6272 73.7847C36.0161 74.2767 37.7073 77.6776 38.3637 79.3535C39.3708 79.744 41.3294 80.6696 41.5413 81.0017C41.6871 81.2323 41.6941 81.5121 41.701 81.7151C41.7392 83.1111 41.6593 84.4826 41.5829 85.8079C41.5343 86.6658 41.4822 87.5545 41.4614 88.4493L41.194 88.4462L41.4614 88.4493C41.4544 88.7691 41.2912 89.218 40.8502 89.4394C40.489 89.6178 40.0758 89.627 39.7285 89.627ZM16.9333 89.1043C16.9507 89.1043 16.9715 89.1043 16.9889 89.1043L39.6625 89.1565C39.9855 89.1565 40.3223 89.1565 40.5932 89.0212C40.8224 88.9075 40.93 88.6369 40.937 88.4339C40.9578 87.5299 41.0099 86.6412 41.0585 85.7771C41.1349 84.461 41.2113 83.0988 41.1766 81.7212C41.1731 81.5582 41.1662 81.3584 41.0863 81.2292C40.9231 81.0509 39.2527 80.1899 38.0581 79.744C37.9886 79.7194 37.9331 79.6671 37.9088 79.6025C37.2663 77.9267 35.5369 74.4827 35.2 74.0522C34.8805 73.6494 34.4638 73.4064 34.0783 73.4064C29.779 73.3818 25.3166 73.3911 21.1354 73.4064C20.7221 73.4095 20.2568 73.4095 19.9025 73.6217C19.5379 73.84 19.3052 74.2705 19.0969 74.6518C18.2321 76.2293 17.3396 77.8652 16.4124 79.5902C16.3881 79.6364 16.3464 79.6763 16.2943 79.6979L13.7245 80.8571C13.5057 80.9555 13.2765 81.0601 13.1168 81.2231C12.8181 81.5306 12.7591 82.0502 12.7278 82.5115C12.5959 84.4241 12.6202 85.9954 12.8146 88.3078C12.8146 88.3171 12.8146 88.3294 12.8146 88.3386C12.8077 88.4554 12.8459 88.5508 12.9362 88.6338C13.4606 89.1227 15.3706 89.1104 16.5131 89.1043C16.6555 89.1043 16.8014 89.1043 16.9333 89.1043Z" fill="#5A5A5A" />
                                                    <path d="M18.833 79.6297C19.6109 78.1291 20.6111 75.4999 21.323 75.1955C21.7848 74.9987 27.8413 75.0848 31.1543 75.0725C31.8558 75.0694 32.6407 75.1033 33.1164 75.5922C33.3665 75.8536 35.2765 79.5159 35.2765 79.5159L18.833 79.6297Z" fill="#BEE8FF" />
                                                    <path d="M18.833 79.8671C18.7427 79.8671 18.6593 79.8271 18.6107 79.7595C18.5621 79.6918 18.5552 79.6057 18.5934 79.5319C18.8052 79.1229 19.0309 78.634 19.2705 78.1143C20.0971 76.3278 20.6423 75.2269 21.2083 74.984C21.5521 74.8364 23.5733 74.8179 28.2754 74.8333C29.3207 74.8364 30.3208 74.8395 31.1508 74.8364C31.9148 74.8364 32.7726 74.8764 33.3178 75.4391C33.5818 75.7097 35.1966 78.8001 35.5161 79.4181C35.5543 79.4919 35.5473 79.575 35.4987 79.6426C35.4501 79.7103 35.3668 79.7502 35.2765 79.7533L18.833 79.8671C18.8365 79.8671 18.833 79.8671 18.833 79.8671ZM25.973 75.3038C23.806 75.3038 21.7188 75.3222 21.4341 75.4145C21.0173 75.5928 20.2915 77.1549 19.7637 78.2988C19.5831 78.6863 19.4129 79.0584 19.2462 79.3966L34.8632 79.289C34.1339 77.896 33.0852 75.9372 32.915 75.7497C32.5191 75.3407 31.828 75.3069 31.1578 75.313C30.3278 75.3161 29.3242 75.313 28.2789 75.3099C27.5531 75.3038 26.7578 75.3038 25.973 75.3038Z" fill="#5A5A5A" />
                                                    <path d="M24.8129 85.7556C23.5593 85.7556 22.3125 85.7526 21.0658 85.7433C21.0172 85.7433 20.979 85.7064 20.979 85.6634C20.979 85.6203 21.0207 85.5865 21.0693 85.5865C24.997 85.6111 28.9802 85.5988 32.901 85.5435C32.9496 85.5435 32.9878 85.5773 32.9913 85.6203C32.9913 85.6634 32.9531 85.7003 32.9044 85.7003C30.22 85.7372 27.5113 85.7556 24.8129 85.7556Z" fill="#5A5A5A" />
                                                    <path d="M24.8129 83.7878C23.5593 83.7878 22.3125 83.7847 21.0658 83.7755C21.0172 83.7755 20.979 83.7386 20.979 83.6955C20.979 83.6525 21.0207 83.6187 21.0693 83.6187C24.997 83.6433 28.9802 83.6279 32.901 83.5756C32.9426 83.5725 32.9913 83.6094 32.9913 83.6525C32.9913 83.6955 32.9531 83.7324 32.9044 83.7324C30.22 83.7693 27.5113 83.7878 24.8129 83.7878Z" fill="#5A5A5A" />
                                                    <path d="M37.8249 78.692C37.6999 78.692 37.5888 78.6151 37.5644 78.5013C37.5367 78.3722 37.6304 78.2492 37.7763 78.2246C38.7903 78.0493 39.8287 77.9817 40.8601 78.0216C41.0059 78.0278 41.1205 78.1385 41.1136 78.2676C41.1067 78.3968 40.9816 78.5044 40.8358 78.4921C39.846 78.4521 38.8528 78.5198 37.877 78.6858C37.8562 78.6889 37.8388 78.692 37.8249 78.692Z" fill="#5A5A5A" />
                                                    <path d="M16.5163 78.7629C16.4815 78.7629 16.4503 78.7567 16.4156 78.7444C15.7245 78.4953 13.9742 78.4031 13.238 78.48C13.0921 78.4953 12.9602 78.4031 12.9428 78.2739C12.9254 78.1448 13.0296 78.0279 13.1755 78.0126C13.9777 77.9326 15.8148 78.0218 16.6135 78.3108C16.7489 78.36 16.8149 78.4984 16.7594 78.6183C16.7212 78.7075 16.6205 78.7629 16.5163 78.7629Z" fill="#5A5A5A" />
                                                    <path d="M14.5402 83.612C14.3978 83.612 14.2797 83.5136 14.2728 83.3875C14.2658 83.2584 14.3804 83.1477 14.5263 83.1415C15.7035 83.0954 16.8947 83.0677 18.065 83.0554C18.2074 83.0585 18.3324 83.16 18.3359 83.2891C18.3359 83.4183 18.2178 83.5259 18.072 83.529C16.9051 83.5413 15.7209 83.5689 14.5506 83.6151C14.5471 83.612 14.5436 83.612 14.5402 83.612Z" fill="#5A5A5A" />
                                                    <path d="M36.0573 83.5689C35.9149 83.5689 35.7968 83.4705 35.7899 83.3444C35.7829 83.2153 35.8975 83.1046 36.0434 83.0984C37.2137 83.0523 38.4048 83.0246 39.5821 83.0123H39.5856C39.7314 83.0123 39.8495 83.1169 39.853 83.246C39.853 83.3752 39.7384 83.4828 39.589 83.4859C38.4153 83.4982 37.231 83.5259 36.0677 83.572C36.0642 83.5689 36.0607 83.5689 36.0573 83.5689Z" fill="#5A5A5A" />
                                                    <path d="M76.2689 92.5724L73.2372 92.5785C72.9871 92.5785 72.7197 92.351 72.7197 92.0742L72.7475 84.6481C72.7475 84.2668 73.1503 84.0731 73.4004 84.0731L76.3731 84.1039C76.6231 84.1039 76.9218 84.3314 76.9218 84.6082L76.9113 91.9789C76.9113 92.2587 76.6439 92.5755 76.2689 92.5724Z" fill="#5A5A5A" />
                                                    <path d="M99.0052 92.5724L95.9735 92.5785C95.7235 92.5785 95.4561 92.351 95.4561 92.0742L95.4838 84.6481C95.4838 84.2668 95.8867 84.0731 96.1367 84.0731L99.1094 84.1039C99.3594 84.1039 99.6581 84.3314 99.6581 84.6082L99.6477 91.9789C99.6477 92.2587 99.3803 92.5755 99.0052 92.5724Z" fill="#5A5A5A" />
                                                    <path d="M100.415 88.4368C100.467 86.149 100.713 83.9996 100.654 81.7149C100.648 81.5058 100.641 81.2875 100.529 81.1122C100.387 80.8908 98.543 79.9621 97.3692 79.5255C96.7337 77.8681 94.9835 74.3718 94.6258 73.9167C94.2959 73.4954 93.8097 73.1695 93.2853 73.1695C89.0312 73.1449 84.6867 73.1541 80.3389 73.1695C79.8666 73.1726 79.3665 73.1787 78.9602 73.4247C78.5504 73.6738 78.2969 74.1197 78.0642 74.5471C77.1856 76.1522 76.307 77.7604 75.3798 79.4886C74.522 79.876 73.6677 80.2604 72.8099 80.6479C72.5634 80.7586 72.3133 80.8723 72.1223 81.0691C71.7716 81.432 71.7021 81.9855 71.6674 82.4959C71.5285 84.5469 71.5736 86.1582 71.7542 88.323C71.6743 89.4823 74.713 89.3347 76.2028 89.3378C83.9401 89.3562 91.1391 89.3747 98.8764 89.3901C99.2376 89.3901 99.6161 89.387 99.9391 89.224C100.266 89.0641 100.411 88.7105 100.415 88.4368Z" fill="white" />
                                                    <path d="M98.9428 89.627C98.9185 89.627 98.8977 89.627 98.8734 89.627L76.1998 89.5747C76.0539 89.5747 75.8907 89.5747 75.7205 89.5778C74.3349 89.587 72.4388 89.5993 71.7547 88.9628C71.5637 88.7845 71.4734 88.5723 71.4873 88.3294C71.2928 86.0016 71.2685 84.418 71.4004 82.4869C71.4386 81.9488 71.5116 81.3399 71.9179 80.9186C72.1436 80.6849 72.4318 80.5558 72.6853 80.442L75.1753 79.3196C76.0886 77.6161 76.9707 76.0079 77.8216 74.4489C78.0473 74.0368 78.3286 73.5233 78.8078 73.2342C79.294 72.939 79.8739 72.939 80.3358 72.936C84.5205 72.9206 88.9865 72.9114 93.2822 72.936C93.8483 72.936 94.4178 73.2465 94.8415 73.7847C95.2305 74.2767 96.9217 77.6776 97.578 79.3535C98.5851 79.744 100.544 80.6696 100.756 81.0017C100.901 81.2323 100.908 81.5121 100.915 81.7151C100.954 83.1111 100.874 84.4826 100.797 85.8079C100.749 86.6658 100.697 87.5545 100.676 88.4493L100.408 88.4462L100.676 88.4493C100.669 88.7691 100.506 89.218 100.065 89.4394C99.7034 89.6178 99.2901 89.627 98.9428 89.627ZM76.1477 89.1043C76.165 89.1043 76.1859 89.1043 76.2032 89.1043L98.8768 89.1565C99.1998 89.1565 99.5367 89.1565 99.8075 89.0212C100.037 88.9075 100.144 88.6369 100.151 88.4339C100.172 87.5299 100.224 86.6412 100.273 85.7771C100.349 84.461 100.426 83.0988 100.391 81.7212C100.387 81.5582 100.381 81.3584 100.301 81.2292C100.137 81.0509 98.4671 80.1899 97.2724 79.744C97.203 79.7194 97.1474 79.6671 97.1231 79.6025C96.4806 77.9267 94.7512 74.4827 94.4144 74.0522C94.0949 73.6494 93.6781 73.4064 93.2927 73.4064C88.9934 73.3818 84.5309 73.3911 80.3497 73.4064C79.9365 73.4095 79.4711 73.4095 79.1169 73.6217C78.7522 73.84 78.5196 74.2705 78.3112 74.6518C77.4465 76.2293 76.554 77.8652 75.6268 79.5902C75.6025 79.6364 75.5608 79.6763 75.5087 79.6979L72.9389 80.8571C72.7201 80.9555 72.4909 81.0601 72.3311 81.2231C72.0325 81.5306 71.9734 82.0502 71.9422 82.5115C71.8102 84.4241 71.8345 85.9954 72.029 88.3078C72.029 88.3171 72.029 88.3294 72.029 88.3386C72.0221 88.4554 72.0603 88.5508 72.1505 88.6338C72.6749 89.1227 74.5849 89.1104 75.7275 89.1043C75.8699 89.1043 76.0157 89.1043 76.1477 89.1043Z" fill="#5A5A5A" />
                                                    <path d="M78.0474 79.6297C78.8253 78.1291 79.8254 75.4999 80.5373 75.1955C80.9992 74.9987 87.0557 75.0848 90.3687 75.0725C91.0702 75.0694 91.855 75.1033 92.3308 75.5922C92.5808 75.8536 94.4908 79.5159 94.4908 79.5159L78.0474 79.6297Z" fill="#BEE8FF" />
                                                    <path d="M78.0473 79.8671C77.957 79.8671 77.8737 79.8271 77.8251 79.7595C77.7765 79.6918 77.7695 79.6057 77.8077 79.5319C78.0196 79.1229 78.2453 78.634 78.4849 78.1143C79.3114 76.3278 79.8566 75.2269 80.4227 74.984C80.7665 74.8364 82.7876 74.8179 87.4897 74.8333C88.535 74.8364 89.5352 74.8395 90.3652 74.8364C91.1292 74.8364 91.987 74.8764 92.5322 75.4391C92.7961 75.7097 94.4109 78.8001 94.7304 79.4181C94.7686 79.4919 94.7617 79.575 94.7131 79.6426C94.6645 79.7103 94.5811 79.7502 94.4908 79.7533L78.0473 79.8671C78.0508 79.8671 78.0473 79.8671 78.0473 79.8671ZM85.1873 75.3038C83.0203 75.3038 80.9332 75.3222 80.6484 75.4145C80.2317 75.5928 79.5059 77.1549 78.978 78.2988C78.7974 78.6863 78.6273 79.0584 78.4606 79.3966L94.0776 79.289C93.3483 77.896 92.2995 75.9372 92.1293 75.7497C91.7335 75.3407 91.0424 75.3069 90.3721 75.313C89.5421 75.3161 88.5385 75.313 87.4932 75.3099C86.7674 75.3038 85.9722 75.3038 85.1873 75.3038Z" fill="#5A5A5A" />
                                                    <path d="M84.0278 85.7556C82.7741 85.7556 81.5274 85.7526 80.2807 85.7433C80.232 85.7433 80.1938 85.7064 80.1938 85.6634C80.1938 85.6203 80.2355 85.5865 80.2841 85.5865C84.2118 85.6111 88.1951 85.5988 92.1158 85.5435C92.1644 85.5435 92.2026 85.5773 92.2061 85.6203C92.2061 85.6634 92.1679 85.7003 92.1193 85.7003C89.4348 85.7372 86.7261 85.7556 84.0278 85.7556Z" fill="#5A5A5A" />
                                                    <path d="M84.0278 83.7878C82.7741 83.7878 81.5274 83.7847 80.2807 83.7755C80.232 83.7755 80.1938 83.7386 80.1938 83.6955C80.1938 83.6525 80.2355 83.6187 80.2841 83.6187C84.2118 83.6433 88.1951 83.6279 92.1158 83.5756C92.1575 83.5725 92.2061 83.6094 92.2061 83.6525C92.2061 83.6955 92.1679 83.7324 92.1193 83.7324C89.4348 83.7693 86.7261 83.7878 84.0278 83.7878Z" fill="#5A5A5A" />
                                                    <path d="M97.0397 78.692C96.9147 78.692 96.8036 78.6151 96.7793 78.5013C96.7515 78.3722 96.8453 78.2492 96.9911 78.2246C98.0052 78.0493 99.0435 77.9817 100.075 78.0216C100.221 78.0278 100.335 78.1385 100.328 78.2676C100.321 78.3968 100.196 78.5044 100.051 78.4921C99.0609 78.4521 98.0677 78.5198 97.0918 78.6858C97.071 78.6889 97.0536 78.692 97.0397 78.692Z" fill="#5A5A5A" />
                                                    <path d="M75.7306 78.7629C75.6959 78.7629 75.6646 78.7567 75.6299 78.7444C74.9388 78.4953 73.1886 78.4031 72.4523 78.48C72.3065 78.4953 72.1745 78.4031 72.1572 78.2739C72.1398 78.1448 72.244 78.0279 72.3898 78.0126C73.192 77.9326 75.0291 78.0218 75.8279 78.3108C75.9633 78.36 76.0293 78.4984 75.9737 78.6183C75.9355 78.7075 75.8348 78.7629 75.7306 78.7629Z" fill="#5A5A5A" />
                                                    <path d="M73.7545 83.612C73.6121 83.612 73.4941 83.5136 73.4871 83.3875C73.4802 83.2584 73.5948 83.1477 73.7406 83.1415C74.9179 83.0954 76.109 83.0677 77.2794 83.0554C77.4217 83.0585 77.5468 83.16 77.5502 83.2891C77.5502 83.4183 77.4322 83.5259 77.2863 83.529C76.1195 83.5413 74.9353 83.5689 73.7649 83.6151C73.7615 83.612 73.758 83.612 73.7545 83.612Z" fill="#5A5A5A" />
                                                    <path d="M95.2726 83.5689C95.1302 83.5689 95.0121 83.4705 95.0052 83.3444C94.9982 83.2153 95.1128 83.1046 95.2587 83.0984C96.429 83.0523 97.6202 83.0246 98.7974 83.0123H98.8009C98.9468 83.0123 99.0648 83.1169 99.0683 83.246C99.0683 83.3752 98.9537 83.4828 98.8044 83.4859C97.6306 83.4982 96.4464 83.5259 95.283 83.572C95.2795 83.5689 95.2761 83.5689 95.2726 83.5689Z" fill="#5A5A5A" />
                                                </svg>

                                            </div>
                                        </div>
                                        <div className='pt-2 text-center'>
                                            <span className='fw-400'>
                                                Vergleichsofferte für bestehende Autoversicherung
                                            </span>
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>
                        {/* <div className='pt-5'>
                            <div className="row g-0 justify-content-around">
                                <div className="col-auto">
                                    <button style={{ visibility: 'hidden' }} type='button' className='bg-transparent border-0'>
                                        <div className="row gx-2 gy-0 justify-content-center">
                                            <div className="col-auto my-auto">
                                                <svg width="16" viewBox="0 0 19 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M3.86677 15.6051L15.0938 5.56609C16.0738 4.69009 17.0648 3.82509 18.0258 2.92809C18.2051 2.79203 18.3545 2.62051 18.4646 2.4242C18.5747 2.22788 18.6432 2.011 18.6658 1.78705C18.6884 1.5631 18.6646 1.33689 18.596 1.12253C18.5273 0.908167 18.4153 0.710244 18.2668 0.541093C18.1122 0.389704 17.9286 0.271212 17.727 0.192796C17.5254 0.11438 17.31 0.0776731 17.0938 0.0848705C16.8776 0.0920679 16.6651 0.143031 16.4692 0.234681C16.2732 0.326332 16.0979 0.456758 15.9538 0.618089C10.9078 5.12009 5.8671 9.62809 0.831768 14.1421C-0.282232 15.1421 -0.278227 16.0841 0.849773 17.0971C5.88111 21.6151 10.9231 26.1214 15.9758 30.6161C16.1184 30.7788 16.2934 30.9101 16.4895 31.0015C16.6856 31.0929 16.8986 31.1425 17.115 31.1472C17.3313 31.1518 17.5463 31.1113 17.7461 31.0283C17.946 30.9453 18.1263 30.8216 18.2758 30.6651C18.4268 30.4967 18.5406 30.2984 18.6098 30.0831C18.6789 29.8678 18.7019 29.6403 18.6772 29.4155C18.6524 29.1907 18.5806 28.9737 18.4663 28.7786C18.352 28.5834 18.1978 28.4146 18.0138 28.2831C14.1044 24.7651 10.1858 21.2574 6.25778 17.7601C5.47978 17.0621 4.70477 16.3601 3.86677 15.6051Z" fill="white" />
                                                </svg>
                                            </div>
                                            <div className="col-auto my-auto">
                                                <div>
                                                    <span>Zurück</span>
                                                </div>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                                <div className="col-auto">
                                    <button type='button' className='bg-transparent border-0'>
                                        <div className="row gx-2 gy-0 justify-content-center">
                                            <div className="col-auto my-auto">
                                                <div>
                                                    <span>Weiter</span>
                                                </div>
                                            </div>
                                            <div className="col-auto">
                                                <svg width="16" viewBox="0 0 19 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M14.819 15.5216L3.59204 5.48264C2.61204 4.60664 1.62005 3.74164 0.660045 2.84464C0.480733 2.70858 0.331359 2.53706 0.221248 2.34074C0.111137 2.14443 0.042641 1.92755 0.0200305 1.7036C-0.00258 1.47965 0.0211916 1.25344 0.0898395 1.03908C0.158487 0.824716 0.27055 0.626793 0.419048 0.457642C0.573584 0.306095 0.757261 0.187471 0.958965 0.108963C1.16067 0.0304548 1.3762 -0.0063132 1.59253 0.000885127C1.80885 0.00808346 2.02146 0.0591051 2.21749 0.150849C2.41353 0.242592 2.58892 0.373153 2.73304 0.534638C7.77904 5.03664 12.8197 9.54464 17.855 14.0586C18.968 15.0586 18.965 16.0006 17.837 17.0136C12.8057 21.5316 7.76371 26.038 2.71104 30.5326C2.56841 30.6954 2.39347 30.8266 2.19734 30.9181C2.00121 31.0095 1.78818 31.0591 1.57183 31.0637C1.35549 31.0683 1.14055 31.0278 0.9407 30.9448C0.740853 30.8618 0.560471 30.7381 0.411037 30.5816C0.260022 30.4133 0.146219 30.215 0.0770526 29.9997C0.00788633 29.7844 -0.0150865 29.5569 0.00963927 29.3321C0.034365 29.1073 0.106234 28.8902 0.220546 28.6951C0.334859 28.5 0.489051 28.3311 0.673046 28.1996C4.58238 24.6816 8.50104 21.174 12.429 17.6766C13.206 16.9786 13.981 16.2756 14.819 15.5216Z" fill="white" />
                                                </svg>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
                <div className='bodyCounterPadding'>
                    {
                        {
                            1: <FirstRadioChecked />,
                            2: <SecondRadioChecked />
                        }[autoCheck]
                    }
                </div>

                <div className="row gx-4 justify-content-between">
                    <div className="col-12 col-md-6 col-lg-5 col-xl-4 text-start">
                        <div className='pb-4'>
                            <span className='fw-700 firstBlueTitle fs-1 '>Lorem Ipsum</span>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-7 col-xl-7 text-start">
                        <div className="">
                            <div className='fw-500 fs-5 normalTextToWhite'>
                                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AutoRadioBoxes