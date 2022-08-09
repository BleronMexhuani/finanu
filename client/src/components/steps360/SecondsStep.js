import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid'

function SecondsStep(props) {
    const [regions, setRegions] = useState([]);
    // const [inputValue, setInputValue] = useState("")
    const [isFocused, setIsFocused] = useState(false)
    const [filter, setFilter] = useState([]);
    const [isEmpty, setIsEmpty] = useState(false)
    const [ort, setOrt] = useState(null);
    const [plz, setPlz] = useState(null);
    const [commune, setCommune] = useState(null);
    const [kanton, setKanton] = useState(null);
    const [region, setRegion] = useState(null);

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

    useEffect(() => {
        const searchRegion = (e) => {
            const region = regions.filter((element) => (element.plz + " " + element.ort).includes(props.inputValue))
            if (props.inputValue === '' || props.inputValue === null) {
                setFilter([]);
                setIsEmpty(true)
            }
            else {
                setFilter(region);
                setIsEmpty(false)
            }
        }
        searchRegion()

    }, [props.inputValue, regions])

    
    const handleInput = (e) => {
        setOrt(e.target.getAttribute('data-ort'));
        setPlz(e.target.getAttribute('data-plz'));
        setCommune(e.target.getAttribute('data-commune'));
        setKanton(e.target.getAttribute('data-kanton'));
        setRegion(e.target.getAttribute('data-region'));
        document.getElementById('inputChange').value = e.target.getAttribute('value');
        props.setInputValue(e.target.getAttribute('value'))
        setIsFocused(false)

    }

    return (
        <div>
            <div className="col-12 col-sm-9 col-md-7 col-lg-6 col-xl-4 stepsBlueDiv p-5 mx-auto">
                <div className='h-100 d-flex justify-content-center align-items-center text-start'>
                    <div className='w-100'>
                        <div className='pb-2'>
                            <span>Wo wohnen Sie?</span>
                        </div>
                        <div style={{ position: 'relative' }}>
                            <div>
                                <input type="text" id="inputChange" onChange={(e) => {props.setInputValue(e.target.value)}} value={props.inputValue} onFocus={showSelectDropdown} onBlur={hideSelectDropdown} placeholder='Postleitzahl' className='krankenInputStyle' />
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
                        <div className='pt-4 row g-3'>
                            <div className="col-6">
                                <button className='stepsNextBtn' onClick={props.toPrev}>Zurück</button>
                            </div>
                            <div className="col-6">
                                <button className='stepsNextBtn' onClick={props.toNext}>Weiter</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SecondsStep