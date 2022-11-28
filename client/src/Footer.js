import React from 'react'
import './assets/css/footer.css'
import { Link } from "react-router-dom";
function Footer() {
    return (
        <>
            <div className="px-4 px-xl-0">
                <div className='wrapDiv container-xl footerWhiteBgDiv px-4 px-lg-5 py-4'>
                    <div className="row g-0 justify-content-center">
                        <div className="col-12 col-md text-start">
                            <div className='pb-2 pb-md-1'>
                                <span className='fw-bold finanuSubTitle'>Vergleichen Sie jetzt all Ihre Versicherungen</span>
                            </div>
                            <div>
                                <span style={{ fontWeight: 500 }}>Ein Vergleich zu erhalten geht schnell und einfach. Entdecken Sie noch heute Einsparmöglichkeiten!</span>
                            </div>
                        </div>
                        <div className="col-auto my-auto pt-3 pt-md-0">
                            <Link to='/versicherungen/krankenkasse'>
                                <button className='footerBtn px-5 py-2'>Jetzt Anfragen</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footerDiv pt-5'>
                <div className='px-4 px-md-5 py-5 wrapDiv container-xl text-start'>
                    <div className="row gx-0 gx-md-4 gx-lg-5 gy-5 gy-md-0">
                        <div className="col-12 col-md-6">
                            <div className='pb-4 ps-1 ps-md-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="130" viewBox="0 0 124.836 35.576">
                                    <g id="Group_17" data-name="Group 17" transform="translate(2571.84 2225.725)">
                                        <path id="Path_32" data-name="Path 32" d="M-1548.914-1999.775a78.3,78.3,0,0,0,.323,8.03c.084,1.136.018,1.165-1.108,1.167-1.349,0-2.7-.033-4.047.014-.742.026-1.177-.189-1.2-.977a.491.491,0,0,0-.014-.078c-.231-1.171-.19-1.114-1.146-.432a9.755,9.755,0,0,1-9.62,1.311,5.459,5.459,0,0,1-3.409-4.447,10.274,10.274,0,0,1-.017-3.854c.538-2.815,2.5-4.23,5.056-5.008a57.2,57.2,0,0,1,7.092-1.3c1.191-.2,1.2-.223.947-1.421a2.235,2.235,0,0,0-1.81-1.862,4.49,4.49,0,0,0-2.644.208,2.066,2.066,0,0,0-1.31,1.839c-.087.639-.4.822-1.005.811-1.56-.03-3.122-.039-4.681,0-.751.02-.949-.29-.943-.988a6.721,6.721,0,0,1,4.923-6.557,15.8,15.8,0,0,1,9.764.007,6.63,6.63,0,0,1,4.714,6.465c.051,1.106.111,2.212.135,3.319C-1548.9-2002.448-1548.914-2001.365-1548.914-1999.775Zm-6.98.561h-.009c0-.526,0-1.052,0-1.579,0-.351-.166-.564-.537-.505a27.647,27.647,0,0,0-4.35.789,2.352,2.352,0,0,0-1.6,2.758,2.113,2.113,0,0,0,1.913,2,4.8,4.8,0,0,0,2.855-.387c1.151-.458,2.013-1.161,1.729-2.6A2.494,2.494,0,0,1-1555.894-1999.215Z" transform="translate(-947.992 -200.125)" fill="#fff" />
                                        <path id="Path_33" data-name="Path 33" d="M-1116.151-2009.234a8.937,8.937,0,0,1,8.456-3.149,6.226,6.226,0,0,1,5.553,5.011,11.87,11.87,0,0,1,.384,2.9q.007,7.13,0,14.26c0,1.109-.049,1.155-1.168,1.157q-2.342.005-4.683,0c-1.051,0-1.109-.061-1.109-1.137q0-6.575,0-13.151a3.515,3.515,0,0,0-.384-1.916,2.427,2.427,0,0,0-1.871-1.193,4.774,4.774,0,0,0-2.99.571,2.771,2.771,0,0,0-1.614,2.656c.074,4.356.029,8.714.027,13.071,0,1.076-.023,1.1-1.121,1.1-1.588,0-3.176-.028-4.762.013-.765.02-1-.26-1-1.013.026-4.647.055-9.3,0-13.943-.03-2.345-.221-4.689-.384-7.03-.043-.621.117-.877.759-.868,1.561.022,3.122.018,4.683,0a.75.75,0,0,1,.865.712C-1116.418-2010.589-1116.295-2010-1116.151-2009.234Z" transform="translate(-1370.212 -201.647)" fill="#fff" />
                                        <path id="Path_34" data-name="Path 34" d="M-2014.2-1998.705c0-2.032-.014-4.065,0-6.1.019-2.193-.229-4.371-.339-6.556-.038-.765.229-1.028.991-1.005,1.453.044,2.909.033,4.364,0a.815.815,0,0,1,.966.781c.09.537-.036,1.354.4,1.53.516.208.82-.588,1.225-.93,2.765-2.334,7.481-2.684,10.3-.667a6.571,6.571,0,0,1,2.685,5.424c.117,5.33.053,10.663.07,15.995,0,.508-.23.712-.721.711-1.8-.006-3.6-.015-5.4.006-.69.008-.75-.392-.748-.926.009-3.405,0-6.81,0-10.215,0-.977,0-1.954,0-2.93-.015-2.71-1.574-3.9-4.2-3.214a3.019,3.019,0,0,0-2.624,3.365q0,6.375,0,12.749c0,1.116-.049,1.163-1.16,1.165q-2.381.005-4.761,0c-.974,0-1.052-.079-1.054-1.032Q-2014.2-1994.627-2014.2-1998.705Z" transform="translate(-526.998 -201.188)" fill="#fff" />
                                        <path id="Path_35" data-name="Path 35" d="M-642.023-1992.507c.022,2.969-.079,6.507.17,10.04.061.868.095,1.738.159,2.606.043.57-.186.824-.771.818q-2.3-.024-4.6,0a.775.775,0,0,1-.891-.773c-.085-.568-.246-1.125-.373-1.687-.609.144-.865.72-1.306,1.072-2.673,2.13-7.264,2.57-9.877.911a6.962,6.962,0,0,1-3.134-6.164c-.095-5.121-.028-10.245-.045-15.367,0-.612.224-.847.839-.838,1.693.024,3.387.035,5.08-.005.735-.017.962.256.958.969-.023,4.172-.011,8.344-.011,12.516,0,.158,0,.317,0,.475.013,1.9.616,2.938,1.9,3.269a4.788,4.788,0,0,0,4.754-1.646,1.951,1.951,0,0,0,.165-1.079q0-6.654,0-13.308c0-1.179.005-1.182,1.2-1.183,1.587,0,3.175,0,4.762,0,.975,0,1.015.043,1.017,1.044C-642.02-1998.25-642.023-1995.663-642.023-1992.507Z" transform="translate(-1805.316 -211.656)" fill="#fff" />
                                        <path id="Path_36" data-name="Path 36" d="M-2561.354-2199.149c0,2.482-.022,4.964.012,7.445.01.765-.274,1.027-1.022,1.011-1.639-.035-3.28-.006-4.92-.012-.964,0-1.046-.082-1.047-1.038q-.007-7.247,0-14.5c0-1.254,0-1.245-1.285-1.257-2.485-.023-2.187.319-2.207-2.183-.007-.951.031-1.9-.011-2.851-.033-.735.2-1.093.989-1.018.472.045.952.01,1.428.007,1.071,0,1.081-.018,1.087-1.129.008-1.319.018-2.635.113-3.955a6.925,6.925,0,0,1,6.159-6.875,13.4,13.4,0,0,1,5.2.059c.641.139.951.413.924,1.12-.049,1.292-.042,2.588,0,3.88.023.767-.238.977-.99.808a6.7,6.7,0,0,0-2.214-.031,2.239,2.239,0,0,0-2.044,1.812,16.645,16.645,0,0,0-.151,3.786c-.009.484.347.523.715.523,1.111,0,2.223.025,3.333-.006.647-.019.9.221.886.875-.031,1.452-.028,2.9,0,4.356.011.628-.258.841-.855.827-1.031-.023-2.065.031-3.095-.017-.751-.035-1.024.22-1.012.99C-2561.329-2204.061-2561.354-2201.6-2561.354-2199.149Z" fill="#fff" />
                                        <path id="Path_37" data-name="Path 37" d="M-2218.748-1990.536c0-3.457.015-6.915-.012-10.372-.005-.734.2-1.043.988-1.022,1.718.046,3.438.031,5.156.006.609-.009.851.212.851.828q-.017,10.57,0,21.139c0,.651-.264.89-.9.882-1.692-.021-3.385-.031-5.077,0-.755.016-1.022-.26-1.017-1.016C-2218.733-1983.569-2218.748-1987.053-2218.748-1990.536Z" transform="translate(-333.879 -211.623)" fill="#fff" />
                                        <path id="Path_38" data-name="Path 38" d="M-2221.624-2189.954c0-.949.015-1.9-.006-2.847-.012-.553.177-.828.773-.822,1.928.018,3.857.015,5.785,0,.538,0,.76.219.756.755q-.019,2.887,0,5.773c0,.582-.246.789-.812.784q-2.853-.026-5.706,0c-.579.006-.811-.228-.8-.8C-2221.61-2188.056-2221.625-2189.005-2221.624-2189.954Z" transform="translate(-331.164 -30.355)" fill="#fff" />
                                    </g>
                                </svg>
                            </div>
                            <div className='pb-3'>
                                <span>Finanu hilft Ihnen als unabhängige Vergleichsplattform dabei sich in der unübersichtlichen Landschaft der Versicherungen und Finanzdienstleister zurechtzufinden.</span>
                            </div>
                            <div className='pb-3'>
                                <span>Mit wenigen Klicks können Sie verschiedene Angebote vergleichen und unverbindliche Offerten anfordern.</span>
                            </div>
                            <div className='pb-3'>
                                <span>Des Weiteren haben Sie die Option weitere Fragen via Chatbot, Live Chat oder bei einer persönlichen Beratung zu klären.</span>
                            </div>
                            <div>
                                <span>Finanu unterstützt und begleitet Sie kostenlos bis zum Abschluss.</span>
                            </div>
                        </div>
                        <div className="col-6 col-md-3">
                            <div className='pb-3'>
                                <span style={{ fontWeight: 700 }} className="fs-5">Produkte</span>
                            </div>
                            <div className='pb-2'>
                                <Link to='/finanzen/pensionsplanung-und-ruhestand'>
                                    <span>Vorsorge</span>
                                </Link>
                            </div>
                            <div className='pb-2'>
                                <Link to='/finanzen//haus-hypothek'>
                                    <span>Wohnen & Hypothek</span>
                                </Link>
                            </div>
                            <div className='pb-2'>
                                <Link to='/versicherungen/auto-motorrad'>
                                    <span>Auto & Mobilität</span>
                                </Link>
                            </div>
                            <div className='pb-2'>
                                <Link to='/versicherungen/krankenkasse'>
                                    <span>Krankenkasse</span>
                                </Link>
                            </div>
                            <div className='pb-2'>
                                <Link to='/versicherungen/rechtsschutz'>
                                    <span>Rechtsschutz</span>
                                </Link>
                            </div>
                            <div className='pb-2'>
                                <Link to='/finanzen/360'>
                                    <span>Budgetplanung</span>
                                </Link>
                            </div>
                        </div>
                        <div className="col-6 col-md-3">
                            <div className='pb-3'>
                                <span style={{ fontWeight: 700 }} className="fs-5">Hilfe</span>
                            </div>
                            <div className='pb-2'>
                                <span>Erfolgsgeschichten</span>
                            </div>
                            <div className='pb-2'>
                                <span>Community</span>
                            </div>
                            <div className='pb-2'>
                                <span>Livechat & Zoom Beratung</span>
                            </div>
                            <div className='pb-2'>
                                <span>Persönliche Beratung</span>
                            </div>
                            <div className='pb-2'>
                                <span>Wie verdient Finanu Geld?</span>
                            </div>
                            <div className='pb-2'>
                                <span>Karriere</span>
                            </div>
                        </div>
                        <div className="d-none d-md-block col-md-6">

                        </div>
                        <div className="col-6 col-md-3">
                            <div className='pb-3'>
                                <span style={{ fontWeight: 700 }} className="fs-5">Über uns</span>
                            </div>
                            <div className='pb-2'>
                                <Link to='/uber-uns'>

                                    <span>Philosophie</span>
                                </Link>
                            </div>
                            <div className='pb-2'>
                                <Link to='/uber-uns'>

                                    <span>Unsere Aufgabe</span>
                                </Link>

                            </div>
                        </div>
                        <div className="col-6 col-md-3">
                            <div className='pb-3'>
                                <span style={{ fontWeight: 700 }} className="fs-5">Kontaktiere uns</span>
                            </div>
                            <div>
                                <div className='row'>

                                    <div className="col-auto" >
                                        <a target={'_blank'} rel="noreferrer" href="https://www.facebook.com/finanuch">

                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                            </svg>
                                        </a>

                                    </div>
                                    <div className="col-auto">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                                        </svg>
                                    </div>
                                    <div className="col-auto" >
                                        <a target={'_blank'} rel="noreferrer" href="https://www.instagram.com/finanu.ch/">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                                                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='wrapDiv container-xl px-4 pb-4'>
                    <div className='ps-0 ps-md-4'>
                        <div className="row g-0">
                            <div className="col">
                                <div className="row g-0">
                                    <div className="col-auto mb-auto">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-globe" viewBox="0 0 16 16">
                                            <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" />
                                        </svg>
                                    </div>
                                    <div className="col text-start ms-1">
                                        <div>
                                            <span className='fw-bold'>DE</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-auto">
                                <div>
                                    Copyright © 2021 - Finanu
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ >
    )
}

export default Footer