import React from 'react'
import { useState } from 'react'
import { ReactComponent as Einzel } from '../../assets/images/newimages/drinnn-01.svg'
import { ReactComponent as EinzelDark } from '../../assets/images/newimages/drinnn-01Dark.svg'

import { ReactComponent as Familie } from '../../assets/images/newimages/drinnn-02.svg'
import { ReactComponent as FamilieDark } from '../../assets/images/newimages/drinnn-02Dark.svg'

import { ReactComponent as Building } from '../../assets/images/newimages/drinnn-03.svg'
import { ReactComponent as BuildingDark } from '../../assets/images/newimages/drinnn-03Dark.svg'

import { ReactComponent as Privat } from '../../assets/images/newimages/drinnn-04.svg'
import { ReactComponent as PrivatDark } from '../../assets/images/newimages/drinnn-04Dark.svg'

import Step2First from '../../assets/images/newimages/3tjerat-07.svg'
import Step2FirstDark from '../../assets/images/newimages/3tjerat-07Dark.svg'

import Step2Second from '../../assets/images/newimages/3tjerat-05.svg'
import Step2SecondDark from '../../assets/images/newimages/3tjerat-05Dark.svg'

import Step2Third from '../../assets/images/newimages/3tjerat-06.svg'
import Step2ThirdDark from '../../assets/images/newimages/3tjerat-06Dark.svg'

import Step3Male from '../../assets/images/rechtsschutzImgs/Male-01.svg'
import Step3MaleDark from '../../assets/images/rechtsschutzImgs/Male-01Dark.svg'

import Step3Female from '../../assets/images/rechtsschutzImgs/Female-01.svg'
import Step3FemaleDark from '../../assets/images/rechtsschutzImgs/Female-01Dark.svg'

import Step3Comp from '../../assets/images/rechtsschutzImgs/Building-01.svg'
import Step3CompDark from '../../assets/images/rechtsschutzImgs/Building-01Dark.svg'


import axios from 'axios'
import Arrow from '../../assets/images/rechtsschutzImgs/arrow.png'

