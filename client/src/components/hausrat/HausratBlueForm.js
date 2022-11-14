import React from 'react'
import { useState, useEffect, useRef } from 'react'
import HausratHouse from '../../assets/images/hausratHouse.svg'
import Modal from './Modal';
import NumberFormat from 'react-number-format';

function HausratBlueForm() {

    const [interes, setInteres] = useState(1)
    const [aparatament_price, setApartamentPrice] = useState(0);
    const [yearly_income, setYearlyIncome] = useState(null);
    const [capital, setCapital] = useState(null);

    const [zinsen, setZinsen] = useState(null);
    const [amortisation, setAmortisation] = useState(null);
    const [nebenconsten, setNebenconsten] = useState(null);
    const [montaliche, setMontaliche] = useState(null);

    const [hypothek, setHypothek] = useState(null);
    const [eigenmittei, setEigenmittei] = useState(null);
    const [targbarkeit, setTargbarkeit] = useState(null);
    const [submitTable, setsubmitTable] = useState(false)

    const [error, setError] = useState(false)
    const submitForm = () => {
        setsubmitTable(false)

        if (aparatament_price !== null && capital !== null && yearly_income !== null) {
            let calc_amor = ((((0.333 - (capital / aparatament_price)) * aparatament_price) / 15) / 12);
            let mortgage_1 = 0.6666 * aparatament_price * 0.05;
            let mortgage_2 = 0.1334 * aparatament_price * 0.06;
            let total_interest = mortgage_1 + mortgage_2;
            let other_costs = 0.01 * aparatament_price;
            let tragbarkeit = total_interest + (((0.34 - (capital / aparatament_price)) * aparatament_price) / 15) + other_costs;

            setZinsen((((aparatament_price - capital) * interes / 100) / 12).toFixed(2));
            setAmortisation(calc_amor < 0 ? 0 : calc_amor.toFixed(2));
            setNebenconsten(((0.01 * aparatament_price) / 12).toFixed(2))
            setHypothek(aparatament_price - capital)
            setEigenmittei(((capital / aparatament_price) * 100).toFixed(2))
            setTargbarkeit((tragbarkeit / yearly_income * 100).toFixed(2));
            setsubmitTable(true)
            setError(false)
        }
        else {
            setError(true)
        }
    }
    useEffect(() => {
        setMontaliche(parseFloat(zinsen) + parseFloat(amortisation))

    }, [zinsen, amortisation])

    const [openModal, setopenModal] = useState(false)
    useEffect(() => {
        if (openModal === true) {
            document.body.style.overflowY = "hidden"
        }
        else {
            document.body.style.overflowY = "auto"
        }

    }, [openModal])

    const HausratBlue = useRef()
    useEffect(() => {
        if (submitTable) {
            var elem = HausratBlue
            window.scrollTo(0, elem.current.offsetTop - 100);
        }

    }, [submitTable])

    return (
        <>
            <div className='wrapDiv container-xl px-4 px-xl-0 mx-auto bodyCounterPadding'>
                <div className="col-12 col-md-6 col-lg-6 col-xl-6 mx-auto bodyCounterPadding">
                    <div className='hausratHouseDiv mt-5 mt-md-0 ps-0 ps-md-4' >
                        <img src={HausratHouse} className="img-fluid" alt="" />
                    </div>
                </div>
                <div className="row g-5 justify-content-center">
                    <div className="col-12 col-md-6 col-lg-5 col-xl-4">
                        <div className="hausratWhiteDiv hausratBlueDiv mx-auto mb-4 mb-md-0 text-start">
                            <div className='p-4 p-sm-5'>
                                <div className='pb-4'>
                                    <div className='pb-2'>
                                        <span >Gesamtkaufpreis</span>
                                    </div>
                                    <div>
                                        <NumberFormat placeholder={'12,000'}
                                            onValueChange={(values) => {
                                                const { value } = values;
                                                setApartamentPrice(value)

                                            }}
                                            className='hausratFormInputs_2'
                                            displayType={'input'}
                                            thousandSeparator={true}

                                        />
                                    </div>
                                </div>
                                <div className='pb-4'>
                                    <div className='pb-2'>
                                        <span >Jährliches Einkommen</span>
                                    </div>
                                    <div>
                                        <NumberFormat placeholder={'12,000'}
                                            onValueChange={(values) => {
                                                const { value } = values;
                                                setYearlyIncome(value)
                                            }}
                                            className='hausratFormInputs_2'
                                            displayType={'input'}
                                            thousandSeparator={true}

                                        />

                                    </div>
                                </div>
                                <div className='pb-4'>
                                    <div className='pb-2'>
                                        <span >Eigenkapital</span>
                                    </div>
                                    <div>
                                        <NumberFormat placeholder={'12,000'}

                                            onValueChange={(values) => {
                                                const { value } = values;
                                                setCapital(value)
                                            }}

                                            className='hausratFormInputs_2'
                                            displayType={'input'}
                                            thousandSeparator={true}

                                        />
                                    </div>
                                </div>
                                <div className='pb-4'>
                                    <div className='pb-2'>
                                        <div className="row g-0">
                                            <div className="col">
                                                <span >Angenommener Zinssatz</span>
                                            </div>
                                            <div className="col-auto">
                                                <span>{interes}%</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <input type="range" min={0.4} step={0.05} max={2} onChange={(e) => setInteres(e.target.value)} defaultValue={1} className='hausratRangeInput form-range' />
                                    </div>
                                </div>
                                {error && (
                                    <div className='pb-4 fw-600' style={{ color: '#F6490E' }}>
                                        Bitte füllen Sie alle Eingaben aus, um fortzufahren
                                    </div>
                                )}
                                <div>
                                    <button type="button" className='hausratBtn py-2 w-100' onClick={submitForm} >Berechnung</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 col-xl-8">
                        <div ref={HausratBlue} className="">
                            <div className="blueBorderDiv p-4 text-start">
                                <div className='pb-4'>
                                    <span className="fw-700 fs-3">Kosten im Detail</span>
                                </div>
                                <div className='pb-4'>
                                    <div className="row g-0">
                                        <div className="col">
                                            <div>
                                                <span className='fw-500'>Zinsen</span>
                                            </div>
                                        </div>
                                        <div className="col-auto">
                                            <div>
                                                <span className='fw-500'>CHF <NumberFormat value={zinsen} displayType={'text'} thousandSeparator={true} /></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='pb-4'>
                                    <div className="row g-0">
                                        <div className="col">
                                            <div>
                                                <span className='fw-500'>Amortisation</span>
                                            </div>
                                        </div>
                                        <div className="col-auto">
                                            <div>
                                                <span className='fw-500'>CHF <NumberFormat value={amortisation} displayType={'text'} thousandSeparator={true} /> </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='pb-4'>
                                    <div className="row g-0">
                                        <div className="col">
                                            <div>
                                                <span className='fw-700'>Monatliche Zahlung</span>
                                            </div>
                                        </div>
                                        <div className="col-auto">
                                            <div>
                                                <span className='fw-700'>CHF <NumberFormat value={montaliche} displayType={'text'} thousandSeparator={true} /> </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='pb-5'>
                                    <div className="row g-0">
                                        <div className="col">
                                            <div className='me-1 me-sm-3 me-md-5'>
                                                <span className='fw-500'>Nebenkosten (Kann von Liegenschaft zu Liegenschaft stark variieren, deshalb Rechnen Banken mit ca. 1% des Liegenschaftpreises pro Jahr)</span>
                                            </div>
                                        </div>
                                        <div className="col-auto">
                                            <div>
                                                <span className='fw-500'>CHF <NumberFormat value={nebenconsten} displayType={'text'} thousandSeparator={true} /> </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='pb-4'>
                                    <span className="fw-700 fs-3">Berechnung im Detail</span>
                                </div>
                                <div className='pb-4'>
                                    <div className="row g-0">
                                        <div className="col">
                                            <div>
                                                <span className='fw-500'>Hypothek</span>
                                            </div>
                                        </div>
                                        <div className="col-auto">
                                            <div>
                                                <span className='fw-500'>CHF <NumberFormat value={hypothek} displayType={'text'} thousandSeparator={true} /></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='pb-4'>
                                    <div className="row g-0">
                                        <div className="col">
                                            <div>
                                                <span className='fw-500'>Eigenmittel</span>
                                            </div>
                                        </div>
                                        <div className="col-auto">
                                            <div>
                                                <span className={`fw-500 ${(eigenmittei >= 20) ? 'greenText' : 'redText'}`}>{eigenmittei} %</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='pb-5'>
                                    <div className="row g-0">
                                        <div className="col">
                                            <div>
                                                <span className='fw-500'>Tragbarkeit</span>
                                            </div>
                                        </div>
                                        <div className="col-auto">
                                            <div>
                                                <span className={`fw-500 ${(targbarkeit > 33) ? 'redText' : 'greenText'}`}>{targbarkeit} %</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='text-end'>
                                    <button type='button' onClick={() => { setopenModal(true) }} className='hausratBtn py-2'> Jetzt anfragen</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {openModal && (
                    <Modal openModal={openModal} setopenModal={setopenModal} aparatament_price={aparatament_price} yearly_income={yearly_income} capital={capital} />
                )}
            </div>
        </>
    )
}

export default HausratBlueForm