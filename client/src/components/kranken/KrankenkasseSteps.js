import React from 'react'
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import NewPerson from './NewPerson';
import { v4 as uuidv4 } from 'uuid'
import XBtn from "../../assets/images/xButton.svg"
import Stars from '../../assets/images/krankenkasseStars.svg'
import LoadingGif from '../../assets/images/Loading_2.gif';
import Medicine2 from '../../assets/images/medicine2.svg'
// import Transport from '../../assets/images/transport.svg'
import Alternative from '../../assets/images/alternativeMedicine.svg'
// import Sport from '../../assets/images/sport.svg'
import Tooth from '../../assets/images/tooth.svg'
import Fitness from '../../assets/images/fitness.svg'
import Abroad from '../../assets/images/abroad.svg'
function KrankenkasseSteps() {
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
        const res = await axios.post("https://node.kutiza.com/krankenkasse/sendMail");

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
    const [franchise, setFranchise] = useState([]);
    const [model, setModel] = useState([]);
    const [accident, setAccident] = useState([]);
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
                'https://node.kutiza.com/krankenkasse/regions'
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
                    `https://node.kutiza.com/krankenkasse/insurances/${plz}/${ort}/${commune}`
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


        setFranchise(targetFranchise);
        setJahrgang(targetJahrgang);
        setAccident(targetAccident);
        setModel(targetModells);
        setIsLoadActive('flex');
        const result = await axios.get(`https://node.kutiza.com/krankenkasse/compareInputs/${insuranceNum}/${kanton}/${region}/${targetJahrgang}/${targetAccident}/${targetModells}/${targetFranchise}/${tarifbezeichnung}`);
        const response = result.data;
        const responseCompared = response.final_data;
        const responseSelectedKranken = response.final_data_selected_krankenkasse;


        var results = [];
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
            const result = await axios.get(`https://node.kutiza.com/krankenkasse/actualmodel/${insuranceNum}`)
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
                <div className='container-xl px-0'>
                    <div className='krankenFirstStep wrapDiv px-4 mx-auto py-5'>
                        <div>
                            <span className='krankenTitle fs-2'>KRANKENKASSEN VERGLEICHEN 2023</span>
                        </div>
                        <div>
                            <span className='krankenSubtitle'>Vergleichen Sie die Leistungen und Prämien der zugelassenen Krankenkassen in der Schweiz.</span>
                        </div>
                        <div className='pt-5'>
                            <div className="row g-4 justify-content-center">
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
                                <div className="col-12 col-sm-6 col-md-4">
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
                                            <div className="krankenOfferStyle p-4 position-relative mx-auto h-100">
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
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
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

                                                <div className='pb-3'>
                                                    <span className='fw-600'>{element.tarif}</span>
                                                </div>

                                                <div className='pb-3'>
                                                    <span className='fw-600 fs-5'>CHF <span className='fw-bold fs-3'>{element.price}</span>/ Mt.</span>
                                                </div>
                                                <div>
                                                    <span className='fw-600'>sparen Sie CHF<span className='finanuSubTitleW fw-bold' style={{ color: (element.price - selectedkrankenkasse[0].price) > 0 ? "#21be5c" : "#d3252a" }}>{(((element.price - selectedkrankenkasse[0].price)) * 12).toFixed(2)}</span> / Jahr</span>
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
                        <div className='pt-5' style={{ display: krankenkasse.length ? 'block' : 'none' }}>
                            <button className='nextBtnKranken' type='button' onClick={openMehrLadenModal} > Mehr laden </button>
                        </div>

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
                                                        <svg height="90" viewBox="0 0 62 119" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M14.7617 118.095H-0.000185966V88.5714L4.32348 92.8951C11.007 99.5786 14.7617 108.643 14.7617 118.095V118.095Z" fill="#BEE8FF" />
                                                            <path d="M60.7233 118.095H0.560523C0.404823 118.095 0.280259 118.041 0.155698 117.96C0.0622779 117.879 0 117.743 0 117.608L0.903061 18.2015C0.903061 17.9308 1.15218 17.7142 1.46358 17.7142L61.4395 17.9579C61.5952 17.9579 61.7197 18.012 61.8443 18.0932C61.9377 18.1744 62 18.3098 62 18.4452L61.2838 117.608C61.2838 117.879 61.0347 118.095 60.7233 118.095ZM1.12105 117.121H60.1627L60.879 18.9324L2.05525 18.7159L1.12105 117.121Z" fill="black" />
                                                            <path d="M26.1584 54.2644C24.387 54.2644 22.4089 54.2054 20.5194 54.1758C18.6299 54.1463 16.6813 54.0873 14.9098 54.0873C14.6146 54.0873 14.3784 53.8511 14.3784 53.5558V52.5816C14.3784 49.1863 14.3784 45.7025 14.4375 42.2777C14.4375 41.9825 14.6737 41.7758 14.9394 41.7463C18.6298 41.5396 22.3498 41.5692 26.306 41.7463C26.5718 41.7463 26.8079 41.9825 26.8079 42.2777C26.867 45.8796 26.8375 49.5406 26.6899 53.792C26.6899 54.0282 26.4537 54.2644 26.1584 54.2644ZM15.4413 53.0244C17.0946 53.0539 18.8365 53.0835 20.5489 53.113C22.2613 53.1425 24.0032 53.2016 25.627 53.2016C25.7451 49.393 25.8041 46.0568 25.7451 42.7796C22.1727 42.6025 18.807 42.6025 15.4708 42.7501C15.4413 46.0273 15.4413 49.3339 15.4413 52.552V53.0244V53.0244Z" fill="black" />
                                                            <path d="M49.6889 54.2644C47.9175 54.2644 45.9394 54.2054 44.0499 54.1758C42.1603 54.1463 40.2118 54.0873 38.4108 54.0873C38.1156 54.0873 37.8794 53.8511 37.8794 53.5558V52.5816C37.8794 49.1863 37.8794 45.7025 37.9384 42.2777C37.9384 41.9825 38.1746 41.7758 38.4404 41.7463C42.1308 41.5396 45.8508 41.5692 49.807 41.7463C50.0727 41.7463 50.3089 41.9825 50.3089 42.2777C50.368 45.8796 50.3384 49.5406 50.1908 53.792C50.2204 54.0282 49.9842 54.2644 49.6889 54.2644ZM38.9718 53.0244C40.6251 53.0539 42.367 53.0835 44.0794 53.113C45.7918 53.1425 47.5337 53.2016 49.1575 53.2016C49.2756 49.393 49.3346 46.0568 49.2756 42.7796C45.7032 42.6025 42.3375 42.6025 39.0013 42.7501C38.9718 46.0273 38.9718 49.3339 38.9718 52.552V53.0244Z" fill="black" />
                                                            <path d="M25.863 78.4442C25.8335 78.4442 25.8335 78.4442 25.863 78.4442C24.062 78.4442 22.1135 78.3852 20.224 78.3557C18.3344 78.3261 16.3859 78.2671 14.6144 78.2671C14.3192 78.2671 14.083 78.0309 14.083 77.7356V76.7614C14.083 73.3661 14.083 69.8823 14.1421 66.4576C14.1421 66.1623 14.3782 65.9556 14.644 65.9261C18.3344 65.7195 22.0544 65.749 26.0106 65.9261C26.3059 65.9261 26.5125 66.1623 26.5125 66.4576C26.5716 70.0595 26.542 73.7204 26.3944 77.9718C26.3649 78.208 26.1287 78.4442 25.863 78.4442ZM15.1459 77.1747C16.7697 77.2042 18.5411 77.2337 20.2535 77.2633C21.9659 77.2928 23.7078 77.3518 25.3611 77.3518C25.4792 73.5433 25.5382 70.2071 25.4792 66.9299C21.9068 66.7528 18.5411 66.7528 15.2049 66.9004C15.1754 70.1776 15.1754 73.4842 15.1754 76.7023V77.1747H15.1459Z" fill="black" />
                                                            <path d="M49.3943 78.4442C47.5933 78.4442 45.6447 78.3852 43.7552 78.3557C41.8657 78.3261 39.9171 78.2671 38.1457 78.2671C37.8504 78.2671 37.6143 78.0309 37.6143 77.7356V76.7614C37.6143 73.3661 37.6143 69.8823 37.6733 66.4576C37.6733 66.1623 37.9095 65.9556 38.1752 65.9261C41.8657 65.7195 45.5857 65.749 49.5419 65.9261C49.8076 65.9261 50.0438 66.1623 50.0438 66.4576C50.1028 70.089 50.0733 73.7204 49.9257 77.9718C49.8962 78.208 49.66 78.4442 49.3943 78.4442ZM38.6771 77.1747C40.3009 77.2042 42.0724 77.2337 43.7847 77.2633C45.4971 77.2928 47.239 77.3518 48.8924 77.3518C49.0105 73.5433 49.0695 70.2071 49.0105 66.9299C45.4676 66.7528 42.0724 66.7528 38.7362 66.9004C38.7066 70.1776 38.7066 73.4842 38.7066 76.7023V77.1747H38.6771Z" fill="black" />
                                                            <path d="M25.863 102.595C25.8335 102.595 25.8335 102.595 25.863 102.595C24.062 102.595 22.1135 102.536 20.224 102.506C18.3344 102.477 16.3859 102.418 14.6144 102.418C14.3192 102.418 14.083 102.181 14.083 101.886V100.882C14.083 97.4872 14.083 94.0034 14.1421 90.5786C14.1421 90.2834 14.3782 90.0767 14.644 90.0472C18.3344 89.8406 22.0544 89.8701 26.0106 90.0472C26.3059 90.0472 26.5125 90.2834 26.5125 90.5786C26.5716 94.1806 26.542 97.8415 26.3944 102.093C26.3649 102.359 26.1287 102.595 25.863 102.595ZM15.1459 101.355C16.7697 101.384 18.5411 101.414 20.2535 101.443C21.9659 101.473 23.7078 101.532 25.3611 101.532C25.4792 97.7234 25.5382 94.3872 25.4792 91.1101C21.9068 90.9329 18.5411 90.9329 15.2049 91.0805C15.1754 94.3577 15.1754 97.6644 15.1754 100.882V101.355H15.1459Z" fill="black" />
                                                            <path d="M49.3943 102.595C47.5933 102.595 45.6447 102.536 43.7552 102.506C41.8657 102.477 39.9171 102.418 38.1457 102.418C37.8504 102.418 37.6143 102.181 37.6143 101.886V100.882C37.6143 97.4872 37.6143 94.0034 37.6733 90.5786C37.6733 90.2834 37.9095 90.0767 38.1752 90.0472C41.8657 89.8406 45.5857 89.8701 49.5419 90.0472C49.8076 90.0472 50.0438 90.2834 50.0438 90.5786C50.1028 94.2101 50.0733 97.8415 49.9257 102.093C49.8962 102.359 49.66 102.595 49.3943 102.595ZM38.6771 101.355C40.3009 101.384 42.0724 101.414 43.7847 101.443C45.4971 101.473 47.239 101.532 48.8924 101.532C49.0105 97.7234 49.0695 94.3872 49.0105 91.1101C45.4381 90.9329 42.0724 90.9329 38.7362 91.0805C38.7066 94.3577 38.7066 97.6644 38.7066 100.882V101.355H38.6771Z" fill="black" />
                                                            <path d="M25.8338 46.3226L15.1757 46.2045C15.0871 46.2045 14.9985 46.1159 14.9985 46.0274C14.9985 45.9388 15.0871 45.8502 15.1757 45.8502L25.8338 45.9683C25.9223 45.9683 26.0109 46.0569 26.0109 46.1455C26.0109 46.234 25.9519 46.3226 25.8338 46.3226Z" fill="black" />
                                                            <path d="M49.7186 46.293C47.1501 46.1454 44.0796 46.1749 41.0977 46.1749C40.1825 46.1749 39.2672 46.1749 38.411 46.1749C38.3225 46.1749 38.2339 46.0863 38.2339 45.9977C38.2339 45.9092 38.3225 45.8206 38.411 45.8206C39.2967 45.8206 40.1825 45.8206 41.0977 45.8206C44.0796 45.7911 47.1501 45.7911 49.7186 45.9387C49.8072 45.9387 49.8958 46.0273 49.8958 46.1158C49.8958 46.2339 49.8367 46.293 49.7186 46.293Z" fill="black" />
                                                            <path d="M25.5084 70.03C23.9732 69.971 22.1132 70.0005 20.3418 70.0005C18.5113 70.03 16.6218 70.03 14.9979 69.971C14.9094 69.971 14.8208 69.8824 14.8208 69.7938C14.8208 69.7053 14.9094 69.6167 14.9979 69.6167C16.6218 69.6757 18.5113 69.6462 20.3418 69.6462C22.1132 69.6167 23.9732 69.6167 25.5084 69.6757C25.597 69.6757 25.6856 69.7643 25.6856 69.8529C25.6856 69.9415 25.6265 70.03 25.5084 70.03Z" fill="black" />
                                                            <path d="M49.2758 69.9711C46.7367 69.853 42.7805 69.8234 38.411 69.853C38.3225 69.853 38.2339 69.7644 38.2339 69.6758C38.2339 69.5873 38.3225 69.4987 38.411 69.4987C42.7805 69.4692 46.7367 69.4987 49.2758 69.6168C49.3644 69.6168 49.4529 69.7053 49.4529 69.7939C49.4529 69.912 49.3939 69.9711 49.2758 69.9711Z" fill="black" />
                                                            <path d="M20.6375 94.0624C18.6299 94.0624 16.5928 94.0328 14.6737 93.9738C14.5852 93.9738 14.4966 93.8852 14.4966 93.7967C14.4966 93.7081 14.5852 93.6195 14.6737 93.6195C17.3604 93.7081 20.2537 93.7081 23.029 93.7081C23.8261 93.7081 24.6233 93.7081 25.4204 93.7081C25.509 93.7081 25.5975 93.7967 25.5975 93.8852C25.5975 93.9738 25.509 94.0624 25.4204 94.0624C24.6233 94.0624 23.8261 94.0624 23.029 94.0624C22.2318 94.0624 21.4347 94.0624 20.6375 94.0624Z" fill="black" />
                                                            <path d="M38.3808 93.8856C38.2922 93.8856 38.2036 93.797 38.2036 93.7084C38.2036 93.6199 38.2922 93.5313 38.3808 93.5313C42.0122 93.4427 45.6731 93.4132 49.3046 93.4722C49.3931 93.4722 49.4817 93.5608 49.4817 93.6494C49.4817 93.738 49.3931 93.8265 49.3046 93.8265C45.6731 93.7675 41.9827 93.797 38.3808 93.8856Z" fill="black" />
                                                            <path d="M27.6156 12.5163L27.481 0.605835L37.5746 0.673121L37.6755 12.8864L49.1486 13.3238L49.2495 22.8454L37.6755 22.5763V34.6886L28.1875 34.7895L27.8174 22.8118L15.3687 22.7108V12.6509L27.6156 12.5163Z" fill="white" />
                                                            <path d="M28.1862 35.4286C27.8498 35.4286 27.5806 35.1594 27.5806 34.823L27.2441 23.4172L15.3673 23.3162C15.0309 23.3162 14.7617 23.0471 14.7617 22.7106V12.6507C14.7617 12.3142 15.0309 12.045 15.3673 12.045L26.975 11.9105L26.874 0.605618C26.874 0.437391 26.9413 0.26916 27.0423 0.168224C27.1432 0.0672882 27.3114 0 27.4797 0L37.5733 0.0672923C37.9097 0.0672923 38.1789 0.33645 38.1789 0.672904L38.2462 12.2806L49.1473 12.7179C49.4837 12.7179 49.7193 12.9871 49.7193 13.3236L49.8202 22.8452C49.8202 23.0134 49.7529 23.1817 49.652 23.2826C49.5174 23.3835 49.3828 23.4508 49.2146 23.4508L38.2462 23.1817V34.6547C38.2462 34.9912 37.977 35.2603 37.6406 35.2603L28.1862 35.4286ZM15.973 22.105L27.8161 22.2059C28.1526 22.2059 28.4217 22.4751 28.4217 22.8116L28.7582 34.1837L37.035 34.0828V22.576C37.035 22.4078 37.1022 22.2396 37.2032 22.1387C37.3041 22.0377 37.4723 21.9704 37.6406 21.9704L48.609 22.2396L48.508 13.9292L37.6069 13.4918C37.2705 13.4918 37.035 13.2226 37.035 12.8862L36.9677 1.27852L28.0853 1.21124L28.1862 12.5161C28.1862 12.8525 27.9171 13.1217 27.5806 13.1217L15.973 13.2563V22.105V22.105Z" fill="black" />
                                                            <path d="M31 1.4762H36.9048V13.2857L35.1753 11.5563C32.5019 8.88285 31 5.25695 31 1.4762V1.4762Z" fill="#BEE8FF" />
                                                        </svg>

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
                                                        <img height={90} src={Tooth} alt="" />
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
                                                        <img height={90} src={Alternative} alt="" />
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
                                                        <img height={90} width={110} src={Fitness} alt="" />
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
                                                        <svg height="90" viewBox="0 0 71 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M62.0952 19H66.8095L69.9524 20.5146L71 43.7379L70 67L66.5 69.5L60 70L61.2247 62.1773C63.1946 49.5939 63.6359 36.8185 62.5387 24.1292L62.0952 19Z" fill="#BEE8FF" />
                                                            <path d="M22.0605 19.4743C21.8407 19.4743 21.6548 19.3221 21.621 19.1024C20.8602 14.1155 22.2972 8.165 25.1033 4.64881C27.5038 1.65667 30.7326 0 34.215 0C42.6843 0 48.4657 3.195 49.1081 18.7643C49.125 19.0179 48.9221 19.2207 48.6855 19.2207H48.6686C48.4319 19.2207 48.2291 19.0348 48.2291 18.7981C47.9248 11.6305 46.4879 6.81262 43.8338 4.05714C41.7207 1.85952 38.7455 0.879048 34.2319 0.879048C31.9667 0.879048 28.6533 1.62286 25.8133 5.18976C23.1424 8.5369 21.79 14.2 22.5169 18.9671C22.5507 19.2038 22.3817 19.4405 22.145 19.4743C22.1112 19.4743 22.0943 19.4743 22.0605 19.4743Z" fill="black" />
                                                            <path d="M10.007 71C7.77752 71 5.54808 70.8859 3.33565 70.4948C3.30162 70.4948 3.2846 70.4785 3.25056 70.4785C1.05516 69.6475 0 67.3499 0 63.4717L0.0510539 25.7487C0.0510539 24.1844 0.0510555 22.229 0.833913 20.6321C1.51466 19.2633 2.87615 18.5952 5.00348 18.5952C13.8021 18.6604 43.555 18.5463 54.9405 18.5952C65.9856 18.6278 58.425 18.807 66.0153 18.8722C67.513 18.8722 68.5511 19.2144 69.2999 19.9314C71.0018 21.5609 70.9848 24.9665 70.9678 31.1424C70.9678 31.843 70.9678 32.5763 70.9678 33.3422C70.9678 35.2976 70.9678 37.253 70.9848 39.2247C71.0188 47.7633 71.0529 56.5952 70.4061 65.2641C70.0488 70.1526 65.692 70.3156 61.8458 70.4622L61.4714 70.4785C54.5958 70.7555 47.1246 70.7066 39.211 70.6578C31.3483 70.6089 23.2134 70.56 15.7763 70.8533L15.1296 70.8859C13.4447 70.9348 11.7258 71 10.007 71ZM3.53988 69.6638C7.33504 70.3156 11.2834 70.1526 15.0955 70.006L15.7422 69.9734C23.1964 69.6801 31.3483 69.7289 39.228 69.7778C47.1246 69.8267 54.5958 69.8756 61.4543 69.5986L61.8287 69.5823C65.6409 69.4356 69.2319 69.3053 69.5382 65.1826C70.1849 56.5626 70.1509 47.7307 70.1168 39.2084C70.1168 37.253 70.0998 35.2813 70.0998 33.3259C70.0998 32.56 70.0998 31.8104 70.0998 31.1098C70.1168 25.3576 70.1338 21.8868 68.6873 20.5017C68.1086 19.9477 67.2747 19.687 66.0323 19.687C58.4591 19.6381 48.0266 19.6055 36.9815 19.5566C25.596 19.524 13.8362 19.4751 5.03752 19.4099C3.26758 19.4099 2.19541 19.8988 1.68485 20.958C0.987081 22.3919 0.987081 24.1518 0.987081 25.7161V25.765L0.936024 63.4228C0.884968 66.9425 1.75292 68.9631 3.53988 69.6638Z" fill="black" />
                                                            <path d="M32.2545 58.8456C32.0179 58.8456 31.815 58.6597 31.815 58.4061L31.5783 50.1059L22.94 50.0213C22.7033 50.0213 22.5005 49.8185 22.5005 49.5818V42.262C22.5005 42.0254 22.7033 41.8225 22.94 41.8225L31.3924 41.738L31.3079 33.5054C31.3079 33.387 31.3586 33.2687 31.4431 33.1842C31.5276 33.0997 31.646 33.049 31.7643 33.049L39.1179 33.0997C39.3545 33.0997 39.5574 33.3025 39.5574 33.5392L39.6081 41.9916L47.5533 42.3128C47.79 42.3297 47.976 42.5156 47.976 42.7523L48.0605 49.6832C48.0605 49.8016 48.0098 49.9199 47.9252 50.0044C47.8407 50.089 47.7224 50.1397 47.6041 50.1397L39.6081 49.9537V58.3047C39.6081 58.5413 39.4052 58.7442 39.1686 58.7442L32.2545 58.8456C32.2545 58.8456 32.2714 58.8456 32.2545 58.8456ZM23.3795 49.1423L32.001 49.2268C32.2376 49.2268 32.4405 49.4128 32.4405 49.6663L32.6772 57.9666L38.6952 57.899V49.5311C38.6952 49.4128 38.746 49.2944 38.8305 49.2099C38.915 49.1254 39.0333 49.0916 39.1517 49.0916L47.1307 49.2775L47.0631 43.2256L39.1179 42.9044C38.8812 42.8875 38.6952 42.7016 38.6952 42.4649L38.6445 34.0294L32.1869 33.9787L32.2714 42.2113C32.2714 42.4649 32.0855 42.6509 31.8319 42.6678L23.3795 42.7523V49.1423V49.1423Z" fill="black" />
                                                            <path d="M4.15284 23C4.06793 23 4 22.8741 4 22.7167C4 22.5593 4.06793 22.4333 4.15284 22.4333C18.5193 21.8037 34.533 21.9926 48.6617 22.1815C54.8091 22.2444 60.6168 22.3389 65.8472 22.3389C65.9321 22.3389 66 22.4648 66 22.6222C66 22.7796 65.9321 22.9056 65.8472 22.9056C60.5998 22.9056 54.7921 22.8426 48.6617 22.7481C34.55 22.5593 18.5363 22.3704 4.15284 23C4.15284 23 4.16982 23 4.15284 23Z" fill="black" />
                                                            <path d="M65.8472 67C65.9321 67 66 66.8741 66 66.7167C66 66.5593 65.9321 66.4333 65.8472 66.4333C51.4807 65.8037 35.467 65.9926 21.3383 66.1815C15.1909 66.2444 9.38318 66.3389 4.15283 66.3389C4.06792 66.3389 4 66.4648 4 66.6222C4 66.7796 4.06792 66.9056 4.15283 66.9056C9.40016 66.9056 15.2079 66.8426 21.3383 66.7481C35.45 66.5593 51.4637 66.3704 65.8472 67C65.8302 67 65.8472 67 65.8472 67Z" fill="black" />
                                                            <path d="M4.04684 25C4.02082 25 4 24.8741 4 24.7167C4 24.5593 4.02082 24.4333 4.04684 24.4333C8.44947 23.8037 13.3569 23.9926 17.6867 24.1815C19.5705 24.2444 21.3503 24.3389 22.9532 24.3389C22.9792 24.3389 23 24.4648 23 24.6222C23 24.7796 22.9792 24.9056 22.9532 24.9056C21.3451 24.9056 19.5653 24.8426 17.6867 24.7481C13.3621 24.5593 8.45467 24.3704 4.04684 25C4.04684 25 4.05204 25 4.04684 25Z" fill="black" />
                                                        </svg>


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
                                                        <img height={90} src={Medicine2} alt="" />
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
                                                        <img height={90} src={Abroad} alt="" />
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
                                                            <input type="tel" className='krankenInputStyle krankenInputStepStyle p-3' placeholder='Telefonnummer' name="" id="" />
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
                                            <input required type="text" onChange={e => setVorname(e.target.value)} className="krankenInputStyle krankenInputStepStyle p-2" />
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <div className='pb-2'>
                                            <span style={{ color: "#464646" }} className='fw-500'>Nachname</span>
                                        </div>
                                        <div>
                                            <input required type="text" onChange={e => setNachname(e.target.value)} className="krankenInputStyle krankenInputStepStyle p-2" />
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
                                            <input required type="text" onChange={e => setAdresse(e.target.value)} className="krankenInputStyle krankenInputStepStyle p-2" />
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <div className='pb-2'>
                                            <span style={{ color: "#464646" }} className='fw-500'>E-Mail-Adresse</span>
                                        </div>
                                        <div>
                                            <input required type="email" onChange={e => setEmail(e.target.value)} className="krankenInputStyle krankenInputStepStyle p-2" />
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <div className='pb-2'>
                                            <span style={{ color: "#464646" }} className='fw-500'>Telefonnummer</span>
                                        </div>
                                        <div>
                                            <input required type="tel" onChange={e => setTelefonnummer(e.target.value)} className="krankenInputStyle krankenInputStepStyle p-2" />
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