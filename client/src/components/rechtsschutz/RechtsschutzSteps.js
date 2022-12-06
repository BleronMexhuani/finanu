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

import '../../assets/css/rechtsschutz.css'

function RechtsschutzSteps(props) {
    const [step, setStep] = useState(0);
    const onNext = () => setStep(step + 1);
    const onPrevious = () => setStep(step - 1);
    const [gender, setGender] = useState('female');
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
    const [triedSubmit, settriedSubmit] = useState(false)
    const handleSubmit = (e) => {
        settriedSubmit(true)
        const data = {
            gender, vorname, email, geburstdatum, telefonnumer, plz, ort, strasse, reschtutz, res2
        }
        if (gender && vorname && email && geburstdatum && telefonnumer && plz && ort && strasse && reschtutz && res2) {
            const res = axios.post("https://node.kutiza.com/rechtschutz/sendEmail", data);
            console.log(res);
            seterrorMessage('Thank you for submitting!')
            setSubmitError((props.darkMode) ? "#fff" : "#000")
        }
        else {
            setSubmitError('#F6490E')
            seterrorMessage('Alle Felder sind erforderlich')
        }
    }
    
    return (
        <>
            <div className='container-xl px-4 px-xl-0 bodyCounterPadding'>
                <div className='pb-5'>
                    <span className='fw-700 fs-1 normalTextToWhite'>Jetzt passende<br></br>
                        Rechtsschutzversicherung finden!
                    </span>
                </div>
                <div className="rechStepsBorderDiv">
                    <div className="rechStepNrDiv fw-700 fs-4 firstBlueTitle">
                        <span>{step + 1 }/3</span>
                    </div>
                    <div className="row justify-content-center gx-0 gx-lg-4">
                        <div className="col-12 col-md-9 col-lg-8">
                            <div className="">
                                <div className="mx-auto p-4 p-md-5">
                                    <form action="" className='mb-0'>
                                        <div className={`${(step === 0) ? 'd-block' : 'd-none'}`}>
                                            <div className='pb-5' >
                                                <span className='fw-700 fs-4 firstBlueTitle'>Für wen suchen Sie eine<br></br>
                                                    Rechtsschutzversicherung?</span>
                                            </div>
                                            <div className="row g-4">
                                                <div className="col-6 col-xl-3">
                                                    <label htmlFor="Einzelpersonen" className='containerRes w-100 h-100'>
                                                        <input type="radio" id='Einzelpersonen' checked={(reschtutz === 'einzelpersonen') ? true : false} onChange={e => setReschutz('einzelpersonen')} name='who' hidden />
                                                        <div className='checkmarkRes px-1 mb-2 greyCheckMarkBorder'>
                                                            {props.darkMode

                                                                ? <EinzelDark className="w-100" height="70px" />
                                                                : <Einzel className="w-100" height="70px" />
                                                            }
                                                        </div>
                                                        <span className='underCheckmarkSpan normalTextToWhite'>Einzelpersonen</span>
                                                    </label>
                                                </div>
                                                <div className="col-6 col-xl-3">
                                                    <label htmlFor="Familien" className='containerRes w-100'>
                                                        <input type="radio" id='Familien' onChange={e => setReschutz('Familien')} name='who' hidden />
                                                        <div className='checkmarkRes px-1 mb-2 greyCheckMarkBorder'>
                                                            {props.darkMode

                                                                ? <FamilieDark className="w-100" height="70px" />
                                                                : <Familie className="w-100" height="70px" />
                                                            }
                                                        </div>
                                                        <span className='underCheckmarkSpan normalTextToWhite'>Familien</span>
                                                    </label>
                                                </div>
                                                <div className="col-6 col-xl-3">
                                                    <label htmlFor="Unternehmer" className='containerRes w-100 h-100'>
                                                        <input type="radio" id='Unternehmer' onChange={e => setReschutz('Unternehmer')} name='who' hidden />
                                                        <div className='checkmarkRes px-1 mb-2 greyCheckMarkBorder'>
                                                            {props.darkMode

                                                                ? <BuildingDark className="w-100" height="70px" />
                                                                : <Building className="w-100" height="70px" />
                                                            }
                                                        </div>
                                                        <span className='underCheckmarkSpan normalTextToWhite'>Unternehmer</span>
                                                    </label>
                                                </div>
                                                <div className="col-6 col-xl-3">
                                                    <label htmlFor="Privat" className='containerRes w-100 h-100'>
                                                        <input type="radio" id='Privat' onChange={e => setReschutz('Privat')} name='who' hidden />
                                                        <div className='checkmarkRes px-1 mb-2 greyCheckMarkBorder'>
                                                            {props.darkMode

                                                                ? <PrivatDark className="w-100" height="70px" />
                                                                : <Privat className="w-100" height="70px" />
                                                            }
                                                        </div>
                                                        <span className='underCheckmarkSpan normalTextToWhite'>Privat + Unternehmer</span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className='pt-5'>
                                                <div className="row gx-4 gx-sm-0 justify-content-center">
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
                                                <span className='fw-700 fs-4 firstBlueTitle'>Für wen suchen Sie eine<br></br>
                                                    Rechtsschutzversicherung?</span>
                                            </div>
                                            <div className="row g-4 justify-content-evenly">
                                                <div className="col-6 col-md-4 col-lg-3">
                                                    <label htmlFor="Kosten" className='containerRes w-100 h-100'>
                                                        <input type="radio" checked={(res2 === 'tiefe kosten') ? true : false} onChange={e => setRes2('tiefe kosten')} id='Kosten' name='who1' hidden />
                                                        <div className='checkmarkRes px-1 mb-2 greyCheckMarkBorder'>
                                                            {props.darkMode

                                                                ? <img src={Step2FirstDark} height="70px" alt="" />
                                                                : <img src={Step2First} height="70px" alt="" />
                                                            }
                                                        </div>
                                                        <span className='underCheckmarkSpan normalTextToWhite'>Tiefe Kosten</span>
                                                    </label>
                                                </div>
                                                <div className="col-6 col-md-4 col-lg-3">
                                                    <label htmlFor="Weltweite" className='containerRes w-100'>
                                                        <input type="radio" onChange={e => setRes2('Weltweite')} id='Weltweite' name='who1' hidden />
                                                        <div className='checkmarkRes px-1 mb-2 greyCheckMarkBorder'>
                                                            {props.darkMode

                                                                ? <img src={Step2SecondDark} height="70px" alt="" />
                                                                : <img src={Step2Second} height="70px" alt="" />
                                                            }

                                                        </div>
                                                        <span className='underCheckmarkSpan normalTextToWhite'>Weltweite Deckung</span>
                                                    </label>
                                                </div>
                                                <div className="col-6 col-md-4 col-lg-3">
                                                    <label htmlFor="Guter" className='containerRes w-100 h-100'>
                                                        <input type="radio" onChange={e => setRes2('Guter')} id='Guter' name='who1' hidden />
                                                        <div className='checkmarkRes px-1 mb-2 greyCheckMarkBorder'>

                                                            {props.darkMode

                                                                ? <img src={Step2ThirdDark} height="70px" alt="" />
                                                                : <img src={Step2Third} height="70px" alt="" />
                                                            }
                                                        </div>
                                                        <span className='underCheckmarkSpan normalTextToWhite'>Guter Kundendienst</span>
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
                                                    <div className="row g-2 g-sm-4">
                                                        <div className="col-4 text-center">
                                                            <label htmlFor="female" className='containerRes2 w-100 h-100'>
                                                                <input type="radio" id='female' onChange={e => setGender('female')} checked={(gender === 'female' ? true : false)} name='who3' hidden />
                                                                <div className='checkmarkRes2 greyCheckMarkBorder'>

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
                                                                <div className='checkmarkRes2 greyCheckMarkBorder'>
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
                                                                <div className='checkmarkRes2 greyCheckMarkBorder'>
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
                                                                <input className={`step3InputRechtss rechInputStyle2 ${(triedSubmit && vorname==='') ? 'submitErrorInputStyle' : ''} `} onChange={e => setVorname(e.target.value)} type="text" name="" placeholder='Vorname und Nachname / Firmenname' id="" />
                                                            </div>
                                                        </div>
                                                        <div className="col-12 col-sm-6">

                                                            <div>
                                                                <input className={`step3InputRechtss rechInputStyle2 ${(triedSubmit && email==='') ? 'submitErrorInputStyle' : ''} `} onChange={e => setEmail(e.target.value)} type="text" name="" placeholder='E-mail' id="" />
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>


                                                <div className='pb-4'>
                                                    <div className="row g-4">
                                                        <div className="col-12 col-sm-6 ">

                                                            <div className="">

                                                                <input className={`step3InputRechtss form-control rechInputStyle2 ${(triedSubmit && geburstdatum==='') ? 'submitErrorInputStyle' : ''} `} type={'date'} onChange={e => setGeburstadum(e.target.value)} name="" placeholder='Geburtsdatum' id="" />

                                                            </div>
                                                        </div>
                                                        <div className='col-12 col-sm-6'>

                                                            <div className="">
                                                                <input className={`step3InputRechtss rechInputStyle2 ${(triedSubmit && telefonnumer==='') ? 'submitErrorInputStyle' : ''} `} onChange={e => setTelefonnumer(e.target.value)} type="tel" name="" placeholder='Telefonnummer' id="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='pb-4'>
                                                    <div className="row g-4">
                                                        <div className="col-12 col-sm-4">

                                                            <div className="">
                                                                <input className={`step3InputRechtss rechInputStyle2 ${(triedSubmit && plz==='') ? 'submitErrorInputStyle' : ''} `} onChange={e => setPlz(e.target.value)} type="text" name="" placeholder='PLZ' id="" />
                                                            </div>
                                                        </div>
                                                        <div className='col-12 col-sm-4'>

                                                            <div className="">
                                                                <input className={`step3InputRechtss rechInputStyle2 ${(triedSubmit && ort==='') ? 'submitErrorInputStyle' : ''} `} onChange={e => setOrt(e.target.value)} type="text" name="" placeholder='Ort' id="" />
                                                            </div>
                                                        </div>
                                                        <div className="col-12 col-sm-4">

                                                            <div>
                                                                <input className={`step3InputRechtss rechInputStyle2 ${(triedSubmit && strasse==='') ? 'submitErrorInputStyle' : ''} `} type="text" onChange={e => setStrasse(e.target.value)} name="" placeholder='Strasse' id="" />
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
                                                    <span className='fw-500' style={{ color: submitError }}>{errorMessage}</span>
                                                </div>
                                            )}
                                        </div>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="col-12 mx-auto">
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
                </div> */}
            </div>


        </>
    )
}

export default RechtsschutzSteps