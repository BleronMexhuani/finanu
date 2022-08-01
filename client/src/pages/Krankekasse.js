import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Krankekasse() {

    const [regions, setRegions] = useState([]);
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

    const handleSubmit = async () => {

        const result = await axios.get(`http://localhost:5000/krankenkasse/compareInputs/${insuranceNum}/${kanton}/${region}/${jahrgang}/${accident}/${model}/${franchise}/${tarifbezeichnung}`);
        setKrankenkasse(result.data);
        
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

    //Get the insurances for the selected region 
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

    const setPlzOrtCommune = async (e) => {

        setOrt(e.target.options[e.target.selectedIndex].getAttribute('data-ort'));
        setPlz(e.target.options[e.target.selectedIndex].getAttribute('data-plz'));
        setCommune(e.target.options[e.target.selectedIndex].getAttribute('data-commune'));
        setKanton(e.target.options[e.target.selectedIndex].getAttribute('data-kanton'));
        setRegion(e.target.options[e.target.selectedIndex].getAttribute('data-region'));

        document.getElementById('insurances').value = '';

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


    return (
        <>
            <div>Krankekasse Calculator</div>
            <div className='row justify-content-center'>
                <div className=' col-3'>
                    <h3>PLZ oder WohnortPflichtfeld</h3>
                    <select onChange={(e) => setPlzOrtCommune(e)} className='form-control ' name="asd" id="123">
                        <option value=""></option>
                        {regions.map(element => {
                            return (
                                <option key={element.id} value={element.plz + element.ort} data-region={element.region} data-kanton={element.kanton} data-ort={element.ort} data-plz={element.plz} data-commune={element.commune}>{element.plz + " " + element.ort}</option>
                            )
                        })}
                    </select>
                </div>
                <div className='col-3'>
                    <h3>Insurance</h3>
                    <select className='form-control' onChange={(e) => setInsuranceNum(e.target.value)} name="" id="insurances">
                        <option value="" ></option>
                        {insurances.map(element => {
                            return (
                                <option key={element.id} value={element.number} >{element.name}</option>
                            )
                        })}
                    </select>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className='col-3'>
                    <h3>Jahrgang</h3>
                    <input type="number" onChange={(e) => setJahrgang(e.target.value)} className='form-control' />
                </div>
                <div className='col-3'>
                    <h3>Gewünschte Franchise</h3>
                    <select name="" onChange={(e) => setFranchise(e.target.value)} id="" className="form-control">
                        <option value="0">0 CHF</option>
                        <option value="300">300 CHF</option>
                        <option value="500">500 CHF</option>
                        <option value="1000">1000 CHF</option>
                        <option value="1500">1500 CHF</option>
                        <option value="2000">2000 CHF</option>
                        <option value="2500">2500 CHF</option>
                    </select>
                </div>
                <div className="col-3">
                    <h3>Unfalldeckung</h3>
                    <input type="radio" id='' name='accident' onClick={() => setAccident('MIT-UNF')} value={'yes'} />
                    <label>Yes</label>
                    <br />
                    <input type="radio" id='' name='accident' onClick={() => setAccident('OHN-UNF')} value={'no'} />
                    <label>No</label>
                </div>
                <div className='col-4'>
                    <h3>  Aktuelles Versicherungsmodell</h3>
                    <select name="" id="" onChange={(e) => setmodels(e)} className="form-control">
                        <option value=""></option>
                        {actualmodels.map(element => {
                            return (
                                <option key={element.id} data-tariftyp={element.Tariftyp} value={element.Tarifbezeichnung} >{element.Tarifbezeichnung}</option>
                            )
                        })}
                    </select>
                </div>
            </div>

            <div className='my-3 w-100'>
                <button onClick={handleSubmit} className='btn btn-primary'>Submit</button>
            </div>
            <div className='container'>
                {krankenkasse.length > 0 ?

                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Krankenkasse</th>
                                <th scope="col">Model</th>
                                {/* <th scope="col">Sparpotenzial</th> */}
                                <th scope="col">Monat</th>
                                <th scope="col">Jahr</th>
                            </tr>
                        </thead>
                        <tbody>
                            {krankenkasse.map((element, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{element.name}</td>
                                        <td>{element.Tarifbezeichnung}</td>
                                        <td>{element.Pramie}</td>
                                        <td>{(element.Pramie * 12).toFixed(2)}</td>
                                    </tr>
                                )
                            })}

                        </tbody>
                    </table>
                    : null}
            </div>
        </>
    )

}


export default Krankekasse