import '../../assets/css/rechtsschutz.css'
function RechtsschutzSteps(props) {
    const [step, setStep] = useState(0);
    const onNext = () => setStep(step + 1);
    const onPrevious = () => setStep(step - 1);
    const [gender, setGender] = useState('');
    const [vorname, setVorname] = useState('');
    const [email, setEmail] = useState('');
    const [geburstdatum, setGeburstadum] = useState('');
    const [telefonnumer, setTelefonnumer] = useState('');
    const [plz, setPlz] = useState('');
    const [ort, setOrt] = useState('');
    const [strasse, setStrasse] = useState('');
    const [reschtutz, setReschutz] = useState('einzelpersonen');
    const [res2, setRes2] = useState('tiefe kosten');

    const [submitError, setSubmitError] = useState('')
    const [errorMessage, seterrorMessage] = useState('')
    const handleSubmit = (e) => {

        const data = {
            gender, vorname, email, geburstdatum, telefonnumer, plz, ort, strasse, reschtutz, res2
        }
        if (gender && vorname && email && geburstdatum && telefonnumer && plz && ort && strasse && reschtutz && res2) {
            const res = axios.post("https://node.kutiza.com/rechtschutz/sendEmail", data);
            console.log(res);
            seterrorMessage('Thank you for submitting')
            setSubmitError('#fff')
        }
        else {
            setSubmitError('#F6490E')
            seterrorMessage('Alle Felder sind erforderlich')

        }
    }
    return (
        <>
            <div className='container-xl px-4 px-xl-0 bodyCounterPadding'>
                <div className="row justify-content-center gx-0 gx-lg-4 bodyCounterPadding">

                    <div className="col-12 col-md-auto col-lg-5 my-auto">
                        <div className='pb-4 text-start'>
                            <span className='fw-700 fs-3 normalTextToBlue'>Jetzt passende<br></br>
                                <span style={{ wordBreak: 'break-all' }}>Rechtsschutzversicherung</span> finden!</span>
                        </div>
                        <div className="pe-0 pe-lg-4">
                            <div>
                                <svg className='img-fluid' width="285" height="183" viewBox="0 0 285 183" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M59.4931 101.498L61.9999 97.5002C71.4999 99.5002 95.9999 95.5002 112.5 91.5002C125.7 88.3002 143.333 104.167 150.5 112.5C156.667 103.167 177.4 86.8 211 96C224.2 99.2 232.167 99 234.5 98.5C234.808 99.2936 235.134 100.128 235.479 101C242.596 119.014 257.224 152.676 266 161C240 162 229 147 204.5 147.5C193.833 147 169.7 149.2 158.5 162C154.9 165.2 151.667 169.333 151 171C148 163.5 138.5 160 130 154C121.5 147.999 80.9999 136 53.4999 150C31.4999 161.2 25.3332 159 24.9999 156.5L59.4931 101.498Z" fill="white" />
                                    <path d="M245.5 104C252.264 120.757 267.226 155.27 276.727 169M47.169 109C47.1201 108.707 47.345 109.345 47.169 109ZM47.169 109C48.1126 107 50.6999 103.5 53.4999 105.5M47.169 109C38.6523 122.518 22.3087 150.107 12.2576 166.5M53.4999 105.5C49.8999 110.7 27.9999 145.666 17.4999 162.5C20.5 164.333 30.7001 166.6 47.5 161C68.4999 154 102 147 114 154C130.5 160.5 141 166.5 146 172.5M53.4999 105.5C53.9999 103.666 55.8999 100.3 59.4999 101.5M151 171C148 163.5 138.5 160 130 154C121.5 147.999 80.9999 136 53.4999 150C31.4999 161.2 25.3332 159 24.9999 156.5L61.9999 97.5002C71.4999 99.5002 95.9999 95.5002 112.5 91.5002C125.7 88.3002 143.333 104.167 150.5 112.5M151 171C150.6 158.6 150.5 127.333 150.5 112.5M151 171C151.667 169.333 154.9 165.2 158.5 162C169.7 149.2 193.833 147 204.5 147.5C229 147 240 162 266 161C257.224 152.676 242.596 119.014 235.479 101M150.5 112.5C156.667 103.167 177.4 86.8 211 96C224.2 99.2 232.167 99 234.5 98.5C234.808 99.2936 235.134 100.128 235.479 101M155 172C161.5 163.167 184.3 148.9 213.5 156.5C242.7 164.1 261.5 164.5 268.5 164.5H271.5C260.667 145.667 239.3 106.6 240.5 101C238.5 101 236.319 101 235.479 101M12.2576 166.5C9.91698 170.317 7.93555 173.582 6.5 176C31.7532 171.608 90.7443 169.672 123.956 169.119C129.559 169.026 134.992 170.598 139.837 173.414C143.865 175.754 148.214 178 150.5 178C158 178 160 174 161 173C161.28 172.719 162.263 172.097 163.503 171.405C166.705 169.615 170.364 169.011 174.033 169.046C199.784 169.292 249.299 170.143 279 172C278.286 171.162 277.526 170.154 276.727 169M12.2576 166.5C13.505 168.667 25.3999 171.2 62.9999 164C100.6 156.8 125.333 162.333 133 166C136.167 167.666 142.3 170.6 143.5 173M158.5 172.5C162.667 169 174.9 162.3 190.5 163.5C210 165 238.697 167 240.5 167C245 167 265.151 168 276.727 169" stroke="#5A5A5A" />
                                    <path d="M217.78 51.644C220.496 62.4351 221.706 73.7952 218.773 84.442C210.694 113.76 181.723 135.5 149.909 135.5C112.401 135.5 82 105.276 82 68C82 30.7236 112.401 0.5 149.909 0.5C166.779 0.5 181.068 2.73122 192.468 10.207C203.854 17.6731 212.439 30.425 217.78 51.644Z" fill="white" stroke="#5A5A5A" />
                                    <path d="M122.077 77.507C110.765 77.2707 107.715 68.4575 107.318 62.7693H137.311C136.756 67.2509 134.455 77.7655 122.077 77.507Z" fill="#50B8E7" stroke="#5A5A5A" />
                                    <path d="M182.555 77.2575C170.475 77.0252 167.219 68.3612 166.796 62.7693H198.822C198.229 67.175 195.772 77.5116 182.555 77.2575Z" fill="#50B8E7" stroke="#5A5A5A" />
                                    <path d="M141.378 104.2H159.679M141.378 104.2L151.048 35.5714M141.378 104.2H127.653C122.315 104.2 119.926 111.012 127.653 112.842H172.896C178.742 111.825 181.437 107.25 172.896 104.2H159.679M159.679 104.2C158.377 77.142 157.611 61.2197 156.377 35.5714M123.332 35.5714H151.048M123.332 35.5714L107.318 62.7685M123.332 35.5714L137.311 62.7685M151.048 35.5714L151.8 29.7253L153.833 29.9795L156.121 29.7253C156.209 31.5533 156.294 33.8387 156.377 35.5714M156.377 35.5714H184.589M184.589 35.5714L166.796 62.7685M184.589 35.5714L198.823 62.7685M111.131 66.0728H134.007M172.134 66.0728H195.01" stroke="#5A5A5A" />
                                    <path d="M160.248 23.117C160.248 26.7888 157.383 29.734 153.886 29.734C150.389 29.734 147.523 26.7888 147.523 23.117C147.523 19.4452 150.389 16.5 153.886 16.5C157.383 16.5 160.248 19.4452 160.248 23.117Z" stroke="#5A5A5A" />
                                    <path d="M149.766 21.3376C149.343 22.6085 149.054 25.5062 151.291 26.9296" stroke="#5A5A5A" strokeLinecap="round" />
                                    <path d="M141 174C144.243 172.668 153.884 170.659 160.5 173.274" stroke="#5A5A5A" />
                                    <path d="M241 102.5C242 102.166 244.3 102 245.5 104" stroke="#5A5A5A" />
                                    <path d="M46.6928 110.469C46.6928 107.284 44.0149 108.147 42.676 108.976C29.6215 129.543 3.76746 171.995 1.75907 174.782C0.959635 175.891 0.611004 176.879 0.523182 177.709C0.340383 179.436 2.23647 180.182 3.96848 180.055C36.3713 177.668 99.7028 173.369 126.482 172.844C129.609 172.783 132.615 173.893 135.208 175.64C151.587 186.677 159.234 180.096 160.166 179.633C161.037 179.202 163.876 177.683 166.966 175.777C169.948 173.937 173.365 172.838 176.868 172.923L268.075 175.149C271.615 175.236 275.139 175.781 278.68 175.822C282.216 175.862 284.948 175.073 284.439 172.791C282.753 165.233 250.296 105.617 249.794 104.622C249.292 103.627 245.777 103.627 246.28 106.115C246.782 112.583 271.5 163 278.916 172.791C264.857 169.308 177.74 169.184 171.467 169.184C165.854 169.184 160.668 174.657 156.15 177.145C152.535 179.136 145.86 176.938 142.848 175.279C136.055 171.24 128.452 168.855 120.549 168.847C95.7627 168.821 38.4158 172.787 6.78003 175.279C18.9977 156.039 43.4794 115.644 46.6928 110.469Z" fill="#50B8E7" stroke="#5A5A5A" />
                                </svg>
                            </div>
                        </div>
                        <div className='pt-4 text-end '>
                            <img className='arrowDivRech' style={{ maxWidth: 150 }} src={Arrow} alt="" />
                        </div>
                    </div>
                    <div className="col-12 col-md-9 col-lg-7">
                        <div className="">
                            <div className="hausratBlueDiv mx-auto p-4">
                                <form action="" className='mb-0'>
                                    <div className={`${(step === 0) ? 'd-block' : 'd-none'}`}>
                                        <div className='pb-5' >
                                            <span className='fw-700 fs-4'>Für wen suchen Sie eine<br></br>
                                                Rechtsschutzversicherung?</span>
                                        </div>
                                        <div className="row g-4">
                                            <div className="col-6 col-xl-3">
                                                <label htmlFor="Einzelpersonen" className='containerRes w-100 h-100'>
                                                    <input type="radio" id='Einzelpersonen' checked={(reschtutz === 'einzelpersonen') ? true : false} onChange={e => setReschutz('einzelpersonen')} name='who' hidden />
                                                    <div className='checkmarkRes px-1 mb-2'>
                                                        {props.darkMode

                                                            ? <EinzelDark className="w-100" height="70px" />
                                                            : <Einzel className="w-100" height="70px" />
                                                        }
                                                    </div>
                                                    <span className='underCheckmarkSpan'>Einzelpersonen</span>
                                                </label>
                                            </div>
                                            <div className="col-6 col-xl-3">
                                                <label htmlFor="Familien" className='containerRes w-100'>
                                                    <input type="radio" id='Familien' onChange={e => setReschutz('Familien')} name='who' hidden />
                                                    <div className='checkmarkRes px-1 mb-2'>
                                                        {props.darkMode

                                                            ? <FamilieDark className="w-100" height="70px" />
                                                            : <Familie className="w-100" height="70px" />
                                                        }
                                                    </div>
                                                    <span className='underCheckmarkSpan'>Familien</span>
                                                </label>
                                            </div>
                                            <div className="col-6 col-xl-3">
                                                <label htmlFor="Unternehmer" className='containerRes w-100 h-100'>
                                                    <input type="radio" id='Unternehmer' onChange={e => setReschutz('Unternehmer')} name='who' hidden />
                                                    <div className='checkmarkRes px-1 mb-2'>
                                                        {props.darkMode

                                                            ? <BuildingDark className="w-100" height="70px" />
                                                            : <Building className="w-100" height="70px" />
                                                        }
                                                    </div>
                                                    <span className='underCheckmarkSpan'>Unternehmer</span>
                                                </label>
                                            </div>
                                            <div className="col-6 col-xl-3">
                                                <label htmlFor="Privat" className='containerRes w-100 h-100'>
                                                    <input type="radio" id='Privat' onChange={e => setReschutz('Privat')} name='who' hidden />
                                                    <div className='checkmarkRes px-1 mb-2'>
                                                        {props.darkMode

                                                            ? <PrivatDark className="w-100" height="70px" />
                                                            : <Privat className="w-100" height="70px" />
                                                        }
                                                    </div>
                                                    <span className='underCheckmarkSpan'>Privat + Unternehmer</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className='pt-5'>
                                            <div className="row gx-4 gx-sm-0 justify-content-around">
                                                <div className="col-6 col-sm-auto">
                                                    <button style={{ visibility: 'hidden' }} type='button' className='autoBtnStyle'>
                                                        Zurück
                                                    </button>
                                                </div>
                                                <div className="col-6 col-sm-auto">
                                                    <button type='button' className='autoBtnStyle' onClick={onNext}>
                                                        Weiter
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${(step === 1) ? 'd-block' : 'd-none'}`}>
                                        <div className='pb-5'>
                                            <span className='fw-700 fs-4'>Für wen suchen Sie eine<br></br>
                                                Rechtsschutzversicherung?</span>
                                        </div>
                                        <div className="row g-4 justify-content-evenly">
                                            <div className="col-6 col-md-4 col-lg-3">
                                                <label htmlFor="Kosten" className='containerRes w-100 h-100'>
                                                    <input type="radio" checked={(res2 === 'tiefe kosten') ? true : false} onChange={e => setRes2('tiefe kosten')} id='Kosten' name='who1' hidden />
                                                    <div className='checkmarkRes px-1 mb-2'>
                                                        {props.darkMode

                                                            ? <img src={Step2FirstDark} height="70px" alt="" />
                                                            : <img src={Step2First} height="70px" alt="" />
                                                        }
                                                    </div>
                                                    <span className='underCheckmarkSpan'>Tiefe Kosten</span>
                                                </label>
                                            </div>
                                            <div className="col-6 col-md-4 col-lg-3">
                                                <label htmlFor="Weltweite" className='containerRes w-100'>
                                                    <input type="radio" onChange={e => setRes2('Weltweite')} id='Weltweite' name='who1' hidden />
                                                    <div className='checkmarkRes px-1 mb-2'>
                                                        {props.darkMode

                                                            ? <img src={Step2SecondDark} height="70px" alt="" />
                                                            : <img src={Step2Second} height="70px" alt="" />
                                                        }

                                                    </div>
                                                    <span className='underCheckmarkSpan'>Weltweite Deckung</span>
                                                </label>
                                            </div>
                                            <div className="col-6 col-md-4 col-lg-3">
                                                <label htmlFor="Guter" className='containerRes w-100 h-100'>
                                                    <input type="radio" onChange={e => setRes2('Guter')} id='Guter' name='who1' hidden />
                                                    <div className='checkmarkRes px-1 mb-2'>

                                                        {props.darkMode

                                                            ? <img src={Step2ThirdDark} height="70px" alt="" />
                                                            : <img src={Step2Third} height="70px" alt="" />
                                                        }
                                                    </div>
                                                    <span className='underCheckmarkSpan'>Guter Kundendienst</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className='pt-5'>
                                            <div className="row gx-4 gx-sm-0 justify-content-around">
                                                <div className="col-6 col-sm-auto">

                                                    <button type='button' className='autoBtnStyle' onClick={onPrevious}>
                                                        Zurück
                                                    </button>
                                                </div>
                                                <div className="col-6 col-sm-auto">
                                                    <button type='button' className='autoBtnStyle' onClick={onNext}>
                                                        Weiter
                                                    </button>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className={`${(step === 2) ? 'd-block' : 'd-none'}`}>
                                        <div className='pb-4 text-start'>
                                            <div className='pb-2'>
                                                <span className='fw-700'>Bitte geben Sie hier ihre Angaben ein.</span>
                                            </div>
                                            <div className='pb-4'>
                                                <div className="row g-4">
                                                    <div className="col-4 text-center">
                                                        <label htmlFor="female" className='containerRes2 w-100 h-100'>
                                                            <input type="radio" id='female' onChange={e => setGender('female')} name='who3' hidden />
                                                            <div className='checkmarkRes2'>

                                                                {props.darkMode

                                                                    ? <img src={Step3FemaleDark} className="img-fluid" alt="" />
                                                                    : <img src={Step3Female} className="img-fluid" alt="" />
                                                                }
                                                            </div>
                                                        </label>
                                                    </div>
                                                    <div className="col-4 text-center">
                                                        <label htmlFor="male" className='containerRes2 w-100 h-100'>
                                                            <input type="radio" id='male' onChange={e => setGender('male')} name='who3' hidden />
                                                            <div className='checkmarkRes2'>
                                                                {props.darkMode

                                                                    ? <img src={Step3MaleDark} className="img-fluid" alt="" />
                                                                    : <img src={Step3Male} className="img-fluid" alt="" />
                                                                }
                                                            </div>
                                                        </label>
                                                    </div>
                                                    <div className="col-4 text-center">
                                                        <label htmlFor="notSpecified" className='containerRes2 w-100 h-100'>
                                                            <input type="radio" id='notSpecified' onChange={e => setGender('notSpecified')} name='who3' hidden />
                                                            <div className='checkmarkRes2'>
                                                                {props.darkMode

                                                                    ? <img src={Step3CompDark} className="img-fluid" alt="" />
                                                                    : <img src={Step3Comp} className="img-fluid" alt="" />
                                                                }
                                                                
                                                            </div>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='pb-4'>
                                                <div className="row g-4">
                                                    <div className="col-12 col-sm-6">

                                                        <div>
                                                            <input className='step3InputRechtss' onChange={e => setVorname(e.target.value)} type="text" name="" placeholder='Vorname und Nachname / Firmenname' id="" />
                                                        </div>
                                                    </div>
                                                    <div className="col-12 col-sm-6">

                                                        <div>
                                                            <input className='step3InputRechtss' onChange={e => setEmail(e.target.value)} type="text" name="" placeholder='E-mail' id="" />
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>


                                            <div className='pb-4'>
                                                <div className="row g-4">
                                                    <div className="col-12 col-sm-6 ">

                                                        <div className="">

                                                            <input className='step3InputRechtss form-control' type={'date'} onChange={e => setGeburstadum(e.target.value)} name="" placeholder='Geburtsdatum' id="" />

                                                        </div>
                                                    </div>
                                                    <div className='col-12 col-sm-6'>

                                                        <div className="">
                                                            <input className='step3InputRechtss' onChange={e => setTelefonnumer(e.target.value)} type="tel" name="" placeholder='Telefonnummer' id="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='pb-4'>
                                                <div className="row g-4">
                                                    <div className="col-12 col-sm-4">

                                                        <div className="">
                                                            <input className='step3InputRechtss' onChange={e => setPlz(e.target.value)} type="text" name="" placeholder='PLZ' id="" />
                                                        </div>
                                                    </div>
                                                    <div className='col-12 col-sm-4'>

                                                        <div className="">
                                                            <input className='step3InputRechtss' onChange={e => setOrt(e.target.value)} type="text" name="" placeholder='Ort' id="" />
                                                        </div>
                                                    </div>
                                                    <div className="col-12 col-sm-4">

                                                        <div>
                                                            <input className='step3InputRechtss' type="text" onChange={e => setStrasse(e.target.value)} name="" placeholder='Strasse' id="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                        <div className="row gx-4 gx-sm-0 justify-content-around">
                                            <div className="col-6 col-sm-auto my-auto">
                                                <button type='button' className='autoBtnStyle' onClick={onPrevious}>
                                                    Zurück
                                                </button>
                                            </div>
                                            <div className="col-6 col-sm-auto">
                                                <button type='button' onClick={handleSubmit} className='autoBtnStyle step3RechtssBtn'>Vergleich anfordern</button>
                                            </div>
                                        </div>
                                        {(submitError !== '') && (
                                            <div className="pt-4" >
                                                <span style={{ color: submitError }}>{errorMessage}</span>
                                            </div>
                                        )}

                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="col-12 mx-auto">
                    <div className="">
                        <div className="wrapDiv container-xl px-0">
                            <div className='row gx-0 gx-md-4 gy-0 text-start justify-content-between'>
                                <div className="col-12 col-md-6 col-lg-5 pb-4 pb-md-0">

                                    <div className=''>
                                        <span className='fw-700 firstBlueTitle fs-1'>
                                            Wozu überhaupt eine <br></br> Rechtsschutzversicherung?
                                        </span>
                                    </div>
                                </div>
                                <div className="col col-md-6 col-lg-7 my-auto">
                                    <div className='fw-500 fs-5 normalTextToWhite' >
                                        <span>Nicht immer läuft alles so wie es soll und manchmal benötigt man auch jurstische Unterstützung oder Beratung. Deshalb sollten Sie zur optimalen Absicherung auch an eine Rechtsschutz denken um bei jeglicher Art von Streitigkeiten möglichst gut abgesichert zu sein!</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default RechtsschutzSteps