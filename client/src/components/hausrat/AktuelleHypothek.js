import React from 'react'
import BeatingHeart from '../../assets/images/beatingHeart.svg'
import LargeTile from '../../assets/images/hausratimg.svg'
import img1 from '../../assets/images/3.svg'
import img2 from '../../assets/images/5.svg'
import img3 from '../../assets/images/10.svg'
import img4 from '../../assets/images/15.svg'
import { ReactComponent as NewHome } from '../../assets/images/hausratSliderPhotos/newHome.svg'
import { ReactComponent as Homegate } from '../../assets/images/hausratSliderPhotos/homegate.svg'
import { ReactComponent as Immo } from '../../assets/images/hausratSliderPhotos/immoscout24.svg'
import { ReactComponent as Svit } from '../../assets/images/hausratSliderPhotos/svit.svg'

import { ReactComponent as Ent1 } from '../../assets/images/hausratSliderPhotos/Ent1.svg'
import { ReactComponent as Ent2 } from '../../assets/images/hausratSliderPhotos/Ent2.svg'
import { ReactComponent as Ent3 } from '../../assets/images/hausratSliderPhotos/Ent3.svg'
import { ReactComponent as Ent4 } from '../../assets/images/hausratSliderPhotos/Ent4.svg'

import { ReactComponent as Rech1 } from '../../assets/images/hausratSliderPhotos/Rech1.svg'
import { ReactComponent as Rech2 } from '../../assets/images/hausratSliderPhotos/Rech2.svg'



