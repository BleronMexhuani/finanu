import React from 'react'
import {ReactComponent as XBtn } from "../../assets/images/xButton.svg"
import Male from '../../assets/images/rechtsschutzImgs/Male-01.svg'
import Female from '../../assets/images/rechtsschutzImgs/Female-01.svg'
import { ReactComponent as Name } from '../../assets/images/modalIcons/name.svg'
import { ReactComponent as ModalEmailIcon } from '../../assets/images/modalIcons/emailIcon.svg'
import { ReactComponent as Phone } from '../../assets/images/modalIcons/phone.svg'
import { ReactComponent as Post } from '../../assets/images/modalIcons/post.svg'
import { ReactComponent as Location } from '../../assets/images/modalIcons/location.svg'
import { ReactComponent as Street } from '../../assets/images/modalIcons/street.svg'

function Modal(props) {

    return (
        <div>
            <div className="hausratModal">
                <div className="hausratModalContent p-4 p-md-5">
                    <div className="hausratModalScroll px-2">
                        <div className='modalXBtn'>
                            <span style={{ cursor: "pointer" }} onClick={() => { props.setopenModal(false) }}>
                                <XBtn />
                            </span>
                        </div>
                        <div className="pb-4 pt-3 pt-md-0">
                            <div className="row g-4 text-start">
                                <div className="col-12 col-sm-6">
                                    <div >
                                        <div className='pb-2'>
                                            <span className='fw-500'>Gesamtkaufpreis</span>
                                        </div>
                                        <div>
                                            <input type="number" value={props.aparatament_price} disabled className='hausratModalInputs form-control' />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <div >
                                        <div className='pb-2'>
                                            <span className='fw-500'>Jährliches Einkommen</span>
                                        </div>
                                        <div>
                                            <input type="number" value={props.yearly_income} disabled className='hausratModalInputs form-control' />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div >
                                        <div className='pb-2'>
                                            <span className='fw-500'>Eigenkapital</span>
                                        </div>
                                        <div>
                                            <input type="number" value={props.capital} disabled className='hausratModalInputs form-control' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='text-start'>
                            <div className='pb-2'>
                                <span className='fw-500'>Bitte geben Sie hier ihre Angaben ein.</span>
                            </div>
                            <div className='pb-4'>
                                <div className="row g-4">
                                    <div className="col-6 text-center">
                                        <label htmlFor="female" className='containerRes2 w-100 h-100'>
                                            <input type="radio" id='female' name='who3' hidden />
                                            <div className='checkmarkRes2 checkmarkModalImgDiv'><img src={Female} className="img-fluid" alt="" /></div>
                                        </label>
                                    </div>
                                    <div className="col-6 text-center">
                                        <label htmlFor="male" className='containerRes2 w-100 h-100'>
                                            <input type="radio" id='male' name='who3' hidden />
                                            <div className='checkmarkRes2 checkmarkModalImgDiv'><img src={Male} className="img-fluid" alt="" /></div>
                                        </label>
                                    </div>
                                </div>
                            </div>
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
                                <div className="row g-4">
                                    <div className="col-12 col-md-6">
                                        <div className='pb-2'>
                                            <span className='fw-500'>Postleitzahl</span>
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
                            <div className='pb-4'>
                                <div className="row g-4">
                                    <div className="col-12 col-md-6">
                                        <div className='pb-2'>
                                            <span className='fw-500'>Geburtsdatum</span>
                                        </div>
                                        <div className="">
                                            <input className='krankenInputStyle krankenInputStepStyle p-2 form-control' type="date" name="" placeholder='PLZ' id="" />
                                        </div>
                                    </div>
                                    <div className='col-12 col-md-6'>
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
                            <div className='text-center'>
                                <button style={{ background: '#34ACE3' }} type='button' onClick={() => { props.setopenModal(false) }} className='step3RechtssBtn'>Vergleich anfordern</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal