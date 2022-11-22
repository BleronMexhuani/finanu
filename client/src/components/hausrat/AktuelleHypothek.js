import React from 'react'
import BeatingHeart from '../../assets/images/beatingHeart.svg'
import LargeTile from '../../assets/images/hausratimg.svg'
import img1 from '../../assets/images/3.svg'
import img2 from '../../assets/images/5.svg'
import img3 from '../../assets/images/10.svg'
import img4 from '../../assets/images/15.svg'

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
                    <div className='pb-3 text-start'>
                        <span className='finanuSubTitle fw-700 fs-3' style={{ color: "#34ACE3" }}>Aktuelle Hypothekarzinsen​</span>
                    </div>
                    <div className="row gx-4 gy-0 pb-5">
                        <div className="col-12 col-md pb-4 pb-md-0">
                            <div className='text-start'>

                                <div>
                                    <span className='normalTextToWhite fw-500 fs-5'>
                                        Mit Finanu erhalten Sie attraktive Zinsen für die Finanzierung Ihren Immobilie und entscheiden unabhängig, welche Hypothekenform zu Ihren Bedurfnissen passt.
                                        Mit Finanu erhalten Sie attraktive Zinsen für die Finanzierung Ihren Immobilie und entscheiden unabhängig, welche Hypothekenform zu Ihren Bedurfnissen passt.
                                        Mit Finanu erhalten Sie attraktive Zinsen für die Finanzierung Ihren Immobilie und entscheiden unabhängig, welche Hypothekenform zu Ihren Bedurfnissen passt.
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-auto my-auto">
                            <div className='pb-2'>
                                <button onClick={ScrollToForm} className='hausratBtn py-2'>Zum Hypothekenvergleich</button>
                            </div>
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
                                   <img src={img1} />
                                </div>
                                <div className="col-6 col-sm-6 col-lg-5">
                                <img src={img2} />
                                </div>
                                <div className="col-6 col-sm-6 col-lg-5">
                                <img src={img3} />
                                </div>
                                <div className="col-6 col-sm-6 col-lg-5">
                                <img src={img4} />
                                </div>

                                {/* <div className="col-12 px-0">
                                    <div className='boxoutline mx-4'>
                                        <div className='updatedhypoteklargebox   mx-auto d-flex'>
                                            <img src={LargeTile} className="img-fluid" />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-6 col-sm-6 col-lg-6 px-0">
                                    <div className='updatedhypotekboxes  py-3 mx-4'>
                                        <span className='pt-2 finanuSubTitle fw-500 fs-5'>3 Jahre</span>
                                        <span className='pt-1 finanuSubTitle fw-500 fs-5'>Festhypothek ab *</span>
                                        <span className='fw-700 firstBlueTitle  '>0.45%</span>
                                    </div>
                                </div>
                                <div className="col-6 col-sm-6 col-lg-6 px-0">
                                    <div className='updatedhypotekboxes py-3 mx-4'>
                                        <span className='pt-2 finanuSubTitle fw-500 fs-5'>3 Jahre</span>
                                        <span className='pt-1  finanuSubTitle fw-500 fs-5'>Festhypothek ab *</span>
                                        <span className='fw-700 firstBlueTitle  '>0.45%</span>
                                    </div>
                                </div>
                                <div className="col-6 col-sm-6 col-lg-6 px-0">
                                    <div className='updatedhypotekboxes py-3 mx-4'>
                                        <span className='pt-2 finanuSubTitle fw-500 fs-5'>3 Jahre</span>
                                        <span className='pt-1  finanuSubTitle fw-500 fs-5'>Festhypothek ab *</span>
                                        <span className='fw-700 firstBlueTitle  '>0.45%</span>
                                    </div>
                                </div>
                                <div className="col-6 col-sm-6 col-lg-6 px-0">
                                    <div className='updatedhypotekboxes py-3 mx-4'>
                                        <span className='pt-2 finanuSubTitle fw-500 fs-5'>3 Jahre</span>
                                        <span className='pt-1  finanuSubTitle fw-500 fs-5'>Festhypothek ab *</span>
                                        <span className='fw-700 firstBlueTitle f'>0.45%</span>
                                    </div>
                                </div> */}
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
                    {/* <div className="row g-3 bodyCounterPadding">
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                            <div className='p-4 whiteCardKranken h-100'>
                                <div className='pb-4'>
                                    <img src={BeatingHeart} alt="" />
                                </div>
                                <div>
                                    <span className='fw-500'>Beratung durch Juristen und Anwälte</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                            <div className='p-4 whiteCardKranken h-100'>
                                <div className='pb-4'>
                                    <img src={BeatingHeart} alt="" />
                                </div>
                                <div>
                                    <span className='fw-500'>Übernahme von Anwaltskosten</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                            <div className='p-4 whiteCardKranken h-100'>
                                <div className='pb-4'>
                                    <img src={BeatingHeart} alt="" />
                                </div>
                                <div>
                                    <span className='fw-500'>Bezahlung der Gerichtskosten</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                            <div className='p-4 whiteCardKranken h-100'>
                                <div className='pb-4'>
                                    <img src={BeatingHeart} alt="" />
                                </div>
                                <div className=''>
                                    <span className='fw-500'>Mediationskosten</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                            <div className='p-4 whiteCardKranken h-100'>
                                <div className='pb-4'>
                                    <img src={BeatingHeart} alt="" />
                                </div>
                                <div className=''>
                                    <span className='fw-500'>Übersetzungskosten</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                            <div className='p-4 whiteCardKranken h-100'>
                                <div className='pb-4'>
                                    <img src={BeatingHeart} alt="" />
                                </div>
                                <div className=''>
                                    <span className='fw-500'>Kostenübernahme von Gutachten</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                            <div className='p-4 whiteCardKranken h-100'>
                                <div className='pb-4'>
                                    <img src={BeatingHeart} alt="" />
                                </div>
                                <div className=''>
                                    <span className='fw-500'>Bezahlung der Prozessentschädigung an die Gegenseite</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                            <div className='p-4 whiteCardKranken h-100'>
                                <div className='pb-4'>
                                    <img src={BeatingHeart} alt="" />
                                </div>
                                <div className=''>
                                    <span className='fw-500'>Grundmodell (0%)</span>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div className='row g-3 bodyCounterPadding videoplaceholder' style={{height: '400px', alignContent: 'center'}}>
                            <span>
                                videoplaceholder
                            </span>
                    </div>


                    <div className='pb-5'>
                        <div className='pb-4 text-start'>
                            <span className='finanuSubTitle fw-700 fs-3'>Immobilien finden</span>
                        </div>
                        <div>
                            <div className="row g-3 text-start justify-content-start">
                                <div className="col-12 col-sm-6 col-lg-4">
                                    <a href="https://www.newhome.ch" className='text-decoration-none' target="_blank">
                                        <div className='p-3 useFullLinks text-start'>
                                            <div className="row g-0">
                                                <div className="col">
                                                    <div className='pb-1'>
                                                        <span className='fw-600 descriptionFS'>New Home</span>
                                                    </div>
                                                    <div>
                                                        <span className="linkSpan">https://www.newhome.ch</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-12 col-sm-6 col-lg-4">
                                    <a href="https://www.immoscout24.ch" className='text-decoration-none' target="_blank">
                                        <div className='p-3 useFullLinks text-start'>
                                            <div className="row g-0">
                                                <div className="col">
                                                    <div className='pb-1'>
                                                        <span className='fw-600 descriptionFS'>Immoscout24</span>
                                                    </div>
                                                    <div>
                                                        <span className="linkSpan">https://www.immoscout24.chn</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-12 col-sm-6 col-lg-4">
                                    <a href="https://www.homegate.ch" className='text-decoration-none' target="_blank">
                                        <div className='p-3 useFullLinks text-start'>
                                            <div className="row g-0">

                                                <div className="col">
                                                    <div className='pb-1'>
                                                        <span className='fw-600 descriptionFS'>Homegate</span>
                                                    </div>
                                                    <div>
                                                        <span className="linkSpan">https://www.homegate.ch</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-12 col-sm-6 col-lg-4">
                                    <a href="https://www.maklerkammer.ch/" className='text-decoration-none' target="_blank">
                                        <div className='p-3 useFullLinks text-start'>
                                            <div className="row g-0">

                                                <div className="col">
                                                    <div className='pb-1'>
                                                        <span className='fw-600 descriptionFS'>Schweizer Verzeichnis für Immobilienmakler</span>
                                                    </div>
                                                    <div>
                                                        <span className="linkSpan">https://www.maklerkammer.ch</span>
                                                    </div>
                                                </div>
                                            </div>
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

                                        <div className='p-3 useFullLinks text-start'>
                                            <div className="row g-0">

                                                <div className="col">
                                                    <div className='pb-1'>
                                                        <span className='fw-600 descriptionFS'>Entwicklung vom Baukostenindex </span>
                                                    </div>
                                                    <div>
                                                        <span style={{ wordBreak: 'break-all' }} className="linkSpan">https://www.bfs.admin.ch/bfs/de/home/statistiken/preise/baupreise/baupreisindex.html</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-12 col-sm-6 col-lg-4">
                                    <a href="https://www.bfs.admin.ch/bfs/de/home/statistiken/preise/mieten/index.html" className='text-decoration-none' target="_blank">
                                        <div className='p-3 useFullLinks text-start'>
                                            <div className="row g-0">

                                                <div className="col">
                                                    <div className='pb-1'>
                                                        <span className='fw-600 descriptionFS'>Entwicklung vom Mietpreisindex</span>
                                                    </div>
                                                    <div>
                                                        <span style={{ wordBreak: 'break-all' }} className="linkSpan">https://www.bfs.admin.ch/bfs/de/home/statistiken/preise/mieten/index.html</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-12 col-sm-6 col-lg-4">
                                    <a href="https://www.bfs.admin.ch/bfs/de/home/statistiken/preise/immobilienpreise.html" className='text-decoration-none' target="_blank">
                                        <div className='p-3 useFullLinks text-start'>
                                            <div className="row g-0">

                                                <div className="col">
                                                    <div className='pb-1'>
                                                        <span className='fw-600 descriptionFS'>Entwicklung der Immobilienpreise</span>
                                                    </div>
                                                    <div>
                                                        <span style={{ wordBreak: 'break-all' }} className="linkSpan">https://www.bfs.admin.ch/bfs/de/home/statistiken/preise/immobilienpreise.html</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-12 col-sm-6 col-lg-4">
                                    <a href="https://www.ubs.com/ch/de/private/mortgages/real-estate.html" className='text-decoration-none' target="_blank">
                                        <div className='p-3 useFullLinks text-start'>
                                            <div className="row g-0">

                                                <div className="col">
                                                    <div className='pb-1'>
                                                        <span className='fw-600 descriptionFS'>Real Estate Bubble Index</span>
                                                    </div>
                                                    <div>
                                                        <span style={{ wordBreak: 'break-all' }} className="linkSpan">https://www.ubs.com/ch/de/private/mortgages/real-estate.html</span>
                                                    </div>
                                                </div>
                                            </div>
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

                                        <div className='p-3 useFullLinks text-start'>
                                            <div className="row g-0">

                                                <div className="col">
                                                    <div className='pb-1'>
                                                        <span className='fw-600 descriptionFS'>Steuern beim Kauf und Verkauf</span>
                                                    </div>
                                                    <div>
                                                        <span style={{ wordBreak: 'break-all' }} className="linkSpan">https://www.ch.ch/de/steuern-und-finanzen/steuerarten/immobiliensteuer/</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-12 col-sm-6 col-lg-4">
                                    <a href="https://www.bsv.admin.ch/bsv/de/home/sozialversicherungen/bv/grundlagen-und-gesetze/grundlagen/wohneigentumsfoerderung.html" className='text-decoration-none' target="_blank">
                                        <div className='p-3 useFullLinks text-start'>
                                            <div className="row g-0">
                                                <div className="col">
                                                    <div className='pb-1'>
                                                        <span className='fw-600 descriptionFS'>Bezug der beruflichen Vorsorge</span>
                                                    </div>
                                                    <div>
                                                        <span style={{ wordBreak: 'break-all' }} className="linkSpan">https://www.bsv.admin.ch/bsv/de/home/sozialversicherungen/bv/grundlagen-und-gesetze/grundlagen/wohneigentumsfoerderung.html</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
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