function AktuelleHypothek() {
    const ScrollToForm = () => {
        window.scrollTo({
            top: 0
        });
    }

    return (
        <div>
            <div className="wrapDiv container-xl px-4 px-xl-0 mx-auto">
                <div className=''>

                    <div className="row gx-4 justify-content-between bodyCounterPadding">
                        <div className="col-12 col-md-6 col-lg-5 col-xl-4 text-start">

                            <div className='pb-3 text-start'>
                                <span className='fw-700 finanuSubTitle fs-3'>Aktuelle Hypothekarzinsen​</span>
                            </div>
                            <div className='text-start pb-4 pb-md-0'>
                                <button onClick={ScrollToForm} className='hausratBtn py-2'>Zum Hypothekenvergleich</button>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-7 col-xl-7 text-start my-auto">
                            <span className='fw-500 fs-5 normalTextToWhite'>
                                Mit Finanu erhalten Sie attraktive Zinsen für die Finanzierung Ihren Immobilie und entscheiden unabhängig, welche Hypothekenform zu Ihren Bedurfnissen passt.
                            </span>
                        </div>
                    </div>
                    <div className="row g-0 justify-content-center bodyCounterPadding">
                        <div className="col-12 col-md-auto my-auto">
                            <div className='crookedText py-5'>
                                <div className='ps-0 ps-md-3'>
                                    <span className='blackTextBig fst-italic'>Flex/SARON ab *</span>
                                </div>
                                <div>
                                    <span className='blueTextBig'>0,95%</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="row  gx-0 gy-5 justify-content-center festhypothekImgs">
                                <div className="col-6 col-sm-6 col-lg-5">
                                    <img src={img1} className='img-fluid' />
                                </div>
                                <div className="col-6 col-sm-6 col-lg-5">
                                    <img src={img2} className='img-fluid' />
                                </div>
                                <div className="col-6 col-sm-6 col-lg-5">
                                    <img src={img3} className='img-fluid' />
                                </div>
                                <div className="col-6 col-sm-6 col-lg-5">
                                    <img src={img4} className='img-fluid' />
                                </div>


                            </div>
                        </div>
                    </div>
                    <div className="row gx-4 justify-content-between bodyCounterPadding">
                        <div className="col-12 col-md-6 col-lg-5 col-xl-4 text-start">
                            <div className='pb-4'>
                                <span className='fw-700 firstBlueTitle fs-1 '>Hypotheken in der Schweiz</span>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-7 col-xl-7 text-start">
                            <div className="">
                                <div className='fw-500 fs-5 normalTextToWhite'>
                                    <span>
                                        Sie träumen von einem Eigenheim?
                                        Laut der NZZ verschenken Schweizer bei der Hypothek viel Geld. Vielfach beschränken sie sich auf wenige Angebote oder wählen direkt die Hausbank.

                                        Bei der Wahl sollten nicht nur niedrige Zinsen eine Rolle spielen, sondern auch die Konditionen für eine Amortisation, eventuelle Vorfälligkeitsentschädigungen und sogenannte Knebelverträge.

                                        Wir verhandeln für Sie hart, aber fair mit den zwei bis drei besten Instituten, um bessere Konditionen zu erhalten.
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="bodyCounterPadding">
                        <div className='pb-5'>
                            <div className='pb-4 text-start'>
                                <span className='finanuSubTitle fw-700 fs-3'>Immobilien finden</span>
                            </div>
                            <div>
                                <div className="row g-3 text-start justify-content-start">
                                    <div className="col-12 col-sm-6 col-lg-4">
                                        <a href="https://www.newhome.ch" className='text-decoration-none' target="_blank">
                                            <div className='p-3 useFullLinks text-center'>
                                                <NewHome />
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-12 col-sm-6 col-lg-4">
                                        <a href="https://www.immoscout24.ch" className='text-decoration-none' target="_blank">
                                            <div className='p-3 useFullLinks text-center'>
                                                <Immo />
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-12 col-sm-6 col-lg-4">
                                        <a href="https://www.homegate.ch" className='text-decoration-none' target="_blank">
                                            <div className='p-3 useFullLinks text-center'>
                                                <Homegate />
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-12 col-sm-6 col-lg-4">
                                        <a href="https://www.maklerkammer.ch/" className='text-decoration-none' target="_blank">
                                            <div className='p-3 useFullLinks text-center'>
                                                <Svit />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='pb-5'>
                            <div className='pb-4 text-start'>
                                <span className='finanuSubTitle fw-700 fs-3'>Entwicklung der Kauf- und Mietpreise</span>
                            </div>
                            <div>
                                <div className="row g-3 text-start justify-content-start">
                                    <div className="col-12 col-sm-6 col-lg-4">
                                        <a href="https://www.bfs.admin.ch/bfs/de/home/statistiken/preise/baupreise/baupreisindex.html" className='text-decoration-none' target="_blank">

                                            <div className='p-3 useFullLinks text-center'>
                                                <Ent1 />
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-12 col-sm-6 col-lg-4">
                                        <a href="https://www.bfs.admin.ch/bfs/de/home/statistiken/preise/mieten/index.html" className='text-decoration-none' target="_blank">
                                            <div className='p-3 useFullLinks text-center'>
                                                <Ent2 />
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-12 col-sm-6 col-lg-4">
                                        <a href="https://www.bfs.admin.ch/bfs/de/home/statistiken/preise/immobilienpreise.html" className='text-decoration-none' target="_blank">
                                            <div className='p-3 useFullLinks text-center'>
                                                <Ent3 />
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-12 col-sm-6 col-lg-4">
                                        <a href="https://www.ubs.com/ch/de/private/mortgages/real-estate.html" className='text-decoration-none' target="_blank">
                                            <div className='p-3 useFullLinks text-center'>
                                                <Ent4 />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div>
                            <div className='pb-4 text-start'>
                                <span className='finanuSubTitle fw-700 fs-3'>Rechtliches</span>
                            </div>
                            <div>
                                <div className="row g-3 text-start justify-content-start">
                                    <div className="col-12 col-sm-6 col-lg-4">
                                        <a href="https://www.ch.ch/de/steuern-und-finanzen/steuerarten/immobiliensteuer/" className='text-decoration-none' target="_blank">

                                            <div className='p-3 useFullLinks text-center'>
                                                <Rech1 />
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-12 col-sm-6 col-lg-4">
                                        <a href="https://www.bsv.admin.ch/bsv/de/home/sozialversicherungen/bv/grundlagen-und-gesetze/grundlagen/wohneigentumsfoerderung.html" className='text-decoration-none' target="_blank">
                                        <div className='p-3 useFullLinks text-center'>
                                                <Rech2 />
                                            </div>
                                        </a>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AktuelleHypothek