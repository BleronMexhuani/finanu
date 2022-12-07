import React from 'react'
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import NewPerson from './NewPerson';
import { v4 as uuidv4 } from 'uuid'
import { ReactComponent as XBtn } from "../../assets/images/xButton.svg"
import Stars from '../../assets/images/krankenkasseStars.svg'
import LoadingGif from '../../assets/images/Loading_2.gif';
import Medicine2 from '../../assets/images/medicine2.svg'
import Alternative from '../../assets/images/alternativeMedicine.svg'
import Braces from '../../assets/images/braces.svg'
import Fitness from '../../assets/images/fitness.svg'
import Abroad from '../../assets/images/abroad.svg'

import Medicine2Dark from '../../assets/images/HapaDarkmode.svg'
import AlternativeDark from '../../assets/images/plantDarkMode.svg'
import BracesDark from '../../assets/images/toothDarkmode.svg'
import FitnessDark from '../../assets/images/gymDarkmode.svg'
import AbroadDark from '../../assets/images/globDarkmode.svg'


function KrankenkasseSteps(props) {
    //Modal Inputs Form
    const [vorname, setVorname] = useState('');
    const [nachname, setNachname] = useState('');
    const [nationalitat, setNationalitat] = useState('');
    const [aufenthaltsbewilligung, setAufenthaltsbewilligung] = useState('');
    const [adresse, setAdresse] = useState('');
    const [email, setEmail] = useState('');
    const [telefonnummer, setTelefonnummer] = useState('');

    const handleSubmitFormModal = async () => {
        const data = {
            vorname,
            nachname,
            nationalitat,
            aufenthaltsbewilligung,
            adresse,
            email,
            telefonnummer
        }
        const res = await axios.post("http://localhost:5000/krankenkasse/sendMail");
        if (res.length > 2) {
            console.log(res, data)

        }
    }

    //Krankenkasse Calculator
    const [insurances, setInsurances] = useState([]);
    const [ort, setOrt] = useState(null);
    const [plz, setPlz] = useState(null);
    const [insuranceNum, setInsuranceNum] = useState(null);
    const [kanton, setKanton] = useState(null);
    const [region, setRegion] = useState(null);
    const [commune, setCommune] = useState(null);
    const [jahrgang, setJahrgang] = useState([]);
    const [actualmodels, setActualModels] = useState([]);
    // const [franchise, setFranchise] = useState([]);
    const [model, setModel] = useState([]);
    // const [accident, setAccident] = useState([]);
    const [tarifbezeichnung, setTarifbezeichnung] = useState(null);
    const [krankenkasse, setKrankenkasse] = useState([]);
    const [selectedkrankenkasse, setSelectedKrankenkasse] = useState([]);
    const [regions, setRegions] = useState([]);
    const [isFocused, setIsFocused] = useState(false)
    const [inputValue, setInputValue] = useState("")
    const [filter, setFilter] = useState([]);
    const [isEmpty, setIsEmpty] = useState(false)
    const [isLoadActive, setIsLoadActive] = useState('none');

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
        setKrankenkasse([]);
        setSelectedKrankenkasse([]);
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


        // setFranchise(targetFranchise);
        setJahrgang(targetJahrgang);
        // setAccident(targetAccident);
        setModel(targetModells);
        setIsLoadActive('flex');
        const result = await axios.get(`http://localhost:5000/krankenkasse/compareInputs/${insuranceNum}/${kanton}/${region}/${targetJahrgang}/${targetAccident}/${targetModells}/${targetFranchise}/${tarifbezeichnung}`);
        const response = result.data;
        const responseCompared = response.final_data;
        const responseSelectedKranken = response.final_data_selected_krankenkasse;


        var searchField = "name";
        var searchVal = ["SWICA", "Vivao Sympany", "Mutuel Assurance (Groupe Mutuel)"];

        for (var i = 0; i < responseCompared.length; i++) {

            for (let j = 0; j < searchVal.length; j++) {
                if (responseCompared[i][searchField] === searchVal[j]) {

                    let res = responseCompared[i];
                    responseCompared.splice(responseCompared.indexOf(responseCompared[i]), 1)
                    responseCompared.unshift(res);
                    searchVal.splice(searchField.indexOf(searchField[j]), 1);

                }
            }
        }



        setKrankenkasse(responseCompared);
        setSelectedKrankenkasse(responseSelectedKranken);
        setIsLoadActive('none');

    }

    const [persons, setPersons] = useState([])
    const [personId, setPersonId] = useState(0)

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
            const result = await axios.get(`http://localhost:5000/krankenkasse/actualmodel/${insuranceNum}/${kanton}/${region}`)
            setActualModels(result.data);
        }
        if (insuranceNum != null) {
            getActualModels();
        }
        else {
            setActualModels([]);
        }
    }, [insuranceNum, kanton, region])

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



    const [error, seterror] = useState(false)

    const toSecondStep = () => {

        if (inputValue === '' || inputValue === null || insuranceNum === "" || insuranceNum === null) {
            setSecondStep(false)
            seterror(true)
        }
        else {
            setSecondStep(true)
            seterror(false)
        }
    }

    const secondStepKranken = useRef();
    useEffect(() => {
        if (secondStep) {
            var elem = secondStepKranken
            window.scrollTo(0, elem.current.offsetTop);
        }

    }, [secondStep])

    const [error1, seterror1] = useState(false)
    const [error2, seterror2] = useState(false)
    const [error3, seterror3] = useState(false)

    const toThirdStep = () => {
        if (secondStepFirstRadio) {
            seterror1(false)

            if (familySituation === "einzel") {
                setThirdStep(true)
                seterror2(false)
            }
            else if (familySituation === "paar" || familySituation === "familie") {
                seterror2(false)
                if (familySituation2 !== "") {
                    setThirdStep(true)
                    seterror3(false)
                }
                else {
                    seterror3(true)
                }
            }
            else {
                seterror2(true)
            }
        }
        else {
            seterror1(true)
            seterror2(true)
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
    const [price, setPrice] = useState('')
    const [mitOhn, setMitOhn] = useState(false)
    let i = 0
    let j = 0
    const [error4, seterror4] = useState(false)

    const [modellChecked, setmodellChecked] = useState(false)

    const validateModelle = () => {
        var a = document.getElementsByName("modelle");
        for (var i = 0; i < a.length; i++) {
            if (a[i].checked) {
                return setmodellChecked(true);

            }
        }
        return setmodellChecked(false);

    }
    const toThirdStep2 = () => {
        if (gender !== "" && vornameValue !== "" && price !== "" && mitOhn !== "false" && jahrgang !== [] && model.length && model !== null && modellChecked) {
            setThirdStep2(true)
            seterror4(false)
        }
        else {
            setThirdStep2(false)
            seterror4(true)
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

    const fourthStep2Div = useRef()
    useEffect(() => {
        if (fourthStep2) {
            var elem = fourthStep2Div
            window.scrollTo(0, elem.current.offsetTop - 100);
        }

    }, [fourthStep2])

    const familiePaar = useRef();
    useEffect(() => {
        if (familySituation === 'familie' || familySituation === 'paar') {
            var elem = familiePaar
            window.scrollTo(0, elem.current.offsetTop - 200);
        }

    }, [familySituation])

    const [emailUnsure, setEmailUnsure] = useState('email')

    const handleModalSubmit = (e) => {
        e.preventDefault()
        setMehrLadenModal(false)
        setModalFormSubmited(true)
        setEndKrankenMap(endKrankenMap + 3)
        handleSubmitFormModal();
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className=''>
                    <div className='krankenFirstStep wrapDiv px-4 mx-auto py-5'>
                        <div>
                            <span className='krankenTitle fs-2'>KRANKENKASSEN VERGLEICHEN 2023</span>
                        </div>
                        <div>
                            <span className='krankenSubtitle'>Vergleichen Sie die Leistungen und Prämien der zugelassenen Krankenkassen in der Schweiz.</span>
                        </div>
                        <div className='pt-5 px-0 px-sm-5 px-md-0 px-lg-5'>
                            <div className="row g-4 justify-content-center">
                                <div className="col-12 col-md-6 col-xxl-4">
                                    <div style={{ position: 'relative' }}>
                                        <div>
                                            <input type="text" id="inputChange" autoComplete='off' onChange={(e) => setInputValue(e.target.value)} onFocus={showSelectDropdown} onBlur={hideSelectDropdown} placeholder='Postleitzahl' className={`krankenInputStyle ${(isEmpty) ? 'emptyOption' : ''}`} />
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
                                <div className="col-12 col-md-6 col-xxl-4">

                                    <select className={`krankenSelectStyle form-select ${(isEmpty) ? 'emptyOption' : ''}`} onChange={(e) => setInsuranceNum(e.target.value)} name="" id="insurances">
                                        {(isEmpty) && (

                                            <option value="-1" >Sie müssen zuerst die Postleitzahl einfügen.</option>

                                        )}

                                        {(!isEmpty) && (
                                            <>
                                                <option value="-1" ></option>
                                                {
                                                    insurances.map(element => {
                                                        i++
                                                        return (
                                                            <option key={i} value={element.number} >{element.name}</option>
                                                        )
                                                    })
                                                }
                                            </>
                                        )}


                                    </select>
                                </div>
                                <div className="col-12 col-md-6 col-xxl-4">
                                    <button type='button' className='krankenBtnStyle' onClick={toSecondStep}>Jetzt Vergleichen</button>
                                </div>
                                {error && (
                                    <div className='fw-600 text-start' style={{ color: '#F6490E' }}>
                                        Bitte geben Sie eine gültige Schweizer PLZ an und wählen Sie eine Krankenkasse aus.
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                {secondStep && (
                    <div ref={secondStepKranken} className='krankenSecondStep wrapDiv container-xl px-0 px-sm-4 px-xl-0 pt-5'>
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
                                                <input type="radio" id='yesFirstRadio' onChange={(e) => { setSecondStepFirstRadio(true); }} name='radio' hidden />
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
                                    {error1 && (
                                        <div className='pt-3 fw-600 text-start' style={{ color: '#F6490E' }}>
                                            Felder erforderlich
                                        </div>
                                    )}
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
                                    {error2 && (
                                        <div className='pt-3 fw-600 text-start' style={{ color: '#F6490E' }}>
                                            Felder erforderlich
                                        </div>
                                    )}
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
                                                    {error3 && (
                                                        <div className='pt-3 fw-600 text-start' style={{ color: '#F6490E' }}>
                                                            Felder erforderlich
                                                        </div>
                                                    )}
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
                    <div ref={thirdStepKranken} className='wrapDiv container-xl px-0 px-sm-4 px-xl-0 pt-5'>
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
                                        <input type="text" name="" id="" onChange={(e) => setVornameValue(e.target.value)} placeholder='Vorname & Nachname' className='krankenInputStyle krankenInputStepStyle p-2 p-3' />
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <input type="number" name='Jahrgang'
                                            step={1}
                                            defaultValue={''}
                                            min={1900}
                                            onChange={validateJahrgang}
                                            placeholder='Jahrgang'
                                            className='krankenInputStyle krankenInputStepStyle p-2 p-3' />
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
                            <select name="" id="" required onChange={(e) => setmodels(e)} className='krankenInputStyle form-select krankenInputStepStyle p-3'>
                                <option value="">Modell</option>
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
                                            <input type="checkbox" value={'TAR-BASE'} id='Standard' name='modelle' onChange={validateModelle} hidden />
                                            <span className='checkmark'>Standard</span>
                                        </label>
                                    </div>
                                    <div className="col-12 col-sm-6 col-lg-3">
                                        <label htmlFor="Hausarzt" className='container1 w-100'>
                                            <input type="checkbox" value={'TAR-HAM'} id='Hausarzt' name='modelle' onChange={validateModelle} hidden />
                                            <span className='checkmark'>Hausarzt</span>
                                        </label>
                                    </div>
                                    <div className="col-12 col-sm-6 col-lg-3">
                                        <label htmlFor="HMO" className='container1 w-100'>
                                            <input type="checkbox" value={'TAR-HMO'} id='HMO' name='modelle' onChange={validateModelle} hidden />
                                            <span className='checkmark'>HMO</span>
                                        </label>
                                    </div>
                                    <div className="col-12 col-sm-6 col-lg-3">
                                        <label htmlFor="Weitere" className='container1 w-100'>
                                            <input type="checkbox" value={'TAR-DIV'} id='Weitere' name='modelle' onChange={validateModelle} hidden />
                                            <span className='checkmark'>Weitere Modelle</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='pt-5'>
                            <button className='nextBtnKranken' type={`${thirdStep2 ? 'submit' : 'button'}`} onClick={toThirdStep2}> ANGEBOTE LADEN </button>
                        </div>
                        {error4 && (
                            <div className='pt-3 fw-600 text-center' style={{ color: '#F6490E' }}>
                                Alle Felder sind erforderlich
                            </div>
                        )}
                    </div>

                )}
                <div className='mt-5 justify-content-center' style={{ display: isLoadActive }}>
                    <img src={LoadingGif} width="50" alt="" />
                </div>
                {thirdStep2 && (
                    <div ref={third2StepKranken} className='wrapDiv container-xl px-0 px-sm-4 px-xl-5 pt-5'>
                        <div className="row g-4 justify-content-center pt-5">
                            {
                                krankenkasse.slice(0, endKrankenMap).map((element) => {
                                    i++;
                                    j++;
                                    return (

                                        <div key={i} className="col-12 col-sm-6 col-lg-auto" id={'Kranken' + i}>
                                            <div className="krankenOfferStyle p-4 position-relative mx-auto h-100 d-flex flex-column justify-content-between">
                                                <div>

                                                    {(j <= 3) && (
                                                        <div className="cornerOffer">
                                                            <svg width="122" height="109" viewBox="0 0 122 109" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M0 0H43.9595L83.8143 35.6718L122 68V109L60.2591 55.5L0 0Z" fill="#50B8E7" />
                                                                <path d="M45.059 27.6713L44.108 28.7685L39.6377 24.8935L45.2184 18.4556L49.6071 22.2599L48.656 23.3571L45.5187 20.6374L44.1746 22.188L46.8857 24.5382L46.0054 25.5537L43.2942 23.2035L41.8401 24.881L45.059 27.6713ZM50.3335 34.1652L53.9964 29.9398L49.6186 31.6556L48.9204 31.0504L49.9976 26.4734L46.3348 30.6988L45.0835 29.6141L50.6642 23.1763L52.0062 24.3396L50.7348 29.6534L55.8326 27.6566L57.1655 28.812L51.5848 35.2499L50.3335 34.1652ZM52.9289 36.415L58.5096 29.9771L61.2389 32.3431C61.5351 32.5998 61.7548 32.8961 61.8978 33.2318C62.0408 33.5676 62.1139 33.9168 62.1171 34.2795C62.1264 34.6475 62.0723 35.003 61.955 35.3459C61.8377 35.6889 61.6637 35.9934 61.4332 36.2594C61.1188 36.6221 60.7355 36.8933 60.2832 37.073C59.831 37.2527 59.3677 37.3169 58.8933 37.2657C58.419 37.2144 57.9793 37.0133 57.5743 36.6622L56.051 35.3417L54.1802 37.4997L52.9289 36.415ZM57.002 34.2445L58.4528 35.5021C58.6039 35.6331 58.7766 35.7087 58.9709 35.7289C59.1652 35.7491 59.3667 35.712 59.5755 35.6177C59.7895 35.5174 59.9856 35.3645 60.1637 35.1589C60.3576 34.9353 60.4804 34.7082 60.532 34.4776C60.5896 34.2524 60.586 34.0428 60.5212 33.8489C60.4623 33.6603 60.3574 33.5005 60.2062 33.3695L58.8099 32.159L57.002 34.2445ZM58.5784 41.3123L64.1591 34.8744L68.4842 38.6237L67.5331 39.7208L64.4593 37.0562L63.0209 38.7156L65.5779 40.9321L64.6976 41.9477L62.1405 39.7311L59.8297 42.397L58.5784 41.3123ZM66.3958 48.1682C65.9243 47.7595 65.5737 47.2968 65.344 46.7801C65.1204 46.2686 65.0031 45.7382 64.9923 45.1888C64.9928 44.6387 65.0851 44.1047 65.2694 43.5868C65.4589 43.0629 65.7318 42.5954 66.0881 42.1843C66.4601 41.7552 66.8924 41.4152 67.385 41.1646C67.8888 40.9132 68.4107 40.7569 68.9508 40.6956C69.5022 40.6336 70.0442 40.68 70.577 40.8349C71.1211 40.9889 71.6229 41.265 72.0823 41.6633C72.5477 42.0668 72.8897 42.5273 73.108 43.0448C73.3325 43.5675 73.4445 44.104 73.444 44.6541C73.4435 45.2043 73.3512 45.7383 73.1669 46.2562C72.9827 46.774 72.7124 47.2385 72.3561 47.6496C71.9893 48.0727 71.557 48.4126 71.0592 48.6693C70.5667 48.9199 70.0447 49.0763 69.4934 49.1383C68.9533 49.1995 68.4138 49.15 67.875 48.99C67.3422 48.8352 66.8491 48.5612 66.3958 48.1682ZM67.3575 43.2848C67.1165 43.5628 66.9256 43.8685 66.7849 44.2018C66.6442 44.5351 66.5634 44.8726 66.5424 45.2144C66.5327 45.5554 66.5903 45.8859 66.7152 46.2059C66.8514 46.5251 67.0676 46.8131 67.3638 47.0699C67.666 47.3319 67.9874 47.5046 68.328 47.5881C68.6738 47.6655 69.0143 47.6696 69.3497 47.6003C69.6902 47.5249 70.0099 47.3944 70.3085 47.2086C70.6185 47.0221 70.8861 46.7988 71.1114 46.5389C71.3525 46.2608 71.5377 45.9555 71.6671 45.623C71.8078 45.2897 71.883 44.9526 71.8927 44.6116C71.9137 44.2699 71.8561 43.9394 71.7199 43.6202C71.595 43.3001 71.3875 43.0144 71.0973 42.7628C70.789 42.4956 70.462 42.3233 70.1162 42.2458C69.7817 42.1676 69.4468 42.1631 69.1114 42.2324C68.7761 42.3017 68.4561 42.4266 68.1514 42.6072C67.8527 42.7929 67.5881 43.0188 67.3575 43.2848ZM81.5353 49.9371L75.9546 56.3749L74.7123 55.2981L77.094 52.5507L74.1743 50.0197L71.7926 52.7671L70.5413 51.6824L76.122 45.2446L77.3733 46.3293L75.1175 48.9316L78.0372 51.4626L80.293 48.8602L81.5353 49.9371ZM77.2976 57.5392L82.8783 51.1013L84.1296 52.186L79.5 57.5267L82.7824 60.3721L81.8313 61.4692L77.2976 57.5392ZM88.0142 64.9073L87.0631 66.0044L82.5928 62.1294L88.1736 55.6915L92.5622 59.4958L91.6111 60.593L88.4738 57.8734L87.1297 59.4239L89.8408 61.7741L88.9605 62.7896L86.2494 60.4394L84.7952 62.1169L88.0142 64.9073ZM92.8741 63.8L89.2899 67.9348L88.0386 66.8501L93.6193 60.4122L94.6167 61.2768L94.2659 68.405L97.9366 64.1706L99.1879 65.2553L93.6151 71.6841L92.5723 70.7801L92.8741 63.8Z" fill="white" />
                                                            </svg>
                                                        </div>
                                                    )}

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
                                                    {(j <= 3) && (
                                                        <>
                                                            <div className='pb-3 text-start'>
                                                                <div className="row gx-3">
                                                                    <div className="col-auto my-auto">
                                                                        <svg className='krankenGiftSvg' xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
                                                                            <path d="M23.4208 14.9431C23.2769 14.7993 23.1045 14.7295 22.901 14.7295H14.7266V27H22.1319C22.9789 27 23.6227 26.2732 23.6227 25.4261V15.4744C23.6227 15.271 23.5646 15.087 23.4208 14.9431Z" fill="black" />
                                                                            <path d="M12.2711 14.7295H4.16481C3.74117 14.7295 3.375 15.051 3.375 15.4745V25.4261C3.375 26.2731 4.0869 27 4.93387 27H12.2711V14.7295Z" fill="black" />
                                                                            <path d="M12.271 6.75391H4.94522C4.09681 6.75391 3.375 7.44167 3.375 8.28987V11.8644C3.375 12.7127 4.09692 13.4005 4.94522 13.4005H12.2711V6.75391H12.271Z" fill="black" />
                                                                            <path d="M22.1206 6.75391H14.7266V13.4005H22.1206C22.969 13.4005 23.6227 12.7127 23.6227 11.8644V8.28987C23.6227 7.44157 22.969 6.75391 22.1206 6.75391Z" fill="black" />
                                                                            <path d="M17.6153 0.634387C17.0715 0.213507 16.5286 0 16.0017 0C14.9484 0 14.1214 0.781531 13.5369 2.32425C12.9524 0.781531 12.1256 0 11.0723 0C10.5454 0 10.0024 0.213507 9.45872 0.634387C8.4239 1.43545 8.31398 2.26944 8.40386 2.82805C8.74079 4.9212 12.526 6.35849 13.2814 6.62548C13.3646 6.65493 13.451 6.66935 13.5368 6.66935H13.5369H13.537C13.6228 6.66935 13.7092 6.65493 13.7925 6.62548C14.5478 6.3586 18.3331 4.9211 18.67 2.82805C18.7599 2.26944 18.65 1.43555 17.6153 0.634387ZM11.8069 4.27894C10.1614 3.37358 9.94515 2.75279 9.91805 2.58418C9.88349 2.36842 10.0447 2.12045 10.3975 1.84733C10.6625 1.64221 10.8957 1.53382 11.0723 1.53382C11.4004 1.53382 11.9003 2.05716 12.3191 3.52604C12.4315 3.91993 12.5188 4.31708 12.5855 4.67354C12.3391 4.5581 12.0735 4.42558 11.8069 4.27894ZM17.1557 2.58407C17.0492 3.24842 15.7496 4.08405 14.4828 4.6808C14.7833 3.10864 15.3647 1.53382 16.0017 1.53382C16.1783 1.53382 16.4115 1.64221 16.6764 1.84733C17.029 2.12035 17.1904 2.36821 17.1557 2.58407Z" fill="black" />
                                                                        </svg>
                                                                    </div>
                                                                    <div className="col mt-auto lh-1">
                                                                        <span className='fw-600 lh-1'>Hohe Leistungen</span>
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
                                                        </>
                                                    )}
                                                </div>

                                                <div>
                                                    <div className='pb-3'>
                                                        <span className='fw-600'>{element.tarif}</span>
                                                    </div>

                                                    <div className='pb-3'>
                                                        <span className='fw-600 fs-5'>CHF <span className='fw-bold fs-3'>{element.price}</span>/ Mt.</span>
                                                    </div>
                                                    <div>
                                                        <span className='fw-600'>{(element.price - selectedkrankenkasse[0].price) < 0 ? 'sparen' : "mehrkosten"} Sie CHF<span className='finanuSubTitleW fw-bold' style={{ color: (element.price - selectedkrankenkasse[0].price) > 0 ? "#d3252a" : "#21be5c" }}>{(((element.price - selectedkrankenkasse[0].price) < 0 ? (element.price - selectedkrankenkasse[0].price) * (-1) : (element.price - selectedkrankenkasse[0].price)) * 12).toFixed(2)}</span> / Jahr</span>
                                                    </div>
                                                    <div className='pt-4'>
                                                        <button className='nextBtnKranken nextBtnKranken2' type='button' onClick={() => { setFourthStep(true); setEndKrankenMap(3) }}> ANGEBOTE ANZEIGEN </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                                )
                            }

                        </div>
                        {
                            (krankenkasse.length >= endKrankenMap) && (
                                <div className='pt-5' style={{ display: krankenkasse.length ? 'block' : 'none' }}>
                                    <button className='nextBtnKranken' type='button' onClick={openMehrLadenModal} > Mehr laden </button>
                                </div>
                            )
                        }
                    </div>
                )}
                {fourthStep && (
                    <div ref={fourthStepKranken}>
                        <div className='wrapDiv container-xl px-0 px-sm-4 px-xl-5 pt-5'>
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
                                                        {!props.darkMode
                                                            ? <svg xmlns="http://www.w3.org/2000/svg" height="90" viewBox="0 0 20 43" fill="none">
                                                                <path d="M0 34V34C3.14757 35.5738 5.37049 38.5377 6 42V42H0V34Z" fill="#BEE8FF" />
                                                                <path d="M19.5 42.34H0.18C0.13 42.34 0.0899992 42.32 0.0499992 42.29C0.0199992 42.26 0 42.21 0 42.16L0.289999 5.44001C0.289999 5.34001 0.369999 5.26001 0.469999 5.26001L19.73 5.35001C19.78 5.35001 19.82 5.37001 19.86 5.40001C19.89 5.43001 19.91 5.48001 19.91 5.53001L19.68 42.16C19.68 42.26 19.6 42.34 19.5 42.34ZM0.360001 41.98H19.32L19.55 5.71001L0.66 5.63001L0.360001 41.98Z" fill="black" />
                                                                <path d="M7.85883 17.2C6.64883 17.19 5.25883 17.14 4.04883 17.13C4.04883 15.9 4.04883 14.58 4.06883 13.3C5.31883 13.23 6.57883 13.24 7.89883 13.3C7.92883 14.57 7.90883 15.82 7.85883 17.2Z" fill="#BEE8FF" />
                                                                <path d="M7.85914 17.38C7.25914 17.38 6.58914 17.36 5.94914 17.35C5.30914 17.34 4.64914 17.32 4.04914 17.32C3.94914 17.32 3.86914 17.24 3.86914 17.14V16.81C3.86914 15.66 3.86914 14.48 3.88914 13.32C3.88914 13.22 3.96914 13.15 4.05914 13.14C5.30914 13.07 6.56914 13.08 7.90914 13.14C7.99914 13.14 8.07914 13.22 8.07914 13.32C8.09914 14.54 8.08914 15.78 8.03914 17.22C8.03914 17.3 7.95914 17.38 7.85914 17.38ZM4.22914 16.96C4.78914 16.97 5.37914 16.98 5.95914 16.99C6.53914 17 7.12914 17.02 7.67914 17.02C7.71914 15.73 7.73914 14.6 7.71914 13.49C6.50914 13.43 5.36914 13.43 4.23914 13.48C4.22914 14.59 4.22914 15.71 4.22914 16.8V16.96V16.96Z" fill="black" />
                                                                <path d="M15.8295 17.2C14.6195 17.19 13.2295 17.14 12.0195 17.13C12.0195 15.9 12.0195 14.58 12.0395 13.3C13.2895 13.23 14.5495 13.24 15.8695 13.3C15.8995 14.57 15.8795 15.82 15.8295 17.2Z" fill="#BEE8FF" />
                                                                <path d="M15.8301 17.38C15.2301 17.38 14.5601 17.36 13.9201 17.35C13.2801 17.34 12.6201 17.32 12.0101 17.32C11.9101 17.32 11.8301 17.24 11.8301 17.14V16.81C11.8301 15.66 11.8301 14.48 11.8501 13.32C11.8501 13.22 11.9301 13.15 12.0201 13.14C13.2701 13.07 14.5301 13.08 15.8701 13.14C15.9601 13.14 16.0401 13.22 16.0401 13.32C16.0601 14.54 16.0501 15.78 16.0001 17.22C16.0101 17.3 15.9301 17.38 15.8301 17.38ZM12.2001 16.96C12.7601 16.97 13.3501 16.98 13.9301 16.99C14.5101 17 15.1001 17.02 15.6501 17.02C15.6901 15.73 15.7101 14.6 15.6901 13.49C14.4801 13.43 13.3401 13.43 12.2101 13.48C12.2001 14.59 12.2001 15.71 12.2001 16.8V16.96Z" fill="black" />
                                                                <path d="M7.75922 25.39C6.54922 25.38 5.15922 25.33 3.94922 25.32C3.94922 24.09 3.94922 22.77 3.96922 21.49C5.21922 21.42 6.47922 21.43 7.79922 21.49C7.81922 22.75 7.79922 24 7.75922 25.39Z" fill="#BEE8FF" />
                                                                <path d="M7.75953 25.57C7.74953 25.57 7.74953 25.57 7.75953 25.57C7.14953 25.57 6.48953 25.55 5.84953 25.54C5.20953 25.53 4.54953 25.51 3.94953 25.51C3.84953 25.51 3.76953 25.4299 3.76953 25.3299V25C3.76953 23.85 3.76953 22.67 3.78953 21.51C3.78953 21.41 3.86953 21.3399 3.95953 21.3299C5.20953 21.2599 6.46953 21.2699 7.80953 21.3299C7.90953 21.3299 7.97953 21.41 7.97953 21.51C7.99953 22.73 7.98953 23.97 7.93953 25.41C7.92953 25.49 7.84953 25.57 7.75953 25.57ZM4.12953 25.14C4.67953 25.15 5.27953 25.16 5.85953 25.17C6.43953 25.18 7.02953 25.2 7.58953 25.2C7.62953 23.91 7.64953 22.7799 7.62953 21.6699C6.41953 21.6099 5.27953 21.61 4.14953 21.66C4.13953 22.77 4.13953 23.89 4.13953 24.98V25.14H4.12953Z" fill="black" />
                                                                <path d="M15.7299 25.39C14.5199 25.38 13.1299 25.33 11.9199 25.32C11.9199 24.09 11.9199 22.77 11.9399 21.49C13.1899 21.42 14.4499 21.43 15.7699 21.49C15.7899 22.75 15.7699 24 15.7299 25.39Z" fill="#BEE8FF" />
                                                                <path d="M15.7302 25.57C15.1202 25.57 14.4602 25.55 13.8202 25.54C13.1802 25.53 12.5202 25.51 11.9202 25.51C11.8202 25.51 11.7402 25.4299 11.7402 25.3299V25C11.7402 23.85 11.7402 22.67 11.7602 21.51C11.7602 21.41 11.8402 21.3399 11.9302 21.3299C13.1802 21.2599 14.4402 21.2699 15.7802 21.3299C15.8702 21.3299 15.9502 21.41 15.9502 21.51C15.9702 22.74 15.9602 23.97 15.9102 25.41C15.9002 25.49 15.8202 25.57 15.7302 25.57ZM12.1002 25.14C12.6502 25.15 13.2502 25.16 13.8302 25.17C14.4102 25.18 15.0002 25.2 15.5602 25.2C15.6002 23.91 15.6202 22.7799 15.6002 21.6699C14.4002 21.6099 13.2502 21.61 12.1202 21.66C12.1102 22.77 12.1102 23.89 12.1102 24.98V25.14H12.1002Z" fill="black" />
                                                                <path d="M7.75922 33.57C6.54922 33.56 5.15922 33.51 3.94922 33.5C3.94922 32.27 3.94922 30.95 3.96922 29.67C5.21922 29.6 6.47922 29.61 7.79922 29.67C7.81922 30.94 7.79922 32.19 7.75922 33.57Z" fill="#BEE8FF" />
                                                                <path d="M7.75953 33.75C7.74953 33.75 7.74953 33.75 7.75953 33.75C7.14953 33.75 6.48953 33.73 5.84953 33.72C5.20953 33.71 4.54953 33.69 3.94953 33.69C3.84953 33.69 3.76953 33.61 3.76953 33.51V33.17C3.76953 32.02 3.76953 30.84 3.78953 29.68C3.78953 29.58 3.86953 29.51 3.95953 29.5C5.20953 29.43 6.46953 29.44 7.80953 29.5C7.90953 29.5 7.97953 29.58 7.97953 29.68C7.99953 30.9 7.98953 32.14 7.93953 33.58C7.92953 33.67 7.84953 33.75 7.75953 33.75ZM4.12953 33.33C4.67953 33.34 5.27953 33.35 5.85953 33.36C6.43953 33.37 7.02953 33.39 7.58953 33.39C7.62953 32.1 7.64953 30.97 7.62953 29.86C6.41953 29.8 5.27953 29.8 4.14953 29.85C4.13953 30.96 4.13953 32.08 4.13953 33.17V33.33H4.12953Z" fill="black" />
                                                                <path d="M15.7299 33.57C14.5199 33.56 13.1299 33.51 11.9199 33.5C11.9199 32.27 11.9199 30.95 11.9399 29.67C13.1899 29.6 14.4499 29.61 15.7699 29.67C15.7899 30.94 15.7699 32.19 15.7299 33.57Z" fill="#BEE8FF" />
                                                                <path d="M15.7302 33.75C15.1202 33.75 14.4602 33.73 13.8202 33.72C13.1802 33.71 12.5202 33.69 11.9202 33.69C11.8202 33.69 11.7402 33.61 11.7402 33.51V33.17C11.7402 32.02 11.7402 30.84 11.7602 29.68C11.7602 29.58 11.8402 29.51 11.9302 29.5C13.1802 29.43 14.4402 29.44 15.7802 29.5C15.8702 29.5 15.9502 29.58 15.9502 29.68C15.9702 30.91 15.9602 32.14 15.9102 33.58C15.9002 33.67 15.8202 33.75 15.7302 33.75ZM12.1002 33.33C12.6502 33.34 13.2502 33.35 13.8302 33.36C14.4102 33.37 15.0002 33.39 15.5602 33.39C15.6002 32.1 15.6202 30.97 15.6002 29.86C14.3902 29.8 13.2502 29.8 12.1202 29.85C12.1102 30.96 12.1102 32.08 12.1102 33.17V33.33H12.1002Z" fill="black" />
                                                                <path d="M19.5795 7.72996C13.1395 7.50996 6.70953 7.47996 0.45953 7.61996C0.35953 7.61996 0.279531 7.53996 0.269531 7.43996C0.269531 7.33996 0.34953 7.25996 0.44953 7.24996C6.70953 7.09996 13.1495 7.13996 19.5895 7.35996C19.6895 7.35996 19.7695 7.44996 19.7595 7.54996C19.7595 7.64996 19.6795 7.72996 19.5795 7.72996Z" fill="black" />
                                                                <path d="M7.75008 14.69L4.14008 14.65C4.11008 14.65 4.08008 14.62 4.08008 14.59C4.08008 14.56 4.11008 14.53 4.14008 14.53L7.75008 14.57C7.78008 14.57 7.81008 14.6 7.81008 14.63C7.81008 14.66 7.79008 14.69 7.75008 14.69Z" fill="black" />
                                                                <path d="M15.8392 14.68C14.9692 14.63 13.9292 14.64 12.9192 14.64C12.6092 14.64 12.2992 14.64 12.0092 14.64C11.9792 14.64 11.9492 14.61 11.9492 14.58C11.9492 14.55 11.9792 14.52 12.0092 14.52C12.3092 14.52 12.6092 14.52 12.9192 14.52C13.9292 14.51 14.9692 14.51 15.8392 14.56C15.8692 14.56 15.8992 14.59 15.8992 14.62C15.8992 14.66 15.8792 14.68 15.8392 14.68Z" fill="black" />
                                                                <path d="M7.63953 22.72C7.11953 22.7 6.48953 22.71 5.88953 22.71C5.26953 22.72 4.62953 22.72 4.07953 22.7C4.04953 22.7 4.01953 22.67 4.01953 22.64C4.01953 22.61 4.04953 22.58 4.07953 22.58C4.62953 22.6 5.26953 22.59 5.88953 22.59C6.48953 22.58 7.11953 22.58 7.63953 22.6C7.66953 22.6 7.69953 22.63 7.69953 22.66C7.69953 22.69 7.67953 22.72 7.63953 22.72Z" fill="black" />
                                                                <path d="M15.6892 22.7C14.8292 22.66 13.4892 22.65 12.0092 22.66C11.9792 22.66 11.9492 22.63 11.9492 22.6C11.9492 22.57 11.9792 22.54 12.0092 22.54C13.4892 22.53 14.8292 22.54 15.6892 22.58C15.7192 22.58 15.7492 22.61 15.7492 22.64C15.7492 22.68 15.7292 22.7 15.6892 22.7Z" fill="black" />
                                                                <path d="M5.99015 30.86C5.31015 30.86 4.62016 30.85 3.97016 30.83C3.94016 30.83 3.91016 30.8 3.91016 30.77C3.91016 30.74 3.94016 30.71 3.97016 30.71C4.88016 30.74 5.86016 30.74 6.80016 30.74C7.07016 30.74 7.34016 30.74 7.61016 30.74C7.64016 30.74 7.67015 30.77 7.67015 30.8C7.67015 30.83 7.64016 30.86 7.61016 30.86C7.34016 30.86 7.07016 30.86 6.80016 30.86C6.53016 30.86 6.26015 30.86 5.99015 30.86Z" fill="black" />
                                                                <path d="M11.9995 30.8001C11.9695 30.8001 11.9395 30.7701 11.9395 30.7401C11.9395 30.7101 11.9695 30.6801 11.9995 30.6801C13.2295 30.6501 14.4695 30.6401 15.6995 30.6601C15.7295 30.6601 15.7595 30.6901 15.7595 30.7201C15.7595 30.7501 15.7295 30.7801 15.6995 30.7801C14.4695 30.7601 13.2195 30.7701 11.9995 30.8001Z" fill="black" />
                                                                <path d="M8.65953 3.72005L8.61953 0.180054L11.6195 0.200052L11.6495 3.83005L15.0595 3.96005L15.0895 6.79005L11.6495 6.71005V10.3101L8.82953 10.3401L8.71953 6.78005L5.01953 6.75005V3.76005L8.65953 3.72005Z" fill="#BEE8FF" />
                                                                <path d="M8.82984 10.53C8.72984 10.53 8.64985 10.45 8.64985 10.35L8.54984 6.96L5.01984 6.93C4.91984 6.93 4.83984 6.85 4.83984 6.75V3.76C4.83984 3.66 4.91984 3.58 5.01984 3.58L8.46984 3.54L8.43984 0.18C8.43984 0.13 8.45984 0.0799992 8.48984 0.0499992C8.51984 0.0199992 8.56984 0 8.61984 0L11.6198 0.0200005C11.7198 0.0200005 11.7998 0.0999989 11.7998 0.199999L11.8198 3.65L15.0598 3.78C15.1598 3.78 15.2298 3.86 15.2298 3.96L15.2598 6.79C15.2598 6.84 15.2398 6.89 15.2098 6.92C15.1698 6.95 15.1298 6.97 15.0798 6.97L11.8198 6.89V10.3C11.8198 10.4 11.7398 10.48 11.6398 10.48L8.82984 10.53ZM5.19984 6.57L8.71984 6.6C8.81984 6.6 8.89985 6.68 8.89985 6.78L8.99984 10.16L11.4598 10.13V6.71C11.4598 6.66 11.4798 6.61 11.5098 6.58C11.5398 6.55 11.5898 6.53 11.6398 6.53L14.8998 6.61L14.8698 4.14L11.6298 4.01C11.5298 4.01 11.4598 3.93 11.4598 3.83L11.4398 0.379999L8.79984 0.360001L8.82984 3.72C8.82984 3.82 8.74985 3.9 8.64985 3.9L5.19984 3.94V6.57V6.57Z" fill="black" />
                                                            </svg>

                                                            : <svg xmlns="http://www.w3.org/2000/svg" height="90" viewBox="0 0 20 43" fill="none">
                                                                <path d="M19.5 42.34H0.18C0.13 42.34 0.0899992 42.32 0.0499992 42.29C0.0199992 42.26 0 42.21 0 42.16L0.289999 5.44001C0.289999 5.34001 0.369999 5.26001 0.469999 5.26001L19.73 5.35001C19.78 5.35001 19.82 5.37001 19.86 5.40001C19.89 5.43001 19.91 5.48001 19.91 5.53001L19.68 42.16C19.68 42.26 19.6 42.34 19.5 42.34ZM0.360001 41.98H19.32L19.55 5.71001L0.66 5.63001L0.360001 41.98Z" fill="white" />
                                                                <path d="M7.85883 17.2C6.64883 17.19 5.25883 17.14 4.04883 17.13C4.04883 15.9 4.04883 14.58 4.06883 13.3C5.31883 13.23 6.57883 13.24 7.89883 13.3C7.92883 14.57 7.90883 15.82 7.85883 17.2Z" fill="#BEE8FF" />
                                                                <path d="M7.85914 17.38C7.25914 17.38 6.58914 17.36 5.94914 17.35C5.30914 17.34 4.64914 17.32 4.04914 17.32C3.94914 17.32 3.86914 17.24 3.86914 17.14V16.81C3.86914 15.66 3.86914 14.48 3.88914 13.32C3.88914 13.22 3.96914 13.15 4.05914 13.14C5.30914 13.07 6.56914 13.08 7.90914 13.14C7.99914 13.14 8.07914 13.22 8.07914 13.32C8.09914 14.54 8.08914 15.78 8.03914 17.22C8.03914 17.3 7.95914 17.38 7.85914 17.38ZM4.22914 16.96C4.78914 16.97 5.37914 16.98 5.95914 16.99C6.53914 17 7.12914 17.02 7.67914 17.02C7.71914 15.73 7.73914 14.6 7.71914 13.49C6.50914 13.43 5.36914 13.43 4.23914 13.48C4.22914 14.59 4.22914 15.71 4.22914 16.8V16.96V16.96Z" fill="white" />
                                                                <path d="M15.8295 17.2C14.6195 17.19 13.2295 17.14 12.0195 17.13C12.0195 15.9 12.0195 14.58 12.0395 13.3C13.2895 13.23 14.5495 13.24 15.8695 13.3C15.8995 14.57 15.8795 15.82 15.8295 17.2Z" fill="#BEE8FF" />
                                                                <path d="M15.8301 17.38C15.2301 17.38 14.5601 17.36 13.9201 17.35C13.2801 17.34 12.6201 17.32 12.0101 17.32C11.9101 17.32 11.8301 17.24 11.8301 17.14V16.81C11.8301 15.66 11.8301 14.48 11.8501 13.32C11.8501 13.22 11.9301 13.15 12.0201 13.14C13.2701 13.07 14.5301 13.08 15.8701 13.14C15.9601 13.14 16.0401 13.22 16.0401 13.32C16.0601 14.54 16.0501 15.78 16.0001 17.22C16.0101 17.3 15.9301 17.38 15.8301 17.38ZM12.2001 16.96C12.7601 16.97 13.3501 16.98 13.9301 16.99C14.5101 17 15.1001 17.02 15.6501 17.02C15.6901 15.73 15.7101 14.6 15.6901 13.49C14.4801 13.43 13.3401 13.43 12.2101 13.48C12.2001 14.59 12.2001 15.71 12.2001 16.8V16.96Z" fill="white" />
                                                                <path d="M7.75922 25.39C6.54922 25.38 5.15922 25.33 3.94922 25.32C3.94922 24.09 3.94922 22.77 3.96922 21.49C5.21922 21.42 6.47922 21.43 7.79922 21.49C7.81922 22.75 7.79922 24 7.75922 25.39Z" fill="#BEE8FF" />
                                                                <path d="M7.75953 25.57C7.74953 25.57 7.74953 25.57 7.75953 25.57C7.14953 25.57 6.48953 25.55 5.84953 25.54C5.20953 25.53 4.54953 25.51 3.94953 25.51C3.84953 25.51 3.76953 25.4299 3.76953 25.3299V25C3.76953 23.85 3.76953 22.67 3.78953 21.51C3.78953 21.41 3.86953 21.3399 3.95953 21.3299C5.20953 21.2599 6.46953 21.2699 7.80953 21.3299C7.90953 21.3299 7.97953 21.41 7.97953 21.51C7.99953 22.73 7.98953 23.97 7.93953 25.41C7.92953 25.49 7.84953 25.57 7.75953 25.57ZM4.12953 25.14C4.67953 25.15 5.27953 25.16 5.85953 25.17C6.43953 25.18 7.02953 25.2 7.58953 25.2C7.62953 23.91 7.64953 22.7799 7.62953 21.6699C6.41953 21.6099 5.27953 21.61 4.14953 21.66C4.13953 22.77 4.13953 23.89 4.13953 24.98V25.14H4.12953Z" fill="white" />
                                                                <path d="M15.7299 25.39C14.5199 25.38 13.1299 25.33 11.9199 25.32C11.9199 24.09 11.9199 22.77 11.9399 21.49C13.1899 21.42 14.4499 21.43 15.7699 21.49C15.7899 22.75 15.7699 24 15.7299 25.39Z" fill="#BEE8FF" />
                                                                <path d="M15.7302 25.57C15.1202 25.57 14.4602 25.55 13.8202 25.54C13.1802 25.53 12.5202 25.51 11.9202 25.51C11.8202 25.51 11.7402 25.4299 11.7402 25.3299V25C11.7402 23.85 11.7402 22.67 11.7602 21.51C11.7602 21.41 11.8402 21.3399 11.9302 21.3299C13.1802 21.2599 14.4402 21.2699 15.7802 21.3299C15.8702 21.3299 15.9502 21.41 15.9502 21.51C15.9702 22.74 15.9602 23.97 15.9102 25.41C15.9002 25.49 15.8202 25.57 15.7302 25.57ZM12.1002 25.14C12.6502 25.15 13.2502 25.16 13.8302 25.17C14.4102 25.18 15.0002 25.2 15.5602 25.2C15.6002 23.91 15.6202 22.7799 15.6002 21.6699C14.4002 21.6099 13.2502 21.61 12.1202 21.66C12.1102 22.77 12.1102 23.89 12.1102 24.98V25.14H12.1002Z" fill="white" />
                                                                <path d="M7.75922 33.57C6.54922 33.56 5.15922 33.51 3.94922 33.5C3.94922 32.27 3.94922 30.95 3.96922 29.67C5.21922 29.6 6.47922 29.61 7.79922 29.67C7.81922 30.94 7.79922 32.19 7.75922 33.57Z" fill="#BEE8FF" />
                                                                <path d="M7.75953 33.75C7.74953 33.75 7.74953 33.75 7.75953 33.75C7.14953 33.75 6.48953 33.73 5.84953 33.72C5.20953 33.71 4.54953 33.69 3.94953 33.69C3.84953 33.69 3.76953 33.61 3.76953 33.51V33.17C3.76953 32.02 3.76953 30.84 3.78953 29.68C3.78953 29.58 3.86953 29.51 3.95953 29.5C5.20953 29.43 6.46953 29.44 7.80953 29.5C7.90953 29.5 7.97953 29.58 7.97953 29.68C7.99953 30.9 7.98953 32.14 7.93953 33.58C7.92953 33.67 7.84953 33.75 7.75953 33.75ZM4.12953 33.33C4.67953 33.34 5.27953 33.35 5.85953 33.36C6.43953 33.37 7.02953 33.39 7.58953 33.39C7.62953 32.1 7.64953 30.97 7.62953 29.86C6.41953 29.8 5.27953 29.8 4.14953 29.85C4.13953 30.96 4.13953 32.08 4.13953 33.17V33.33H4.12953Z" fill="white" />
                                                                <path d="M15.7299 33.57C14.5199 33.56 13.1299 33.51 11.9199 33.5C11.9199 32.27 11.9199 30.95 11.9399 29.67C13.1899 29.6 14.4499 29.61 15.7699 29.67C15.7899 30.94 15.7699 32.19 15.7299 33.57Z" fill="#BEE8FF" />
                                                                <path d="M15.7302 33.75C15.1202 33.75 14.4602 33.73 13.8202 33.72C13.1802 33.71 12.5202 33.69 11.9202 33.69C11.8202 33.69 11.7402 33.61 11.7402 33.51V33.17C11.7402 32.02 11.7402 30.84 11.7602 29.68C11.7602 29.58 11.8402 29.51 11.9302 29.5C13.1802 29.43 14.4402 29.44 15.7802 29.5C15.8702 29.5 15.9502 29.58 15.9502 29.68C15.9702 30.91 15.9602 32.14 15.9102 33.58C15.9002 33.67 15.8202 33.75 15.7302 33.75ZM12.1002 33.33C12.6502 33.34 13.2502 33.35 13.8302 33.36C14.4102 33.37 15.0002 33.39 15.5602 33.39C15.6002 32.1 15.6202 30.97 15.6002 29.86C14.3902 29.8 13.2502 29.8 12.1202 29.85C12.1102 30.96 12.1102 32.08 12.1102 33.17V33.33H12.1002Z" fill="white" />
                                                                <path d="M19.5795 7.72996C13.1395 7.50996 6.70953 7.47996 0.45953 7.61996C0.35953 7.61996 0.279531 7.53996 0.269531 7.43996C0.269531 7.33996 0.34953 7.25996 0.44953 7.24996C6.70953 7.09996 13.1495 7.13996 19.5895 7.35996C19.6895 7.35996 19.7695 7.44996 19.7595 7.54996C19.7595 7.64996 19.6795 7.72996 19.5795 7.72996Z" fill="white" />
                                                                <path d="M7.75008 14.69L4.14008 14.65C4.11008 14.65 4.08008 14.62 4.08008 14.59C4.08008 14.56 4.11008 14.53 4.14008 14.53L7.75008 14.57C7.78008 14.57 7.81008 14.6 7.81008 14.63C7.81008 14.66 7.79008 14.69 7.75008 14.69Z" fill="white" />
                                                                <path d="M15.8392 14.68C14.9692 14.63 13.9292 14.64 12.9192 14.64C12.6092 14.64 12.2992 14.64 12.0092 14.64C11.9792 14.64 11.9492 14.61 11.9492 14.58C11.9492 14.55 11.9792 14.52 12.0092 14.52C12.3092 14.52 12.6092 14.52 12.9192 14.52C13.9292 14.51 14.9692 14.51 15.8392 14.56C15.8692 14.56 15.8992 14.59 15.8992 14.62C15.8992 14.66 15.8792 14.68 15.8392 14.68Z" fill="white" />
                                                                <path d="M7.63953 22.72C7.11953 22.7 6.48953 22.71 5.88953 22.71C5.26953 22.72 4.62953 22.72 4.07953 22.7C4.04953 22.7 4.01953 22.67 4.01953 22.64C4.01953 22.61 4.04953 22.58 4.07953 22.58C4.62953 22.6 5.26953 22.59 5.88953 22.59C6.48953 22.58 7.11953 22.58 7.63953 22.6C7.66953 22.6 7.69953 22.63 7.69953 22.66C7.69953 22.69 7.67953 22.72 7.63953 22.72Z" fill="white" />
                                                                <path d="M15.6892 22.7C14.8292 22.66 13.4892 22.65 12.0092 22.66C11.9792 22.66 11.9492 22.63 11.9492 22.6C11.9492 22.57 11.9792 22.54 12.0092 22.54C13.4892 22.53 14.8292 22.54 15.6892 22.58C15.7192 22.58 15.7492 22.61 15.7492 22.64C15.7492 22.68 15.7292 22.7 15.6892 22.7Z" fill="white" />
                                                                <path d="M5.99015 30.86C5.31015 30.86 4.62016 30.85 3.97016 30.83C3.94016 30.83 3.91016 30.8 3.91016 30.77C3.91016 30.74 3.94016 30.71 3.97016 30.71C4.88016 30.74 5.86016 30.74 6.80016 30.74C7.07016 30.74 7.34016 30.74 7.61016 30.74C7.64016 30.74 7.67015 30.77 7.67015 30.8C7.67015 30.83 7.64016 30.86 7.61016 30.86C7.34016 30.86 7.07016 30.86 6.80016 30.86C6.53016 30.86 6.26015 30.86 5.99015 30.86Z" fill="white" />
                                                                <path d="M11.9995 30.8001C11.9695 30.8001 11.9395 30.7701 11.9395 30.7401C11.9395 30.7101 11.9695 30.6801 11.9995 30.6801C13.2295 30.6501 14.4695 30.6401 15.6995 30.6601C15.7295 30.6601 15.7595 30.6901 15.7595 30.7201C15.7595 30.7501 15.7295 30.7801 15.6995 30.7801C14.4695 30.7601 13.2195 30.7701 11.9995 30.8001Z" fill="white" />
                                                                <path d="M8.65953 3.72005L8.61953 0.180054L11.6195 0.200052L11.6495 3.83005L15.0595 3.96005L15.0895 6.79005L11.6495 6.71005V10.3101L8.82953 10.3401L8.71953 6.78005L5.01953 6.75005V3.76005L8.65953 3.72005Z" fill="#BEE8FF" />
                                                                <path d="M8.82984 10.53C8.72984 10.53 8.64985 10.45 8.64985 10.35L8.54984 6.96L5.01984 6.93C4.91984 6.93 4.83984 6.85 4.83984 6.75V3.76C4.83984 3.66 4.91984 3.58 5.01984 3.58L8.46984 3.54L8.43984 0.18C8.43984 0.13 8.45984 0.0799992 8.48984 0.0499992C8.51984 0.0199992 8.56984 0 8.61984 0L11.6198 0.0200005C11.7198 0.0200005 11.7998 0.0999989 11.7998 0.199999L11.8198 3.65L15.0598 3.78C15.1598 3.78 15.2298 3.86 15.2298 3.96L15.2598 6.79C15.2598 6.84 15.2398 6.89 15.2098 6.92C15.1698 6.95 15.1298 6.97 15.0798 6.97L11.8198 6.89V10.3C11.8198 10.4 11.7398 10.48 11.6398 10.48L8.82984 10.53ZM5.19984 6.57L8.71984 6.6C8.81984 6.6 8.89985 6.68 8.89985 6.78L8.99984 10.16L11.4598 10.13V6.71C11.4598 6.66 11.4798 6.61 11.5098 6.58C11.5398 6.55 11.5898 6.53 11.6398 6.53L14.8998 6.61L14.8698 4.14L11.6298 4.01C11.5298 4.01 11.4598 3.93 11.4598 3.83L11.4398 0.379999L8.79984 0.360001L8.82984 3.72C8.82984 3.82 8.74985 3.9 8.64985 3.9L5.19984 3.94V6.57V6.57Z" fill="white" />
                                                                <path d="M0 34V34C3.14757 35.5738 5.37049 38.5377 6 42V42H0V34Z" fill="#BEE8FF" />
                                                            </svg>
                                                        }

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
                                                        {props.darkMode
                                                            ? <img height={90} src={BracesDark} alt="" />
                                                            : <img height={90} src={Braces} alt="" />
                                                        }
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
                                                        {props.darkMode
                                                            ? <img height={90} src={AlternativeDark} alt="" />
                                                            : <img height={90} src={Alternative} alt="" />
                                                        }
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
                                                        {props.darkMode
                                                            ? <img height={90} width={110} src={FitnessDark} alt="" />
                                                            : <img height={90} width={110} src={Fitness} alt="" />
                                                        }
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
                                                        {!props.darkMode

                                                            ? <svg xmlns="http://www.w3.org/2000/svg" height="90" viewBox="0 0 42 43" fill="none">
                                                            <path d="M36 10.5L39.2584 10.8258C40.2555 10.9256 41.0249 11.7478 41.0583 12.7493L41.5 26L41.0583 39.2507C41.0249 40.2522 40.2555 41.0744 39.2584 41.1742L36 41.5L37.1149 34.1563C38.0323 28.113 37.9717 21.9614 36.9354 15.9373L36 10.5Z" fill="#BEE8FF"/>
                                                            <path d="M13.0494 11.52C12.9194 11.52 12.8094 11.43 12.7894 11.3C12.3394 8.35 13.1894 4.83 14.8494 2.75C16.2694 0.98 18.1794 0 20.2394 0C25.2494 0 28.6694 1.89 29.0494 11.1C29.0594 11.25 28.9394 11.37 28.7994 11.37H28.7894C28.6494 11.37 28.5294 11.26 28.5294 11.12C28.3494 6.88 27.4994 4.03 25.9294 2.4C24.6794 1.1 22.9194 0.52 20.2494 0.52C18.9094 0.52 16.9494 0.96 15.2694 3.07C13.6894 5.05 12.8894 8.4 13.3194 11.22C13.3394 11.36 13.2394 11.5 13.0994 11.52C13.0794 11.52 13.0694 11.52 13.0494 11.52Z" fill="black"/>
                                                            <path d="M19.0805 34.8101C18.9405 34.8101 18.8205 34.7 18.8205 34.55L18.6805 29.64L13.5705 29.59C13.4305 29.59 13.3105 29.4701 13.3105 29.3301V25C13.3105 24.86 13.4305 24.7401 13.5705 24.7401L18.5705 24.69L18.5205 19.82C18.5205 19.75 18.5505 19.6801 18.6005 19.6301C18.6505 19.5801 18.7205 19.55 18.7905 19.55L23.1405 19.5801C23.2805 19.5801 23.4005 19.7 23.4005 19.84L23.4305 24.84L28.1305 25.03C28.2705 25.04 28.3805 25.1501 28.3805 25.2901L28.4305 29.39C28.4305 29.46 28.4005 29.5301 28.3505 29.5801C28.3005 29.6301 28.2305 29.66 28.1605 29.66L23.4305 29.55V34.4901C23.4305 34.6301 23.3105 34.75 23.1705 34.75L19.0805 34.8101C19.0805 34.8101 19.0905 34.8101 19.0805 34.8101ZM13.8305 29.07L18.9305 29.12C19.0705 29.12 19.1905 29.2301 19.1905 29.3801L19.3305 34.2901L22.8905 34.25V29.3C22.8905 29.23 22.9205 29.1601 22.9705 29.1101C23.0205 29.0601 23.0905 29.0401 23.1605 29.0401L27.8805 29.1501L27.8405 25.57L23.1405 25.3801C23.0005 25.3701 22.8905 25.26 22.8905 25.12L22.8605 20.1301L19.0405 20.1001L19.0905 24.9701C19.0905 25.1201 18.9805 25.2301 18.8305 25.2401L13.8305 25.2901V29.07V29.07Z" fill="black"/>
                                                            <path d="M2.45914 39.74C2.40914 39.74 2.36914 39.7 2.36914 39.65C2.36914 39.6 2.40914 39.56 2.45914 39.56C14.5091 39.27 26.7391 39.19 38.7991 39.33C38.8491 39.33 38.8891 39.37 38.8891 39.42C38.8891 39.47 38.8491 39.51 38.7991 39.51C26.7391 39.38 14.5191 39.46 2.45914 39.74C2.45914 39.74 2.46914 39.74 2.45914 39.74Z" fill="black"/>
                                                            <path d="M2.45914 13.09C2.40914 13.09 2.36914 13.05 2.36914 13C2.36914 12.95 2.40914 12.91 2.45914 12.91C10.9191 12.71 20.3491 12.77 28.6691 12.83C32.2891 12.85 35.7091 12.88 38.7891 12.88C38.8391 12.88 38.8791 12.92 38.8791 12.97C38.8791 13.02 38.8391 13.06 38.7891 13.06C35.6991 13.06 32.2791 13.04 28.6691 13.01C20.3591 12.95 10.9291 12.89 2.45914 13.09C2.45914 13.09 2.46914 13.09 2.45914 13.09Z" fill="black"/>
                                                            <path d="M2.43961 14.9199C2.38961 14.9199 2.35961 14.8799 2.34961 14.8399C2.34961 14.7899 2.37961 14.7499 2.42961 14.7499C3.78961 14.6499 5.16961 14.6299 6.53961 14.6699C6.58961 14.6699 6.62961 14.7099 6.61961 14.7599C6.61961 14.8099 6.57961 14.8499 6.52961 14.8399C5.17961 14.7999 3.79961 14.8299 2.43961 14.9199Z" fill="black"/>
                                                            <path d="M5.88 42.29C4.57 42.29 3.26 42.22 1.96 41.98C1.94 41.98 1.93 41.97 1.91 41.97C0.62 41.46 0 40.05 0 37.67L0.0299988 14.52C0.0299988 13.56 0.0299998 12.36 0.49 11.38C0.89 10.54 1.69 10.13 2.94 10.13C8.11 10.17 15.02 10.19 21.71 10.22C28.2 10.24 34.33 10.26 38.79 10.3C39.67 10.3 40.28 10.51 40.72 10.95C41.72 11.95 41.71 14.04 41.7 17.83C41.7 18.26 41.7 18.71 41.7 19.18C41.7 20.38 41.7 21.58 41.71 22.79C41.73 28.03 41.75 33.45 41.37 38.77C41.16 41.77 38.6 41.87 36.34 41.96L36.12 41.97C32.08 42.14 27.69 42.11 23.04 42.08C18.42 42.05 13.64 42.02 9.27 42.2L8.89 42.22C7.9 42.25 6.89 42.29 5.88 42.29ZM2.08 41.47C4.31 41.87 6.63 41.77 8.87 41.68L9.25 41.66C13.63 41.48 18.42 41.51 23.05 41.54C27.69 41.57 32.08 41.6 36.11 41.43L36.33 41.42C38.57 41.33 40.68 41.25 40.86 38.72C41.24 33.43 41.22 28.01 41.2 22.78C41.2 21.58 41.19 20.37 41.19 19.17C41.19 18.7 41.19 18.24 41.19 17.81C41.2 14.28 41.21 12.15 40.36 11.3C40.02 10.96 39.53 10.8 38.8 10.8C34.35 10.77 28.22 10.75 21.73 10.72C15.04 10.7 8.13 10.67 2.96 10.63C1.92 10.63 1.29 10.93 0.99 11.58C0.58 12.46 0.58 13.54 0.58 14.5V14.53L0.549999 37.64C0.519999 39.8 1.03 41.04 2.08 41.47Z" fill="black"/>
                                                            </svg>
                                                            : <svg xmlns="http://www.w3.org/2000/svg" height="90" viewBox="0 0 42 43" fill="none">
                                                                <path d="M36 10.5L39.2584 10.8258C40.2555 10.9256 41.0249 11.7478 41.0583 12.7493L41.5 26L41.0583 39.2507C41.0249 40.2522 40.2555 41.0744 39.2584 41.1742L36 41.5L37.1149 34.1563C38.0323 28.113 37.9717 21.9614 36.9354 15.9373L36 10.5Z" fill="#BEE8FF" />
                                                                <path d="M13.0494 11.52C12.9194 11.52 12.8094 11.43 12.7894 11.3C12.3394 8.35 13.1894 4.83 14.8494 2.75C16.2694 0.98 18.1794 0 20.2394 0C25.2494 0 28.6694 1.89 29.0494 11.1C29.0594 11.25 28.9394 11.37 28.7994 11.37H28.7894C28.6494 11.37 28.5294 11.26 28.5294 11.12C28.3494 6.88 27.4994 4.03 25.9294 2.4C24.6794 1.1 22.9194 0.52 20.2494 0.52C18.9094 0.52 16.9494 0.96 15.2694 3.07C13.6894 5.05 12.8894 8.4 13.3194 11.22C13.3394 11.36 13.2394 11.5 13.0994 11.52C13.0794 11.52 13.0694 11.52 13.0494 11.52Z" fill="white" />
                                                                <path d="M19.0805 34.8101C18.9405 34.8101 18.8205 34.7 18.8205 34.55L18.6805 29.64L13.5705 29.59C13.4305 29.59 13.3105 29.4701 13.3105 29.3301V25C13.3105 24.86 13.4305 24.7401 13.5705 24.7401L18.5705 24.69L18.5205 19.82C18.5205 19.75 18.5505 19.6801 18.6005 19.6301C18.6505 19.5801 18.7205 19.55 18.7905 19.55L23.1405 19.5801C23.2805 19.5801 23.4005 19.7 23.4005 19.84L23.4305 24.84L28.1305 25.03C28.2705 25.04 28.3805 25.1501 28.3805 25.2901L28.4305 29.39C28.4305 29.46 28.4005 29.5301 28.3505 29.5801C28.3005 29.6301 28.2305 29.66 28.1605 29.66L23.4305 29.55V34.4901C23.4305 34.6301 23.3105 34.75 23.1705 34.75L19.0805 34.8101C19.0805 34.8101 19.0905 34.8101 19.0805 34.8101ZM13.8305 29.07L18.9305 29.12C19.0705 29.12 19.1905 29.2301 19.1905 29.3801L19.3305 34.2901L22.8905 34.25V29.3C22.8905 29.23 22.9205 29.1601 22.9705 29.1101C23.0205 29.0601 23.0905 29.0401 23.1605 29.0401L27.8805 29.1501L27.8405 25.57L23.1405 25.3801C23.0005 25.3701 22.8905 25.26 22.8905 25.12L22.8605 20.1301L19.0405 20.1001L19.0905 24.9701C19.0905 25.1201 18.9805 25.2301 18.8305 25.2401L13.8305 25.2901V29.07V29.07Z" fill="white" />
                                                                <path d="M2.45914 39.74C2.40914 39.74 2.36914 39.7 2.36914 39.65C2.36914 39.6 2.40914 39.56 2.45914 39.56C14.5091 39.27 26.7391 39.19 38.7991 39.33C38.8491 39.33 38.8891 39.37 38.8891 39.42C38.8891 39.47 38.8491 39.51 38.7991 39.51C26.7391 39.38 14.5191 39.46 2.45914 39.74C2.45914 39.74 2.46914 39.74 2.45914 39.74Z" fill="white" />
                                                                <path d="M2.45914 13.09C2.40914 13.09 2.36914 13.05 2.36914 13C2.36914 12.95 2.40914 12.91 2.45914 12.91C10.9191 12.71 20.3491 12.77 28.6691 12.83C32.2891 12.85 35.7091 12.88 38.7891 12.88C38.8391 12.88 38.8791 12.92 38.8791 12.97C38.8791 13.02 38.8391 13.06 38.7891 13.06C35.6991 13.06 32.2791 13.04 28.6691 13.01C20.3591 12.95 10.9291 12.89 2.45914 13.09C2.45914 13.09 2.46914 13.09 2.45914 13.09Z" fill="white" />
                                                                <path d="M2.43961 14.9199C2.38961 14.9199 2.35961 14.8799 2.34961 14.8399C2.34961 14.7899 2.37961 14.7499 2.42961 14.7499C3.78961 14.6499 5.16961 14.6299 6.53961 14.6699C6.58961 14.6699 6.62961 14.7099 6.61961 14.7599C6.61961 14.8099 6.57961 14.8499 6.52961 14.8399C5.17961 14.7999 3.79961 14.8299 2.43961 14.9199Z" fill="white" />
                                                                <path d="M5.88 42.29C4.57 42.29 3.26 42.22 1.96 41.98C1.94 41.98 1.93 41.97 1.91 41.97C0.62 41.46 0 40.05 0 37.67L0.0299988 14.52C0.0299988 13.56 0.0299998 12.36 0.49 11.38C0.89 10.54 1.69 10.13 2.94 10.13C8.11 10.17 15.02 10.19 21.71 10.22C28.2 10.24 34.33 10.26 38.79 10.3C39.67 10.3 40.28 10.51 40.72 10.95C41.72 11.95 41.71 14.04 41.7 17.83C41.7 18.26 41.7 18.71 41.7 19.18C41.7 20.38 41.7 21.58 41.71 22.79C41.73 28.03 41.75 33.45 41.37 38.77C41.16 41.77 38.6 41.87 36.34 41.96L36.12 41.97C32.08 42.14 27.69 42.11 23.04 42.08C18.42 42.05 13.64 42.02 9.27 42.2L8.89 42.22C7.9 42.25 6.89 42.29 5.88 42.29ZM2.08 41.47C4.31 41.87 6.63 41.77 8.87 41.68L9.25 41.66C13.63 41.48 18.42 41.51 23.05 41.54C27.69 41.57 32.08 41.6 36.11 41.43L36.33 41.42C38.57 41.33 40.68 41.25 40.86 38.72C41.24 33.43 41.22 28.01 41.2 22.78C41.2 21.58 41.19 20.37 41.19 19.17C41.19 18.7 41.19 18.24 41.19 17.81C41.2 14.28 41.21 12.15 40.36 11.3C40.02 10.96 39.53 10.8 38.8 10.8C34.35 10.77 28.22 10.75 21.73 10.72C15.04 10.7 8.13 10.67 2.96 10.63C1.92 10.63 1.29 10.93 0.99 11.58C0.58 12.46 0.58 13.54 0.58 14.5V14.53L0.549999 37.64C0.519999 39.8 1.03 41.04 2.08 41.47Z" fill="white" />
                                                            </svg>
                                                        }

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
                                                        {props.darkMode
                                                            ? <img src={Medicine2Dark} height={90} alt="" />
                                                            : <img src={Medicine2} height={90} alt="" />
                                                        }
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
                                                        {props.darkMode
                                                            ? <img src={AbroadDark} height={90} alt="" />
                                                            : <img src={Abroad} height={90} alt="" />
                                                        }
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
                                <div className="" ref={fourthStep2Div}>
                                    <div className='pb-3'>
                                        <span className='fw-bold' style={{ color: "#50B8E7" }}>Wie möchten Sie fortfahren?</span>
                                    </div>
                                    <div>
                                        <div className="row g-4">
                                            <div className="col-12 col-md-6">
                                                <label htmlFor="step4Email" className='container1 w-100'>
                                                    <input type="radio" id='step4Email' name='fortfahren' checked={(emailUnsure === 'email') ? true : false} onChange={() => { setEmailUnsure('email') }} hidden />
                                                    <span className='checkmark'>Unverbindliche Offerte per E-Mail zusenden</span>
                                                </label>
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <label htmlFor="step4Unsure" className='container1 w-100'>
                                                    <input type="radio" id='step4Unsure' name='fortfahren' checked={(emailUnsure === 'unsure') ? true : false} onChange={() => { setEmailUnsure('unsure') }} hidden />
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
                                    <div className='wrapDiv container-xl px-0 pt-5'>
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
                                                        <input type="text" className='krankenInputStyle krankenInputStepStyle p-2 p-3' placeholder='Vorname' name="" id="" />
                                                    </div>
                                                    <div className="col-12 col-sm-6">
                                                        <input type="text" className='krankenInputStyle krankenInputStepStyle p-2 p-3' placeholder='Nachname' name="" id="" />
                                                    </div>
                                                    <div className="col-12 col-sm-6">
                                                        <select name="" className='krankenInputStyle form-select krankenInputStepStyle p-3' id="">
                                                            <option value="0">Nationalität</option>
                                                            <option value="afghan">Afghan</option>
                                                            <option value="albanian">Albanian</option>
                                                            <option value="algerian">Algerian</option>
                                                            <option value="american">American</option>
                                                            <option value="andorran">Andorran</option>
                                                            <option value="angolan">Angolan</option>
                                                            <option value="antiguans">Antiguans</option>
                                                            <option value="argentinean">Argentinean</option>
                                                            <option value="armenian">Armenian</option>
                                                            <option value="australian">Australian</option>
                                                            <option value="austrian">Austrian</option>
                                                            <option value="azerbaijani">Azerbaijani</option>
                                                            <option value="bahamian">Bahamian</option>
                                                            <option value="bahraini">Bahraini</option>
                                                            <option value="bangladeshi">Bangladeshi</option>
                                                            <option value="barbadian">Barbadian</option>
                                                            <option value="barbudans">Barbudans</option>
                                                            <option value="batswana">Batswana</option>
                                                            <option value="belarusian">Belarusian</option>
                                                            <option value="belgian">Belgian</option>
                                                            <option value="belizean">Belizean</option>
                                                            <option value="beninese">Beninese</option>
                                                            <option value="bhutanese">Bhutanese</option>
                                                            <option value="bolivian">Bolivian</option>
                                                            <option value="bosnian">Bosnian</option>
                                                            <option value="brazilian">Brazilian</option>
                                                            <option value="british">British</option>
                                                            <option value="bruneian">Bruneian</option>
                                                            <option value="bulgarian">Bulgarian</option>
                                                            <option value="burkinabe">Burkinabe</option>
                                                            <option value="burmese">Burmese</option>
                                                            <option value="burundian">Burundian</option>
                                                            <option value="cambodian">Cambodian</option>
                                                            <option value="cameroonian">Cameroonian</option>
                                                            <option value="canadian">Canadian</option>
                                                            <option value="cape verdean">Cape Verdean</option>
                                                            <option value="central african">Central African</option>
                                                            <option value="chadian">Chadian</option>
                                                            <option value="chilean">Chilean</option>
                                                            <option value="chinese">Chinese</option>
                                                            <option value="colombian">Colombian</option>
                                                            <option value="comoran">Comoran</option>
                                                            <option value="congolese">Congolese</option>
                                                            <option value="costa rican">Costa Rican</option>
                                                            <option value="croatian">Croatian</option>
                                                            <option value="cuban">Cuban</option>
                                                            <option value="cypriot">Cypriot</option>
                                                            <option value="czech">Czech</option>
                                                            <option value="danish">Danish</option>
                                                            <option value="djibouti">Djibouti</option>
                                                            <option value="dominican">Dominican</option>
                                                            <option value="dutch">Dutch</option>
                                                            <option value="east timorese">East Timorese</option>
                                                            <option value="ecuadorean">Ecuadorean</option>
                                                            <option value="egyptian">Egyptian</option>
                                                            <option value="emirian">Emirian</option>
                                                            <option value="equatorial guinean">Equatorial Guinean</option>
                                                            <option value="eritrean">Eritrean</option>
                                                            <option value="estonian">Estonian</option>
                                                            <option value="ethiopian">Ethiopian</option>
                                                            <option value="fijian">Fijian</option>
                                                            <option value="filipino">Filipino</option>
                                                            <option value="finnish">Finnish</option>
                                                            <option value="french">French</option>
                                                            <option value="gabonese">Gabonese</option>
                                                            <option value="gambian">Gambian</option>
                                                            <option value="georgian">Georgian</option>
                                                            <option value="german">German</option>
                                                            <option value="ghanaian">Ghanaian</option>
                                                            <option value="greek">Greek</option>
                                                            <option value="grenadian">Grenadian</option>
                                                            <option value="guatemalan">Guatemalan</option>
                                                            <option value="guinea-bissauan">Guinea-Bissauan</option>
                                                            <option value="guinean">Guinean</option>
                                                            <option value="guyanese">Guyanese</option>
                                                            <option value="haitian">Haitian</option>
                                                            <option value="herzegovinian">Herzegovinian</option>
                                                            <option value="honduran">Honduran</option>
                                                            <option value="hungarian">Hungarian</option>
                                                            <option value="icelander">Icelander</option>
                                                            <option value="indian">Indian</option>
                                                            <option value="indonesian">Indonesian</option>
                                                            <option value="iranian">Iranian</option>
                                                            <option value="iraqi">Iraqi</option>
                                                            <option value="irish">Irish</option>
                                                            <option value="israeli">Israeli</option>
                                                            <option value="italian">Italian</option>
                                                            <option value="ivorian">Ivorian</option>
                                                            <option value="jamaican">Jamaican</option>
                                                            <option value="japanese">Japanese</option>
                                                            <option value="jordanian">Jordanian</option>
                                                            <option value="kazakhstani">Kazakhstani</option>
                                                            <option value="kenyan">Kenyan</option>
                                                            <option value="kittian and nevisian">Kittian and Nevisian</option>
                                                            <option value="kuwaiti">Kuwaiti</option>
                                                            <option value="kyrgyz">Kyrgyz</option>
                                                            <option value="laotian">Laotian</option>
                                                            <option value="latvian">Latvian</option>
                                                            <option value="lebanese">Lebanese</option>
                                                            <option value="liberian">Liberian</option>
                                                            <option value="libyan">Libyan</option>
                                                            <option value="liechtensteiner">Liechtensteiner</option>
                                                            <option value="lithuanian">Lithuanian</option>
                                                            <option value="luxembourger">Luxembourger</option>
                                                            <option value="macedonian">Macedonian</option>
                                                            <option value="malagasy">Malagasy</option>
                                                            <option value="malawian">Malawian</option>
                                                            <option value="malaysian">Malaysian</option>
                                                            <option value="maldivan">Maldivan</option>
                                                            <option value="malian">Malian</option>
                                                            <option value="maltese">Maltese</option>
                                                            <option value="marshallese">Marshallese</option>
                                                            <option value="mauritanian">Mauritanian</option>
                                                            <option value="mauritian">Mauritian</option>
                                                            <option value="mexican">Mexican</option>
                                                            <option value="micronesian">Micronesian</option>
                                                            <option value="moldovan">Moldovan</option>
                                                            <option value="monacan">Monacan</option>
                                                            <option value="mongolian">Mongolian</option>
                                                            <option value="moroccan">Moroccan</option>
                                                            <option value="mosotho">Mosotho</option>
                                                            <option value="motswana">Motswana</option>
                                                            <option value="mozambican">Mozambican</option>
                                                            <option value="namibian">Namibian</option>
                                                            <option value="nauruan">Nauruan</option>
                                                            <option value="nepalese">Nepalese</option>
                                                            <option value="new zealander">New Zealander</option>
                                                            <option value="ni-vanuatu">Ni-Vanuatu</option>
                                                            <option value="nicaraguan">Nicaraguan</option>
                                                            <option value="nigerien">Nigerien</option>
                                                            <option value="north korean">North Korean</option>
                                                            <option value="northern irish">Northern Irish</option>
                                                            <option value="norwegian">Norwegian</option>
                                                            <option value="omani">Omani</option>
                                                            <option value="pakistani">Pakistani</option>
                                                            <option value="palauan">Palauan</option>
                                                            <option value="panamanian">Panamanian</option>
                                                            <option value="papua new guinean">Papua New Guinean</option>
                                                            <option value="paraguayan">Paraguayan</option>
                                                            <option value="peruvian">Peruvian</option>
                                                            <option value="polish">Polish</option>
                                                            <option value="portuguese">Portuguese</option>
                                                            <option value="qatari">Qatari</option>
                                                            <option value="romanian">Romanian</option>
                                                            <option value="russian">Russian</option>
                                                            <option value="rwandan">Rwandan</option>
                                                            <option value="saint lucian">Saint Lucian</option>
                                                            <option value="salvadoran">Salvadoran</option>
                                                            <option value="samoan">Samoan</option>
                                                            <option value="san marinese">San Marinese</option>
                                                            <option value="sao tomean">Sao Tomean</option>
                                                            <option value="saudi">Saudi</option>
                                                            <option value="scottish">Scottish</option>
                                                            <option value="senegalese">Senegalese</option>
                                                            <option value="serbian">Serbian</option>
                                                            <option value="seychellois">Seychellois</option>
                                                            <option value="sierra leonean">Sierra Leonean</option>
                                                            <option value="singaporean">Singaporean</option>
                                                            <option value="slovakian">Slovakian</option>
                                                            <option value="slovenian">Slovenian</option>
                                                            <option value="solomon islander">Solomon Islander</option>
                                                            <option value="somali">Somali</option>
                                                            <option value="south african">South African</option>
                                                            <option value="south korean">South Korean</option>
                                                            <option value="spanish">Spanish</option>
                                                            <option value="sri lankan">Sri Lankan</option>
                                                            <option value="sudanese">Sudanese</option>
                                                            <option value="surinamer">Surinamer</option>
                                                            <option value="swazi">Swazi</option>
                                                            <option value="swedish">Swedish</option>
                                                            <option value="swiss">Swiss</option>
                                                            <option value="syrian">Syrian</option>
                                                            <option value="taiwanese">Taiwanese</option>
                                                            <option value="tajik">Tajik</option>
                                                            <option value="tanzanian">Tanzanian</option>
                                                            <option value="thai">Thai</option>
                                                            <option value="togolese">Togolese</option>
                                                            <option value="tongan">Tongan</option>
                                                            <option value="trinidadian or tobagonian">Trinidadian or Tobagonian</option>
                                                            <option value="tunisian">Tunisian</option>
                                                            <option value="turkish">Turkish</option>
                                                            <option value="tuvaluan">Tuvaluan</option>
                                                            <option value="ugandan">Ugandan</option>
                                                            <option value="ukrainian">Ukrainian</option>
                                                            <option value="uruguayan">Uruguayan</option>
                                                            <option value="uzbekistani">Uzbekistani</option>
                                                            <option value="venezuelan">Venezuelan</option>
                                                            <option value="vietnamese">Vietnamese</option>
                                                            <option value="welsh">Welsh</option>
                                                            <option value="yemenite">Yemenite</option>
                                                            <option value="zambian">Zambian</option>
                                                            <option value="zimbabwean">Zimbabwean</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-12 col-sm-6">
                                                        <select name="" className='krankenInputStyle form-select krankenInputStepStyle p-3' id="">
                                                            <option value="0">Aufenthaltsbewilligung</option>
                                                            <option value="Keine der folgenden Optionen">Keine der folgenden Optionen</option>
                                                            <option value="Ausweis B (Aufenthaltsbewilligung)">Ausweis B (Aufenthaltsbewilligung)</option>
                                                            <option value="Ausweis C (Niederlassungsbewilligung)">Ausweis C (Niederlassungsbewilligung)</option>
                                                            <option value="Ausweis Ci (Aufenthaltsbewilligung mit Erwerbstätigkeit)">Ausweis Ci (Aufenthaltsbewilligung mit Erwerbstätigkeit)</option>
                                                            <option value="Ausweis G (Grenzgängerbewilligung)">Ausweis G (Grenzgängerbewilligung)</option>
                                                            <option value="Ausweis L (Kurzaufenthaltsbewilligung)">Ausweis L (Kurzaufenthaltsbewilligung)</option>
                                                            <option value="Ausweis F (Vorläufig aufgenommene Ausländerinnen, Ausländer)">Ausweis F (Vorläufig aufgenommene Ausländerinnen, Ausländer)</option>
                                                            <option value="Ausweis N (Asylsuchende)">Ausweis N (Asylsuchende)</option>
                                                            <option value="Ausweis S (Schutzbedürftige)">Ausweis S (Schutzbedürftige)</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-12 col-sm-6">
                                                        <input type="text" className='krankenInputStyle krankenInputStepStyle p-2 p-3' placeholder='Adresse' name="" id="" />
                                                    </div>
                                                    <div className="col-12 col-sm-6">
                                                        <input type="email" className='krankenInputStyle krankenInputStepStyle p-2 p-3' placeholder='E-Mail-Addresse' name="" id="" />
                                                    </div>
                                                    <div className="col-12 col-sm-6">
                                                        <div className="pb-5">
                                                            <input type="tel" className='krankenInputStyle krankenInputStepStyle p-2 p-3' placeholder='Telefonnummer' name="" id="" />
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
                    <div className="mehrLadenModalContent p-4 mx-4">
                        <div className='text-end'>
                            <span style={{ cursor: "pointer" }} onClick={() => { setMehrLadenModal(false) }}>
                                <XBtn />
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
                                            <input required type="text" onChange={e => setVorname(e.target.value)} className="krankenInputStyle krankenInputStepStyle p-2 p-2" />
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <div className='pb-2'>
                                            <span style={{ color: "#464646" }} className='fw-500'>Nachname</span>
                                        </div>
                                        <div>
                                            <input required type="text" onChange={e => setNachname(e.target.value)} className="krankenInputStyle krankenInputStepStyle p-2 p-2" />
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <div className='pb-2'>
                                            <span style={{ color: "#464646" }} className='fw-500'>Nationalität</span>
                                        </div>
                                        <div>
                                            <select required name="" onChange={e => setNationalitat(e.target.value)} id="" className='krankenInputStyle form-select krankenInputStepStyle p-2'>
                                                <option value="0">---</option>
                                                <option value="afghan">Afghan</option>
                                                <option value="albanian">Albanian</option>
                                                <option value="algerian">Algerian</option>
                                                <option value="american">American</option>
                                                <option value="andorran">Andorran</option>
                                                <option value="angolan">Angolan</option>
                                                <option value="antiguans">Antiguans</option>
                                                <option value="argentinean">Argentinean</option>
                                                <option value="armenian">Armenian</option>
                                                <option value="australian">Australian</option>
                                                <option value="austrian">Austrian</option>
                                                <option value="azerbaijani">Azerbaijani</option>
                                                <option value="bahamian">Bahamian</option>
                                                <option value="bahraini">Bahraini</option>
                                                <option value="bangladeshi">Bangladeshi</option>
                                                <option value="barbadian">Barbadian</option>
                                                <option value="barbudans">Barbudans</option>
                                                <option value="batswana">Batswana</option>
                                                <option value="belarusian">Belarusian</option>
                                                <option value="belgian">Belgian</option>
                                                <option value="belizean">Belizean</option>
                                                <option value="beninese">Beninese</option>
                                                <option value="bhutanese">Bhutanese</option>
                                                <option value="bolivian">Bolivian</option>
                                                <option value="bosnian">Bosnian</option>
                                                <option value="brazilian">Brazilian</option>
                                                <option value="british">British</option>
                                                <option value="bruneian">Bruneian</option>
                                                <option value="bulgarian">Bulgarian</option>
                                                <option value="burkinabe">Burkinabe</option>
                                                <option value="burmese">Burmese</option>
                                                <option value="burundian">Burundian</option>
                                                <option value="cambodian">Cambodian</option>
                                                <option value="cameroonian">Cameroonian</option>
                                                <option value="canadian">Canadian</option>
                                                <option value="cape verdean">Cape Verdean</option>
                                                <option value="central african">Central African</option>
                                                <option value="chadian">Chadian</option>
                                                <option value="chilean">Chilean</option>
                                                <option value="chinese">Chinese</option>
                                                <option value="colombian">Colombian</option>
                                                <option value="comoran">Comoran</option>
                                                <option value="congolese">Congolese</option>
                                                <option value="costa rican">Costa Rican</option>
                                                <option value="croatian">Croatian</option>
                                                <option value="cuban">Cuban</option>
                                                <option value="cypriot">Cypriot</option>
                                                <option value="czech">Czech</option>
                                                <option value="danish">Danish</option>
                                                <option value="djibouti">Djibouti</option>
                                                <option value="dominican">Dominican</option>
                                                <option value="dutch">Dutch</option>
                                                <option value="east timorese">East Timorese</option>
                                                <option value="ecuadorean">Ecuadorean</option>
                                                <option value="egyptian">Egyptian</option>
                                                <option value="emirian">Emirian</option>
                                                <option value="equatorial guinean">Equatorial Guinean</option>
                                                <option value="eritrean">Eritrean</option>
                                                <option value="estonian">Estonian</option>
                                                <option value="ethiopian">Ethiopian</option>
                                                <option value="fijian">Fijian</option>
                                                <option value="filipino">Filipino</option>
                                                <option value="finnish">Finnish</option>
                                                <option value="french">French</option>
                                                <option value="gabonese">Gabonese</option>
                                                <option value="gambian">Gambian</option>
                                                <option value="georgian">Georgian</option>
                                                <option value="german">German</option>
                                                <option value="ghanaian">Ghanaian</option>
                                                <option value="greek">Greek</option>
                                                <option value="grenadian">Grenadian</option>
                                                <option value="guatemalan">Guatemalan</option>
                                                <option value="guinea-bissauan">Guinea-Bissauan</option>
                                                <option value="guinean">Guinean</option>
                                                <option value="guyanese">Guyanese</option>
                                                <option value="haitian">Haitian</option>
                                                <option value="herzegovinian">Herzegovinian</option>
                                                <option value="honduran">Honduran</option>
                                                <option value="hungarian">Hungarian</option>
                                                <option value="icelander">Icelander</option>
                                                <option value="indian">Indian</option>
                                                <option value="indonesian">Indonesian</option>
                                                <option value="iranian">Iranian</option>
                                                <option value="iraqi">Iraqi</option>
                                                <option value="irish">Irish</option>
                                                <option value="israeli">Israeli</option>
                                                <option value="italian">Italian</option>
                                                <option value="ivorian">Ivorian</option>
                                                <option value="jamaican">Jamaican</option>
                                                <option value="japanese">Japanese</option>
                                                <option value="jordanian">Jordanian</option>
                                                <option value="kazakhstani">Kazakhstani</option>
                                                <option value="kenyan">Kenyan</option>
                                                <option value="kittian and nevisian">Kittian and Nevisian</option>
                                                <option value="kuwaiti">Kuwaiti</option>
                                                <option value="kyrgyz">Kyrgyz</option>
                                                <option value="laotian">Laotian</option>
                                                <option value="latvian">Latvian</option>
                                                <option value="lebanese">Lebanese</option>
                                                <option value="liberian">Liberian</option>
                                                <option value="libyan">Libyan</option>
                                                <option value="liechtensteiner">Liechtensteiner</option>
                                                <option value="lithuanian">Lithuanian</option>
                                                <option value="luxembourger">Luxembourger</option>
                                                <option value="macedonian">Macedonian</option>
                                                <option value="malagasy">Malagasy</option>
                                                <option value="malawian">Malawian</option>
                                                <option value="malaysian">Malaysian</option>
                                                <option value="maldivan">Maldivan</option>
                                                <option value="malian">Malian</option>
                                                <option value="maltese">Maltese</option>
                                                <option value="marshallese">Marshallese</option>
                                                <option value="mauritanian">Mauritanian</option>
                                                <option value="mauritian">Mauritian</option>
                                                <option value="mexican">Mexican</option>
                                                <option value="micronesian">Micronesian</option>
                                                <option value="moldovan">Moldovan</option>
                                                <option value="monacan">Monacan</option>
                                                <option value="mongolian">Mongolian</option>
                                                <option value="moroccan">Moroccan</option>
                                                <option value="mosotho">Mosotho</option>
                                                <option value="motswana">Motswana</option>
                                                <option value="mozambican">Mozambican</option>
                                                <option value="namibian">Namibian</option>
                                                <option value="nauruan">Nauruan</option>
                                                <option value="nepalese">Nepalese</option>
                                                <option value="new zealander">New Zealander</option>
                                                <option value="ni-vanuatu">Ni-Vanuatu</option>
                                                <option value="nicaraguan">Nicaraguan</option>
                                                <option value="nigerien">Nigerien</option>
                                                <option value="north korean">North Korean</option>
                                                <option value="northern irish">Northern Irish</option>
                                                <option value="norwegian">Norwegian</option>
                                                <option value="omani">Omani</option>
                                                <option value="pakistani">Pakistani</option>
                                                <option value="palauan">Palauan</option>
                                                <option value="panamanian">Panamanian</option>
                                                <option value="papua new guinean">Papua New Guinean</option>
                                                <option value="paraguayan">Paraguayan</option>
                                                <option value="peruvian">Peruvian</option>
                                                <option value="polish">Polish</option>
                                                <option value="portuguese">Portuguese</option>
                                                <option value="qatari">Qatari</option>
                                                <option value="romanian">Romanian</option>
                                                <option value="russian">Russian</option>
                                                <option value="rwandan">Rwandan</option>
                                                <option value="saint lucian">Saint Lucian</option>
                                                <option value="salvadoran">Salvadoran</option>
                                                <option value="samoan">Samoan</option>
                                                <option value="san marinese">San Marinese</option>
                                                <option value="sao tomean">Sao Tomean</option>
                                                <option value="saudi">Saudi</option>
                                                <option value="scottish">Scottish</option>
                                                <option value="senegalese">Senegalese</option>
                                                <option value="serbian">Serbian</option>
                                                <option value="seychellois">Seychellois</option>
                                                <option value="sierra leonean">Sierra Leonean</option>
                                                <option value="singaporean">Singaporean</option>
                                                <option value="slovakian">Slovakian</option>
                                                <option value="slovenian">Slovenian</option>
                                                <option value="solomon islander">Solomon Islander</option>
                                                <option value="somali">Somali</option>
                                                <option value="south african">South African</option>
                                                <option value="south korean">South Korean</option>
                                                <option value="spanish">Spanish</option>
                                                <option value="sri lankan">Sri Lankan</option>
                                                <option value="sudanese">Sudanese</option>
                                                <option value="surinamer">Surinamer</option>
                                                <option value="swazi">Swazi</option>
                                                <option value="swedish">Swedish</option>
                                                <option value="swiss">Swiss</option>
                                                <option value="syrian">Syrian</option>
                                                <option value="taiwanese">Taiwanese</option>
                                                <option value="tajik">Tajik</option>
                                                <option value="tanzanian">Tanzanian</option>
                                                <option value="thai">Thai</option>
                                                <option value="togolese">Togolese</option>
                                                <option value="tongan">Tongan</option>
                                                <option value="trinidadian or tobagonian">Trinidadian or Tobagonian</option>
                                                <option value="tunisian">Tunisian</option>
                                                <option value="turkish">Turkish</option>
                                                <option value="tuvaluan">Tuvaluan</option>
                                                <option value="ugandan">Ugandan</option>
                                                <option value="ukrainian">Ukrainian</option>
                                                <option value="uruguayan">Uruguayan</option>
                                                <option value="uzbekistani">Uzbekistani</option>
                                                <option value="venezuelan">Venezuelan</option>
                                                <option value="vietnamese">Vietnamese</option>
                                                <option value="welsh">Welsh</option>
                                                <option value="yemenite">Yemenite</option>
                                                <option value="zambian">Zambian</option>
                                                <option value="zimbabwean">Zimbabwean</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <div className='pb-2'>
                                            <span style={{ color: "#464646" }} className='fw-500'>Aufenthaltsbewilligung</span>
                                        </div>
                                        <div>
                                            <select onChange={e => setAufenthaltsbewilligung(e.target.value)} className="krankenInputStyle form-select krankenInputStepStyle p-2">
                                                <option value="Keine der folgenden Optionen">Keine der folgenden Optionen</option>
                                                <option value="Ausweis B (Aufenthaltsbewilligung)">Ausweis B (Aufenthaltsbewilligung)</option>
                                                <option value="Ausweis C (Niederlassungsbewilligung)">Ausweis C (Niederlassungsbewilligung)</option>
                                                <option value="Ausweis Ci (Aufenthaltsbewilligung mit Erwerbstätigkeit)">Ausweis Ci (Aufenthaltsbewilligung mit Erwerbstätigkeit)</option>
                                                <option value="Ausweis G (Grenzgängerbewilligung)">Ausweis G (Grenzgängerbewilligung)</option>
                                                <option value="Ausweis L (Kurzaufenthaltsbewilligung)">Ausweis L (Kurzaufenthaltsbewilligung)</option>
                                                <option value="Ausweis F (Vorläufig aufgenommene Ausländerinnen, Ausländer)">Ausweis F (Vorläufig aufgenommene Ausländerinnen, Ausländer)</option>
                                                <option value="Ausweis N (Asylsuchende)">Ausweis N (Asylsuchende)</option>
                                                <option value="Ausweis S (Schutzbedürftige)">Ausweis S (Schutzbedürftige)</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <div className='pb-2'>
                                            <span style={{ color: "#464646" }} className='fw-500'>Adresse</span>
                                        </div>
                                        <div>
                                            <input required type="text" onChange={e => setAdresse(e.target.value)} className="krankenInputStyle krankenInputStepStyle p-2 p-2" />
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <div className='pb-2'>
                                            <span style={{ color: "#464646" }} className='fw-500'>E-Mail-Adresse</span>
                                        </div>
                                        <div>
                                            <input required type="email" onChange={e => setEmail(e.target.value)} className="krankenInputStyle krankenInputStepStyle p-2 p-2" />
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <div className='pb-2'>
                                            <span style={{ color: "#464646" }} className='fw-500'>Telefonnummer</span>
                                        </div>
                                        <div>
                                            <input required type="tel" onChange={e => setTelefonnummer(e.target.value)} className="krankenInputStyle krankenInputStepStyle p-2 p-2" />
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