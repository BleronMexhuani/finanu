import React from 'react'
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import NewPerson from './NewPerson';
import Tooth from "../../assets/images/tooth.svg"
import { v4 as uuidv4 } from 'uuid'
import XBtn from "../../assets/images/xButton.svg"
import Stars from '../../assets/images/krankenkasseStars.svg'
function KrankenkasseSteps() {

    const [insurances, setInsurances] = useState([]);
    const [ort, setOrt] = useState(null);
    const [plz, setPlz] = useState(null);
    const [insuranceNum, setInsuranceNum] = useState(null);
    const [kanton, setKanton] = useState(null);
    const [region, setRegion] = useState(null);
    const [commune, setCommune] = useState(null);
    const [jahrgang, setJahrgang] = useState([]);
    const [actualmodels, setActualModels] = useState([]);
    const [franchise, setFranchise] = useState([]);
    const [model, setModel] = useState([]);
    const [accident, setAccident] = useState([]);
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
                'http://localhost:5000/krankenkasse/regions'
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

    useEffect(() => {
        const searchRegion = (e) => {
            let region;

            if (inputValue.length < 4) {
                if (!isNaN(inputValue)) {
                    region = regions.filter((element) => (element.plz.substr(0, inputValue.length)) === (inputValue))
                }
                else {
                    region = regions.filter((element) => (element.plz + " " + element.ort).includes(inputValue))
                }
            }
            else {
                region = regions.filter((element) => (element.plz + " " + element.ort).includes(inputValue))
            }
            // const region = regions.filter((element) => (element.plz + " " + element.ort).includes(inputValue))
            if (inputValue === '' || inputValue === null) {
                setFilter([]);
                setIsEmpty(true)
            }
            else {
                setFilter(region);
                setIsEmpty(false)
            }
        }
        searchRegion()

    }, [inputValue, regions])

    ///////////////////////////////
    useEffect(() => {
        const getInsurances = async () => {
            if (plz !== null && ort !== null && commune !== null) {
                await axios.get(
                    `http://localhost:5000/krankenkasse/insurances/${plz}/${ort}/${commune}`
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
        const targetModells = [];

        for (let i = 0; i < event.target.length - 1; i++) {
            if (event.target[i].name === 'Jahrgang') {
                targetJahrgang.push(parseInt(event.target[i].value));
            }
            else if (event.target[i].getAttribute('data-accident') === 'asd') {
                if (event.target[i].checked) {
                    targetAccident.push(event.target[i].value);
                }
            }
            else if (event.target[i].name === 'franchise') {
                targetFranchise.push(parseInt(event.target[i].value));
            }
            else if (event.target[i].name === 'modelle') {
                if (event.target[i].checked) {
                    targetModells.push(event.target[i].value);
                }
            }
        }

        setFranchise(targetFranchise);
        setJahrgang(targetJahrgang);
        setAccident(targetAccident);
        setModel(targetModells);

        const result = await axios.get(`http://localhost:5000/krankenkasse/compareInputs/${insuranceNum}/${kanton}/${region}/${targetJahrgang}/${targetAccident}/${targetModells}/${targetFranchise}/${tarifbezeichnung}`);


        setKrankenkasse(result.data);

    }

    const [persons, setPersons] = useState([])
    const [personId, setPersonId] = useState(0)
    useEffect(() => { })

    const addPerson = async (event) => {

        setPersonId(personId + 1)
        setPersons(persons => [...persons, personId])

        var id = 'Person' + personId
        setTimeout(() => {

            var elem = document.getElementById(id)
            window.scrollTo(0, elem.offsetTop - 100);
        }, 100);

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
            const result = await axios.get(`http://localhost:5000/krankenkasse/actualmodel/${insuranceNum}`)
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




    const [endKrankenMap, setEndKrankenMap] = useState(3)
    const [familySituation, setFamilySituation] = useState('')
    const [familySituation2, setFamilySituation2] = useState('')
    const [secondStepFirstRadio, setSecondStepFirstRadio] = useState(false)

    const [secondStep, setSecondStep] = useState(false)
    const [thirdStep, setThirdStep] = useState(false)
    const [thirdStep2, setThirdStep2] = useState(false)
    const [fourthStep, setFourthStep] = useState(false)
    const [fourthStep2, setFourthStep2] = useState(false)
    const [fifthStep, setFifthStep] = useState(false)




    const toSecondStep = () => {

        if (inputValue === '' || inputValue === null || insuranceNum === "" || insuranceNum === null) {
            setSecondStep(false)
        }
        else {
            setSecondStep(true)
        }
    }
    const secondStepKranken = useRef();
    useEffect(() => {
        if (secondStep) {
            var elem = secondStepKranken
            window.scrollTo(0, elem.current.offsetTop);
        }

    }, [secondStep])

    const toThirdStep = () => {
        if (secondStepFirstRadio) {
            if (familySituation === "einzel") {
                setThirdStep(true)
            }
            else if (familySituation === "paar" || familySituation === "familie") {
                if (familySituation2 !== "") {
                    setThirdStep(true)
                }
            }
        }
    }
    const thirdStepKranken = useRef();
    useEffect(() => {
        if (thirdStep) {
            var elem = thirdStepKranken
            window.scrollTo(0, elem.current.offsetTop);
        }

    }, [thirdStep])

    const [gender, setGender] = useState("")
    const [vornameValue, setVornameValue] = useState("")
    const [price, setPrice] = useState()
    const [mitOhn, setMitOhn] = useState(false)
    let i = 0

    const toThirdStep2 = () => {
        if (gender !== "" && vornameValue !== "" && price !== "" && mitOhn !== "false" && jahrgang !== [] && (model !== null && model !== "modell")) {
            setThirdStep2(true)
        }
        else {
            setThirdStep2(false)
        }
    }
    const third2StepKranken = useRef();
    useEffect(() => {
        if (thirdStep2) {
            var elem = third2StepKranken
            window.scrollTo(0, elem.current.offsetTop);
        }

    }, [thirdStep2])
    const [mehrLadenModal, setMehrLadenModal] = useState(false)
    const [modalFormSubmited, setModalFormSubmited] = useState(false)

    const openMehrLadenModal = () => {
        if (modalFormSubmited === false) {
            setMehrLadenModal(true)
        }
        else {
            setEndKrankenMap(endKrankenMap + 3)

        }

    }

    const fourthStepKranken = useRef();
    useEffect(() => {
        if (fourthStep) {
            var elem = fourthStepKranken
            window.scrollTo(0, elem.current.offsetTop);
        }

    }, [fourthStep])


    const fifthStepKranken = useRef();
    useEffect(() => {
        if (fifthStep) {
            var elem = fifthStepKranken
            window.scrollTo(0, elem.current.offsetTop);
        }

    }, [fifthStep])

    const familiePaar = useRef();
    useEffect(() => {
        if (familySituation === 'familie' || familySituation === 'paar') {
            var elem = familiePaar
            window.scrollTo(0, elem.current.offsetTop - 200);
        }

    }, [familySituation])

    const handleModalSubmit = (e) => {
        e.preventDefault()
        setMehrLadenModal(false)
        setModalFormSubmited(true)
        setEndKrankenMap(endKrankenMap + 3)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className='mx-4 mx-xl-0'>
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
                                            <input type="text" id="inputChange" autoComplete='off' onChange={(e) => setInputValue(e.target.value)} onFocus={showSelectDropdown} onBlur={hideSelectDropdown} placeholder='Postleitzahl' className='krankenInputStyle' />
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
                                        {

                                            insurances.map(element => {
                                                i++
                                                return (
                                                    <option key={i} value={element.number} >{element.name}</option>
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
                    <div ref={secondStepKranken} className='krankenSecondStep wrapDiv container-xl px-4 px-xl-0 pt-5'>
                        <div className='my-5 krankenStepsCircle mx-auto fs-5'>
                            <span>2/5</span>
                        </div>
                        <div className='pb-1'>
                            <span className='fw-bold fs-4 normalTextToWhite'>ALLE SCHWEIZER KRANKENKASSEN</span>
                        </div>
                        <div className='pb-5'>
                            <span className='fw-500 normalTextToWhite'>Bei uns finden Sie Ihr passendes Angebot</span>
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
                                                <input type="radio" id='yesFirstRadio' onChange={(e) => { setSecondStepFirstRadio(true) }} name='radio' hidden />
                                                <span className='checkmark'>Ja, ich bin bereits versichert</span>
                                            </label>
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <label htmlFor="noFirstRadio" className='container1 w-100'>
                                                <input type="radio" id='noFirstRadio' onChange={(e) => { setSecondStepFirstRadio(true) }} name='radio' hidden />
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
                                        <div ref={familiePaar}>
                                            <div className='pt-5'>
                                                <div className='pb-3 text-start'>
                                                    <span className='fw-bold'>Gleiches Versicherungsmodell? (Hausarzt, Telmed, etc)</span>
                                                </div>
                                                <div>
                                                    <div className="row gy-4 gx-0 gx-md-4">
                                                        <div className="col-12 col-sm-6">
                                                            <label onChange={(e) => { setFamilySituation2('familie') }} htmlFor="familieModel" className='container1 w-100'>
                                                                <input type="radio" id='familieModel' value="familieModel" name='radio2' hidden />
                                                                <span className='checkmark'>Gesamte Familie gleiches Modell</span>
                                                            </label>
                                                        </div>
                                                        <div className="col-12 col-sm-6">
                                                            <label onChange={(e) => { setFamilySituation2('individual') }} htmlFor="individualModel" className='container1 w-100'>
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
                                <button className='nextBtnKranken' type='button' onClick={toThirdStep}>Weiter</button>
                            </div>
                        </div>

                    </div>
                )}
                {thirdStep && (
                    <div ref={thirdStepKranken} className='wrapDiv container-xl px-4 px-xl-0 pt-5'>
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
                                        <label onChange={() => { setGender('male') }} htmlFor="maleRadio" className='container1 w-100'>
                                            <input type="radio" id='maleRadio' name='gender' hidden />
                                            <span className='checkmark'>Herr</span>
                                        </label>
                                    </div>
                                    <div className="col-6 col-md-3">
                                        <label onChange={() => { setGender('female') }} htmlFor="femaleRadio" className='container1 w-100'>
                                            <input type="radio" id='femaleRadio' name='gender' hidden />
                                            <span className='checkmark'>Frau</span>
                                        </label>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <input type="text" name="" id="" onChange={(e) => setVornameValue(e.target.value)} placeholder='Vorname & Nachname' className='krankenInputStyle krankenInputStepStyle p-3' />
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <input type="number" name='Jahrgang'
                                            step={1}
                                            defaultValue={''}
                                            min={1900}
                                            onChange={validateJahrgang}
                                            placeholder='Jahrgang'
                                            className='krankenInputStyle krankenInputStepStyle p-3' />
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <select onChange={(e) => { setPrice(e.target.value) }} disabled={checkJahr ? false : "disabled"} name="franchise" id="" className='krankenInputStyle form-select krankenInputStepStyle p-3'>
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
                                            <input onChange={() => { setMitOhn(true) }} type="radio" id='mit' value={"MIT-UNF"} data-accident='asd' name='accident' hidden />
                                            <span className='checkmark'>mit Unfall</span>
                                        </label>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <label htmlFor="ohne" className='container1 w-100'>
                                            <input onChange={() => { setMitOhn(true) }} type="radio" value={"OHN-UNF"} data-accident='asd' id='ohne' name='accident' hidden />
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
                                            <input type="checkbox" value={'TAR-BASE'} id='Standard' name='modelle' hidden />
                                            <span className='checkmark'>Standard</span>
                                        </label>
                                    </div>
                                    <div className="col-12 col-sm-6 col-lg-3">
                                        <label htmlFor="Hausarzt" className='container1 w-100'>
                                            <input type="checkbox" value={'TAR-HAM'} id='Hausarzt' name='modelle' hidden />
                                            <span className='checkmark'>Hausarzt</span>
                                        </label>
                                    </div>
                                    <div className="col-12 col-sm-6 col-lg-3">
                                        <label htmlFor="HMO" className='container1 w-100'>
                                            <input type="checkbox" value={'TAR-HMO'} id='HMO' name='modelle' hidden />
                                            <span className='checkmark'>HMO</span>
                                        </label>
                                    </div>
                                    <div className="col-12 col-sm-6 col-lg-3">
                                        <label htmlFor="Weitere" className='container1 w-100'>
                                            <input type="checkbox" value={'TAR-DIV'} id='Weitere' name='modelle' hidden />
                                            <span className='checkmark'>Weitere Modelle</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='pt-5'>
                            <button className='nextBtnKranken' type={`${thirdStep2 ? 'submit' : 'button'}`} onClick={toThirdStep2}> ANGEBOTE LADEN </button>
                        </div>
                    </div>

                )}
                {thirdStep2 && (
                    <div ref={third2StepKranken} className='wrapDiv container-xl px-4 px-xl-5 pt-5'>
                        <div className="row g-4 justify-content-center pt-5">
                            {

                                krankenkasse.slice(0, endKrankenMap).map((element) => {
                                    i++;
                                    return (

                                        <div key={i} className="col-12 col-sm-6 col-lg-auto">
                                            <div className="krankenOfferStyle p-4 position-relative mx-auto">
                                                <div className="cornerOffer">
                                                    <svg width="122" height="109" viewBox="0 0 122 109" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M0 0H43.9595L83.8143 35.6718L122 68V109L60.2591 55.5L0 0Z" fill="#50B8E7" />
                                                        <path d="M45.059 27.6713L44.108 28.7685L39.6377 24.8935L45.2184 18.4556L49.6071 22.2599L48.656 23.3571L45.5187 20.6374L44.1746 22.188L46.8857 24.5382L46.0054 25.5537L43.2942 23.2035L41.8401 24.881L45.059 27.6713ZM50.3335 34.1652L53.9964 29.9398L49.6186 31.6556L48.9204 31.0504L49.9976 26.4734L46.3348 30.6988L45.0835 29.6141L50.6642 23.1763L52.0062 24.3396L50.7348 29.6534L55.8326 27.6566L57.1655 28.812L51.5848 35.2499L50.3335 34.1652ZM52.9289 36.415L58.5096 29.9771L61.2389 32.3431C61.5351 32.5998 61.7548 32.8961 61.8978 33.2318C62.0408 33.5676 62.1139 33.9168 62.1171 34.2795C62.1264 34.6475 62.0723 35.003 61.955 35.3459C61.8377 35.6889 61.6637 35.9934 61.4332 36.2594C61.1188 36.6221 60.7355 36.8933 60.2832 37.073C59.831 37.2527 59.3677 37.3169 58.8933 37.2657C58.419 37.2144 57.9793 37.0133 57.5743 36.6622L56.051 35.3417L54.1802 37.4997L52.9289 36.415ZM57.002 34.2445L58.4528 35.5021C58.6039 35.6331 58.7766 35.7087 58.9709 35.7289C59.1652 35.7491 59.3667 35.712 59.5755 35.6177C59.7895 35.5174 59.9856 35.3645 60.1637 35.1589C60.3576 34.9353 60.4804 34.7082 60.532 34.4776C60.5896 34.2524 60.586 34.0428 60.5212 33.8489C60.4623 33.6603 60.3574 33.5005 60.2062 33.3695L58.8099 32.159L57.002 34.2445ZM58.5784 41.3123L64.1591 34.8744L68.4842 38.6237L67.5331 39.7208L64.4593 37.0562L63.0209 38.7156L65.5779 40.9321L64.6976 41.9477L62.1405 39.7311L59.8297 42.397L58.5784 41.3123ZM66.3958 48.1682C65.9243 47.7595 65.5737 47.2968 65.344 46.7801C65.1204 46.2686 65.0031 45.7382 64.9923 45.1888C64.9928 44.6387 65.0851 44.1047 65.2694 43.5868C65.4589 43.0629 65.7318 42.5954 66.0881 42.1843C66.4601 41.7552 66.8924 41.4152 67.385 41.1646C67.8888 40.9132 68.4107 40.7569 68.9508 40.6956C69.5022 40.6336 70.0442 40.68 70.577 40.8349C71.1211 40.9889 71.6229 41.265 72.0823 41.6633C72.5477 42.0668 72.8897 42.5273 73.108 43.0448C73.3325 43.5675 73.4445 44.104 73.444 44.6541C73.4435 45.2043 73.3512 45.7383 73.1669 46.2562C72.9827 46.774 72.7124 47.2385 72.3561 47.6496C71.9893 48.0727 71.557 48.4126 71.0592 48.6693C70.5667 48.9199 70.0447 49.0763 69.4934 49.1383C68.9533 49.1995 68.4138 49.15 67.875 48.99C67.3422 48.8352 66.8491 48.5612 66.3958 48.1682ZM67.3575 43.2848C67.1165 43.5628 66.9256 43.8685 66.7849 44.2018C66.6442 44.5351 66.5634 44.8726 66.5424 45.2144C66.5327 45.5554 66.5903 45.8859 66.7152 46.2059C66.8514 46.5251 67.0676 46.8131 67.3638 47.0699C67.666 47.3319 67.9874 47.5046 68.328 47.5881C68.6738 47.6655 69.0143 47.6696 69.3497 47.6003C69.6902 47.5249 70.0099 47.3944 70.3085 47.2086C70.6185 47.0221 70.8861 46.7988 71.1114 46.5389C71.3525 46.2608 71.5377 45.9555 71.6671 45.623C71.8078 45.2897 71.883 44.9526 71.8927 44.6116C71.9137 44.2699 71.8561 43.9394 71.7199 43.6202C71.595 43.3001 71.3875 43.0144 71.0973 42.7628C70.789 42.4956 70.462 42.3233 70.1162 42.2458C69.7817 42.1676 69.4468 42.1631 69.1114 42.2324C68.7761 42.3017 68.4561 42.4266 68.1514 42.6072C67.8527 42.7929 67.5881 43.0188 67.3575 43.2848ZM81.5353 49.9371L75.9546 56.3749L74.7123 55.2981L77.094 52.5507L74.1743 50.0197L71.7926 52.7671L70.5413 51.6824L76.122 45.2446L77.3733 46.3293L75.1175 48.9316L78.0372 51.4626L80.293 48.8602L81.5353 49.9371ZM77.2976 57.5392L82.8783 51.1013L84.1296 52.186L79.5 57.5267L82.7824 60.3721L81.8313 61.4692L77.2976 57.5392ZM88.0142 64.9073L87.0631 66.0044L82.5928 62.1294L88.1736 55.6915L92.5622 59.4958L91.6111 60.593L88.4738 57.8734L87.1297 59.4239L89.8408 61.7741L88.9605 62.7896L86.2494 60.4394L84.7952 62.1169L88.0142 64.9073ZM92.8741 63.8L89.2899 67.9348L88.0386 66.8501L93.6193 60.4122L94.6167 61.2768L94.2659 68.405L97.9366 64.1706L99.1879 65.2553L93.6151 71.6841L92.5723 70.7801L92.8741 63.8Z" fill="white" />
                                                    </svg>

                                                </div>
                                                <div className='pb-3 text-start'>
                                                    <span className='finanuSubTitle fw-bold'>{element.name}</span>
                                                </div>
                                                <div className="text-start pb-5">
                                                    <div className="row gx-3">
                                                        <div className="col-auto">
                                                            <img className='starsImg' src={Stars} alt="" />
                                                        </div>
                                                        <div className="col-auto">
                                                            <div>
                                                                <span className='fw-600'>5.3 / 6</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='pb-3 text-start'>
                                                    <div className="row gx-3">
                                                        <div className="col-auto my-auto">
                                                            <svg width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M26.6047 21.1459L15.1458 1.02184C14.7822 0.383237 14.1679 0 13.5026 0C12.8373 0 12.2229 0.381331 11.8594 1.01994L0.400407 21.1422C0.0393134 21.7764 0.0225247 22.5046 0.355668 23.0775C0.68872 23.6504 1.32333 24 2.05315 24H24.952C25.6818 24 26.3164 23.6504 26.6495 23.0775C26.9826 22.5046 26.9659 21.7802 26.6047 21.1459ZM13.427 6.43989C14.3041 6.43989 15.0151 7.15091 15.0151 8.02801V13.7453C15.0151 14.6224 14.3041 15.3334 13.427 15.3334C12.5499 15.3334 11.8389 14.6224 11.8389 13.7453V8.02801C11.8389 7.15091 12.5499 6.43989 13.427 6.43989ZM13.5026 17.128C14.3797 17.128 15.0907 17.8391 15.0907 18.7162C15.0907 19.5933 14.3797 20.3043 13.5026 20.3043C12.6255 20.3043 11.9145 19.5933 11.9145 18.7162C11.9145 17.8391 12.6255 17.128 13.5026 17.128Z" fill="black" />
                                                            </svg>

                                                        </div>
                                                        <div className="col mt-auto lh-1">
                                                            <span className='fw-600 lh-1'>Hohe Prämien</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="pb-5 mb-5 text-start">
                                                    <div className="row gx-3">
                                                        <div className="col-auto my-auto">
                                                            <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M13.4998 0C6.05684 0 0 6.05566 0 13.4995C0 20.9433 6.05645 27 13.4998 27C20.9443 27 26.9995 20.9438 26.9995 13.4995C26.9995 6.05566 20.9447 0 13.4998 0ZM19.3424 10.7336L12.2721 17.8039C12.0598 18.016 11.7801 18.123 11.5029 18.123C11.2236 18.123 10.9465 18.016 10.7335 17.8039L7.65852 14.729C7.23339 14.3034 7.23339 13.6152 7.65852 13.1901C8.08357 12.7651 8.77184 12.7651 9.19697 13.1901L11.5029 15.4969L17.8049 9.19453C18.2291 8.76995 18.9173 8.76995 19.3424 9.19453C19.7676 9.62029 19.7676 10.3086 19.3424 10.7336Z" fill="#50B8E7" />
                                                            </svg>

                                                        </div>
                                                        <div className="col my-auto">
                                                            <div>
                                                                <span className='fw-600' style={{ color: "#50B8E7" }}>Sehr gute Leistungen</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='pb-3'>
                                                    <span className='fw-600'>{element.tarif}</span>
                                                </div>

                                                <div className='pb-3'>
                                                    <span className='fw-600 fs-5'>CHF <span className='fw-bold fs-3'>{element.price}</span>/ Mt.</span>
                                                </div>
                                                <div>
                                                    <span className='fw-600'>sparen Sie CHF<span className='finanuSubTitle fw-bold' style={{ color: "#208fdf" }}>{((element.price) * 12).toFixed(2)}</span> / Jahr</span>
                                                </div>
                                                <div className='pt-4'>
                                                    <button className='nextBtnKranken nextBtnKranken2' type='button' onClick={() => { setFourthStep(true); setEndKrankenMap(3) }}> ANGEBOTE ANZEIGEN </button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                                )
                            }

                        </div>
                        <div className='pt-5'>
                            <button className='nextBtnKranken' type='button' onClick={openMehrLadenModal} > Mehr laden </button>
                        </div>

                    </div>
                )}
                {fourthStep && (
                    <div ref={fourthStepKranken}>
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
                                <div ref={fifthStepKranken} className="">
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
            {mehrLadenModal && (
                <div className="mehrLadenModal">
                    <div className="mehrLadenModalContent p-4">
                        <div className='text-end'>
                            <span style={{ cursor: "pointer" }} onClick={() => { setMehrLadenModal(false) }}>
                                <img src={XBtn} alt="" />
                            </span>

                        </div>
                        <div className='text-start'>
                            <div className='py-3'>
                                <span className='fw-600'>WIE KÖNNEN WIR KONTAKT MIT IHNEN AUFNEHMEN?</span>
                            </div>
                            <form id='modalForm' onSubmit={handleModalSubmit} className='m-0'>
                                <div className="row g-4">
                                    <div className="col-12 col-sm-6">
                                        <div className='pb-2'>
                                            <span style={{ color: "#464646" }} className='fw-500'>Vorname</span>
                                        </div>
                                        <div>
                                            <input required type="text" className="krankenInputStyle krankenInputStepStyle p-2" />
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <div className='pb-2'>
                                            <span style={{ color: "#464646" }} className='fw-500'>Nachname</span>
                                        </div>
                                        <div>
                                            <input required type="text" className="krankenInputStyle krankenInputStepStyle p-2" />
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <div className='pb-2'>
                                            <span style={{ color: "#464646" }} className='fw-500'>Nationalität</span>
                                        </div>
                                        <div>
                                            <select required name="" id="" className='krankenInputStyle form-select krankenInputStepStyle p-2'>
                                                <option value="1">1</option>
                                                <option value="2">2</option>

                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <div className='pb-2'>
                                            <span style={{ color: "#464646" }} className='fw-500'>Aufenthaltsbewilligung</span>
                                        </div>
                                        <div>
                                            <select required name="" id="" className='krankenInputStyle form-select krankenInputStepStyle p-2'>
                                                <option value="1">1</option>
                                                <option value="2">2</option>

                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <div className='pb-2'>
                                            <span style={{ color: "#464646" }} className='fw-500'>Adresse</span>
                                        </div>
                                        <div>
                                            <input required type="text" className="krankenInputStyle krankenInputStepStyle p-2" />
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <div className='pb-2'>
                                            <span style={{ color: "#464646" }} className='fw-500'>E-Mail-Adresse</span>
                                        </div>
                                        <div>
                                            <input required type="email" className="krankenInputStyle krankenInputStepStyle p-2" />
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <div className='pb-2'>
                                            <span style={{ color: "#464646" }} className='fw-500'>Telefonnummer</span>
                                        </div>
                                        <div>
                                            <input required type="number" className="krankenInputStyle krankenInputStepStyle p-2" />
                                        </div>
                                    </div>
                                    <div className='text-center'>
                                        <button form='modalForm' className='nextBtnKranken' type='submit'>Einreichen</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default KrankenkasseSteps