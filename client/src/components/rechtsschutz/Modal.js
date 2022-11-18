import React from 'react'
import XBtn from "../../assets/images/xButton.svg"
import Male from '../../assets/images/rechtsschutzImgs/Male-01.svg'
import Female from '../../assets/images/rechtsschutzImgs/Female-01.svg'

function Modal(props) {
    return (
        <>
            <div className="hausratModal">
                <div className="hausratModalContent p-4 p-md-5">
                    <div className="hausratModalScroll p-2 my-3">
                        <div className='modalXBtn'>
                            <span style={{ cursor: "pointer" }} onClick={() => { props.setopenModal(false) }}>
                                <img src={XBtn} alt="" />
                            </span>
                        </div>
                        <div className='text-start'>
                            <div className='pb-2'>
                                <span className='fw-500'>Bitte geben Sie hier ihre Angaben ein.</span>
                            </div>
                            <div className='pb-4'>
                                <div className="row g-4">
                                    <div className="col-6 text-center">
                                        <label htmlFor="femaleModalRes" className='containerRes2 w-100 h-100'>
                                            <input type="radio" id='femaleModalRes' name='who3' hidden />
                                            <div className='checkmarkRes2 checkmarkModalImgDiv'><img src={Female} className="img-fluid" alt="" /></div>
                                        </label>
                                    </div>
                                    <div className="col-6 text-center">
                                        <label htmlFor="maleModalRes" className='containerRes2 w-100 h-100'>
                                            <input type="radio" id='maleModalRes' name='who3' hidden />
                                            <div className='checkmarkRes2 checkmarkModalImgDiv'><img src={Male} className="img-fluid" alt="" /></div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className='pb-4'>
                                <div className='pb-2'>
                                    <span className='fw-500'>Vorname und Nachname</span>
                                </div>
                                <div>
                                    <input className='step3InputRechtss hausratModalInputs form-control' type="text" name="" placeholder='Vorname und Nachname' id="" />
                                </div>
                            </div>
                            <div className='pb-4'>
                                <div className="row g-4">
                                    <div className="col-12 col-md-6">
                                        <div className='pb-2'>
                                            <span className='fw-500'>Postleitzahl</span>
                                        </div>
                                        <div className="">
                                            <input className='step3InputRechtss hausratModalInputs form-control' type="text" name="" placeholder='PLZ' id="" />
                                        </div>
                                    </div>
                                    <div className='col-12 col-md-6'>
                                        <div className='pb-2'>
                                            <span className='fw-500'>Ort</span>
                                        </div>
                                        <div className="">
                                            <input className='step3InputRechtss hausratModalInputs form-control' type="text" name="" placeholder='Ort' id="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='pb-4'>
                                <div className='pb-2'>
                                    <span className='fw-500'>Strasse</span>
                                </div>
                                <div>
                                    <input className='step3InputRechtss hausratModalInputs form-control' type="text" name="" placeholder='Strasse' id="" />
                                </div>
                            </div>
                            <div className='pb-4'>
                                <div className="row g-4">
                                    <div className="col-12 col-md-6">
                                        <div className='pb-2'>
                                            <span className='fw-500'>Geburtsdatum</span>
                                        </div>
                                        <div className="">
                                            <input className='step3InputRechtss hausratModalInputs form-control' type="date" name="" placeholder='PLZ' id="" />
                                        </div>
                                    </div>
                                    <div className='col-12 col-md-6'>
                                        <div className='pb-2'>
                                            <span className='fw-500'>Telefonnummer</span>
                                        </div>
                                        <div className="">
                                            <input className='step3InputRechtss hausratModalInputs form-control' type="tel" name="" placeholder='Telefonnummer' id="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='pb-4'>
                                <div className='pb-2'>
                                    <span className='fw-500'>E-mail</span>
                                </div>
                                <div>
                                    <input className='step3InputRechtss hausratModalInputs form-control' type="text" name="" placeholder='E-mail' id="" />
                                </div>
                            </div>
                            <div className='text-center'>
                                <button style={{ background: '#34ACE3' }} type='button' onClick={() => { props.setopenModal(false) }} className='step3RechtssBtn'>Einreichen</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal