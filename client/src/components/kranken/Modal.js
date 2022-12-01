import React from 'react'
import {ReactComponent as XBtn } from "../../assets/images/xButton.svg"
import { ReactComponent as Name } from '../../assets/images/modalIcons/name.svg'
import { ReactComponent as ModalEmailIcon } from '../../assets/images/modalIcons/emailIcon.svg'
import { ReactComponent as Phone } from '../../assets/images/modalIcons/phone.svg'
import { ReactComponent as Post } from '../../assets/images/modalIcons/post.svg'
import { ReactComponent as Location } from '../../assets/images/modalIcons/location.svg'
import { ReactComponent as Street } from '../../assets/images/modalIcons/street.svg'

function Modal(props) {
    return (
        <>
            <div className="hausratModal">
                <div className="hausratModalContent p-4 p-md-5 mx-4">
                    <div className="hausratModalScroll px-2">
                        <div className='modalXBtn'>
                            <span style={{ cursor: "pointer" }} onClick={props.toggleModal}>
                                <XBtn />
                            </span>
                        </div>
                        <div className='text-start'>
                            <div className='pb-4'>
                                <div className='pb-2'>
                                    <span className='fw-500'>Vorname und Nachname</span>
                                </div>
                                <div className='krankenInputStyle krankenInputStepStyle p-2 '>
                                    <div className="row gx-2">
                                        <div className="col-auto">
                                            <Name height="22" />
                                        </div>
                                        <div className="col">
                                            <input className='form-control step3InputRechtss p-0 shadow-none' type="text" name="" placeholder='Vorname und Nachname' id="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='pb-4'>
                                <div className='pb-2'>
                                    <span className='fw-500'>E-mail</span>
                                </div>
                                <div className='krankenInputStyle krankenInputStepStyle p-2 '>
                                    <div className="row gx-2">
                                        <div className="col-auto">
                                            <ModalEmailIcon height="22" />
                                        </div>
                                        <div className="col">
                                            <input className='form-control step3InputRechtss p-0 shadow-none' type="email" name="" placeholder='E-mail' id="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='pb-4'>
                                <div className="row g-4">
                                    <div className='col-12'>
                                        <div className='pb-2'>
                                            <span className='fw-500'>Telefonnummer</span>
                                        </div>

                                        <div className='krankenInputStyle krankenInputStepStyle p-2 '>
                                            <div className="row gx-2">
                                                <div className="col-auto">
                                                    <Phone height="22" />
                                                </div>
                                                <div className="col">
                                                    <input className='form-control step3InputRechtss p-0 shadow-none' type="tel" name="" placeholder='Telefonnummer' id="" />

                                                </div>
                                            </div>
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
                                        </div>
                                        <div className='krankenInputStyle krankenInputStepStyle p-2 '>
                                            <div className="row gx-2">
                                                <div className="col-auto">
                                                    <Post height="22" />
                                                </div>
                                                <div className="col">
                                                    <input className='form-control step3InputRechtss p-0 shadow-none' type="text" name="" placeholder='PLZ' id="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-12 col-md-6'>
                                        <div className='pb-2'>
                                            <span className='fw-500'>Ort</span>
                                        </div>
                                        
                                        <div className='krankenInputStyle krankenInputStepStyle p-2 '>
                                            <div className="row gx-2">
                                                <div className="col-auto">
                                                    <Location height="22" />
                                                </div>
                                                <div className="col">
                                                    <input className='form-control step3InputRechtss p-0 shadow-none' type="text" name="" placeholder='Ort' id="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='pb-4'>
                                <div className='pb-2'>
                                    <span className='fw-500'>Strasse</span>
                                </div>
                                
                                <div className='krankenInputStyle krankenInputStepStyle p-2 '>
                                    <div className="row gx-2">
                                        <div className="col-auto">
                                            <Street height="22" />
                                        </div>
                                        <div className="col">
                                            <input className='form-control step3InputRechtss p-0 shadow-none' type="text" name="" placeholder='Strasse' id="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pb-4">
                                <div className="pb-2">
                                    <span className='firstBlueTitle fs-5'>Was interessiert dich?</span>
                                </div>
                                <div>
                                    <select name="" id="" className='krankenInputStyle form-select krankenInputStepStyle p-2'>
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