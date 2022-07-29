import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import NewPerson from './NewPerson';
import Tooth from "../../assets/images/tooth.svg"
import {v4 as uuidv4 } from 'uuid'

function KrankenkasseSteps() {
    const [insurances, setInsurances] = useState([]);
    const [ort, setOrt] = useState(null);
    const [plz, setPlz] = useState(null);
    const [insuranceNum, setInsuranceNum] = useState(null);
    const [kanton, setKanton] = useState(null);
    const [region, setRegion] = useState(null);
    const [commune, setCommune] = useState(null);
    const [jahrgang, setJahrgang] = useState([2000, 2009, 2003]);
    const [actualmodels, setActualModels] = useState([]);
    const [franchise, setFranchise] = useState(['1000', '300', '300']);
    const [model, setModel] = useState(null);
    const [accident, setAccident] = useState(['MIT-UNF', 'OHN-UNF', 'OHN-UNF']);
    const [tarifbezeichnung, setTarifbezeichnung] = useState(null);
    const [krankenkasse, setKrankenkasse] = useState([]);
    const [regions, setRegions] = useState([]);
    const [isFocused, setIsFocused] = useState(false)
    const [inputValue, setInputValue] = useState("")
    const [filter, setFilter] = useState([]);
    const [isEmpty, setIsEmpty] = useState(false)
    const showSelectDropdown = () => {
        setIsFocused(true)
    }
    const hideSelectDropdown = () => {
        setTimeout(() => {
            setIsFocused(false)
        }, 150);
    }
    useEffect(() => {
        //Get all the regions
        const getRegions = async () => {
            await axios.get(
                'http://finanu.kutiza.com/krankenkasse/regions'
            )
                .then(function (result) {
                    setRegions(result.data);
                })
                .catch(function (error) {
                    console.log(error);
                });

        }
        getRegions();
    }, [])
    const handleInput = (e) => {
        setOrt(e.target.getAttribute('data-ort'));
        setPlz(e.target.getAttribute('data-plz'));
        setCommune(e.target.getAttribute('data-commune'));
        setKanton(e.target.getAttribute('data-kanton'));
        setRegion(e.target.getAttribute('data-region'));
        document.getElementById('inputChange').value = e.target.getAttribute('value');
        setInputValue(e.target.getAttribute('value'))
        setIsFocused(false)

    }
    const searchRegion = (e) => {
        const region = regions.filter((element) => (element.plz + " " + element.ort).includes(inputValue))
        if (inputValue === '' || inputValue === null) {
            setFilter([]);
            setIsEmpty(true)
        }
        else {
            setFilter(region);
            setIsEmpty(false)
        }
    }

    useEffect(() => {
        searchRegion()

    }, [inputValue])

    ///////////////////////////////
    useEffect(() => {
        const getInsurances = async () => {
            if (plz !== null && ort !== null && commune !== null) {
                await axios.get(
                    `http://finanu.kutiza.com/krankenkasse/insurances/${plz}/${ort}/${commune}`
                )
                    .then(function (result) {
                        setInsurances(result.data);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
            else {
                setInsurances([]);
            }
        }

        getInsurances();

    }, [plz, ort, commune])

    const handleSubmit = async (event) => {
        event.preventDefault()
        const targetJahrgang = [];
        const targetAccident = [];
        const targetFranchise = [];
        let i = 0;
        for (let i = 0; i < event.target.length - 1; i++) {
            if (event.target[i].name == 'Jahrgang') {
                targetJahrgang.push(parseInt(event.target[i].value));
            }
            else if (event.target[i].getAttribute('data-accident') == 'asd') {
                if (event.target[i].checked) {
                    targetAccident.push(event.target[i].value);
                }
            }
            else if (event.target[i].name == 'franchise') {
                targetFranchise.push(parseInt(event.target[i].value));
            }
        }
        setFranchise(targetFranchise);
        setJahrgang(targetJahrgang);
        setAccident(targetAccident);
        const result = await axios.get(`http://finanu.kutiza.com/krankenkasse/compareInputs/${insuranceNum}/${kanton}/${region}/${targetJahrgang}/${targetAccident}/${model}/${targetFranchise}/${tarifbezeichnung}`);


        setKrankenkasse(result.data);
        console.log(result.data)
    }

    const [persons, setPersons] = useState([])
    const [personId, setPersonId] = useState(0)
    useEffect(() => { })

    const addPerson = (event) => {

        setPersonId(personId + 1)
        setPersons(persons => [...persons, personId])

    }

    function deleteChild(id) {
        let clone = [...persons]
        var index = clone.indexOf(id)
        if (index !== -1) {
            clone.splice(index, 1)
        }
        console.log(clone)
        setPersons(clone);
    }
    const [checkJahr, setCheckJahr] = useState(false)
    const [isChild, setIsChild] = useState(true)
    const under18Price = [0, 100, 200, 300, 400, 500, 600]
    const over18Price = [300, 500, 1000, 1500, 2000, 2500]

    const validateJahrgang = (e) => {
        const d = new Date();
        let year = d.getFullYear();

        if (e.target.value <= year && e.target.value !== '' && e.target.value >= 1900) {
            setCheckJahr(true)
            if (year - e.target.value <= 18) {
                setIsChild(true)
            }
            else {
                setIsChild(false)
            }
        }
        else {
            setCheckJahr(false)
        }


    }

    useEffect(() => {
        const getActualModels = async () => {
            const result = await axios.get(`http://finanu.kutiza.com/krankenkasse/actualmodel/${insuranceNum}`)
            setActualModels(result.data);
        }
        if (insuranceNum != null) {
            getActualModels();
        }
        else {
            setActualModels([]);
        }
    }, [insuranceNum])

    const setmodels = async (e) => {
        setModel(e.target.options[e.target.selectedIndex].getAttribute('data-tariftyp'));
        setTarifbezeichnung(e.target.value);
    }

    const toSecondStep = () => {
        
        if (inputValue === '' || inputValue === null || insuranceNum === "" || insuranceNum === null) { 
            console.log("empty")
        }
        else {
            setSecondStep(true)
        }
    }
    const [secondStep, setSecondStep] = useState(false)
    const [familySituation, setFamilySituation] = useState('')
    const [thirdStep, setThirdStep] = useState(false)
    const [thirdStep2, setThirdStep2] = useState(false)
    const [fourthStep, setFourthStep] = useState(false)
    const [fourthStep2, setFourthStep2] = useState(false)
    const [fifthStep, setFifthStep] = useState(false)

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className='mx-4'>
                    <div className='krankenFirstStep wrapDiv container-xl px-4 mx-auto py-5'>
                        <div>
                            <span className='krankenTitle fs-2'>KRANKENKASSEN VERGLEICHEN 2022</span>
                        </div>
                        <div>
                            <span className='krankenSubtitle'>Vergleichen Sie die Leistungen und Prämien der zugelassenen Krankenkassen in der Schweiz.</span>
                        </div>
                        <div className='pt-5'>
                            <div className="row g-4 g-md-5 justify-content-center">
                                <div className="col-12 col-sm-6 col-md-4">
                                    <div style={{ position: 'relative' }}>
                                        <div>
                                            <input type="text" id="inputChange" onChange={(e) => setInputValue(e.target.value)} onFocus={showSelectDropdown} onBlur={hideSelectDropdown} placeholder='Postleitzahl' className='krankenInputStyle' />
                                        </div>
                                        {(isFocused && !isEmpty) && (
                                            <div className='krankenSelectDropdown'>

                                                {filter.map(element => {
                                         
                                                    return (
                                                        <div className='selectOptionStyle' key={uuidv4()} onClick={handleInput} value={element.plz + " " + element.ort} data-region={element.region} data-kanton={element.kanton} data-ort={element.ort} data-plz={element.plz} data-commune={element.commune}>
                                                            {element.plz + " " + element.ort + (element.ort === element.commune ? '' : (" (" + element.commune + ")"))}
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-4">

                                    <select className='krankenSelectStyle form-select' onChange={(e) => setInsuranceNum(e.target.value)} name="" id="insurances">
                                        <option value="" ></option>
                                        {insurances.map(element => {
                                            return (
                                                <option key={element.id} value={element.number} >{element.name}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                                <div className="col-12 col-sm-6 col-md-4">
                                    <button type='button' className='krankenBtnStyle' onClick={toSecondStep}>Jetzt Vergleichen</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {secondStep && (
                    <div className='krankenSecondStep wrapDiv container-xl px-4 px-xl-0 pt-5'>
                        <div className='my-5 krankenStepsCircle mx-auto fs-5'>
                            <span>2/5</span>
                        </div>
                        <div className='pb-1'>
                            <span className='fw-bold fs-4'>ALLE SCHWEIZER KRANKENKASSEN</span>
                        </div>
                        <div className='pb-5'>
                            <span className='fw-500'>Bei uns finden Sie Ihr passendes Angebot</span>
                        </div>
                        <div className="krankenStepsBox">
                            <div className='pb-5'>
                                <div className='text-start pb-3'>
                                    <span className='fw-bold'>Sind Sie bereits in der Schweiz versichert?</span>
                                </div>
                                <div className=''>
                                    <div className="row gy-4 gx-0 gx-md-4" >
                                        <div className="col-12 col-sm-6">
                                            <label htmlFor="yesFirstRadio" className='container1 w-100'>
                                                <input type="radio" id='yesFirstRadio' name='radio' hidden />
                                                <span className='checkmark'>Ja, ich bin bereits versichert</span>
                                            </label>
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <label htmlFor="noFirstRadio" className='container1 w-100'>
                                                <input type="radio" id='noFirstRadio' name='radio' hidden />
                                                <span className='checkmark'>
                                                    Nein, neu in der Schweiz
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='py-4'>
                                <div className='pb-3 text-start'>
                                    <span className='fw-bold'>Welche Situation triff auf Sie zu?</span>
                                </div>
                                <div>
                                    <div className="row gy-4 gx-0 gx-md-4">
                                        <div className="col-12 col-sm-6 col-md-4">
                                            <label onChange={(e) => { setFamilySituation('familie') }} htmlFor="familieradio" className='container1 w-100'>
                                                <input value="familie" type="radio" id='familieradio' name='radio1' hidden />
                                                <span className='checkmark'>Familie</span>
                                            </label>
                                        </div>
                                        <div className="col-12 col-sm-6 col-md-4">
                                            <label onChange={(e) => { setFamilySituation('paar') }} htmlFor="paarradio" className='container1 w-100'>
                                                <input type="radio" id='paarradio' value="paar" name='radio1' hidden />
                                                <span className='checkmark'>Paar</span>
                                            </label>
                                        </div>
                                        <div className="col-12 col-sm-6 col-md-4">
                                            <label onChange={(e) => { setFamilySituation('einzel') }} htmlFor="einzelradio" className='container1 w-100'>
                                                <input type="radio" id='einzelradio' value="einzel" name='radio1' hidden />
                                                <span className='checkmark'>Einzelperson</span>
                                            </label>
                                        </div>
                                    </div>
                                    {(familySituation === 'familie' || familySituation === 'paar') && (
                                        <div>
                                            <div className='pt-5'>
                                                <div className='pb-3 text-start'>
                                                    <span className='fw-bold'>Gleiches Versicherungsmodell? (Hausarzt, Telmed, etc)</span>
                                                </div>
                                                <div>
                                                    <div className="row gy-4 gx-0 gx-md-4">
                                                        <div className="col-12 col-sm-6">
                                                            <label htmlFor="familieModel" className='container1 w-100'>
                                                                <input type="radio" id='familieModel' value="familieModel" name='radio2' hidden />
                                                                <span className='checkmark'>Gesamte Familie gleiches Modell</span>
                                                            </label>
                                                        </div>
                                                        <div className="col-12 col-sm-6">
                                                            <label htmlFor="individualModel" className='container1 w-100'>
                                                                <input type="radio" id='individualModel' value="individualModel" name='radio2' hidden />
                                                                <span className='checkmark'>Individuelle Modelle</span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className='pt-5'>
                                <button className='nextBtnKranken' type='button' onClick={(e) => { setThirdStep(true) }}>Weiter</button>
                            </div>
                        </div>

                    </div>
                )}
                {thirdStep && (
                    <div className='wrapDiv container-xl px-4 px-xl-0 pt-5'>
                        <div className='krankenSecondStep'>
                            <div className='my-5 krankenStepsCircle mx-auto fs-5'>
                                <span>3/5</span>
                            </div>
                            <div className='pb-1'>
                                <span className='fw-bold fs-4'>PERSONENANGABEN</span>
                            </div>
                            <div className='pb-5'>
                                <span className='fw-500'>Wir benötigen Geburtstag & Geschlecht, um Ihre individuelle Prämie zu berechnen</span>
                            </div>
                            <div className='krankenStepsBox'>
                                <div className="row g-4">
                                    <div className="col-6 col-md-3">
                                        <label htmlFor="maleRadio" className='container1 w-100'>
                                            <input type="radio" id='maleRadio' name='gender' hidden />
                                            <span className='checkmark'>Herr</span>
                                        </label>
                                    </div>
                                    <div className="col-6 col-md-3">
                                        <label htmlFor="femaleRadio" className='container1 w-100'>
                                            <input type="radio" id='femaleRadio' name='gender' hidden />
                                            <span className='checkmark'>Frau</span>
                                        </label>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <input type="text" name="" id="" placeholder='Vorname & Nachname' className='krankenInputStyle krankenInputStepStyle p-3' />
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <input type="number" name='Jahrgang'
                                            step={1}
                                            defaultValue={''}
                                            onChange={validateJahrgang}
                                            placeholder='Jahrgang'
                                            className='krankenInputStyle krankenInputStepStyle p-3' />
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <select disabled={checkJahr ? false : "disabled"} name="franchise" id="" className='krankenInputStyle form-select krankenInputStepStyle p-3'>
                                            <option value="" defaultValue=''>Franchise</option>
                                            {isChild && (
                                                under18Price.map((numri) =>
                                                    <option key={numri.toString()} value={numri}>{"CHF " + numri}</option>
                                                )
                                            )}
                                            {!isChild && (
                                                over18Price.map((numri) =>
                                                    <option key={numri.toString()} value={numri}>{"CHF " + numri}</option>
                                                )
                                            )}
                                        </select>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <label htmlFor="mit" className='container1 w-100'>
                                            <input type="radio" id='mit' value={"MIT-UNF"} data-accident='asd' name='accident' hidden />
                                            <span className='checkmark'>mit Unfall</span>
                                        </label>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <label htmlFor="ohne" className='container1 w-100'>
                                            <input type="radio" value={"OHN-UNF"} data-accident='asd' id='ohne' name='accident' hidden />
                                            <span className='checkmark'>ohne Unfall</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                {
                                    persons.map((id) =>
                                        <NewPerson key={id} id={id} index={id} removeItem={deleteChild} />
                                    )
                                }
                            </div>
                        </div>
                        <div className='text-start pt-4'>
                            <div>
                                <span className='plusPersonBtn fw-500' onClick={(event) => addPerson(event)}>+ Person hinzufügen</span>
                            </div>
                        </div>
                        <div className='col-12 col-sm-8 col-md-4 col-lg-3 mx-auto pt-4 pb-5'>
                            <select name="" id="" onChange={(e) => setmodels(e)} className='krankenInputStyle form-select krankenInputStepStyle p-3'>
                                <option value="" defaultValue=''>Modell</option>
                                {actualmodels.map(element => {
                                    return (
                                        <option key={element.id} data-tariftyp={element.Tariftyp} value={element.Tarifbezeichnung} >{element.Tarifbezeichnung}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div>
                            <div className='text-start pb-4'>
                                <span className='fw-500'>Welche Versicherungsmodelle möchten Sie vergleichen?</span>
                            </div>
                            <div>
                                <div className="row g-4">
                                    <div className="col-12 col-sm-6 col-lg-3">
                                        <label htmlFor="Standard" className='container1 w-100'>
                                            <input type="checkbox" id='Standard' name='modelle' hidden />
                                            <span className='checkmark'>Standard</span>
                                        </label>
                                    </div>
                                    <div className="col-12 col-sm-6 col-lg-3">
                                        <label htmlFor="Hausarzt" className='container1 w-100'>
                                            <input type="checkbox" id='Hausarzt' name='modelle' hidden />
                                            <span className='checkmark'>Hausarzt</span>
                                        </label>
                                    </div>
                                    <div className="col-12 col-sm-6 col-lg-3">
                                        <label htmlFor="HMO" className='container1 w-100'>
                                            <input type="checkbox" id='HMO' name='modelle' hidden />
                                            <span className='checkmark'>HMO</span>
                                        </label>
                                    </div>
                                    <div className="col-12 col-sm-6 col-lg-3">
                                        <label htmlFor="Weitere" className='container1 w-100'>
                                            <input type="checkbox" id='Weitere' name='modelle' hidden />
                                            <span className='checkmark'>Weitere Modelle</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='pt-5'>
                            <button className='nextBtnKranken' type='button' onClick={(e) => { setThirdStep2(true) }}> ANGEBOTE LADEN </button>
                        </div>
                    </div>

                )}
                {thirdStep2 && (
                    <div className='wrapDiv container-xl px-4 px-xl-5 pt-5'>
                        <div className="row g-3 justify-content-center pt-5">
                            <div className="col-12 col-sm-6 col-lg-4">
                                <div className="krankenOfferStyle p-4">
                                    <div className='pt-4'>
                                        <span className='fw-bold'>EGK</span>
                                    </div>
                                    <hr className='my-5' style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }} />
                                    <div>
                                        <span className='fw-500'>EGK</span>
                                    </div>
                                    <hr className='my-5' style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }} />
                                    <div className='pb-3'>
                                        <span className='fw-500'>CHF <span className='fw-bold'>195.50</span>/ Mt.</span>
                                    </div>
                                    <div>
                                        <span className='fw-500'>sparen Sie CHF<span className='fw-bold' style={{ color: "#208fdf" }}> 937.20</span> / Jahr</span>
                                    </div>
                                    <div className='pt-4 pb-4'>
                                        <button className='nextBtnKranken' type='button' onClick={(e) => { setFourthStep(true) }}> ANGEBOTE ANZEIGEN </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-4">
                                <div className="krankenOfferStyle p-4">
                                    <div className='pt-4'>
                                        <span className='fw-bold'>Atupri</span>
                                    </div>
                                    <hr className='my-5' style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }} />
                                    <div>
                                        <span className='fw-500'>Grundversicherung</span>
                                    </div>
                                    <hr className='my-5' style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }} />
                                    <div className='pb-3'>
                                        <span className='fw-500'>CHF <span className='fw-bold'>195.50</span>/ Mt.</span>
                                    </div>
                                    <div>
                                        <span className='fw-500'>sparen Sie CHF<span className='fw-bold' style={{ color: "#208fdf" }}> 937.20</span> / Jahr</span>
                                    </div>
                                    <div className='pt-4 pb-4'>
                                        <button className='nextBtnKranken' type='button'> ANGEBOTE ANZEIGEN </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-4">
                                <div className="krankenOfferStyle p-4">
                                    <div className='pt-4'>
                                        <span className='fw-bold'>Assura</span>
                                    </div>
                                    <hr className='my-5' style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }} />
                                    <div>
                                        <span className='fw-500'>Basis</span>
                                    </div>
                                    <hr className='my-5' style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }} />
                                    <div className='pb-3'>
                                        <span className='fw-500'>CHF <span className='fw-bold'>195.50</span>/ Mt.</span>
                                    </div>
                                    <div>
                                        <span className='fw-500'>sparen Sie CHF<span className='fw-bold' style={{ color: "#208fdf" }}> 937.20</span> / Jahr</span>
                                    </div>
                                    <div className='pt-4 pb-4'>
                                        <button className='nextBtnKranken' type='button'> ANGEBOTE ANZEIGEN </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='pt-5'>
                            <button className='nextBtnKranken' type='submit' > Mehr laden </button>
                        </div>
                    </div>
                )}
                {fourthStep && (
                    <div>
                        <div className='wrapDiv container-xl px-4 px-xl-5 pt-5'>
                            <div className='krankenSecondStep'>
                                <div className='my-5 krankenStepsCircle mx-auto fs-5'>
                                    <span>4/5</span>
                                </div>
                                <div className='pb-1'>
                                    <span className='fw-bold fs-4'>WELCHE LEISTUNGEN SIND IHNEN WICHTIG?</span>
                                </div>
                                <div className='pb-5'>
                                    <span className='fw-500'>Passen Sie das kostenlose Angebot Ihren Bedürfnissen an</span>
                                </div>
                                <div className='px-0 px-lg-5 mx-0 mx-lg-5'>
                                    <div className="row g-4 justify-content-center">
                                        <div className="col-12 col-sm-6 col-md-4">
                                            <label htmlFor="spitalCheckbox" className='container1 w-100'>
                                                <input type="checkbox" id='spitalCheckbox' name='step4Checkbox' hidden />
                                                <div className='checkmark py-5 checkmarkWidth'>
                                                    <div className='pb-3'>
                                                        <span className='fw-500'>Spital</span>
                                                    </div>
                                                    <div>
                                                        <img src={Tooth} alt="" />
                                                    </div>
                                                </div>
                                            </label>
                                        </div>
                                        <div className="col-12 col-sm-6 col-md-4">
                                            <label htmlFor="ZähneCheckbox" className='container1 w-100'>
                                                <input type="checkbox" id='ZähneCheckbox' name='step4Checkbox' hidden />
                                                <div className='checkmark py-5 checkmarkWidth'>
                                                    <div className='pb-3'>
                                                        <span className='fw-500'>Zähne</span>
                                                    </div>
                                                    <div>
                                                        <img src={Tooth} alt="" />
                                                    </div>
                                                </div>
                                            </label>
                                        </div>
                                        <div className="col-12 col-sm-6 col-md-4">
                                            <label htmlFor="HeilmethodenCheckbox" className='container1 w-100'>
                                                <input type="checkbox" id='HeilmethodenCheckbox' name='step4Checkbox' hidden />
                                                <div className='checkmark py-5 checkmarkWidth'>
                                                    <div className='pb-3'>
                                                        <span className='fw-500'>Alternative Heilmethoden</span>
                                                    </div>
                                                    <div>
                                                        <img src={Tooth} alt="" />
                                                    </div>
                                                </div>
                                            </label>
                                        </div>
                                        <div className="col-12 col-sm-6 col-md-4">
                                            <label htmlFor="FitnessCheckbox" className='container1 w-100'>
                                                <input type="checkbox" id='FitnessCheckbox' name='step4Checkbox' hidden />
                                                <div className='checkmark py-5 checkmarkWidth'>
                                                    <div className='pb-3'>
                                                        <span className='fw-500'>Fitness</span>
                                                    </div>
                                                    <div>
                                                        <img src={Tooth} alt="" />
                                                    </div>
                                                </div>
                                            </label>
                                        </div>
                                        <div className="col-12 col-sm-6 col-md-4">
                                            <label htmlFor="SehhilfeCheckbox" className='container1 w-100'>
                                                <input type="checkbox" id='SehhilfeCheckbox' name='step4Checkbox' hidden />
                                                <div className='checkmark py-5 checkmarkWidth'>
                                                    <div className='pb-3'>
                                                        <span className='fw-500'>Sehhilfe</span>
                                                    </div>
                                                    <div>
                                                        <img src={Tooth} alt="" />
                                                    </div>
                                                </div>
                                            </label>
                                        </div>
                                        <div className="col-12 col-sm-6 col-md-4">
                                            <label htmlFor="MedikamenteCheckbox" className='container1 w-100'>
                                                <input type="checkbox" id='MedikamenteCheckbox' name='step4Checkbox' hidden />
                                                <div className='checkmark py-5 checkmarkWidth'>
                                                    <div className='pb-3'>
                                                        <span className='fw-500'>Medikamente</span>
                                                    </div>
                                                    <div>
                                                        <img src={Tooth} alt="" />
                                                    </div>
                                                </div>
                                            </label>
                                        </div>
                                        <div className="col-12 col-sm-6 col-md-4">
                                            <label htmlFor="AuslandCheckbox" className='container1 w-100'>
                                                <input type="checkbox" id='AuslandCheckbox' name='step4Checkbox' hidden />
                                                <div className='checkmark py-5 checkmarkWidth'>
                                                    <div className='pb-3'>
                                                        <span className='fw-500'>Ausland & Reisen</span>
                                                    </div>
                                                    <div>
                                                        <img src={Tooth} alt="" />
                                                    </div>
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="py-5">
                                        <button className='nextBtnKranken' type='button' onClick={(e) => { setFourthStep2(true) }}> Weiter</button>
                                    </div>
                                </div>
                            </div>
                            {fourthStep2 && (
                                <div className="">
                                    <div className='pb-3'>
                                        <span className='fw-bold' style={{ color: "#50B8E7" }}>Wie möchten Sie fortfahren?</span>
                                    </div>
                                    <div>
                                        <div className="row g-4">
                                            <div className="col-12 col-md-6">
                                                <label htmlFor="step4Email" className='container1 w-100'>
                                                    <input type="radio" id='step4Email' name='fortfahren' hidden />
                                                    <span className='checkmark'>Unverbindliche Offerte per E-Mail zusenden</span>
                                                </label>
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <label htmlFor="step4Unsure" className='container1 w-100'>
                                                    <input type="radio" id='step4Unsure' name='fortfahren' hidden />
                                                    <span className='checkmark'>Unsicher, bitte eine kostenlose Beratung</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="py-5">
                                            <button className='nextBtnKranken' type='button' onClick={(e) => { setFifthStep(true) }}> Weiter</button>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {fifthStep && (
                                <div className="">
                                    <div className='wrapDiv container-xl px-4 px-xl-5 pt-5'>
                                        <div className='krankenSecondStep'>
                                            <div className='my-5 krankenStepsCircle mx-auto fs-5'>
                                                <span>5/5</span>
                                            </div>
                                            <div className='pb-5'>
                                                <span className='fw-bold fs-4'>WIE KÖNNEN WIR KONTAKT MIT IHNEN AUFNEHMEN?</span>
                                            </div>
                                            <div className="krankenStepsBox">
                                                <div className="row g-4 justify-content-center">
                                                    <div className="col-12 col-sm-6">
                                                        <input type="text" className='krankenInputStyle krankenInputStepStyle p-3' placeholder='Vorname' name="" id="" />
                                                    </div>
                                                    <div className="col-12 col-sm-6">
                                                        <input type="text" className='krankenInputStyle krankenInputStepStyle p-3' placeholder='Nachname' name="" id="" />
                                                    </div>
                                                    <div className="col-12 col-sm-6">
                                                        <select name="" className='krankenInputStyle form-select krankenInputStepStyle p-3' id="">
                                                            <option value="">Nationalitat</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-12 col-sm-6">
                                                        <select name="" className='krankenInputStyle form-select krankenInputStepStyle p-3' id="">
                                                            <option value="">Aufenthaltsbewilligung</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-12 col-sm-6">
                                                        <input type="text" className='krankenInputStyle krankenInputStepStyle p-3' placeholder='Adresse' name="" id="" />
                                                    </div>
                                                    <div className="col-12 col-sm-6">
                                                        <input type="email" className='krankenInputStyle krankenInputStepStyle p-3' placeholder='E-Mail-Addresse' name="" id="" />
                                                    </div>
                                                    <div className="col-12 col-sm-6">
                                                        <div className="pb-5">
                                                            <input type="number" className='krankenInputStyle krankenInputStepStyle p-3' placeholder='Telefonnummer' name="" id="" />
                                                        </div>
                                                        <div className="pb-3 text-start">
                                                            <label htmlFor="step5Checkbox">
                                                                <input type="checkbox" name='step5Checkbox' id='step5Checkbox' />
                                                                <span className='ps-2 fw-500'>Ich habe die Datenschutzerklärung gelesen und bin damit einverstanden.</span>
                                                            </label>
                                                        </div>
                                                        <div className="pb-5 text-start">
                                                            <label htmlFor="step5Checkbox1">
                                                                <input type="checkbox" name='step5Checkbox' id='step5Checkbox1' />
                                                                <span className='ps-2 fw-500'>Ja, ich möchte mich für den Newsletter anmelden</span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <button className='nextBtnKranken' type='submit'>Anfrage absenden</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>
                )}
            </form>
        </>
    )
}

export default KrankenkasseSteps