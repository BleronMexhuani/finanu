import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
function SelectCar(props) {

    const [isFocused, setIsFocused] = useState(false)
    const [inputValue, setInputValue] = useState("")
    const [inputModellValue, setinputModellValue] = useState("");
    const [marke, setMarke] = useState([]);
    const [markefilter, setMarkeFilter] = useState([]);
    const [modell, setModell] = useState([]);
    const [modellfilter, setModellFilter] = useState([]);

    const [actualMarke, setActualMarke] = useState("");

    useEffect(() => {
        async function callMarkeFunction() {
            let res = await axios.get("http://localhost:5000/automotorrad/getMarke");
            setMarke(res.data);

        }
        callMarkeFunction();
    }, [])


    const showSelectDropdown = () => {
        setIsFocused(true)
    }

    const hideSelectDropdown = () => {
        setTimeout(() => {
            setIsFocused(false)
        }, 100);
    }

    const setModellAxios = async (marke) => {
        let res = await axios.get(`http://localhost:5000/automotorrad/getModell/${marke}`);
        setModell(res.data);
    }


    const handleInput = (e) => {
        setActualMarke(e.target.getAttribute('value'));

        document.getElementById('inputChange').value = e.target.getAttribute('value')
        setInputValue(e.target.getAttribute('value'))
        setIsFocused(false)
        setModellAxios(e.target.getAttribute('value'));
    }
    const handleInputModell = (e) => {
        document.getElementById('inputChangeModell').value = e.target.getAttribute('value')
        setinputModellValue(e.target.getAttribute('value'));
    }
    useEffect(() => {
        const searchMarke = (e) => {
            let markes;
            markes = marke.filter((element) => ((element.Marke.substr(0, inputValue.length)).toLowerCase() === (inputValue).toLowerCase()));
            if (inputValue === '' || inputValue === null) {
                setMarkeFilter([]);
                // setIsEmpty(true)
            }
            else {
                setMarkeFilter(markes);
                // setIsEmpty(false)
            }
        }
        const searchModell = (e) => {
            let modells;

            modells = modell.filter((element) => ((element.MarkeTyp.substr(0, inputModellValue.length)).toLowerCase() === (inputModellValue).toLowerCase()));
            console.log(modells);
            if (inputModellValue === '' || inputModellValue === null) {
                setModellFilter([]);
                // setIsEmpty(true)
            }
            else {
                setModellFilter(modells);
                // setIsEmpty(false)
            }
        }
        searchMarke()
        searchModell();

    }, [inputValue, marke, inputModellValue])

    return (
        <div>
            <div>
                <div className="pb-4">
                    <span className='fs-4 fw-700'>
                        Neueinlösung eines Fahrzeuges
                    </span>
                </div>
                <div className="pb-5">
                    <div className="text-center">
                        <div style={{ position: 'relative' }}>
                            <div className="pb-4">
                                <input type="text" autoComplete='off' onChange={(e) => setInputValue(e.target.value)} className='krankenInputStyle krankenInputStepStyle p-2 p-3 autoCheckbox' placeholder='Marke' id="inputChange" onFocus={showSelectDropdown} onBlur={hideSelectDropdown} />
                            </div>
                            {(isFocused) && (
                                <div className='krankenSelectDropdown autoCheckbox autoSelectDropdown'>

                                    {markefilter.map(element => {

                                        return (
                                            <div className='selectOptionStyle' key={uuidv4()} onClick={handleInput} value={element.Marke} >
                                                {element.Marke}
                                            </div>
                                        )
                                    })}


                                </div>
                            )}
                        </div>

                        <div className="pb-4" style={{ position: 'relative' }}>
                            <input type="text" className='krankenInputStyle krankenInputStepStyle p-2 p-3 autoCheckbox' id='inputChangeModell' onChange={(e) => setinputModellValue(e.target.value)} placeholder='Modell' />
                            <div className='krankenSelectDropdown autoCheckbox autoSelectDropdown'>
                                {modellfilter.map(element => {

                                    return (
                                        <div className='selectOptionStyle' key={uuidv4()} onClick={handleInputModell} value={element.MarkeTyp} >
                                            {element.MarkeTyp}
                                        </div>
                                    )
                                })}


                            </div>
                        </div>
                        <div className="">
                            <input type="text" className='krankenInputStyle krankenInputStepStyle p-2 p-3 autoCheckbox' placeholder='Modelljahr' />
                        </div>
                    </div>
                </div>
                <div className='text-center'>
                    <button className='autoBtnStyle' onClick={() => { props.setstep(props.step + 1) }}>
                        Weiter
                    </button>
                </div>

            </div>
        </div>


    )
}

export default SelectCar