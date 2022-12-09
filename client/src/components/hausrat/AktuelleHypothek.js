import React from 'react'
import { useState, useEffect } from 'react'

import img1 from '../../assets/images/3.svg'
import img2 from '../../assets/images/5.svg'
import img3 from '../../assets/images/10.svg'
import img4 from '../../assets/images/15.svg'

import img1dark from '../../assets/images/3dark.svg'
import img2dark from '../../assets/images/5dark.svg'
import img3dark from '../../assets/images/10dark.svg'
import img4dark from '../../assets/images/15dark.svg'




function AktuelleHypothek(props) {

    const ScrollToForm = () => {
        window.scrollTo({
            top: 600
        });
    }
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    useEffect(() => {
        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        }

        window.addEventListener('resize', changeWidth)

        return () => {
            window.removeEventListener('resize', changeWidth)
        }
    }, [])
    return (
        <div>
            <div className="wrapDiv container-xl px-4 px-xl-0 mx-auto">
                <div className=''>

                    <div className="row gx-4 justify-content-between bodyCounterPadding">
                        <div className="col-12 col-md-6 col-lg-5 col-xl-4 text-start">

                            <div className='pb-3 text-start'>
                                <span className='fw-700 firstBlueTitle fs-1'>Aktuelle Hypothekarzinsen​</span>
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
                                    {props.darkMode
                                        ? <img src={img1dark} className='img-fluid' alt='' />
                                        : <img src={img1} className='img-fluid' alt='' />
                                    }
                                </div>
                                <div className="col-6 col-sm-6 col-lg-5">
                                    {props.darkMode
                                        ? <img src={img2dark} className='img-fluid' alt='' />
                                        : <img src={img2} className='img-fluid' alt='' />
                                    }
                                </div>
                                <div className="col-6 col-sm-6 col-lg-5">
                                    {props.darkMode
                                        ? <img src={img3dark} className='img-fluid' alt='' />
                                        : <img src={img3} className='img-fluid' alt='' />
                                    }
                                </div>
                                <div className="col-6 col-sm-6 col-lg-5">
                                    {props.darkMode
                                        ? <img src={img4dark} className='img-fluid' alt='' />
                                        : <img src={img4} className='img-fluid' alt='' />
                                    }
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
                    
                </div>
            </div>
        </div>
    )
}

export default AktuelleHypothek