import React from 'react'
import { ReactComponent as Alltag } from '../../assets/images/rechtsschutzImgs/alltag.svg'
import { ReactComponent as AlltagDark } from '../../assets/images/rechtsschutzImgs/alltagDark.svg'

import { ReactComponent as Arbeit } from '../../assets/images/rechtsschutzImgs/Arbeit.svg'
import { ReactComponent as ArbeitDark } from '../../assets/images/rechtsschutzImgs/ArbeitDark.svg'

function LastSectionRechtss(props) {
    return (
        <>

            <div className="wrapDiv container-xl px-4 px-xl-0 mx-auto">
                <div className="text-start bodyCounterPadding">
                    <div className="row gx-4 justify-content-between">
                        <div className="col-12 col-md-5 col-xl-4 text-start">
                            <div className='pb-4'>
                                <span className='fw-700 fs-1 normalTextToWhite'>Privatrechtsschutz
                                </span>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-7 col-xl-7 text-start">
                            <div className="pb-5">
                                <div className='fw-500 fs-5 normalTextToWhite'>
                                    <span>Eine <span style={{ wordBreak: 'break-all' }}>Privatrechtschutzversicherung</span> hilft Ihnen bei einem Rechtsstreit bei privatrechtlichen
                                        Streitigkeiten, unterstützt Sie bei rechtlichen Fragen und übernimmt die anfallenden Kosten für einen
                                        Rechtsanwalt. Neben der <span style={{ wordBreak: 'break-all' }}>Verkehrsrechtschutzversicherung</span>  bietet die <span style={{ wordBreak: 'break-all' }}>Privatrechtschutzversicherung</span>
                                        eine Basis der rechtlichen Versicherungen für Privatpersonen. Häufig wird die <span style={{ wordBreak: 'break-all' }}>Privatrechtschutzversicherung</span> bei Streitigkeiten mit dem Arbeitgeber, dem Vermieter oder auch dem Nachbarn eingesetzt.</span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="row gx-4 justify-content-between">
                        <div className="col-12 col-md-6 col-lg-5 col-xl-4 text-start">
                            <div className='pb-4'>
                                <span className='fw-700 fs-1 normalTextToWhite' style={{ wordBreak: 'break-all' }}>Verkehrsrechtsschutz</span>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-7 col-xl-7 text-start">
                            <div className="">
                                <div className='fw-500 fs-5 normalTextToWhite'>
                                    <span>Die <span style={{ wordBreak: 'break-all' }}>Verkehrsrechtsschutzversicherung</span> unterstützt Sie bei Rechtsfällen und Streitigkeiten im Strassenverkehr. Weiter bietet der Verkehrsrechtsschutz
                                        rechtliche Hilfe durch Juristen und Anwälte bei Rechtsstreitigkeiten, die
                                        mit dem Kauf, Leasing oder Reparatur eines Fahrzeugs zusammenhängen.</span>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                <div className="">
                    <div className="row g-3 justify-content-center">
                        <div className="col-12 col-sm-6 col-md-4 col-lg">
                            <div className='p-4 whiteCardKranken h-100 text-center'>
                                <div className='pb-3'>

                                    {!props.darkMode
                                        ? <Arbeit height='90' width='90' />
                                        : <ArbeitDark height='90' width='90' />
                                    }
                                </div>
                                <div >
                                    <span className='fw-500'>Arbeit</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg">
                            <div className='p-4 whiteCardKranken h-100 text-center'>
                                <div className='pb-3'>
                                    {props.darkMode
                                        ? <svg width="120" height="90" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M31.1116 72.9679C23.5088 72.1533 19.5717 78.9641 18.5535 82.4714C18.5535 85.7523 17.5352 94.3506 31.1116 95.0295C41.3775 95.5427 43.2172 87.5625 42.9909 82.4714C42.199 79.643 38.7144 73.7825 31.1116 72.9679Z" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                                            <path d="M28.1579 88.1226C23.4286 86.162 26.7897 78.7393 30.0934 78.7393C35.2945 78.7393 40.1769 85.2701 32.6851 87.9697C31.231 88.4937 29.5857 88.7145 28.1579 88.1226Z" fill="#84CDEE" />
                                            <path d="M94.9206 88.5821C90.5079 87.7981 89.5446 85.3124 90.0831 83.0531C91.1471 78.5897 98.7504 78.194 100.655 82.3687C102.071 85.474 100.227 89.525 94.9206 88.5821Z" fill="#84CDEE" />
                                            <path d="M28.1579 88.1226C23.4286 86.162 26.7897 78.7393 30.0934 78.7393C35.2945 78.7393 40.1769 85.2701 32.6851 87.9697C31.231 88.4937 29.5857 88.7145 28.1579 88.1226Z" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                                            <path d="M94.9206 88.5821C90.5079 87.7981 89.5446 85.3124 90.0831 83.0531C91.1471 78.5897 98.7504 78.194 100.655 82.3687C102.071 85.474 100.227 89.525 94.9206 88.5821Z" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                                            <path d="M42.9905 82.4717H82.7014M82.7014 82.4717C84.2853 78.6251 89.2181 71.3391 96.2778 72.9682C102.32 74.3625 106.293 77.825 106.347 82.8111M82.7014 82.4717C81.0044 93.3328 97.9748 99.7815 103.745 90.6175C105.564 87.7276 106.371 85.1077 106.347 82.8111M106.347 82.8111L115.087 82.5565C116.709 82.5093 118 81.1806 118 79.5578V66.0107C118 61.6369 117.23 56.9768 113.541 54.6268C112.995 54.2785 112.394 53.9419 111.736 53.6267C108.612 52.1296 105.838 49.7681 104.5 46.5726C101.323 38.9826 94.1057 27.7475 78.2891 25.1114C57.9245 21.7173 48.7605 27.1479 48.0816 27.4873C47.554 27.7511 40.054 32.9366 37.0585 40.8121C35.4095 45.1473 31.7518 50.6647 27.324 52.0459V52.0459C20.4756 54.1823 14.5527 53.9942 9.08361 58.6369C4.13751 62.8355 0.0176558 69.7039 1.20644 80.0043C1.37185 81.4374 2.63158 82.4717 4.07423 82.4717C13.2145 82.4717 17.512 82.4717 18.553 82.4717M60.9792 57.0159H68.7856M44.6875 75.344H82.7014M107.818 75.344H115.624M8.71014 78.0592C8.04952 78.0592 7.4157 77.4699 6.88687 76.7214C6.46135 76.1191 6.94492 75.344 7.68236 75.344H16.5166M46.0452 51.2459H68.7856V31.8996C60.5267 31.1076 44.416 33.868 46.0452 51.2459ZM75.2344 31.8996V51.2459H95.2596C94.1282 44.507 88.5393 31.2033 75.2344 31.8996Z" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                                        </svg>

                                        :
                                        <svg width="120" height="90" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M31.1116 72.9679C23.5088 72.1533 19.5717 78.9641 18.5535 82.4714C18.5535 85.7523 17.5352 94.3506 31.1116 95.0295C41.3775 95.5427 43.2172 87.5625 42.9909 82.4714C42.199 79.643 38.7144 73.7825 31.1116 72.9679Z" stroke="black" stroke-width="1.5" stroke-linecap="round" />
                                            <path d="M28.1579 88.1226C23.4286 86.162 26.7897 78.7393 30.0934 78.7393C35.2945 78.7393 40.1769 85.2701 32.6851 87.9697C31.231 88.4937 29.5857 88.7145 28.1579 88.1226Z" fill="#84CDEE" />
                                            <path d="M94.9206 88.5821C90.5079 87.7981 89.5446 85.3124 90.0831 83.0531C91.1471 78.5897 98.7504 78.194 100.655 82.3687C102.071 85.474 100.227 89.525 94.9206 88.5821Z" fill="#84CDEE" />
                                            <path d="M28.1579 88.1226C23.4286 86.162 26.7897 78.7393 30.0934 78.7393C35.2945 78.7393 40.1769 85.2701 32.6851 87.9697C31.231 88.4937 29.5857 88.7145 28.1579 88.1226Z" stroke="black" stroke-width="1.5" stroke-linecap="round" />
                                            <path d="M94.9206 88.5821C90.5079 87.7981 89.5446 85.3124 90.0831 83.0531C91.1471 78.5897 98.7504 78.194 100.655 82.3687C102.071 85.474 100.227 89.525 94.9206 88.5821Z" stroke="black" stroke-width="1.5" stroke-linecap="round" />
                                            <path d="M42.9905 82.4717H82.7014M82.7014 82.4717C84.2853 78.6251 89.2181 71.3391 96.2778 72.9682C102.32 74.3625 106.293 77.825 106.347 82.8111M82.7014 82.4717C81.0044 93.3328 97.9748 99.7815 103.745 90.6175C105.564 87.7276 106.371 85.1077 106.347 82.8111M106.347 82.8111L115.087 82.5565C116.709 82.5093 118 81.1806 118 79.5578V66.0107C118 61.6369 117.23 56.9768 113.541 54.6268C112.995 54.2785 112.394 53.9419 111.736 53.6267C108.612 52.1296 105.838 49.7681 104.5 46.5726C101.323 38.9826 94.1057 27.7475 78.2891 25.1114C57.9245 21.7173 48.7605 27.1479 48.0816 27.4873C47.554 27.7511 40.054 32.9366 37.0585 40.8121C35.4095 45.1473 31.7518 50.6647 27.324 52.0459V52.0459C20.4756 54.1823 14.5527 53.9942 9.08361 58.6369C4.13751 62.8355 0.0176558 69.7039 1.20644 80.0043C1.37185 81.4374 2.63158 82.4717 4.07423 82.4717C13.2145 82.4717 17.512 82.4717 18.553 82.4717M60.9792 57.0159H68.7856M44.6875 75.344H82.7014M107.818 75.344H115.624M8.71014 78.0592C8.04952 78.0592 7.4157 77.4699 6.88687 76.7214C6.46135 76.1191 6.94492 75.344 7.68236 75.344H16.5166M46.0452 51.2459H68.7856V31.8996C60.5267 31.1076 44.416 33.868 46.0452 51.2459ZM75.2344 31.8996V51.2459H95.2596C94.1282 44.507 88.5393 31.2033 75.2344 31.8996Z" stroke="black" stroke-width="1.5" stroke-linecap="round" />
                                        </svg>
                                    }
                                </div>
                                <div >
                                    <span className='fw-500'>Mobilität</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg">
                            <div className='p-4 whiteCardKranken h-100 text-center'>
                                <div className='pb-3'>
                                    {!props.darkMode
                                        ? <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="16.5059" y="38.752" width="56.3" height="2.65861" fill="#D9D9D9" />
                                            <path d="M35.2734 52.3113H54.0401L53.8666 58.1602L53.5039 70.3898H44.6568H35.8096L35.4469 58.1602L35.2734 52.3113Z" fill="#84CDEE" />
                                            <path d="M35.4469 58.1602L35.2734 52.3113H54.0401L53.8666 58.1602M35.4469 58.1602L35.8096 70.3898H44.6568M35.4469 58.1602H44.6568M53.8666 58.1602L53.5039 70.3898H44.6568M53.8666 58.1602H44.6568M44.6568 58.1602V70.3898" stroke="black" stroke-width="1.5" stroke-linecap="round" />
                                            <path d="M16.5067 38.4864L17.7413 85.0121M72.8066 38.4864L71.572 85.0121M17.7413 85.0121L17.8471 89H71.4662L71.572 85.0121M17.7413 85.0121H71.572M19.9919 40.8792V50.1843M22.4048 40.3474V44.8671M45.1163 1.73735L79.7055 36.784C80.3291 37.4158 79.8815 38.4864 78.9937 38.4864H11.3192C10.4422 38.4864 9.98999 37.4377 10.5921 36.7999L43.6774 1.75333C44.066 1.34165 44.7186 1.33441 45.1163 1.73735Z" stroke="black" stroke-width="1.8" stroke-linecap="round" />
                                        </svg>

                                        : <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="16.5059" y="38.752" width="56.3" height="2.65861" fill="#D9D9D9" />
                                            <path d="M35.2734 52.3113H54.0401L53.8666 58.1602L53.5039 70.3898H44.6568H35.8096L35.4469 58.1602L35.2734 52.3113Z" fill="#84CDEE" />
                                            <path d="M35.4469 58.1602L35.2734 52.3113H54.0401L53.8666 58.1602M35.4469 58.1602L35.8096 70.3898H44.6568M35.4469 58.1602H44.6568M53.8666 58.1602L53.5039 70.3898H44.6568M53.8666 58.1602H44.6568M44.6568 58.1602V70.3898" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                                            <path d="M16.5067 38.4864L17.7413 85.0121M72.8066 38.4864L71.572 85.0121M17.7413 85.0121L17.8471 89H71.4662L71.572 85.0121M17.7413 85.0121H71.572M19.9919 40.8792V50.1843M22.4048 40.3474V44.8671M45.1163 1.73735L79.7055 36.784C80.3291 37.4158 79.8815 38.4864 78.9937 38.4864H11.3192C10.4422 38.4864 9.98999 37.4377 10.5921 36.7999L43.6774 1.75333C44.066 1.34165 44.7186 1.33441 45.1163 1.73735Z" stroke="white" stroke-width="1.8" stroke-linecap="round" />

                                        </svg>
                                    }

                                </div>
                                <div >
                                    <span className='fw-500'>Wohnen</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg">
                            <div className='p-4 whiteCardKranken h-100 text-center'>
                                <div className='pb-3'>
                                    {!props.darkMode
                                        ? <Alltag width='120' height='90' />
                                        : <AlltagDark width='120' height='90' />
                                    }
                                </div>
                                <div >
                                    <span className='fw-500'>Alltag</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg">
                            <div className='p-4 whiteCardKranken h-100 text-center'>
                                <div className='pb-3'>
                                    {!props.darkMode
                                        ?
                                        <svg width="92" height="90" viewBox="0 0 92 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M53.2467 68.9151C45.1601 68.9151 37.0726 68.8978 28.9871 68.8775C24.4401 68.8378 19.8994 68.6831 15.3485 68.6831C15.215 68.6831 15.0815 68.6831 14.948 68.6831C14.415 68.6781 13.8834 68.6761 13.3504 68.6761C12.303 68.6761 11.2553 68.6841 10.208 68.6917C9.15679 68.6999 8.10669 68.7075 7.05551 68.7075C5.75561 68.7075 4.45561 68.6959 3.1592 68.6562C3.14579 68.6562 3.13271 68.6568 3.12029 68.6568C2.64445 68.6568 1.69714 67.9104 1.3244 67.8379L1 66.0427H91V68.556C90.5314 68.6321 89.4856 68.8119 88.9492 68.8119C88.7672 68.8119 88.5828 68.8075 88.3979 68.7988C86.6549 68.8135 84.9108 68.8282 83.1676 68.8282C82.5886 68.8282 82.0108 68.8268 81.4331 68.8227C72.0391 68.8916 62.6432 68.9151 53.2467 68.9151Z" fill="#DEDEDE" />
                                            <path d="M65.8693 17.2467C70.7607 16.5595 76.4424 26.5268 65.8693 30.3078C58.1828 33.0566 58.8815 16.5593 65.8693 17.2467Z" fill="#BEE8FF" stroke="black" stroke-width="1.8" stroke-linecap="round" />
                                            <path d="M7.70117 66.2123V85.1916M13.2986 80.271V85.1916M24.4933 80.271V85.1916M35.6881 80.271V85.1916M46.8828 80.271V85.1916M58.0776 80.271V85.1916M69.2724 80.271V85.1916M80.4671 80.271V85.1916M52.4802 29.6597V40.2037M56.6783 33.1743V40.2037M61.576 35.2832V40.2037" stroke="black" stroke-width="0.5" stroke-linecap="round" />
                                            <path d="M4.51562 30.027V35.6849H38.9688V30.027M38.9688 30.027V39.9284H46M38.9688 30.027H46M46 30.027C46.4688 20.833 51.7656 2.72768 69.2031 3.85926C86.6406 4.99084 88.6562 28.3768 87.4844 39.9284H46M46 30.027V39.9284M1 65.3889H91V85.1916H1V65.3889Z" stroke="black" stroke-width="1.8" stroke-linecap="round" />
                                        </svg>
                                        :
                                        <svg width="92" height="90" viewBox="0 0 92 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M53.2467 68.9151C45.1601 68.9151 37.0726 68.8978 28.9871 68.8775C24.4401 68.8378 19.8994 68.6831 15.3485 68.6831C15.215 68.6831 15.0815 68.6831 14.948 68.6831C14.415 68.6781 13.8834 68.6761 13.3504 68.6761C12.303 68.6761 11.2553 68.6841 10.208 68.6917C9.15679 68.6999 8.10669 68.7075 7.05551 68.7075C5.75561 68.7075 4.45561 68.6959 3.1592 68.6562C3.14579 68.6562 3.13271 68.6568 3.12029 68.6568C2.64445 68.6568 1.69714 67.9104 1.3244 67.8379L1 66.0427H91V68.556C90.5314 68.6321 89.4856 68.8119 88.9492 68.8119C88.7672 68.8119 88.5828 68.8075 88.3979 68.7988C86.6549 68.8135 84.9108 68.8282 83.1676 68.8282C82.5886 68.8282 82.0108 68.8268 81.4331 68.8227C72.0391 68.8916 62.6432 68.9151 53.2467 68.9151Z" fill="#DEDEDE" />
                                            <path d="M65.8693 17.2467C70.7607 16.5595 76.4424 26.5268 65.8693 30.3078C58.1828 33.0566 58.8815 16.5593 65.8693 17.2467Z" fill="#BEE8FF" stroke="white" stroke-width="1.8" stroke-linecap="round" />
                                            <path d="M7.70117 66.2123V85.1916M13.2986 80.271V85.1916M24.4933 80.271V85.1916M35.6881 80.271V85.1916M46.8828 80.271V85.1916M58.0776 80.271V85.1916M69.2724 80.271V85.1916M80.4671 80.271V85.1916M52.4802 29.6597V40.2037M56.6783 33.1743V40.2037M61.576 35.2832V40.2037" stroke="white" stroke-width="0.5" stroke-linecap="round" />
                                            <path d="M4.51562 30.027V35.6849H38.9688V30.027M38.9688 30.027V39.9284H46M38.9688 30.027H46M46 30.027C46.4688 20.833 51.7656 2.72768 69.2031 3.85926C86.6406 4.99084 88.6562 28.3768 87.4844 39.9284H46M46 30.027V39.9284M1 65.3889H91V85.1916H1V65.3889Z" stroke="white" stroke-width="1.8" stroke-linecap="round" />
                                        </svg>
                                    }
                                </div>
                                <div>
                                    <span className='fw-500'>Bauen</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default LastSectionRechtss