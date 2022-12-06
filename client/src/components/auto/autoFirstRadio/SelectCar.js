import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
function SelectCar(props) {

    const [isFocused, setIsFocused] = useState(false)
    const [isFocused1, setIsFocused1] = useState(false)
    const [isEmpty, setIsEmpty] = useState(false)
    const [isEmpty1, setIsEmpty1] = useState(false)
    const [isFocused2, setIsFocused2] = useState(false)
    const [isEmpty2, setIsEmpty2] = useState(false)

    const [inputValue, setInputValue] = useState("")
    const [inputModellValue, setinputModellValue] = useState("");
    const [inputModellJahrValue, setinputModellJahrValue] = useState("");

    const [marke, setMarke] = useState([]);
    const [markefilter, setMarkeFilter] = useState([]);
    const [modell, setModell] = useState([]);
    const [modellfilter, setModellFilter] = useState([]);
    const [modelljahr, setModelljahr] = useState([]);
    const [modelljahrfilter, setModelljahrfilter] = useState([]);

    const [actualMarke, setActualMarke] = useState("");

    useEffect(() => {
        async function callMarkeFunction() {
            let res = await axios.get("https://node.kutiza.com/automotorrad/getMarke");
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
    const showSelectDropdown1 = () => {
        setIsFocused1(true)
    }

    const hideSelectDropdown1 = () => {
        setTimeout(() => {
            setIsFocused1(false)
        }, 100);
    }
    const showSelectDropdown2 = () => {
        setIsFocused2(true)
    }

    const hideSelectDropdown2 = () => {
        setTimeout(() => {
            setIsFocused2(false)
        }, 100);
    }
    const setModellAxios = async (marke) => {
        let res = await axios.get(`https://node.kutiza.com/automotorrad/getModell/${marke}`);
        setModell(res.data);
    }
    const callModellJahrAxios = async (MarkeTyp) => {


        let res = await axios.get(`https://node.kutiza.com/automotorrad/getModellJahr/${actualMarke}/${MarkeTyp}`);
        setModelljahr(res.data);
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
        setIsFocused1(false)

        setinputModellValue(e.target.getAttribute('value'));
        callModellJahrAxios(e.target.getAttribute('value'))
    }

    const handleInputModellJahr = (e) => {
        document.getElementById('inputChangeModellJahr').value = e.target.getAttribute('value')
        setIsFocused2(false)

        setinputModellJahrValue(e.target.getAttribute('value'));
        callModellJahrAxios(e.target.getAttribute('value'))
    }

    useEffect(() => {
        const searchMarke = (e) => {
            let markes;
            markes = marke.filter((element) => ((element.Marke.substr(0, inputValue.length)).toLowerCase() === (inputValue).toLowerCase()));
            if (inputValue === '' || inputValue === null) {
                setMarkeFilter([]);
                setIsEmpty(true)
            }
            else {
                setMarkeFilter(markes);
                setIsEmpty(false)
            }
        }
        const searchModell = (e) => {
            let modells;

            modells = modell.filter((element) => (
                ((element.MarkeTyp.substr(0, inputModellValue.length))).toLowerCase() === (inputModellValue).toLowerCase())
            );

            if (inputModellValue === '' || inputModellValue === null) {
                setModellFilter([]);
                setIsEmpty1(true)
            }
            else {
                setModellFilter(modells);
                setIsEmpty1(false)
            }
        }
        const searchModellJahr = (e) => {
            let modellsjahr;

            modellsjahr = modelljahr.filter((element) => (
                ((element.Erstellung.substr(0, inputModellValue.length))).toLowerCase() === (inputModellValue).toLowerCase())
            );

            if (inputModellValue === '' || inputModellValue === null) {
                setModellFilter([]);
                // setIsEmpty1(true)
            }
            else {
                setModellFilter(modellsjahr);
                // setIsEmpty1(false)
            }
        }
        searchModellJahr();
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
                            {(isFocused && !isEmpty) && (
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
                            <input type="text" autoComplete='off' className='krankenInputStyle krankenInputStepStyle p-2 p-3 autoCheckbox' id='inputChangeModell' onChange={(e) => setinputModellValue(e.target.value)} placeholder='Modell' onFocus={showSelectDropdown1} onBlur={hideSelectDropdown1} />
                            {(isFocused1 && !isEmpty1) && (

                                <div className='krankenSelectDropdown autoCheckbox autoSelectDropdown'>

                                    {modellfilter.map(element => {

                                        return (
                                            <option className='selectOptionStyle' key={uuidv4()} onClick={handleInputModell} value={element.MarkeTyp} >
                                                {element.MarkeTyp}
                                            </option>
                                        )
                                    })}


                                </div>
                            )}

                        </div>
                        <div className="pb-4" style={{ position: 'relative' }}>
                            <select name="" className='form-control krankenInputStyle krankenInputStepStyle p-2 p-3 autoCheckbox mx-auto' placeholder='Modelljahr' id='inputChangeModellJahr' onChange={(e) => setinputModellJahrValue(e.target.value)} onFocus={showSelectDropdown2} onBlur={hideSelectDropdown2}>
                                {/* <input type="text" autoComplete='off' className='krankenInputStyle krankenInputStepStyle p-2 p-3 autoCheckbox'  id='inputChangeModellJahr' onChange={(e) => setinputModellJahrValue(e.target.value)} onFocus={showSelectDropdown2} onBlur={hideSelectDropdown2} /> */}

                                {(isFocused2 && !isEmpty2) && (
                                    <>

                                        {modelljahr.map(element => {
                                            return (
                                                <option className='selectOptionStyle' key={uuidv4()} onClick={handleInputModellJahr} value={element.Erstellung} >
                                                    {element.Erstellung}
                                                </option>
                                            )
                                        })}

                                    </>

                                )}

                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center'>
                <button className='autoBtnStyle' onClick={() => { props.setstep(props.step + 1) }}>
                    Weiter
                </button>
            </div>

        </div>

    )
}

export default SelectCar