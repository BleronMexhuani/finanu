import React from 'react'
import XBtn from "../../assets/images/xButton.svg"


function Modal(props) {
    return (
        <>
            <div className="hausratModal">
                <div className="hausratModalContent p-4 p-md-5 mx-4">
                    <div className="hausratModalScroll p-2 my-3">
                        <div className='modalXBtn'>
                            <span style={{ cursor: "pointer" }} onClick={props.toggleModal}>
                                <img src={XBtn} alt="" />
                            </span>
                        </div>
                        <div className='text-start'>
                            <div className='pb-4'>
                                <div className='pb-2'>
                                    <span className='fw-500'>Vorname und Nachname</span>
                                </div>
                                <div>
                                    <input className='step3InputRechtss hausratModalInputs form-control' type="text" name="" placeholder='Vorname und Nachname' id="" />
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
                            <div className='pb-4'>
                                <div className="row g-4">
                                    <div className='col-12'>
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
                            <div className="pb-4">
                                <div className="pb-2">
                                    <span className='firstBlueTitle fs-5'>Was interessiert dich?</span>
                                </div>
                                <div>
                                    <select name="" id="" className='step3InputRechtss hausratModalInputs form-control'>
                                        <option value="Vorsage &amp; Pensionierung">Vorsage &amp; Pensionierung</option>
                                        <option value="Wohnen, Eigenheim &amp; Hypotheken">Wohnen, Eigenheim &amp; Hypotheken</option>
                                        <option value="Auto &amp; Motorrad">Auto &amp; Motorrad</option><option value="Krankheit &amp; Unfall">Krankheit &amp; Unfall</option>
                                        <option value="Rechtsschutz">Rechtsschutz</option>
                                        <option value="Finanzen &amp; Budget">Finanzen &amp; Budget</option>
                                    </select>
                                </div>
                            </div>
                            <div className='text-center'>
                                <button style={{ background: '#34ACE3' }} type='button' onClick={() => { props.setopenModal(false) }} className='step3RechtssBtn px-4'>Einreichen</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal