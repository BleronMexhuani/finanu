import React from 'react'
import { useState } from 'react';

function PensionChart() {
    const [monthly, setMonthly] = useState(500);
    const [age, setAge] = useState(25);
    const [amount, setAmount] = useState(5000);
    const [risk, setRisk] = useState(2);
    const [lowRisk, setLowRisk] = useState([]);
    const [mediumRisk, setMediumRisk] = useState([]);
    const [highRisk, setHighRisk] = useState([]);

    return (
        <div>
            <div className='container-xl px-4 px-xl-0'>
                
                <div className='pensionChartDiv py-4 px-5'>
                    <div>
                        <div className="row g-0">
                            <div className="col-12 col-md-7">
                                <div className='p-4 text-start'>
                                    <div className='pb-5'>
                                        <span className='fs-5 pensionChartTitle'>Berechne jetzt deine 3. Säule</span>
                                    </div>
                                    <div className="row g-4 gy-5">
                                        <div className="col-12 col-md-6">
                                            <div className='pb-3'>
                                                <span className='fw-600'>
                                                    What is your gender?
                                                </span>
                                            </div>
                                            <div>
                                                <div className="row g-0">
                                                    <div className="col-6">
                                                        <label htmlFor="male">
                                                            <input type="radio" id='male' name='gender' />
                                                            <span className='ps-2 fw-500'>Frau</span>
                                                        </label>
                                                    </div>
                                                    <div className="col-6">
                                                        <label htmlFor="female">
                                                            <input type="radio" id='female' name='gender' />
                                                            <span className='ps-2 fw-500'>Herr</span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <div className='pb-3'>
                                                <div className="row g-0">
                                                    <div className="col">
                                                        <div>
                                                            <span className='fw-600'>Monatlich Einzahlung</span>

                                                        </div>
                                                    </div>
                                                    <div className="col-auto">

                                                        <span className='fw-500'>CHF {monthly}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <input type="range" step={50} min={100} max={1000} defaultValue={500} onChange={(e) => setMonthly(e.target.value)} className="form-range" placeholder='Monthly' />
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 mt-auto">
                                            <div className='pb-3'>
                                                <div>
                                                    <span className='fw-600'>Ich bin {age} Jahre alt</span>

                                                </div>
                                            </div>
                                            <div>
                                                <input type="range" step={1} min={18} max={63} defaultValue={30} onChange={(e) => setAge(e.target.value)} className="form-range" placeholder='Monthly' />
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <div className='pb-3'>
                                                <div className="row g-0">
                                                    <div className="col">
                                                        <div>
                                                            <span className='fw-600'>Einmalzahlung/Transfer 3. Säule</span>

                                                        </div>
                                                    </div>
                                                    <div className="col-auto">

                                                        <span className='fw-500'>CHF {amount}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <input type="range" step={5000} min={0} max={100000} defaultValue={1000} onChange={(e) => setAmount(e.target.value)} className="form-range" />
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <div className='pb-3'>
                                                <span className='fw-600'>
                                                Ihr Arbeitsverhältnis 
                                                </span>
                                            </div>
                                            <div>
                                                <div className="row g-0">
                                                    <div className="col-6">
                                                        <label htmlFor="male">
                                                            <input type="radio" id='male' name='empolyment' />
                                                            <span className='ps-2 fw-500'>Beschäftigt</span>
                                                        </label>
                                                    </div>
                                                    <div className="col-6">
                                                        <label htmlFor="female">
                                                            <input type="radio" id='female' name='empolyment' />
                                                            <span className='ps-2 fw-500'>Selbstständiger</span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <div className='pb-3'>
                                                <div className="row g-0">
                                                    <div className="col">
                                                        <div>
                                                            <span className='fw-600'>Risikostufe</span>

                                                        </div>
                                                    </div>
                                                    <div className="col-auto">

                                                        <span className='fw-500'>{risk}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <input type="range" step={1} min={1} max={3} defaultValue={2} onChange={(e) => setRisk(e.target.value)} className="form-range" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-5">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PensionChart