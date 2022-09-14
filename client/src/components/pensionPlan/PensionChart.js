import React from 'react'
import { useState, useEffect } from 'react';
import Chart from "react-apexcharts";

function PensionChart() {
    const [monthly, setMonthly] = useState(500);
    const [age, setAge] = useState(40);
    const [amount, setAmount] = useState(5000);
    const [risk, setRisk] = useState(2);
    const [lowRisk, setLowRisk] = useState([]);
    const [mediumRisk, setMediumRisk] = useState([]);
    const [highRisk, setHighRisk] = useState([]);
    const [ageArray, setAgeArray] = useState([]);
    const [monthlyWage, setmonthyWage] = useState(0)



    useEffect(() => {

        const lowi = [];
        const midi = [];
        const highi = [];
        let highP, mediumP, lowP;
        if (risk == 3) {
            highP = 11;
            mediumP = 7.5;
            lowP = 4.5;
        }
        else if (risk == 2) {
            highP = 8.5;
            mediumP = 4.8;
            lowP = 1.2;
        }
        else {
            highP = 2.25;
            mediumP = 1.75;
            lowP = 1.25;
        }
        setmonthyWage(parseFloat(monthly) * 12)
        let pensionAge = (65 - age);

        let totalMin = parseFloat(amount) + parseFloat(monthlyWage);
        let totalMedium = parseFloat(amount) + parseFloat(monthlyWage);
        let totalMax = parseFloat(amount) + parseFloat(monthlyWage);

        lowi.push(parseFloat(totalMin.toFixed(2)));
        midi.push(parseFloat(totalMedium.toFixed(2)));
        highi.push(parseFloat(totalMax.toFixed(2)));


        for (let i = 0; i < pensionAge; i++) {
            //Total for minimum
            totalMin = totalMin + (lowP / 100) * totalMin;
            lowi.push(parseFloat(totalMin.toFixed(2)));
            totalMin = totalMin + monthlyWage;

            //Total for medium
            totalMedium = totalMedium + (mediumP / 100) * totalMedium;
            midi.push(parseFloat(totalMedium.toFixed(2)));
            totalMedium = totalMedium + monthlyWage;

            //Total for maximum
            totalMax = totalMax + (highP / 100) * totalMax;
            highi.push(parseFloat(totalMax.toFixed(2)));
            totalMax = totalMax + monthlyWage;
        }

        setAgeArray([])
        for (let i = 0; i < pensionAge + 1; i++) {
            setAgeArray(ageArray => [...ageArray, i])
        }

        setHighRisk(highi);
        setMediumRisk(midi);
        setLowRisk(lowi);

    }, [age, amount, monthly, risk, monthlyWage])

    const labels = ageArray;
    const state = {
        options: {
            chart: {
                height: 500,
                type: 'area',
                fontFamily: 'Poppins',
                toolbar: {
                    show: false,
                    tools: {
                        download: false,
                        selection: false,
                        zoom: false,
                        zoomin: false,
                        zoomout: false,
                        pan: false,
                        reset: false
                    }
                },
            },
            dataLabels: {
                enabled: false
            },

            grid: {
                show: true,
                borderColor: '#90A4AE',
                strokeDashArray: 0,
                position: 'back',
                xaxis: {
                    lines: {
                        show: false
                    }
                },
                yaxis: {
                    lines: {
                        show: false
                    }
                },
                row: {
                    colors: undefined,
                    opacity: 0.5
                },
                column: {
                    colors: undefined,
                    opacity: 0.5
                },
                padding: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                },
            },

            legend: {
                show: true,
                showForSingleSeries: false,
                showForNullSeries: true,
                showForZeroSeries: true,
                position: 'bottom',
                horizontalAlign: 'center',
                floating: false,
                fontSize: '14px',
                fontWeight: 400,
                inverseOrder: false,
                width: undefined,
                height: undefined,
                customLegendItems: [],
                offsetX: 0,
                offsetY: 0,
                labels: {
                    colors: undefined,
                    useSeriesColors: false
                },


                markers: {
                    width: 12,
                    height: 48,
                    strokeWidth: 0,
                    strokeColor: '#fff',
                    fillColors: undefined,
                    radius: 0,
                    customHTML: undefined,
                    onClick: undefined,
                    offsetX: 0,
                    offsetY: 0
                },
                itemMargin: {
                    horizontal: 5,
                    vertical: 0
                },
                onItemClick: {
                    toggleDataSeries: true
                },
                onItemHover: {
                    highlightDataSeries: true
                },
            },
            stroke: {
                curve: 'straight'
            },
            xaxis: {
                type: 'category',
                categories: labels,
                show: false,
            },
            yaxis: {
                show: false,
            },
            colors: ['#272A46', '#208fe0', '#C1272D']
        },
        series: [
            {
                name: "High",
                data: highRisk,
                ticks: {
                    color: 'red'
                }
            },
            {
                name: "Mediunm",
                data: mediumRisk
            },
            {
                name: "High",
                data: lowRisk
            },
        ]
    };
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
                                                <input type="range" step={50} min={100} max={1000} defaultValue={monthly} onChange={(e) => setMonthly(e.target.value)} className="form-range" placeholder='Monthly' />
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 mt-auto">
                                            <div className='pb-3'>
                                                <div>
                                                    <span className='fw-600'>Ich bin {age} Jahre alt</span>

                                                </div>
                                            </div>
                                            <div>
                                                <input type="range" step={1} min={18} max={63} defaultValue={age} onChange={(e) => setAge(e.target.value)} className="form-range" placeholder='Monthly' />
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
                                                <input type="range" step={5000} min={0} max={100000} defaultValue={amount} onChange={(e) => setAmount(e.target.value)} className="form-range" />
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
                                                <input type="range" step={1} min={1} max={3} defaultValue={risk} onChange={(e) => setRisk(e.target.value)} className="form-range" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-5">
                                <Chart
                                    options={state.options}
                                    series={state.series}
                                    type={'area'}
                                    width="100%"
                                    height="500px"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PensionChart